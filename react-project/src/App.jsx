// import { useState } from 'react'
// import FunctionalComponent from './components/functional-component.jsx'
// import ProductList from './components/products/index.jsx'
// import './App.css'
// import ProductItem from './components/products/components/product-item.jsx'
// import ShoppingList from './components/shoping-list/shoping-list.jsx'
// const products = ["product1","product 2","product 3"];
// import PersonTodo from './components/todo/todo.jsx'
// import official from './assets/todos-image/EnamulOfficial.png'
// import avatar from './assets/todos-image/2023-04-09 18.59.jpg'
// import ClassBasedComponent from './components/class-bassed-component.jsx'
// import Forms from './components/forms/forms.jsx'

import ContextButtonComponent from "./components/context-concepts/button"
import ContextTextComponent from "./components/context-concepts/text"

import Hero from "./components/hero/hero"
import Navbar from "./components/navbar/navbar"
import UseReducerConcept from "./components/use-reducer-concept"

// import UserList from './components/users/index.jsx'
function App() {
  const text1 = `"
  Tailwind CSS in the only frameowork that I've seen scale on large teams. Its's easy to cutomize, adapts to any design, and the build size is tiny.
  "`
  const text2 = `"
  I started to learn react in practical from tonight Idn't no how will be this jearny.
  "`
  const text3 = `"
  React and tailwind is too awousome, I'm falling in love with this combination.
  "`
  return (
    // <div className='flex justify-center mt-4'>
    //   {/* <h1>Welcome to this React Projects</h1> */}
    //   {/* <FunctionalComponent/> */}
    //   {/* <ProductList products = {products} name = "Enamul" section = "63 M"/>
    //   <ProductItem /> */}
    //   {/* <ShoppingList></ShoppingList> */}
    //   {/* <button className='text-yellow-100'>Click me</button> */}
    //   {/* <div className='flex gap-2 p-4'>
    //   <PersonTodo src ={avatar} title = "Enamul" text ={text1} contact={true}/>
    //   <PersonTodo src ={official} title = "Person 2" text ={text2} contact={false}/>
    //   <PersonTodo src ={avatar} title = "Person 3" text ={text3} contact = {true}/>
    //   </div> */}
    // {/* <ClassBasedComponent/> */}
    // {/* <Forms/> */}
    // {/* <UserList/> */}
    // </div>
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero/>
      </div>
      {/* <ContextButtonComponent />
      <ContextTextComponent /> */}
      <UseReducerConcept />
    </>
  )
}

export default App
