"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import yes from '@/assets/yes.gif'
import waiting from '@/assets/waiting.gif'

export default function ValentinePage() {
  const [answer, setAnswer] = useState<boolean | null>(null)
  const [noButtonStyle, setNoButtonStyle] = useState({})
  const [noButtonText, setNoButtonText] = useState("No")

  const moveNoButton = useCallback(() => {
    setNoButtonStyle({
      position: "absolute",
      left: `${Math.random() * 80}%`,
      top: `${Math.random() * 80}%`,
    })
    setNoButtonText(["PLEASE", "PLEASEPLEASEPLEASE", "IM BEGGING PLEASE", "PLEAAASEEEEEEE", "DON'T DO THIS"][Math.floor(Math.random() * 5)])
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-pink-100">
      <div className="relative flex place-items-center">
        <Image
          src={
            answer
              ? yes
              : waiting
          }
          alt="Valentine's image"
          width={300}
          height={300}
          priority
        />
      </div>

      <h1 className="text-4xl font-bold mt-8 mb-8 text-slate-600">
        {answer === null ? "Will you be my valentine?" : "Yay! Yayayayayy!"}
      </h1>

      {answer === null && (
        <div className="flex space-x-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            onClick={() => setAnswer(true)}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            style={noButtonStyle}
            onClick={moveNoButton}
          >
            {noButtonText}
          </button>
        </div>
      )}
    </main>
  )
}