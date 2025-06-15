import React from 'react';

const Spacer = ({ size = '1rem', direction = 'vertical' }) => {
  const style = {
    margin: direction === 'vertical' ? `${size} 0` : `0 ${size}`,
  };

  return <div style={style} />;
};

export default Spacer;