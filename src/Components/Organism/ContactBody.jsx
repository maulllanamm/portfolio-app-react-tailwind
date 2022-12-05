import React from 'react';
import Button from '../Atoms/Button';

export default function ContactBody() {
  return (
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div
          className="p-2 w-1/2"
          data-aos="fade-right"
          data-aos-offset="700"
          data-aos-duration="1000">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-info focus:bg-gray-900 focus:ring-2 focus:ring-info text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div
          className="p-2 w-1/2"
          data-aos="fade-left"
          data-aos-offset="700"
          data-aos-duration="1000">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-info focus:bg-gray-900 focus:ring-2 focus:ring-info text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div
          className="p-2 w-full"
          data-aos="fade-up"
          data-aos-offset="700"
          data-aos-delay="200"
          data-aos-duration="1000">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-info focus:bg-gray-900 focus:ring-2 focus:ring-info h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div
          className="flex p-2 w-full justify-center"
          data-aos="fade-up"
          data-aos-offset="700"
          data-aos-delay="400"
          data-aos-duration="1000">
          <Button title="Contact Me" />
        </div>
      </div>
    </div>
  );
}
