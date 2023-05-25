"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import IconDoubleDown from "@/assets/DoubleDown";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xayklrnj");
  if (state.succeeded) {
    return (
      <div className="wrapper-small my-5">
        <p className="text-primary dark:text-gray-100 mt-8 font-semibold mb-6 text-lg text-center">
          Thanks for getting in touch!
        </p>
      </div>
    );
  }
  return (
    <div className="mt-20">
      <div className="flex justify-center items-center text-base font-semibold text-gray-600 dark:text-gray-300">
        <h2 className="text-center">Get in touch</h2>
        <IconDoubleDown />
      </div>

      <div className="wrapper-small my-5">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-5">
              <label
                htmlFor="fullName"
                className="block mb-2 text-gray-700 dark:text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name"
                required={true}
                className="text-gray-700 dark:text-gray-200 dark:bg-gray-800 dark:border-dark-light block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-primary dark:focus:border-gray-500 mb-2 p-4"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-gray-700 dark:text-gray-200"
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required={true}
                className="text-gray-700 dark:text-gray-200 dark:bg-gray-800 dark:border-dark-light block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-primary dark:focus:border-gray-500 mb-2 p-4"
              />
            </div>
            <div className="w-full px-4 mb-5">
              <label
                htmlFor="Message"
                className="block mb-2 text-gray-700 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                rows={3}
                name="Message"
                placeholder="Enter your message"
                required={true}
                className="text-gray-700 dark:text-gray-200 dark:bg-gray-800 dark:border-dark-light block w-full bg-background-form border border-border-color-primary shadow rounded outline-none focus:border-primary dark:focus:border-gray-500 mb-2 p-4"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <button
              type="submit"
              disabled={state.submitting}
              className="inline-flex shadow text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 border-0 py-3 px-8 focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
