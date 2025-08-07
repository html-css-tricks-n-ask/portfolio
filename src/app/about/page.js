'use client'
import { aboutMe } from '../lib/aboutData'

export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-orange-500">
            {aboutMe.heading}
          </h2>
          <div className="h-1 w-16 mx-auto bg-orange-500 my-3 rounded-full"></div>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            {aboutMe.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-500 mb-4">
              Get to know me!
            </h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {aboutMe.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-orange-500 mb-4">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {aboutMe.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 shadow-sm hover:bg-orange-100 hover:text-orange-600 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
