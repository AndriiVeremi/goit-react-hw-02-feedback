import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => (
    <span className="Notification__value">{message}</span>
    
);

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};