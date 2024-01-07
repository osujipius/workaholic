import { useEffect, useState } from "react";
import {
  BriefcaseIcon,
  DocumentCheckIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Badge from "../components/atoms/Badge";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const actions = [
  {
    title: "Find jobs",
    href: "#",
    icon: BriefcaseIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50",
  },
  {
    title: "Resume/CV review",
    href: "#",
    icon: DocumentCheckIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50",
    comingSoon: true,
  },
  {
    title: "Schedule a one-on-one",
    href: "#",
    icon: UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50",
    comingSoon: true,
  },
  {
    title: "Feedback report",
    href: "#",
    icon: ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50",
    comingSoon: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GetStarted() {
  const { user } = useAuth();
  const [transValue, setTransValue] = useState("");

  useEffect(() => {
    const trans = localStorage.getItem("trans");
    if (trans) {
      setTransValue(trans);
    } else {
      setTransValue("");
    }
    console.log(transValue);
  }, [transValue]);

  console.log(transValue);

  return (
    <div className="flex items-center justify-center min-h-screen py-20 font-mono">
      <div className="overflow-hidden bg-gray-200 divide-y divide-gray-200 rounded-lg shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0 max-w-[850px] w-11/12 pt-1">
        {actions.map((action) => (
          <div
            key={action.title}
            className={classNames(
              "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  "inline-flex rounded-lg p-3 ring-4 ring-white"
                )}
              >
                <action.icon className="w-6 h-6" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-8">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                <Link
                  to={
                    action.comingSoon
                      ? user !== null && transValue
                        ? action.href
                        : "/#pricing"
                      : action.href
                  }
                  className="focus:outline-none"
                >
                  {/* Extend touch target to entire panel */}
                  <span className="absolute inset-0" aria-hidden="true" />
                  {action.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Doloribus dolores nostrum quia qui natus officia quod et
                dolorem. Sit repellendus qui ut at blanditiis et quo et
                molestiae.
              </p>
            </div>
            <span
              className="absolute text-gray-300 pointer-events-none right-6 top-6 group-hover:text-gray-400"
              aria-hidden="true"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
              </svg>
            </span>
            {action.comingSoon && (
              <Badge
                title={
                  user !== null && transValue
                    ? "Coming soon"
                    : "Subscribe to pro"
                }
                className="right-0 ml-1 -top-1"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
