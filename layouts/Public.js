import React from 'react';
import Header from "../molecules/Header";
import Footer from "../molecules/Footer";
import Section from "../molecules/Section";

export default ()=>{
		return (
			<>
				<Section name="public_header">
					<Header/>
				</Section>

				<Section name="main"/>

				<Section name="public_footer">
					<Footer/>
				</Section>
			</>
		);
}