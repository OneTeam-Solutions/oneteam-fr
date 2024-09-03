"use client";
import { useForm, ValidationError } from '@formspree/react';
import { useTheme } from "next-themes";
import { Icon } from '@iconify/react';
import Link from 'next/link';

const ContactForm = () => {
  const { theme } = useTheme();
  const [state, handleSubmit] = useForm("mblrbdlg");

  return (
    <div className="flex max-sm:flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-2/3 relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
        <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
          Contact Us
        </h3>
        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-yellow dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-[#253D40x] dark:focus:shadow-none"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500"
          />
          <textarea
            id="message"
            name="message"
            placeholder="Type your message"
            required
            className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-yellow dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-[#253D40x] dark:focus:shadow-none"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500"
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-yellow px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-[#2C303B] dark:shadow-submit-dark"
          >
            Send
          </button>
          {state.succeeded && (
            <div className="text-sm text-green-600 bg-green-100 p-2 rounded-md mb-4">
              Thank you! Your message has been successfully sent.
            </div>
          )}
          {state.submitting && <p>Sending...</p>}
        </form>
        <div className="flex items-center text-base leading-relaxed text-body-color dark:text-body-color-dark">
          <span className="flex items-center">
            <Icon icon="fluent:mail-28-regular" width="1.2rem" height="1.2rem" className="text-blue-500 mr-2" />
            <span>: info@oneteam-ch.com</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center max-sm:hidden justify-center">
        <div className="w-px h-32 bg-gray-300 dark:bg-gray-700"></div>
        <div className="my-4 text-xl font-bold text-gray-500 dark:text-gray-400">OR</div>
        <div className="w-px h-32 bg-gray-300 dark:bg-gray-700"></div>
      </div>
      <div className="w-full md:w-2/3 relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
        <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
          Make an Appointment
        </h3>
        <div className="flex flex-col items-center justify-center h-full">
          <p className="mb-6 text-center text-base leading-relaxed text-body-color dark:text-body-color-dark">
            Schedule a meeting with our team at your convenience.
          </p>
          <a target="_blank" href="https://outlook.office.com/bookwithme/user/d0510d74388a4aa7907f57973aa5d696@oneteam-ch.com?anonymous&ep=plink">
            <button className="w-full cursor-pointer rounded-sm bg-yellow px-9 py-4 text-base font-medium text-white shadow-submit duration-100 hover:bg-[#2C303B] dark:shadow-submit-dark">
              Take Appointment
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
