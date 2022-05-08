import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from './Loading';

export default function News(props) {
  const [page, setPage] = useState(1);
  const [offset, setOffest] = useState(0);
  const [articles, setaArticles] = useState([])
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [loadError, setLoadError] = useState(false);

  const fetchUrl = () => {
    let url = "";
    let options = { method: "GET" };
    switch (props.newsSourse) {
      case ("news_api"):
        {
          let params = {
            "country": props.country,
            "category": props.category,
            "apiKey": props.api,
            "page": page,
            "pageSize": props.pageSize,
          };
          url = `https://newsapi.org/v2/top-headlines?${(new URLSearchParams(params)).toString()}`;
        }
        break;
      case ("mediastack"):
        {
          let params = {
            "countries": props.country,
            "categories": props.category,
            "access_key": props.api,
            "offset": offset,
            "limit": props.pageSize,
          };
          url = `http://api.mediastack.com/v1/news?${(new URLSearchParams(params)).toString()}`;
        }
        break;
      case ("newscatcherapi"):
        {
          let params = {
            "countries": props.country,
            "topic": props.category === "general" ? "news" : props.category === "health" ? "science" : props.category === "science" ? "energy" : props.category === "sports" ? "sport" : props.category === "technology" ? "tech" : props.category,
            "page": page,
            "page_size": props.pageSize,
            "lang": ["hi"]
          };
          options = {
            method: "GET",
            headers: { "x-api-key": props.api }
          }
          url = "https://api.newscatcherapi.com/v2/latest_headlines?" + (new URLSearchParams(params)).toString();
          break;
        }
      default:
    }
    return { url, options };
  }

  useEffect(() => {
    let status = "";
    props.changeProgress(10);
    fetch(fetchUrl().url, fetchUrl().options)
      .then((response) => { props.changeProgress(70); status = response.status; return response.json() })
      .then((result) => {
        if (status === 200) {
          if (props.newsSourse === "news_api") {
            setaArticles(articles.concat(result.articles));
            setTotalResults(result.totalResults);
          }
          else if (props.newsSourse === "mediastack") {
            setaArticles(articles.concat(result.data));
            setTotalResults(result.pagination.total / props.pageSize);
            setOffest(props.pageSize);
          }
          else if (props.newsSourse === "newscatcherapi") {
            setaArticles(articles.concat(result.articles));
            setTotalResults(result.total_pages);
          }
          setLoading(false);
        }
        else {
          setLoadError(true);
        }
        props.changeProgress(100);
        setLoading(false);
      });
    setPage(page + 1)
    props.title ? document.title = 'NewsMonkey - ' + props.title.replace(props.title[0], props.title[0].toUpperCase()) : document.title = 'NewsMonkey - ' + props.category.replace(props.category[0], props.category[0].toUpperCase());
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    let status = "";
    setTimeout(() => {
      fetch(fetchUrl().url, fetchUrl().options)
        .then((response) => { status = response.status; return response.json() })
        .then((result) => {
          if (status === 200) {
            if (props.newsSourse === "news_api") {
              setaArticles(articles.concat(result.articles));
              setTotalResults(result.totalResults);
            }
            else if (props.newsSourse === "mediastack") {
              setaArticles(articles.concat(result.data));
              setTotalResults(result.pagination.total / props.pageSize);
              setOffest(props.pageSize);
            }
            else if (props.newsSourse === "newscatcherapi") {
              setaArticles(articles.concat(result.articles));
              setTotalResults(result.total_pages);
            }
            setLoading(false);
          }
          else {
            setLoadError(true);
          }
        });
    }, 1500);
  };

  const newsLoading = (input) => {
    let Arr = [];
    for (let i = 0; i < input; i++) {
      Arr.push(i);
    }
    return Arr;
  }

  return (
    <>
      <div className="container mt-4" >
        <h3 className='mb-3'>NewsMonkey - {props.category.replace(props.category[0], props.category[0].toUpperCase())} - Top Headlines</h3>
        <div style={{ position: 'relative' }}>
          <InfiniteScroll
            style={{ overflow: 'unset' }}
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<div className="d-flex justify-content-center mb-3"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>}
          >
            {/* {loading && <div className="d-flex justify-content-center mb-3"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>} */}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
              {loading && newsLoading(props.pageSize).map((element) => {
                return <Loading key={element} />
              })}
              {!loading && props.newsSourse === "news_api" && articles.length > 0 && articles.map((element) => {
                return <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} />
              })}
              {!loading && props.newsSourse === "mediastack" && articles.length > 0 && articles.map((element, index) => {
                return <NewsItem key={index} title={element.title} description={element.description} imageUrl={element.image} newsUrl={element.url} publishedAt={element.published_at} />
              })}
              {!loading && props.newsSourse === "newscatcherapi" && articles.length > 0 && articles.map((element) => {
                return <NewsItem key={element._id} title={element.excerpt} description={element.summary} imageUrl={element.media} newsUrl={element.link} publishedAt={element.published_date} />
              })}
            </div>
            {loadError && <h4 className='text-center py-3'>Loading Error...</h4>}
          </InfiniteScroll>
        </div>
      </div>
    </>
  )
}

News.defaultProps = {
  category: 'general',
  country: 'in',
  pageSize: 9,
}

News.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string,
  pageSize: PropTypes.number,
}