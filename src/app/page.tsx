import Image from "next/image";
import samra from '../app/pubic/images/samra.png'
import Link from "next/link";
export default function Home() {
  return (
    <div id="home" >

      <div id="home-content">
      <h2 >i am a professional</h2>
      <h1 >web designer</h1>
     <p >Hey I am <span>Samra Sam</span> From Karachi Pakistan, Welcome to my web developer portfolio! I'm Samra, a skilled and
            creative web developer with a passion for creating beautiful,
            responsive, and user-friendly websites.I am Studing Cloud AI Artificial Intelligence , Metaverse & Web 3.0 At Sindh Govornor House Karachi... A dediated Web Developer passionate about crafting engaging and user-frindly digital experiences.With a strong foundation in HTML|CSS|JAVASCRIPT|TYPESCRIPT & currently exploring in NEXT.JS...</p>

     <button>
      <Link href='contact'>Hire Me</Link>
      </button>
     </div>
     <div id="home-image">
     <div id="image-div">

      <Image src={samra} alt="samra sam"></Image>
      

     </div>
     </div>
    </div>
  );
}