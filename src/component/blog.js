import React from 'react';
import { 
Link,
Switch,
BrowserRouter as Router,
Route
 } from 'react-router-dom/cjs/react-router-dom.min';
import './blog.css';

const Blog = ({blog, detailblog}) => {
    const navStyle ={
        color:'gray'
      };
    return (
        <div className="blogContainer">
            {
                blog.map((element) => (
                    <Router>
                        <div className="blogCard">
                                <div class="card col-md-5">
                                    <h5 class="card-header">{element.blogHeader}</h5>
                                    <div class="card-body">
                                        <h5 class="card-title">{element.blogTitle}</h5>
                                        <p class="card-text">{element.blogDescription}</p>
                                        <Link style={navStyle} to={'/detailblog'}>
                                        <a href="#" class="btn btn-primary">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                                <Switch>
                                    <Route path="/detailblog" component={detailblog} />
                                </Switch>    
                        </div>
                    </Router>
                ))

            }
        </div>
    )
}

export default Blog