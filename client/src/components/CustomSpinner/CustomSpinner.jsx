import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { langTerms } from '../../constants/text';

const CustomSpinner = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">{`${langTerms.loading}...`}</span>
    </Spinner>
  );
};

export default CustomSpinner;
