import React from 'react'

export default function Header() {
  return (
    <div className="header">

         <div className="headerframe">
             
                  <div className="left">
                    <div className="logosection flex align-center justify-center gap-2">
                        <div className="dots">
                            <div className="dot1"></div>
                            <div className="dot2">
                                <div className="dot"></div>
                                <div className="dotmarginer"></div>
                            </div>
                        </div>
                                  <div className="logo">WL</div>
                    </div>
          
                    <div className="headerlogotext">
                        <div className="web">Web</div>
                        <div className="level">Level</div>
                    </div>
                  </div>

                  <div className="right">
                    
                    <div className="rightframe">

                      <div className="Portfolio">PORTFOLIO</div>
                      <div className="About">ABOUT</div>

                      <div className="skill">SKILLS</div>

                      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
  Contact
</button>

                       
                    </div>

                  </div>
                  

                </div>   
      
           
    </div>
  )
}
