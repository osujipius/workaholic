import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import axios from "axios";
import Notification from "../atoms/Notification";

export default function NewsLetter() {
  const [showNotification, setShowNotification] = useState(false);
  const [submittedForm, setSubmittedForm] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: "POST",
        url: `https://a.klaviyo.com/client/subscriptions/?company_id=UkbAfF`,
        headers: {
          revision: "2023-02-22",
          "content-type": "application/json",
        },
        data: {
          data: {
            type: "subscription",
            attributes: {
              list_id: "SbdFd7",
              email: email,
            },
          },
        },
      };

      const response = await axios.request(options);

      if (response.status === 202) {
        setSubmittedForm(true);
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 2500);
        setEmail("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="relative py-16 overflow-hidden font-mono isolate sm:py-24 lg:py-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <form onSubmit={onSubmit}>
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Subscribe to our newsletter.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Welcome to our Job Portal Newsletter! Stay up to date with the
                latest job openings, career advice, and industry news.
              </p>

              <div className="flex items-center max-w-md mt-6 gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-md border bg-white/5 px-3.5 py-2 text-gray-600 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#317773] sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />

                <button
                  type="submit"
                  className="flex-none rounded-md bg-[#317773] px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#317773] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#317773] h-10"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>

          {showNotification && (
            <Notification
              message={"Subscription successfully sent!"}
              show={showNotification}
              setShow={setShowNotification}
            />
          )}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="w-6 h-6 text-[#317773]"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-gray-600">
                Weekly articles
              </dt>
              <dd className="mt-2 leading-7 text-gray-600">
                Looking to enhance your job search skills? Our newsletter offers
                valuable tips and tricks to help you stand out in the
                competitive job market.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="p-2 rounded-md bg-white/5 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="w-6 h-6 text-[#317773]"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-gray-600">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-600">
                No spam, Learn about the top companies hiring in your area.
                Discover their culture, benefits, and job openings.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute top-0 -translate-x-1/2 left-1/2 -z-10 blur-3xl xl:-top-6"
        aria-hidden="true"
      ></div>
    </div>
  );
}
