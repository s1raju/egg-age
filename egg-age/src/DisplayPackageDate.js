import React from 'react';

const DisplayPackageDate = (props) => {
  if (!props.datePackaged) return null;
  return (
    <div>
      Your eggs were packaged on {props.datePackaged}
    </div>
  )
}

export default DisplayPackageDate;