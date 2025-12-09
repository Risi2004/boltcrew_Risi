import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNo: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const patterns = {
        name: /^[A-Za-z\s]+$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
        contactNo: /^[+]?[0-9\s-]{7,20}$/,
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            tempErrors.name = "Name is required";
            isValid = false;
        } else if (!patterns.name.test(formData.name)) {
            tempErrors.name = "Name should contain only letters";
            isValid = false;
        }

        if (!formData.email.trim()) {
            tempErrors.email = "Email is required";
            isValid = false;
        } else if (!patterns.email.test(formData.email)) {
            tempErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        if (!formData.contactNo.trim()) {
            tempErrors.contactNo = "Contact number is required";
            isValid = false;
        } else if (!patterns.contactNo.test(formData.contactNo)) {
            tempErrors.contactNo = "Please enter a valid phone number";
            isValid = false;
        }

        if (!formData.message.trim()) {
            tempErrors.message = "Message cannot be empty";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            setIsLoading(true);

            emailjs
                .sendForm(
                    "service_432p2af",   // Service ID
                    "template_5ak7pf6",  // Template ID
                    form.current,
                    "AqK292-G4jWIjhKUH"  // Public Key
                )
                .then(
                    (result) => {
                        setIsLoading(false);
                        console.log("Email Sent Successfully:", result.text);
                        alert("Message sent successfully!");
                        setFormData({ name: "", email: "", contactNo: "", message: "" });
                    },
                    (error) => {
                        setIsLoading(false);
                        console.error("Error sending email:", error.text);
                        alert("Failed to send message. Please try again.");
                    }
                );
        }
    };

    return (
        <div className="contact__section">
            <h1>Contact Us</h1>
            <div className='contact__section__form'>
                <div className='contact__section__form__s1'>
                    <img src="/Images/contact.png" alt="Contact" />
                </div>

                <form
                    className='contact__section__form__s2'
                    ref={form}
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <div className="input-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? "input-error" : ""}
                        />
                        {errors.name && <span className="error-msg">{errors.name}</span>}
                    </div>

                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? "input-error" : ""}
                        />
                        {errors.email && <span className="error-msg">{errors.email}</span>}
                    </div>

                    <div className="input-group">
                        <input
                            type="tel"
                            name="contactNo"
                            placeholder="Contact No"
                            value={formData.contactNo}
                            onChange={handleChange}
                            className={errors.contactNo ? "input-error" : ""}
                        />
                        {errors.contactNo && <span className="error-msg">{errors.contactNo}</span>}
                    </div>

                    <div className="input-group">
                        <textarea
                            name="message"
                            rows="5"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            className={errors.message ? "input-error" : ""}
                        ></textarea>
                        {errors.message && <span className="error-msg">{errors.message}</span>}
                    </div>

                    <button type="submit" disabled={isLoading}>
                        {isLoading ? <div className="loader"></div> : "Send"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;