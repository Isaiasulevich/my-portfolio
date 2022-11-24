import React from "react";
import {useState} from 'react'
import { Button } from "./Button";

export default function ContactForm() {
  const [fullName,setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message,setMessage] = useState ('')
  console.log(email,message)

  return (


    <div className="flex items-center justify-center mx-24 mt-20">
      <form className="max-w-8xl">
        <h1 className="font-medium text-2xl">Contact me!</h1>

        <div className="flex flex-col gap-1 mt-4">
          <label className="text-black">Name</label>
          <input
            onChange={(e)=>setFullName(e.target.value)}
            value={fullName}
            type={"text"}
            placeholder={"Your name"}
            className={"border-2 px-2 rounded-md caret-indigo-500"}
          />
        </div>

        <div className="flex flex-col gap-1 mt-4">
          <label className="text-black">Email</label>
          <input
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            type={"email"}
            placeholder={"Your email"}
            className={"border-2 px-2 rounded-md caret-indigo-500"}
          />
        </div>

        <div className="flex flex-col gap-1 my-4">
          <label className="text-black">Message</label>
          <textarea
            onChange={(e)=>setMessage(e.target.value)}
            value={message}
            placeholder={"Your email"}
            maxLength='100'
            className={"border-2 px-2 rounded-md caret-indigo-500 resize-none"}
          />
          
        </div>


        <Button 
            label='Send'
            type='submit'
        />

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
