import React, { Component } from 'react'

export class SingleNews extends Component {
  render() {
    return (
      <div>
        <div className="container my-4">
            <div className="row">
                <div className="col col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum.</h3>
                            <img className='d-block m-auto' src="https://i.dailymail.co.uk/1s/2022/05/03/08/57340631-0-image-a-326_1651563413525.jpg" style={{height:'200px'}} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default SingleNews
