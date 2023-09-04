export default function TrustedBy() {
  return (
    <div className="pb-20 font-mono bg-white sm:pb-32">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <h2 className="mb-4 text-4xl font-semibold leading-10 tracking-tight text-gray-900">
          Trusted by
        </h2>
        <p className="mt-6 mb-5 text-base leading-7 text-gray-600">
          Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod
        </p>
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            <div className="p-8 bg-gray-400/5 sm:p-10">
              <img
                className="object-contain w-full max-h-12"
                src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                alt="Transistor"
                width={158}
                height={48}
              />
            </div>
            <div className="p-6 bg-gray-400/5 sm:p-10">
              <img
                className="object-contain w-full max-h-12"
                src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                alt="Reform"
                width={158}
                height={48}
              />
            </div>
            <div className="p-6 bg-gray-400/5 sm:p-10">
              <img
                className="object-contain w-full max-h-12"
                src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                alt="Tuple"
                width={158}
                height={48}
              />
            </div>
            <div className="p-6 bg-gray-400/5 sm:p-10">
              <img
                className="object-contain w-full max-h-12"
                src="https://tailwindui.com/img/logos/158x48/laravel-logo-gray-900.svg"
                alt="Laravel"
                width={158}
                height={48}
              />
            </div>
            <div className="p-6 bg-gray-400/5 sm:p-10">
              <img
                className="object-contain w-full max-h-12"
                src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                alt="SavvyCal"
                width={158}
                height={48}
              />
            </div>
            <div className="p-6 bg-gray-400/5 sm:p-10">
              <img
                className="object-contain w-full max-h-12"
                src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
