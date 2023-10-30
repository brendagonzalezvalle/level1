import React from "react"

export default function Footer(){
    return (
        <footer className="footer-container">
              
            <div className="footer-icons"> 
                <div className="footer-icon1">
                    <i class="fa-brands fa-square-twitter"></i>
                </div> 
                <div> 
                    <i class="fa-brands fa-facebook"></i> 
                </div> 
                <div> 
                    <i class="fa-brands fa-github"></i>
                </div> 
            </div> 
            
            <div className="footer-copyright">Copyright © Your Website 2022</div>  
        </footer>
    )
}