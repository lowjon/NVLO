import React from 'react'
import {Link} from 'react-router'

function Home() {
    return (
        <div className="col jumbotron home-ctnr">
            <h1 className="text-center">Welcome to NVLO</h1>
            <h4 className="text-center">Please select your location:</h4>

                <div className="col-6 btn-group-vertical">
                    <Link to='/inventory?location=1' className="btn btn-outline-success">Wieners</Link>
                    <br/>
                    <Link to="/inventory?location=2" className="btn btn-outline-danger">Waffleton</Link>
                    <br/>
                    <Link to="/inventory?location=3" className="btn btn-outline-primary">HQ</Link>
                </div>

        </div>

    )
}

module.exports = Home
