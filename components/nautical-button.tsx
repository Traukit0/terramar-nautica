"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface NauticalButtonProps {
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
}

export function NauticalButton({ children, disabled = false, onClick }: NauticalButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled}
      className={`relative overflow-hidden rounded-xl bg-gradient-to-r from-[#0B63A6] to-[#08314B] px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-[#3CC1FF]/40 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      <span className="relative z-10">{children}</span>
      {!disabled && (
        <motion.div
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2.5, ease: "linear" }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
      )}
    </motion.button>
  )
}
