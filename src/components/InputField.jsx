import React from "react"
import { useUserData } from "../context/userDataContext"

const InputField = ({ question }) => {
  const { userData, setUserData } = useUserData()

  return (
    <div className="underline-input relative w-full my-10">
      <input
        value={userData[question.name]}
        name={question.name || ""}
        className="h-12 w-full focus:outline-none p-0 text-2xl max-sm:text-lg"
        placeholder="Type your message here..."
        onChange={(e) => {
          const { name, value } = e.target // Destructure name and value from the event target
          setUserData((prevData) => ({
            ...prevData,
            [name]: value, // Update the specific field in userData
          }))
        }}
      />
    </div>
  )
}

export default InputField
