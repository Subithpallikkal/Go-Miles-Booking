// export default Options
const Options = ({ options, question, selectedOptions, onOptionChange }) => {
  const selectedDestination = selectedOptions["destination"]

  const availableOptions = options.filter((option) => {
    if (!question.dependsOn) return true
    if (selectedDestination !== "Turkey") {
      return option.option === "Private tour"
    }
    return true
  })

  return (
    <div
      onWheel={(event) => event.stopPropagation()}
      className={`p-5 grid grid-cols-2 justify-center scroll-my-1 ${
        !options.image && "max-md:grid-cols-2"
      } items-center overflow-y-auto snap-none max-h-[500px] max-lg:gap-6 max-md:grid-cols-3 max-md:gap-3 max-xs:gap-5 max-sm:grid-cols-2 max-sm:gap-3 max-lg:grid-cols-4 lg:max-w-[500px] w-full gap-10 my-10 max-smd:grid-cols-2`}
    >
      {options.map((option, i) => {
        const isSelected = selectedOptions[question.name]?.includes(
          option.option
        ) // Check if the option is selected
        if (option.image) {
          return (
            <div
              key={i}
              className={`group aspect-square shadow-neou rounded-md cursor-pointer ${
                isSelected ? "border-2 border-orange" : ""
              }`} // Highlight selected option
              onClick={() => {
                const value = option.option
                onOptionChange(question.name, value) // Call the onOptionChange prop
              }}
            >
              <div className="aspect-square object-cover object-center aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={option.image}
                  alt={option.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-t"
                />
              </div>
              <h3 className="mt-4 max-sm:mt-2 text-center text-lg font-bold text-theme">
                {option.option}
              </h3>
            </div>
          )
        }

        return (
          <div
            key={i}
            onClick={() => {
              const value = option.option
              onOptionChange(question.name, value) // Call the onOptionChange prop
            }}
            className={`p-10 border rounded-md flex text-white font-bold bg-theme items-center justify-center h-10 ${
              isSelected ? "border-2 border-orange" : ""
            }`} // Highlight selected option
          >
            {option.option}
          </div>
        )
      })}
    </div>
  )
}

export default Options