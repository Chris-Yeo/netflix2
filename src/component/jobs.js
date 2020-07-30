import React from 'react'

import './jobs.css'

const Jobs = ({job}) => {
    return (
        <div className="jobs">
             {
            job.map((element) => (
                <div className="jobContainer">
                    <div className="jobTitle">
                        <h5>{element.jobTitle}</h5>
                    </div>
                    <div className="jobDetails">
                        <div className="location">
                            <p><i class="fas fa-location-arrow"></i>{element.location}</p>
                        </div>
                        <div className="jobType">
                            <p><i class="fas fa-users"></i>{element.jobType}</p>
                        </div>
                    </div>
                </div>
               
            ))
        }
        </div>
    )
}

export default Jobs