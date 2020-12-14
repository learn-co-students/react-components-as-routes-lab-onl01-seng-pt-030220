import React from 'react';
import ReactDOM from 'react-dom';
// Step 1. Import react-router functions
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {}
    </div>
  );
};

ReactDOM.render((
<Router>

  <Route path="/" component={Home} />
</Router>)
)

export default Home;
