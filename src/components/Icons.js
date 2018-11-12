import React from 'react';
import PropTypes from 'prop-types';

const icons = {
  airplane: 'M17.8 21.9l1.6-1.6L17 9.4l4.6-4.6c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0L14.6 7 3.7 4.5 2.1 6.2l8.7 4.6-4.6 4.6-2.9-.5L2 16.1l3.8 2.1L7.9 22l1.3-1.3-.5-2.9 4.6-4.6 4.5 8.7z',
  iconmenu: 'M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z'
};

const Icon = props => (
  <svg
    width={props.width ? props.width : '24'}
    height={props.width ? props.width : '24'}
    viewBox="0 0 24 24"
    fill={props.color ? props.color : '#000'}>
    <path d={icons[props.icon]} />
  </svg>
);

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Icon;