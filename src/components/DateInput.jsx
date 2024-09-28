const DateInput = () => {
  return (
    <div className="flex items-center justify-between space-x-2 my-10">
      {/* Day Input */}
      <div className="flex flex-col items-center">
        <label className="text-lg text-black">Day</label>
        <input
          type="number"
          max="31"
          placeholder="DD"
          className="border-b text-lg border-gray-400 w-12 text-center text-gray-400 focus:outline-none"
        />
      </div>

      <span className="text-xl mt-auto text-black">/</span>

      {/* Month Input */}
      <div className="flex flex-col items-center">
        <label className="text-lg text-black">Month</label>
        <input
          type="number"
          max="12"
          placeholder="MM"
          className="border-b text-lg border-gray-400 w-12 text-center text-gray-400 focus:outline-none"
        />
      </div>

      <span className="text-xl mt-auto text-black">/</span>

      {/* Year Input */}
      <div className="flex flex-col items-center">
        <label className="text-lg text-black">Year</label>
        <input
          type="number"
          max="9999"
          min="2024"
          placeholder="YYYY"
          className="border-b text-lg border-gray-400 w-16 text-center text-gray-400 focus:outline-none"
        />
      </div>
    </div>
  )
}

export default DateInput
