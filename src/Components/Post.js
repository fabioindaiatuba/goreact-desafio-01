import React from 'react';
import { PropTypes } from 'prop-types';

import HeaderPost from './HeaderPost';

const Post = props => (
  <div className="post">
    <HeaderPost user={props.post.user} moment={props.post.moment} />
    <p>{props.post.content}</p>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape(),
    moment: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default Post;
