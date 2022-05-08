import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                {/* Footer */}
                <div className="bg-dark text-light">
                    <div className="container py-3">
                        <div className="row justify-content-between">
                            <div className="col-md-3 pt-4">
                                <h5 className="pb-2">News Monkey</h5>
                                <p style={{color: '#c9c9c9'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                                    repellendus odio id, temporibus rem aliquam. Quidem laudantium velit repellat aspernatur.</p>
                            </div>
                            <div className="col-md-3 pt-4">
                                <h5 className="pb-2">Important Links</h5>
                                <Link to="/" className="text-decoration-none d-block" style={{color: '#c9c9c9'}}>Home</Link>
                                <Link to="/about" className="text-decoration-none d-block" style={{color: '#c9c9c9'}}>About</Link>
                                <Link to="/contact" className="text-decoration-none d-block" style={{color: '#c9c9c9'}}>Contact Us</Link>
                            </div>
                            <div className="col-md-3 pt-4">
                                <h5 className="pb-2">Categories</h5>
                                <Link to="/general" className="text-decoration-none d-block" style={{color: '#c9c9c9'}}>General</Link>
                                <Link to="/business" className="text-decoration-none d-block" style={{color: '#c9c9c9'}}>Business</Link>
                                <Link to="/health" className="text-decoration-none d-block" style={{color: '#c9c9c9'}}>Health</Link>
                                <Link to="/sports" className="text-decoration-none d-block" style={{color: '#c9c9c9'}}>Sports</Link>
                                <Link to="/entertainment" className="text-decoration-none d-block" style={{color: '#c9c9c9'}}>Entertainment</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Copyright */}
                <div className="py-3 bg-secondary text-center text-light">
                    Copyright © 2022 <a className="text-decoration-none" style={{color: 'lightskyblue'}} href="#footer">Bootstrap.com</a>
                    Allright Reserved
                </div>
            </div>
        )
    }
}
