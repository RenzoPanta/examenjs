"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/safe-buffer";
exports.ids = ["vendor-chunks/safe-buffer"];
exports.modules = {

/***/ "(rsc)/./node_modules/safe-buffer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/safe-buffer/index.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* eslint-disable node/no-deprecated-api */ \nvar buffer = __webpack_require__(/*! buffer */ \"buffer\");\nvar Buffer = buffer.Buffer;\n// alternative to using Object.keys for old browsers\nfunction copyProps(src, dst) {\n    for(var key in src){\n        dst[key] = src[key];\n    }\n}\nif (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {\n    module.exports = buffer;\n} else {\n    // Copy properties from require('buffer')\n    copyProps(buffer, exports);\n    exports.Buffer = SafeBuffer;\n}\nfunction SafeBuffer(arg, encodingOrOffset, length) {\n    return Buffer(arg, encodingOrOffset, length);\n}\n// Copy static methods from Buffer\ncopyProps(Buffer, SafeBuffer);\nSafeBuffer.from = function(arg, encodingOrOffset, length) {\n    if (typeof arg === \"number\") {\n        throw new TypeError(\"Argument must not be a number\");\n    }\n    return Buffer(arg, encodingOrOffset, length);\n};\nSafeBuffer.alloc = function(size, fill, encoding) {\n    if (typeof size !== \"number\") {\n        throw new TypeError(\"Argument must be a number\");\n    }\n    var buf = Buffer(size);\n    if (fill !== undefined) {\n        if (typeof encoding === \"string\") {\n            buf.fill(fill, encoding);\n        } else {\n            buf.fill(fill);\n        }\n    } else {\n        buf.fill(0);\n    }\n    return buf;\n};\nSafeBuffer.allocUnsafe = function(size) {\n    if (typeof size !== \"number\") {\n        throw new TypeError(\"Argument must be a number\");\n    }\n    return Buffer(size);\n};\nSafeBuffer.allocUnsafeSlow = function(size) {\n    if (typeof size !== \"number\") {\n        throw new TypeError(\"Argument must be a number\");\n    }\n    return buffer.SlowBuffer(size);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2FmZS1idWZmZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDO0FBQ3pDLElBQUlBLFNBQVNDLG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlDLFNBQVNGLE9BQU9FLE1BQU07QUFFMUIsb0RBQW9EO0FBQ3BELFNBQVNDLFVBQVdDLEdBQUcsRUFBRUMsR0FBRztJQUMxQixJQUFLLElBQUlDLE9BQU9GLElBQUs7UUFDbkJDLEdBQUcsQ0FBQ0MsSUFBSSxHQUFHRixHQUFHLENBQUNFLElBQUk7SUFDckI7QUFDRjtBQUNBLElBQUlKLE9BQU9LLElBQUksSUFBSUwsT0FBT00sS0FBSyxJQUFJTixPQUFPTyxXQUFXLElBQUlQLE9BQU9RLGVBQWUsRUFBRTtJQUMvRUMsT0FBT0MsT0FBTyxHQUFHWjtBQUNuQixPQUFPO0lBQ0wseUNBQXlDO0lBQ3pDRyxVQUFVSCxRQUFRWTtJQUNsQkEsY0FBYyxHQUFHQztBQUNuQjtBQUVBLFNBQVNBLFdBQVlDLEdBQUcsRUFBRUMsZ0JBQWdCLEVBQUVDLE1BQU07SUFDaEQsT0FBT2QsT0FBT1ksS0FBS0Msa0JBQWtCQztBQUN2QztBQUVBLGtDQUFrQztBQUNsQ2IsVUFBVUQsUUFBUVc7QUFFbEJBLFdBQVdOLElBQUksR0FBRyxTQUFVTyxHQUFHLEVBQUVDLGdCQUFnQixFQUFFQyxNQUFNO0lBQ3ZELElBQUksT0FBT0YsUUFBUSxVQUFVO1FBQzNCLE1BQU0sSUFBSUcsVUFBVTtJQUN0QjtJQUNBLE9BQU9mLE9BQU9ZLEtBQUtDLGtCQUFrQkM7QUFDdkM7QUFFQUgsV0FBV0wsS0FBSyxHQUFHLFNBQVVVLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRO0lBQy9DLElBQUksT0FBT0YsU0FBUyxVQUFVO1FBQzVCLE1BQU0sSUFBSUQsVUFBVTtJQUN0QjtJQUNBLElBQUlJLE1BQU1uQixPQUFPZ0I7SUFDakIsSUFBSUMsU0FBU0csV0FBVztRQUN0QixJQUFJLE9BQU9GLGFBQWEsVUFBVTtZQUNoQ0MsSUFBSUYsSUFBSSxDQUFDQSxNQUFNQztRQUNqQixPQUFPO1lBQ0xDLElBQUlGLElBQUksQ0FBQ0E7UUFDWDtJQUNGLE9BQU87UUFDTEUsSUFBSUYsSUFBSSxDQUFDO0lBQ1g7SUFDQSxPQUFPRTtBQUNUO0FBRUFSLFdBQVdKLFdBQVcsR0FBRyxTQUFVUyxJQUFJO0lBQ3JDLElBQUksT0FBT0EsU0FBUyxVQUFVO1FBQzVCLE1BQU0sSUFBSUQsVUFBVTtJQUN0QjtJQUNBLE9BQU9mLE9BQU9nQjtBQUNoQjtBQUVBTCxXQUFXSCxlQUFlLEdBQUcsU0FBVVEsSUFBSTtJQUN6QyxJQUFJLE9BQU9BLFNBQVMsVUFBVTtRQUM1QixNQUFNLElBQUlELFVBQVU7SUFDdEI7SUFDQSxPQUFPakIsT0FBT3VCLFVBQVUsQ0FBQ0w7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtZW5qcy8uL25vZGVfbW9kdWxlcy9zYWZlLWJ1ZmZlci9pbmRleC5qcz9jZjJmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vZGUvbm8tZGVwcmVjYXRlZC1hcGkgKi9cbnZhciBidWZmZXIgPSByZXF1aXJlKCdidWZmZXInKVxudmFyIEJ1ZmZlciA9IGJ1ZmZlci5CdWZmZXJcblxuLy8gYWx0ZXJuYXRpdmUgdG8gdXNpbmcgT2JqZWN0LmtleXMgZm9yIG9sZCBicm93c2Vyc1xuZnVuY3Rpb24gY29weVByb3BzIChzcmMsIGRzdCkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgZHN0W2tleV0gPSBzcmNba2V5XVxuICB9XG59XG5pZiAoQnVmZmVyLmZyb20gJiYgQnVmZmVyLmFsbG9jICYmIEJ1ZmZlci5hbGxvY1Vuc2FmZSAmJiBCdWZmZXIuYWxsb2NVbnNhZmVTbG93KSB7XG4gIG1vZHVsZS5leHBvcnRzID0gYnVmZmVyXG59IGVsc2Uge1xuICAvLyBDb3B5IHByb3BlcnRpZXMgZnJvbSByZXF1aXJlKCdidWZmZXInKVxuICBjb3B5UHJvcHMoYnVmZmVyLCBleHBvcnRzKVxuICBleHBvcnRzLkJ1ZmZlciA9IFNhZmVCdWZmZXJcbn1cblxuZnVuY3Rpb24gU2FmZUJ1ZmZlciAoYXJnLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuLy8gQ29weSBzdGF0aWMgbWV0aG9kcyBmcm9tIEJ1ZmZlclxuY29weVByb3BzKEJ1ZmZlciwgU2FmZUJ1ZmZlcilcblxuU2FmZUJ1ZmZlci5mcm9tID0gZnVuY3Rpb24gKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJylcbiAgfVxuICByZXR1cm4gQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5TYWZlQnVmZmVyLmFsbG9jID0gZnVuY3Rpb24gKHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfVxuICB2YXIgYnVmID0gQnVmZmVyKHNpemUpXG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJykge1xuICAgICAgYnVmLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1Zi5maWxsKGZpbGwpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGJ1Zi5maWxsKDApXG4gIH1cbiAgcmV0dXJuIGJ1ZlxufVxuXG5TYWZlQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9XG4gIHJldHVybiBCdWZmZXIoc2l6ZSlcbn1cblxuU2FmZUJ1ZmZlci5hbGxvY1Vuc2FmZVNsb3cgPSBmdW5jdGlvbiAoc2l6ZSkge1xuICBpZiAodHlwZW9mIHNpemUgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIG51bWJlcicpXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlci5TbG93QnVmZmVyKHNpemUpXG59XG4iXSwibmFtZXMiOlsiYnVmZmVyIiwicmVxdWlyZSIsIkJ1ZmZlciIsImNvcHlQcm9wcyIsInNyYyIsImRzdCIsImtleSIsImZyb20iLCJhbGxvYyIsImFsbG9jVW5zYWZlIiwiYWxsb2NVbnNhZmVTbG93IiwibW9kdWxlIiwiZXhwb3J0cyIsIlNhZmVCdWZmZXIiLCJhcmciLCJlbmNvZGluZ09yT2Zmc2V0IiwibGVuZ3RoIiwiVHlwZUVycm9yIiwic2l6ZSIsImZpbGwiLCJlbmNvZGluZyIsImJ1ZiIsInVuZGVmaW5lZCIsIlNsb3dCdWZmZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/safe-buffer/index.js\n");

/***/ })

};
;