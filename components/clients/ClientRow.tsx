"use client";

import { useState } from "react";

export default function ClientRow({
  name,
  company,
  email,
}: {
  name: string;
  company: string;
  email: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{ "--closed": "0fr", "--open": "1fr" } as React.CSSProperties}
      className="flex flex-col border-b hover:bg-neutral-50 duration-200 last:border-none border-lightNavy/25 py-4 px-4"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="grid grid-cols-6 cursor-pointer   snap-mandatory text-sm"
      >
        <div className="col-span-3 text-left text-lightNavy font-semibold">
          <p>{name}</p>
        </div>
        <div className="col-span-1 hidden lg:flex text-left">
          <p>{company}</p>
        </div>
        <div className="col-span-1 hidden lg:flex text-left">
          Account Status
        </div>
        <div className="col-span-1 hidden lg:flex text-left">Action</div>
      </button>
      <div
        className={`grid duration-300 ${isOpen ? "grid-rows-(--open)" : "grid-rows-(--closed)"}`}
      >
        <div className="w-full overflow-hidden">
          <div className="py-4">
            <p className=" text-sm text-lightNavy">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
