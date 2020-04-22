import React from 'react';
import AppClasses from './App.module.css';

import CommentContainer from '../components/CommentBlock/CommentsContainer.js';
import AddCommentContainer from '../components/AddCommentBlock/AddCommentContainer.js';

let App = () => {
	return (
		<section
		className = {AppClasses.appBlock}
		>
			<CommentContainer />
			<AddCommentContainer />
		</section>
	)
};

export default App;