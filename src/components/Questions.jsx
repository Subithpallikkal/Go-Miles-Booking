import React, { useState, useEffect } from "react"
import clockIcon from "../assets/icons/icons8-clock-48.png"
import { motion, useAnimation } from "framer-motion"
import DateInput from "./DateInput"
import InputField from "./InputField"
import Options from "./Options"
import { useUserData } from "../context/userDataContext"
import AdminPhone from "../assets/constants/AdminPhone"

const Questions = ({
  question: {
    title,
    isInput,
    buttonText,
    logo,
    isDate,
    options,
    selectOnlyOne,
    image,
    isSubmit,
  },
  question,
  page,
  setPage,
}) => {
  const [error, setError] = useState(false)
  const [errorFields, setErrorFields] = useState([])
  const { userData, setUserData } = useUserData() // Access the context
  const controls = useAnimation()
  const [selectedOptions, setSelectedOptions] = useState({}) // Local state to track selected options

  const submitHandler = () => {
    if (isSubmit) {
      console.log("user data", userData)

      const emptyFields = [] // Array to track fields that are empty or invalid
      Object.entries(userData).forEach(([key, value]) => {
        if (!value) {
          emptyFields.push(key) // Add the field name to emptyFields if it is empty
        }
      })

      if (emptyFields.length > 0) {
        setError(true) // Set error state to true if there are empty fields
        return setErrorFields(emptyFields) // Update the errorFields state with the list of empty fields
      } else {
        setError(false) // No errors, proceed with the form submission
      }
      const messageData = `Hello! I hope this message finds you well. My name is  ${
        userData.name
      }, and I am reaching out to share my travel plans. I will be embarking on a trip from  ${
        userData.from
      },expecting to start on  ${userData.date} and lasting for  ${
        userData.dayCount
      } days. I will be traveling with  ${
        userData.companion
      }, and our group consists of  ${
        userData.teamCount
      } individuals. We are interested in a  ${
        userData.tourType
      } tour and would like to know if a guide will be necessary for our journey. Our planned destinations include ${
        userData.wishlist
      }, and we are seeking a  ${userData.luxuryTier} experience with a  ${
        userData.starRating
      } rating. One of our primary focuses for this trip is  ${
        userData.importance
      }, as we consider this very important. Additionally. ${
        userData.message
          ? "I also want to share the message:" + userData.message
          : null
      } . You can reach me via email at ${
        userData.email
      } and my contact number is ${
        userData.number
      }. I discovered your services through ${
        userData.reference
      } and would greatly appreciate your assistance with our travel arrangements.`

      // Encode the message to make it URL-friendly
      const encodedMessage = encodeURIComponent(messageData)

      const url = `https://wa.me/${AdminPhone}?text=${encodedMessage}`
      window.open(url)

      return
    }
    setPage(page + 1)
  }

  // Effect to trigger the animation on page change
  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1 }, // Adjust animation timing as needed
    })
  }, [page, controls])

  // Handler to update selected options and userData context
  const handleOptionChange = (name, value) => {
    // Update selectedOptions (local state)
    setSelectedOptions((prev) => {
      if (prev[name]) {
        if (Array.isArray(prev[name])) {
          // If selectMany, add/remove value from array
          if (prev[name].includes(value)) {
            return { ...prev, [name]: prev[name].filter((v) => v !== value) }
          } else {
            return { ...prev, [name]: [...prev[name], value] }
          }
        } else {
          // If selectOnlyOne, replace with new value
          return { ...prev, [name]: value }
        }
      } else {
        return { ...prev, [name]: value } // New entry
      }
    })

    console.log("user data from select", userData)

    // Update userData context
    setUserData((prevData) => ({
      ...prevData,
      [name]: value, // Store the selected option under the question name in userData
    }))
  }

  return (
    <div className="flex overflow-hidden flex-col max-md:h-full gap-5 w-full">
      <motion.div
        key={page}
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={`h-full w-full flex ${
          image ? "items-start" : "justify-center"
        } flex-col`}
      >
        <h1 className="font-anekTel md:text-2xl text-xl text-theme">{title}</h1>

        {logo && (
          <div className="my-5 h-44 w-44 flex justify-center items-center">
            <img src={logo} className="object-cover object-center" alt="" />
          </div>
        )}

        {isInput && <InputField question={question} />}

        {options?.length > 0 && (
          <Options
            options={options}
            question={question}
            selectedOptions={selectedOptions}
            onOptionChange={handleOptionChange} // Pass the state handler function
          />
        )}

        {isDate && <DateInput question={question} />}
      </motion.div>
      {error && (
        <div className="text-red-400">Fill up every field to continue.</div>
      )}
      <motion.div
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col max-md:mt-auto max-md:flex-col-reverse"
      >
        <button
          tabIndex={1}
          onClick={submitHandler}
          className="bg-orange w-fit py-3 px-7 rounded-md text-white text-xl font-extrabold align-middle max-sm:w-full"
        >
          {buttonText}
        </button>
      </motion.div>
    </div>
  )
}

export default Questions
