"use client"
import { useSelector } from "react-redux"

export default function ThemeWrapper({ children }) {
  const mode = useSelector((state) => state.theme.mode)

  return (
    <div className={mode}>
      {children}
    </div>
  )
}
