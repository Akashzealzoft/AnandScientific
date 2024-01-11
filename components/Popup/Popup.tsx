import React, { useRef, useState } from "react";
import Button from '../Button/Button';
import emailjs from "@emailjs/browser";
import { requestCall } from "../Button/buttonFunction";

interface PopupProps {
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onClose }) => {
    const formRef = useRef();
    const [form, setForm] = useState({
        contact: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_l3znqmt", // Your service ID
                "template_vr4szq7",
                {
                    from_name: form.contact,
                    to_name: "Sulthanul Arief",
                    to_email: "sulthanularief143@gmail.com",
                },
                "p5fbNrN9RBK53UrcI" // Your emailjs public key
            )
            .then(
                () => {
                    setLoading(false);
                    alert(`Thank you ${form.contact}. I will get back to you as soon as possible.`);
                    setForm({
                        contact: "",
                    });
                    onClose(); // Close the popup after sending the email
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

    return (
        <div className="fixed z-50 inset-0 flex items-center justify-center overflow-y-auto">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">
                                    Add a mobile number to receive a call from "ANAND SCIENTIFIC COMPANY"
                                </h3>
                                <div className="mt-2">
                                    <input
                                        onChange={handleChange}
                                        type="text"
                                        name="contact" // Make sure to set the correct name here
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <Button
                            style=""
                            buttonContent="Request To Call Back"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => {
                                if (form.contact.trim() !== "") {
                                    requestCall(form);
                                    onClose(); // Close the popup after calling requestCall
                                } else {
                                    alert("Please enter a valid phone number.");
                                }
                            }}
                        />
                        <Button
                            style=""
                            buttonContent="Close"
                            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-400 text-base font-medium text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={onClose}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Popup;

