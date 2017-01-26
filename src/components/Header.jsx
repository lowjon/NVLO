import React from 'react'
import {Link} from 'react-router'


class Header extends React.Component {
  render() {
    return (
      <div className="main-header text-center">
        <Link to="/" className="lead nvlo-link">NVLO</Link>
      </div>
    )
  }
}

export default Header
