'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _geomiconsOpen = require('geomicons-open');

var _geomiconsOpen2 = _interopRequireDefault(_geomiconsOpen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Icon = function Icon(_ref) {
  var _ref$name = _ref.name;
  var name = _ref$name === undefined ? 'warning' : _ref$name;
  var _ref$size = _ref.size;
  var size = _ref$size === undefined ? '1em' : _ref$size;
  var _ref$fill = _ref.fill;
  var fill = _ref$fill === undefined ? 'currentColor' : _ref$fill;

  var props = _objectWithoutProperties(_ref, ['name', 'size', 'fill']);

  var path = _geomiconsOpen2.default[name];

  return _react2.default.createElement(
    'svg',
    _extends({}, props, {
      width: size,
      height: size,
      fill: fill,
      'data-id': 'geomicon-' + name,
      viewBox: '0 0 32 32' }),
    _react2.default.createElement('path', { d: path })
  );
};

Icon.propTypes = {
  name: _react2.default.PropTypes.oneOf(Object.keys(_geomiconsOpen2.default)),
  size: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  fill: _react2.default.PropTypes.string
};

exports.default = Icon;