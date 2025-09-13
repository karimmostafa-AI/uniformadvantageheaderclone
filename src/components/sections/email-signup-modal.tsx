"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EmailSignupModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  const handleClose = () => {
    setIsOpen(false);
  };

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 font-sans antialiased">
      <div className="relative w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 bg-[#eff0f1] shadow-lg rounded-sm overflow-hidden">
        
        <button 
          onClick={handleClose} 
          className="absolute top-3 right-3 text-black hover:text-gray-700 z-10"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div 
          className="relative hidden md:flex flex-col justify-end p-8" 
          style={{ 
            backgroundImage: "url('https://www.uniformadvantage.com/on/demandware.static/-/Sites-UA-Library/default/dw204f6479/images/marketing/pop-up-shipping/email-pop-up-bg-d.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5bc3fc54-702c-4e95-987e-f2464ed9f934-uniformadvantage-com/assets/svgs/logo-6.svg"
            alt="Uniform Advantage Logo"
            width={160}
            height={26}
          />
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-12 text-center text-[#333]">
          <h2 className="font-bold text-[26px] leading-tight">
            Sign up to get
            <br />
            FREE SHIPPING
            <br />
            on your next order!
          </h2>

          <p className="mt-3 text-sm leading-snug">
            Be the first to hear about new products and exclusive deals. Plus, tell us your birthday for a special deal on your special day.
          </p>

          <form className="mt-6 space-y-4 text-left">
            <div>
              <label htmlFor="email" className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">EMAIL</label>
              <Input
                id="email"
                type="email"
                placeholder="you@email.com"
                className="w-full mt-1 bg-white h-11 border-gray-300 rounded-sm"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold tracking-wider text-gray-500 uppercase">Birthday</label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <Select>
                  <SelectTrigger className="w-full bg-white h-11 border-gray-300 rounded-sm">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    {months.map(month => (
                      <SelectItem key={month} value={month.toLowerCase()}>{month}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full bg-white h-11 border-gray-300 rounded-sm">
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent>
                    {days.map(day => (
                      <SelectItem key={day} value={day}>{day}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="w-full bg-black text-white font-bold text-sm h-11 rounded-sm hover:bg-gray-800">
              SIGN UP
            </Button>
          </form>

          <button onClick={handleClose} className="mt-6 text-sm text-gray-600 underline hover:text-black">
            No, thanks
          </button>
          
          <a href="#" className="mt-4 text-xs text-gray-500 underline hover:text-black">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}