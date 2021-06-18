import React, {Children, useContext} from "react";
export default (props) => {
	return Children.only(props.children);
};