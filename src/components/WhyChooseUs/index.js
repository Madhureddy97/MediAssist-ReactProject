import {FaRegLightbulb, FaMoneyCheckAlt} from 'react-icons/fa'
import {HiUserGroup} from 'react-icons/hi'

import './index.css'

const WhyChooseUs = () => (
  <div className="whychooseus-container">
    <h1 className="whychooseus-heading">Why Choose Us?</h1>
    <div className="whychooseus-options">
      <div className="whychooseus-option">
        <FaRegLightbulb className="icon" />
        <h1 className="whychooseus-option-heading">Expert Faculty</h1>
        <p className="whychooseus-option-description">
          We have a Faculty with high experience and they are the graduates of
          top colleges in India
        </p>
      </div>
      <div className="whychooseus-option">
        <HiUserGroup className="icon" />
        <h1 className="whychooseus-option-heading">Complete Package</h1>
        <p className="whychooseus-option-description">
          The Package includes training students from basics and guiding them
          with right skills to the placements
        </p>
      </div>
      <div className="whychooseus-option">
        <FaMoneyCheckAlt className="icon" />
        <h1 className="whychooseus-option-heading">Placements</h1>
        <p className="whychooseus-option-description">
          A large number of students got placed with this curriculum and placed
          in top companies
        </p>
      </div>
    </div>
  </div>
)

export default WhyChooseUs
