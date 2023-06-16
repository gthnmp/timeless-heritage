/* eslint-disable react/no-unescaped-entities */
const images = {
  'backgroundImage' : 'https://images.unsplash.com/photo-1642064816139-36f0f72192b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
}

export default function Final () {
  return(
    <section id ="thanks" className='relative w-screen h-screen px-4 lg:px-16 flex flex-col justify-center'>
    <div id = "headline" className='flex flex-col justify-center items-center gap-2 lg:gap-4'>
      <h1 className='text-yellow-500 text-4xl lg:text-7xl noto-serif font-medium'>Thank You.</h1>
      <p className='text-white text-sm lg:text-base open-sans font-light'>I'm truly grateful for your time and attention.</p>
    </div>

    <div className='absolute left-1/2 bottom-0 py-4 transform -translate-x-1/2 flex flex-col gap-2'>
      <h1 className='text-gray-300 open-sans text-center text-xs lg:text-base tracking-tight'>© 2023 BATAVIA: A TIMELESS HERITAGE , All right reserved</h1>
      <h1 className='text-yellow-500 open-sans text-center text-xs lg:text-base tracking-tight'>Gathan Mahesa</h1>
    </div>

    <div id ="bg-image" className="absolute left-0 w-full h-full z-[-1] ">
      <div id ="overlay" className='absolute top-0 left-0 w-screen h-screen bg-neutral-950 opacity-40'></div>
      <img src={images.backgroundImage} className='w-full h-full object-cover' />
    </div>
  </section>
  )
}