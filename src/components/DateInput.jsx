import React, { useState, useEffect } from "react"
import { useUserData } from "../context/userDataContext"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ question }) => {
  const { userData, setUserData } = useUserData()
  const [startDate, setStartDate] = React.useState(null)
  const [days, setDays] = useState("")
  const [nights, setNights] = useState("")

  useEffect(() => {
    if (startDate || days || nights) {
      setUserData((prevData) => ({
        ...prevData,
        [question.name]: {
          date: startDate ? startDate.toLocaleDateString("en-GB") : null,
          days: days,
          nights: nights
        },
      }))
    }
  }, [startDate, days, nights, question.name, setUserData])

  return (
    <div className="flex flex-col items-center space-y-6 my-10">
      <div className="flex flex-col items-center">
        <label className="text-lg text-black">Select Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          className="border-b text-lg border-gray-400 w-40 text-center text-gray-400 focus:outline-none"
          placeholderText="DD / MM / YYYY"
          showPopperArrow={false}
        />
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex flex-col items-center">
          <label className="text-lg text-black">Days</label>
          <input
            type="number"
            min="0"
            placeholder="Days"
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="border-b text-lg border-gray-400 w-20 text-center text-gray-400 focus:outline-none"
          />
        </div>

        <div className="flex flex-col items-center">
          <label className="text-lg text-black">Nights</label>
          <input
            type="number"
            min="0"
            placeholder="Nights"
            value={nights}
            onChange={(e) => setNights(e.target.value)}
            className="border-b text-lg border-gray-400 w-20 text-center text-gray-400 focus:outline-none"
          />
        </div>
      </div>
    </div>
  )
}

export default DateInput