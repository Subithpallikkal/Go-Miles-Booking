import React from "react"

const InputField = () => {
  return (
    <div className="underline-input relative w-full my-10">
      <input
        type="text"
        className="h-12 w-full focus:outline-none p-0 text-2xl max-sm:text-lg"
        placeholder="Type your message here..."
      />
    </div>
  )
}

export default InputField
