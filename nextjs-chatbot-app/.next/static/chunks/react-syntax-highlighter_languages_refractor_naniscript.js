"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["react-syntax-highlighter_languages_refractor_naniscript"],{

/***/ "(app-pages-browser)/./node_modules/refractor/lang/naniscript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/naniscript.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n\nmodule.exports = naniscript\nnaniscript.displayName = 'naniscript'\nnaniscript.aliases = []\nfunction naniscript(Prism) {\n  ;(function (Prism) {\n    var expressionDef = /\\{[^\\r\\n\\[\\]{}]*\\}/\n    var params = {\n      'quoted-string': {\n        pattern: /\"(?:[^\"\\\\]|\\\\.)*\"/,\n        alias: 'operator'\n      },\n      'command-param-id': {\n        pattern: /(\\s)\\w+:/,\n        lookbehind: true,\n        alias: 'property'\n      },\n      'command-param-value': [\n        {\n          pattern: expressionDef,\n          alias: 'selector'\n        },\n        {\n          pattern: /([\\t ])\\S+/,\n          lookbehind: true,\n          greedy: true,\n          alias: 'operator'\n        },\n        {\n          pattern: /\\S(?:.*\\S)?/,\n          alias: 'operator'\n        }\n      ]\n    }\n    Prism.languages.naniscript = {\n      // ; ...\n      comment: {\n        pattern: /^([\\t ]*);.*/m,\n        lookbehind: true\n      },\n      // > ...\n      // Define is a control line starting with '>' followed by a word, a space and a text.\n      define: {\n        pattern: /^>.+/m,\n        alias: 'tag',\n        inside: {\n          value: {\n            pattern: /(^>\\w+[\\t ]+)(?!\\s)[^{}\\r\\n]+/,\n            lookbehind: true,\n            alias: 'operator'\n          },\n          key: {\n            pattern: /(^>)\\w+/,\n            lookbehind: true\n          }\n        }\n      },\n      // # ...\n      label: {\n        pattern: /^([\\t ]*)#[\\t ]*\\w+[\\t ]*$/m,\n        lookbehind: true,\n        alias: 'regex'\n      },\n      command: {\n        pattern: /^([\\t ]*)@\\w+(?=[\\t ]|$).*/m,\n        lookbehind: true,\n        alias: 'function',\n        inside: {\n          'command-name': /^@\\w+/,\n          expression: {\n            pattern: expressionDef,\n            greedy: true,\n            alias: 'selector'\n          },\n          'command-params': {\n            pattern: /\\s*\\S[\\s\\S]*/,\n            inside: params\n          }\n        }\n      },\n      // Generic is any line that doesn't start with operators: ;>#@\n      'generic-text': {\n        pattern: /(^[ \\t]*)[^#@>;\\s].*/m,\n        lookbehind: true,\n        alias: 'punctuation',\n        inside: {\n          // \\{ ... \\} ... \\[ ... \\] ... \\\"\n          'escaped-char': /\\\\[{}\\[\\]\"]/,\n          expression: {\n            pattern: expressionDef,\n            greedy: true,\n            alias: 'selector'\n          },\n          'inline-command': {\n            pattern: /\\[[\\t ]*\\w[^\\r\\n\\[\\]]*\\]/,\n            greedy: true,\n            alias: 'function',\n            inside: {\n              'command-params': {\n                pattern: /(^\\[[\\t ]*\\w+\\b)[\\s\\S]+(?=\\]$)/,\n                lookbehind: true,\n                inside: params\n              },\n              'command-param-name': {\n                pattern: /^(\\[[\\t ]*)\\w+/,\n                lookbehind: true,\n                alias: 'name'\n              },\n              'start-stop-char': /[\\[\\]]/\n            }\n          }\n        }\n      }\n    }\n    Prism.languages.nani = Prism.languages['naniscript']\n    /** @typedef {InstanceType<import(\"./prism-core\")[\"Token\"]>} Token */\n    /**\n     * This hook is used to validate generic-text tokens for balanced brackets.\n     * Mark token as bad-line when contains not balanced brackets: {},[]\n     */\n    Prism.hooks.add('after-tokenize', function (env) {\n      /** @type {(Token | string)[]} */\n      var tokens = env.tokens\n      tokens.forEach(function (token) {\n        if (typeof token !== 'string' && token.type === 'generic-text') {\n          var content = getTextContent(token)\n          if (!isBracketsBalanced(content)) {\n            token.type = 'bad-line'\n            token.content = content\n          }\n        }\n      })\n    })\n    /**\n     * @param {string} input\n     * @returns {boolean}\n     */\n    function isBracketsBalanced(input) {\n      var brackets = '[]{}'\n      var stack = []\n      for (var i = 0; i < input.length; i++) {\n        var bracket = input[i]\n        var bracketsIndex = brackets.indexOf(bracket)\n        if (bracketsIndex !== -1) {\n          if (bracketsIndex % 2 === 0) {\n            stack.push(bracketsIndex + 1)\n          } else if (stack.pop() !== bracketsIndex) {\n            return false\n          }\n        }\n      }\n      return stack.length === 0\n    }\n    /**\n     * @param {string | Token | (string | Token)[]} token\n     * @returns {string}\n     */\n    function getTextContent(token) {\n      if (typeof token === 'string') {\n        return token\n      } else if (Array.isArray(token)) {\n        return token.map(getTextContent).join('')\n      } else {\n        return getTextContent(token.content)\n      }\n    }\n  })(Prism)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9uYW5pc2NyaXB0LmpzIiwibWFwcGluZ3MiOiJBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDJCQUEyQixZQUFZLElBQUk7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLGlFQUFpRTtBQUNqRTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLCtDQUErQztBQUNqRTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxzQkFBc0Isa0JBQWtCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFDQUFxQztBQUNwRCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9uYW5pc2NyaXB0LmpzPzdiODciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbmFuaXNjcmlwdFxubmFuaXNjcmlwdC5kaXNwbGF5TmFtZSA9ICduYW5pc2NyaXB0J1xubmFuaXNjcmlwdC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIG5hbmlzY3JpcHQoUHJpc20pIHtcbiAgOyhmdW5jdGlvbiAoUHJpc20pIHtcbiAgICB2YXIgZXhwcmVzc2lvbkRlZiA9IC9cXHtbXlxcclxcblxcW1xcXXt9XSpcXH0vXG4gICAgdmFyIHBhcmFtcyA9IHtcbiAgICAgICdxdW90ZWQtc3RyaW5nJzoge1xuICAgICAgICBwYXR0ZXJuOiAvXCIoPzpbXlwiXFxcXF18XFxcXC4pKlwiLyxcbiAgICAgICAgYWxpYXM6ICdvcGVyYXRvcidcbiAgICAgIH0sXG4gICAgICAnY29tbWFuZC1wYXJhbS1pZCc6IHtcbiAgICAgICAgcGF0dGVybjogLyhcXHMpXFx3KzovLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ3Byb3BlcnR5J1xuICAgICAgfSxcbiAgICAgICdjb21tYW5kLXBhcmFtLXZhbHVlJzogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogZXhwcmVzc2lvbkRlZixcbiAgICAgICAgICBhbGlhczogJ3NlbGVjdG9yJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogLyhbXFx0IF0pXFxTKy8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdvcGVyYXRvcidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC9cXFMoPzouKlxcUyk/LyxcbiAgICAgICAgICBhbGlhczogJ29wZXJhdG9yJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICAgIFByaXNtLmxhbmd1YWdlcy5uYW5pc2NyaXB0ID0ge1xuICAgICAgLy8gOyAuLi5cbiAgICAgIGNvbW1lbnQ6IHtcbiAgICAgICAgcGF0dGVybjogL14oW1xcdCBdKik7LiovbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8vID4gLi4uXG4gICAgICAvLyBEZWZpbmUgaXMgYSBjb250cm9sIGxpbmUgc3RhcnRpbmcgd2l0aCAnPicgZm9sbG93ZWQgYnkgYSB3b3JkLCBhIHNwYWNlIGFuZCBhIHRleHQuXG4gICAgICBkZWZpbmU6IHtcbiAgICAgICAgcGF0dGVybjogL14+LisvbSxcbiAgICAgICAgYWxpYXM6ICd0YWcnLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgcGF0dGVybjogLyhePlxcdytbXFx0IF0rKSg/IVxccylbXnt9XFxyXFxuXSsvLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGFsaWFzOiAnb3BlcmF0b3InXG4gICAgICAgICAgfSxcbiAgICAgICAgICBrZXk6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXj4pXFx3Ky8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gIyAuLi5cbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIHBhdHRlcm46IC9eKFtcXHQgXSopI1tcXHQgXSpcXHcrW1xcdCBdKiQvbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdyZWdleCdcbiAgICAgIH0sXG4gICAgICBjb21tYW5kOiB7XG4gICAgICAgIHBhdHRlcm46IC9eKFtcXHQgXSopQFxcdysoPz1bXFx0IF18JCkuKi9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgJ2NvbW1hbmQtbmFtZSc6IC9eQFxcdysvLFxuICAgICAgICAgIGV4cHJlc3Npb246IHtcbiAgICAgICAgICAgIHBhdHRlcm46IGV4cHJlc3Npb25EZWYsXG4gICAgICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgICAgICBhbGlhczogJ3NlbGVjdG9yJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgJ2NvbW1hbmQtcGFyYW1zJzoge1xuICAgICAgICAgICAgcGF0dGVybjogL1xccypcXFNbXFxzXFxTXSovLFxuICAgICAgICAgICAgaW5zaWRlOiBwYXJhbXNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBHZW5lcmljIGlzIGFueSBsaW5lIHRoYXQgZG9lc24ndCBzdGFydCB3aXRoIG9wZXJhdG9yczogOz4jQFxuICAgICAgJ2dlbmVyaWMtdGV4dCc6IHtcbiAgICAgICAgcGF0dGVybjogLyheWyBcXHRdKilbXiNAPjtcXHNdLiovbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbicsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIC8vIFxceyAuLi4gXFx9IC4uLiBcXFsgLi4uIFxcXSAuLi4gXFxcIlxuICAgICAgICAgICdlc2NhcGVkLWNoYXInOiAvXFxcXFt7fVxcW1xcXVwiXS8sXG4gICAgICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogZXhwcmVzc2lvbkRlZixcbiAgICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgICAgIGFsaWFzOiAnc2VsZWN0b3InXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnaW5saW5lLWNvbW1hbmQnOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXFxbW1xcdCBdKlxcd1teXFxyXFxuXFxbXFxdXSpcXF0vLFxuICAgICAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICAgICAgYWxpYXM6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgJ2NvbW1hbmQtcGFyYW1zJzoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IC8oXlxcW1tcXHQgXSpcXHcrXFxiKVtcXHNcXFNdKyg/PVxcXSQpLyxcbiAgICAgICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGluc2lkZTogcGFyYW1zXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdjb21tYW5kLXBhcmFtLW5hbWUnOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogL14oXFxbW1xcdCBdKilcXHcrLyxcbiAgICAgICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFsaWFzOiAnbmFtZSdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJ3N0YXJ0LXN0b3AtY2hhcic6IC9bXFxbXFxdXS9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgUHJpc20ubGFuZ3VhZ2VzLm5hbmkgPSBQcmlzbS5sYW5ndWFnZXNbJ25hbmlzY3JpcHQnXVxuICAgIC8qKiBAdHlwZWRlZiB7SW5zdGFuY2VUeXBlPGltcG9ydChcIi4vcHJpc20tY29yZVwiKVtcIlRva2VuXCJdPn0gVG9rZW4gKi9cbiAgICAvKipcbiAgICAgKiBUaGlzIGhvb2sgaXMgdXNlZCB0byB2YWxpZGF0ZSBnZW5lcmljLXRleHQgdG9rZW5zIGZvciBiYWxhbmNlZCBicmFja2V0cy5cbiAgICAgKiBNYXJrIHRva2VuIGFzIGJhZC1saW5lIHdoZW4gY29udGFpbnMgbm90IGJhbGFuY2VkIGJyYWNrZXRzOiB7fSxbXVxuICAgICAqL1xuICAgIFByaXNtLmhvb2tzLmFkZCgnYWZ0ZXItdG9rZW5pemUnLCBmdW5jdGlvbiAoZW52KSB7XG4gICAgICAvKiogQHR5cGUgeyhUb2tlbiB8IHN0cmluZylbXX0gKi9cbiAgICAgIHZhciB0b2tlbnMgPSBlbnYudG9rZW5zXG4gICAgICB0b2tlbnMuZm9yRWFjaChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiAhPT0gJ3N0cmluZycgJiYgdG9rZW4udHlwZSA9PT0gJ2dlbmVyaWMtdGV4dCcpIHtcbiAgICAgICAgICB2YXIgY29udGVudCA9IGdldFRleHRDb250ZW50KHRva2VuKVxuICAgICAgICAgIGlmICghaXNCcmFja2V0c0JhbGFuY2VkKGNvbnRlbnQpKSB7XG4gICAgICAgICAgICB0b2tlbi50eXBlID0gJ2JhZC1saW5lJ1xuICAgICAgICAgICAgdG9rZW4uY29udGVudCA9IGNvbnRlbnRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW5wdXRcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc0JyYWNrZXRzQmFsYW5jZWQoaW5wdXQpIHtcbiAgICAgIHZhciBicmFja2V0cyA9ICdbXXt9J1xuICAgICAgdmFyIHN0YWNrID0gW11cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGJyYWNrZXQgPSBpbnB1dFtpXVxuICAgICAgICB2YXIgYnJhY2tldHNJbmRleCA9IGJyYWNrZXRzLmluZGV4T2YoYnJhY2tldClcbiAgICAgICAgaWYgKGJyYWNrZXRzSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgaWYgKGJyYWNrZXRzSW5kZXggJSAyID09PSAwKSB7XG4gICAgICAgICAgICBzdGFjay5wdXNoKGJyYWNrZXRzSW5kZXggKyAxKVxuICAgICAgICAgIH0gZWxzZSBpZiAoc3RhY2sucG9wKCkgIT09IGJyYWNrZXRzSW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHN0YWNrLmxlbmd0aCA9PT0gMFxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZyB8IFRva2VuIHwgKHN0cmluZyB8IFRva2VuKVtdfSB0b2tlblxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0VGV4dENvbnRlbnQodG9rZW4pIHtcbiAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB0b2tlblxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHRva2VuKSkge1xuICAgICAgICByZXR1cm4gdG9rZW4ubWFwKGdldFRleHRDb250ZW50KS5qb2luKCcnKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGdldFRleHRDb250ZW50KHRva2VuLmNvbnRlbnQpXG4gICAgICB9XG4gICAgfVxuICB9KShQcmlzbSlcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/refractor/lang/naniscript.js\n"));

/***/ })

}]);