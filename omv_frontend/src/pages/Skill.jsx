import React from 'react';
import Navi from '../components/Navi'
import Postcard from '../components/Postcard'
import Foot from '../components/Foot'

const Skill = () => {
  return (
   
          <>
      <Navi/>

      <div className="bg-violet-950 bg-gradient-to-r from-purple-900 via-black to-blue-950 min-h-screen px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Postcard
            username="Web Designing 2 (Backend with Node.js)"            image="piyush.png"
            description="To learn Backend Development with node js."
            addre="https://www.youtube.com/watch?v=ohIAiuHMKMI&list=PLinedj3B30sDby4Al-i13hQJGQoRQDfPo"
          />
          <Postcard
            username="Kunal Kushwaha"
            image="kunal.png"
            description="For DSA in JAVA."
            addre="https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"
          />
          <Postcard
            username="College Wallah"
            image="c.jpg"
            description="Complete your C programming and make a strong base in Coding world ."
            addre="www.youtube.com/watch?v=rQoqCP7LX60&list=PLxgZQoSe9cg1drBnejUaDD9GEJBGQ5hMt"
          />
          <Postcard
            username="Apna College"
            image="web.jpg"
            description="It is useful to take the test of frotend web development."
            addre="https://www.youtube.com/watch?v=l1EssrLxt7E&list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"
          />
          <Postcard
            username="Free Code Camp"
            image="free.png"
            description="Master Java Script."
            addre="https://www.youtube.com/watch?v=PkZNo7MFNFg&t=7710s"
          />
             <Postcard
            username="Code with Harry"
            image="harry.jpg"
            description="One shot revison of C programming."
            addre="https://www.youtube.com/watch?v=aZb0iu4uGwA"
          />
                <Postcard
            username="Apna College (Amazon Clone)"
            image="Apna.jpg"
            description="Amazon Clone."
            addre="https://www.youtube.com/watch?v=nGhKIC_7Mkk"
          />
                <Postcard
            username="Take U forward"
            image="TAke.png"
            description="Complete DSA"
            addre="https://www.youtube.com/watch?v=0bHoB32fuj0&list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz"
          />


          
         
        </div>
      </div><Foot/>
    </>
   
  )
}

export default Skill
