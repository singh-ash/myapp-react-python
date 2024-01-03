import React from 'react';
import { Button } from 'react-bootstrap';
const Welcome = () => (
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1>Images Gallery!</h1>
      <p>
        This is a simple application that retrievs photos using unsplash api. In
        order to start enter any search term in the input field.
      </p>
      <p>
        <Button bsStyle="primary">Learn more</Button>
      </p>
    </div>
  </div>
);

export default Welcome;
