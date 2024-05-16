
import { UserButton } from "@clerk/nextjs";
// import React, { Component } from 'react'

export default function Home() {
  return (
    <UserButton afterSignOutUrl="/"/>
  );
}
