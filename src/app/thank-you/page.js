'use client'

import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function ThankYouPage() {
  useEffect(() => {
    toast.success('Message sent successfully!')
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center text-center p-6">
      <div>
        <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
        <p className="text-gray-700 text-lg">Your message has been sent. I’ll get back to you soon.</p>
      </div>
    </div>
  )
}
