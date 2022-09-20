import { useState} from 'react'

import runa from '../../assets/img/icon.png'

import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import '../Home/Home.css'

function Home() {

    const [state, setstate] = useState( null ) 

    const navbar = document.querySelector("nav");
    const menu = document.querySelector(".menu");
    const menuBtn = document.querySelector(".menu-btn");


  return ( 
    <>
    <header>
        <nav>
            <div className='container'>
                <div className='menu'>
                    <ul className='social-media'>
                        <li>
                            <Link to='/' className='media-icon'>
                                <FontAwesomeIcon icon={faGithub}/>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='media-icon'>
                                <FontAwesomeIcon icon={faInstagram}/>
                            </Link>
                        </li>
                        <li>
                            <Link to='/' className='media-icon'>
                            <FontAwesomeIcon icon={faLinkedin}/>
                            </Link>
                        </li>
                    </ul>
                    <ul className='nav-links'>
                        <li>
                            <Link to=''>Home</Link>
                        </li>
                        <li>    
                            <Link to=''>About</Link>
                        </li>
                        <li>
                            <Link to=''>Projects</Link>
                        </li>
                        <li>
                            <Link to=''>Blog</Link>
                        </li>
                    </ul>
                </div>
                <div className='menu-btn'>
                    <FontAwesomeIcon icon={faBars}/>
                </div>
            </div>
        </nav>
        <div className='glass'>
            <h1 className='h-glass'>Alan</h1>
            <div>
                <div>
                    <img src={runa} alt='runa' width={40}/>
                </div>
                <div>
                    <h2>Portfolio</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius molestias placeat quam expedita, nemo perferendis dolorum dolor sed iure. Illum.</p>
                    <Link to='' className='media-icon'>
                        <FontAwesomeIcon className='runa' icon={faArrowRight}/>
                    </Link>
                </div>
            </div>
        </div>
        <h1 className='h-regular'>Naranjo</h1>
    </header>
    <section>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, nisi. Necessitatibus error laborum obcaecati rem fuga fugiat repellat quisquam repudiandae totam, ipsum velit animi. Illo inventore numquam libero obcaecati doloribus?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque quasi porro explicabo quia magni sint incidunt distinctio laudantium cum deserunt velit eveniet doloribus, aliquam earum repudiandae accusamus maxime a soluta facere aperiam officiis. Maxime laboriosam autem, earum inventore harum expedita aperiam quos libero aut velit doloremque quisquam, rem similique? Tempora repudiandae molestias consequuntur dolores, nisi tenetur et cum odio. Cupiditate doloribus at amet, impedit sapiente aperiam tenetur, iusto, perspiciatis repudiandae porro ipsam. Dolorum magnam provident, optio, vel reprehenderit iusto dolores laborum obcaecati soluta natus deleniti quae tempora. Amet officia minima cupiditate quaerat blanditiis earum enim aperiam culpa dicta eveniet? Officia.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aperiam labore, incidunt corporis eum cumque distinctio. Nam unde ipsa reprehenderit iure pariatur repellat, praesentium doloremque minus illo soluta animi minima atque, fugiat, quisquam voluptate a. Cupiditate, sequi, necessitatibus officiis assumenda tempora delectus pariatur laudantium obcaecati quo sapiente voluptas molestias! Minus animi dolore repellat perferendis soluta quibusdam aspernatur nobis itaque sapiente voluptatem esse eum recusandae doloremque minima, totam sint quas rerum laudantium nesciunt molestias exercitationem sunt autem? Sint ratione, dicta, vel facere error accusantium debitis ab repellat ipsum odit explicabo dolore exercitationem dolores, doloremque voluptate nemo illum animi minus quasi maxime optio vero officia ullam. Eius incidunt minus voluptas laboriosam iste. Delectus harum porro incidunt. Consequuntur, impedit quaerat. Non, perferendis natus.</p>
    </section>
    </>
  )
}

export default Home