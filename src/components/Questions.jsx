import React, { useState, useEffect } from "react"
import clockIcon from "../assets/icons/icons8-clock-48.png"
import { motion, useAnimation } from "framer-motion"
import DateInput from "./DateInput"
import InputField from "./InputField"
import Options from "./Options"

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
  },
  page,
}) => {
  const controls = useAnimation()
  console.log(isInput)

  // Effect to trigger the animation on page change
  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1 }, // Adjust animation timing as needed
    })
  }, [page, controls])
  return (
    <div className="flex overflow-hidden flex-col max-md:h-full gap-5 w-full">
      <motion.div
        key={page}
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={`h-full w-full flex  ${
          image ? "items-start" : "justify-center"
        } flex-col`}
      >
        <h1 className="font-anekTel md:text-2xl text-xl text-theme">
          {title.toUpperCase()}
        </h1>
        {/* logo showing condition */}
        {logo && (
          <div className="my-5 h-44 w-44 flex justify-center items-center">
            <img src={logo} className="object-cover object-center" alt="" />
          </div>
        )}
        {/* input checking condition */}
        {isInput && <InputField />}
        {/* option checking condition */}
        {/* <div className="max-h-4/6 w-52 bg-black h-52"></div> */}
        {options?.length && <Options options={options} />}
        {/* Date checking conditin */}
        {isDate && <DateInput />}
      </motion.div>

      <motion.div
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col max-md:mt-auto max-md:flex-col-reverse"
      >
        <button className="bg-orange w-fit py-3 px-7 rounded-md text-white text-xl font-extrabold align-middle max-sm:w-full">
          {buttonText}
        </button>
      </motion.div>
    </div>
  )
}

export default Questions
