import React from 'react'
import User from './Rest Api/User'
import Users1 from './Rest Api/Users1'
import Post from './Rest Api/Post'
import RandomUser from './Rest Api/RamdomUser'
import Card from './props/Card'
import Product from './props/Product.jpg'
import ssp from './props/ssp.png'
import Navbar from './Use State/Navbar'


const App = () => {
  return ( 
    <>
     <Navbar/> 
    <div className ="flex flex-wrap gap-6 p-6 justify-center">
     
      <Card
          image={Product}
          title="Product 1"
          des="safioof doajshojh fhallaf fhhfhfh fhhfhf hfhfh hhfhfh "
          price="200"
          />

          
           <Card
          image={Product}
          title="Product 1"
          des="safioof doajshojh fhallaf fhhfhfh fhhfhf hfhfh hhfhfh "
          price="200"
          />
           <Card
          image={Product}
          title="Product 1"
          des="safioof doajshojh fhallaf fhhfhfh fhhfhf hfhfh hhfhfh "
          price="200"
          />
           <Card
          image={Product}
          title="Product 1"
          des="safioof doajshojh fhallaf fhhfhfh fhhfhf hfhfh hhfhfh "
          price="200"
          />
           <Card
          image={Product}
          title="Product 1"
          des="safioof doajshojh fhallaf fhhfhfh fhhfhf hfhfh hhfhfh "
          price="200"
          />
           <Card
          image={Product}
          title="Product 1"
          des="safioof doajshojh fhallaf fhhfhfh fhhfhf hfhfh hhfhfh "
          price="200"
          />
           <Card
          image={Product}
          title="Product 1"
          des="safioof doajshojh fhallaf fhhfhfh fhhfhf hfhfh hhfhfh "
          price="200"
          />
           <Card
          image={Product}
          title="Product 1"
          des="safioof doajshojh fhallaf fhhfhfh fhhfhf hfhfh hhfhfh "
          price="200"
          />



      
    </div>
    </>
  )
}

export default App