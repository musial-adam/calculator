import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
	background-color: ${props => props.number ? 'grey' : 'orange'};
	color: white;
`;

const Button = (props) => {
	return (
		<StyledButton>Eloszka</StyledButton>
	);
};

export default Button;