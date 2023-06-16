/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import BackgroundImage from './assets/Ocean.jpg';
import EndingImage from './assets/Footer.jpg';
import Bogor from './assets/Bogor.jpg';
import Cirebon from './assets/Cirebon.jpg';
import Solo from './assets/Solo.jpg';
import Icon from '/react.svg';
import Blog1 from './assets/Blog1.jpg';
import Blog2 from './assets/Blog2.jpg';

const LocationCard = ( props ) => {
  return(
    <div className='relative w-full lg:w-60 h-96 lg:h-80'>
      <div className='absolute w-full h-full flex flex-col justify-end items-center gap-2 p-8'>
        <h1 className='noto-serif text-3xl text-white font-medium'>{props.name}</h1>  
        <p className='open-sans text-sm text-white font-light uppercase'>{props.location}</p>
      </div>
      <img src={props.source} className='w-full h-full object-cover'/>
    </div>
  )
}

const BlogCard = ( props ) => {
  return(
    <div className='relative w-96 h-auto flex flex-col items-center aspect-video gap-4'>
      <img src={props.source} className='w-full h-full object-cover'/>
      <div className='flex flex-col items-center'>
        <p className='open-sans text-sm text-white font-light uppercase'>{props.date}</p>
        <h1 className='noto-serif text-3xl text-white font-medium'>{props.title}</h1>  
      </div>
    </div>
  )
}


function App() {
  return (
    <div id = "layout" className="w-screen h-full">
      
      <header className='fixed top-0 w-screen h-20 z-10'>
        <ul className='h-full hidden lg:flex justify-center items-center gap-32 open-sans text-white text-base font-normal uppercase'>
          <li><a>About</a></li>
          <li><a>Projects</a></li>
          <li><img src={Icon} alt="" /></li>
          <li><a>Journal</a></li>
          <li><a>Contact</a></li>
        </ul>
      </header>

      <main className='w-full h-full flex flex-col gap-20'>

        <section id ="introduction" className='w-screen h-screen px-4 lg:px-16 flex flex-col justify-center'>
          <div id = "headline" className='flex flex-col justify-center items-center gap-2 lg:gap-4'>
            <h1 className='text-white text-4xl lg:text-7xl noto-serif font-medium'>The Great Outdoor</h1>
            <p className='text-white text-sm lg:text-base open-sans font-light'>Wonder often, Wonder always.</p>
          </div>

          <div id ="bg-image" className="absolute left-0 w-full h-full z-[-1] ">
            <div id ="overlay" className='absolute top-0 left-0 w-screen h-screen bg-neutral-950 opacity-40'></div>
            <img src={BackgroundImage} className='w-full h-full object-cover' />
          </div>
        </section>

        <section id ="more" className='relative w-screen h-full px-4 lg:px-16 flex flex-col justify-center items-center gap-10 bg-neutral-950'>
          

          <div id = "headline" className='flex flex-col justify-center items-center gap-4'>
            <h1 className='open-sans text-white text-xl lg:text-4xl font-medium'>Explore The World</h1>
            <p className='open-sans text-white text-sm lg:text-base font-light text-center w-full lg:w-1/2'>We seek to provide te most authentic content from athletes, adventurers, explorers, and travellers around the world. Out long-term mission is to educate, inspire and enable all peoples to experience & protect wilderness</p>
          </div>

          <div id = "images" className='flex flex-col lg:flex-row gap-10 h-auto justify-center items-center'>
            <LocationCard source = {Bogor} name = "Bogor" location = "West Java"/>
            <LocationCard source = {Cirebon} name = "Cirebon" location = "West Java" />
            <LocationCard source = {Solo} name = "Solo" location = "Central Java"/>
          </div>

          <a href = '/' className='text-blue-500 open-sans text-sm uppercase'>See More</a>
        </section>

        <section id ="blog" className='relative w-screen h-full px-4 lg:px-16 flex flex-col items-center gap-10 bg-neutral-950'>

          <div id = "headline" className='flex flex-col justify-center items-center gap-4'>
            <h1 className='open-sans text-white text-xl lg:text-4xl font-medium'>Journal</h1>
            <p className='open-sans text-white text-sm lg:text-base font-light text-center w-full lg:w-1/2'>Our favorite stories about public lands and opportunities for you to get involved in protecting your outdoor experiences</p>
          </div>

          <div id = "images" className='flex flex-col lg:flex-row gap-10 h-auto justify-center items-center'>
            <BlogCard source = {Blog1} date = "May 20, 2023" title = "An Unforgettable" />
            <BlogCard source = {Blog2} date = "June 1, 2023" title = "Symphonies in Steel" />
          </div>

          <a href = '/' className='text-blue-500 open-sans text-sm uppercase'>All Posts</a>
        </section>

        <section id ="thanks" className='relative w-screen h-screen px-4 lg:px-16 flex flex-col justify-center'>
          <div id = "headline" className='flex flex-col justify-center items-center gap-2 lg:gap-4'>
            <h1 className='text-white text-4xl lg:text-7xl noto-serif font-medium'>Thank You</h1>
            <p className='text-white text-sm lg:text-base open-sans font-light'>I'm truly grateful for your time and attention</p>
          </div>

          <div className='absolute left-1/2 bottom-0 py-4 transform -translate-x-1/2 flex flex-col gap-2'>
            <h1 className='text-gray-300 open-sans text-center text-xs lg:text-base tracking-tight'>© 2023 THE GREAT OUTDOORS, All right reserved</h1>
            <h1 className='text-white open-sans text-center text-xs lg:text-base tracking-tight'>Gathan Mahesa</h1>
          </div>

          <div id ="bg-image" className="absolute left-0 w-full h-full z-[-1] ">
            <div id ="overlay" className='absolute top-0 left-0 w-screen h-screen bg-neutral-950 opacity-40'></div>
            <img src={EndingImage} className='w-full h-full object-cover' />
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
