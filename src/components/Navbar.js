import React from 'react';
import "./navbar.css";
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from 'react-icons/fa';
const Navbar = () => {
  return (
    <>
      <nav className = "main-nav">
        <div className='logo'>
            <h2>
                <span>S</span>ameer
                <span>N</span>
                <span>S</span>ons
            </h2>
        </div>

        <div className='menu-link'>
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>About us</a>
                </li>
                <li>
                    <a href='#'>Conatct Us</a>
                </li>
                <li>
                    <a href='#'>R&D</a>
                </li>
                <li className="dropdown">
                    <a href='#'>Products</a>
              <div className="dropdown-content">
                <a href="#">Reactive ME Dyes</a>
                <a href="#">RGB</a>
                <a href="#">Product 3</a>
              </div>
            </li>
            </ul>
        </div>

        <div className='enquiry-btn'>
          {/* Button for Enquiry Now */}
          <button>Enquiry Now</button>
        </div>

        {/*Social media links*/}
        {/* <div className='social-media'>
            <ul className='social-media-desktop'>
                <li>
                    <a href="">
                        <FaFacebookSquare className='facebook'/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaInstagramSquare className='instgram'/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <FaYoutubeSquare className='youtube'/>
                    </a>
                </li>
            </ul>
        </div> */}

      </nav>
      {/* <section className='hero-section'>
        <p>Welocome to </p>
        <h1>Sameer N Sons</h1>
      </section> */}
    </>
  )
}

export default Navbar
