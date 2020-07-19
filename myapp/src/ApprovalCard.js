import React from "react";

const ApprovalCard = (props) => {
  console.log(props);
  return (
    <div className='card'>
      <div className='content'>
        {props.children}
        <div className='header'>Elliot Fu</div>
        <div className='meta'>Friends of Veronika</div>
        <div className='description'>
          Elliot requested permission to view your contact details
        </div>
      </div>
      <div className='extra content'>
        <div className='ui two buttons'>
          <div className='ui basic green button'>Approve</div>
          <div className='ui basic red button'>Decline</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
