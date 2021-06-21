import React, {Children, useContext} from "react";
export default function (props) {
	return Children.only(props.children);
};