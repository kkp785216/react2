import { Link } from 'react-router-dom';

const NewsItem = (props) => {
        function limitLine(input) {
            return {
                display: '-webkit-box',
                maxWidth: '100%',
                margin: '0 auto',
                WebkitLineClamp: `${input}`,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }
        }
        function lastUpdated(input) {
            let dateDiff = (new Date() - new Date(input)) / 1000;
            if (dateDiff < 60) {
                return { date: (Math.floor(dateDiff) > 1 ? Math.floor(dateDiff) + ' Seconds' : Math.floor(dateDiff) + ' Second'), diff: Math.floor(dateDiff) }
            }
            else if (dateDiff < 3600) {
                return { date: (Math.floor(dateDiff / 60) > 1 ? Math.floor(dateDiff / 60) + ' Minutes' : Math.floor(dateDiff / 60) + ' Minute'), diff: Math.floor(dateDiff) }
            }
            else if (dateDiff < 86400) {
                return { date: (Math.floor(dateDiff / 3600) > 1 ? Math.floor(dateDiff / 3600) + ' Hours' : Math.floor(dateDiff / 3600) + ' Hour'), diff: Math.floor(dateDiff) }
            }
            else if (dateDiff < 2592000) {
                return { date: (Math.floor(dateDiff / 86400) > 1 ? Math.floor(dateDiff / 86400) + ' Days' : Math.floor(dateDiff / 86400) + ' Day'), diff: Math.floor(dateDiff) }
            }
            else if (dateDiff < 31536000) {
                return { date: (Math.floor(dateDiff / 2592000) > 1 ? Math.floor(dateDiff / 2592000) + ' Months' : Math.floor(dateDiff / 2592000) + ' Month'), diff: Math.floor(dateDiff) }
            }
            else if (dateDiff >= 31536000) {
                return { date: (Math.floor(dateDiff / 31536000) > 1 ? Math.floor(dateDiff / 31536000) + ' Years' : Math.floor(dateDiff / 31536000) + ' Year'), diff: Math.floor(dateDiff) }
            }
        }
        let { title, description, imageUrl, newsUrl, publishedAt } = props;
        return (
            <>
                <div className="col">
                    <div className="card mb-4" style={{ minHeight: '95%' }}>
                        <a href={newsUrl} target="_blank" rel="noreferrer" style={{ maxHeight: '195px', overflow: 'hidden' }}><img src={imageUrl ? imageUrl : 'https://discountseries.com/wp-content/uploads/2017/09/default.jpg'} className="card-img-top" alt="..." /></a>
                        <div className="card-body d-flex justify-content-between flex-column">
                            <div>
                                <h5 className="card-title"><a style={limitLine(2)} className='text-decoration-none' target="_blank" rel="noreferrer" href={newsUrl}>{title}</a></h5>
                                {lastUpdated(publishedAt).diff < 10800 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">New</span>}
                                <p className="card-text" style={limitLine(3)}>{description}</p>
                            </div>
                            <Link to='/single' className="btn btn-link btn-sm ps-0 me-auto mt-3">Read more...</Link>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated {`${lastUpdated(publishedAt).date}`} ago</small>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default NewsItem
