// import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <h1 className="indigolearn-logo">IndigoLearn</h1>
    <ul className="options-in-header">
      <li className="each-option">Check Eligibility</li>
      <li className="each-option">To learn</li>
      <li className="each-option">Placement Assistance</li>
      <li className="each-option">Apply</li>
    </ul>
    <button type="button" className="login-signup-button">
      Log In/Sign Up
    </button>
  </div>
)

export default Header
