import { useCallback, useState } from "react";
import AvatarUpload from "../components/molecules/AvatarUpload";
import { useUser } from "../contexts/UserContext";

export default function ProfilePage() {
  const { user } = useUser();
  const [avatarUrl, setAvatarUrl] = useState("");
  console.log(user);

  const handleSuccessfulUpload = useCallback(
    (url) => {
      setAvatarUrl(url);
    },
    [setAvatarUrl]
  );

  const removeImage = () => {
    setAvatarUrl("");
  };

  return (
    <>
      <div className="max-w-3xl px-4 py-10 mx-auto font-mono tracking-tight sm:px-6 lg:px-8 lg:py-12">
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">
          Account
        </h1>

        <form className="mt-6 space-y-8 divide-y divide-y-slate-200">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
            <div className="sm:col-span-6">
              <h2 className="text-xl font-medium text-slate-900">Profile</h2>
              <p className="mt-1 text-sm text-slate-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Username
              </label>
              <div className="flex mt-2 rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 bg-white border border-r-0 rounded-l-md border-slate-300 text-slate-500 sm:text-sm">
                  workcation.com/
                </span>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  defaultValue="lisamarie"
                  className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 py-1.5 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-6">
              <AvatarUpload
                onSuccessfulUpload={handleSuccessfulUpload}
                removeImage={removeImage}
                url={user?.user_metadata?.avatar_url}
              />
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm text-slate-500">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>

            <div className="sm:col-span-6">
              <label
                htmlFor="url"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                URL
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 pt-8 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
            <div className="sm:col-span-6">
              <h2 className="text-xl font-medium text-slate-900">
                Personal Information
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="email-address"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Email address
              </label>
              <input
                type="text"
                name="email-address"
                id="email-address"
                autoComplete="email"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Phone number
              </label>
              <input
                type="text"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              >
                <option />
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="language"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Language
              </label>
              <input
                type="text"
                name="language"
                id="language"
                className="mt-2 block w-full rounded-md border-0 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
              />
            </div>

            <p className="text-sm text-slate-500 sm:col-span-6">
              This account was created on{" "}
              <time dateTime="2017-01-05T20:35:40">
                January 5, 2017, 8:35:40 PM
              </time>
              .
            </p>
          </div>

          <div className="flex justify-end pt-8 gap-x-3">
            <button
              type="button"
              className="px-3 py-2 text-sm font-semibold bg-white rounded-md shadow-sm text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
