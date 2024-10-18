import React, { useState, useEffect } from "react"
import { useUserData } from "../context/userDataContext"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ question }) => {
  const { userData, setUserData } = useUserData() // Access context state
  // const [day, setDay] = useState("")
  // const [month, setMonth] = useState("")
  // const [year, setYear] = useState("")
  const [startDate,setStartDate] = React.useState(null)

  // Effect to concatenate day, month, and year into a single date string
  useEffect(() => {

    if(startDate){
      const formattedDate = startDate.toLocaleDateString("en-GB")
      setUserData((prevData)=>({
        ...prevData,
        [question.name]:formattedDate,
      }))
    }


    // if (day && month && year) {
    //   const formattedDate = `${day.padStart(2, "0")}/${month.padStart(
    //     2,
    //     "0"
    //   )}/${year}`
    //   setUserData((prevData) => ({
    //     ...prevData,
    //     [question.name]: formattedDate, // Store the concatenated date in the userData state
    //   }))
    // }
  }, [startDate, question.name, setUserData])

  return (
    <div className="flex flex-col items-center my-10">
      <label className="text-lg text-black">Select Date</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)} // Update state with selected date
        dateFormat="dd/MM/yyyy" // Date format to display
        className="border-b text-lg border-gray-400 w-40 text-center text-gray-400 focus:outline-none"
        placeholderText="DD / MM / YYYY"
        showPopperArrow={false}
        popperClassName="custom-datepicker-popper"
      />
    </div>


    // <div className="flex items-center justify-between space-x-2 my-10">
    //   {/* Day Input */}
    //   <div className="flex flex-col items-center">
    //     <label className="text-lg text-black">Day</label>
    //     <input
    //       type="number"
    //       max="31"
    //       placeholder="DD"
    //       value={day}
    //       onChange={(e) => setDay(e.target.value)}
    //       className="border-b text-lg border-gray-400 w-12 text-center text-gray-400 focus:outline-none"
    //     />
    //   </div>

    //   <span className="text-xl mt-auto text-black">/</span>

    //   {/* Month Input */}
    //   <div className="flex flex-col items-center">
    //     <label className="text-lg text-black">Month</label>
    //     <input
    //       type="number"
    //       max="12"
    //       placeholder="MM"
    //       value={month}
    //       onChange={(e) => setMonth(e.target.value)}
    //       className="border-b text-lg border-gray-400 w-12 text-center text-gray-400 focus:outline-none"
    //     />
    //   </div>

    //   <span className="text-xl mt-auto text-black">/</span>

    //   {/* Year Input */}
    //   <div className="flex flex-col items-center">
    //     <label className="text-lg text-black">Year</label>
    //     <input
    //       type="number"
    //       max="9999"
    //       min="2024"
    //       placeholder="YYYY"
    //       value={year}
    //       onChange={(e) => setYear(e.target.value)}
    //       className="border-b text-lg border-gray-400 w-16 text-center text-gray-400 focus:outline-none"
    //     />
    //   </div>
    // </div>
  )
}

export default DateInput
