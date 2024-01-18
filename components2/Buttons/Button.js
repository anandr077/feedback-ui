import React from 'react';
import RectangularBigBtn from './RectangularbigBtn';

const Button = () => {
  return (
    <div>
      <RectangularBigBtn
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        tex={text}
        onClickFn={alert('Rectangular Big Button')}
      />
    </div>
  );
};

export default Button;
