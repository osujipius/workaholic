import { CheckIcon } from "@heroicons/react/20/solid";
import { FadeIn } from "./helperFunctions/FadeIn";
import { PaystackButton } from "react-paystack";
import Button from "../atoms/Button";

const includedFeatures = [
  "Interview prep",
  "Resume & Cover letter Review",
  "Entry to annual conference",
  "Private forum access",
];

export default function Pricing({ componentProps, user, triggerAlert }) {
  return (
    <FadeIn>
      <div className="py-20 bg-white" id="pricing">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto sm:text-center">
            <h2 className="font-mono text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple no-tricks pricing
            </h2>
            <p className="mt-6 font-mono leading-8 text-gray-600">
              Investing in your career has never been this easy.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="font-mono text-2xl font-bold tracking-tight text-gray-900">
                Lifetime membership
              </h3>
              <p className="mt-6 font-mono text-base leading-7 text-gray-600">
                Buy once, use forever. No monthly subscription you'll forget to
                cancel.
              </p>
              <div className="flex items-center mt-10 gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-[#317773] font-mono">
                  What’s included
                </h4>
                <div className="flex-auto h-px bg-gray-100" />
              </div>
              <ul className="grid grid-cols-1 gap-4 mt-8 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex font-mono gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-[#317773]"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="py-10 text-center rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="max-w-xs px-8 mx-auto">
                  <p className="font-mono text-base font-semibold text-gray-600">
                    Pay once, own it forever
                  </p>
                  <p className="flex items-baseline justify-center mt-6 gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      ₦1500
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      NGN
                    </span>
                  </p>
                  {user ? (
                    <PaystackButton
                      {...componentProps}
                      className="bg-[#317773] text-white text-base md:text-lg font-semibold px-8 py-2 shadow-[3px_3px_0_black] hover:shadow-[1px_1px_0_black] hover:translate-x-[3px] hover:translate-y-[3px] transition-all font-mono"
                    />
                  ) : (
                    <Button title={"Get access"} onClick={triggerAlert} />
                  )}

                  <p className="mt-6 font-mono text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
