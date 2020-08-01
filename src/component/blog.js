import React from 'react';
import { 
Link,
Switch,
BrowserRouter as Router,
Route,
 } from 'react-router-dom/cjs/react-router-dom.min';
import './blog.css';


const Blog = ({blog}) => {
    const navStyle ={
        color:'gray'
      };
    return (
        <div className="blogContainer">
               <div className="blogCard row">
            {
                blog.map((element) => (
                  
                     
                                <div class="card col-md-5">
                                    <h5 class="card-header">{element.blogHeader}</h5>
                                    <div class="card-body">
                                        <h5 class="card-title">{element.blogTitle}</h5>
                                        <p class="card-text">{element.blogDescription}</p>
                                        <Link style={navStyle} to={`/detailblog/${element.blogTitle}`}>
                                        <button className="btn btn-primary">Read More</button>
                                        </Link>
                                    </div>
                                </div>
                                
                     
              ))
            }
               </div>
            </div>
      
    )
}

export default Blog