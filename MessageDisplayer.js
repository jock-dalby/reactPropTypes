var React = require('react');

var MessageDisplayer = React.createClass({
  // This propTypes object should have
  // one property for each expected prop:
  propTypes: {
    message: React.PropTypes.string
  },

  render: function () {
    return <h1>{this.props.message}</h1>;
  }
});
