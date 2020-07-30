import React from 'react';
import Jobs from '../component/jobs';

const ListJobs = () => {
  let jobs = [
    {
      jobTitle: 'Production Safety Manager - EMEA',
      location: 'Madrid, Spain',
      jobType: 'Facilities, Workplace Services and Real Estate'
    },
    {
      jobTitle: 'Executive Assistant, Content Strategy and Analysis',
      location: 'Amsterdam, Netherlands',
      jobType: 'Strategy and Analysis'
    }
  ];

  return (
  <>
  <Jobs job={jobs} />
  </>
  )
}

export default ListJobs
