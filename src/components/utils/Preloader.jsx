import { useState, useEffect, useRef } from "react"

export default function Preloader(){
  const numberRef = useRef(null);
  const loadingContainerRef = useRef(null);
  const [ loadingNumber, setLoadingNumber ] = useState(1621);
  const finalNumber = 2023;

  useEffect(() => {
    numberRef.current.style.transform = 'translateY(0%)';
    
    setTimeout(() => {
      const interval = setInterval(() => {
        setLoadingNumber((prevNumber) => {
          const randomIncrement = Math.floor(Math.random() * 10) + 1;
          const nextNumber = prevNumber + randomIncrement;
          return nextNumber <= finalNumber ? nextNumber : finalNumber;
        });
      },100);

      return () => clearInterval(interval)
    }, 1500)

    if (loadingNumber === finalNumber){
      setTimeout(() => {
        numberRef.current.style.transform = 'translateY(-100%)'
      },1000)

      setTimeout(() => {
        loadingContainerRef.current.style.transform = 'translateY(-100%)'
      },1500)
    }

  },[loadingNumber])

  return(
    <div ref={loadingContainerRef} className="fixed z-50 w-screen h-screen easeInback bg-yellow-500 flex justify-center items-center transition-transform duration-1000 -translate-y-0">
      <div id = 'line' className="overflow-hidden">
        <h1 id = 'number' ref = {numberRef} className={`text-black noto-serif text-4xl lg:text-7xl transition-transform duration-1000 ease translate-y-full`}>{loadingNumber}</h1>
      </div>
    </div>
  )
}