import React from 'react';
import Button from 'react-bootstrap/Button';
import customButtonStyles from './CustomButton.module.scss';

const CustomButton = (props) => {
  const { variant, text, Icon, onClick } = props;
  return (
    <Button onClick={onClick} className={customButtonStyles.customButton} variant={variant}>
      <span>{Icon}</span>
      <span>{text}</span>
    </Button>
  );
};

CustomButton.defaultProps = {
  variant: 'primary',
  text: '',
  Icon: null,
  onClick: () => {},
};

export default CustomButton;
