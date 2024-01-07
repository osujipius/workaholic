import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

export default function DropDown({ name, img, logout }) {
  const navigate = useNavigate();

  function signOut() {
    logout();
    navigate("/");
  }
  return (
    <Popover className="relative pr-2 font-mono font-semibold text-gray-500 sm:pr-10">
      <Popover.Button className="inline-flex items-center text-sm leading-6 outline-none gap-x-1">
        <span className="text-base">Account</span>
        <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 flex w-screen px-4 mt-5 -translate-x-1/2 max-w-min">
          <div className="w-56 p-4 text-sm font-semibold leading-6 text-gray-500 bg-white shadow-lg shrink rounded-xl ring-1 ring-gray-900/5">
            {img && (
              <img
                src={img}
                alt="user-img"
                className="object-contain w-10 h-10 rounded-full"
              />
            )}
            <span>{name}</span>
            <button
              onClick={signOut}
              className="bg-[#317773] text-white rounded-md px-3 py-1"
            >
              Logout
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
