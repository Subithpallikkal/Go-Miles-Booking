import calendar from "../vectors/illustration-calendar-icon.png"
import travelCompanion from "../vectors/ethnic-friendship-concept-illustration.png"
import mapLogo from "../vectors/Map-light.jpg"

const questions = [
  {
    name: "name",
    title: "What's your first name ?",
    isInput: true,
    buttonText: "OK",
    image:
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: `Hi,

Thank you for reaching out to Gomiles International! Whether you're dreaming of breathtaking landscapes, immersing yourself in vibrant cultures, or embarking on unforgettable adventures, we are here to help you create your ideal travel experience. From the tranquil beaches to the majestic mountains, and the rich historical sites to the bustling cities, we have the perfect solutions to meet your travel desires. Let's begin planning your next journey together!`,
    buttonText: "Start",
  },
  {
    title: `Journey date and duration`,
    buttonText: "Continue",
    logo: calendar,
  },
  {
    name: "date",
    title: `When do you plan on traveling to Turkey?`,
    isDate: true,
    buttonText: "OK",
    image:
      "https://images.unsplash.com/photo-1505783638529-f3fdc62e1bb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "dayCount",
    title: `How many days are you planning for your trip?`,
    isInput: true,
    buttonText: "OK",
    image:
      "https://images.unsplash.com/photo-1652102627171-0cc3c2c35916?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Travel companion",
    logo: travelCompanion,
    buttonText: "Continue",
  },
  {
    name: "companion",
    title: `Who will be joining with you in this trip ?`,
    options: [
      {
        image:
          "https://plus.unsplash.com/premium_photo-1674539250113-156c53fef54b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Myself",
      },
      {
        image:
          "https://images.unsplash.com/photo-1623557415599-b1c648cedc07?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Partner",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1682390303252-4e1e31e692e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Bachelor",
      },
      {
        image:
          "https://images.unsplash.com/photo-1638202948587-ac48463ddb1f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Family",
      },
    ],
    selectOnlyOne: true,
    image:
      "https://images.unsplash.com/photo-1523225918988-00624e6d8fee?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "OK",
  },
  {
    name: "teamCount",
    title: `If you are not alone, how many people are in your group?`,
    image:
      "https://images.unsplash.com/photo-1518414922567-9da8c8461366?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isInput: true,
    buttonText: "OK",
  },
  {
    name: "tourType",
    title: `Would you prefer a private or group tour?`,
    options: [
      {
        image:
          "https://images.unsplash.com/photo-1520069853334-85e555651e6f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Group tour",
      },
      {
        image:
          "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Private tour",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1663574629292-a8e240a2a3df?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    selectOnlyOne: true,
    buttonText: "OK",
  },
  {
    name: "guide",
    title: "Would you like to have a guide for your tour ?",
    options: [{ option: "Yes" }, { option: "No" }],
    image:
      "https://images.unsplash.com/photo-1505778276668-26b3ff7af103?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    selectOnlyOne: true,
    buttonText: "OK",
  },
  {
    title: "Places and accomodation",
    logo: mapLogo,
    buttonText: "CONTINUE",
  },
  {
    name: "wishlist",
    title: `Which are the places you would like to visit?`,
    selectOnlyOne: false,
    image:
      "https://images.unsplash.com/photo-1595846415458-404defd93fb6?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    options: [
      {
        image:
          "https://images.unsplash.com/photo-1518414922567-9da8c8461366?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Istanbul",
      },
      {
        image:
          "https://images.unsplash.com/photo-1716245290832-9856ba0485e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Cappadocia",
      },
      {
        image:
          "https://images.unsplash.com/photo-1664376205509-9a183789ef6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Fethiye",
      },
      {
        image:
          "https://images.unsplash.com/photo-1711712667984-5b9b291272c0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Antalya",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1661936697264-84cc3925cf5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Pamukkale",
      },
      {
        image:
          "https://images.unsplash.com/photo-1526146938025-8cf2d310a92a?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Bursa",
      },
      {
        image:
          "https://images.unsplash.com/photo-1716662305562-7ed0e5deb323?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Konya",
      },
      {
        image:
          "https://images.unsplash.com/photo-1655447083546-0d7146b03c10?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Sapanca",
      },
      {
        image:
          "https://images.unsplash.com/photo-1605793987467-9cc4171f8287?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Trabzon",
      },
      {
        image:
          "https://images.unsplash.com/photo-1627551730848-4e77d698244c?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Rize",
      },
    ],
    buttonText: "OK",
  },
  {
    name: "luxuryTier",
    title: "At what level would you like to experience Turkey?",
    options: [
      { option: "Luxury" },
      { option: "Standard" },
      { option: "Economy" },
    ],
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    selectOnlyOne: true,
    buttonText: "OK",
  },
  {
    name: "starRating",
    title: "What type of accomodation would you prefer?",
    selectOnlyOne: true,
    options: [{ option: "5 Star" }, { option: "4 Star" }, { option: "3 Star" }],
    image:
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "OK",
  },
  {
    name: "importance",
    title: "What is most important for you in this trip?",
    selectOnlyOne: true,
    options: [
      { image: "", option: "Adventure activities" },
      { image: "", option: "Relaxation and leisure" },
      { image: "", option: "Culture & History" },
      { image: "", option: "Luxury travel" },
      { image: "", option: "Family-friendly activities" },
    ],
    image:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "OK",
  },
  {
    name: "message",
    title: "Do you have any special requests or notes for us?",
    image:
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isInput: true,
    buttonText: "OK",
  },
  {
    name: "email",
    title: "What's your email address ?",
    image:
      "https://images.unsplash.com/photo-1633360821222-7e8df83639fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isInput: true,
    isEmail: true,
    buttonText: "OK",
  },
  {
    name: "number",
    title: "Please share your contact number",
    image:
      "https://images.unsplash.com/photo-1633360821222-7e8df83639fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isInput: true,
    isPhone: true,
    buttonText: "OK",
  },
  {
    name: "from",
    title: "Where are you travelling from ?",
    image:
      "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isInput: true,
    isPhone: true,
    buttonText: "OK",
  },
  {
    name: "city",
    title: "Which city are you from ?",
    image:
      "https://images.unsplash.com/photo-1566935843973-aed0ddcb0ecc?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isInput: true,
    buttonText: "OK",
  },
  {
    name: "reference",
    title: "How did you know go miles ?",
    image:
      "https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    options: [
      { image: "", option: "Social Media" },
      { image: "", option: "Website" },
      { image: "", option: "Friend" },
      { image: "", option: "Others" },
    ],
    isSubmit: true,
    buttonText: "Submit",
  },
]

export default questions
