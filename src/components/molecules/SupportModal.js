import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PhoneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "../atoms/Button";

export default function SupportModal({ openModal, setOpenModal }) {
  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-[100] font-mono"
        onClose={setOpenModal}
      >
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
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:max-w-lg sm:p-6">
                <div className="absolute top-0 right-0 block pt-4 pr-4">
                  <button
                    type="button"
                    className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-offset-2"
                    onClick={() => setOpenModal(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-5">
                  <div className="flex items-center justify-center flex-shrink-0 bg-[#98c4c2] rounded-full mx-0 h-10 w-10">
                    <PhoneIcon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <p>Send us a message</p>
                </div>
                <form
                  id="form"
                  action="https://formsubmit.co/osujipius7@gmail.com"
                  method="POST"
                  target="hiddenFrame"
                  // onSubmit={handleShow}
                >
                  <input type="hidden" name="_captcha" value="false" />

                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="Name"
                        className="min-w-0 flex-auto w-full rounded-md border bg-white/5 px-3.5 py-2 text-gray-600 ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#317773] sm:text-sm sm:leading-6 border-gray-200"
                        placeholder="Your Name"
                        required="true"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="Email"
                        className="min-w-0 flex-auto w-full rounded-md border bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#317773] sm:text-sm sm:leading-6 border-gray-200"
                        name="Email"
                        placeholder="Your Email"
                        _replyto
                        required="true"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="tel"
                        className="min-w-0 flex-auto w-full rounded-md border bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#317773] sm:text-sm sm:leading-6 border-gray-200"
                        name="Phone Number"
                        placeholder="Phone Number"
                        required="true"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="min-w-0 flex-auto w-full rounded-md border bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#317773] sm:text-sm sm:leading-6 border-gray-200"
                        name="Address"
                        placeholder="Address"
                        required="true"
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="min-w-0 mt-4 flex-auto w-full rounded-md border bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#317773] sm:text-sm sm:leading-6 border-gray-200"
                        name="msg"
                        rows="6"
                        placeholder="Type your message here"
                        required="true"
                      ></textarea>
                    </div>
                    <div className="mt-5 text-center">
                      <Button type="submit" title={"Send"} />
                    </div>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
