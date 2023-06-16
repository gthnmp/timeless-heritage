/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
const images = {
  'fatahillahMuseum' : 'https://images.unsplash.com/photo-1587053114035-e94f4162a358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  'jasidoBuilding' : 'https://images.unsplash.com/photo-1662344987032-1ac7b0a2cb2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
  'stasiunKota' : 'https://images.unsplash.com/photo-1684544102350-b89c07bced9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1527&q=80',
}

const LocationCard = ( props ) => {
  return(
    <div className='relative w-full lg:w-60 h-96 lg:h-80'>
      <div className='absolute w-full h-full flex flex-col justify-end items-center gap-2 p-4 z-10'>
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
        <h1 className='open-sans text-white text-xl lg:text-4xl font-medium'>Explore Jakarta</h1>
        <p className='open-sans text-white text-sm lg:text-base font-light text-center w-full lg:w-1/2'>Experience Jakarta's dynamic charm as you explore its bustling streets, vibrant markets, and iconic landmarks. From historical sites to modern attractions, there's something for everyone in this captivating city</p>
      </div>

      <div id = "images" className='flex flex-col lg:flex-row gap-10 h-auto justify-center items-center'>
        <LocationCard source = {images.fatahillahMuseum} name = "Fatahillah Museum" location = "Old Town Jakarta"/>
        <LocationCard source = {images.jasidoBuilding} name = "Jasindo Building" location = "Old Town Jakarta" />
        <LocationCard source = {images.stasiunKota} name = "Jakarta Kota Station" location = "Old Town Jakarta"/>
      </div>

      <a href = '/' className='text-blue-500 open-sans text-sm uppercase'>See More</a>
    </section>
  )
}