import React, { Component } from 'react'

export default class Contact extends Component {
    componentDidMount() {
        document.title = 'NewsMonkey - ' + this.props.title.replace(this.props.title[0], this.props.title[0].toUpperCase());
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 my-3">
                            <div className="card">
                                <div className="card-body">
                                    <h3 className='mt-3 mb-4'>Contact Us</h3>
                                    <form className='mb-3'>
                                        <div className="row">
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="first-name" className="form-label">First Name</label>
                                                    <input type="name" className="form-control" id="first-name" name='first-name' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="mb-3">
                                                    <label htmlFor="last-name" className="form-label">Last Name</label>
                                                    <input type="name" className="form-control" id="last-name" name='last-name' aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="email" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="message" className="form-label">Message</label>
                                            <textarea className="form-control" id="message" name='message' rows={3} cols={10} />
                                        </div>
                                        <button type="submit" className="btn btn-primary mt-2">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
