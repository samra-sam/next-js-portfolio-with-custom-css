import Image from 'next/image'
import project1 from '../pubic/images/project1.png'
import project2 from '../pubic/images/project2.png'
import project3 from '../pubic/images/project3.png'
import project4 from '../pubic/images/project4.png'
import project5 from '../pubic/images/project5.png'
const page = () => {
  return (
    <div id='portfolio-container'>
      <h1 id='portfolio-title'>PORTFOLIO</h1>
      <p>Explore our diverse portfolio showcasing successful projects in web development, mobile app creation, and web design. Each project highlights our commitment to quality, creativity, and functionality, tailored to meet client needs and goals.</p>
      
      <div id='portfoli-projects-container'>
        <div className='projects-img-container'>
           <Image className='Image' src={project1} alt='project1'></Image>
        </div>
        <div className='projects-img-container'>
        <Image className='Image' src={project2} alt='project1'></Image>
        </div>
        <div className='projects-img-container'>
        <Image className='Image' src={project3} alt='project1'></Image>
        </div>
        <div className='projects-img-container'>
        <Image className='Image' src={project4} alt='project1'></Image>
        </div>
        <div className='projects-img-container' >
        <Image className='Image' src={project5} alt='project1'></Image>
        </div>
    
      </div>

      <button>See More</button>
    </div>
  )
}

export default page