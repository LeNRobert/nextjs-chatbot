"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_xeora"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/xeora.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/xeora.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = xeora\nxeora.displayName = 'xeora'\nxeora.aliases = ['xeoracube']\nfunction xeora(Prism) {\n  ;(function (Prism) {\n    Prism.languages.xeora = Prism.languages.extend('markup', {\n      constant: {\n        pattern: /\\$(?:DomainContents|PageRenderDuration)\\$/,\n        inside: {\n          punctuation: {\n            pattern: /\\$/\n          }\n        }\n      },\n      variable: {\n        pattern: /\\$@?(?:#+|[-+*~=^])?[\\w.]+\\$/,\n        inside: {\n          punctuation: {\n            pattern: /[$.]/\n          },\n          operator: {\n            pattern: /#+|[-+*~=^@]/\n          }\n        }\n      },\n      'function-inline': {\n        pattern:\n          /\\$F:[-\\w.]+\\?[-\\w.]+(?:,(?:(?:@[-#]*\\w+\\.[\\w+.]\\.*)*\\|)*(?:(?:[\\w+]|[-#*.~^]+[\\w+]|=\\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\\w+\\.[\\w+.]\\.*)+(?:(?:[\\w+]|[-#*~^][-#*.~^]*[\\w+]|=\\S)(?:[^$=]|=+[^=])*=*)?)?)?\\$/,\n        inside: {\n          variable: {\n            pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\\w.]+/,\n            inside: {\n              punctuation: {\n                pattern: /[,.|]/\n              },\n              operator: {\n                pattern: /#+|[-+*~=^@]/\n              }\n            }\n          },\n          punctuation: {\n            pattern: /\\$\\w:|[$:?.,|]/\n          }\n        },\n        alias: 'function'\n      },\n      'function-block': {\n        pattern:\n          /\\$XF:\\{[-\\w.]+\\?[-\\w.]+(?:,(?:(?:@[-#]*\\w+\\.[\\w+.]\\.*)*\\|)*(?:(?:[\\w+]|[-#*.~^]+[\\w+]|=\\S)(?:[^$=]|=+[^=])*=*|(?:@[-#]*\\w+\\.[\\w+.]\\.*)+(?:(?:[\\w+]|[-#*~^][-#*.~^]*[\\w+]|=\\S)(?:[^$=]|=+[^=])*=*)?)?)?\\}:XF\\$/,\n        inside: {\n          punctuation: {\n            pattern: /[$:{}?.,|]/\n          }\n        },\n        alias: 'function'\n      },\n      'directive-inline': {\n        pattern: /\\$\\w(?:#\\d+\\+?)?(?:\\[[-\\w.]+\\])?:[-\\/\\w.]+\\$/,\n        inside: {\n          punctuation: {\n            pattern: /\\$(?:\\w:|C(?:\\[|#\\d))?|[:{[\\]]/,\n            inside: {\n              tag: {\n                pattern: /#\\d/\n              }\n            }\n          }\n        },\n        alias: 'function'\n      },\n      'directive-block-open': {\n        pattern:\n          /\\$\\w+:\\{|\\$\\w(?:#\\d+\\+?)?(?:\\[[-\\w.]+\\])?:[-\\w.]+:\\{(?:![A-Z]+)?/,\n        inside: {\n          punctuation: {\n            pattern: /\\$(?:\\w:|C(?:\\[|#\\d))?|[:{[\\]]/,\n            inside: {\n              tag: {\n                pattern: /#\\d/\n              }\n            }\n          },\n          attribute: {\n            pattern: /![A-Z]+$/,\n            inside: {\n              punctuation: {\n                pattern: /!/\n              }\n            },\n            alias: 'keyword'\n          }\n        },\n        alias: 'function'\n      },\n      'directive-block-separator': {\n        pattern: /\\}:[-\\w.]+:\\{/,\n        inside: {\n          punctuation: {\n            pattern: /[:{}]/\n          }\n        },\n        alias: 'function'\n      },\n      'directive-block-close': {\n        pattern: /\\}:[-\\w.]+\\$/,\n        inside: {\n          punctuation: {\n            pattern: /[:{}$]/\n          }\n        },\n        alias: 'function'\n      }\n    })\n    Prism.languages.insertBefore(\n      'inside',\n      'punctuation',\n      {\n        variable: Prism.languages.xeora['function-inline'].inside['variable']\n      },\n      Prism.languages.xeora['function-block']\n    )\n    Prism.languages.xeoracube = Prism.languages.xeora\n  })(Prism)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy94ZW9yYS5qcyIsIm1hcHBpbmdzIjoiQUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esa0JBQWtCLGlNQUFpTTtBQUNuTjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsbUJBQW1CLDRDQUE0QztBQUMvRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxvQkFBb0IsV0FBVztBQUMvQjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcveGVvcmEuanM/YzhkMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB4ZW9yYVxueGVvcmEuZGlzcGxheU5hbWUgPSAneGVvcmEnXG54ZW9yYS5hbGlhc2VzID0gWyd4ZW9yYWN1YmUnXVxuZnVuY3Rpb24geGVvcmEoUHJpc20pIHtcbiAgOyhmdW5jdGlvbiAoUHJpc20pIHtcbiAgICBQcmlzbS5sYW5ndWFnZXMueGVvcmEgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7XG4gICAgICBjb25zdGFudDoge1xuICAgICAgICBwYXR0ZXJuOiAvXFwkKD86RG9tYWluQ29udGVudHN8UGFnZVJlbmRlckR1cmF0aW9uKVxcJC8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXFwkL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXCRAPyg/OiMrfFstKyp+PV5dKT9bXFx3Ll0rXFwkLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9bJC5dL1xuICAgICAgICAgIH0sXG4gICAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8jK3xbLSsqfj1eQF0vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ2Z1bmN0aW9uLWlubGluZSc6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAvXFwkRjpbLVxcdy5dK1xcP1stXFx3Ll0rKD86LCg/Oig/OkBbLSNdKlxcdytcXC5bXFx3Ky5dXFwuKikqXFx8KSooPzooPzpbXFx3K118Wy0jKi5+Xl0rW1xcdytdfD1cXFMpKD86W14kPV18PStbXj1dKSo9KnwoPzpAWy0jXSpcXHcrXFwuW1xcdysuXVxcLiopKyg/Oig/OltcXHcrXXxbLSMqfl5dWy0jKi5+Xl0qW1xcdytdfD1cXFMpKD86W14kPV18PStbXj1dKSo9Kik/KT8pP1xcJC8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKD86Wyx8XSlAPyg/OiMrfFstKyp+PV5dKT9bXFx3Ll0rLyxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IC9bLC58XS9cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvIyt8Wy0rKn49XkBdL1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogL1xcJFxcdzp8WyQ6Py4sfF0vXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgfSxcbiAgICAgICdmdW5jdGlvbi1ibG9jayc6IHtcbiAgICAgICAgcGF0dGVybjpcbiAgICAgICAgICAvXFwkWEY6XFx7Wy1cXHcuXStcXD9bLVxcdy5dKyg/OiwoPzooPzpAWy0jXSpcXHcrXFwuW1xcdysuXVxcLiopKlxcfCkqKD86KD86W1xcdytdfFstIyoufl5dK1tcXHcrXXw9XFxTKSg/OlteJD1dfD0rW149XSkqPSp8KD86QFstI10qXFx3K1xcLltcXHcrLl1cXC4qKSsoPzooPzpbXFx3K118Wy0jKn5eXVstIyoufl5dKltcXHcrXXw9XFxTKSg/OlteJD1dfD0rW149XSkqPSopPyk/KT9cXH06WEZcXCQvLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogL1skOnt9Py4sfF0vXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgfSxcbiAgICAgICdkaXJlY3RpdmUtaW5saW5lJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXFwkXFx3KD86I1xcZCtcXCs/KT8oPzpcXFtbLVxcdy5dK1xcXSk/OlstXFwvXFx3Ll0rXFwkLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9cXCQoPzpcXHc6fEMoPzpcXFt8I1xcZCkpP3xbOntbXFxdXS8sXG4gICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgdGFnOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogLyNcXGQvXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgICB9LFxuICAgICAgJ2RpcmVjdGl2ZS1ibG9jay1vcGVuJzoge1xuICAgICAgICBwYXR0ZXJuOlxuICAgICAgICAgIC9cXCRcXHcrOlxce3xcXCRcXHcoPzojXFxkK1xcKz8pPyg/OlxcW1stXFx3Ll0rXFxdKT86Wy1cXHcuXSs6XFx7KD86IVtBLVpdKyk/LyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9cXCQoPzpcXHc6fEMoPzpcXFt8I1xcZCkpP3xbOntbXFxdXS8sXG4gICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgdGFnOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogLyNcXGQvXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJpYnV0ZToge1xuICAgICAgICAgICAgcGF0dGVybjogLyFbQS1aXSskLyxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IC8hL1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICAgIH0sXG4gICAgICAnZGlyZWN0aXZlLWJsb2NrLXNlcGFyYXRvcic6IHtcbiAgICAgICAgcGF0dGVybjogL1xcfTpbLVxcdy5dKzpcXHsvLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogL1s6e31dL1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICAgIH0sXG4gICAgICAnZGlyZWN0aXZlLWJsb2NrLWNsb3NlJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXFx9OlstXFx3Ll0rXFwkLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9bOnt9JF0vXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgfVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcbiAgICAgICdpbnNpZGUnLFxuICAgICAgJ3B1bmN0dWF0aW9uJyxcbiAgICAgIHtcbiAgICAgICAgdmFyaWFibGU6IFByaXNtLmxhbmd1YWdlcy54ZW9yYVsnZnVuY3Rpb24taW5saW5lJ10uaW5zaWRlWyd2YXJpYWJsZSddXG4gICAgICB9LFxuICAgICAgUHJpc20ubGFuZ3VhZ2VzLnhlb3JhWydmdW5jdGlvbi1ibG9jayddXG4gICAgKVxuICAgIFByaXNtLmxhbmd1YWdlcy54ZW9yYWN1YmUgPSBQcmlzbS5sYW5ndWFnZXMueGVvcmFcbiAgfSkoUHJpc20pXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/xeora.js\n"));

/***/ })

}]);