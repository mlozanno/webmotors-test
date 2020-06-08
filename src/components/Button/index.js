import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const Button = ({ label, ...rest }) => <Container {...rest}>{label}</Container>;

Button.propTypes = {
	label: PropTypes.string.isRequired,
};

export default Button;
