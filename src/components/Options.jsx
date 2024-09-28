import React from "react"

const Options = ({ options }) => {
  return (
    <div
      onWheel={(event) => event.stopPropagation()}
      className={`p-5 grid grid-cols-2 justify-center scroll-my-1 ${
        !options.image && "max-md:grid-cols-2"
      }
            items-center overflow-y-auto snap-none max-h-[500px] max-lg:gap-6 max-md:grid-cols-3
            max-md:gap-3 max-xs:gap-5  max-sm:grid-cols-2 max-sm:gap-3 max-lg:grid-cols-4 lg:max-w-[500px] w-full gap-10 my-10 max-smd:grid-cols-2`}
    >
      {options.map((option, i) => {
        if (!option.image)
          return (
            <div className="border rounded-md bg-theme flex text-white font-bold items-center justify-center h-10">
              {option.option}
            </div>
          )
        return (
          <a
            href="#"
            className="group aspect-square shadow-neou rounded-md"
            key={i}
          >
            <div className="aspect-square object-cover object-center aspect-w-1 w-full overflow-hidden  bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={option.image}
                alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-t
                "
              />
            </div>
            <h3 className="mt-4 max-sm:mt-2 text-center text-lg font-bold  text-theme">
              {option.option}
            </h3>
          </a>
        )
      })}
    </div>
  )
}

{
  /* <div className="bg-white">
  <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 className="font-bold text-xl mb-4">Products</h2>
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 xs:grid-cols-2  xl:gap-x-8">
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$48</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg"
            alt="Olive drab green insulated bottle with flared screw lid and flat top."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg"
            alt="Person using a pen to cross a task off a productivity paper card."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$89</p>
      </a>
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg"
            alt="Hand holding black machined steel mechanical pencil with brass tip and top."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">
          Machined Mechanical Pencil
        </h3>
        <p className="mt-1 text-lg font-medium text-gray-900">$35</p>
      </a>
    </div>
  </div>
</div> */
}

export default Options
