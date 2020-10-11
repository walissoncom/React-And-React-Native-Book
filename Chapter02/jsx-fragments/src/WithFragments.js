import React, { Component, Fragment } from "react";

class WithFragments extends Component {
  render() {
    return (
      <Fragment>
        <h1>With Fragment</h1>
        <p>Doesn't have aany unsed DOM elements.</p>
      </Fragment>
    );
  }
}

export default WithFragments;
