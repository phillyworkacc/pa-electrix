'use client'
import { websiteConfig } from "@/app/page"
import { Logo } from "@/components/Icons/Icon"
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Checkbox from "@/components/Checkbox/Checkbox"
import PhoneInput, { isValidUKMobile } from "@/components/PhoneInput";
import AwaitButton from "@/components/AwaitButton/AwaitButton";

export default function GetFreeQuoteForm () {
   const [name, setName] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [message, setMessage] = useState("");
   const [acceptedTerms, setAcceptedTerms] = useState(false);
      
   useEffect(() => {
      if (websiteConfig.saveFormValues) {
         if (localStorage.getItem(websiteConfig.chatBot.userInfoLocalStorageId) !== null) {
            const info = JSON.parse(localStorage.getItem(websiteConfig.chatBot.userInfoLocalStorageId)!);
            setName(info.name);
            setPhoneNumber(info.phoneNumber);
         }
      }
   }, []);

   const sendMessageBtn = async (callback: Function) => {
      if (name == "") {
         toast.error("Please enter your name");
         callback();
         return;
      }
      if (phoneNumber == "") {
         toast.error("Please enter your phone number");
         callback();
         return;
      }
      if (!isValidUKMobile(phoneNumber)) {
         toast.error("Please enter a valid phone number");
         callback();
         return;
      }
      if (message == "") {
         toast.error("Please enter your message");
         callback();
         return;
      }
      if (!acceptedTerms) {
         toast.error("Please accept the terms");
         callback();
         return;
      }
      // https://app.minwebagency.com/api/forms/quote
      const result = await fetch(
         "https://app.minwebagency.com/api/forms/quote", {
            method: "POST",
            body: JSON.stringify({
               name, phoneNumber, message,
               minwebBusinessId: websiteConfig.minwebBusinessId
            })
         });
      const data = await result.json();
      if (JSON.parse(data).success) {
         toast.success("Sent Quote Request!");
         // WHEN MESSAGE SEND IS SUCCESSFUL THEN SAVE TO LOCAL STORAGE
         if (websiteConfig.saveFormValues) {
            localStorage.setItem(websiteConfig.chatBot.userInfoLocalStorageId, JSON.stringify({ name, phoneNumber }));
         }
      } else {
         toast.error("Failed to Send Quote Request. Please Try Again!");
      }
      callback();
   }

   
   return (
      <div 
         className="box fit radius-10 dfb column gap-10 pd-3 pdx-3"
         style={{ backgroundColor: websiteConfig.formColors.background, color: websiteConfig.formColors.color, width: "100%", maxWidth: "700px" }}
      >
         <div className="box full dfb justify-center"><Logo size={70} /></div>
         <div className="text-xxxl full bold-700 text-center">GET FREE QUOTE</div>
         <div className="box full pd-1 dfb column gap-8">
            <div className="text-sm full bold-600 text-left">Name *</div>
            <input
               type="text"
               className="s full pd-15 pdx-2 radius-10"
               placeholder="John Doe"
               value={name}
               onChange={e => setName(e.target.value)}
            />
         </div>
         <div className="box full pd-1 dfb column gap-8">
            <div className="text-sm full bold-600 text-left">Phone Number *</div>
            <PhoneInput
               className="s full pd-15 pdx-2 radius-10"
               placeholder="012 3456 7890"
               value={phoneNumber}
               onChange={val => setPhoneNumber(val)}
            />
         </div>
         <div className="box full pd-1 dfb column gap-8">
            <div className="text-sm full bold-600 text-left">Short Message about your needs *</div>
            <textarea 
               className="s full h-20 pd-15 pdx-2 radius-10" 
               placeholder="Your message goes straight to my phone, I'll get back to you as soon as I'm available"
               value={message}
               onChange={e => setMessage(e.target.value)}
            />
         </div>
         <div className="box full pd-1 dfb column gap-8">
            <Checkbox
               label={<span>By submitting this form, you agree that {websiteConfig.name} may contact you by phone, email, or text message regarding your enquiry. You can opt out of text messages at any time by replying <b style={{ display: "inline" }}>STOP</b>. Standard network charges may apply.</span>}
               onChange={checked => setAcceptedTerms(checked)}
            />
         </div>
         <AwaitButton className="sm full pd-2 radius-10" onClick={sendMessageBtn}>
            Send Message
         </AwaitButton>
      </div>
   )
}
