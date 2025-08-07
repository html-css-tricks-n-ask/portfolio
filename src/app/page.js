'use client'

import { motion } from 'framer-motion'
import profile from './lib/profileData'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Link from 'next/link'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  email: MdEmail,
}

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl text-center">

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hey, I’m {' '}
          <motion.span
            className="text-orange-500 inline-block"
            animate={{ scale: [1, 1.1, 1], textShadow: '0 0 10px #f97316' }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {' ' + profile.name}
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="text-xl md:text-2xl text-gray-700 mb-6 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {profile.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-600 mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {profile.description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            href={profile.ctaLink}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300"
          >
            {profile.ctaText}
          </Link>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="mt-10 flex justify-center space-x-6 text-gray-600 text-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {profile.socials.map(({ icon, url }, index) => {
            const IconComponent = iconMap[icon]
            return (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 transition"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <IconComponent />
              </motion.a>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
