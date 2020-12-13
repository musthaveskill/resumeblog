import React from 'react'

function GeneratedCV({ state: { name, position, city, email, github } }) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="relative pt-10 pb-10">
          <div className="max-w-3xl mx-auto pb-12 md:pb-16">{email}</div>
          <div className="max-w-3xl mx-auto pb-12 md:pb-16">{city}</div>
        </div>
      </div>
    </section>
  )
}

export default GeneratedCV