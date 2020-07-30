import React from 'react'

const blogPages = ({pages}) => {
    return (
        <div className="blogPages">
            {
            pages.map((element) => (
                <div className="eachPage">
                    <div className="date">
                        <h3>{element.date}</h3>
                    </div>
                    <div className="title">
                        <h3>{element.title}</h3>
                    </div>
                    <div className="icons">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fas fa-envelope-square"></i>
                    </div>
                    <div className="description">
                        <p>{element.description}</p>
                    </div>
                </div>
            ))
            }
        </div>
    )
}