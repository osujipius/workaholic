import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { FadeIn } from "./helperFunctions/FadeIn";

const faqs = [
  {
    question: "Is searching for a job online the best job search method?",
    answer:
      "In today’s job market, the internet is a core tool because the world has evolved and anyone you may need to connect with is available online. Yes, searching for a job online is a great job search strategy that is most useful when combined with other job search methods.",
  },
  {
    question: "Do I need a good CV to land a job?",
    answer:
      "Yes, Having a CV is the only way you can be noticed by employers. If you do not have a CV how would employers know that you have the skills and the ability to do the job? Of course, you cannot go around telling employers that you are a good fit without a CV. A good CV will attract employers that will invite you for a job interview, and then who knows you may just land the job. When you create a good CV, you will be on your way to a job interview in no time. In conclusion, a CV highlights why you are the best person for the job.",
  },

  {
    question: "How long will it take me to land a job after graduation?",
    answer:
      "The time it will take you to land a job after graduation is not certain because different factors contribute to how soon it will take you to land a job. The earlier you get the right information and tools to land a job (CV, cover letter) the sooner you land the job.",
  },
];

export default function Faq() {
  return (
    <FadeIn>
      <div className="font-mono bg-white">
        <div className="px-6 py-24 mx-auto max-w-7xl sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
            <h2 className="text-4xl font-semibold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="flex items-center ml-6 h-7">
                            {open ? (
                              <MinusSmallIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="w-6 h-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="pr-12 mt-2">
                        <p className="text-base leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
