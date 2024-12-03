import { useState, useEffect, useCallback } from "react"
import "./App.css"
import Questions from "./components/Questions"
import HeroStart from "./components/HeroStart"
import SurveyData from "./assets/constants/SurveyData"
import colorLogo from "./assets/logos/logo-name-color.png"
import { motion, useAnimation } from "framer-motion"

function App() {
  const deployURL = import.meta.env.VITE_API_URL

  const formData = {
    name: "",
    planningDate: "",
    dayNightCount: "",
    joiners: "",
    joinersCount: 0,
    tourType: "",
    needGuide: false,
    destinations: [],
    tier: "",
    starRating: "",
    important: "",
    additionalNote: "",
  }

  const [surveyStarted, setSurveyStarted] = useState(false)
  const [page, setPage] = useState(0)
  const [isThrottled, setIsThrottled] = useState(false) // Throttle control state
  const [scrollEnabled, setScrollEnabled] = useState(true) // Scroll control state
  const [userData, setUserData] = useState(formData)

  // Throttled scroll event
  // const handleWheel = useCallback(
  //   (event) => {
  //     if (scrollEnabled && !isThrottled) {
  //       if (event.deltaY > 0) {
  //         // Scrolling down, move to the next page
  //         setPage((prevPage) =>
  //           prevPage < SurveyData.length - 1 ? prevPage + 1 : prevPage
  //         )
  //       } else if (event.deltaY < 0) {
  //         // Scrolling up, move to the previous page
  //         setPage((prevPage) => (prevPage > 0 ? prevPage - 1 : prevPage))
  //       }

  //       // Throttle for a short duration
  //       setIsThrottled(true)
  //       setTimeout(() => {
  //         setIsThrottled(false)
  //       }, 1500) // 800ms delay between scroll events
  //     }
  //   },
  //   [isThrottled, scrollEnabled]
  // )

  // const handleMouseDown = () => {
  //   // Disable scroll when mouse is pressed
  //   setScrollEnabled(false)
  // }

  // const handleMouseUp = () => {
  //   // Enable scroll when mouse is released
  //   setScrollEnabled(true)
  // }

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     setSurveyStarted(true)
  //   }
  // }

  // useEffect(() => {
  //   // Add wheel and mouse event listeners
  //   window.addEventListener("wheel", handleWheel, { passive: false })
  //   window.addEventListener("mousedown", handleMouseDown)
  //   window.addEventListener("mouseup", handleMouseUp)
  //   window.addEventListener("keydown", handleKeyDown)

  //   // Cleanup listeners on component unmount
  //   return () => {
  //     window.removeEventListener("wheel", handleWheel)
  //     window.removeEventListener("mousedown", handleMouseDown)
  //     window.removeEventListener("mouseup", handleMouseUp)
  //     window.removeEventListener("keydown", handleKeyDown)
  //   }
  // }, [handleWheel])

  ////

  return (
    <div className="w-screen flex h-dvh max-lg:flex-col max-lg:h-screen sm:h-[100vh]">
      {!surveyStarted ? (
        <div className="flex items-center justify-center max-lg:w-full w-1/2 max-h-dvh lg:h-full max-md:h-2/6 h-2/6 bg-white">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src={colorLogo}
            alt=""
            className="object-cover w-1/2 h-auto object-center"
          />
        </div>
      ) : (
        SurveyData[page].image && (
          <div className="lg:w-1/2 w-full max-h-dvh lg:h-full max-md:h-2/6 h-2/6 bg-white">
            <img
              src={SurveyData[page].image}
              alt=""
              className="object-cover w-full h-full object-center"
            />
          </div>
        )
      )}
      <div
        className={`layout ${
          SurveyData[page].image
            ? "lg:w-1/2 sm:px-20"
            : "lg:w-full md:px-32 h-full max-lg:h-full"
        }max-h-screen w-full justify-start   flex items-center max-md:h-[100%] max-lg:p-7 max-sm:h-[70vh]  max-lg:py-10  px-10`}
      >
        {surveyStarted ? (
          <Questions
            question={SurveyData[page]}
            page={page}
            setPage={setPage}
          />
        ) : (
          <HeroStart
            surveyStarted={surveyStarted}
            setSurveyStarted={setSurveyStarted}
          />
        )}
      </div>
    </div>
  )
}

export default App