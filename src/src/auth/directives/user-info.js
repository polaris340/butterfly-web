var UserInfoComponent = React.createClass({
  propTypes: {
    user: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div className="user-info">asdfasdf</div>
    );
  }
});

app.directive('userInfo', ['reactDirective', 'db', function(reactDirective, db) {
  return reactDirective(UserInfoComponent);
}]);
