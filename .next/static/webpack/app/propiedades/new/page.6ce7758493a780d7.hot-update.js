"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/propiedades/new/page",{

/***/ "(app-pages-browser)/./src/app/propiedades/new/page.jsx":
/*!******************************************!*\
  !*** ./src/app/propiedades/new/page.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction propiedadesForm() {\n    _s();\n    const [propiedades, setpropiedades] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        nombre: \"\",\n        direccion: \"\",\n        caracteristicas: \"\",\n        estado: \"\",\n        precioalquiler: \"\"\n    });\n    const handleChange = (e)=>{\n        //console.log(e.target.value, e.target.name);\n        setpropiedades({\n            ...propiedades,\n            [e.target.nombre]: e.target.value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        //console.log(product);\n        const res = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/propiedades\", propiedades);\n        if (res.status == 200) {\n            location.href = \"/propiedades\";\n        } else {\n            alert(\"Error en el registro\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"m-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-extrabold text-gray-400 hover:text-gray-800\",\n                children: \"Propiedades\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Renzo\\\\Documents\\\\examenjs\\\\examenjs\\\\src\\\\app\\\\propiedades\\\\new\\\\page.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"px-8 pt-6 pb-8 mb-4 rounded-md shadow-md bg-gray-50\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-2 text-sm font-medium text-gray-900\",\n                        htmlFor: \"nombre\",\n                        children: \"Nombre\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Renzo\\\\Documents\\\\examenjs\\\\examenjs\\\\src\\\\app\\\\propiedades\\\\new\\\\page.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"nombre\",\n                        onChange: handleChange,\n                        className: \"bg-green-100 border border-green-300   text-gray-900 text-xs rounded-lg block w-full p-2.5\",\n                        placeholder: \"Input name\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Renzo\\\\Documents\\\\examenjs\\\\examenjs\\\\src\\\\app\\\\propiedades\\\\new\\\\page.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-2 text-sm font-medium text-gray-900\",\n                        htmlFor: \"direccion\",\n                        children: \"Direccion\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Renzo\\\\Documents\\\\examenjs\\\\examenjs\\\\src\\\\app\\\\propiedades\\\\new\\\\page.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"direccion\",\n                        onChange: handleChange,\n                        className: \"bg-green-100 border border-green-300   text-gray-900 text-xs rounded-lg block w-full p-2.5\",\n                        placeholder: \"Input barcode\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Renzo\\\\Documents\\\\examenjs\\\\examenjs\\\\src\\\\app\\\\propiedades\\\\new\\\\page.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-2 text-sm font-medium text-gray-900\",\n                        htmlFor: \"caracteristicas\",\n                        children: \"caracteristicas\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Renzo\\\\Documents\\\\examenjs\\\\examenjs\\\\src\\\\app\\\\propiedades\\\\new\\\\page.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"caracteristicas\",\n                        onChange: handleChange,\n                        className: \"bg-green-100 border border-green-300   text-gray-900 text-xs rounded-lg block w-full p-2.5\",\n                        placeholder: \"Input description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Renzo\\\\Documents\\\\examenjs\\\\examenjs\\\\src\\\\app\\\\propiedades\\\\new\\\\page.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-2 text-sm font-medium text-gray-900\",\n                        htmlFor: \"estado\",\n                        children: \"estado\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Renzo\\\\Documents\\\\examenjs\\\\examenjs\\\\src\\\\app\\\\propiedades\\\\new\\\\page.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"estado\",\n                        onChange: handleChange,\n                        className: \"bg-green-100 border border-green-300   text-gray-900 text-xs rounded-lg block w-full p-2.5\",\n                        placeholder: \"Input description\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Renzo\\\\Documents\\\\examenjs\\\\examenjs\\\\src\\\\app\\\\propiedades\\\\new\\\\page.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block mb-2 text-sm font-medium text-gray-900\",\n                        htmlFor: \"precioalquiler\",\n                        children: \"Precio de alquiler\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Renzo\\\\Documents\\\\examenjs\\\\examenjs\\\\src\\\\app\\\\propiedades\\\\new\\\\page.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        name: \"precioalquiler\",\n                        onChange: handleChange,\n                        className: \"bg-green-100 border border-green-300   text-gray-900 text-xs rounded-lg block w-full p-2.5\",\n                        placeholder: \"Input price\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Renzo\\\\Documents\\\\examenjs\\\\examenjs\\\\src\\\\app\\\\propiedades\\\\new\\\\page.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-sm text-white    font-bold py-2 px-4 rounded mt-5\",\n                        children: \"Guardar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Renzo\\\\Documents\\\\examenjs\\\\examenjs\\\\src\\\\app\\\\propiedades\\\\new\\\\page.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Renzo\\\\Documents\\\\examenjs\\\\examenjs\\\\src\\\\app\\\\propiedades\\\\new\\\\page.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Renzo\\\\Documents\\\\examenjs\\\\examenjs\\\\src\\\\app\\\\propiedades\\\\new\\\\page.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(propiedadesForm, \"/q4cwJ4KdsYF4HdpIRRg2U3uats=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (propiedadesForm);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvcGllZGFkZXMvbmV3L3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDeUI7QUFDTztBQUNQO0FBRXpCLFNBQVNHOztJQUNQLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHSiwrQ0FBUUEsQ0FBQztRQUM3Q0ssUUFBUTtRQUNSQyxXQUFXO1FBQ1hDLGlCQUFpQjtRQUNqQkMsUUFBUTtRQUNSQyxnQkFBZTtJQUNqQjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEIsNkNBQTZDO1FBQzdDUCxlQUFlO1lBQ2IsR0FBR0QsV0FBVztZQUNkLENBQUNRLEVBQUVDLE1BQU0sQ0FBQ1AsTUFBTSxDQUFDLEVBQUVNLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztRQUNuQztJQUNGO0lBRUEsTUFBTUMsZUFBZSxPQUFPSDtRQUMxQkEsRUFBRUksY0FBYztRQUNoQix1QkFBdUI7UUFDdkIsTUFBTUMsTUFBTSxNQUFNZiw2Q0FBS0EsQ0FBQ2dCLElBQUksQ0FBQyxvQkFBb0JkO1FBQ2pELElBQUlhLElBQUlFLE1BQU0sSUFBSSxLQUFLO1lBQ3JCQyxTQUFTQyxJQUFJLEdBQUc7UUFDbEIsT0FBTztZQUNMQyxNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTREOzs7Ozs7MEJBQzFFLDhEQUFDRTtnQkFBS0MsVUFBVVo7Z0JBQWNTLFdBQVU7O2tDQUN0Qyw4REFBQ0k7d0JBQU1KLFdBQVU7d0JBQStDSyxTQUFRO2tDQUFTOzs7Ozs7a0NBR2pGLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsTUFBSzt3QkFBU0MsVUFBVXRCO3dCQUFjYSxXQUFVO3dCQUNUVSxhQUFZOzs7Ozs7a0NBRXRFLDhEQUFDTjt3QkFBTUosV0FBVTt3QkFBK0NLLFNBQVE7a0NBQVk7Ozs7OztrQ0FHcEYsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPQyxNQUFLO3dCQUFZQyxVQUFVdEI7d0JBQWNhLFdBQVU7d0JBQ1pVLGFBQVk7Ozs7OztrQ0FFdEUsOERBQUNOO3dCQUFNSixXQUFVO3dCQUErQ0ssU0FBUTtrQ0FBa0I7Ozs7OztrQ0FHMUYsOERBQUNDO3dCQUFNQyxNQUFLO3dCQUFPQyxNQUFLO3dCQUFrQkMsVUFBVXRCO3dCQUFjYSxXQUFVO3dCQUNsQlUsYUFBWTs7Ozs7O2tDQUV0RSw4REFBQ047d0JBQU1KLFdBQVU7d0JBQStDSyxTQUFRO2tDQUFTOzs7Ozs7a0NBR2pGLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsTUFBSzt3QkFBU0MsVUFBVXRCO3dCQUFjYSxXQUFVO3dCQUNUVSxhQUFZOzs7Ozs7a0NBRXRFLDhEQUFDTjt3QkFBTUosV0FBVTt3QkFBK0NLLFNBQVE7a0NBQWlCOzs7Ozs7a0NBR3pGLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBU0MsTUFBSzt3QkFBaUJDLFVBQVV0Qjt3QkFBY2EsV0FBVTt3QkFDbkJVLGFBQVk7Ozs7OztrQ0FFdEUsOERBQUNDO3dCQUFPWCxXQUFVO2tDQUNrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzVDO0dBcEVTckI7QUFzRVQsK0RBQWVBLGVBQWVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9waWVkYWRlcy9uZXcvcGFnZS5qc3g/ZDM5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmZ1bmN0aW9uIHByb3BpZWRhZGVzRm9ybSgpIHtcclxuICBjb25zdCBbcHJvcGllZGFkZXMsIHNldHByb3BpZWRhZGVzXSA9IHVzZVN0YXRlKHtcclxuICAgIG5vbWJyZTogXCJcIixcclxuICAgIGRpcmVjY2lvbjogXCJcIixcclxuICAgIGNhcmFjdGVyaXN0aWNhczogXCJcIixcclxuICAgIGVzdGFkbzogXCJcIixcclxuICAgIHByZWNpb2FscXVpbGVyOlwiXCJcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIC8vY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUsIGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgc2V0cHJvcGllZGFkZXMoe1xyXG4gICAgICAuLi5wcm9waWVkYWRlcyxcclxuICAgICAgW2UudGFyZ2V0Lm5vbWJyZV06IGUudGFyZ2V0LnZhbHVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHByb2R1Y3QpO1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9wcm9waWVkYWRlcycsIHByb3BpZWRhZGVzKTtcclxuICAgIGlmIChyZXMuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBsb2NhdGlvbi5ocmVmID0gXCIvcHJvcGllZGFkZXNcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiRXJyb3IgZW4gZWwgcmVnaXN0cm9cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J20tOCc+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktNDAwIGhvdmVyOnRleHQtZ3JheS04MDBcIj5Qcm9waWVkYWRlczwvaDI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT0ncHgtOCBwdC02IHBiLTggbWItNCByb3VuZGVkLW1kIHNoYWRvdy1tZCBiZy1ncmF5LTUwJz5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCcgaHRtbEZvcj1cIm5vbWJyZVwiPlxyXG4gICAgICAgICAgTm9tYnJlXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibm9tYnJlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPSdiZy1ncmVlbi0xMDAgYm9yZGVyIGJvcmRlci1ncmVlbi0zMDBcclxuICAgICAgICAgICAgIHRleHQtZ3JheS05MDAgdGV4dC14cyByb3VuZGVkLWxnIGJsb2NrIHctZnVsbCBwLTIuNScgcGxhY2Vob2xkZXI9XCJJbnB1dCBuYW1lXCIgLz5cclxuXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnIGh0bWxGb3I9XCJkaXJlY2Npb25cIj5cclxuICAgICAgICAgIERpcmVjY2lvblxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRpcmVjY2lvblwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT0nYmctZ3JlZW4tMTAwIGJvcmRlciBib3JkZXItZ3JlZW4tMzAwXHJcbiAgICAgICAgICAgICB0ZXh0LWdyYXktOTAwIHRleHQteHMgcm91bmRlZC1sZyBibG9jayB3LWZ1bGwgcC0yLjUnIHBsYWNlaG9sZGVyPVwiSW5wdXQgYmFyY29kZVwiIC8+XHJcblxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2Jsb2NrIG1iLTIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwJyBodG1sRm9yPVwiY2FyYWN0ZXJpc3RpY2FzXCI+XHJcbiAgICAgICAgICBjYXJhY3RlcmlzdGljYXNcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjYXJhY3RlcmlzdGljYXNcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjbGFzc05hbWU9J2JnLWdyZWVuLTEwMCBib3JkZXIgYm9yZGVyLWdyZWVuLTMwMFxyXG4gICAgICAgICAgICAgdGV4dC1ncmF5LTkwMCB0ZXh0LXhzIHJvdW5kZWQtbGcgYmxvY2sgdy1mdWxsIHAtMi41JyBwbGFjZWhvbGRlcj1cIklucHV0IGRlc2NyaXB0aW9uXCIgLz5cclxuXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nYmxvY2sgbWItMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDAnIGh0bWxGb3I9XCJlc3RhZG9cIj5cclxuICAgICAgICAgIGVzdGFkb1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVzdGFkb1wiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNsYXNzTmFtZT0nYmctZ3JlZW4tMTAwIGJvcmRlciBib3JkZXItZ3JlZW4tMzAwXHJcbiAgICAgICAgICAgICB0ZXh0LWdyYXktOTAwIHRleHQteHMgcm91bmRlZC1sZyBibG9jayB3LWZ1bGwgcC0yLjUnIHBsYWNlaG9sZGVyPVwiSW5wdXQgZGVzY3JpcHRpb25cIiAvPlxyXG5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCcgaHRtbEZvcj1cInByZWNpb2FscXVpbGVyXCI+XHJcbiAgICAgICAgICBQcmVjaW8gZGUgYWxxdWlsZXJcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInByZWNpb2FscXVpbGVyXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2xhc3NOYW1lPSdiZy1ncmVlbi0xMDAgYm9yZGVyIGJvcmRlci1ncmVlbi0zMDBcclxuICAgICAgICAgICAgIHRleHQtZ3JheS05MDAgdGV4dC14cyByb3VuZGVkLWxnIGJsb2NrIHctZnVsbCBwLTIuNScgcGxhY2Vob2xkZXI9XCJJbnB1dCBwcmljZVwiIC8+XHJcblxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy1ibHVlLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXNtIHRleHQtd2hpdGUgXHJcbiAgICAgICAgICBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXQtNSc+XHJcbiAgICAgICAgICBHdWFyZGFyPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvcGllZGFkZXNGb3JtIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInByb3BpZWRhZGVzRm9ybSIsInByb3BpZWRhZGVzIiwic2V0cHJvcGllZGFkZXMiLCJub21icmUiLCJkaXJlY2Npb24iLCJjYXJhY3RlcmlzdGljYXMiLCJlc3RhZG8iLCJwcmVjaW9hbHF1aWxlciIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVzIiwicG9zdCIsInN0YXR1cyIsImxvY2F0aW9uIiwiaHJlZiIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/propiedades/new/page.jsx\n"));

/***/ })

});