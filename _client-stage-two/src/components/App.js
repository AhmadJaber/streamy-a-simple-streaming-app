import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import Header from './Header';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route exact path="/" component={StreamList} />
          <Route exact path="/streams/show" component={StreamShow} />
          <Route exact path="/streams/create" component={StreamCreate} />
          <Route exact path="/streams/edit/:id" component={StreamEdit} />
          <Route exact path="/streams/delete" component={StreamDelete} />
        </div>
      </Router>
    </div>
  );
};

export default App;
