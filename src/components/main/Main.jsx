import React from 'react'
import Header from '../Header.jsx'
import './main.scss';

class Main extends React.Component {
  render () {
    return (
      <div className="main-container jumbotron">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

//class App extends React.Component{
//   render() {
//     return (
//       <h1>Hello NVLO glerp</h1>
//     )
//   }
// }

module.exports = Main
