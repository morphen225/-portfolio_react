import React from 'react';
import moment from 'moment';


const WorkItem = props => {
    const getWorkDates = () => {
        const startdate = moment(props.workItemData.startDate).format('MMM, YYYY');
        let enddate = null;
        if (props.workItemData.endDate !== '') {
          enddate = moment(props.workItemData.endDate).format('MMM, YYYY');
        } else {
          enddate = 'Present';
        }

        return <span className='startdate'>{startdate} - {enddate}</span>
    }

    const getHighlights = props.workItemData.highlights.map(function(item, index) {
        return (<li key={index}>{item}</li>)
    });

    return (
        <div className="workItem">
          <h3>{props.workItemData.position}, <span>{props.workItemData.company}</span></h3> 
          <h4>{props.workItemData.location}</h4>
          <p className="workDates">{getWorkDates()}</p>
          <Text content={props.workItemData.summary}/>
          <ul>{getHighlights}</ul>
        </div>
    )
};
/* helper function/component to implement line break '<br />' by parsing the string*/
function breakLine(text) {
    var regex = /(<br \/>)/g;
    return text.split(regex).map(function(line) {
        return line.match(regex) ? React.createElement('br') : line;
    });
}

const Text = React.createClass({
    render: function() {
        return <div>{ breakLine(this.props.content) }</div>;
    }
});

export default WorkItem;
