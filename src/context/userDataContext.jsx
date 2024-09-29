// src/context/UserDataContext.js
import React, { createContext, useContext, useState } from "react"

const UserDataContext = createContext()

export const useUserData = () => {
  return useContext(UserDataContext)
}

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    name: "",
    date: "",
    dayCount: 0,
    companion: "",
    teamCount: "",
    tourType: "",
    guide: "",
    wishlist: [],
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

  return (
    <UserDataContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserDataContext.Provider>
  )
}
