import React from 'react'
import ReactDom from 'react-dom'
import routes from './config/routes.js'


// TOM's way of building react Components


// class App extends React.Component{
//   render() {
//     return (
//       <h1>Hello NVLO glerp</h1>
//     )
//   }
// }

ReactDom.render(
  routes,
  document.getElementById('app')
)
