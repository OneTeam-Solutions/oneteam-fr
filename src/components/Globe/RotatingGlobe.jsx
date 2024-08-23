"use client";

import { useLayoutEffect, useRef } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const RotatingGlobe = () => {
    const chartDiv = useRef(null);
    useLayoutEffect(() => {
        let root = am5.Root.new(chartDiv.current);
        root.setThemes([am5themes_Animated.new(root)]);

        let idsToHighlight = ["FR", "US", "MA", "EH", "SG", "CN", "CH"];
        let labelData = [
            { id: "FR", latitude: 46.2276, longitude: 2.2137, name: "France" },
            { id: "US", latitude: 37.0902, longitude: -95.7129, name: "United States" },
            { id: "MA", latitude: 31.7917, longitude: -7.0926, name: "Morocco" },
            { id: "EH", latitude: 24.2155, longitude: -12.8858, name: "Western Sahara" },
            { id: "SG", latitude: 1.3521, longitude: 103.8198, name: "Singapore" },
            { id: "CN", latitude: 35.8617, longitude: 104.1954, name: "China" },
            { id: "CH", latitude: 46.8182, longitude: 8.2275, name: "Switzerland" }
        ]

        am5geodata_worldLow.features = am5geodata_worldLow.features.map(feature => {
            if (feature.properties.name === "Western Sahara") {
                feature.properties.name = "Morocco";
            }
            return feature;
        });

        let chart = root.container.children.push(am5map.MapChart.new(root, {
            panX: "rotateX",
            panY: "rotateY",
            projection: am5map.geoOrthographic(),
            paddingBottom: 0,
            paddingTop: 0,
            paddingLeft: 0,
            paddingRight: 0
        }));

        let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldLow
        }));

        polygonSeries.mapPolygons.template.setAll({
            // tooltipText: "{name}",
            toggleKey: "active",
            interactive: false,
            fill: am5.color("#282A36"),
        });

        polygonSeries.mapPolygons.template.states.create("hover", {
            fill: root.interfaceColors.get("primaryButtonHover")
        });

        let backgroundSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {}));
        backgroundSeries.mapPolygons.template.setAll({
            fill: root.interfaceColors.get("alternativeBackground"),
            fillOpacity: 0.1,
            strokeOpacity: 0
        });

        backgroundSeries.data.push({
            geometry: am5map.getGeoRectangle(90, 180, -90, -180)
        });

        let graticuleSeries = chart.series.push(am5map.GraticuleSeries.new(root, {}));
        graticuleSeries.mapLines.template.setAll({ strokeOpacity: 0.1, stroke: root.interfaceColors.get("alternativeBackground") });

        polygonSeries.mapPolygons.template.states.create("hover", { fill: am5.color("#F29D35") });

        polygonSeries.events.once("datavalidated", function () {
            polygonSeries.dataItems.forEach(function (dataItem) {
                const id = dataItem.dataContext.id || dataItem.dataContext.properties.id;
                let polygon = dataItem.get("mapPolygon");
                if (idsToHighlight.includes(id)) {
                    polygon.setAll({
                        tooltipText: "{name}",
                        fill: am5.color("#F29D35")
                    });
                    // polygon.states.applyAnimate("hover");
                    polygon.events.on("click", function () {
                        window.open(`https://www.google.com/search?q=${dataItem.dataContext.name}`, "_blank");
                    });
                } else {
                    polygon.interactive = false;
                }
            });
        });

        let labelSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
        labelSeries.bullets.push(function () {
            return am5.Bullet.new(root, {
                sprite: am5.Label.new(root, {
                    centerY: am5.p50,
                    centerX: am5.p50,
                    text: "{name}"
                })
            });
        });

        let highlightData = polygonSeries.dataItems
            .filter(dataItem => idsToHighlight.includes(dataItem.dataContext.id || dataItem.dataContext.properties.id))
            .map(dataItem => ({
                name: dataItem.dataContext.name,
                latitude: dataItem.dataContext.geometry.coordinates[1],
                longitude: dataItem.dataContext.geometry.coordinates[0]
            }));

        labelSeries.data.setAll(highlightData);

        chart.animate({
            key: "rotationX",
            from: 0,
            to: 360,
            duration: 30000,
            loops: Infinity
        });

        chart.appear(1000, 100);

        return () => {
            root.dispose();
        };
    }, []);

    return <div className='flex justify-center  mb-10 cursor hover:cursor-pointer mx-64' id="chartdiv" ref={chartDiv} style={{ height: "50vh" }}></div>;
};

export default RotatingGlobe;