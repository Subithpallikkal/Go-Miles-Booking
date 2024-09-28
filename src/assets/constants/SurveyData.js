import calendar from "../vectors/illustration-calendar-icon.png"
import travelCompanion from "../vectors/ethnic-friendship-concept-illustration.png"
import mapLogo from "../vectors/Map-light.jpg"

const questions = [
  {
    title: "What's your first name ?",
    isInput: true,
    buttonText: "OK",
    image:
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: `Hi _____,
    Thanks for reaching The Road Tales.
    No matter what excites you in Turkey, be it wandering historic streets, exploring bustling markets, indulging in delicious local cuisine, or simply relaxing on stunning beaches, The Road Tales can help make your perfect Turkish trip a reality.
    Lets get started!`,
    buttonText: "Start",
  },
  {
    title: `Journey date and duration`,
    buttonText: "Continue",
    logo: calendar,
  },
  {
    title: `When do you plan on traveling to Turkey?`,
    isDate: true,
    buttonText: "OK",
    image:
      "https://images.unsplash.com/photo-1505783638529-f3fdc62e1bb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
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
    title: `Who will be joining with you in this trip ?`,
    options: [
      {
        image:
          "https://plus.unsplash.com/premium_photo-1674539250113-156c53fef54b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Solo",
      },
      {
        image:
          "https://plus.unsplash.com/premium_photo-1674539250113-156c53fef54b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Solo",
      },
      {
        image:
          "https://images.unsplash.com/photo-1623557415599-b1c648cedc07?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Couple",
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
    title: `If you are not alone, how many people are in your group?`,
    image:
      "https://images.unsplash.com/photo-1518414922567-9da8c8461366?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isInput: true,
    buttonText: "OK",
  },
  {
    title: `Would you prefer a private or group tour?`,
    options: [
      {
        image:
          "https://images.unsplash.com/photo-1518414922567-9da8c8461366?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: '"Group tour"',
      },
      {
        image:
          "https://images.unsplash.com/photo-1518414922567-9da8c8461366?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Private tour",
      },
    ],
    image:
      "https://images.unsplash.com/photo-1663574629292-a8e240a2a3df?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    selectOnlyOne: true,
    buttonText: "OK",
  },
  {
    title: "Would you like to have a guide for your tour ?",
    options: [{ option: "Yes" }, { option: "No" }],
    image:
      "https://plus.unsplash.com/premium_photo-1718146019640-445ef39ef25a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    selectOnlyOne: true,
    buttonText: "OK",
  },
  {
    title: "Places and accomodation",
    logo: mapLogo,
    buttonText: "CONTINUE",
  },
  {
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
          "https://images.unsplash.com/photo-1518414922567-9da8c8461366?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Cappadocia",
      },
      {
        image:
          "https://images.unsplash.com/photo-1518414922567-9da8c8461366?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Fethiye",
      },
      {
        image:
          "https://images.unsplash.com/photo-1518414922567-9da8c8461366?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Antalya",
      },
      {
        image:
          "https://images.unsplash.com/photo-1518414922567-9da8c8461366?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Pamukkale",
      },
      {
        image:
          "https://images.unsplash.com/photo-1518414922567-9da8c8461366?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Bursa",
      },
      {
        image:
          "https://images.unsplash.com/photo-1518414922567-9da8c8461366?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Konya",
      },
      {
        image:
          "https://images.unsplash.com/photo-1518414922567-9da8c8461366?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Sapanca",
      },
      {
        image:
          "https://images.unsplash.com/photo-1518414922567-9da8c8461366?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Trabzon",
      },
      {
        image:
          "https://images.unsplash.com/photo-1518414922567-9da8c8461366?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        option: "Rize",
      },
    ],
    buttonText: "OK",
  },
  {
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
    title: "What type of accomodatin would you prefer?",
    selectOnlyOne: true,
    options: [{ option: "5 Star" }, { option: "4 Star" }, { option: "3 Star" }],
    image:
      "https://images.unsplash.com/photo-1469796466635-455ede028aca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttonText: "OK",
  },
  {
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
    title: "Do you have any special requests or notes for us?",
    image:
      "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isInput: true,
    buttonText: "OK",
  },
  {
    title: "What's your email address ?",
    image:
      "https://images.unsplash.com/photo-1633360821222-7e8df83639fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isInput: true,
    isEmail: true,
    buttonText: "OK",
  },
  {
    title: "Please share your contact number",
    image:
      "https://images.unsplash.com/photo-1633360821222-7e8df83639fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isInput: true,
    isPhone: true,
    buttonText: "OK",
  },
  {
    title: "Where are you travelling from ?",
    image:
      "https://images.unsplash.com/photo-1478860409698-8707f313ee8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isInput: true,
    isPhone: true,
    buttonText: "OK",
  },
  {
    title: "Which city are you from ?",
    image:
      "https://images.unsplash.com/photo-1566935843973-aed0ddcb0ecc?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isInput: true,
    buttonText: "OK",
  },
  {
    title: "How did you know go miles ?",
    image:
      "https://images.unsplash.com/photo-1566935843973-aed0ddcb0ecc?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
