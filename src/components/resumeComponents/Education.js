import React from 'react';
import moment from 'moment';

const Education = props => {
    let getEducation = props.educationData.map(function(item, index) {
  		let startdate = moment(item.startDate).format('MMM, YYYY');
  		let enddate = null;
      if (item.endDate !== '') {
        enddate = moment(item.endDate).format('MMM, YYYY');
      } else {
        enddate = 'Present';
      }
  		return (
          <div key={index}>
            <h3>{item.studyType}, {item.area}</h3>
  				  <h4>{item.institution}</h4>
            <h6>{item.location}</h6>
  				  <p>Study: {startdate} - {enddate}</p>
  				</div>
        )
  	});

  	return (
  	  <section className="education">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-mortar-board"></i> Education</h2>
        {getEducation}
      </section>
  	)
};

export default Education;
