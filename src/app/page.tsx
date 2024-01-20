'use client'

import { useGHOBalance } from "gho-sdk";
import React from "react";

export default function Home() {
  const { value } = useGHOBalance()

  return (
    <div>
      <h1>Next.js + Gho</h1>
      <p>
        This is a sample project to demonstrate how to use Gho with Next.js.
        This is the value from the hook {value}
      </p>
    </div>
  );
}