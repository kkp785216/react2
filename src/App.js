import './App.css';

import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import About from './component/About';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Contact from './component/Contact';
import Footer from './component/Footer';
import PageNotFound from './component/PageNotFound';
import { SingleNews } from './component/SingleNews';
import LoadingBar from 'react-top-loading-bar'

export default function App() {
  // Switch News Sources
  const allNewsSourse = ["news_api", "mediastack", "newscatcherapi"];
  const newsSourse = allNewsSourse[2];
  const pageSize = 9;

  // Access token
  let api = "";
  if (newsSourse === "news_api") {
    api = "09f64ba2d14d4fe998e60ffdde07fc1b";
  }
  else if (newsSourse === "mediastack") {
    api = "e6b7dc89451713162924d861972581ce"
  }
  else if (newsSourse === "newscatcherapi") {
    api = "I-xYk9clo9G3jkvC06bFW1LynSvD7TbD5_TzRjvJex8";
  }

  // progress bar while dom is loading
  const [progress, setProgress] = useState(0);
  const changeProgress = (progress) => {
    setProgress(progress);
  }
  return (
    <Router>
      <div style={{ paddingTop: '3.5rem' }}>
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News changeProgress={changeProgress} key="home" api={api} pageSize={pageSize} category={'general'} title={'Home'} newsSourse={newsSourse} />} />
          <Route exact path="/general" element={<News changeProgress={changeProgress} key="general" api={api} pageSize={pageSize} category={'general'} newsSourse={newsSourse} />} />
          <Route exact path="/business" element={<News changeProgress={changeProgress} key="business" api={api} pageSize={pageSize} category={'business'} newsSourse={newsSourse} />} />
          <Route exact path="/entertainment" element={<News changeProgress={changeProgress} key="entertainment" api={api} pageSize={pageSize} category={'entertainment'} newsSourse={newsSourse} />} />
          <Route exact path="/health" element={<News changeProgress={changeProgress} key="health" api={api} pageSize={pageSize} category={'health'} newsSourse={newsSourse} />} />
          <Route exact path="/science" element={<News changeProgress={changeProgress} key="science" api={api} pageSize={pageSize} category={'science'} newsSourse={newsSourse} />} />
          <Route exact path="/sports" element={<News changeProgress={changeProgress} key="sports" api={api} pageSize={pageSize} category={'sports'} newsSourse={newsSourse} />} />
          <Route exact path="/technology" element={<News changeProgress={changeProgress} key="technology" api={api} pageSize={pageSize} category={'technology'} newsSourse={newsSourse} />} />
          <Route exact path="/about" element={<About title={'about'} />} />
          <Route exact path="/contact" element={<Contact title={'contact'} />} />
          <Route exact path="/single" element={<SingleNews title={'news'} />} />
          <Route exact path="/*" element={<PageNotFound title={'page not found'} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
