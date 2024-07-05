import React from 'react'
import ReactDOM from 'react-dom/client'
//import Chai from './chai'
//import {jsx as _jsx} from "react/jsx-runtime.js"

// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App | chai</h1>
//     </div>
//   )
// }

// const reactElement = {
//   type : 'a',
//   props : {
//       href : 'http://google.com',
//       target : '_blank',
//   },
//   children : 'Click me to visit google'
//}

const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href:'http://google.com', target :'_blank'},
  'click me to visit google',
  // anotherElement,
  anotherUser
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google </a>
)


ReactDOM.createRoot(document.getElementById('root')).render(
  // Myapp();
  reactElement, 
  anotherElement
);
 