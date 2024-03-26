import {useState} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import './index.css'

const Apply = () => {
  const [name, setName] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [email, setEmail] = useState('')

  const onChangeName = event => setName(event.target.value)
  const onChangePhonenumber = event => setPhonenumber(event.target.value)
  const onChangeEmail = event => setEmail(event.target.value)

  const onSubmitForm = event => {
    event.preventDefault()
    setName('')
    setPhonenumber('')
    setEmail('')
  }

  return (
    <div className="apply-container">
      <div className="apply-container-text">
        <h1 className="apply-container-heading">
          Kick off your ACCA Prep journey with IndigoLearn
        </h1>
        <p className="apply-container-para">
          Sign in and get Instance access to our FREE Courses
        </p>
        <button type="button" className="signup-button">
          Sign Up
        </button>
      </div>
      <div className="form-box">
        <h1 className="form-text">
          Applying to be an ACCA Get in touch with us!
        </h1>
        <form className="form-inputs" onSubmit={onSubmitForm}>
          <input
            type="text"
            className="form-input"
            placeholder="Enter Your Name"
            onChange={onChangeName}
            value={name}
          />
          <input
            type="text"
            onChange={onChangePhonenumber}
            value={phonenumber}
            className="form-input"
            placeholder="Phonenumber"
          />
          <input
            type="text"
            onChange={onChangeEmail}
            value={email}
            className="form-input"
            placeholder="Email ID"
          />
          <select className="form-input">
            <option selected>Current Occupation</option>
            <option>Student</option>
            <option>Software Enginner</option>
          </select>
          <Popup
            modal
            trigger={
              <button type="submit" className="Request-button">
                Request Call Back
              </button>
            }
          >
            {close => (
              <>
                <div>
                  <p>
                    Success
                    <br /> We get back to you in a short period of time
                  </p>
                </div>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  Close
                </button>
              </>
            )}
          </Popup>
        </form>
      </div>
    </div>
  )
}

export default Apply
