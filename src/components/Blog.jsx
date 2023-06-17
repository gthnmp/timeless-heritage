/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const images = {
  'blog1' : 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/view-of-batavia-hendrick-dubbels.jpg',
  'blog2' : 'https://images.unsplash.com/photo-1575705812112-9e917baf7834?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
}

const BlogCard = ( props ) => {
  return(
    <div className='relative w-full lg:w-96 h-auto flex flex-col items-center aspect-video gap-4'>
      <img src={props.source} className='w-full h-full object-cover'/>
      <div className='flex flex-col items-center'>
        <p className='open-sans text-sm text-white font-light uppercase'>{props.date}</p>
        <h1 className='noto-serif text-3xl text-white font-medium'>{props.title}</h1>  
      </div>
    </div>
  )
}

export default function Blog (){
  return(
    <section id ="blog" className='relative w-screen h-full px-4 lg:px-16 flex flex-col items-center gap-10 bg-neutral-950'>

      <div id = "headline" className='flex flex-col justify-center items-center gap-4'>
        <h1 className='open-sans text-yellow-500 text-xl lg:text-4xl font-medium'>Articles</h1>
        <p className='open-sans text-white text-sm lg:text-base font-light text-center w-full lg:w-1/2'>Explore Jakarta's captivating stories and local insights in our Articles. Discover hidden gems and be inspired by the city's diverse narratives for your own adventures.</p>
      </div>

      <div id = "images" className='flex flex-col lg:flex-row gap-10 h-auto justify-center items-center'>
        <BlogCard source = {images.blog1} date = "May 20, 2023" title = "An Unforgettable" />
        <BlogCard source = {images.blog2} date = "June 1, 2023" title = "The Great Canal" />
      </div>

    </section>
  )
}
