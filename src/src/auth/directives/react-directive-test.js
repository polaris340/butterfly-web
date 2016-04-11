var ReactDirectiveTestComponent = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div className="react-directive-test">asdfasdf</div>
    );
  }
});

app.directive('react-directive-test', ['reactDirective', 'popover', function(reactDirective, popover) {
  return reactDirective(ReactDirectiveTestComponent);
}]);
