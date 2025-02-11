"use client"

import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = "" }) => {
  const [glitchedText, setGlitchedText] = useState(text)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      const glitchChars = "!<>-_\\/[]{}—=+1*^?#________"
      const newText = text
        .split("")
        .map((char) => (Math.random() > 0.9 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char))
        .join("")
      setGlitchedText(newText)
    }, 50)

    return () => clearInterval(glitchInterval)
  }, [text])

  return (
    <div className={`glitch-text ${className}`}>
      <style jsx>{`
        .glitch-text {
          position: relative;
          animation: glitch 11s infinite;
        }
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
      {glitchedText}
    </div>
  )
}

export default GlitchText

