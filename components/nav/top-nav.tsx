"use client";
import React from "react";
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
  } from '@clerk/nextjs';
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";


export default function TopNav() {
    const {isSignedIn, user} = useUser();

    console.log({ isSignedIn, user});
    
    
    return (
        <nav className="flex justify-between items-center p-2 shadow">
          <Link href="/">AI</Link>
          <div className="flex items-center">
            {isSignedIn && (
              <Link href="/dashboard" className="mr-2">{`${user.fullName}'s Dashboard`}</Link>
            )}

            <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <div className="ml-2">
            <ModeToggle />
          </div>
          </div>
          </nav>
      );
      
    
}