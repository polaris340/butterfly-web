var MainComponent = React.createClass({
  propTypes: {
    fname: React.PropTypes.string.isRequired,
    lname: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <div>hello {this.props.fname} {this.props.lname}</div>
    );
  }
});


app.directive('main', ['reactDirective', function(reactDirective) {
  return reactDirective(MainComponent);
}]);