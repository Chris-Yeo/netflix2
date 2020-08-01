import React from 'react';
import {useParams} from 'react-router-dom'

function DetailBlog() {
  let blog = [
    {
      blogHeader: '| HEAD BLOG',
      blogTitle: 'Machine Learning for a Better Developer Experience',
      blogDescription: 'Imagine having to go through 2.5GB (not often, but does happen time to time) log entries from a failed software build — 3 million lines — to search for a bug or a regression that happened on line 1M. It’s probably not even doable manually! However, one smart approach to make it tractable might be to..'
    },
    {
      blogHeader: '| COMPANY BLOG',
      blogTitle: 'Ted Sarandos appointed co-CEO of Netflix',
      blogDescription: 'Imagine having to go through 2.5GB (not often, but does happen time to time) log entries from a failed software build — 3 million lines — to search for a bug or a regression that happened on line 1M. It’s probably not even doable manually! However, one smart approach to make it tractable might be to..'
    }
  ];

let {id} = useParams()
  let result = blog.filter(b => b.blogTitle === id);
  let use = result[0]
  return (
    <div className="blogPages">
        <div className="eachPage">
            <div className="title">
                <h3>{use.blogTitle}</h3>
            </div>
            <div className="icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-linkedin"></i>
                <i class="fas fa-envelope-square"></i>
            </div>
            <div className="description">
                <p>{use.blogDescription}</p>
            </div>
        </div>
    </div>
  );
}

export default DetailBlog;