import shoes from '../assets/shoes.svg'
import cage from '../assets/caged.png'

const Background = (props) => {
  return (
    <background>
      <img src={cage} alt="cage" className='cage'/>
      <img src={shoes} alt="background-shoes" className='shoe'/>      
    </background>
  )
}

export default Background
