import React, { useState } from "react"
import { useUserData } from "../context/userDataContext"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/bootstrap.css";

const InputField = ({ question }) => {
  const { userData, setUserData } = useUserData()
  const [phoneNumber,setPhoneNumber] = useState("")

  return (
    <div className="border-b-2 relative w-full my-10">
      {question.name ==="number" && question.isPhone ? (
        <PhoneInput
         country={"IN"}
         value={userData[question.name] || ''}
         onChange={(phoneNumber)=>{setPhoneNumber(phoneNumber)
          // const{country,value} = e.target
          setUserData((prevData)=>({
            ...prevData,
            [question.name]:phoneNumber,
         }))
         }}
         inputClass="h-12 w-full focus:outline-none text-2xl max-sm:text-lg"
         inputProps={{
          name:question.name || "",
          required:true,
          autoFocus:true,
         }}
         />
      ):(

      <input
        value={userData[question.name]}
        name={question.name || ""}
        className=" h-12 w-full focus:outline-none p-0 text-2xl max-sm:text-lg"
        placeholder="Type your message here..."
        onChange={(e) => {
          const { name, value } = e.target // Destructure name and value from the event target
          setUserData((prevData) => ({
            ...prevData,
            [name]: value, // Update the specific field in userData
          }))
        }}
      />
      )}
    </div>
  )
}

export default InputField