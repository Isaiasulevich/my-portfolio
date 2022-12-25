import React from "react";
import { useState } from "react";
import { ButtonPrimary } from "./ButtonPrimary";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  console.log(email, message);

  return (
    <div className="flex items-center py-12 px-12 items-center text-zinc-50 justify-center mx-auto  mt-20 z-50">

      {/* REEVER ASK HOSTAGATOR */}
      <form className=" flex flex-col gap-4 min-w-2xl max-w-5xl" action={`mailto:hello@isaiasulevich.me?body="${message}" `} encType="text/plain">
        <h1 className="font-medium text-left text-5xl max-w-5xl">
          Let&#39;s get in touch!
        </h1>

        <div className="flex flex-col  gap-2 mt-4">
          <label className="text-zinc-50 text-left font-medium text-md">
            Name
          </label>
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type={"text"}
            placeholder={"Your name"}
            className={
              "px-2 py-2 bg-zinc-800 placeholder-zinc-700 rounded-md font-regular text-sm  text-zinc-50 caret-indigo-200  focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:bg-zinc-800 disabled:text-zinc-700 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            }
          />
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <label className="text-zinc-50 text-left font-medium text-md">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type={"email"}
            placeholder={"Your email"}
            className={
              "px-2 py-2 bg-zinc-800 placeholder-zinc-700 rounded-md font-regular text-sm  text-zinc-50 caret-indigo-200  focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:bg-zinc-800 disabled:text-zinc-700 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            }
          />
        </div>

        <div className="flex flex-col gap-1 my-4">
          <label className="text-zinc-50 text-left font-medium text-md">
            Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder={"Your email"}
            maxLength="100"
            className={
              "px-2 py-2 bg-zinc-800 placeholder-zinc-700 rounded-md font-regular text-sm  text-zinc-50 caret-indigo-200  focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:bg-zinc-800 disabled:text-zinc-700 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            }
          />
        </div>
        <div className="mt-5">
          <ButtonPrimary label="Send" type="submit" />
        </div>
      </form>
    </div>
  );
}

// function useContactForm() {
//     const [fullNameInput, setFullNameInput] = useState('')
//     const [emailInput, setEmailInput] = useState('')
//     const [messageInput, setMessageInput] = useState('')

//     const handleEmailChange = (e) => {
//       setEmailInput(e.target.value)
//     }
//     const handleFullNameChange = (e) => {
//       setFullNameInput(e.target.value)
//     }

//     const handleMessageChange = (e) => {
//       setMessageInput(e.target.value)
//     }

//     const onSuccess = () => {
//       setMessageInput('Message Sent Successfully!')
//       setEmailInput('')
//       setFullNameInput('')
//     }

//     const onError = (error) => {
//       setMessageInput('Failed to send message, Error: ' + error)
//     }

//     const handleFormSubmit = (e) => {
//       e.preventDefault()
//       contactEmailRequest({
//         fullName: fullNameInput,
//         email: emailInput,
//         message: messageInput
//       })
//         .then(() => onSuccess())
//         .catch((e) => onError(e.message))
//     }

//     return {
//       emailInput,
//       fullNameInput,
//       messageInput,
//       handleFormSubmit,
//       handleFullNameChange,
//       handleMessageChange,
//       handleEmailChange
//     }
//   }

//   async function contactEmailRequest({ fullName, email, message }) {
//     return fetch('/api/contact', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ fullName, email, message })
//     })
//   }
