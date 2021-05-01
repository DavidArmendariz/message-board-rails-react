import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const CustomTooltip = (props) => {
  const { text, placement } = props;
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );
  return (
    <OverlayTrigger placement={placement} overlay={renderTooltip}>
      {props.children}
    </OverlayTrigger>
  );
};

CustomTooltip.defaultProps = {
  placement: 'top',
};

export default CustomTooltip;
