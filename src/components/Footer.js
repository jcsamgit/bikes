import React from 'react'
import '../CSS/footer.css'

export default function Footer() {
  return (
    <div>
        <footer class="footerRedes">   
            <ul class="footerRedes__lista">
                <li class="footerRedes__item">
                    <a href="https://www.facebook.com" class="footerRedes__enlace facebook"><i class="fab fa-facebook-f"></i></a>
                </li>
                <li class="footerRedes__item">
                    <a href="https://www.instagram.com" class="footerRedes__enlace   instagram"><i class="fab fa-instagram"></i></a>
                </li>
                <li class="footerRedes__item">
                    <a href="https://www.instagram.com" class="footerRedes__enlace twitter"><i class="fab fa-twitter"></i></a>
                </li>
                
            </ul>
            
        </footer>
    </div>
  )
}
