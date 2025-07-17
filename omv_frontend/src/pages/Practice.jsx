import React from 'react'
import Navi from '../components/Navi'

import Card from '../components/Card'
import Foot from '../components/Foot.jsx'
import Tech from '../components/Tech'
const Practice = () => {
  return (

   <>
     <Navi/>
    <div className='grid pt-10 bg-black grid-cols-1 lg:grid-cols-2 p-8' >
     
       <Tech img="https://cdn.worldvectorlogo.com/logos/hackerrank.svg" username="HackerRank" description="HackerRank is a platform for practicing coding, preparing for tech interviews, and participating in coding contests. Ideal for students and developers to sharpen problem-solving skills."  address="https://www.hackerrank.com/ " />
        <Tech img="Chef.jpg"  username="Codechef" description="CodeChef helps you improve problem-solving skills through competitive programming contests, practice questions, and challenges. Great platform to learn DSA and compete globally."  address="https://www.codechef.com/"/>
         <Tech img="Forces.jpg"  username="CodeForce" description="Codeforces is a popular competitive programming platform with frequent contests. It helps coders build logic, speed, and accuracy through challenging problems and global rankings."  address="https://codeforces.com/"/>
          <Tech img="Leet.png"  username="LeetCode" description="LeetCode is the go-to platform for coding interview preparation. Practice hundreds of problems in data structures, algorithms, and system design for top tech jobs.

"  address="https://leetcode.com/ "/>
          
    </div>
    <Foot/>
    
    </>
  )
}

export default Practice
