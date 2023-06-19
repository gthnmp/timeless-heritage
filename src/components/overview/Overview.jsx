/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Image = ({ size, src, className, children }) => (
  <div className={size}>
    {children}
    <img src={src} className={`w-full h-full object-cover ${className}`} alt="" />
  </div>
);

const Source = ({ className, color, direction, title, context }) => (
  <div className={`text-xs open-sans font-thin flex flex-col gap-1 ${className}`}>
    <p className={`uppercase font-medium ${color}`}>{direction}</p>
    <p className="font-medium"><i>'{title}'</i></p>
    <p>{context}</p>
  </div>
);

const Opening = () => (
  <section id="overview" className="relative w-screen h-[35rem] p-4 flex flex-col lg:flex-row justify-center items-center bg-primary-color drop-shadow-2xl">
    <div id="headline" className="w-1/2 flex flex-col justify-center items-center gap-2 relative">
      <h1 className="noto-serif text-white text-[10rem] font-medium">I</h1>
      <h1 className="noto-serif text-white text-xl lg:text-8xl font-medium">Overview</h1>
    </div>
  </section>
);

const CityOnShore = () => {
  const text = {
    paragraph: "Jakarta is Indonesia's capital and largest city. Located on an estuary of the Ciliwung River, on the northwestern part of Java, the area has long sustained human settlement. Historical evidence from Jakarta dates back to the 4th century CE, when it was a Hindu settlement and port. The city has been sequentially claimed by the Indianized kingdom of Tarumanegara, the Hindu Kingdom of Sunda, the Muslim Sultanate of Banten, and by Dutch, Japanese and Indonesian administrations. The Dutch East Indies built up the area before it was taken during World War II by the Empire of Japan and finally became independent as part of Indonesia.",
  };

  return (
    <section id="subchapter" className="relative w-screen h-auto px-24 pl-44 py-10 flex flex-col justify-center gap-10 bg-white shadow-2xl -z-20">
      <div id="headline" className="w-full h-1/2 py-6 flex flex-row justify-between items-center gap-2 relative border-b-1 border-secondary-color">
        <h1 className="noto-serif text-secondary-color text-xl lg:text-8xl font-medium">A City on the Shore</h1>
      </div>

      <div id="content" className="w-full h-full flex justify-between">
        <div className="w-full flex flex-row justify-between gap-10">
          <p className="noto-serif w-3/4 text-secondary-color text-justify text-xl indent-10 font-light tracking-tighter">
            {text.paragraph}
          </p>
          <Source color="text-primary-color" direction="Below" title="Jakarta, Indonesia" context="Affan Fadhlan (2022)" />
        </div>
      </div>
    </section>
  );
};

const MultipleNames = () => (
  <section id="subchapter" className="relative w-screen h-auto px-24 pl-44 py-10 flex flex-col justify-center gap-10 bg-white">
    <div id="content" className="w-full h-full flex justify-end">
      <div className="w-1/2 h-1/2 relative">
        <div className="flex flex-col gap-10">
          <Image size="w-96 drop-shadow-2xl" src="https://images.unsplash.com/photo-1663335662806-89d22e034eb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80">
          </Image>
          <Source color="text-primary-color" direction="above" title="Old City" context="Ammar Andiko (2022)" />
        </div>
      </div>

      <p className="noto-serif h-1/2 text-secondary-color text-xl text-justify lg:text-xl indent-10 font-light w-1/2 tracking-tighter">
        Jakarta has been known by several names. It was called Sunda Kelapa during the Kingdom of Sunda period and Jayakarta, Djajakarta or Jacatra during the short period of the Banten Sultanate. Thereafter, Jakarta evolved in three stages. The "old city", close to the sea in the north, developed between 1619 and 1799 during the era of the VOC. The "new city" to the south evolved between 1809 and 1942 after the Dutch government took over control of Batavia from the failed VOC whose charter expired in 1799. The third was the development of modern Jakarta since the proclamation of independence in 1945. Under the Dutch, it was known as Batavia (1619–1945), and was Djakarta (in Dutch) or Jakarta, during the Japanese occupation and the modern period.
      </p>
    </div>

    <div id="headline" className="w-full h-1/2 py-6 flex flex-row justify-between items-center gap-2 relative border-t-1 border-secondary-color">
      <h1 className="noto-serif text-secondary-color text-xl lg:text-8xl font-medium">Multiple Names</h1>
      <Source color="text-primary-color" direction="below" title="Jakarta, Indonesia" context="Eko Herwantoro (2019)" />
    </div>
  </section>
);

export default function Overview() {
  return (
    <div>
      <Opening />
      <CityOnShore />
      <Image size="w-screen h-[40rem] relative" src="https://images.unsplash.com/photo-1662808782878-941ea16adbdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" />
      <MultipleNames />
      <Image size="w-screen h-[40rem]" className="object-bottom" src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" />

    </div>
  );
}
