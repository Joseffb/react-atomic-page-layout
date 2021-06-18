import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from "./routers/router";
import React, {useContext} from "react";
import {
	LayoutContext,
	LayoutContextProvider,
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
		<LayoutContextProvider>
			<AppInner/>
		</LayoutContextProvider>
	);
}