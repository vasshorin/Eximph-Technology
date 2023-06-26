import React from 'react'

const Partners = () => {
  return (
    <div className="mt-12 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-xl font-medium">Our Partners</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center mt-4">
      <div className="flex justify-center">
        <img
          src="https://quarco.ru/assets/templates/images/partners/Hi.svg"
          alt="Partner 1"
          className="object-contain h-16"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="https://quarco.ru/assets/templates/images/partners/SMA.svg"
          alt="Partner 2"
          className="object-contain h-16"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="https://quarco.ru/assets/templates/images/partners/JY.svg"
          alt="Partner 3"
          className="object-contain h-16"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="https://quarco.ru/assets/templates/images/partners/Xia.svg"
          alt="Partner 4"
          className="object-contain h-16"
        />
      </div>
    </div>
  </div>
  )
}

export default Partners