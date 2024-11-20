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
import { ClipLoader } from "react-spinners"

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
    getOptions, // Add this prop
    dependsOn, // Add this prop
  },
  question,
  page,
  setPage,
}) => {
  const [error, setError] = useState(false)
  const [errorFields, setErrorFields] = useState([])
  const { userData, setUserData } = useUserData()
  const controls = useAnimation()
  const [selectedOptions, setSelectedOptions] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  // Function to get the correct options based on dependencies
  const getCurrentOptions = () => {
    if (question.name === "wishlist" && getOptions) {
      return getOptions(userData.destination);
    }
    return options;
  };

  // Skip tour type for Georgia and Azerbaijan
  const shouldSkipQuestion = () => {
    if (
      question.name === "tourType" && 
      (userData.destination === "Georgia" || userData.destination === "Azerbaijan")
    ) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (shouldSkipQuestion()) {
      setPage(page + 1);
    }
  }, [page, userData.destination]);

  const submitHandler = async (e) => {
    if (shouldSkipQuestion()) {
      setPage(page + 1);
      return;
    }

    const emptyFields = []
    
    if (isInput) {
      if (!userData[question.name]) {
        emptyFields.push(question.name)
      }
    }
    
    if (isDate) {
      if (!userData[question.name]) {
        emptyFields.push(question.name)
      }
    }
    
    if (getCurrentOptions()?.length > 0) {
      if (!selectedOptions[question.name]) {
        emptyFields.push(question.name)
      }
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[0-9]{6,15}$/

    if (userData.email && !emailRegex.test(userData.email)) {
      emptyFields.push("email")
    }

    if (userData.number && !phoneRegex.test(userData.number)) {
      emptyFields.push("number")
    }
    
    if (emptyFields.length > 0) {
      setError(true)
      setErrorFields(emptyFields)
      return
    } else {
      setError(false)
    }
    
    if (isSubmit) {
      e.preventDefault();
      setIsLoading(true)
      const formData = new FormData()

      for (const key in userData) {
        formData.append(key, userData[key])
      }

      formData.append("enquiryDate", new Date().toLocaleDateString("en-GB"))
      formData.append("spreadSheetId", { spreadSheetId })

      try {
        // const result = await axios.post(
        //   "https://script.google.com/macros/s/AKfycbzCjmIl7d_WPPdzxHnzYfWkamq1wYEnBNGJElDlzmak8bQexsrkDEb6zMp-k0MxykXE/exec",
        //   formData
        // )
        alert("Form submitted successfully")
        console.log("form details:",userData)
        setPage(0)
        setUserData({
          name: "",
          date: "",
          // dayCount: "",
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
      } catch (error) {
        // console.log("Error:", error.message)
      } finally {
        setIsLoading(false)
      }
      return
    }

    setPage(page + 1)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        event.preventDefault()
        submitHandler()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [submitHandler])

  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1 },
    })
  }, [page, controls])

  const handleOptionChange = (name, value) => {
    setSelectedOptions((prev) => {
      if (selectOnlyOne) {
        return { ...prev, [name]: value }
      } else {
        const currentSelections = prev[name] || []
        if (currentSelections.includes(value)) {
          return {
            ...prev,
            [name]: currentSelections.filter((v) => v !== value),
          }
        } else {
          return { ...prev, [name]: [...currentSelections, value] }
        }
      }
    })

    setUserData((prevData) => {
      if (selectOnlyOne) {
        return { ...prevData, [name]: value }
      } else {
        const currentSelections = prevData[name] || []
        return {
          ...prevData,
          [name]: currentSelections.includes(value)
            ? currentSelections.filter((v) => v !== value)
            : [...currentSelections, value],
        }
      }
    })
  }

  if (shouldSkipQuestion()) {
    return null;
  }

  // Don't render dependent questions if dependency isn't met
  if (dependsOn && !userData[dependsOn]) {
    return null;
  }

  return (
    <div className="flex overflow-hidden flex-col max-md:h-full gap-5 w-full">
      <motion.div
        key={page}
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={`h-full max-sm:max-h-[80%] max-sm:overflow-y-auto w-full flex ${
          image ? "items-start" : "justify-center"
        } flex-col`}
      >
        <h1 className="font-carmenBold md:text-2xl text-xl text-theme">
          {typeof title === 'function' ? title(userData) : title}
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

        {getCurrentOptions()?.length > 0 && (
          <div>
            <Options
              options={getCurrentOptions()}
              question={question}
              selectedOptions={selectedOptions}
              onOptionChange={handleOptionChange}
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
        className="flex flex-col max-md:mt-auto max-sm:mt-5 max-md:flex-col-reverse"
      >
        <button
          tabIndex={1}
          onClick={submitHandler}
          className="bg-orange w-fit py-3 px-7 rounded-full text-white text-xl font-extrabold align-middle max-sm:w-full 
             hover:bg-red-500 hover:shadow-lg active:bg-red-800 active:shadow-inner 
             transition-all duration-300 ease-in-out transform active:scale-95"
          disabled={isLoading}
        >
          {question.name === "reference" && isLoading ? (
            <ClipLoader color="#fff" size={20}/>
          ) : (
            buttonText
          )}
        </button>
      </motion.div>
    </div>
  )
}

export default Questions