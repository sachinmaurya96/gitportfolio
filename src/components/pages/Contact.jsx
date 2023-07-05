import React from 'react'

function Contact() {
  return (
    <>
       <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6759873448545!2d77.37411027519191!3d28.609495575677386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56226511421%3A0xe6139dfd7d44d4c4!2sR.K.%20Public%20School!5e0!3m2!1sen!2sin!4v1682681666673!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        data-aos-offset="250"
        referrerPolicy="no-referrer-when-downgrade" ></iframe>

      <div className="container" >
        <div className="contact-form">
          <form
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>
            <button type="submit" className='button-4'>Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
