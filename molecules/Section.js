import React, {useContext} from "react";
import {LayoutContext} from "../organisms/LayoutContext";

export default function (props) {
	const {state} = useContext(LayoutContext);
	let children = props.children;
	if(!!state.section[props.name]) {
		children = state.section[props.name];
	}
	return <>{children}</>
};
