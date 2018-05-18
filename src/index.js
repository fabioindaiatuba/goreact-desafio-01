import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import faker from 'faker/locale/pt_BR';

import Header from './Components/Header';
import Post from './Components/Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        user: {
          name: '',
          avatar: '',
        },
        moment: '',
        content: '',
      },
    ],
  };

  componentDidMount() {
    this.gerarPosts(5);
  }

  gerarPosts = (totalPosts) => {
    const posts = [];
    for (let i = 0; i < totalPosts; i += 1) {
      const post = {
        id: faker.random.uuid(),
        user: {
          name: faker.name.findName(),
          avatar: faker.internet.avatar(),
        },
        moment: 'há 2 min',
        content: faker.lorem.sentences(faker.random.number({ min: 2, max: 15 })),
      };
      posts.push(post);
    }

    this.setState({ posts });
  };

  render() {
    return (
      <Fragment>
        <Header />
        {this.state.posts.map(post => <Post post={post} key={post.id} />)}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
