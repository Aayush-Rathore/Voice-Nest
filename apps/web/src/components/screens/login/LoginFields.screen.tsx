"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import * as React from "react";

export default function LoginFields() {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const handlePasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <>
      <h4 className="font-bold text-slate-600">{"Sign In"}</h4>
      <form className="space-y-6 mt-5">
        <Input
          type="email"
          id="email"
          placeholder="Enter Email"
          className="block w-full py-1 h-auto px-2 bg-white-300 outline-none rounded-sm shadow-lg focus-visible:ring-0  shadow-slate-200/70 placeholder:text-xs text-black font-thin"
          onChange={(e) => console.log(e?.target.value)}
        />
        <div className="relative mb-2">
          <Input
            type={isPasswordVisible ? "password" : "text"}
            placeholder="Enter your Password"
            id="password"
            className="block w-full py-1 px-2 h-auto bg-white-300 outline-none rounded-sm shadow-lg shadow-slate-200/70 placeholder:text-xs text-black font-thin focus-visible:ring-0"
            onChange={(e) => console.log(e?.target.value)}
          />
          {isPasswordVisible ? (
            <EyeOff
              size={15}
              className="absolute cursor-pointer text-gray-400 right-2 bottom-2"
              onClick={handlePasswordVisible}
            />
          ) : (
            <Eye
              onClick={handlePasswordVisible}
              size={15}
              className="absolute cursor-pointer text-gray-400 right-2 bottom-2"
            />
          )}
        </div>
        <a
          href="#"
          className="text-end flex justify-end text-gray-500 text-xs mt-10"
        >
          Recover Password?
        </a>
        <Button
          type="submit"
          className="w-full py-1 h-8 bg-blue-500 hover:bg-blue-600"
        >
          Sign In
        </Button>
      </form>
    </>
  );
}
