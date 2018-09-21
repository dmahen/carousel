'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animate = animate;
exports.debounce = debounce;
exports.getElementWidth = getElementWidth;
function animate(element, position) {
  var durationMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  var prefixes = ['Webkit', 'Moz', 'ms', 'O', ''];

  if (element) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = prefixes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;

        element.style[value + 'Transition'] = 'transform ' + durationMs + 'ms ease-out';
        element.style[value + 'Transform'] = 'translate3d(' + position + 'px, 0, 0)';
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
}

function debounce(func) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var timer = null;

  return function () {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      func.apply(_this, args);
      timer = null;
    }, ms);
  };
}

function getElementWidth(element) {
  if (element && element.getBoundingClientRect) {
    return element.getBoundingClientRect().width;
  }
}

var deviceInfo = exports.deviceInfo = function deviceInfo() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
};

var shouldCallHandlerOnWindowResize = exports.shouldCallHandlerOnWindowResize = function shouldCallHandlerOnWindowResize(prevDimensions) {
  var _deviceInfo = deviceInfo(),
      width = _deviceInfo.width,
      height = _deviceInfo.height;

  return prevDimensions.width !== width || prevDimensions.height !== height;
};