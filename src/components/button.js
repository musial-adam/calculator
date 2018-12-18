import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
	background-color: ${props => props.number ? 'white' : '#f50057'};
	color: ${props => props.number ? 'black' : 'white'};
	font-family: 'Fira Mono', monospace;
	font-size: 24px;
	padding: 1rem;
	border: 2px solid black;
`;

const Button = (props) => {
	return (
		<StyledButton number={props.number}>{props.children}</StyledButton>
	);
};

export default Button;