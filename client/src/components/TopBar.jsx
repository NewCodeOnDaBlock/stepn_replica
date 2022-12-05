import logo from '../assets/stepn-logo.svg'

const TopBar = (props) => {
  return (
    <topbar>
      <div className="head-title">
        {/* THE STEPPER TRACKER 2.0 */}
        <img src={logo} alt="logo" style={{width: '120px', height: '120px', marginLeft: '30px'}}/>
      </div>
      <>
        <ul className="menu-list">
          <li>
              <a href="_" target="_blank">
                ABOUT US
              </a>
          </li>
          |
          <li>
              <a href="_" target="_blank">
                HOW TO PLAY
              </a>
          </li>
          |
          <li>
              <a href="_" target="_blank">
                CAREERS
              </a>
          </li>
        </ul>
      </>
    </topbar>
  )
}

export default TopBar
