"use client";
import React, { useState } from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { cn } from "@/app/lib/utils";
import { Button } from "@/app/components/ui/moving-border";



const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

const INIT_DATA = {
        name: '',
        email:'',
        message:'',
    }

function ContactUsPage() {
    const [formData,setFormData] = useState(INIT_DATA);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted" , formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }

  return (
    <div className="min-h-screen bg-black py-12 pt-28">
        <h1 className="text-lg md:text-3xl text-center font-sans font-bold mb-4 text-white">Contact Us </h1> 
        
        <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
            <form  onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                    <LabelInputContainer>
                        <Label htmlFor="name">Your Name</Label>
                        <Input id="name" placeholder="kamrul Hasan" type="text" value={formData.name} onChange={handleChange} />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" placeholder="kamrulhasan20656@gmail.com" type="email" value={formData.email} onChange={handleChange} />
                </LabelInputContainer>
                
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="message">Your message</Label>
                    <Input id="message" placeholder="What is your mind" type="text" value={formData.message} onChange={handleChange} />
                </LabelInputContainer>

                 <LabelInputContainer className="mb-4 w-full flex items-center justify-center">
                    <Button
                        borderRadius="0.315rem"
                        containerClassName="w-full"
                        className="cursor-pointer text-[1rem] font-bold"
                        type="submit"
                        >
                        Send Us
                    </Button>
                </LabelInputContainer>
                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        
                
            </form>
        </div>
    </div>
  )
}

export default ContactUsPage;
