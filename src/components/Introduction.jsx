/* eslint-disable react/no-unescaped-entities */
const images = {
  'backgroundImage' : 'https://images.unsplash.com/photo-1575705785219-e78b769b9ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
}

export default function Introduction () {
  return(
    <section id ="introduction" className='w-screen h-screen px-4 lg:px-16 flex flex-col justify-center'>
      <div id = "headline" className='flex flex-col justify-center items-center gap-2 lg:gap-4'>
        <h1 className='text-4xl lg:text-7xl noto-serif font-medium text-center text-white'>Batavia: <span className="text-yellow-500">A Timeless Heritage</span></h1>
        <p className='text-white text-sm lg:text-base open-sans font-light'>Step into Jakarta's Historic Timeline</p>
      </div>

      <div id ="bg-image" className="absolute left-0 w-full h-full z-[-1] ">
        <div id ="overlay" className='absolute top-0 left-0 w-screen h-screen bg-neutral-950 opacity-40'></div>
        <img src={images.backgroundImage} className='w-full h-full object-cover' />
      </div>
    </section>
  )
}