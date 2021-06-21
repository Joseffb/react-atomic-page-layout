import React from 'react';
import Page from "../organisms/Page";

export default () => (
		<Page layout="public">
			<h1>Title won't show up if its not in a section</h1>
			<section name="main">
				<h1> THIS IS THE PAGE CONTENT </h1>
			</section>
		</Page>
);