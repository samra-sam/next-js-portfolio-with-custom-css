const page = () => {
    return (
      <div id="contact-container">
        <h1 id="contact-title" >CONTACT ME</h1>
        <p>
        Get in touch today to discuss your project needs or any inquiries. We are here to provide personalized assistance and expert solutions to bring your digital ideas to life. Reach out now!
        </p>
        <div id="contact-form">
        <div id="form-input">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
          <textarea name="message" id="message" rows={3} placeholder="Message"></textarea>
  
          <button>Send Message</button>
        </div>
  
          <map>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231649.78350580044!2d66.99251014275394!3d24.879969905155086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3398c21ee360d%3A0x6114a9b297d321eb!2sShah%20Faisal%20Town%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731223790156!5m2!1sen!2s" width="350" height="350"   loading="eager"></iframe>
          </map>
  
        </div>
      </div>
    )
  }
  
  export default page