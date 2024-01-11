import { useState } from "react";

// const [showPopup, setShowPopup] = useState(false)
export const requestCall = (form) => {
    console.log("Call request sent with phone number:", form.contact);
};


export const sendInquiry = ({ onClick }) => {
    console.log("Inquiry sent")
}