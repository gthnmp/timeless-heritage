/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const Image = ({ src, size }) => (
  <div className={size}>
    <img src = {src} className="w-full h-full object-cover object-bottom"></img>
  </div>
)

const Source = ({ color, direction, title, context }) => (
  <div className="text-xs open-sans font-thin flex flex-col gap-1 ">
    <p className={`uppercase font-medium ${color}`}>{direction}</p>
    <p className="font-medium"><i>'{title}'</i></p>
    <p>{context}</p>
  </div>
)

const Opening = () => {
  const text = {
    'paragraph' : 'Batavia, now Jakarta, was the capital of the Dutch East Indies. It was a thriving trading hub, combining diverse cultures and leaving behind a rich architectural legacy. Today, Jakarta stands as a vibrant metropolis, reflecting its historical significance and modern dynamism.',
  }

  return (
    <section id ="overview" className={`relative w-screen h-auto p-4 flex flex-col lg:flex-row justify-center items-center bg-primary-color`}>
      <div id = "headline" className={`w-1/2 h-screen flex flex-col justify-center items-center gap-2 p-20 relative border-r-1 border-neutral-700`}>
        <h1 className='noto-serif text-white text-[10rem] font-medium'>I</h1>
        <h1 className='noto-serif text-white text-xl lg:text-8xl font-medium'>Overview</h1>
      </div>

      <div className="w-1/2 h-screen flex flex-col justify-between items-start px-20 py-10">
        <p className='noto-serif text-secondary-color text-xl text-justify lg:text-3xl indent-10 font-light w-full tracking-tighter'>{text.paragraph}</p>
        <Source  direction={'below'} title={'View of Batavia'} context={'Hendrick Dubbels (1640 - 1671)'}/>
        <div id="line" className="w-full flex justify-end">
          <p className="uppercase noto-serif font-medium text-7xl text-secondary-color -tracking-wide self-end">Batavia</p>
        </div>
      </div>
    </section>
  )
}

const ThePortCity = () => (
  <section id ="subchapter" className='relative w-screen h-auto px-24 pl-44 py-10 flex flex-col justify-center gap-10 bg-white'>

    <div id = "content" className="w-full h-full flex justify-end">

      <div className="w-1/2 h-1/2 relative">
        <div className="flex flex-row gap-10">
          <Image size={'w-80'} src={'https://bartelegallery.com/wp-content/uploads/2021/05/0006-LetiBatavia%E2%80%A2DP1N.jpg'}/>
          <Source color={'text-primary-color'} direction={'left'} title={'Map of Batavia'} context={'━ Map of Batavia, 1681'}/>
        </div>
      </div>

      <p className='noto-serif h-1/2 text-secondary-color text-xl text-justify lg:text-xl indent-10 font-light w-1/2 tracking-tighter'>
        Batavia, located on northwest coast of Java, Indonesia, is a bustling city with a population of approximately 10 million people. Its cultural heritage is a tapestry of influences from its diverse history, blending Dutch colonial and indigenous Indonesian traditions. Founded in the 17th century as a trading center, Batavia flourished, leaving behind a legacy of Dutch colonial architecture and landmarks. Renamed Jakarta after Indonesian independence, the city retains its vibrancy as the nation's political, economic, and cultural capital. Today, Batavia's historical remnants and preserved sites, such as the Kota Tua (Old Town), offer glimpses into its captivating past, captivating visitors with its rich heritage.</p>
    </div>
      
    <div id = "headline" className='w-full h-1/2 py-6 flex flex-row justify-between items-center gap-2 relative border-t-1 border-secondary-color'>
      <h1 className='noto-serif text-secondary-color text-xl lg:text-8xl font-medium'>Heritage</h1>
      <Source color={'text-primary-color'} direction={"below"} title = "The Castle of Batavia" context={"Andries Beeckman, 1 January 1662"}/>
    </div>
  </section>

)

export default function Overview(){
  return(
    <>
      <Opening/>
      <Image size = "w-screen h-[40rem]" src = "https://upload.wikimedia.org/wikipedia/commons/3/3b/Gezicht_op_Batavia_Rijksmuseum_SK-A-2513.jpeg" />
      <ThePortCity/>
      <Image size = "w-screen h-[40rem]" src = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Andries_Beeckman_-_The_Castle_of_Batavia.jpg" />
    </>
  )
}