import React from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.css"
import withIcon from "../hocs/withIcon";
import branch from "../hocs/branch";


const Button = ({children, className, color, block, ...props}) =>{
	const cn = classNames("Button", className,{
	 				[`Button--${color}`] : Boolean(color),
	 				"Button--block": block,
	 			});

	return <button className={cn} {...props}>{children}</button>;
};

Button.propTypes = {
	children : PropTypes.node.isRequired,
	className : PropTypes.string,
	color: PropTypes.string,
	block: PropTypes.bool,
};

Button.defaultProps = {
	className : null,
	color: "",
	block: false,
};

export default branch(
	({iconName}) => Boolean(iconName),
		withIcon("Button"),
)(Button);