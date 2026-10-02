"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

type Session = {
  session: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
    impersonatedBy?: string | null | undefined;
  };
  user: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
    banExpires?: Date | null | undefined;
    banReason?: string | null | undefined;
    banned: boolean | null | undefined;
    role: string;
  };
} | null;

export default function MobileSidebarInner({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsNavActive(true)}
        className="flex flex-col gap-1 lg:hidden size-10 rounded-md items-center justify-center bg-lightNavy"
      >
        <div className="h-0.5 w-4 bg-white"></div>
        <div className="h-0.5 w-4 bg-white"></div>
        <div className="h-0.5 w-4 bg-white"></div>
      </button>

      <AnimatePresence>
        {isNavActive && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            exit={{ x: "-100%" }}
            className="w-full fixed top-0 left-0 z-50 bg-white h-screen shrink-0 lg:hidden flex flex-col gap-12 border-r border-lightNavy/15"
          >
            {/* TODO: Revisit this */}
            <div className="flex justify-between items-center px-4 py-4">
              <div className=" flex items-center gap-4">
                <div className="w-10 h-10  object-contain">
                  <Image
                    src={"/icon-logo.png"}
                    alt="portal"
                    width={137}
                    height={175}
                  />
                </div>
                <p className="font-bold text-2xl mt-1 text-lightNavy">Portal</p>
              </div>
              <button
                onClick={() => setIsNavActive(false)}
                className="flex flex-col gap-1 lg:hidden size-10 rounded-md items-center justify-center bg-lightNavy"
              >
                <p className="text-xl font-thin text-white">X</p>
              </button>
            </div>
            <div className="px-8 text-lg font-medium flex flex-col gap-4">
              <Link
                href="/dashboard"
                className="hover:text-lightNavy duration-200 cursor-pointer"
              >
                Dashboard
              </Link>
              <Link
                href="/projects"
                className="hover:text-lightNavy duration-200 cursor-pointer"
              >
                Projects
              </Link>
              <Link
                href="/tickets"
                className="hover:text-lightNavy duration-200 cursor-pointer"
              >
                Tickets
              </Link>
              <p className="hover:text-lightNavy duration-200 cursor-pointer">
                Invoices
              </p>
            </div>
            {session?.user.role === "admin" && (
              <div className="px-8 ">
                <div className="text-lg pt-8 font-medium flex flex-col gap-4 border-t border-lightNavy/15">
                  <Link
                    href={"/clients"}
                    className="hover:text-lightNavy duration-200 cursor-pointer"
                  >
                    Clients
                  </Link>
                </div>
              </div>
            )}
            <div className="justify-self-end justify-end h-full py-6 text-lg font-medium flex flex-col gap-2 px-8">
              <p>Settings</p>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
