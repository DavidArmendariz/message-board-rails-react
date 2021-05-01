import React from 'react';
import Alert from 'react-bootstrap/Alert';

const CustomAlert = (props) => {
  const { variant, text } = props;
  return <Alert variant={variant}>{text}</Alert>;
};

CustomAlert.defaultProps = {
  variant: 'danger',
};

export default CustomAlert;
