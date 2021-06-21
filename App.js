import Router from "./routers/router";
import React, {useContext} from "react";
import {
	LayoutContext,
	LayoutProvider,
} from "./organisms/LayoutContext";
import PublicLayout from "./layouts/Public";

function AppInner() {
	const {state, dispatch} = useContext(LayoutContext);
	dispatch({type:"ADD_LAYOUT", layout:{
		public: PublicLayout,
	}})
	return <Router/>;
}

export default function App() {
	return (
		<LayoutProvider>
			<AppInner/>
		</LayoutProvider>
	);
}