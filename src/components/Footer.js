import React from "react";

const navigation = {
  solutions: [
    { name: "Get Consultation", href: "#" },
   
  ],
  support: [
    { name: "Custom Solutions", href: "#" },
    { name: "Technology & Infrastructure", href: "#" },
    { name: "Data Services", href: "#" },
  
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <h3 className="text-xl font-bold">Reach Us</h3>

            <p><span className="font-bold">Phone No:</span> +91 98765 43210</p>

            <p><span className="font-bold">Email Address:</span> 772 Lyonwood Ave Walnut, CA 91789</p>

            <p><span className="font-bold">Address:</span> 772 Lyonwood Ave Walnut, CA 91789</p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xl font-semibold leading-6 text-white">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-xl font-semibold leading-6 text-white">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid ">
              <div>
              <h3 className="text-xl text-right font-semibold leading-6 text-white">
                  About Us
                </h3>
               <p className="mt-6 text-right">Curabitur ut leo odio. Curabitur quam sapien, euismod fermentum turpis eget, dictum luctus ex. Vestibulum eget urna id ipsum faucibus auctor. Pellentesque</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white pt-8 flex justify-between items-center sm:mt-20 lg:mt-24">
          <p className="">
          Opmantek 2022. All rights reserved
          </p>
          <p>
          Terms & Privacy
          </p>
        </div>
      </div>
    </footer>
  );
}
