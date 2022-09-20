import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../Home/Home.css'

function Home() {
  return (
    <div>   <FontAwesomeIcon icon={['fab', 'apple']} />
    <FontAwesomeIcon icon={['fab', 'microsoft']} />
    <FontAwesomeIcon icon={['fab', 'google']} /></div>
  )
}

export default Home