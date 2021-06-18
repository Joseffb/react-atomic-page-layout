import Page from "../organisms/Page";

export default () => (
		<Page layout_name="public">
			<h1>Title won't show up if its not in a section</h1>
			<div layout_section="main">
				<h1> THIS IS THE PAGE CONTENT </h1>
			</div>
		</Page>
);