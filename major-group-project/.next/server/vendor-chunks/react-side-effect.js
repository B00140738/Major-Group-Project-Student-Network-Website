"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-side-effect";
exports.ids = ["vendor-chunks/react-side-effect"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-side-effect/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-side-effect/lib/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nfunction _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }\n\nvar React = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\nvar React__default = _interopDefault(React);\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _inheritsLoose(subClass, superClass) {\n  subClass.prototype = Object.create(superClass.prototype);\n  subClass.prototype.constructor = subClass;\n  subClass.__proto__ = superClass;\n}\n\nvar canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);\nfunction withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {\n  if (typeof reducePropsToState !== 'function') {\n    throw new Error('Expected reducePropsToState to be a function.');\n  }\n\n  if (typeof handleStateChangeOnClient !== 'function') {\n    throw new Error('Expected handleStateChangeOnClient to be a function.');\n  }\n\n  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {\n    throw new Error('Expected mapStateOnServer to either be undefined or a function.');\n  }\n\n  function getDisplayName(WrappedComponent) {\n    return WrappedComponent.displayName || WrappedComponent.name || 'Component';\n  }\n\n  return function wrap(WrappedComponent) {\n    if (typeof WrappedComponent !== 'function') {\n      throw new Error('Expected WrappedComponent to be a React component.');\n    }\n\n    var mountedInstances = [];\n    var state;\n\n    function emitChange() {\n      state = reducePropsToState(mountedInstances.map(function (instance) {\n        return instance.props;\n      }));\n\n      if (SideEffect.canUseDOM) {\n        handleStateChangeOnClient(state);\n      } else if (mapStateOnServer) {\n        state = mapStateOnServer(state);\n      }\n    }\n\n    var SideEffect =\n    /*#__PURE__*/\n    function (_PureComponent) {\n      _inheritsLoose(SideEffect, _PureComponent);\n\n      function SideEffect() {\n        return _PureComponent.apply(this, arguments) || this;\n      }\n\n      // Try to use displayName of wrapped component\n      // Expose canUseDOM so tests can monkeypatch it\n      SideEffect.peek = function peek() {\n        return state;\n      };\n\n      SideEffect.rewind = function rewind() {\n        if (SideEffect.canUseDOM) {\n          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');\n        }\n\n        var recordedState = state;\n        state = undefined;\n        mountedInstances = [];\n        return recordedState;\n      };\n\n      var _proto = SideEffect.prototype;\n\n      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {\n        mountedInstances.push(this);\n        emitChange();\n      };\n\n      _proto.componentDidUpdate = function componentDidUpdate() {\n        emitChange();\n      };\n\n      _proto.componentWillUnmount = function componentWillUnmount() {\n        var index = mountedInstances.indexOf(this);\n        mountedInstances.splice(index, 1);\n        emitChange();\n      };\n\n      _proto.render = function render() {\n        return React__default.createElement(WrappedComponent, this.props);\n      };\n\n      return SideEffect;\n    }(React.PureComponent);\n\n    _defineProperty(SideEffect, \"displayName\", \"SideEffect(\" + getDisplayName(WrappedComponent) + \")\");\n\n    _defineProperty(SideEffect, \"canUseDOM\", canUseDOM);\n\n    return SideEffect;\n  };\n}\n\nmodule.exports = withSideEffect;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc2lkZS1lZmZlY3QvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGdDQUFnQzs7QUFFaEMsWUFBWSxtQkFBTyxDQUFDLHdHQUFPO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFqb3ItZ3JvdXAtcHJvamVjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaWRlLWVmZmVjdC9saWIvaW5kZXguanM/OTU2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZXgpIHsgcmV0dXJuIChleCAmJiAodHlwZW9mIGV4ID09PSAnb2JqZWN0JykgJiYgJ2RlZmF1bHQnIGluIGV4KSA/IGV4WydkZWZhdWx0J10gOiBleDsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0X19kZWZhdWx0ID0gX2ludGVyb3BEZWZhdWx0KFJlYWN0KTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5mdW5jdGlvbiB3aXRoU2lkZUVmZmVjdChyZWR1Y2VQcm9wc1RvU3RhdGUsIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQsIG1hcFN0YXRlT25TZXJ2ZXIpIHtcbiAgaWYgKHR5cGVvZiByZWR1Y2VQcm9wc1RvU3RhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHJlZHVjZVByb3BzVG9TdGF0ZSB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50IHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIG1hcFN0YXRlT25TZXJ2ZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtYXBTdGF0ZU9uU2VydmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBtYXBTdGF0ZU9uU2VydmVyIHRvIGVpdGhlciBiZSB1bmRlZmluZWQgb3IgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gd3JhcChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgaWYgKHR5cGVvZiBXcmFwcGVkQ29tcG9uZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIFdyYXBwZWRDb21wb25lbnQgdG8gYmUgYSBSZWFjdCBjb21wb25lbnQuJyk7XG4gICAgfVxuXG4gICAgdmFyIG1vdW50ZWRJbnN0YW5jZXMgPSBbXTtcbiAgICB2YXIgc3RhdGU7XG5cbiAgICBmdW5jdGlvbiBlbWl0Q2hhbmdlKCkge1xuICAgICAgc3RhdGUgPSByZWR1Y2VQcm9wc1RvU3RhdGUobW91bnRlZEluc3RhbmNlcy5tYXAoZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS5wcm9wcztcbiAgICAgIH0pKTtcblxuICAgICAgaWYgKFNpZGVFZmZlY3QuY2FuVXNlRE9NKSB7XG4gICAgICAgIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQoc3RhdGUpO1xuICAgICAgfSBlbHNlIGlmIChtYXBTdGF0ZU9uU2VydmVyKSB7XG4gICAgICAgIHN0YXRlID0gbWFwU3RhdGVPblNlcnZlcihzdGF0ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIFNpZGVFZmZlY3QgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0c0xvb3NlKFNpZGVFZmZlY3QsIF9QdXJlQ29tcG9uZW50KTtcblxuICAgICAgZnVuY3Rpb24gU2lkZUVmZmVjdCgpIHtcbiAgICAgICAgcmV0dXJuIF9QdXJlQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gVHJ5IHRvIHVzZSBkaXNwbGF5TmFtZSBvZiB3cmFwcGVkIGNvbXBvbmVudFxuICAgICAgLy8gRXhwb3NlIGNhblVzZURPTSBzbyB0ZXN0cyBjYW4gbW9ua2V5cGF0Y2ggaXRcbiAgICAgIFNpZGVFZmZlY3QucGVlayA9IGZ1bmN0aW9uIHBlZWsoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH07XG5cbiAgICAgIFNpZGVFZmZlY3QucmV3aW5kID0gZnVuY3Rpb24gcmV3aW5kKCkge1xuICAgICAgICBpZiAoU2lkZUVmZmVjdC5jYW5Vc2VET00pIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgb25seSBjYWxsIHJld2luZCgpIG9uIHRoZSBzZXJ2ZXIuIENhbGwgcGVlaygpIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVjb3JkZWRTdGF0ZSA9IHN0YXRlO1xuICAgICAgICBzdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgbW91bnRlZEluc3RhbmNlcyA9IFtdO1xuICAgICAgICByZXR1cm4gcmVjb3JkZWRTdGF0ZTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBfcHJvdG8gPSBTaWRlRWZmZWN0LnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQgPSBmdW5jdGlvbiBVTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICBtb3VudGVkSW5zdGFuY2VzLnB1c2godGhpcyk7XG4gICAgICAgIGVtaXRDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGVtaXRDaGFuZ2UoKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB2YXIgaW5kZXggPSBtb3VudGVkSW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgZW1pdENoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgdGhpcy5wcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gU2lkZUVmZmVjdDtcbiAgICB9KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KFNpZGVFZmZlY3QsIFwiZGlzcGxheU5hbWVcIiwgXCJTaWRlRWZmZWN0KFwiICsgZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkgKyBcIilcIik7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkoU2lkZUVmZmVjdCwgXCJjYW5Vc2VET01cIiwgY2FuVXNlRE9NKTtcblxuICAgIHJldHVybiBTaWRlRWZmZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdpdGhTaWRlRWZmZWN0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-side-effect/lib/index.js\n");

/***/ })

};
;