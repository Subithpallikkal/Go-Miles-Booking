import React, { useState, useEffect } from "react"
import clockIcon from "../assets/icons/icons8-clock-48.png"
import { motion, useAnimation } from "framer-motion"
import DateInput from "./DateInput"
import InputField from "./InputField"
import Options from "./Options"
import { useUserData } from "../context/userDataContext"
import AdminPhone from "../assets/constants/AdminPhone"
import axios from "axios"
import spreadSheetId from "../assets/constants/spreadSheetid"

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

  const submitHandler = async () => {
    const emptyFields = [] // Array to track fields that are empty or invalid

    // Validate each required field
    if (isInput) {
      if (!userData[question.name]) {
        emptyFields.push(question.name) // Add the question name to emptyFields if input is empty
      }
    }

    if (isDate) {
      if (!userData[question.name]) {
        emptyFields.push(question.name) // Check if the date field is filled
      }
    }

    if (options?.length > 0) {
      if (!selectedOptions[question.name]) {
        emptyFields.push(question.name) // Check if an option is selected
      }
    }

    // Email and Phone validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Basic email regex
    const phoneRegex = /^[0-9]{10}$/ // Simple phone number regex (10 digits)

    if (userData.email && !emailRegex.test(userData.email)) {
      emptyFields.push("email") // Push to emptyFields if email is invalid
    }

    if (userData.number && !phoneRegex.test(userData.number)) {
      emptyFields.push("number") // Push to emptyFields if phone number is invalid
    }

    // If there are any empty fields or validation errors, show error messages and stop the submission
    if (emptyFields.length > 0) {
      setError(true) // Set error state to true
      setErrorFields(emptyFields) // Update the errorFields state with the list of empty fields

      return // Stop the function here, preventing page change
    } else {
      setError(false) // No errors, proceed with the form submission
    }

    // Handle form submission
    if (isSubmit) {
      const formData = new FormData()

      // Append userData to formData
      for (const key in userData) {
        formData.append(key, userData[key])
      }

      // Append additional fields to formData
      formData.append("enquiryDate", new Date().toLocaleDateString("en-GB"))
      formData.append("spreadSheetId", { spreadSheetId }) // Append spreadsheet ID if necessary

      // Send the formData via Axios (with correct headers)
      let result
      try {
        result = await axios.post(
          "https://script.google.com/macros/s/AKfycbzCjmIl7d_WPPdzxHnzYfWkamq1wYEnBNGJElDlzmak8bQexsrkDEb6zMp-k0MxykXE/exec",
          formData
        )
      } catch (error) {
        console.log("data -------", error.message)
      } finally {
        // Check the result and handle success
        // const data = await result.data
        alert("Form submitted successfully")
        setPage(0) // Reset to the first page after submission
        setUserData({
          name: "",
          date: "",
          dayCount: "",
          companion: "",
          teamCount: "",
          tourType: "",
          guide: "",
          wishlist: "",
          luxuryTier: "",
          starRating: "",
          importance: "",
          message: "",
          email: "",
          number: "",
          from: "",
          city: "",
          reference: "",
        })
        window.location.reload()
      }

      return
    }

    setPage(page + 1) // Proceed to the next page if there are no errors
  }

  useEffect(()=>{
    const handleKeyDown =(event)=>{
      if(event.key === "Enter"){
        event.preventDefault()
        submitHandler()
      }
    }

    window.addEventListener("keydown",handleKeyDown)

    return(()=>{
      window.removeEventListener("keydown",handleKeyDown)
    })
  },[submitHandler])

  // Effect to trigger the animation on page change
  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1 }, // Adjust animation timing as needed
    })
  }, [page, controls])

  // Handler to update selected options and userData context
  // const handleOptionChange = (name, value) => {
  //   // Update selectedOptions (local state)
  //   setSelectedOptions((prev) => {
  //     if (prev[name]) {
  //       if (Array.isArray(prev[name])) {
  //         // If selectMany, add/remove value from array
  //         if (prev[name].includes(value)) {
  //           return { ...prev, [name]: prev[name].filter((v) => v !== value) }
  //         } else {
  //           return { ...prev, [name]: [...prev[name], value] }
  //         }
  //       } else {
  //         // If selectOnlyOne, replace with new value
  //         return { ...prev, [name]: value }
  //       }
  //     } else {
  //       return { ...prev, [name]: value } // New entry
  //     }
  //   })

  //   // Update userData context
  //   setUserData((prevData) => ({
  //     ...prevData,
  //     [name]: value, // Store the selected option under the question name in userData
  //   }))
  // }

  const handleOptionChange = (name, value) => {
    setSelectedOptions((prev) => {
      if (selectOnlyOne) {
        // If selectOnlyOne is true, replace the value
        return { ...prev, [name]: value }
      } else {
        // If selectOnlyOne is false, add/remove the value from the array
        const currentSelections = prev[name] || []
        if (currentSelections.includes(value)) {
          // If the value is already selected, remove it
          return {
            ...prev,
            [name]: currentSelections.filter((v) => v !== value),
          }
        } else {
          // Otherwise, add it to the selections
          return { ...prev, [name]: [...currentSelections, value] }
        }
      }
    })

    // Update userData context
    setUserData((prevData) => {
      if (selectOnlyOne) {
        return { ...prevData, [name]: value } // Store the single selected option
      } else {
        const currentSelections = prevData[name] || []
        return {
          ...prevData,
          [name]: currentSelections.includes(value)
            ? currentSelections.filter((v) => v !== value) // Remove if already selected
            : [...currentSelections, value], // Add to selections
        }
      }
    })
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
        <h1 className="font-carmenBold md:text-2xl text-xl text-theme">
          {title}
        </h1>

        {logo && (
          <div className="my-5 h-44 w-44 flex justify-center items-center">
            <img src={logo} className="object-cover object-center" alt="" />
          </div>
        )}

        {isInput && (
          <div>
            <InputField question={question} />
            {error && errorFields.includes(question.name) && (
              <div className="text-red-400">This field is required</div>
            )}
          </div>
        )}

        {options?.length > 0 && (
          <div>
            <Options
              options={options}
              question={question}
              selectedOptions={selectedOptions}
              onOptionChange={handleOptionChange} // Pass the state handler function
            />
            {error && errorFields.includes(question.name) && (
              <div className="text-red-400">Please select an option</div>
            )}
          </div>
        )}

        {isDate && (
          <div>
            <DateInput question={question} />
            {error && errorFields.includes(question.name) && (
              <div className="text-red-400">Please select a date</div>
            )}
          </div>
        )}
      </motion.div>
      <motion.div
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col max-md:mt-auto max-md:flex-col-reverse"
      >
        <button
          tabIndex={1}
          onClick={submitHandler}
          className="bg-orange w-fit py-3 px-7 rounded-full text-white text-xl font-extrabold align-middle max-sm:w-full 
             hover:bg-red-500 hover:shadow-lg active:bg-red-800 active:shadow-inner 
             transition-all duration-300 ease-in-out transform active:scale-95"
        >
          {buttonText}
        </button>
      </motion.div>
    </div>
  )
}

export default Questions
