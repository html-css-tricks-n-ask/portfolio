"use client";

import { formFields } from "../lib/formFieldsData.js";
import { useSelector, useDispatch } from "react-redux";

export default function ContactPage() {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <section
      className={`min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-24
      ${
        mode === "dark"
          ? "bg-gray-950 text-white"
          : "bg-white to-gray-50 text-black"
      }`}
    >
      <div className="text-center max-w-2xl mb-4">
        <h2 className="text-4xl font-bold text-orange-500 uppercase tracking-wide mb-2">
          Contact Us
        </h2>
        <div className="h-1 w-20 mx-auto bg-orange-500 rounded-full mb-4"></div>
        <p
          className={`text-lg ${
            mode === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Feel free to contact me by submitting the form below. I will get back
          to you as soon as possible.
        </p>
      </div>

      {/* Form Container */}
      <div
        className={`w-full max-w-xl p-8 md:p-10 rounded-2xl shadow-xl border
  ${
    mode === "dark"
      ? "bg-gray-900 border-gray-700 text-white"
      : "bg-white border-gray-100 text-black"
  }`}
      >
        <form
          action="https://formsubmit.co/f51d65df0956bbc984477697dddf4420"
          method="POST"
          className="space-y-6"
        >
          {/* Optional hidden fields */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://yourdomain.com/thank-you"
          />

          {formFields.map((field) => (
            <div key={field.name}>
              <label
                className={`block text-sm font-medium mb-2
  ${mode === "dark" ? "text-gray-300" : "text-gray-700"}`}
              >
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  className={`w-full px-4 py-3 rounded-md outline-none resize-none transition border focus:ring-2 focus:ring-orange-500
  ${
    mode === "dark"
      ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400"
      : "bg-gray-100 text-gray-800 border-gray-300 placeholder-gray-500"
  }`}
                  rows="5"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  className={`w-full px-4 py-3 rounded-md outline-none transition border focus:ring-2 focus:ring-orange-500
  ${
    mode === "dark"
      ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400"
      : "bg-gray-100 text-gray-800 border-gray-300 placeholder-gray-500"
  }`}
                />
              )}
            </div>
          ))}
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/thank-you"
          />

          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white font-semibold uppercase rounded-md shadow hover:bg-orange-600 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
