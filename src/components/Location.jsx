/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
const images = {
  'fatahillahMuseum' : 'https://images.unsplash.com/photo-1663335662806-89d22e034eb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
  'shipyard' : 'https://upload.wikimedia.org/wikipedia/commons/7/78/Galangan_VOC.jpg',
  'stasiunKota' : 'https://jakarta-tourism.sgp1.cdn.digitaloceanspaces.com/images/article/6580914031663785646.jpg',
  'bantengSquare' : 'https://jakarta-tourism.sgp1.cdn.digitaloceanspaces.com/images/article/6580914031663785646.jpg'
}

const LocationCard = ( props ) => {
  return(
    <div className='relative w-full lg:w-60 h-96 lg:h-80'>
      <div className='absolute w-full h-full flex flex-col justify-end items-center gap-2 p-4 z-[1]'>
        <h1 className='noto-serif text-2xl text-white font-medium text-center'>{props.name}</h1>  
        <p className='open-sans text-sm text-white font-light uppercase'>{props.location}</p>
      </div>
      <div id="overlay" className='absolute w-full h-full bg-neutral-900 opacity-40 z-0'></div>
      <img src={props.source} className='w-full h-full object-cover z-[-1]'/>
    </div>
  )
}

export default function Location(){
  return(
    <section id ="more" className='relative w-screen h-full px-4 lg:px-16 flex flex-col justify-center items-center gap-10 bg-neutral-950'>
        
      <div id = "headline" className='flex flex-col justify-center items-center gap-4'>
        <h1 className='open-sans text-yellow-500 text-xl lg:text-4xl font-medium'>Explore Jakarta</h1>
        <p className='open-sans text-white text-sm lg:text-base font-light text-center w-full lg:w-1/2'>Experience Jakarta's dynamic charm as you explore its bustling streets, vibrant markets, and iconic landmarks. From historical sites to modern attractions, there's something for everyone in this captivating city</p>
      </div>

      <div id = "images" className='flex flex-col lg:flex-row gap-10 h-auto justify-center items-center'>
        <LocationCard source = {images.fatahillahMuseum} name = "Old Town Square" location = "West Jakarta"/>
        <LocationCard source = {images.shipyard} name = "VOC Shipyard" location = "North Jakarta" />
        <LocationCard source = {images.bantengSquare} name = "Banteng Square" location = "Central Jakarta"/>
      </div>

      <a href = '/' className='text-yellow-600 open-sans text-sm uppercase'>See More</a>
    </section>
  )
}