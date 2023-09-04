import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Button from "../atoms/Button";

export default function SupportModal({ openModal, setOpenModal }) {
  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={setOpenModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setOpenModal(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-5 sm:flex sm:items-start">
                  <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon
                      className="w-6 h-6 text-red-600"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <form
                  id="form"
                  action="https://formsubmit.co/coderjames7@gmail.com"
                  method="POST"
                  target="hiddenFrame"
                  className="php-email-form"
                  //   onSubmit={handleShow}
                >
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="UName"
                        className="min-w-0 flex-auto rounded-md border bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#317773] sm:text-sm sm:leading-6"
                        placeholder="Your Name"
                        required="true"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="Email"
                        className="min-w-0 flex-auto rounded-md border bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#317773] sm:text-sm sm:leading-6"
                        name="Email"
                        placeholder="Your Email"
                        required="true"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="tel"
                        className="min-w-0 flex-auto rounded-md border bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#317773] sm:text-sm sm:leading-6"
                        name="Phone Number"
                        placeholder="Phone Number"
                        required="true"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="min-w-0 flex-auto rounded-md border bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#317773] sm:text-sm sm:leading-6"
                        name="Address"
                        placeholder="Address"
                        required="true"
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="min-w-0 flex-auto w-full rounded-md border bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#317773] sm:text-sm sm:leading-6"
                        name="msg"
                        rows="6"
                        placeholder="Type your message here"
                        required="true"
                      ></textarea>
                    </div>
                    <div className="mt-5 text-center">
                      <Button title={"Send"} />
                    </div>
                  </div>
                </form>
                {/* <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => setOpenModal(false)}
                  >
                    Deactivate
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center w-full px-3 py-2 mt-3 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpenModal(false)}
                  >
                    Cancel
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
