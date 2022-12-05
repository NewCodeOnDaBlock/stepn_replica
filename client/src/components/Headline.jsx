import { useRef } from 'react'
const Headline = (props) => {

  const buttonRef = useRef();

  const triggerRippleEffect = () => {
    if (buttonRef.current.innerHTML === 'JOIN') {
      buttonRef.current.innerHTML = 'CLICKED'
    } else {
      buttonRef.current.innerHTML = 'JOIN'
    }
  }

  return (
    <headline>
      <h1>
        JOIN TODAY + <br></br>MAKE YOUR STEPS COUNT!
      </h1>
        <button ref={buttonRef} onClick={triggerRippleEffect}>JOIN</button>
    </headline>
  )
}

export default Headline
