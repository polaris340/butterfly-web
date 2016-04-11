/**
 * squareImage directive
 * usage:
 *  <[any element] square-image url="{{url}}" size="48" circle></[any element]>
 *  <[any element] square-image url="http://some.image.url" size="48" circle></[any element]>
 */
app.directive('squareImage', ['$sce', function($sce) {
  return {
    restrict: 'AC',
    link: function($scope, $element, $attr, $controller) {
      $element.css({
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      });

      if (typeof $attr.circle !== 'undefined') {
        $element.css('borderRadius', '50%');
      }

      $attr.$observe('url', function(newVal, oldVal) {
        if (newVal) {
          $element.css({
            backgroundImage: "url('" + newVal + "')"
          });
        } else {

        }
      });

      $attr.$observe('size', function(newVal, oldVal) {
        $element.css({
          width: newVal + 'px',
          height: newVal + 'px'
        });
      });

    }
  };
}]);