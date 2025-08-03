import React from 'react';
import Postcard from '../components/Postcard';
import Navi from '../components/Navi';
import Foot from '../components/Foot';
const Academic = () => {
  return (
    <>
      <Navi/>

      <div className="bg-violet-950 bg-gradient-to-r from-purple-900 via-black to-blue-950 min-h-screen px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <Postcard
            username="Fearless Innocent Math"
            image="math.jpg"
            description="To complete Engineering Mathematics1 and Engineering Mathematics2."
            addre="https://www.youtube.com/@dr.anuj.fearlessinnocentmath"
          />
          <Postcard
            username="Technical Physics"
            image="physics.jpg"
            description="To Complete Engineering Physics."
            addre="https://www.youtube.com/@TechnicalPhysics"
          />
           <Postcard
            username="Basic Electrical Enginnering"
            image="bee.jpg"
            description="To Complete Basic Electrical Engineering."
            addre="https://www.youtube.com/watch?v=Vd2UJiIPbag&list=PL9RcWoqXmzaLTYUdnzKhF4bYug3GjGcEc"
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
            username="Gate Way Classes"
            image="gate.jpg"
            description="Useful for both Engineering Mathematics and Engineering physics."
            addre="https://www.youtube.com/@gatewayclasses"
          />
             <Postcard
            username="Code with Harry"
            image="harry.jpg"
            description="One shot revison of C programming."
            addre="https://www.youtube.com/watch?v=aZb0iu4uGwA"
          />
         
        </div>
      </div><Foot/>
    </>
  );
};

export default Academic;
