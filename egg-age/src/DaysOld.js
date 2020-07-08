import React from 'react';

const DaysOld = (props) => {
  if (!props.daysSincePackaged) return null;
  return (
    <div>
      Your eggs are {props.daysSincePackaged} days old
    </div>
  )
}

export default DaysOld;