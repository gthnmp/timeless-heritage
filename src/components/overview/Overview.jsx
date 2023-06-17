/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */


const Image = ({ src }) => (
  <div className="w-screen h-[35rem]">
    <img src = {src} className="w-full h-full object-cover object-bottom"></img>
  </div>
)


export default function Overview(){
  return(
    <>
    
      <section id ="content" className='relative w-screen h-auto p-4 flex flex-col lg:flex-row justify-center items-center bg-yellow-500'>
          
        <div id = "headline" className='w-1/2 h-screen flex flex-col justify-center items-center gap-2 p-20 relative border-r-1 border-neutral-700'>
          <h1 className='noto-serif text-white text-[10rem] font-medium'>I</h1>
          <h1 className='noto-serif text-white text-xl lg:text-8xl font-medium'>Overview</h1>
        </div>

        <div id = "content" className=" w-1/2 h-screen flex flex-col justify-between items-start px-20 py-10">
          <p className='noto-serif text-black text-xl text-justify lg:text-3xl indent-10 font-light w-full tracking-tighter'>Batavia, now Jakarta, was the capital of the Dutch East Indies. It was a thriving trading hub, combining diverse cultures and leaving behind a rich architectural legacy. Today, Jakarta stands as a vibrant metropolis, reflecting its historical significance and modern dynamism.</p>
          <div className="text-xs open-sans font-thin flex flex-col gap-1 ">
            <p className="uppercase">Below</p>
            <p className="font-medium"><i>'View of Batavia'</i></p>
            <p>Hendrick Dubbels (1640 - 1671)</p>
          </div>
          <div id="line" className="w-full flex justify-end">
            <p className="uppercase noto-serif font-medium text-7xl text-white -tracking-wide self-end">Batavia</p>
          </div>
        </div>
      </section>
      <Image src = "https://upload.wikimedia.org/wikipedia/commons/3/3b/Gezicht_op_Batavia_Rijksmuseum_SK-A-2513.jpeg" />

      <section id ="content" className='relative w-screen h-auto px-24 pl-44 py-10 flex flex-col justify-center gap-10 bg-white'>

        <div id = "content" className="w-full h-full flex justify-end">

          <div className="w-1/2 h-1/2 relative flex flex-col gap-5">
            <div className="absolute top-0">
              <div className="text-xs open-sans font-thin flex flex-col gap-1">
                <p className="uppercase font-semibold text-yellow-500">Below</p>
                <p className="font-medium"><i>'The Batavia City Emblem'</i></p>
                <p>━ It was used from 1620 until 1950</p>
              </div>
              <img src = "https://upload.wikimedia.org/wikipedia/commons/7/7e/Wapen-Batavia.jpg" className="w-28 h-full object-cover "/>
            </div>
          </div>

          <p className='noto-serif h-1/2 text-black text-xl text-justify lg:text-xl indent-10 font-light w-1/2 tracking-tighter'>
            Batavia, located on northwest coast of Java, Indonesia, is a bustling city with a population of approximately 10 million people. Its cultural heritage is a tapestry of influences from its diverse history, blending Dutch colonial and indigenous Indonesian traditions. Founded in the 17th century as a trading center, Batavia flourished, leaving behind a legacy of Dutch colonial architecture and landmarks. Renamed Jakarta after Indonesian independence, the city retains its vibrancy as the nation's political, economic, and cultural capital. Today, Batavia's historical remnants and preserved sites, such as the Kota Tua (Old Town), offer glimpses into its captivating past, captivating visitors with its rich heritage.</p>
        </div>
          
        <div id = "headline" className='w-full h-1/2 py-6 flex flex-col justify-center items-start gap-2 relative border-t-1 border-black'>
          <h1 className='noto-serif text-black text-xl lg:text-9xl font-medium'>Java North Coast</h1>
        </div>
      </section>
    </>
  )
}