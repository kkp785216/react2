import React, { Component } from 'react'

export default class About extends Component {
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
                  <h3 className='mt-3 mb-4'>About Us</h3>
                  <p>This is a news website where you can see different different types or categories news and update yourself.</p>
                  <ul>
                    <li>Latest News</li>
                    <li>Whether</li>
                    <li>Cricket News</li>
                    <li>Bollywood</li>
                    <li>Latest Movies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
