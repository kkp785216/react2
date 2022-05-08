import React, { Component } from 'react'

export class PageNotFound extends Component {
  componentDidMount() {
    document.title = 'NewsMonkey - ' + this.props.title.replace(this.props.title[0], this.props.title[0].toUpperCase());
  }
  render() {
    return (
      <div>
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h3>Page not found</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default PageNotFound
