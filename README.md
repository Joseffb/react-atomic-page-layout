## About

**react-atomic-page-layout** allows you to share a common layout across many different components. Very usefull with something like [react-router](https://github.com/ReactTraining/react-router) to abstract the main elements of your design across many routes and reducing code duplication. This is based on [React-Page-Layout](https://github.com/monvillalon/react-page-layout) which was in disrepair when I tried to use it.

## Installation

Copy the following files to your project:
```
- molecules/Layout.js
- molecules/Section.js
- organisms/LayoutContext.js
- organisms/Page.js
```
## Example

This repo has a non-functioning react app for example purposes only. Therotechtically if you do a create-react-app and move these file in, it should work.

## Overview

This library allows for you to concentrate all your layout logic into its own components. It allows you to create a layout that can have serveral **&lt;sections&gt;** (lower case html element) where you can inject content.

A layout aware component can use the **&lt;Page&gt;** 
and **&lt;Section&gt;** (upper case React element) to fill out the sections.

This version of the layout library removes the section component.

## Setup

1. First Step is that you have to create a layout component, this is a regular react component that has several **sections**   where content can be injected. You define one or more sections by using the **&lt;section&gt;** component and giving them a name. In this case *"main"*

	```js
	import React, { Component } from 'react';
	import Section from 'molecules/Section.js';
	
	class PublicLayout extends Component {
		render() {
			return (
				<div>
					<header>Page Header</header>
					<Section name="main" />
					<footer>Page Footer</footer>
				</div>
			);
		}
	}
	
	export default PublicLayout;
	
	```
	
2. You have to make your app layout aware. In order to do this you use the **&lt;LayoutProvider&gt;** component to let decendants know about the different layouts of your app. It requires that you specify its layouts state with an object, where the keys are the names and the values are the layout components;

	```js
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
	render(App, document.getElementById('root'));

	```
 
3. Next you have to create pages. The pages provide the content for the different sections in your layout. To do this we use two components, **&lt;Page&gt;** and **&lt;Section&gt;**.

	```js
    import React from 'react';
    import Page from "../organisms/Page";
    
    export default () => (
        <Page layout="public">
            <h1> WILL NOT BE RENDERED BECAUSE ITS NOT IN A SECTION </h1>
            <section name="main">
                <h1> THIS IS THE PAGE CONTENT </h1>
            </section>
        </Page>
    );
	```
	
	You have to pass the **layout** property to the **&lt;Page&gt;**, so it knows what layout you want to use.
	Similarly each **&lt;Section&gt;** has a **name** property
	that ties it to the section in the layout for which it provides content. In this case
	since we only have one layout named **public**, and it only has one
	section named it **main** we use those values.
	

## Usage

1. By default, the root of a section is a <></>. This is different then the original project.

2. You can use several section in a layout.

	```js
		...
		<Section name="header"/>
		<Section name="content"/>
		<Section name="footer"/>
		...
	```

3. A section can have default content, that will be used when no corresponding section is specified

	```js
		...
		<Section name="header">
			Default Header content
		</Section>
		...
	```

4. If a section doesn't have content it doesn't render at all. Meaning that the dom doesn't contain any elements for that section.

5. Any props passed to the **&lt;Page&gt;**  component are passed to the layout. This can be useful for titles, breadcrumbs or to flag any customization that the page requires.

6. Sections can be nested

	```js
		...
		<Section name="main">
			Ill show up before content
			
			<Section name="content"/>
			
			Ill show up after content
		</Section>
		...
	```
	
	In this case the  **&lt;Section&gt;** with name **content** is nested in the **main** section which has extra content before and after **content**.
	
	```js
		...
		<Page layout="mylayout">
			<Section section="content"> 
				I have things on top and after me, and
				I have a margin
			</Section>
		</section>
		...
	```
	
	```js
		...
		<Page layout="mylayout">
			<Section section="main"> 
				Im alone and margin-less
			</Section>
		</section>
		...
	```

	
	






