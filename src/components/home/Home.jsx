import React from 'react'
import {Link} from 'react-router'

function Home () {
  return (
    <div className="jumbotron btn-group-vertical">
      <h1 className="text-center">This is Home</h1>
      <br/>
      <h3>Where you at Dawg?</h3>

      <Link to='/inventory?location=1' className="btn btn-outline-success">Wieners</Link>
      <br/>
      <Link to="/inventory?location=2" className="btn btn-outline-danger">Waffleton</Link>
      <br/>
      <Link to="/inventory?location=3" className="btn btn-outline-primary">HQ</Link>

    </div>
  )
}

module.exports = Home
