import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id = 'services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                HTML and CSS are the core technologies for building Web pages.
                 HTML provides the structure of the page for devices. 
                 Along with graphics and scripting, 
                 HTML and CSS are the basis of building Web pages and Web Applications
              </p>
           </li>
            
          </ul>
        </article>
        {/* End of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
                JavaScript is an object-based scripting programming language. 
                It is also being used for server-side network programming, 
                such as runtime environments like Node.js. 
                I am developing a web page using this JavaScript.
              </p>
            </li>
           
            
          </ul>
        </article>
        {/* End of Content Creation */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>
              React is an open-source front-end JavaScript library for 
              building user interfaces based on UI components. 
              It allows developers to create large web applications that can change data,
              without reloading the page. 
              </p>
            </li>
          
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services