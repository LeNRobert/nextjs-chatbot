"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@mistralai";
exports.ids = ["vendor-chunks/@mistralai"];
exports.modules = {

/***/ "(rsc)/./node_modules/@mistralai/mistralai/src/client.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mistralai/mistralai/src/client.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet isNode = false;\n\nconst VERSION = '0.0.3';\nconst RETRY_STATUS_CODES = [429, 500, 502, 503, 504];\nconst ENDPOINT = 'https://api.mistral.ai';\n\n/**\n * Initialize fetch\n * @return {Promise<void>}\n */\nasync function initializeFetch() {\n  if (typeof window === 'undefined' ||\n    typeof globalThis.fetch === 'undefined') {\n    const nodeFetch = await Promise.all(/*! import() */[__webpack_require__.e(\"vendor-chunks/whatwg-url\"), __webpack_require__.e(\"vendor-chunks/tr46\"), __webpack_require__.e(\"vendor-chunks/node-fetch\"), __webpack_require__.e(\"vendor-chunks/webidl-conversions\")]).then(__webpack_require__.bind(__webpack_require__, /*! node-fetch */ \"(rsc)/./node_modules/node-fetch/lib/index.mjs\"));\n    fetch = nodeFetch.default;\n    isNode = true;\n  } else {\n    fetch = globalThis.fetch;\n  }\n}\n\ninitializeFetch();\n\n/**\n * MistralAPIError\n * @return {MistralAPIError}\n * @extends {Error}\n */\nclass MistralAPIError extends Error {\n  /**\n   * A simple error class for Mistral API errors\n   * @param {*} message\n   */\n  constructor(message) {\n    super(message);\n    this.name = 'MistralAPIError';\n  }\n};\n\n/**\n * MistralClient\n * @return {MistralClient}\n */\nclass MistralClient {\n  /**\n   * A simple and lightweight client for the Mistral API\n   * @param {*} apiKey can be set as an environment variable MISTRAL_API_KEY,\n   * or provided in this parameter\n   * @param {*} endpoint defaults to https://api.mistral.ai\n   * @param {*} maxRetries defaults to 5\n   * @param {*} timeout defaults to 120 seconds\n   */\n  constructor(\n    apiKey = process.env.MISTRAL_API_KEY,\n    endpoint = ENDPOINT,\n    maxRetries = 5,\n    timeout = 120,\n  ) {\n    this.endpoint = endpoint;\n    this.apiKey = apiKey;\n\n    this.maxRetries = maxRetries;\n    this.timeout = timeout;\n\n    if (this.endpoint.indexOf('inference.azure.com')) {\n      this.modelDefault = 'mistral';\n    }\n  }\n\n  /**\n   *\n   * @param {*} method\n   * @param {*} path\n   * @param {*} request\n   * @return {Promise<*>}\n   */\n  _request = async function(method, path, request) {\n    const url = `${this.endpoint}/${path}`;\n    const options = {\n      method: method,\n      headers: {\n        'User-Agent': `mistral-client-js/${VERSION}`,\n        'Accept': request?.stream ? 'text/event-stream' : 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': `Bearer ${this.apiKey}`,\n      },\n      body: method !== 'get' ? JSON.stringify(request) : null,\n      timeout: this.timeout * 1000,\n    };\n\n    for (let attempts = 0; attempts < this.maxRetries; attempts++) {\n      try {\n        const response = await fetch(url, options);\n\n        if (response.ok) {\n          if (request?.stream) {\n            if (isNode) {\n              return response.body;\n            } else {\n              const reader = response.body.getReader();\n              // Chrome does not support async iterators yet, so polyfill it\n              const asyncIterator = async function* () {\n                try {\n                  while (true) {\n                    // Read from the stream\n                    const {done, value} = await reader.read();\n                    // Exit if we're done\n                    if (done) return;\n                    // Else yield the chunk\n                    yield value;\n                  }\n                } finally {\n                  reader.releaseLock();\n                }\n              };\n\n              return asyncIterator();\n            }\n          }\n          return await response.json();\n        } else if (RETRY_STATUS_CODES.includes(response.status)) {\n          console.debug(\n            `Retrying request on response status: ${response.status}`,\n            `Response: ${await response.text()}`,\n            `Attempt: ${attempts + 1}`,\n          );\n          // eslint-disable-next-line max-len\n          await new Promise((resolve) =>\n            setTimeout(resolve, Math.pow(2, (attempts + 1)) * 500),\n          );\n        } else {\n          throw new MistralAPIError(\n            `HTTP error! status: ${response.status} ` +\n            `Response: \\n${await response.text()}`,\n          );\n        }\n      } catch (error) {\n        console.error(`Request failed: ${error.message}`);\n        if (error.name === 'MistralAPIError') {\n          throw error;\n        }\n        if (attempts === this.maxRetries - 1) throw error;\n        // eslint-disable-next-line max-len\n        await new Promise((resolve) =>\n          setTimeout(resolve, Math.pow(2, (attempts + 1)) * 500),\n        );\n      }\n    }\n    throw new Error('Max retries reached');\n  };\n\n  /**\n   * Creates a chat completion request\n   * @param {*} model\n   * @param {*} messages\n   * @param {*} tools\n   * @param {*} temperature\n   * @param {*} maxTokens\n   * @param {*} topP\n   * @param {*} randomSeed\n   * @param {*} stream\n   * @param {*} safeMode deprecated use safePrompt instead\n   * @param {*} safePrompt\n   * @param {*} toolChoice\n   * @param {*} responseFormat\n   * @return {Promise<Object>}\n   */\n  _makeChatCompletionRequest = function(\n    model,\n    messages,\n    tools,\n    temperature,\n    maxTokens,\n    topP,\n    randomSeed,\n    stream,\n    safeMode,\n    safePrompt,\n    toolChoice,\n    responseFormat,\n  ) {\n    // if modelDefault and model are undefined, throw an error\n    if (!model && !this.modelDefault) {\n      throw new MistralAPIError(\n        'You must provide a model name',\n      );\n    }\n    return {\n      model: model ?? this.modelDefault,\n      messages: messages,\n      tools: tools ?? undefined,\n      temperature: temperature ?? undefined,\n      max_tokens: maxTokens ?? undefined,\n      top_p: topP ?? undefined,\n      random_seed: randomSeed ?? undefined,\n      stream: stream ?? undefined,\n      safe_prompt: (safeMode || safePrompt) ?? undefined,\n      tool_choice: toolChoice ?? undefined,\n      response_format: responseFormat ?? undefined,\n    };\n  };\n\n  /**\n   * Returns a list of the available models\n   * @return {Promise<Object>}\n   */\n  listModels = async function() {\n    const response = await this._request('get', 'v1/models');\n    return response;\n  };\n\n  /**\n   * A chat endpoint without streaming\n   * @param {*} model the name of the model to chat with, e.g. mistral-tiny\n   * @param {*} messages an array of messages to chat with, e.g.\n   * [{role: 'user', content: 'What is the best French cheese?'}]\n   * @param {*} tools  a list of tools to use.\n   * @param {*} temperature the temperature to use for sampling, e.g. 0.5\n   * @param {*} maxTokens the maximum number of tokens to generate, e.g. 100\n   * @param {*} topP the cumulative probability of tokens to generate, e.g. 0.9\n   * @param {*} randomSeed the random seed to use for sampling, e.g. 42\n   * @param {*} safeMode deprecated use safePrompt instead\n   * @param {*} safePrompt whether to use safe mode, e.g. true\n   * @param {*} toolChoice the tool to use, e.g. 'auto'\n   * @param {*} responseFormat the format of the response, e.g. 'json_format'\n   * @return {Promise<Object>}\n   */\n  chat = async function({\n    model,\n    messages,\n    tools,\n    temperature,\n    maxTokens,\n    topP,\n    randomSeed,\n    safeMode,\n    safePrompt,\n    toolChoice,\n    responseFormat,\n  }) {\n    const request = this._makeChatCompletionRequest(\n      model,\n      messages,\n      tools,\n      temperature,\n      maxTokens,\n      topP,\n      randomSeed,\n      false,\n      safeMode,\n      safePrompt,\n      toolChoice,\n      responseFormat,\n    );\n    const response = await this._request(\n      'post',\n      'v1/chat/completions',\n      request,\n    );\n    return response;\n  };\n\n  /**\n   * A chat endpoint that streams responses.\n   * @param {*} model the name of the model to chat with, e.g. mistral-tiny\n   * @param {*} messages an array of messages to chat with, e.g.\n   * [{role: 'user', content: 'What is the best French cheese?'}]\n   * @param {*} tools  a list of tools to use.\n   * @param {*} temperature the temperature to use for sampling, e.g. 0.5\n   * @param {*} maxTokens the maximum number of tokens to generate, e.g. 100\n   * @param {*} topP the cumulative probability of tokens to generate, e.g. 0.9\n   * @param {*} randomSeed the random seed to use for sampling, e.g. 42\n   * @param {*} safeMode deprecated use safePrompt instead\n   * @param {*} safePrompt whether to use safe mode, e.g. true\n   * @param {*} toolChoice the tool to use, e.g. 'auto'\n   * @param {*} responseFormat the format of the response, e.g. 'json_format'\n   * @return {Promise<Object>}\n   */\n  chatStream = async function* ({\n    model,\n    messages,\n    tools,\n    temperature,\n    maxTokens,\n    topP,\n    randomSeed,\n    safeMode,\n    safePrompt,\n    toolChoice,\n    responseFormat,\n  }) {\n    const request = this._makeChatCompletionRequest(\n      model,\n      messages,\n      tools,\n      temperature,\n      maxTokens,\n      topP,\n      randomSeed,\n      true,\n      safeMode,\n      safePrompt,\n      toolChoice,\n      responseFormat,\n    );\n    const response = await this._request(\n      'post',\n      'v1/chat/completions',\n      request,\n    );\n\n    let buffer = '';\n    const decoder = new TextDecoder();\n    for await (const chunk of response) {\n      buffer += decoder.decode(chunk, {stream: true});\n      let firstNewline;\n      while ((firstNewline = buffer.indexOf('\\n')) !== -1) {\n        const chunkLine = buffer.substring(0, firstNewline);\n        buffer = buffer.substring(firstNewline + 1);\n        if (chunkLine.startsWith('data:')) {\n          const json = chunkLine.substring(6).trim();\n          if (json !== '[DONE]') {\n            yield JSON.parse(json);\n          }\n        }\n      }\n    }\n  };\n\n  /**\n   * An embeddings endpoint that returns embeddings for a single,\n   * or batch of inputs\n   * @param {*} model The embedding model to use, e.g. mistral-embed\n   * @param {*} input The input to embed,\n   * e.g. ['What is the best French cheese?']\n   * @return {Promise<Object>}\n   */\n  embeddings = async function({model, input}) {\n    const request = {\n      model: model,\n      input: input,\n    };\n    const response = await this._request('post', 'v1/embeddings', request);\n    return response;\n  };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MistralClient);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQG1pc3RyYWxhaS9taXN0cmFsYWkvc3JjL2NsaWVudC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaVdBQW9CO0FBQ2hEO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCLGNBQWM7QUFDZDtBQUNBO0FBQ0EsbUJBQW1CLGNBQWMsR0FBRyxLQUFLO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQyxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBLDJCQUEyQiw0QkFBNEI7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLG9EQUFvRCxnQkFBZ0I7QUFDcEUseUJBQXlCLHNCQUFzQjtBQUMvQyx3QkFBd0IsYUFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsbUNBQW1DLGlCQUFpQjtBQUNwRCwyQkFBMkIsc0JBQXNCO0FBQ2pEO0FBQ0E7QUFDQSxRQUFRO0FBQ1IseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsT0FBTyx5REFBeUQ7QUFDaEUsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixPQUFPLHlEQUF5RDtBQUNoRSxhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixhQUFhLEdBQUc7QUFDaEIsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGFBQWE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsR0FBRztBQUNoQjtBQUNBLGNBQWM7QUFDZDtBQUNBLCtCQUErQixhQUFhO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNoYXRib3QtYXBwLy4vbm9kZV9tb2R1bGVzL0BtaXN0cmFsYWkvbWlzdHJhbGFpL3NyYy9jbGllbnQuanM/NzMzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaXNOb2RlID0gZmFsc2U7XG5cbmNvbnN0IFZFUlNJT04gPSAnMC4wLjMnO1xuY29uc3QgUkVUUllfU1RBVFVTX0NPREVTID0gWzQyOSwgNTAwLCA1MDIsIDUwMywgNTA0XTtcbmNvbnN0IEVORFBPSU5UID0gJ2h0dHBzOi8vYXBpLm1pc3RyYWwuYWknO1xuXG4vKipcbiAqIEluaXRpYWxpemUgZmV0Y2hcbiAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVGZXRjaCgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgdHlwZW9mIGdsb2JhbFRoaXMuZmV0Y2ggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3Qgbm9kZUZldGNoID0gYXdhaXQgaW1wb3J0KCdub2RlLWZldGNoJyk7XG4gICAgZmV0Y2ggPSBub2RlRmV0Y2guZGVmYXVsdDtcbiAgICBpc05vZGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGZldGNoID0gZ2xvYmFsVGhpcy5mZXRjaDtcbiAgfVxufVxuXG5pbml0aWFsaXplRmV0Y2goKTtcblxuLyoqXG4gKiBNaXN0cmFsQVBJRXJyb3JcbiAqIEByZXR1cm4ge01pc3RyYWxBUElFcnJvcn1cbiAqIEBleHRlbmRzIHtFcnJvcn1cbiAqL1xuY2xhc3MgTWlzdHJhbEFQSUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAvKipcbiAgICogQSBzaW1wbGUgZXJyb3IgY2xhc3MgZm9yIE1pc3RyYWwgQVBJIGVycm9yc1xuICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSAnTWlzdHJhbEFQSUVycm9yJztcbiAgfVxufTtcblxuLyoqXG4gKiBNaXN0cmFsQ2xpZW50XG4gKiBAcmV0dXJuIHtNaXN0cmFsQ2xpZW50fVxuICovXG5jbGFzcyBNaXN0cmFsQ2xpZW50IHtcbiAgLyoqXG4gICAqIEEgc2ltcGxlIGFuZCBsaWdodHdlaWdodCBjbGllbnQgZm9yIHRoZSBNaXN0cmFsIEFQSVxuICAgKiBAcGFyYW0geyp9IGFwaUtleSBjYW4gYmUgc2V0IGFzIGFuIGVudmlyb25tZW50IHZhcmlhYmxlIE1JU1RSQUxfQVBJX0tFWSxcbiAgICogb3IgcHJvdmlkZWQgaW4gdGhpcyBwYXJhbWV0ZXJcbiAgICogQHBhcmFtIHsqfSBlbmRwb2ludCBkZWZhdWx0cyB0byBodHRwczovL2FwaS5taXN0cmFsLmFpXG4gICAqIEBwYXJhbSB7Kn0gbWF4UmV0cmllcyBkZWZhdWx0cyB0byA1XG4gICAqIEBwYXJhbSB7Kn0gdGltZW91dCBkZWZhdWx0cyB0byAxMjAgc2Vjb25kc1xuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuTUlTVFJBTF9BUElfS0VZLFxuICAgIGVuZHBvaW50ID0gRU5EUE9JTlQsXG4gICAgbWF4UmV0cmllcyA9IDUsXG4gICAgdGltZW91dCA9IDEyMCxcbiAgKSB7XG4gICAgdGhpcy5lbmRwb2ludCA9IGVuZHBvaW50O1xuICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuXG4gICAgdGhpcy5tYXhSZXRyaWVzID0gbWF4UmV0cmllcztcbiAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuXG4gICAgaWYgKHRoaXMuZW5kcG9pbnQuaW5kZXhPZignaW5mZXJlbmNlLmF6dXJlLmNvbScpKSB7XG4gICAgICB0aGlzLm1vZGVsRGVmYXVsdCA9ICdtaXN0cmFsJztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHsqfSBtZXRob2RcbiAgICogQHBhcmFtIHsqfSBwYXRoXG4gICAqIEBwYXJhbSB7Kn0gcmVxdWVzdFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPCo+fVxuICAgKi9cbiAgX3JlcXVlc3QgPSBhc3luYyBmdW5jdGlvbihtZXRob2QsIHBhdGgsIHJlcXVlc3QpIHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmVuZHBvaW50fS8ke3BhdGh9YDtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdVc2VyLUFnZW50JzogYG1pc3RyYWwtY2xpZW50LWpzLyR7VkVSU0lPTn1gLFxuICAgICAgICAnQWNjZXB0JzogcmVxdWVzdD8uc3RyZWFtID8gJ3RleHQvZXZlbnQtc3RyZWFtJyA6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dGhpcy5hcGlLZXl9YCxcbiAgICAgIH0sXG4gICAgICBib2R5OiBtZXRob2QgIT09ICdnZXQnID8gSlNPTi5zdHJpbmdpZnkocmVxdWVzdCkgOiBudWxsLFxuICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0ICogMTAwMCxcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgYXR0ZW1wdHMgPSAwOyBhdHRlbXB0cyA8IHRoaXMubWF4UmV0cmllczsgYXR0ZW1wdHMrKykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIGlmIChyZXF1ZXN0Py5zdHJlYW0pIHtcbiAgICAgICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmJvZHk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSByZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO1xuICAgICAgICAgICAgICAvLyBDaHJvbWUgZG9lcyBub3Qgc3VwcG9ydCBhc3luYyBpdGVyYXRvcnMgeWV0LCBzbyBwb2x5ZmlsbCBpdFxuICAgICAgICAgICAgICBjb25zdCBhc3luY0l0ZXJhdG9yID0gYXN5bmMgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVhZCBmcm9tIHRoZSBzdHJlYW1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qge2RvbmUsIHZhbHVlfSA9IGF3YWl0IHJlYWRlci5yZWFkKCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEV4aXQgaWYgd2UncmUgZG9uZVxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAvLyBFbHNlIHlpZWxkIHRoZSBjaHVua1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgcmVhZGVyLnJlbGVhc2VMb2NrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHJldHVybiBhc3luY0l0ZXJhdG9yKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoUkVUUllfU1RBVFVTX0NPREVTLmluY2x1ZGVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICAgICAgICBjb25zb2xlLmRlYnVnKFxuICAgICAgICAgICAgYFJldHJ5aW5nIHJlcXVlc3Qgb24gcmVzcG9uc2Ugc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gLFxuICAgICAgICAgICAgYFJlc3BvbnNlOiAke2F3YWl0IHJlc3BvbnNlLnRleHQoKX1gLFxuICAgICAgICAgICAgYEF0dGVtcHQ6ICR7YXR0ZW1wdHMgKyAxfWAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PlxuICAgICAgICAgICAgc2V0VGltZW91dChyZXNvbHZlLCBNYXRoLnBvdygyLCAoYXR0ZW1wdHMgKyAxKSkgKiA1MDApLFxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IE1pc3RyYWxBUElFcnJvcihcbiAgICAgICAgICAgIGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfSBgICtcbiAgICAgICAgICAgIGBSZXNwb25zZTogXFxuJHthd2FpdCByZXNwb25zZS50ZXh0KCl9YCxcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBSZXF1ZXN0IGZhaWxlZDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICBpZiAoZXJyb3IubmFtZSA9PT0gJ01pc3RyYWxBUElFcnJvcicpIHtcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0ZW1wdHMgPT09IHRoaXMubWF4UmV0cmllcyAtIDEpIHRocm93IGVycm9yO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT5cbiAgICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIE1hdGgucG93KDIsIChhdHRlbXB0cyArIDEpKSAqIDUwMCksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignTWF4IHJldHJpZXMgcmVhY2hlZCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY2hhdCBjb21wbGV0aW9uIHJlcXVlc3RcbiAgICogQHBhcmFtIHsqfSBtb2RlbFxuICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VzXG4gICAqIEBwYXJhbSB7Kn0gdG9vbHNcbiAgICogQHBhcmFtIHsqfSB0ZW1wZXJhdHVyZVxuICAgKiBAcGFyYW0geyp9IG1heFRva2Vuc1xuICAgKiBAcGFyYW0geyp9IHRvcFBcbiAgICogQHBhcmFtIHsqfSByYW5kb21TZWVkXG4gICAqIEBwYXJhbSB7Kn0gc3RyZWFtXG4gICAqIEBwYXJhbSB7Kn0gc2FmZU1vZGUgZGVwcmVjYXRlZCB1c2Ugc2FmZVByb21wdCBpbnN0ZWFkXG4gICAqIEBwYXJhbSB7Kn0gc2FmZVByb21wdFxuICAgKiBAcGFyYW0geyp9IHRvb2xDaG9pY2VcbiAgICogQHBhcmFtIHsqfSByZXNwb25zZUZvcm1hdFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gICAqL1xuICBfbWFrZUNoYXRDb21wbGV0aW9uUmVxdWVzdCA9IGZ1bmN0aW9uKFxuICAgIG1vZGVsLFxuICAgIG1lc3NhZ2VzLFxuICAgIHRvb2xzLFxuICAgIHRlbXBlcmF0dXJlLFxuICAgIG1heFRva2VucyxcbiAgICB0b3BQLFxuICAgIHJhbmRvbVNlZWQsXG4gICAgc3RyZWFtLFxuICAgIHNhZmVNb2RlLFxuICAgIHNhZmVQcm9tcHQsXG4gICAgdG9vbENob2ljZSxcbiAgICByZXNwb25zZUZvcm1hdCxcbiAgKSB7XG4gICAgLy8gaWYgbW9kZWxEZWZhdWx0IGFuZCBtb2RlbCBhcmUgdW5kZWZpbmVkLCB0aHJvdyBhbiBlcnJvclxuICAgIGlmICghbW9kZWwgJiYgIXRoaXMubW9kZWxEZWZhdWx0KSB7XG4gICAgICB0aHJvdyBuZXcgTWlzdHJhbEFQSUVycm9yKFxuICAgICAgICAnWW91IG11c3QgcHJvdmlkZSBhIG1vZGVsIG5hbWUnLFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZGVsOiBtb2RlbCA/PyB0aGlzLm1vZGVsRGVmYXVsdCxcbiAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcyxcbiAgICAgIHRvb2xzOiB0b29scyA/PyB1bmRlZmluZWQsXG4gICAgICB0ZW1wZXJhdHVyZTogdGVtcGVyYXR1cmUgPz8gdW5kZWZpbmVkLFxuICAgICAgbWF4X3Rva2VuczogbWF4VG9rZW5zID8/IHVuZGVmaW5lZCxcbiAgICAgIHRvcF9wOiB0b3BQID8/IHVuZGVmaW5lZCxcbiAgICAgIHJhbmRvbV9zZWVkOiByYW5kb21TZWVkID8/IHVuZGVmaW5lZCxcbiAgICAgIHN0cmVhbTogc3RyZWFtID8/IHVuZGVmaW5lZCxcbiAgICAgIHNhZmVfcHJvbXB0OiAoc2FmZU1vZGUgfHwgc2FmZVByb21wdCkgPz8gdW5kZWZpbmVkLFxuICAgICAgdG9vbF9jaG9pY2U6IHRvb2xDaG9pY2UgPz8gdW5kZWZpbmVkLFxuICAgICAgcmVzcG9uc2VfZm9ybWF0OiByZXNwb25zZUZvcm1hdCA/PyB1bmRlZmluZWQsXG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgdGhlIGF2YWlsYWJsZSBtb2RlbHNcbiAgICogQHJldHVybiB7UHJvbWlzZTxPYmplY3Q+fVxuICAgKi9cbiAgbGlzdE1vZGVscyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fcmVxdWVzdCgnZ2V0JywgJ3YxL21vZGVscycpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfTtcblxuICAvKipcbiAgICogQSBjaGF0IGVuZHBvaW50IHdpdGhvdXQgc3RyZWFtaW5nXG4gICAqIEBwYXJhbSB7Kn0gbW9kZWwgdGhlIG5hbWUgb2YgdGhlIG1vZGVsIHRvIGNoYXQgd2l0aCwgZS5nLiBtaXN0cmFsLXRpbnlcbiAgICogQHBhcmFtIHsqfSBtZXNzYWdlcyBhbiBhcnJheSBvZiBtZXNzYWdlcyB0byBjaGF0IHdpdGgsIGUuZy5cbiAgICogW3tyb2xlOiAndXNlcicsIGNvbnRlbnQ6ICdXaGF0IGlzIHRoZSBiZXN0IEZyZW5jaCBjaGVlc2U/J31dXG4gICAqIEBwYXJhbSB7Kn0gdG9vbHMgIGEgbGlzdCBvZiB0b29scyB0byB1c2UuXG4gICAqIEBwYXJhbSB7Kn0gdGVtcGVyYXR1cmUgdGhlIHRlbXBlcmF0dXJlIHRvIHVzZSBmb3Igc2FtcGxpbmcsIGUuZy4gMC41XG4gICAqIEBwYXJhbSB7Kn0gbWF4VG9rZW5zIHRoZSBtYXhpbXVtIG51bWJlciBvZiB0b2tlbnMgdG8gZ2VuZXJhdGUsIGUuZy4gMTAwXG4gICAqIEBwYXJhbSB7Kn0gdG9wUCB0aGUgY3VtdWxhdGl2ZSBwcm9iYWJpbGl0eSBvZiB0b2tlbnMgdG8gZ2VuZXJhdGUsIGUuZy4gMC45XG4gICAqIEBwYXJhbSB7Kn0gcmFuZG9tU2VlZCB0aGUgcmFuZG9tIHNlZWQgdG8gdXNlIGZvciBzYW1wbGluZywgZS5nLiA0MlxuICAgKiBAcGFyYW0geyp9IHNhZmVNb2RlIGRlcHJlY2F0ZWQgdXNlIHNhZmVQcm9tcHQgaW5zdGVhZFxuICAgKiBAcGFyYW0geyp9IHNhZmVQcm9tcHQgd2hldGhlciB0byB1c2Ugc2FmZSBtb2RlLCBlLmcuIHRydWVcbiAgICogQHBhcmFtIHsqfSB0b29sQ2hvaWNlIHRoZSB0b29sIHRvIHVzZSwgZS5nLiAnYXV0bydcbiAgICogQHBhcmFtIHsqfSByZXNwb25zZUZvcm1hdCB0aGUgZm9ybWF0IG9mIHRoZSByZXNwb25zZSwgZS5nLiAnanNvbl9mb3JtYXQnXG4gICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAgICovXG4gIGNoYXQgPSBhc3luYyBmdW5jdGlvbih7XG4gICAgbW9kZWwsXG4gICAgbWVzc2FnZXMsXG4gICAgdG9vbHMsXG4gICAgdGVtcGVyYXR1cmUsXG4gICAgbWF4VG9rZW5zLFxuICAgIHRvcFAsXG4gICAgcmFuZG9tU2VlZCxcbiAgICBzYWZlTW9kZSxcbiAgICBzYWZlUHJvbXB0LFxuICAgIHRvb2xDaG9pY2UsXG4gICAgcmVzcG9uc2VGb3JtYXQsXG4gIH0pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5fbWFrZUNoYXRDb21wbGV0aW9uUmVxdWVzdChcbiAgICAgIG1vZGVsLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICB0b29scyxcbiAgICAgIHRlbXBlcmF0dXJlLFxuICAgICAgbWF4VG9rZW5zLFxuICAgICAgdG9wUCxcbiAgICAgIHJhbmRvbVNlZWQsXG4gICAgICBmYWxzZSxcbiAgICAgIHNhZmVNb2RlLFxuICAgICAgc2FmZVByb21wdCxcbiAgICAgIHRvb2xDaG9pY2UsXG4gICAgICByZXNwb25zZUZvcm1hdCxcbiAgICApO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5fcmVxdWVzdChcbiAgICAgICdwb3N0JyxcbiAgICAgICd2MS9jaGF0L2NvbXBsZXRpb25zJyxcbiAgICAgIHJlcXVlc3QsXG4gICAgKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIEEgY2hhdCBlbmRwb2ludCB0aGF0IHN0cmVhbXMgcmVzcG9uc2VzLlxuICAgKiBAcGFyYW0geyp9IG1vZGVsIHRoZSBuYW1lIG9mIHRoZSBtb2RlbCB0byBjaGF0IHdpdGgsIGUuZy4gbWlzdHJhbC10aW55XG4gICAqIEBwYXJhbSB7Kn0gbWVzc2FnZXMgYW4gYXJyYXkgb2YgbWVzc2FnZXMgdG8gY2hhdCB3aXRoLCBlLmcuXG4gICAqIFt7cm9sZTogJ3VzZXInLCBjb250ZW50OiAnV2hhdCBpcyB0aGUgYmVzdCBGcmVuY2ggY2hlZXNlPyd9XVxuICAgKiBAcGFyYW0geyp9IHRvb2xzICBhIGxpc3Qgb2YgdG9vbHMgdG8gdXNlLlxuICAgKiBAcGFyYW0geyp9IHRlbXBlcmF0dXJlIHRoZSB0ZW1wZXJhdHVyZSB0byB1c2UgZm9yIHNhbXBsaW5nLCBlLmcuIDAuNVxuICAgKiBAcGFyYW0geyp9IG1heFRva2VucyB0aGUgbWF4aW11bSBudW1iZXIgb2YgdG9rZW5zIHRvIGdlbmVyYXRlLCBlLmcuIDEwMFxuICAgKiBAcGFyYW0geyp9IHRvcFAgdGhlIGN1bXVsYXRpdmUgcHJvYmFiaWxpdHkgb2YgdG9rZW5zIHRvIGdlbmVyYXRlLCBlLmcuIDAuOVxuICAgKiBAcGFyYW0geyp9IHJhbmRvbVNlZWQgdGhlIHJhbmRvbSBzZWVkIHRvIHVzZSBmb3Igc2FtcGxpbmcsIGUuZy4gNDJcbiAgICogQHBhcmFtIHsqfSBzYWZlTW9kZSBkZXByZWNhdGVkIHVzZSBzYWZlUHJvbXB0IGluc3RlYWRcbiAgICogQHBhcmFtIHsqfSBzYWZlUHJvbXB0IHdoZXRoZXIgdG8gdXNlIHNhZmUgbW9kZSwgZS5nLiB0cnVlXG4gICAqIEBwYXJhbSB7Kn0gdG9vbENob2ljZSB0aGUgdG9vbCB0byB1c2UsIGUuZy4gJ2F1dG8nXG4gICAqIEBwYXJhbSB7Kn0gcmVzcG9uc2VGb3JtYXQgdGhlIGZvcm1hdCBvZiB0aGUgcmVzcG9uc2UsIGUuZy4gJ2pzb25fZm9ybWF0J1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPE9iamVjdD59XG4gICAqL1xuICBjaGF0U3RyZWFtID0gYXN5bmMgZnVuY3Rpb24qICh7XG4gICAgbW9kZWwsXG4gICAgbWVzc2FnZXMsXG4gICAgdG9vbHMsXG4gICAgdGVtcGVyYXR1cmUsXG4gICAgbWF4VG9rZW5zLFxuICAgIHRvcFAsXG4gICAgcmFuZG9tU2VlZCxcbiAgICBzYWZlTW9kZSxcbiAgICBzYWZlUHJvbXB0LFxuICAgIHRvb2xDaG9pY2UsXG4gICAgcmVzcG9uc2VGb3JtYXQsXG4gIH0pIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5fbWFrZUNoYXRDb21wbGV0aW9uUmVxdWVzdChcbiAgICAgIG1vZGVsLFxuICAgICAgbWVzc2FnZXMsXG4gICAgICB0b29scyxcbiAgICAgIHRlbXBlcmF0dXJlLFxuICAgICAgbWF4VG9rZW5zLFxuICAgICAgdG9wUCxcbiAgICAgIHJhbmRvbVNlZWQsXG4gICAgICB0cnVlLFxuICAgICAgc2FmZU1vZGUsXG4gICAgICBzYWZlUHJvbXB0LFxuICAgICAgdG9vbENob2ljZSxcbiAgICAgIHJlc3BvbnNlRm9ybWF0LFxuICAgICk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLl9yZXF1ZXN0KFxuICAgICAgJ3Bvc3QnLFxuICAgICAgJ3YxL2NoYXQvY29tcGxldGlvbnMnLFxuICAgICAgcmVxdWVzdCxcbiAgICApO1xuXG4gICAgbGV0IGJ1ZmZlciA9ICcnO1xuICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IGNodW5rIG9mIHJlc3BvbnNlKSB7XG4gICAgICBidWZmZXIgKz0gZGVjb2Rlci5kZWNvZGUoY2h1bmssIHtzdHJlYW06IHRydWV9KTtcbiAgICAgIGxldCBmaXJzdE5ld2xpbmU7XG4gICAgICB3aGlsZSAoKGZpcnN0TmV3bGluZSA9IGJ1ZmZlci5pbmRleE9mKCdcXG4nKSkgIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IGNodW5rTGluZSA9IGJ1ZmZlci5zdWJzdHJpbmcoMCwgZmlyc3ROZXdsaW5lKTtcbiAgICAgICAgYnVmZmVyID0gYnVmZmVyLnN1YnN0cmluZyhmaXJzdE5ld2xpbmUgKyAxKTtcbiAgICAgICAgaWYgKGNodW5rTGluZS5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgY29uc3QganNvbiA9IGNodW5rTGluZS5zdWJzdHJpbmcoNikudHJpbSgpO1xuICAgICAgICAgIGlmIChqc29uICE9PSAnW0RPTkVdJykge1xuICAgICAgICAgICAgeWllbGQgSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFuIGVtYmVkZGluZ3MgZW5kcG9pbnQgdGhhdCByZXR1cm5zIGVtYmVkZGluZ3MgZm9yIGEgc2luZ2xlLFxuICAgKiBvciBiYXRjaCBvZiBpbnB1dHNcbiAgICogQHBhcmFtIHsqfSBtb2RlbCBUaGUgZW1iZWRkaW5nIG1vZGVsIHRvIHVzZSwgZS5nLiBtaXN0cmFsLWVtYmVkXG4gICAqIEBwYXJhbSB7Kn0gaW5wdXQgVGhlIGlucHV0IHRvIGVtYmVkLFxuICAgKiBlLmcuIFsnV2hhdCBpcyB0aGUgYmVzdCBGcmVuY2ggY2hlZXNlPyddXG4gICAqIEByZXR1cm4ge1Byb21pc2U8T2JqZWN0Pn1cbiAgICovXG4gIGVtYmVkZGluZ3MgPSBhc3luYyBmdW5jdGlvbih7bW9kZWwsIGlucHV0fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICBtb2RlbDogbW9kZWwsXG4gICAgICBpbnB1dDogaW5wdXQsXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuX3JlcXVlc3QoJ3Bvc3QnLCAndjEvZW1iZWRkaW5ncycsIHJlcXVlc3QpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWlzdHJhbENsaWVudDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@mistralai/mistralai/src/client.js\n");

/***/ })

};
;