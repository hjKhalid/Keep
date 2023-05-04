import React from 'react'
const date= new Date().getFullYear();
// const year=date().getyear


const Footer = () => {
  return (<>
    <div className='footer'>
  <footer>
    <p>
        Copyright @ {date}
        <div class="footer-padding"></div>
  <div className="footer">
    <p>Made with ❤️ by Khalid Hussain</p>
  </div>
    </p>
   
      
  </footer> 
  </div>
  </>
  )
  
}

export default Footer
