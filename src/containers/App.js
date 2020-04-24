import React from 'react';
import AppClasses from './App.module.css';

import CommentsContainer from '../components/CommentBlock/CommentsContainer.js';
import AddCommentContainer from '../components/AddCommentBlock/AddCommentContainer.js';

let App = () => {
	return (
		<section
		className = {AppClasses.appBlock}
		>
			<CommentsContainer />
			<AddCommentContainer />
		</section>
	)
};

export default App;