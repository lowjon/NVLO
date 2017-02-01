import React from 'react'
import {Link} from 'react-router'


class Header extends React.Component {
  render() {
    return (
      <div className="navbar navbar-inverse bg-inverse main-header text-center">
        <Link to="/" className="navbar-brand">NVLO</Link>
      </div>
    )
  }
}

export default Header
