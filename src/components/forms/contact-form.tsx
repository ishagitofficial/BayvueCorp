"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ErrorMsg from "../common/error-msg";
import { IoMdSend } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const schema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  message: yup.string().required().min(10).label("Message"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  // Email sending function using emailjs or similar service
  const handleEmailSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // Send the form data directly
      });

      const result = await response.json();

      if (result.success) {
        alert("Email sent successfully!");
        reset();
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      alert("Failed to send email. Please try again.");
    }
  };

  // WhatsApp handling function
  const handleWhatsAppSubmit = (data: FormData) => {
    const phoneNumber = "YOUR_PHONE_NUMBER"; // Add your WhatsApp business number
    const message = encodeURIComponent(`
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
    `);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
    reset();
  };
  return (
    <form id="contact-form">
      {/* ... existing form fields ... */}
      <div className="col-12">
        <div className="input-group-meta form-group mb-30">
          <label htmlFor="">Name*</label>
          <input
            type="text"
            placeholder="Your Name*"
            {...register("name")}
            id="name"
            name="name"
          />
          <div className="help-block with-errors">
            <ErrorMsg msg={errors.name?.message!} />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="input-group-meta form-group mb-40">
          <label htmlFor="">Email*</label>
          <input
            type="email"
            placeholder="Email Address*"
            {...register("email")}
            id="email"
            name="email"
          />
          <div className="help-block with-errors">
            <ErrorMsg msg={errors.email?.message!} />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="input-group-meta form-group mb-35">
          <label htmlFor="">Message*</label>
          <textarea
            placeholder="Your message*"
            {...register("message")}
            id="message"
            name="message"
          ></textarea>
          <div className="help-block with-errors">
            <ErrorMsg msg={errors.message?.message!} />
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-6">
            <button
              type="button"
              onClick={handleSubmit(handleEmailSubmit)}
              className="btn-four tran3s w-100 d-block"
            >
              <IoMdSend className="me-2 text-xl" />
              Send Message
            </button>
          </div>
          <div className="col-6">
            <button
              type="button"
              onClick={handleSubmit(handleWhatsAppSubmit)}
              className="btn-four tran3s w-100 d-block"
            >
              <FaWhatsapp className="me-2 text-xl" />
              Whatsapp
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
