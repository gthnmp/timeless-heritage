/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Invasion from '/assets/Demak-Invasion.png';

const Image = ({ src, size, className }) => (
  <div className={size}>
    <img src = {src} className={`w-full h-full object-cover ${className}`}></img>
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
  <section id ="subchapter" className='relative w-screen h-auto px-24 pl-44 py-20 flex flex-col gap-20 bg-white'>

    <div id = "headline" className='w-full flex flex-col justify-center items-start col-span-2'>
      <h1 className='noto-serif text-primary-color text-xl lg:text-9xl font-medium '>4th Century AD</h1>
    </div>

    <div id = "content" className=" relative w-full h-96 flex justify-between gap-10 px-5 ">
      <div className="flex flex-col gap-10 w-1/2 indent-10">
        <p className='noto-serif  text-secondary-color text-xl text-justify font-light tracking-tighter'>
        The coastal area and port of Jakarta in northern West Java has been the location of human settlement since the 4th century BCE during the Buni culture. The earliest historical record discovered in Jakarta is the Tugu inscription, which was discovered in Tugu sub-district, North Jakarta. It is among the oldest inscriptions in Indonesian history. The area was part of the Indianized kingdom of Tarumanagara.</p>

        <p className='noto-serif  text-secondary-color text-xl text-justify font-light tracking-tighter'>
        In AD 397, King Purnawarman established Sunda Pura, located on the northern coast of West Java, as the new capital city for the kingdom. The capital of Tarumanagara kingdom was most probably located somewhere between Tugu sub-district North Jakarta and Bekasi Regency West Java. Purnawarman left seven memorial stones across the area, including the present-day Banten and West Java provinces, consisting of inscriptions bearing his name.</p>
    <Image size="w-96 drop-shadow-2xl absolute right-0" src="https://upload.wikimedia.org/wikipedia/commons/3/32/Padrao_sunda_kelapa.jpg"/>
      </div>
    </div>
  </section>


)
const SundaKelapa = () => (
  <section id ="subchapter" className='relative w-screen h-auto px-24 pl-44 py-20 grid grid-cols-2 grid-rows-2 z-[-1] bg-primary-color'>


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
  <section id ="subchapter" className='relative w-screen h-auto px-24 pl-44 py-20 flex flex-col gap-10 bg-white drop-shadow-2xl '>


    <div id = "content" className="relative w-full h-full flex  justify-between items-start">
      <p className='noto-serif w-1/3  text-secondary-color text-xl text-justify indent-10 font-medium -tracking-wider'>
      In 1526, the port of Sunda Kalapa was attacked by the army of the Demak Sultanate led by Fatahillah, a warrior from Gujarat, India. It was conquered on June 22, 1527, and renamed Jayakarta. After defeating and Islamizing Banten, Fatahillah placed Jayakarta under the control of Banten, which had become a sultanate. The native Sundanese defenders were defeated, retreating towards Bogor. For several decades in the 16th century, Jayakarta was inhabited by people from Banten, including those originally from Demak and Cirebon, except for the Chinese residents. The Banten people, along with Arab and Chinese merchants, resided at the mouth of the Ciliwung River until Jan Pieterszoon Coen destroyed Jayakarta in 1619. Afterwards, all inhabitants, except for the Chinese, withdrew to the Banten Sultanate as Jayakarta was replaced by Batavia.</p>
      
      <div className='flex flex-col gap-20 items-end'>
        <Image size="w-[40rem] drop-shadow-2xl" src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Iacatra_year_1605-1608_drawn1675-1725.jpg"/>
        <div className="text-xs open-sans flex  font-thin  flex-col gap-1 ">
          <p className="uppercase font-medium text-primary-color">Above</p>
          <p className="font-medium"><i>'Jayakarta, 1605'</i></p>
          <p>View of Jayakarta, before the establisment of Batavia</p>
        </div>
      </div>
    </div>

      {/* <div id = "headline" className='w-full py-6'>
        <h1  className='relative noto-serif text-primary-color text-xl lg:text-8xl uppercase font-medium  w-full flex justify-end'>Jayakarta</h1>
      </div> */}

 
  </section>

)

export default function History(){
  return(
    <>
      <Opening/>
      <Image size="w-screen h-[40rem]" className="object-bottom" src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Andries_Beeckman_-_The_Castle_of_Batavia.jpg" />
      <TarumanegaraPeriod/>
      <SundaKelapa/>
      <Image size="w-screen h-[40rem] -z-20" className="object-bottom" src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Gezicht_op_Batavia_Rijksmuseum_SK-A-2513.jpeg" />
      <Jayakarta/>
      <Image size="w-screen h-[50rem] -z-20" className="" src="https://upload.wikimedia.org/wikipedia/commons/8/81/Ville_de_Batavia_c1780.jpg" />
    </>
  )
}