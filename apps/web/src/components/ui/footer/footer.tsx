"use client";

import * as React from "react";
import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white flex justify-center py-2 mt-14 w-screen  shadow-2xl shadow-black">
      <div className="max-w-screen-xl flex">
        <p className="flex items-center text-sm gap-2">
          <Copyright size={10} />
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
