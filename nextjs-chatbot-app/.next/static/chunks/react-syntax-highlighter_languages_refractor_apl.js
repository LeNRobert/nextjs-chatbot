"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_apl"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/apl.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/apl.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = apl\napl.displayName = 'apl'\napl.aliases = []\nfunction apl(Prism) {\n  Prism.languages.apl = {\n    comment: /(?:⍝|#[! ]).*$/m,\n    string: {\n      pattern: /'(?:[^'\\r\\n]|'')*'/,\n      greedy: true\n    },\n    number:\n      /¯?(?:\\d*\\.?\\b\\d+(?:e[+¯]?\\d+)?|¯|∞)(?:j¯?(?:(?:\\d+(?:\\.\\d+)?|\\.\\d+)(?:e[+¯]?\\d+)?|¯|∞))?/i,\n    statement: /:[A-Z][a-z][A-Za-z]*\\b/,\n    'system-function': {\n      pattern: /⎕[A-Z]+/i,\n      alias: 'function'\n    },\n    constant: /[⍬⌾#⎕⍞]/,\n    function: /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,\n    'monadic-operator': {\n      pattern: /[\\\\\\/⌿⍀¨⍨⌶&∥]/,\n      alias: 'operator'\n    },\n    'dyadic-operator': {\n      pattern: /[.⍣⍠⍤∘⌸@⌺⍥]/,\n      alias: 'operator'\n    },\n    assignment: {\n      pattern: /←/,\n      alias: 'keyword'\n    },\n    punctuation: /[\\[;\\]()◇⋄]/,\n    dfn: {\n      pattern: /[{}⍺⍵⍶⍹∇⍫:]/,\n      alias: 'builtin'\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9hcGwuanMiLCJtYXBwaW5ncyI6IkFBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0JBQXNCO0FBQ3RCO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9hcGwuanM/MjczNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhcGxcbmFwbC5kaXNwbGF5TmFtZSA9ICdhcGwnXG5hcGwuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBhcGwoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmFwbCA9IHtcbiAgICBjb21tZW50OiAvKD864o2dfCNbISBdKS4qJC9tLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLycoPzpbXidcXHJcXG5dfCcnKSonLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgbnVtYmVyOlxuICAgICAgL8KvPyg/OlxcZCpcXC4/XFxiXFxkKyg/OmVbK8KvXT9cXGQrKT98wq984oieKSg/OmrCrz8oPzooPzpcXGQrKD86XFwuXFxkKyk/fFxcLlxcZCspKD86ZVsrwq9dP1xcZCspP3zCr3ziiJ4pKT8vaSxcbiAgICBzdGF0ZW1lbnQ6IC86W0EtWl1bYS16XVtBLVphLXpdKlxcYi8sXG4gICAgJ3N5c3RlbS1mdW5jdGlvbic6IHtcbiAgICAgIHBhdHRlcm46IC/ijpVbQS1aXSsvaSxcbiAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgfSxcbiAgICBjb25zdGFudDogL1vijazijL4j4o6V4o2eXS8sXG4gICAgZnVuY3Rpb246IC9bLSvDl8O34oyI4oyK4oijfOKNs+KNuD8q4o2f4peLIeKMuTziiaQ9PuKJpeKJoOKJoeKJouKIiuKNt+KIquKIqX7iiKjiiKfijbHijbLijbQs4o2q4oy94oqW4o2J4oaR4oaT4oqC4oqD4oqG4oqH4oy34o2L4o2S4oqk4oql4o2V4o2O4oqj4oqi4o2B4o2C4omI4o2v4oaXwqTihpJdLyxcbiAgICAnbW9uYWRpYy1vcGVyYXRvcic6IHtcbiAgICAgIHBhdHRlcm46IC9bXFxcXFxcL+KMv+KNgMKo4o2o4oy2JuKIpV0vLFxuICAgICAgYWxpYXM6ICdvcGVyYXRvcidcbiAgICB9LFxuICAgICdkeWFkaWMtb3BlcmF0b3InOiB7XG4gICAgICBwYXR0ZXJuOiAvWy7ijaPijaDijaTiiJjijLhA4oy64o2lXS8sXG4gICAgICBhbGlhczogJ29wZXJhdG9yJ1xuICAgIH0sXG4gICAgYXNzaWdubWVudDoge1xuICAgICAgcGF0dGVybjogL+KGkC8sXG4gICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgfSxcbiAgICBwdW5jdHVhdGlvbjogL1tcXFs7XFxdKCnil4fii4RdLyxcbiAgICBkZm46IHtcbiAgICAgIHBhdHRlcm46IC9be33ijbrijbXijbbijbniiIfijas6XS8sXG4gICAgICBhbGlhczogJ2J1aWx0aW4nXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/apl.js\n"));

/***/ })

}]);