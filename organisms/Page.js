import React, {useContext, useEffect} from 'react';
import {LayoutContext} from './LayoutContext';
import isPlainObject from 'lodash.isplainobject';
import isArray from 'lodash.isarray';
import Layout from "../molecules/Layout";
import Section from "../molecules/Section";

const getSections = (parent) => {
	if (isPlainObject(parent)) {
		// Check if the element is a section
		if (parent.type && parent.props.layout_section) {
			return {[parent.props.layout_section]: parent};
		}
		return {};
	} else if (isArray(parent)) {
		let sections = [];
		for (let i = 0, c = parent.length; i < c; i += 1) {
			sections = Object.assign({}, sections, getSections(parent[i]));
		}
		return sections;
	}
	return {};
}

export default (props) => {
	if (!props.layout_name) {
		const msg = 'Layout not specified';
		return (msg)
	}
	const {state, dispatch} = useContext(LayoutContext);
	let layout = ()=><Section name="main">placeholder</Section>;
	if(state.layouts) {
		layout = state.layouts[props.layout_name];
	}

	const section = getSections(props.children);
	const children = props.children;

	props = {...props};
	delete props.layout_name;
	delete props.children;

	useEffect(() => {
		if(section) {
			dispatch({type: "ADD_SECTION", section})
		}
	}, [dispatch])

	return (
		<Layout>
			{React.createElement(layout, props, children)}
		</Layout>
	);
}