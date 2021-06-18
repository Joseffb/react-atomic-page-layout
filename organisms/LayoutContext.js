import React, {useReducer, Children, useContext, useEffect} from "react";
export const LayoutContext = React.createContext(false);
export const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_LAYOUT":
			return {
				...state,
				layouts: {...state.layouts, ...action.layouts}
			};
		case "ADD_SECTION":
			return {
				...state,
				section: {...state.section, ...action.section}
			};
		default:
			return state;
	}
};

export const initialState = {
	layouts: {},
	section: {},
};

export const LayoutProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<LayoutContext.Provider value={{state, dispatch}}>
			{props.children}
		</LayoutContext.Provider>
	);
};