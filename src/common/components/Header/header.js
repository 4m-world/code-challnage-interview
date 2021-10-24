import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons'

import './_header.scss'

const Header = () => (
  <div className="header">
    <div>
      <h1>Your favourite tunes</h1>
      <h2>All <FontAwesomeIcon icon={faSun} /> and <FontAwesomeIcon icon={faMoon}/></h2>
    </div>
  </div>
)

export default Header
