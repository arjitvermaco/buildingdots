import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Banner() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
   
    <div className="mx-auto max-w-7xl px-6  pb-24 sm:pb-32 lg:flex lg:py-10 lg:px-8">
      <div className="mx-auto items-center max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
       

        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
        Be aware with latest technology trends

        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        Our experts love to share knowledge. And it shows! Whether you have a business or technology need, you've come to the right place to find information you can use.
        </p>

      </div>
      <div className="relative flex justify-center lg:col-span-5 lg:-mr-8 pt-10 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className=" h-full"
            src="banner.png"
            alt=""
          />
        </div>
    </div>
  </div>
  )
}
