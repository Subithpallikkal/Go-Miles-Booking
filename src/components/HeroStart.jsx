import React, { useState } from "react"
import clockIcon from "../assets/icons/icons8-clock-48.png"
import { motion } from "framer-motion"

const HeroStart = ({ surveyStarted, setSurveyStarted }) => {
  return (
    <motion.div
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 100 }}
      transition={{ duration: 1 }}
      className="flex flex-col  max-md:h-full "
    >
      <div className="">
        <h1 className="font-AnekTeluguExtraBold font-extrabold md:text-4xl text-3xl text-theme ">
          Turkey Trip Planner
        </h1>
        <h1 className="font-anekTelugu md:text-4xl text-3xl text-theme">
          Go miles
        </h1>
      </div>
      <p className="font-anekTelu md:text-xl md:my-5 my-3 opacity-60 text-theme">
        Share us your travel preferences and interests to create a personalized
        itinerary for your unforgettable trip to Turkey.
      </p>
      <div className="flex flex-col max-md:mt-auto max-md:flex-col-reverse">
        <button
          onClick={() => setSurveyStarted(true)}
          className="bg-theme w-fit py-3 px-7 rounded-md text-white text-xl font-extrabold align-middle max-sm:w-full"
        >
          Start
        </button>
        <div className="mt-3 h-fit flex justify-center items-center w-fit gap-2 max-sm:justify-center max-sm:w-full">
          {/* <img
            width="20"
            height="20"
            color="theme"
            src={clockIcon}
            alt="clock--v2"
          /> */}
          <p className="text-theme pt-1">Takes 3 minutes</p>
        </div>
      </div>
    </motion.div>
  )
}

export default HeroStart
