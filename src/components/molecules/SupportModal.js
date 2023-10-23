import { Fragment } from "react";
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
                    <div>
                      <label
                        htmlFor="name"
                        className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                      >
                        Name
                      </label>
                      <div className="mb-2">
                        <input
                          type="name"
                          name="name"
                          id="name"
                          className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                          placeholder="John doe"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mb-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="block w-full rounded-md pl-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="phone-number"
                        className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone Number (Optional)
                      </label>
                      <div className="relative mb-2 rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                          <label htmlFor="country" className="sr-only">
                            Country
                          </label>
                          <select
                            id="country"
                            name="country"
                            autoComplete="country"
                            className="h-full py-0 pl-3 text-gray-500 bg-transparent border-0 rounded-md outline-none pr-7 sm:text-sm"
                          >
                            <option>US</option>
                            <option>CA</option>
                            <option>EU</option>
                          </select>
                        </div>
                        <input
                          type="text"
                          name="phone-number"
                          id="phone-number"
                          className="block w-full rounded-md border-0 py-1.5 pl-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                          placeholder="+1 (555) 987-6543"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                      >
                        Address (Optional)
                      </label>
                      <div className="mb-2">
                        <input
                          type="address"
                          name="address"
                          id="address"
                          className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none sm:text-sm sm:leading-6"
                          placeholder="12 New york street"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="comment"
                        className="block mt-2 text-sm font-medium leading-6 text-gray-900"
                      >
                        Add your comment
                      </label>
                      <div className="mb-2">
                        <textarea
                          rows={5}
                          name="comment"
                          id="comment"
                          className="block w-full w-ful p-2 rounded-md border-0 py-1.5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
                          defaultValue={""}
                          required
                        />
                      </div>
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
