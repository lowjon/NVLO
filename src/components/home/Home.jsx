import React from 'react'
import {Link} from 'react-router'

function Home () {
  return (
    <div>
      <h1 className="text-center">This is Home</h1>
      <br/>
      <h3>Where you at Dawg?</h3>

      <Link to='/inventory?location=weiners' className="btn btn-large btn-success buttons">Wieners</Link>
      <br/>
      <Link to="/inventory?location=waffleton" className="btn btn-large btn-danger buttons">Waffleton</Link>
      <br/>
      <Link to="/inventory?location=hq" className="btn btn-large btn-primary buttons">HQ</Link>
    </div>
  )
}

module.exports = Home
