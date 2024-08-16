"use client";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import ModalVideo from "react-modal-video";

// Liste des vidéos avec leurs ID YouTube et miniatures
const videos = [
  {
    id: 1,
    videoId: "4vFmx87CR1s", // YouTube ID de la vidéo
    thumbnail: "/images/video/ot-alex.webp", // Chemin de l'image miniature
    title: "Découvrez One Team avec Alexandre, Chef de projet IT Retail",
  },
  {
    id: 2,
    videoId: "njnbOPO5ujk",
    thumbnail: "/images/video/ot-manon.webp",
    title: "Découvrez One Team avec Manon, Chef de projet IT Retail",
  },
  {
    id: 3,
    videoId: "zvW0Cggx_8c",
    thumbnail: "/images/video/ot-xavier.webp",
    title: "Découvrez One Team avec Xavier, Responsable du support informatique",
  },
];

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openModal = (videoId: string) => {
    setSelectedVideo(videoId);
    setOpen(true);
  };

  return (
    <section id="meet-the-team" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Meet the Team"
          paragraph="Découvrez les membres de l'équipe One Team et leur rôle à travers ces vidéos."
          center
          mb="80px"
        />

        <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video) => (
            <div key={video.id} className="w-full px-4 mb-8">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
                <div className="relative aspect-[16/9] items-center justify-center">
                  {/* Image miniature de la vidéo */}
                  <div className="aspect-w-16 aspect-h-9">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                    <button
                      aria-label={`Ouvrir la vidéo ${video.title}`}
                      onClick={() => openModal(video.videoId)}
                      className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-[#F29D35] transition hover:bg-opacity-100"
                    >
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        className="fill-[#F29D35]"
                      >
                        <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal vidéo */}
      {selectedVideo && (
        <ModalVideo
          channel="youtube"
          autoplay={true}
          isOpen={isOpen}
          videoId={selectedVideo}
          onClose={() => setOpen(false)}
        />
      )}

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;

