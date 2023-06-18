/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */


const Image = ({ src, size }) => (
  <div className={size}>
    <img src = {src} className="w-full h-full object-cover object-bottom"></img>
  </div>
)

const Source = ({ direction, title, context }) => (
  <div className="text-xs open-sans font-thin flex flex-col gap-1 ">
    <p className="uppercase">{direction}</p>
    <p className="font-medium"><i>{title}</i></p>
    <p>{context}</p>
  </div>
)

const Opening = () => {
  return (
    <section id ="chapter-opening" className={`relative w-screen h-auto p-4 flex flex-col lg:flex-row justify-center items-center bg-white`}>
      <div id = "headline" className={`w-auto h-96 flex flex-col justify-center items-center gap-2 p-20 relative border-neutral-700`}>
        <h1 className='noto-serif text-primary-color text-[10rem] font-medium'>II</h1>
        <h1 className='noto-serif text-primary-color text-xl lg:text-8xl font-medium'>History</h1>
      </div>
    </section>
  )
}

const ThePortCity = () => (
  <section id ="subchapter" className='relative w-screen h-auto px-24 pl-44 py-10 flex flex-col justify-center gap-10 bg-white'>

    <div id = "content" className="w-full h-full flex justify-end">

      <div className="w-1/2 h-1/2 relative">
        <div className="flex flex-col gap-5">
          <div className="text-xs open-sans font-thin flex flex-col gap-1">
            <p className="uppercase font-semibold text-pribg-primary-color">Below</p>
            <p className="font-medium"><i>'The Batavia City Emblem'</i></p>
            <p>━ It was used from 1620 until 1950</p>
          </div>
          <img src = "https://upload.wikimedia.org/wikipedia/commons/7/7e/Wapen-Batavia.jpg" className="w-32 h-full object-cover"/>
        </div>
      </div>

      <p className='noto-serif h-1/2 text-secondary-color text-xl text-justify lg:text-xl indent-10 font-light w-1/2 tracking-tighter'>
        Batavia, located on northwest coast of Java, Indonesia, is a bustling city with a population of approximately 10 million people. Its cultural heritage is a tapestry of influences from its diverse history, blending Dutch colonial and indigenous Indonesian traditions. Founded in the 17th century as a trading center, Batavia flourished, leaving behind a legacy of Dutch colonial architecture and landmarks. Renamed Jakarta after Indonesian independence, the city retains its vibrancy as the nation's political, economic, and cultural capital. Today, Batavia's historical remnants and preserved sites, such as the Kota Tua (Old Town), offer glimpses into its captivating past, captivating visitors with its rich heritage.</p>
    </div>
    <div id = "headline" className='w-full h-1/2 py-6 flex flex-col justify-center items-start gap-2 relative border-t-1 border-secondary-color'>
      <h1 className='noto-serif text-secondary-color text-xl lg:text-9xl font-medium'>Colorful Heritage</h1>
    </div>
      
  </section>

)

export default function History(){
  return(
    <>
      <Opening/>
      <Image size = "w-screen h-[40rem]" src = "https://upload.wikimedia.org/wikipedia/commons/3/3b/Gezicht_op_Batavia_Rijksmuseum_SK-A-2513.jpeg" />
      <ThePortCity/>
      <Image size = "w-screen h-[40rem]" src = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Andries_Beeckman_-_The_Castle_of_Batavia.jpg" />
    </>
  )
}