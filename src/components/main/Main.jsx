import React from 'react'
import Header from '../Header.jsx'
import './main.scss';

class Main extends React.Component {
  render () {
    return (
      <div className="container-fluid main-container">
        <div className="row">
          <div className="col-xs-12">
          <Header />
          {this.props.children}
          </div>
        </div>
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
