/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Invasion from '/assets/Demak-Invasion.png';

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
    <section id ="chapter-opening" className={`relative w-screen h-[35rem] p-4 flex flex-col lg:flex-row justify-center items-center bg-white drop-shadow-2xl`}>
      <div id = "headline" className={`w-auto flex flex-col justify-center items-center gap-2 relative`}>
        <h1 className='noto-serif text-primary-color text-[10rem] font-medium'>III</h1>
        <h1 className='noto-serif text-primary-color text-xl lg:text-8xl font-medium'>Batavia</h1>
      </div>
    </section>
  )
}

export default function Present(){
  return(
    <>
      <Opening/>

    </>
  )
}