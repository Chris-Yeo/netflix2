import React from 'react';
import ReactPlayer from 'react-player';

import BackgroundVideo from '../component/backgroundVideo';
import Cards from '../component/cards';
import Image1 from '../image/food1.jpg';
import Image2 from '../image/food2.jpg';
import Video from '../component/videos';
import './home.css'
import Blog from '../component/blog'

const Home =() => {
  let card = [
    {
      image: Image1,
      title: "Freedom and Responsibility",
      description: "Our core philosophy is people over process. Our culture has been instrumental to our success and has helped us attract and retain stunning colleagues, making work here more satisfying.",
      buttonText: "READ ABOUT OUR CULTURE" ,
      position: "left"
    },
    {
      image: Image2,
      title:"Internet entertainment. Global original content. Product personalization.",
      description: "Our first original series debuted in 2013. Over the following decades, Internet TV will replace linear, and we hope to keep leading by offering an amazing entertainment experience.",
      buttonText: "SEE WHAT'S NEXT",
      position: "right"
    }
  ];

let video = [
  {
    videoplayer: <ReactPlayer width={320} height={320} url='https://www.youtube.com/watch?v=qXPhVYpQLPA&t=258s' />
  },
  {
    videoplayer: <ReactPlayer width={320} height={320}  url ='https://www.youtube.com/watch?v=yHQ-FkiP5Ws' />
  },
  {
    videoplayer: <ReactPlayer width={320} height={320}  url='https://www.youtube.com/watch?v=q5foZ80AENM' />
  }
];

let blog = [
  {
    blogHeader: '| HEAD BLOG',
    blogTitle: 'Machine Learning for a Better Developer Experience',
    blogDescription: 'Imagine having to go through 2.5GB (not often, but does happen time to time) log entries from a failed software build — 3 million lines — to search for a bug or a regression that happened on line 1M. It’s probably not even doable manually! However, one smart approach to make it tractable might be to..'
  },
  {
    blogHeader: '| COMPANY BLOG',
    blogTitle: 'Ted Sarandos appointed co-CEO of Netflix'
  }
];

  return (
    <>
    <BackgroundVideo/>
    <Cards cards={card}/>
    <h2>Latest From Netflix</h2>
    <Video youtubeVideo={video} />
    <Blog blog={blog}/>
  </>
  )
};

export default Home

