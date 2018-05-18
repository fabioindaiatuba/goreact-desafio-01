import React from 'react';
import { PropTypes } from 'prop-types';

const HeaderPost = props => (
  <div className="header-post">
    <img src={props.user.avatar} alt="Avatar" className="avatar" />
    <div className="content-title">
      <p className="title">{props.user.name}</p>
      <p className="sub-title">{props.moment}</p>
    </div>
  </div>
);

HeaderPost.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
  moment: PropTypes.string.isRequired,
};

export default HeaderPost;
