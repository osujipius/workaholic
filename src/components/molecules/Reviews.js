import { FadeIn } from "./helperFunctions/FadeIn";

const featuredTestimonial = {
  body: "Amazing pool of opportunities. This platform is amazing, bringing lucrative and worthwhile job positions to your doorstep. Easy to navigate and use",
  author: {
    name: "Osuji Pius",
    handle: "osujipius",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQHHg6MO4CW7jQ/profile-displayphoto-shrink_400_400/0/1686420669258?e=1698883200&v=beta&t=jcEo925gje_4JJBKKgwLTiVY6ZvXpQWX49q1g7VIs0s",
  },
};
const testimonials = [
  [
    [
      {
        body: "Great interface and easy to use. Good for looking for opportunities from to employers or working as a freelancer.",
        author: {
          name: "Okereke Chinweotito",
          handle: "okerekechinweotitor",
          imageUrl:
            "https://www.okereke.dev/static/0547c30639cae5c7a90a20124794832f/af4d5/me.avif",
        },
      },
    ],
    [
      {
        body: "Everyone can go to Workaholic for exactly what they need, no matter what the scope requires. It has changed and revolutionized the job market as we know it.",
        author: {
          name: "Micheal Huhges",
          handle: "michealhuhges",
          imageUrl: "https://avatars.githubusercontent.com/u/3834780?v=4",
        },
      },
    ],
  ],
  [
    [
      {
        body: "Our team’s distribution is its greatest asset. We have a powerful diversity of thought and experience that wouldn’t be possible if we were co-located thanks to workaholic.",
        author: {
          name: "Melina Scott",
          handle: "melinascott",
          imageUrl: "https://avatars.githubusercontent.com/u/6599979?v=4",
        },
      },
    ],
    [
      {
        body: "Workaholic has changed my life for the better. The application runs smoothly to connect job seekers to work without a hitch. Their team is doing an excellent job",
        author: {
          name: "Dennis Chukwunta",
          handle: "dennischukwunta",
          imageUrl: "https://avatars.githubusercontent.com/u/25160953?v=4",
        },
      },
    ],
  ],
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Reviews() {
  return (
    <FadeIn>
      <div className="relative pt-20 pb-20 bg-white isolate">
        <div
          className="absolute inset-x-0 overflow-hidden -translate-y-1/2 top-1/2 -z-10 transform-gpu opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#8cc4c1] to-[#317773]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute inset-x-0 top-0 flex pt-32 overflow-hidden opacity-25 -z-10 transform-gpu blur-3xl sm:pt-40 xl:justify-end"
          aria-hidden="true"
        >
          <div
            className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#8cc4c1] to-[#317773] xl:ml-0 xl:mr-[calc(50%-12rem)]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="mt-2 font-mono text-4xl font-semibold tracking-tight text-gray-900">
              Testimonials
            </h2>
            <h6 className="font-mono text-lg leading-8 text-gray-500">
              We have worked with hundreds of amazing people
            </h6>
          </div>
          <div className="grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 mx-auto mt-16 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="hidden col-span-2 sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex items-center px-6 py-4 border-t gap-x-4 border-gray-900/10">
                <img
                  className="flex-none w-10 h-10 rounded-full bg-gray-50"
                  src={featuredTestimonial.author.imageUrl}
                  alt=""
                />
                <div className="flex-auto">
                  <div className="font-semibold">
                    {featuredTestimonial.author.name}
                  </div>
                  <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
                </div>
                <img
                  className="flex-none w-auto h-10"
                  src={featuredTestimonial.author.logoUrl}
                  alt=""
                />
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div
                key={columnGroupIdx}
                className="space-y-8 xl:contents xl:space-y-0"
              >
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? "xl:row-span-2"
                        : "xl:row-start-1",
                      "space-y-8"
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="p-6 bg-white shadow-lg rounded-2xl ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="flex items-center mt-6 gap-x-4">
                          <img
                            className="object-contain w-10 h-10 rounded-full bg-gray-50"
                            src={testimonial.author.imageUrl}
                            alt=""
                          />
                          <div>
                            <div className="font-semibold">
                              {testimonial.author.name}
                            </div>
                            <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
