import PropTypes from 'prop-types';

export const friendPropsType = PropTypes.shape({
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}).isRequired;
