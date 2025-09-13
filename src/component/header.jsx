import React from 'react'
import './header.css'

const header = () => {
  return (
  
    <div  className='header'>

      <div className="outercontainer">
        <div className="innercontainer">

          <div className="logo"><a href="#">IIElevenLabs</a></div>

          <ul className="ul">
            <li className="item">Creative Platform
            <svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-400 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg></li>
            <li className="item">Agents Platform
            <svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-400 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg></li>
            <li className="item">Developers
            <svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg></li>
            <li className="item">Resources
            <svg className="ml-1 w-3 h-3 text-black-400 group-hover:text-black-600 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
            </svg></li>
            <li className="item">Enterprise</li>
            <li className="item">Pricing</li> 

          </ul>
          <div className="logincard">
            <ul className="card">
              <li className="item2" id="login">Log in</li>
              <li className="item2" id="signup">Sign up</li>
            </ul>

          </div>
        </div>
      </div>

    </div>
  )
}

export default header