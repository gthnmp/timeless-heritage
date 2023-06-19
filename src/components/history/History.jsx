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
    <section id ="chapter-opening" className={`relative w-screen h-[35rem] p-4 flex flex-col lg:flex-row justify-center items-center bg-secondary-color drop-shadow-2xl`}>
      <div id = "headline" className={`w-auto flex flex-col justify-center items-center gap-2 relative border-neutral-700`}>
        <h1 className='noto-serif text-primary-color text-[10rem] font-medium'>II</h1>
        <h1 className='noto-serif text-primary-color text-xl lg:text-8xl font-medium'>Precolonial</h1>
      </div>
    </section>
  )
}

const TarumanegaraPeriod = () => (
  <section id ="subchapter" className='relative w-screen h-auto px-24 pl-44 py-20 flex flex-col gap-20 bg-white drop-shadow-2xl'>

    <div id = "headline" className='w-full flex flex-col justify-center items-start col-span-2'>
      <h1 className='noto-serif text-primary-color text-xl lg:text-9xl font-medium '>4th Century AD</h1>
    </div>

    <div id = "content" className="w-1/2 h-full flex flex-col justify-center items-start gap-10 px-5 ">
      <p className='noto-serif  text-secondary-color text-xl text-justify font-light tracking-tighter'>
      The coastal area and port of Jakarta in northern West Java has been the location of human settlement since the 4th century BCE during the Buni culture. The earliest historical record discovered in Jakarta is the Tugu inscription, which was discovered in Tugu sub-district, North Jakarta. It is among the oldest inscriptions in Indonesian history. The area was part of the Indianized kingdom of Tarumanagara.</p>

      <p className='noto-serif  text-secondary-color text-xl text-justify font-light tracking-tighter'>
      In AD 397, King Purnawarman established Sunda Pura, located on the northern coast of West Java, as the new capital city for the kingdom. The capital of Tarumanagara kingdom was most probably located somewhere between Tugu sub-district North Jakarta and Bekasi Regency West Java. Purnawarman left seven memorial stones across the area, including the present-day Banten and West Java provinces, consisting of inscriptions bearing his name.</p>
    </div>
  </section>


)
const SundaKelapa = () => (
  <section id ="subchapter" className='relative w-screen h-auto px-24 pl-44 py-10 grid grid-cols-2 grid-rows-2 bg-primary-color drop-shadow-2xl'>


    <div id = "content" className="flex justify-center items-center">
      <p className='noto-serif text-white text-xl text-justify indent-10 font-light w-full tracking-wide'>
      After Tarumanagara's power declined, its territories became part of the Kingdom of Sunda. According to historical records, the kingdom of Srivijaya ruled over Sumatra, the Malay peninsula, and western Java, which was known as Sunda. Sunda had a strategic and prosperous port called Sunda Kelapa, known for its high-quality pepper. The local people were mostly engaged in agriculture and lived in houses built on wooden piles.</p>
    </div>
    <div></div>

    <div id = "headline" className='flex justify-end items-center py-6'>
      <h1 className='noto-serif text-white text-xl lg:text-9xl font-medium'>Sunda Kelapa</h1>
    </div>

    <div id = "content" className="flex justify-center items-center order-last">
      <p className='noto-serif  text-white text-xl text-justify lg:text-xl indent-10 font-light w-full tracking-wide'>
      Sunda Kelapa became an important trading port for the Sunda Kingdom by the 14th century. European explorers in the 16th century mentioned a city called Kalapa, which was the main port of the Hindu kingdom of Sunda. The Portuguese made an agreement with the Sunda Kingdom in 1522, gaining control of the port in exchange for helping protect Sunda from the Islamic Javan Sultanate. The Portuguese settlers established their homes in Sunda Kelapa and enjoyed free access to the lucrative pepper trade.</p>
    </div>  
  </section>

)

const Jayakarta = () => (
  <section id ="subchapter" className='relative w-screen h-auto px-24 pl-44 py-10 flex flex-col gap-10 bg-white drop-shadow-2xl'>


    <div id = "content" className="w-full h-full flex  justify-center items-center">
      <p className='noto-serif  text-secondary-color text-xl text-justify lg:text-xl indent-10 font-light w-full tracking-wide'>
      In 1526, the port of Sunda Kalapa was attacked by the army of the Demak Sultanate led by Fatahillah, a warrior from Gujarat, India. It was conquered on June 22, 1527, and renamed Jayakarta. After defeating and Islamizing Banten, Fatahillah placed Jayakarta under the control of Banten, which had become a sultanate. The native Sundanese defenders were defeated, retreating towards Bogor. For several decades in the 16th century, Jayakarta was inhabited by people from Banten, including those originally from Demak and Cirebon, except for the Chinese residents. The Banten people, along with Arab and Chinese merchants, resided at the mouth of the Ciliwung River until Jan Pieterszoon Coen destroyed Jayakarta in 1619. Afterwards, all inhabitants, except for the Chinese, withdrew to the Banten Sultanate as Jayakarta was replaced by Batavia.</p>
    </div>

    <div id = "headline" className='w-full py-6 flex flex-col justify-center items-end gap-2'>
      <h1 className='noto-serif text-primary-color text-xl lg:text-9xl font-medium'>Jayakarta</h1>
    </div>
 
  </section>

)

export default function History(){
  return(
    <>
      <Opening/>
      <TarumanegaraPeriod/>
      <SundaKelapa/>
      <Jayakarta/>
    </>
  )
}