import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div>
                <div className="col">
                    <div className="card mb-4" style={{ minHeight: '95%' }} aria-hidden="true">
                        <div style={{ width: '100%', height: '195px', backgroundColor: 'grey', cursor: 'wait' }}></div>
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>
                            <a href="#" tabIndex="-1" className="btn btn-secondary btn-sm  disabled placeholder col-6"></a>
                        </div>
                        <div className="card-footer placeholder-glow">
                            <span className="placeholder col-8"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
