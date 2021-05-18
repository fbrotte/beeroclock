/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/alpinejs/dist/alpine.js":
/*!**********************************************!*\
  !*** ./node_modules/alpinejs/dist/alpine.js ***!
  \**********************************************/
/***/ (function(module) {

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  // Thanks @stimulus:
  // https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
  function domReady() {
    return new Promise(resolve => {
      if (document.readyState == "loading") {
        document.addEventListener("DOMContentLoaded", resolve);
      } else {
        resolve();
      }
    });
  }
  function arrayUnique(array) {
    return Array.from(new Set(array));
  }
  function isTesting() {
    return navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom");
  }
  function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
  }
  function warnIfMalformedTemplate(el, directive) {
    if (el.tagName.toLowerCase() !== 'template') {
      console.warn(`Alpine: [${directive}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${directive}`);
    } else if (el.content.childElementCount !== 1) {
      console.warn(`Alpine: <template> tag with [${directive}] encountered with an unexpected number of root elements. Make sure <template> has a single root element. `);
    }
  }
  function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[_\s]/, '-').toLowerCase();
  }
  function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
  }
  function walk(el, callback) {
    if (callback(el) === false) return;
    let node = el.firstElementChild;

    while (node) {
      walk(node, callback);
      node = node.nextElementSibling;
    }
  }
  function debounce(func, wait) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        func.apply(context, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const handleError = (el, expression, error) => {
    console.warn(`Alpine Error: "${error}"\n\nExpression: "${expression}"\nElement:`, el);

    if (!isTesting()) {
      Object.assign(error, {
        el,
        expression
      });
      throw error;
    }
  };

  function tryCatch(cb, {
    el,
    expression
  }) {
    try {
      const value = cb();
      return value instanceof Promise ? value.catch(e => handleError(el, expression, e)) : value;
    } catch (e) {
      handleError(el, expression, e);
    }
  }

  function saferEval(el, expression, dataContext, additionalHelperVariables = {}) {
    return tryCatch(() => {
      if (typeof expression === 'function') {
        return expression.call(dataContext);
      }

      return new Function(['$data', ...Object.keys(additionalHelperVariables)], `var __alpine_result; with($data) { __alpine_result = ${expression} }; return __alpine_result`)(dataContext, ...Object.values(additionalHelperVariables));
    }, {
      el,
      expression
    });
  }
  function saferEvalNoReturn(el, expression, dataContext, additionalHelperVariables = {}) {
    return tryCatch(() => {
      if (typeof expression === 'function') {
        return Promise.resolve(expression.call(dataContext, additionalHelperVariables['$event']));
      }

      let AsyncFunction = Function;
      /* MODERN-ONLY:START */

      AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
      /* MODERN-ONLY:END */
      // For the cases when users pass only a function reference to the caller: `x-on:click="foo"`
      // Where "foo" is a function. Also, we'll pass the function the event instance when we call it.

      if (Object.keys(dataContext).includes(expression)) {
        let methodReference = new Function(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { return ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables));

        if (typeof methodReference === 'function') {
          return Promise.resolve(methodReference.call(dataContext, additionalHelperVariables['$event']));
        } else {
          return Promise.resolve();
        }
      }

      return Promise.resolve(new AsyncFunction(['dataContext', ...Object.keys(additionalHelperVariables)], `with(dataContext) { ${expression} }`)(dataContext, ...Object.values(additionalHelperVariables)));
    }, {
      el,
      expression
    });
  }
  const xAttrRE = /^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;
  function isXAttr(attr) {
    const name = replaceAtAndColonWithStandardSyntax(attr.name);
    return xAttrRE.test(name);
  }
  function getXAttrs(el, component, type) {
    let directives = Array.from(el.attributes).filter(isXAttr).map(parseHtmlAttribute); // Get an object of directives from x-spread.

    let spreadDirective = directives.filter(directive => directive.type === 'spread')[0];

    if (spreadDirective) {
      let spreadObject = saferEval(el, spreadDirective.expression, component.$data); // Add x-spread directives to the pile of existing directives.

      directives = directives.concat(Object.entries(spreadObject).map(([name, value]) => parseHtmlAttribute({
        name,
        value
      })));
    }

    if (type) return directives.filter(i => i.type === type);
    return sortDirectives(directives);
  }

  function sortDirectives(directives) {
    let directiveOrder = ['bind', 'model', 'show', 'catch-all'];
    return directives.sort((a, b) => {
      let typeA = directiveOrder.indexOf(a.type) === -1 ? 'catch-all' : a.type;
      let typeB = directiveOrder.indexOf(b.type) === -1 ? 'catch-all' : b.type;
      return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
    });
  }

  function parseHtmlAttribute({
    name,
    value
  }) {
    const normalizedName = replaceAtAndColonWithStandardSyntax(name);
    const typeMatch = normalizedName.match(xAttrRE);
    const valueMatch = normalizedName.match(/:([a-zA-Z0-9\-:]+)/);
    const modifiers = normalizedName.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map(i => i.replace('.', '')),
      expression: value
    };
  }
  function isBooleanAttr(attrName) {
    // As per HTML spec table https://html.spec.whatwg.org/multipage/indices.html#attributes-3:boolean-attribute
    // Array roughly ordered by estimated usage
    const booleanAttributes = ['disabled', 'checked', 'required', 'readonly', 'hidden', 'open', 'selected', 'autofocus', 'itemscope', 'multiple', 'novalidate', 'allowfullscreen', 'allowpaymentrequest', 'formnovalidate', 'autoplay', 'controls', 'loop', 'muted', 'playsinline', 'default', 'ismap', 'reversed', 'async', 'defer', 'nomodule'];
    return booleanAttributes.includes(attrName);
  }
  function replaceAtAndColonWithStandardSyntax(name) {
    if (name.startsWith('@')) {
      return name.replace('@', 'x-on:');
    } else if (name.startsWith(':')) {
      return name.replace(':', 'x-bind:');
    }

    return name;
  }
  function convertClassStringToArray(classList, filterFn = Boolean) {
    return classList.split(' ').filter(filterFn);
  }
  const TRANSITION_TYPE_IN = 'in';
  const TRANSITION_TYPE_OUT = 'out';
  const TRANSITION_CANCELLED = 'cancelled';
  function transitionIn(el, show, reject, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return show();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_IN) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0]; // If this is triggered by a x-show.transition.

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers; // If x-show.transition.out, we'll skip the "in" transition.

      if (modifiers.includes('out') && !modifiers.includes('in')) return show();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out'); // If x-show.transition.in...out... only use "in" related modifiers for this transition.

      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index < modifiers.indexOf('out')) : modifiers;
      transitionHelperIn(el, modifiers, show, reject); // Otherwise, we can assume x-transition:enter.
    } else if (attrs.some(attr => ['enter', 'enter-start', 'enter-end'].includes(attr.value))) {
      transitionClassesIn(el, component, attrs, show, reject);
    } else {
      // If neither, just show that damn thing.
      show();
    }
  }
  function transitionOut(el, hide, reject, component, forceSkip = false) {
    // We don't want to transition on the initial page load.
    if (forceSkip) return hide();

    if (el.__x_transition && el.__x_transition.type === TRANSITION_TYPE_OUT) {
      // there is already a similar transition going on, this was probably triggered by
      // a change in a different property, let's just leave the previous one doing its job
      return;
    }

    const attrs = getXAttrs(el, component, 'transition');
    const showAttr = getXAttrs(el, component, 'show')[0];

    if (showAttr && showAttr.modifiers.includes('transition')) {
      let modifiers = showAttr.modifiers;
      if (modifiers.includes('in') && !modifiers.includes('out')) return hide();
      const settingBothSidesOfTransition = modifiers.includes('in') && modifiers.includes('out');
      modifiers = settingBothSidesOfTransition ? modifiers.filter((i, index) => index > modifiers.indexOf('out')) : modifiers;
      transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hide, reject);
    } else if (attrs.some(attr => ['leave', 'leave-start', 'leave-end'].includes(attr.value))) {
      transitionClassesOut(el, component, attrs, hide, reject);
    } else {
      hide();
    }
  }
  function transitionHelperIn(el, modifiers, showCallback, reject) {
    // Default values inspired by: https://material.io/design/motion/speed.html#duration
    const styleValues = {
      duration: modifierValue(modifiers, 'duration', 150),
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      },
      second: {
        opacity: 1,
        scale: 100
      }
    };
    transitionHelper(el, modifiers, showCallback, () => {}, reject, styleValues, TRANSITION_TYPE_IN);
  }
  function transitionHelperOut(el, modifiers, settingBothSidesOfTransition, hideCallback, reject) {
    // Make the "out" transition .5x slower than the "in". (Visually better)
    // HOWEVER, if they explicitly set a duration for the "out" transition,
    // use that.
    const duration = settingBothSidesOfTransition ? modifierValue(modifiers, 'duration', 150) : modifierValue(modifiers, 'duration', 150) / 2;
    const styleValues = {
      duration: duration,
      origin: modifierValue(modifiers, 'origin', 'center'),
      first: {
        opacity: 1,
        scale: 100
      },
      second: {
        opacity: 0,
        scale: modifierValue(modifiers, 'scale', 95)
      }
    };
    transitionHelper(el, modifiers, () => {}, hideCallback, reject, styleValues, TRANSITION_TYPE_OUT);
  }

  function modifierValue(modifiers, key, fallback) {
    // If the modifier isn't present, use the default.
    if (modifiers.indexOf(key) === -1) return fallback; // If it IS present, grab the value after it: x-show.transition.duration.500ms

    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;

    if (key === 'scale') {
      // Check if the very next value is NOT a number and return the fallback.
      // If x-show.transition.scale, we'll use the default scale value.
      // That is how a user opts out of the opacity transition.
      if (!isNumeric(rawValue)) return fallback;
    }

    if (key === 'duration') {
      // Support x-show.transition.duration.500ms && duration.500
      let match = rawValue.match(/([0-9]+)ms/);
      if (match) return match[1];
    }

    if (key === 'origin') {
      // Support chaining origin directions: x-show.transition.top.right
      if (['top', 'right', 'left', 'center', 'bottom'].includes(modifiers[modifiers.indexOf(key) + 2])) {
        return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(' ');
      }
    }

    return rawValue;
  }

  function transitionHelper(el, modifiers, hook1, hook2, reject, styleValues, type) {
    // clear the previous transition if exists to avoid caching the wrong styles
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    } // If the user set these style values, we'll put them back when we're done with them.


    const opacityCache = el.style.opacity;
    const transformCache = el.style.transform;
    const transformOriginCache = el.style.transformOrigin; // If no modifiers are present: x-show.transition, we'll default to both opacity and scale.

    const noModifiers = !modifiers.includes('opacity') && !modifiers.includes('scale');
    const transitionOpacity = noModifiers || modifiers.includes('opacity');
    const transitionScale = noModifiers || modifiers.includes('scale'); // These are the explicit stages of a transition (same stages for in and for out).
    // This way you can get a birds eye view of the hooks, and the differences
    // between them.

    const stages = {
      start() {
        if (transitionOpacity) el.style.opacity = styleValues.first.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.first.scale / 100})`;
      },

      during() {
        if (transitionScale) el.style.transformOrigin = styleValues.origin;
        el.style.transitionProperty = [transitionOpacity ? `opacity` : ``, transitionScale ? `transform` : ``].join(' ').trim();
        el.style.transitionDuration = `${styleValues.duration / 1000}s`;
        el.style.transitionTimingFunction = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
      },

      show() {
        hook1();
      },

      end() {
        if (transitionOpacity) el.style.opacity = styleValues.second.opacity;
        if (transitionScale) el.style.transform = `scale(${styleValues.second.scale / 100})`;
      },

      hide() {
        hook2();
      },

      cleanup() {
        if (transitionOpacity) el.style.opacity = opacityCache;
        if (transitionScale) el.style.transform = transformCache;
        if (transitionScale) el.style.transformOrigin = transformOriginCache;
        el.style.transitionProperty = null;
        el.style.transitionDuration = null;
        el.style.transitionTimingFunction = null;
      }

    };
    transition(el, stages, type, reject);
  }

  const ensureStringExpression = (expression, el, component) => {
    return typeof expression === 'function' ? component.evaluateReturnExpression(el, expression) : expression;
  };

  function transitionClassesIn(el, component, directives, showCallback, reject) {
    const enter = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter') || {
      expression: ''
    }).expression, el, component));
    const enterStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-start') || {
      expression: ''
    }).expression, el, component));
    const enterEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'enter-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, enter, enterStart, enterEnd, showCallback, () => {}, TRANSITION_TYPE_IN, reject);
  }
  function transitionClassesOut(el, component, directives, hideCallback, reject) {
    const leave = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave') || {
      expression: ''
    }).expression, el, component));
    const leaveStart = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-start') || {
      expression: ''
    }).expression, el, component));
    const leaveEnd = convertClassStringToArray(ensureStringExpression((directives.find(i => i.value === 'leave-end') || {
      expression: ''
    }).expression, el, component));
    transitionClasses(el, leave, leaveStart, leaveEnd, () => {}, hideCallback, TRANSITION_TYPE_OUT, reject);
  }
  function transitionClasses(el, classesDuring, classesStart, classesEnd, hook1, hook2, type, reject) {
    // clear the previous transition if exists to avoid caching the wrong classes
    if (el.__x_transition) {
      el.__x_transition.cancel && el.__x_transition.cancel();
    }

    const originalClasses = el.__x_original_classes || [];
    const stages = {
      start() {
        el.classList.add(...classesStart);
      },

      during() {
        el.classList.add(...classesDuring);
      },

      show() {
        hook1();
      },

      end() {
        // Don't remove classes that were in the original class attribute.
        el.classList.remove(...classesStart.filter(i => !originalClasses.includes(i)));
        el.classList.add(...classesEnd);
      },

      hide() {
        hook2();
      },

      cleanup() {
        el.classList.remove(...classesDuring.filter(i => !originalClasses.includes(i)));
        el.classList.remove(...classesEnd.filter(i => !originalClasses.includes(i)));
      }

    };
    transition(el, stages, type, reject);
  }
  function transition(el, stages, type, reject) {
    const finish = once(() => {
      stages.hide(); // Adding an "isConnected" check, in case the callback
      // removed the element from the DOM.

      if (el.isConnected) {
        stages.cleanup();
      }

      delete el.__x_transition;
    });
    el.__x_transition = {
      // Set transition type so we can avoid clearing transition if the direction is the same
      type: type,
      // create a callback for the last stages of the transition so we can call it
      // from different point and early terminate it. Once will ensure that function
      // is only called one time.
      cancel: once(() => {
        reject(TRANSITION_CANCELLED);
        finish();
      }),
      finish,
      // This store the next animation frame so we can cancel it
      nextFrame: null
    };
    stages.start();
    stages.during();
    el.__x_transition.nextFrame = requestAnimationFrame(() => {
      // Note: Safari's transitionDuration property will list out comma separated transition durations
      // for every single transition property. Let's grab the first one and call it a day.
      let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, '').replace('s', '')) * 1000;

      if (duration === 0) {
        duration = Number(getComputedStyle(el).animationDuration.replace('s', '')) * 1000;
      }

      stages.show();
      el.__x_transition.nextFrame = requestAnimationFrame(() => {
        stages.end();
        setTimeout(el.__x_transition.finish, duration);
      });
    });
  }
  function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
  } // Thanks @vuejs
  // https://github.com/vuejs/vue/blob/4de4649d9637262a9b007720b59f80ac72a5620c/src/shared/util.js

  function once(callback) {
    let called = false;
    return function () {
      if (!called) {
        called = true;
        callback.apply(this, arguments);
      }
    };
  }

  function handleForDirective(component, templateEl, expression, initialUpdate, extraVars) {
    warnIfMalformedTemplate(templateEl, 'x-for');
    let iteratorNames = typeof expression === 'function' ? parseForExpression(component.evaluateReturnExpression(templateEl, expression)) : parseForExpression(expression);
    let items = evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, templateEl, iteratorNames, extraVars); // As we walk the array, we'll also walk the DOM (updating/creating as we go).

    let currentEl = templateEl;
    items.forEach((item, index) => {
      let iterationScopeVariables = getIterationScopeVariables(iteratorNames, item, index, items, extraVars());
      let currentKey = generateKeyForIteration(component, templateEl, index, iterationScopeVariables);
      let nextEl = lookAheadForMatchingKeyedElementAndMoveItIfFound(currentEl.nextElementSibling, currentKey); // If we haven't found a matching key, insert the element at the current position.

      if (!nextEl) {
        nextEl = addElementInLoopAfterCurrentEl(templateEl, currentEl); // And transition it in if it's not the first page load.

        transitionIn(nextEl, () => {}, () => {}, component, initialUpdate);
        nextEl.__x_for = iterationScopeVariables;
        component.initializeElements(nextEl, () => nextEl.__x_for); // Otherwise update the element we found.
      } else {
        // Temporarily remove the key indicator to allow the normal "updateElements" to work.
        delete nextEl.__x_for_key;
        nextEl.__x_for = iterationScopeVariables;
        component.updateElements(nextEl, () => nextEl.__x_for);
      }

      currentEl = nextEl;
      currentEl.__x_for_key = currentKey;
    });
    removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component);
  } // This was taken from VueJS 2.* core. Thanks Vue!

  function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\(|\)$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = String(expression).match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].trim().replace(stripParensRE, '');
    let iteratorMatch = item.match(forIteratorRE);

    if (iteratorMatch) {
      res.item = item.replace(forIteratorRE, '').trim();
      res.index = iteratorMatch[1].trim();

      if (iteratorMatch[2]) {
        res.collection = iteratorMatch[2].trim();
      }
    } else {
      res.item = item;
    }

    return res;
  }

  function getIterationScopeVariables(iteratorNames, item, index, items, extraVars) {
    // We must create a new object, so each iteration has a new scope
    let scopeVariables = extraVars ? _objectSpread2({}, extraVars) : {};
    scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
  }

  function generateKeyForIteration(component, el, index, iterationScopeVariables) {
    let bindKeyAttribute = getXAttrs(el, component, 'bind').filter(attr => attr.value === 'key')[0]; // If the dev hasn't specified a key, just return the index of the iteration.

    if (!bindKeyAttribute) return index;
    return component.evaluateReturnExpression(el, bindKeyAttribute.expression, () => iterationScopeVariables);
  }

  function evaluateItemsAndReturnEmptyIfXIfIsPresentAndFalseOnElement(component, el, iteratorNames, extraVars) {
    let ifAttribute = getXAttrs(el, component, 'if')[0];

    if (ifAttribute && !component.evaluateReturnExpression(el, ifAttribute.expression)) {
      return [];
    }

    let items = component.evaluateReturnExpression(el, iteratorNames.items, extraVars); // This adds support for the `i in n` syntax.

    if (isNumeric(items) && items >= 0) {
      items = Array.from(Array(items).keys(), i => i + 1);
    }

    return items;
  }

  function addElementInLoopAfterCurrentEl(templateEl, currentEl) {
    let clone = document.importNode(templateEl.content, true);
    currentEl.parentElement.insertBefore(clone, currentEl.nextElementSibling);
    return currentEl.nextElementSibling;
  }

  function lookAheadForMatchingKeyedElementAndMoveItIfFound(nextEl, currentKey) {
    if (!nextEl) return; // If we are already past the x-for generated elements, we don't need to look ahead.

    if (nextEl.__x_for_key === undefined) return; // If the the key's DO match, no need to look ahead.

    if (nextEl.__x_for_key === currentKey) return nextEl; // If they don't, we'll look ahead for a match.
    // If we find it, we'll move it to the current position in the loop.

    let tmpNextEl = nextEl;

    while (tmpNextEl) {
      if (tmpNextEl.__x_for_key === currentKey) {
        return tmpNextEl.parentElement.insertBefore(tmpNextEl, nextEl);
      }

      tmpNextEl = tmpNextEl.nextElementSibling && tmpNextEl.nextElementSibling.__x_for_key !== undefined ? tmpNextEl.nextElementSibling : false;
    }
  }

  function removeAnyLeftOverElementsFromPreviousUpdate(currentEl, component) {
    var nextElementFromOldLoop = currentEl.nextElementSibling && currentEl.nextElementSibling.__x_for_key !== undefined ? currentEl.nextElementSibling : false;

    while (nextElementFromOldLoop) {
      let nextElementFromOldLoopImmutable = nextElementFromOldLoop;
      let nextSibling = nextElementFromOldLoop.nextElementSibling;
      transitionOut(nextElementFromOldLoop, () => {
        nextElementFromOldLoopImmutable.remove();
      }, () => {}, component);
      nextElementFromOldLoop = nextSibling && nextSibling.__x_for_key !== undefined ? nextSibling : false;
    }
  }

  function handleAttributeBindingDirective(component, el, attrName, expression, extraVars, attrType, modifiers) {
    var value = component.evaluateReturnExpression(el, expression, extraVars);

    if (attrName === 'value') {
      if (Alpine.ignoreFocusedForValueBinding && document.activeElement.isSameNode(el)) return; // If nested model key is undefined, set the default value to empty string.

      if (value === undefined && String(expression).match(/\./)) {
        value = '';
      }

      if (el.type === 'radio') {
        // Set radio value from x-bind:value, if no "value" attribute exists.
        // If there are any initial state values, radio will have a correct
        // "checked" value since x-bind:value is processed before x-model.
        if (el.attributes.value === undefined && attrType === 'bind') {
          el.value = value;
        } else if (attrType !== 'bind') {
          el.checked = checkedAttrLooseCompare(el.value, value);
        }
      } else if (el.type === 'checkbox') {
        // If we are explicitly binding a string to the :value, set the string,
        // If the value is a boolean, leave it alone, it will be set to "on"
        // automatically.
        if (typeof value !== 'boolean' && ![null, undefined].includes(value) && attrType === 'bind') {
          el.value = String(value);
        } else if (attrType !== 'bind') {
          if (Array.isArray(value)) {
            // I'm purposely not using Array.includes here because it's
            // strict, and because of Numeric/String mis-casting, I
            // want the "includes" to be "fuzzy".
            el.checked = value.some(val => checkedAttrLooseCompare(val, el.value));
          } else {
            el.checked = !!value;
          }
        }
      } else if (el.tagName === 'SELECT') {
        updateSelect(el, value);
      } else {
        if (el.value === value) return;
        el.value = value;
      }
    } else if (attrName === 'class') {
      if (Array.isArray(value)) {
        const originalClasses = el.__x_original_classes || [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(value)).join(' '));
      } else if (typeof value === 'object') {
        // Sorting the keys / class names by their boolean value will ensure that
        // anything that evaluates to `false` and needs to remove classes is run first.
        const keysSortedByBooleanValue = Object.keys(value).sort((a, b) => value[a] - value[b]);
        keysSortedByBooleanValue.forEach(classNames => {
          if (value[classNames]) {
            convertClassStringToArray(classNames).forEach(className => el.classList.add(className));
          } else {
            convertClassStringToArray(classNames).forEach(className => el.classList.remove(className));
          }
        });
      } else {
        const originalClasses = el.__x_original_classes || [];
        const newClasses = value ? convertClassStringToArray(value) : [];
        el.setAttribute('class', arrayUnique(originalClasses.concat(newClasses)).join(' '));
      }
    } else {
      attrName = modifiers.includes('camel') ? camelCase(attrName) : attrName; // If an attribute's bound value is null, undefined or false, remove the attribute

      if ([null, undefined, false].includes(value)) {
        el.removeAttribute(attrName);
      } else {
        isBooleanAttr(attrName) ? setIfChanged(el, attrName, attrName) : setIfChanged(el, attrName, value);
      }
    }
  }

  function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) {
      el.setAttribute(attrName, value);
    }
  }

  function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map(value => {
      return value + '';
    });
    Array.from(el.options).forEach(option => {
      option.selected = arrayWrappedValue.includes(option.value || option.text);
    });
  }

  function handleTextDirective(el, output, expression) {
    // If nested model key is undefined, set the default value to empty string.
    if (output === undefined && String(expression).match(/\./)) {
      output = '';
    }

    el.textContent = output;
  }

  function handleHtmlDirective(component, el, expression, extraVars) {
    el.innerHTML = component.evaluateReturnExpression(el, expression, extraVars);
  }

  function handleShowDirective(component, el, value, modifiers, initialUpdate = false) {
    const hide = () => {
      el.style.display = 'none';
      el.__x_is_shown = false;
    };

    const show = () => {
      if (el.style.length === 1 && el.style.display === 'none') {
        el.removeAttribute('style');
      } else {
        el.style.removeProperty('display');
      }

      el.__x_is_shown = true;
    };

    if (initialUpdate === true) {
      if (value) {
        show();
      } else {
        hide();
      }

      return;
    }

    const handle = (resolve, reject) => {
      if (value) {
        if (el.style.display === 'none' || el.__x_transition) {
          transitionIn(el, () => {
            show();
          }, reject, component);
        }

        resolve(() => {});
      } else {
        if (el.style.display !== 'none') {
          transitionOut(el, () => {
            resolve(() => {
              hide();
            });
          }, reject, component);
        } else {
          resolve(() => {});
        }
      }
    }; // The working of x-show is a bit complex because we need to
    // wait for any child transitions to finish before hiding
    // some element. Also, this has to be done recursively.
    // If x-show.immediate, foregoe the waiting.


    if (modifiers.includes('immediate')) {
      handle(finish => finish(), () => {});
      return;
    } // x-show is encountered during a DOM tree walk. If an element
    // we encounter is NOT a child of another x-show element we
    // can execute the previous x-show stack (if one exists).


    if (component.showDirectiveLastElement && !component.showDirectiveLastElement.contains(el)) {
      component.executeAndClearRemainingShowDirectiveStack();
    }

    component.showDirectiveStack.push(handle);
    component.showDirectiveLastElement = el;
  }

  function handleIfDirective(component, el, expressionResult, initialUpdate, extraVars) {
    warnIfMalformedTemplate(el, 'x-if');
    const elementHasAlreadyBeenAdded = el.nextElementSibling && el.nextElementSibling.__x_inserted_me === true;

    if (expressionResult && (!elementHasAlreadyBeenAdded || el.__x_transition)) {
      const clone = document.importNode(el.content, true);
      el.parentElement.insertBefore(clone, el.nextElementSibling);
      transitionIn(el.nextElementSibling, () => {}, () => {}, component, initialUpdate);
      component.initializeElements(el.nextElementSibling, extraVars);
      el.nextElementSibling.__x_inserted_me = true;
    } else if (!expressionResult && elementHasAlreadyBeenAdded) {
      transitionOut(el.nextElementSibling, () => {
        el.nextElementSibling.remove();
      }, () => {}, component, initialUpdate);
    }
  }

  function registerListener(component, el, event, modifiers, expression, extraVars = {}) {
    const options = {
      passive: modifiers.includes('passive')
    };

    if (modifiers.includes('camel')) {
      event = camelCase(event);
    }

    let handler, listenerTarget;

    if (modifiers.includes('away')) {
      listenerTarget = document;

      handler = e => {
        // Don't do anything if the click came from the element or within it.
        if (el.contains(e.target)) return; // Don't do anything if this element isn't currently visible.

        if (el.offsetWidth < 1 && el.offsetHeight < 1) return; // Now that we are sure the element is visible, AND the click
        // is from outside it, let's run the expression.

        runListenerHandler(component, expression, e, extraVars);

        if (modifiers.includes('once')) {
          document.removeEventListener(event, handler, options);
        }
      };
    } else {
      listenerTarget = modifiers.includes('window') ? window : modifiers.includes('document') ? document : el;

      handler = e => {
        // Remove this global event handler if the element that declared it
        // has been removed. It's now stale.
        if (listenerTarget === window || listenerTarget === document) {
          if (!document.body.contains(el)) {
            listenerTarget.removeEventListener(event, handler, options);
            return;
          }
        }

        if (isKeyEvent(event)) {
          if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
            return;
          }
        }

        if (modifiers.includes('prevent')) e.preventDefault();
        if (modifiers.includes('stop')) e.stopPropagation(); // If the .self modifier isn't present, or if it is present and
        // the target element matches the element we are registering the
        // event on, run the handler

        if (!modifiers.includes('self') || e.target === el) {
          const returnValue = runListenerHandler(component, expression, e, extraVars);
          returnValue.then(value => {
            if (value === false) {
              e.preventDefault();
            } else {
              if (modifiers.includes('once')) {
                listenerTarget.removeEventListener(event, handler, options);
              }
            }
          });
        }
      };
    }

    if (modifiers.includes('debounce')) {
      let nextModifier = modifiers[modifiers.indexOf('debounce') + 1] || 'invalid-wait';
      let wait = isNumeric(nextModifier.split('ms')[0]) ? Number(nextModifier.split('ms')[0]) : 250;
      handler = debounce(handler, wait);
    }

    listenerTarget.addEventListener(event, handler, options);
  }

  function runListenerHandler(component, expression, e, extraVars) {
    return component.evaluateCommandExpression(e.target, expression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        '$event': e
      });
    });
  }

  function isKeyEvent(event) {
    return ['keydown', 'keyup'].includes(event);
  }

  function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter(i => {
      return !['window', 'document', 'prevent', 'stop'].includes(i);
    });

    if (keyModifiers.includes('debounce')) {
      let debounceIndex = keyModifiers.indexOf('debounce');
      keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || 'invalid-wait').split('ms')[0]) ? 2 : 1);
    } // If no modifier is specified, we'll call it a press.


    if (keyModifiers.length === 0) return false; // If one is passed, AND it matches the key pressed, we'll call it a press.

    if (keyModifiers.length === 1 && keyModifiers[0] === keyToModifier(e.key)) return false; // The user is listening for key combinations.

    const systemKeyModifiers = ['ctrl', 'shift', 'alt', 'meta', 'cmd', 'super'];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter(modifier => keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter(i => !selectedSystemKeyModifiers.includes(i));

    if (selectedSystemKeyModifiers.length > 0) {
      const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter(modifier => {
        // Alias "cmd" and "super" to "meta"
        if (modifier === 'cmd' || modifier === 'super') modifier = 'meta';
        return e[`${modifier}Key`];
      }); // If all the modifiers selected are pressed, ...

      if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
        // AND the remaining key is pressed as well. It's a press.
        if (keyModifiers[0] === keyToModifier(e.key)) return false;
      }
    } // We'll call it NOT a valid keypress.


    return true;
  }

  function keyToModifier(key) {
    switch (key) {
      case '/':
        return 'slash';

      case ' ':
      case 'Spacebar':
        return 'space';

      default:
        return key && kebabCase(key);
    }
  }

  function registerModelListener(component, el, modifiers, expression, extraVars) {
    // If the element we are binding to is a select, a radio, or checkbox
    // we'll listen for the change event instead of the "input" event.
    var event = el.tagName.toLowerCase() === 'select' || ['checkbox', 'radio'].includes(el.type) || modifiers.includes('lazy') ? 'change' : 'input';
    const listenerExpression = `${expression} = rightSideOfExpression($event, ${expression})`;
    registerListener(component, el, event, modifiers, listenerExpression, () => {
      return _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        rightSideOfExpression: generateModelAssignmentFunction(el, modifiers, expression)
      });
    });
  }

  function generateModelAssignmentFunction(el, modifiers, expression) {
    if (el.type === 'radio') {
      // Radio buttons only work properly when they share a name attribute.
      // People might assume we take care of that for them, because
      // they already set a shared "x-model" attribute.
      if (!el.hasAttribute('name')) el.setAttribute('name', expression);
    }

    return (event, currentValue) => {
      // Check for event.detail due to an issue where IE11 handles other events as a CustomEvent.
      if (event instanceof CustomEvent && event.detail) {
        return event.detail;
      } else if (el.type === 'checkbox') {
        // If the data we are binding to is an array, toggle its value inside the array.
        if (Array.isArray(currentValue)) {
          const newValue = modifiers.includes('number') ? safeParseNumber(event.target.value) : event.target.value;
          return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter(el => !checkedAttrLooseCompare(el, newValue));
        } else {
          return event.target.checked;
        }
      } else if (el.tagName.toLowerCase() === 'select' && el.multiple) {
        return modifiers.includes('number') ? Array.from(event.target.selectedOptions).map(option => {
          const rawValue = option.value || option.text;
          return safeParseNumber(rawValue);
        }) : Array.from(event.target.selectedOptions).map(option => {
          return option.value || option.text;
        });
      } else {
        const rawValue = event.target.value;
        return modifiers.includes('number') ? safeParseNumber(rawValue) : modifiers.includes('trim') ? rawValue.trim() : rawValue;
      }
    };
  }

  function safeParseNumber(rawValue) {
    const number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric(number) ? number : rawValue;
  }

  /**
   * Copyright (C) 2017 salesforce.com, inc.
   */
  const { isArray } = Array;
  const { getPrototypeOf, create: ObjectCreate, defineProperty: ObjectDefineProperty, defineProperties: ObjectDefineProperties, isExtensible, getOwnPropertyDescriptor, getOwnPropertyNames, getOwnPropertySymbols, preventExtensions, hasOwnProperty, } = Object;
  const { push: ArrayPush, concat: ArrayConcat, map: ArrayMap, } = Array.prototype;
  function isUndefined(obj) {
      return obj === undefined;
  }
  function isFunction(obj) {
      return typeof obj === 'function';
  }
  function isObject(obj) {
      return typeof obj === 'object';
  }
  const proxyToValueMap = new WeakMap();
  function registerProxy(proxy, value) {
      proxyToValueMap.set(proxy, value);
  }
  const unwrap = (replicaOrAny) => proxyToValueMap.get(replicaOrAny) || replicaOrAny;

  function wrapValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getProxy(value) : value;
  }
  /**
   * Unwrap property descriptors will set value on original descriptor
   * We only need to unwrap if value is specified
   * @param descriptor external descrpitor provided to define new property on original value
   */
  function unwrapDescriptor(descriptor) {
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = unwrap(descriptor.value);
      }
      return descriptor;
  }
  function lockShadowTarget(membrane, shadowTarget, originalTarget) {
      const targetKeys = ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      targetKeys.forEach((key) => {
          let descriptor = getOwnPropertyDescriptor(originalTarget, key);
          // We do not need to wrap the descriptor if configurable
          // Because we can deal with wrapping it when user goes through
          // Get own property descriptor. There is also a chance that this descriptor
          // could change sometime in the future, so we can defer wrapping
          // until we need to
          if (!descriptor.configurable) {
              descriptor = wrapDescriptor(membrane, descriptor, wrapValue);
          }
          ObjectDefineProperty(shadowTarget, key, descriptor);
      });
      preventExtensions(shadowTarget);
  }
  class ReactiveProxyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getProxy(value);
      }
      set(shadowTarget, key, value) {
          const { originalTarget, membrane: { valueMutated } } = this;
          const oldValue = originalTarget[key];
          if (oldValue !== value) {
              originalTarget[key] = value;
              valueMutated(originalTarget, key);
          }
          else if (key === 'length' && isArray(originalTarget)) {
              // fix for issue #236: push will add the new index, and by the time length
              // is updated, the internal length is already equal to the new length value
              // therefore, the oldValue is equal to the value. This is the forking logic
              // to support this use case.
              valueMutated(originalTarget, key);
          }
          return true;
      }
      deleteProperty(shadowTarget, key) {
          const { originalTarget, membrane: { valueMutated } } = this;
          delete originalTarget[key];
          valueMutated(originalTarget, key);
          return true;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      isExtensible(shadowTarget) {
          const shadowIsExtensible = isExtensible(shadowTarget);
          if (!shadowIsExtensible) {
              return shadowIsExtensible;
          }
          const { originalTarget, membrane } = this;
          const targetIsExtensible = isExtensible(originalTarget);
          if (!targetIsExtensible) {
              lockShadowTarget(membrane, shadowTarget, originalTarget);
          }
          return targetIsExtensible;
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getPrototypeOf(shadowTarget) {
          const { originalTarget } = this;
          return getPrototypeOf(originalTarget);
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = this.membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value, setter or getter (if available) cannot observe
          // mutations, just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapValue);
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          const { originalTarget, membrane } = this;
          lockShadowTarget(membrane, shadowTarget, originalTarget);
          preventExtensions(originalTarget);
          return true;
      }
      defineProperty(shadowTarget, key, descriptor) {
          const { originalTarget, membrane } = this;
          const { valueMutated } = membrane;
          const { configurable } = descriptor;
          // We have to check for value in descriptor
          // because Object.freeze(proxy) calls this method
          // with only { configurable: false, writeable: false }
          // Additionally, method will only be called with writeable:false
          // if the descriptor has a value, as opposed to getter/setter
          // So we can just check if writable is present and then see if
          // value is present. This eliminates getter and setter descriptors
          if (hasOwnProperty.call(descriptor, 'writable') && !hasOwnProperty.call(descriptor, 'value')) {
              const originalDescriptor = getOwnPropertyDescriptor(originalTarget, key);
              descriptor.value = originalDescriptor.value;
          }
          ObjectDefineProperty(originalTarget, key, unwrapDescriptor(descriptor));
          if (configurable === false) {
              ObjectDefineProperty(shadowTarget, key, wrapDescriptor(membrane, descriptor, wrapValue));
          }
          valueMutated(originalTarget, key);
          return true;
      }
  }

  function wrapReadOnlyValue(membrane, value) {
      return membrane.valueIsObservable(value) ? membrane.getReadOnlyProxy(value) : value;
  }
  class ReadOnlyHandler {
      constructor(membrane, value) {
          this.originalTarget = value;
          this.membrane = membrane;
      }
      get(shadowTarget, key) {
          const { membrane, originalTarget } = this;
          const value = originalTarget[key];
          const { valueObserved } = membrane;
          valueObserved(originalTarget, key);
          return membrane.getReadOnlyProxy(value);
      }
      set(shadowTarget, key, value) {
          return false;
      }
      deleteProperty(shadowTarget, key) {
          return false;
      }
      apply(shadowTarget, thisArg, argArray) {
          /* No op */
      }
      construct(target, argArray, newTarget) {
          /* No op */
      }
      has(shadowTarget, key) {
          const { originalTarget, membrane: { valueObserved } } = this;
          valueObserved(originalTarget, key);
          return key in originalTarget;
      }
      ownKeys(shadowTarget) {
          const { originalTarget } = this;
          return ArrayConcat.call(getOwnPropertyNames(originalTarget), getOwnPropertySymbols(originalTarget));
      }
      setPrototypeOf(shadowTarget, prototype) {
      }
      getOwnPropertyDescriptor(shadowTarget, key) {
          const { originalTarget, membrane } = this;
          const { valueObserved } = membrane;
          // keys looked up via hasOwnProperty need to be reactive
          valueObserved(originalTarget, key);
          let desc = getOwnPropertyDescriptor(originalTarget, key);
          if (isUndefined(desc)) {
              return desc;
          }
          const shadowDescriptor = getOwnPropertyDescriptor(shadowTarget, key);
          if (!isUndefined(shadowDescriptor)) {
              return shadowDescriptor;
          }
          // Note: by accessing the descriptor, the key is marked as observed
          // but access to the value or getter (if available) cannot be observed,
          // just like regular methods, in which case we just do nothing.
          desc = wrapDescriptor(membrane, desc, wrapReadOnlyValue);
          if (hasOwnProperty.call(desc, 'set')) {
              desc.set = undefined; // readOnly membrane does not allow setters
          }
          if (!desc.configurable) {
              // If descriptor from original target is not configurable,
              // We must copy the wrapped descriptor over to the shadow target.
              // Otherwise, proxy will throw an invariant error.
              // This is our last chance to lock the value.
              // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/getOwnPropertyDescriptor#Invariants
              ObjectDefineProperty(shadowTarget, key, desc);
          }
          return desc;
      }
      preventExtensions(shadowTarget) {
          return false;
      }
      defineProperty(shadowTarget, key, descriptor) {
          return false;
      }
  }
  function createShadowTarget(value) {
      let shadowTarget = undefined;
      if (isArray(value)) {
          shadowTarget = [];
      }
      else if (isObject(value)) {
          shadowTarget = {};
      }
      return shadowTarget;
  }
  const ObjectDotPrototype = Object.prototype;
  function defaultValueIsObservable(value) {
      // intentionally checking for null
      if (value === null) {
          return false;
      }
      // treat all non-object types, including undefined, as non-observable values
      if (typeof value !== 'object') {
          return false;
      }
      if (isArray(value)) {
          return true;
      }
      const proto = getPrototypeOf(value);
      return (proto === ObjectDotPrototype || proto === null || getPrototypeOf(proto) === null);
  }
  const defaultValueObserved = (obj, key) => {
      /* do nothing */
  };
  const defaultValueMutated = (obj, key) => {
      /* do nothing */
  };
  const defaultValueDistortion = (value) => value;
  function wrapDescriptor(membrane, descriptor, getValue) {
      const { set, get } = descriptor;
      if (hasOwnProperty.call(descriptor, 'value')) {
          descriptor.value = getValue(membrane, descriptor.value);
      }
      else {
          if (!isUndefined(get)) {
              descriptor.get = function () {
                  // invoking the original getter with the original target
                  return getValue(membrane, get.call(unwrap(this)));
              };
          }
          if (!isUndefined(set)) {
              descriptor.set = function (value) {
                  // At this point we don't have a clear indication of whether
                  // or not a valid mutation will occur, we don't have the key,
                  // and we are not sure why and how they are invoking this setter.
                  // Nevertheless we preserve the original semantics by invoking the
                  // original setter with the original target and the unwrapped value
                  set.call(unwrap(this), membrane.unwrapProxy(value));
              };
          }
      }
      return descriptor;
  }
  class ReactiveMembrane {
      constructor(options) {
          this.valueDistortion = defaultValueDistortion;
          this.valueMutated = defaultValueMutated;
          this.valueObserved = defaultValueObserved;
          this.valueIsObservable = defaultValueIsObservable;
          this.objectGraph = new WeakMap();
          if (!isUndefined(options)) {
              const { valueDistortion, valueMutated, valueObserved, valueIsObservable } = options;
              this.valueDistortion = isFunction(valueDistortion) ? valueDistortion : defaultValueDistortion;
              this.valueMutated = isFunction(valueMutated) ? valueMutated : defaultValueMutated;
              this.valueObserved = isFunction(valueObserved) ? valueObserved : defaultValueObserved;
              this.valueIsObservable = isFunction(valueIsObservable) ? valueIsObservable : defaultValueIsObservable;
          }
      }
      getProxy(value) {
          const unwrappedValue = unwrap(value);
          const distorted = this.valueDistortion(unwrappedValue);
          if (this.valueIsObservable(distorted)) {
              const o = this.getReactiveState(unwrappedValue, distorted);
              // when trying to extract the writable version of a readonly
              // we return the readonly.
              return o.readOnly === value ? value : o.reactive;
          }
          return distorted;
      }
      getReadOnlyProxy(value) {
          value = unwrap(value);
          const distorted = this.valueDistortion(value);
          if (this.valueIsObservable(distorted)) {
              return this.getReactiveState(value, distorted).readOnly;
          }
          return distorted;
      }
      unwrapProxy(p) {
          return unwrap(p);
      }
      getReactiveState(value, distortedValue) {
          const { objectGraph, } = this;
          let reactiveState = objectGraph.get(distortedValue);
          if (reactiveState) {
              return reactiveState;
          }
          const membrane = this;
          reactiveState = {
              get reactive() {
                  const reactiveHandler = new ReactiveProxyHandler(membrane, distortedValue);
                  // caching the reactive proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), reactiveHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'reactive', { value: proxy });
                  return proxy;
              },
              get readOnly() {
                  const readOnlyHandler = new ReadOnlyHandler(membrane, distortedValue);
                  // caching the readOnly proxy after the first time it is accessed
                  const proxy = new Proxy(createShadowTarget(distortedValue), readOnlyHandler);
                  registerProxy(proxy, value);
                  ObjectDefineProperty(this, 'readOnly', { value: proxy });
                  return proxy;
              }
          };
          objectGraph.set(distortedValue, reactiveState);
          return reactiveState;
      }
  }
  /** version: 0.26.0 */

  function wrap(data, mutationCallback) {

    let membrane = new ReactiveMembrane({
      valueMutated(target, key) {
        mutationCallback(target, key);
      }

    });
    return {
      data: membrane.getProxy(data),
      membrane: membrane
    };
  }
  function unwrap$1(membrane, observable) {
    let unwrappedData = membrane.unwrapProxy(observable);
    let copy = {};
    Object.keys(unwrappedData).forEach(key => {
      if (['$el', '$refs', '$nextTick', '$watch'].includes(key)) return;
      copy[key] = unwrappedData[key];
    });
    return copy;
  }

  class Component {
    constructor(el, componentForClone = null) {
      this.$el = el;
      const dataAttr = this.$el.getAttribute('x-data');
      const dataExpression = dataAttr === '' ? '{}' : dataAttr;
      const initExpression = this.$el.getAttribute('x-init');
      let dataExtras = {
        $el: this.$el
      };
      let canonicalComponentElementReference = componentForClone ? componentForClone.$el : this.$el;
      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(dataExtras, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference);
          }
        });
      });
      this.unobservedData = componentForClone ? componentForClone.getUnobservedData() : saferEval(el, dataExpression, dataExtras);
      // Construct a Proxy-based observable. This will be used to handle reactivity.

      let {
        membrane,
        data
      } = this.wrapDataInObservable(this.unobservedData);
      this.$data = data;
      this.membrane = membrane; // After making user-supplied data methods reactive, we can now add
      // our magic properties to the original data for access.

      this.unobservedData.$el = this.$el;
      this.unobservedData.$refs = this.getRefsProxy();
      this.nextTickStack = [];

      this.unobservedData.$nextTick = callback => {
        this.nextTickStack.push(callback);
      };

      this.watchers = {};

      this.unobservedData.$watch = (property, callback) => {
        if (!this.watchers[property]) this.watchers[property] = [];
        this.watchers[property].push(callback);
      };
      /* MODERN-ONLY:START */
      // We remove this piece of code from the legacy build.
      // In IE11, we have already defined our helpers at this point.
      // Register custom magic properties.


      Object.entries(Alpine.magicProperties).forEach(([name, callback]) => {
        Object.defineProperty(this.unobservedData, `$${name}`, {
          get: function get() {
            return callback(canonicalComponentElementReference, this.$el);
          }
        });
      });
      /* MODERN-ONLY:END */

      this.showDirectiveStack = [];
      this.showDirectiveLastElement;
      componentForClone || Alpine.onBeforeComponentInitializeds.forEach(callback => callback(this));
      var initReturnedCallback; // If x-init is present AND we aren't cloning (skip x-init on clone)

      if (initExpression && !componentForClone) {
        // We want to allow data manipulation, but not trigger DOM updates just yet.
        // We haven't even initialized the elements with their Alpine bindings. I mean c'mon.
        this.pauseReactivity = true;
        initReturnedCallback = this.evaluateReturnExpression(this.$el, initExpression);
        this.pauseReactivity = false;
      } // Register all our listeners and set all our attribute bindings.
      // If we're cloning a component, the third parameter ensures no duplicate
      // event listeners are registered (the mutation observer will take care of them)


      this.initializeElements(this.$el, () => {}, componentForClone); // Use mutation observer to detect new elements being added within this component at run-time.
      // Alpine's just so darn flexible amirite?

      this.listenForNewElementsToInitialize();

      if (typeof initReturnedCallback === 'function') {
        // Run the callback returned from the "x-init" hook to allow the user to do stuff after
        // Alpine's got it's grubby little paws all over everything.
        initReturnedCallback.call(this.$data);
      }

      componentForClone || setTimeout(() => {
        Alpine.onComponentInitializeds.forEach(callback => callback(this));
      }, 0);
    }

    getUnobservedData() {
      return unwrap$1(this.membrane, this.$data);
    }

    wrapDataInObservable(data) {
      var self = this;
      let updateDom = debounce(function () {
        self.updateElements(self.$el);
      }, 0);
      return wrap(data, (target, key) => {
        if (self.watchers[key]) {
          // If there's a watcher for this specific key, run it.
          self.watchers[key].forEach(callback => callback(target[key]));
        } else if (Array.isArray(target)) {
          // Arrays are special cases, if any of the items change, we consider the array as mutated.
          Object.keys(self.watchers).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // Ignore length mutations since they would result in duplicate calls.
            // For example, when calling push, we would get a mutation for the item's key
            // and a second mutation for the length property.

            if (key === 'length') return;
            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData[part])) {
                self.watchers[fullDotNotationKey].forEach(callback => callback(target));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } else {
          // Let's walk through the watchers with "dot-notation" (foo.bar) and see
          // if this mutation fits any of them.
          Object.keys(self.watchers).filter(i => i.includes('.')).forEach(fullDotNotationKey => {
            let dotNotationParts = fullDotNotationKey.split('.'); // If this dot-notation watcher's last "part" doesn't match the current
            // key, then skip it early for performance reasons.

            if (key !== dotNotationParts[dotNotationParts.length - 1]) return; // Now, walk through the dot-notation "parts" recursively to find
            // a match, and call the watcher if one's found.

            dotNotationParts.reduce((comparisonData, part) => {
              if (Object.is(target, comparisonData)) {
                // Run the watchers.
                self.watchers[fullDotNotationKey].forEach(callback => callback(target[key]));
              }

              return comparisonData[part];
            }, self.unobservedData);
          });
        } // Don't react to data changes for cases like the `x-created` hook.


        if (self.pauseReactivity) return;
        updateDom();
      });
    }

    walkAndSkipNestedComponents(el, callback, initializeComponentCallback = () => {}) {
      walk(el, el => {
        // We've hit a component.
        if (el.hasAttribute('x-data')) {
          // If it's not the current one.
          if (!el.isSameNode(this.$el)) {
            // Initialize it if it's not.
            if (!el.__x) initializeComponentCallback(el); // Now we'll let that sub-component deal with itself.

            return false;
          }
        }

        return callback(el);
      });
    }

    initializeElements(rootEl, extraVars = () => {}, componentForClone = false) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop
        if (el.__x_for_key !== undefined) return false; // Don't touch spawns from if directives

        if (el.__x_inserted_me !== undefined) return false;
        this.initializeElement(el, extraVars, componentForClone ? false : true);
      }, el => {
        if (!componentForClone) el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    initializeElement(el, extraVars, shouldRegisterListeners = true) {
      // To support class attribute merging, we have to know what the element's
      // original class attribute looked like for reference.
      if (el.hasAttribute('class') && getXAttrs(el, this).length > 0) {
        el.__x_original_classes = convertClassStringToArray(el.getAttribute('class'));
      }

      shouldRegisterListeners && this.registerListeners(el, extraVars);
      this.resolveBoundAttributes(el, true, extraVars);
    }

    updateElements(rootEl, extraVars = () => {}) {
      this.walkAndSkipNestedComponents(rootEl, el => {
        // Don't touch spawns from for loop (and check if the root is actually a for loop in a parent, don't skip it.)
        if (el.__x_for_key !== undefined && !el.isSameNode(this.$el)) return false;
        this.updateElement(el, extraVars);
      }, el => {
        el.__x = new Component(el);
      });
      this.executeAndClearRemainingShowDirectiveStack();
      this.executeAndClearNextTickStack(rootEl);
    }

    executeAndClearNextTickStack(el) {
      // Skip spawns from alpine directives
      if (el === this.$el && this.nextTickStack.length > 0) {
        // We run the tick stack after the next frame to allow any
        // running transitions to pass the initial show stage.
        requestAnimationFrame(() => {
          while (this.nextTickStack.length > 0) {
            this.nextTickStack.shift()();
          }
        });
      }
    }

    executeAndClearRemainingShowDirectiveStack() {
      // The goal here is to start all the x-show transitions
      // and build a nested promise chain so that elements
      // only hide when the children are finished hiding.
      this.showDirectiveStack.reverse().map(handler => {
        return new Promise((resolve, reject) => {
          handler(resolve, reject);
        });
      }).reduce((promiseChain, promise) => {
        return promiseChain.then(() => {
          return promise.then(finishElement => {
            finishElement();
          });
        });
      }, Promise.resolve(() => {})).catch(e => {
        if (e !== TRANSITION_CANCELLED) throw e;
      }); // We've processed the handler stack. let's clear it.

      this.showDirectiveStack = [];
      this.showDirectiveLastElement = undefined;
    }

    updateElement(el, extraVars) {
      this.resolveBoundAttributes(el, false, extraVars);
    }

    registerListeners(el, extraVars) {
      getXAttrs(el, this).forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'on':
            registerListener(this, el, value, modifiers, expression, extraVars);
            break;

          case 'model':
            registerModelListener(this, el, modifiers, expression, extraVars);
            break;
        }
      });
    }

    resolveBoundAttributes(el, initialUpdate = false, extraVars) {
      let attrs = getXAttrs(el, this);
      attrs.forEach(({
        type,
        value,
        modifiers,
        expression
      }) => {
        switch (type) {
          case 'model':
            handleAttributeBindingDirective(this, el, 'value', expression, extraVars, type, modifiers);
            break;

          case 'bind':
            // The :key binding on an x-for is special, ignore it.
            if (el.tagName.toLowerCase() === 'template' && value === 'key') return;
            handleAttributeBindingDirective(this, el, value, expression, extraVars, type, modifiers);
            break;

          case 'text':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleTextDirective(el, output, expression);
            break;

          case 'html':
            handleHtmlDirective(this, el, expression, extraVars);
            break;

          case 'show':
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleShowDirective(this, el, output, modifiers, initialUpdate);
            break;

          case 'if':
            // If this element also has x-for on it, don't process x-if.
            // We will let the "x-for" directive handle the "if"ing.
            if (attrs.some(i => i.type === 'for')) return;
            var output = this.evaluateReturnExpression(el, expression, extraVars);
            handleIfDirective(this, el, output, initialUpdate, extraVars);
            break;

          case 'for':
            handleForDirective(this, el, expression, initialUpdate, extraVars);
            break;

          case 'cloak':
            el.removeAttribute('x-cloak');
            break;
        }
      });
    }

    evaluateReturnExpression(el, expression, extraVars = () => {}) {
      return saferEval(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    evaluateCommandExpression(el, expression, extraVars = () => {}) {
      return saferEvalNoReturn(el, expression, this.$data, _objectSpread2(_objectSpread2({}, extraVars()), {}, {
        $dispatch: this.getDispatchFunction(el)
      }));
    }

    getDispatchFunction(el) {
      return (event, detail = {}) => {
        el.dispatchEvent(new CustomEvent(event, {
          detail,
          bubbles: true
        }));
      };
    }

    listenForNewElementsToInitialize() {
      const targetNode = this.$el;
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        for (let i = 0; i < mutations.length; i++) {
          // Filter out mutations triggered from child components.
          const closestParentComponent = mutations[i].target.closest('[x-data]');
          if (!(closestParentComponent && closestParentComponent.isSameNode(this.$el))) continue;

          if (mutations[i].type === 'attributes' && mutations[i].attributeName === 'x-data') {
            const xAttr = mutations[i].target.getAttribute('x-data') || '{}';
            const rawData = saferEval(this.$el, xAttr, {
              $el: this.$el
            });
            Object.keys(rawData).forEach(key => {
              if (this.$data[key] !== rawData[key]) {
                this.$data[key] = rawData[key];
              }
            });
          }

          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              if (node.nodeType !== 1 || node.__x_inserted_me) return;

              if (node.matches('[x-data]') && !node.__x) {
                node.__x = new Component(node);
                return;
              }

              this.initializeElements(node);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    }

    getRefsProxy() {
      var self = this;
      var refObj = {};
      // One of the goals of this is to not hold elements in memory, but rather re-evaluate
      // the DOM when the system needs something from it. This way, the framework is flexible and
      // friendly to outside DOM changes from libraries like Vue/Livewire.
      // For this reason, I'm using an "on-demand" proxy to fake a "$refs" object.

      return new Proxy(refObj, {
        get(object, property) {
          if (property === '$isAlpineProxy') return true;
          var ref; // We can't just query the DOM because it's hard to filter out refs in
          // nested components.

          self.walkAndSkipNestedComponents(self.$el, el => {
            if (el.hasAttribute('x-ref') && el.getAttribute('x-ref') === property) {
              ref = el;
            }
          });
          return ref;
        }

      });
    }

  }

  const Alpine = {
    version: "2.8.2",
    pauseMutationObserver: false,
    magicProperties: {},
    onComponentInitializeds: [],
    onBeforeComponentInitializeds: [],
    ignoreFocusedForValueBinding: false,
    start: async function start() {
      if (!isTesting()) {
        await domReady();
      }

      this.discoverComponents(el => {
        this.initializeComponent(el);
      }); // It's easier and more performant to just support Turbolinks than listen
      // to MutationObserver mutations at the document level.

      document.addEventListener("turbolinks:load", () => {
        this.discoverUninitializedComponents(el => {
          this.initializeComponent(el);
        });
      });
      this.listenForNewUninitializedComponentsAtRunTime();
    },
    discoverComponents: function discoverComponents(callback) {
      const rootEls = document.querySelectorAll('[x-data]');
      rootEls.forEach(rootEl => {
        callback(rootEl);
      });
    },
    discoverUninitializedComponents: function discoverUninitializedComponents(callback, el = null) {
      const rootEls = (el || document).querySelectorAll('[x-data]');
      Array.from(rootEls).filter(el => el.__x === undefined).forEach(rootEl => {
        callback(rootEl);
      });
    },
    listenForNewUninitializedComponentsAtRunTime: function listenForNewUninitializedComponentsAtRunTime() {
      const targetNode = document.querySelector('body');
      const observerOptions = {
        childList: true,
        attributes: true,
        subtree: true
      };
      const observer = new MutationObserver(mutations => {
        if (this.pauseMutationObserver) return;

        for (let i = 0; i < mutations.length; i++) {
          if (mutations[i].addedNodes.length > 0) {
            mutations[i].addedNodes.forEach(node => {
              // Discard non-element nodes (like line-breaks)
              if (node.nodeType !== 1) return; // Discard any changes happening within an existing component.
              // They will take care of themselves.

              if (node.parentElement && node.parentElement.closest('[x-data]')) return;
              this.discoverUninitializedComponents(el => {
                this.initializeComponent(el);
              }, node.parentElement);
            });
          }
        }
      });
      observer.observe(targetNode, observerOptions);
    },
    initializeComponent: function initializeComponent(el) {
      if (!el.__x) {
        // Wrap in a try/catch so that we don't prevent other components
        // from initializing when one component contains an error.
        try {
          el.__x = new Component(el);
        } catch (error) {
          setTimeout(() => {
            throw error;
          }, 0);
        }
      }
    },
    clone: function clone(component, newEl) {
      if (!newEl.__x) {
        newEl.__x = new Component(newEl, component);
      }
    },
    addMagicProperty: function addMagicProperty(name, callback) {
      this.magicProperties[name] = callback;
    },
    onComponentInitialized: function onComponentInitialized(callback) {
      this.onComponentInitializeds.push(callback);
    },
    onBeforeComponentInitialized: function onBeforeComponentInitialized(callback) {
      this.onBeforeComponentInitializeds.push(callback);
    }
  };

  if (!isTesting()) {
    window.Alpine = Alpine;

    if (window.deferLoadingAlpine) {
      window.deferLoadingAlpine(function () {
        window.Alpine.start();
      });
    } else {
      window.Alpine.start();
    }
  }

  return Alpine;

})));


/***/ }),

/***/ "./resources/showcase/js/app.js":
/*!**************************************!*\
  !*** ./resources/showcase/js/app.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_0__);
__webpack_require__(/*! ./bootstrap */ "./resources/showcase/js/bootstrap.js"); // import Swiper JS
// window.Swiper = require('swiper');
// import Swiper styles
// import 'swiper/swiper-bundle.css';




/***/ }),

/***/ "./resources/showcase/js/bootstrap.js":
/*!********************************************!*\
  !*** ./resources/showcase/js/bootstrap.js ***!
  \********************************************/
/***/ (() => {



/***/ }),

/***/ "./resources/showcase/sass/app.sass":
/*!******************************************!*\
  !*** ./resources/showcase/sass/app.sass ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/admin/sass/app.scss":
/*!***************************************!*\
  !*** ./resources/admin/sass/app.scss ***!
  \***************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: expected no more input.\n  ╷\n1 │ @import url(https://fonts.googleapis.com/css?family=Ubuntu&display=swap);/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}a{background-color:transparent}strong{font-weight:bolder}img{border-style:none}button,input,select{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden]{display:none}h1,h2,h3,h4,h5,h6,hr,p{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}ul{list-style:none;margin:0;padding:0}html{font-family:Ubuntu,Sans-serif;line-height:1.5}*,::after,::before{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e2e8f0}hr{border-top-width:1px}img{border-style:solid}input::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder{color:#a0aec0}input::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,select{padding:0;line-height:inherit;color:inherit}img,svg{display:block;vertical-align:middle}img{max-width:100%;height:auto}[class*=lang-] script[type='text/plain'],[class*=language-] script[type='text/plain'],script[type='text/plain'][class*=lang-],script[type='text/plain'][class*=language-]{display:block;font:100% Consolas,Monaco,monospace;white-space:pre;overflow:auto}a,body,h1,h2,h3,h4,h5,h6,p{text-transform:capitalize}p{letter-spacing:.05em;font-size:.875rem;--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.h1{font-size:4rem;font-weight:900}.h2{font-size:3rem;font-weight:800}.h3{font-size:2.25rem;font-weight:800}.h4{font-size:1.875rem;font-weight:800}.h5{font-size:1.5rem;font-weight:800}.h6{font-size:1.25rem;font-weight:800}.card{border-radius:.25rem;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));border-width:1px;--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity))}.card .card-header{border-bottom-width:1px;padding:1.5rem}.card .card-body{padding:1.5rem}.card .card-footer{border-top-width:1px;padding:1.5rem}.btn-shadow{text-align:center;text-transform:capitalize;--bg-opacity:1;background-color:#4fd1c5;background-color:rgba(79,209,197,var(--bg-opacity));display:block;padding-top:.5rem;padding-bottom:.5rem;padding-left:1.25rem;padding-right:1.25rem;border-radius:.25rem;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s;box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}.btn-shadow:hover{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.btn{text-align:center;text-transform:capitalize;--bg-opacity:1;background-color:#b2f5ea;background-color:rgba(178,245,234,var(--bg-opacity));display:block;padding-top:.5rem;padding-bottom:.5rem;padding-left:1.25rem;padding-right:1.25rem;border-radius:.25rem;--text-opacity:1;color:#319795;color:rgba(49,151,149,var(--text-opacity));transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.btn:hover{--bg-opacity:1;background-color:#81e6d9;background-color:rgba(129,230,217,var(--bg-opacity));--text-opacity:1;color:#285e61;color:rgba(40,94,97,var(--text-opacity))}.btn-indigo{text-align:center;text-transform:capitalize;--bg-opacity:1;background-color:#667eea;background-color:rgba(102,126,234,var(--bg-opacity));--text-opacity:1;color:#ebf4ff;color:rgba(235,244,255,var(--text-opacity));display:block;padding-top:.5rem;padding-bottom:.5rem;padding-left:1.25rem;padding-right:1.25rem;border-radius:.25rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.btn-indigo:hover{--bg-opacity:1;background-color:#5a67d8;background-color:rgba(90,103,216,var(--bg-opacity));--text-opacity:1;color:#c3dafe;color:rgba(195,218,254,var(--text-opacity))}.btn-info{text-align:center;text-transform:capitalize;--bg-opacity:1;background-color:#faf089;background-color:rgba(250,240,137,var(--bg-opacity));--text-opacity:1;color:#d69e2e;color:rgba(214,158,46,var(--text-opacity));display:block;padding-top:.5rem;padding-bottom:.5rem;padding-left:1.25rem;padding-right:1.25rem;border-radius:.25rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.btn-info:hover{--bg-opacity:1;background-color:#f6e05e;background-color:rgba(246,224,94,var(--bg-opacity));--text-opacity:1;color:#d69e2e;color:rgba(214,158,46,var(--text-opacity))}.btn-danger{text-align:center;text-transform:capitalize;--bg-opacity:1;background-color:#feb2b2;background-color:rgba(254,178,178,var(--bg-opacity));--text-opacity:1;color:#e53e3e;color:rgba(229,62,62,var(--text-opacity));display:block;padding-top:.5rem;padding-bottom:.5rem;padding-left:1.25rem;padding-right:1.25rem;border-radius:.25rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.btn-danger:hover{--bg-opacity:1;background-color:#fc8181;background-color:rgba(252,129,129,var(--bg-opacity));--text-opacity:1;color:#e53e3e;color:rgba(229,62,62,var(--text-opacity))}.btn-gray{text-align:center;text-transform:capitalize;--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity));border-width:1px;--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity));display:block;padding-top:.5rem;padding-bottom:.5rem;padding-left:1.25rem;padding-right:1.25rem;border-radius:.25rem;--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity));transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.btn-gray:hover{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity));border-width:1px;--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity))}.btn-bs-dark{text-align:center;text-transform:capitalize;--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));display:block;padding-top:.5rem;padding-bottom:.5rem;padding-left:1.25rem;padding-right:1.25rem;border-radius:.25rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.btn-bs-dark:hover{opacity:.75}.btn-bs-primary{text-align:center;text-transform:capitalize;--bg-opacity:1;background-color:#5a67d8;background-color:rgba(90,103,216,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));display:block;padding-top:.5rem;padding-bottom:.5rem;padding-left:1.25rem;padding-right:1.25rem;border-radius:.25rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.btn-bs-primary:hover{opacity:.75}.btn-bs-secondary{text-align:center;text-transform:capitalize;--bg-opacity:1;background-color:#a0aec0;background-color:rgba(160,174,192,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));display:block;padding-top:.5rem;padding-bottom:.5rem;padding-left:1.25rem;padding-right:1.25rem;border-radius:.25rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.btn-bs-secondary:hover{opacity:.75}.btn-bs-success{text-align:center;text-transform:capitalize;--bg-opacity:1;background-color:#48bb78;background-color:rgba(72,187,120,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));display:block;padding-top:.5rem;padding-bottom:.5rem;padding-left:1.25rem;padding-right:1.25rem;border-radius:.25rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.btn-bs-success:hover{opacity:.75}.btn-bs-danger{text-align:center;text-transform:capitalize;--bg-opacity:1;background-color:#f56565;background-color:rgba(245,101,101,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));display:block;padding-top:.5rem;padding-bottom:.5rem;padding-left:1.25rem;padding-right:1.25rem;border-radius:.25rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.btn-bs-danger:hover{opacity:.75}.btn-bs-info{text-align:center;text-transform:capitalize;--bg-opacity:1;background-color:#ecc94b;background-color:rgba(236,201,75,var(--bg-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));display:block;padding-top:.5rem;padding-bottom:.5rem;padding-left:1.25rem;padding-right:1.25rem;border-radius:.25rem;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.btn-bs-info:hover{opacity:.75}.badge{padding:2px 0;padding-left:.5rem;padding-right:.5rem}.badge-primary{--bg-opacity:1;background-color:#b2f5ea;background-color:rgba(178,245,234,var(--bg-opacity));border-width:1px;--border-opacity:1;border-color:#81e6d9;border-color:rgba(129,230,217,var(--border-opacity));--text-opacity:1;color:#319795;color:rgba(49,151,149,var(--text-opacity));border-radius:.25rem;text-transform:lowercase}.alert{border-width:1px;border-radius:.25rem;--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity));padding-top:1rem;padding-bottom:1rem;padding-left:1.5rem;padding-right:1.5rem;font-size:.875rem}.alert a{font-weight:800;--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity));font-size:1rem;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.alert a:hover{opacity:.75}.alert-default{--bg-opacity:1;background-color:#e6fffa;background-color:rgba(230,255,250,var(--bg-opacity));--border-opacity:1;border-color:#b2f5ea;border-color:rgba(178,245,234,var(--border-opacity));--text-opacity:1;color:#38b2ac;color:rgba(56,178,172,var(--text-opacity))}.alert-default a{--text-opacity:1;color:#2c7a7b;color:rgba(44,122,123,var(--text-opacity))}.alert-light{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity));--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity));--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.alert-light a{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.alert-dark{--bg-opacity:1;background-color:#4a5568;background-color:rgba(74,85,104,var(--bg-opacity));--border-opacity:1;border-color:#1a202c;border-color:rgba(26,32,44,var(--border-opacity));--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.alert-dark a{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.alert-success{--bg-opacity:1;background-color:#c6f6d5;background-color:rgba(198,246,213,var(--bg-opacity));--border-opacity:1;border-color:#9ae6b4;border-color:rgba(154,230,180,var(--border-opacity));--text-opacity:1;color:#48bb78;color:rgba(72,187,120,var(--text-opacity))}.alert-success a{--text-opacity:1;color:#2f855a;color:rgba(47,133,90,var(--text-opacity))}.alert-error{--bg-opacity:1;background-color:#fed7d7;background-color:rgba(254,215,215,var(--bg-opacity));--border-opacity:1;border-color:#feb2b2;border-color:rgba(254,178,178,var(--border-opacity));--text-opacity:1;color:#f56565;color:rgba(245,101,101,var(--text-opacity))}.alert-error a{--text-opacity:1;color:#c53030;color:rgba(197,48,48,var(--text-opacity))}.alert-close{display:flex;flex-direction:row-reverse}.alert-close button.alert-btn-close{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.alert-close button.alert-btn-close:hover{opacity:.75}.alert-close span{flex:1 1 0%}.report-card:hover .card{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);--border-opacity:1;border-color:#fff;border-color:rgba(255,255,255,var(--border-opacity));transform:scale(1.01)}.report-card:hover .footer{padding:0;border-width:0}.report-card .card,.report-card .footer{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.3s}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.bg-black{--bg-opacity:1;background-color:#000;background-color:rgba(0,0,0,var(--bg-opacity))}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-gray-100{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.bg-gray-200{--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}.bg-gray-300{--bg-opacity:1;background-color:#e2e8f0;background-color:rgba(226,232,240,var(--bg-opacity))}.bg-red-200{--bg-opacity:1;background-color:#fed7d7;background-color:rgba(254,215,215,var(--bg-opacity))}.bg-red-400{--bg-opacity:1;background-color:#fc8181;background-color:rgba(252,129,129,var(--bg-opacity))}.bg-red-600{--bg-opacity:1;background-color:#e53e3e;background-color:rgba(229,62,62,var(--bg-opacity))}.bg-yellow-600{--bg-opacity:1;background-color:#d69e2e;background-color:rgba(214,158,46,var(--bg-opacity))}.bg-green-200{--bg-opacity:1;background-color:#c6f6d5;background-color:rgba(198,246,213,var(--bg-opacity))}.bg-green-600{--bg-opacity:1;background-color:#38a169;background-color:rgba(56,161,105,var(--bg-opacity))}.bg-teal-200{--bg-opacity:1;background-color:#b2f5ea;background-color:rgba(178,245,234,var(--bg-opacity))}.bg-teal-400{--bg-opacity:1;background-color:#4fd1c5;background-color:rgba(79,209,197,var(--bg-opacity))}.bg-indigo-200{--bg-opacity:1;background-color:#c3dafe;background-color:rgba(195,218,254,var(--bg-opacity))}.bg-indigo-600{--bg-opacity:1;background-color:#5a67d8;background-color:rgba(90,103,216,var(--bg-opacity))}.bg-pink-600{--bg-opacity:1;background-color:#d53f8c;background-color:rgba(213,63,140,var(--bg-opacity))}.hover\\:bg-gray-100:hover{--bg-opacity:1;background-color:#f7fafc;background-color:rgba(247,250,252,var(--bg-opacity))}.hover\\:bg-gray-900:hover{--bg-opacity:1;background-color:#1a202c;background-color:rgba(26,32,44,var(--bg-opacity))}.focus\\:bg-gray-300:focus{--bg-opacity:1;background-color:#e2e8f0;background-color:rgba(226,232,240,var(--bg-opacity))}.border-gray-200{--border-opacity:1;border-color:#edf2f7;border-color:rgba(237,242,247,var(--border-opacity))}.border-gray-300{--border-opacity:1;border-color:#e2e8f0;border-color:rgba(226,232,240,var(--border-opacity))}.border-teal-300{--border-opacity:1;border-color:#81e6d9;border-color:rgba(129,230,217,var(--border-opacity))}.border-indigo-300{--border-opacity:1;border-color:#a3bffa;border-color:rgba(163,191,250,var(--border-opacity))}.hover\\:border-gray-400:hover{--border-opacity:1;border-color:#cbd5e0;border-color:rgba(203,213,224,var(--border-opacity))}.rounded{border-radius:.25rem}.rounded-md{border-radius:.375rem}.rounded-lg{border-radius:.5rem}.rounded-full{border-radius:9999px}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.border-2{border-width:2px}.border{border-width:1px}.border-t-0{border-top-width:0}.border-b-0{border-bottom-width:0}.border-l-0{border-left-width:0}.border-r{border-right-width:1px}.border-b{border-bottom-width:1px}.block{display:block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.flex-1{flex:1 1 0%}.flex-none{flex:none}.font-hairline{font-weight:100}.font-thin{font-weight:200}.font-medium{font-weight:500}.font-semibold{font-weight:600}.font-bold{font-weight:700}.font-extrabold{font-weight:800}.h-2{height:.5rem}.h-4{height:1rem}.h-8{height:2rem}.h-10{height:2.5rem}.h-32{height:8rem}.h-full{height:100%}.h-screen{height:100vh}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}.text-4xl{font-size:2.25rem}.m-4{margin:1rem}.mx-4{margin-left:1rem;margin-right:1rem}.my-5{margin-top:1.25rem;margin-bottom:1.25rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.my-10{margin-top:2.5rem;margin-bottom:2.5rem}.mx-auto{margin-left:auto;margin-right:auto}.mt-0{margin-top:0}.mt-1{margin-top:.25rem}.mr-1{margin-right:.25rem}.mb-1{margin-bottom:.25rem}.ml-1{margin-left:.25rem}.mt-2{margin-top:.5rem}.mr-2{margin-right:.5rem}.mb-2{margin-bottom:.5rem}.ml-2{margin-left:.5rem}.mt-3{margin-top:.75rem}.mr-3{margin-right:.75rem}.mb-3{margin-bottom:.75rem}.ml-3{margin-left:.75rem}.mt-4{margin-top:1rem}.mr-4{margin-right:1rem}.mb-4{margin-bottom:1rem}.mt-5{margin-top:1.25rem}.mb-5{margin-bottom:1.25rem}.mt-6{margin-top:1.5rem}.mr-6{margin-right:1.5rem}.mb-6{margin-bottom:1.5rem}.ml-6{margin-left:1.5rem}.mt-8{margin-top:2rem}.mr-8{margin-right:2rem}.mt-10{margin-top:2.5rem}.mb-10{margin-bottom:2.5rem}.ml-10{margin-left:2.5rem}.mt-20{margin-top:5rem}.object-cover{-o-object-fit:cover;object-fit:cover}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.overflow-hidden{overflow:hidden}.p-0{padding:0}.p-1{padding:.25rem}.p-3{padding:.75rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.px-3{padding-left:.75rem;padding-right:.75rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.pt-2{padding-top:.5rem}.pl-3{padding-left:.75rem}.pl-5{padding-left:1.25rem}.pr-10{padding-right:2.5rem}.pb-10{padding-bottom:2.5rem}.pr-16{padding-right:4rem}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.top-0{top:0}.right-0{right:0}.shadow-xs{box-shadow:0 0 0 1px rgba(0,0,0,.05)}.shadow-md{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}.shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.hover\\:shadow-md:hover{box-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -1px rgba(0,0,0,.06)}.hover\\:shadow-none:hover{box-shadow:none}.focus\\:shadow-inner:focus{box-shadow:inset 0 2px 4px 0 rgba(0,0,0,.06)}.fill-current{fill:currentColor}.table-auto{table-layout:auto}.table-fixed{table-layout:fixed}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-black{--text-opacity:1;color:#000;color:rgba(0,0,0,var(--text-opacity))}.text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.text-gray-400{--text-opacity:1;color:#cbd5e0;color:rgba(203,213,224,var(--text-opacity))}.text-gray-500{--text-opacity:1;color:#a0aec0;color:rgba(160,174,192,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.text-gray-800{--text-opacity:1;color:#2d3748;color:rgba(45,55,72,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.text-red-400{--text-opacity:1;color:#fc8181;color:rgba(252,129,129,var(--text-opacity))}.text-red-500{--text-opacity:1;color:#f56565;color:rgba(245,101,101,var(--text-opacity))}.text-red-700{--text-opacity:1;color:#c53030;color:rgba(197,48,48,var(--text-opacity))}.text-red-900{--text-opacity:1;color:#742a2a;color:rgba(116,42,42,var(--text-opacity))}.text-yellow-500{--text-opacity:1;color:#ecc94b;color:rgba(236,201,75,var(--text-opacity))}.text-yellow-600{--text-opacity:1;color:#d69e2e;color:rgba(214,158,46,var(--text-opacity))}.text-yellow-700{--text-opacity:1;color:#b7791f;color:rgba(183,121,31,var(--text-opacity))}.text-green-400{--text-opacity:1;color:#68d391;color:rgba(104,211,145,var(--text-opacity))}.text-green-500{--text-opacity:1;color:#48bb78;color:rgba(72,187,120,var(--text-opacity))}.text-green-700{--text-opacity:1;color:#2f855a;color:rgba(47,133,90,var(--text-opacity))}.text-green-900{--text-opacity:1;color:#22543d;color:rgba(34,84,61,var(--text-opacity))}.text-teal-400{--text-opacity:1;color:#4fd1c5;color:rgba(79,209,197,var(--text-opacity))}.text-teal-700{--text-opacity:1;color:#2c7a7b;color:rgba(44,122,123,var(--text-opacity))}.text-teal-800{--text-opacity:1;color:#285e61;color:rgba(40,94,97,var(--text-opacity))}.text-indigo-700{--text-opacity:1;color:#4c51bf;color:rgba(76,81,191,var(--text-opacity))}.hover\\:text-gray-900:hover{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.hover\\:text-teal-600:hover{--text-opacity:1;color:#319795;color:rgba(49,151,149,var(--text-opacity))}.uppercase{text-transform:uppercase}.capitalize{text-transform:capitalize}.tracking-wide{letter-spacing:.025em}.tracking-wider{letter-spacing:.05em}.tracking-widest{letter-spacing:.1em}.w-2{width:.5rem}.w-4{width:1rem}.w-8{width:2rem}.w-10{width:2.5rem}.w-32{width:8rem}.w-56{width:14rem}.w-64{width:16rem}.w-1\\/2{width:50%}.w-1\\/3{width:33.333333%}.w-2\\/3{width:66.666667%}.w-1\\/4{width:25%}.w-3\\/4{width:75%}.w-full{width:100%}.gap-5{grid-gap:1.25rem;gap:1.25rem}.gap-6{grid-gap:1.5rem;gap:1.5rem}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.grid-cols-8{grid-template-columns:repeat(8,minmax(0,1fr))}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.col-span-6{grid-column:span 6/span 6}.transition-all{transition-property:all}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}@keyframes ping{100%,75%{transform:scale(2);opacity:0}}@keyframes pulse{50%{opacity:.5}}@keyframes bounce{0%,100%{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.faster{-webkit-animation-duration:.5s;animation-duration:.5s}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@keyframes bounce{20%,53%,80%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);transform:translate3d(0,0,0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}@-webkit-keyframes flash{to{opacity:1}}@keyframes flash{50%,from,to{opacity:1}25%,75%{opacity:0}}@keyframes pulse{from{transform:scale3d(1,1,1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scale3d(1,1,1)}}@-webkit-keyframes rubberBand{to{transform:scale3d(1,1,1)}}@keyframes rubberBand{from{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scale3d(1,1,1)}}@-webkit-keyframes shake{to{transform:translate3d(0,0,0)}}@keyframes shake{from,to{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}@keyframes headShake{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}@-webkit-keyframes swing{to{transform:rotate3d(0,0,1,0deg)}}@keyframes swing{20%{transform:rotate3d(0,0,1,15deg)}40%{transform:rotate3d(0,0,1,-10deg)}60%{transform:rotate3d(0,0,1,5deg)}80%{transform:rotate3d(0,0,1,-5deg)}to{transform:rotate3d(0,0,1,0deg)}}@-webkit-keyframes tada{to{transform:scale3d(1,1,1)}}@keyframes tada{from{transform:scale3d(1,1,1)}10%,20%{transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}to{transform:scale3d(1,1,1)}}@-webkit-keyframes wobble{to{transform:translate3d(0,0,0)}}@keyframes wobble{from{transform:translate3d(0,0,0)}15%{transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}to{transform:translate3d(0,0,0)}}@keyframes jello{11.1% to,from{transform:translate3d(0,0,0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{transform:skewX(.390625deg) skewY(.390625deg)}88.8%{transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes heartBeat{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}@-webkit-keyframes hinge{to{transform:translate3d(0,700px,0);opacity:0}}@keyframes hinge{0%{transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{transform:rotate3d(0,0,1,80deg);transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{transform:rotate3d(0,0,1,60deg);transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}to{transform:translate3d(0,700px,0);opacity:0}}@-webkit-keyframes jackInTheBox{to{transform:scale(1)}}@keyframes jackInTheBox{from{opacity:0;transform-origin:center bottom;transform:scale(.1) rotate(30deg)}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{transform:scale(1)}}@-webkit-keyframes lightSpeedIn{to{transform:translate3d(0,0,0)}}@keyframes lightSpeedIn{from{opacity:0;transform:translate3d(100%,0,0) skewX(-30deg)}60%{opacity:1;transform:skewX(20deg)}80%{transform:skewX(-5deg)}to{transform:translate3d(0,0,0)}}@-webkit-keyframes lightSpeedOut{to{opacity:0;transform:translate3d(100%,0,0) skewX(30deg)}}@keyframes lightSpeedOut{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) skewX(30deg)}}@-webkit-keyframes flip{to{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes flip{from{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(.95,.95,.95) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{transform:perspective(400px) scale3d(1,1,1) translate3d(0,0,0) rotate3d(0,1,0,0deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@-webkit-keyframes flipInX{to{transform:perspective(400px)}}@keyframes flipInX{from{transform:perspective(400px) rotate3d(1,0,0,90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(1,0,0,-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{transform:perspective(400px)}}@-webkit-keyframes flipInY{to{transform:perspective(400px)}}@keyframes flipInY{from{transform:perspective(400px) rotate3d(0,1,0,90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(0,1,0,-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(0,1,0,-5deg)}to{transform:perspective(400px)}}@-webkit-keyframes flipOutX{to{transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}@keyframes flipOutX{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}@-webkit-keyframes flipOutY{to{transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}@keyframes flipOutY{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}to{transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}@-webkit-keyframes rotateIn{to{transform-origin:center;transform:translate3d(0,0,0);opacity:1}}@keyframes rotateIn{from{transform-origin:center;transform:rotate3d(0,0,1,-200deg);opacity:0}to{transform-origin:center;transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes rotateInDownLeft{to{transform-origin:left bottom;transform:translate3d(0,0,0);opacity:1}}@keyframes rotateInDownLeft{from{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}to{transform-origin:left bottom;transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes rotateInDownRight{to{transform-origin:right bottom;transform:translate3d(0,0,0);opacity:1}}@keyframes rotateInDownRight{from{transform-origin:right bottom;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:right bottom;transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes rotateInUpLeft{to{transform-origin:left top;transform:translate3d(0,0,0);opacity:1}}@keyframes rotateInUpLeft{from{transform-origin:left top;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:left top;transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes rotateInUpRight{to{transform-origin:right bottom;transform:translate3d(0,0,0);opacity:1}}@keyframes rotateInUpRight{from{transform-origin:right bottom;transform:rotate3d(0,0,1,-90deg);opacity:0}to{transform-origin:right bottom;transform:translate3d(0,0,0);opacity:1}}@-webkit-keyframes rotateOut{to{transform-origin:center;transform:rotate3d(0,0,1,200deg);opacity:0}}@keyframes rotateOut{from{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate3d(0,0,1,200deg);opacity:0}}@-webkit-keyframes rotateOutDownLeft{to{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}}@keyframes rotateOutDownLeft{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}}@-webkit-keyframes rotateOutDownRight{to{transform-origin:right bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}@keyframes rotateOutDownRight{from{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}@-webkit-keyframes rotateOutUpLeft{to{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}@keyframes rotateOutUpLeft{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}@-webkit-keyframes rotateOutUpRight{to{transform-origin:left bottom;transform:rotate3d(0,0,1,90deg);opacity:0}}@keyframes rotateOutUpRight{from{transform-origin:right bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,90deg);opacity:0}}@-webkit-keyframes rollIn{to{opacity:1;transform:translate3d(0,0,0)}}@keyframes rollIn{from{opacity:0;transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg)}to{opacity:1;transform:translate3d(0,0,0)}}@-webkit-keyframes rollOut{to{opacity:0;transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg)}}@keyframes rollOut{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg)}}@keyframes zoomIn{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomInDown{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInLeft{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInRight{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomInUp{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@-webkit-keyframes bounceIn{to{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}to{opacity:1;transform:scale3d(1,1,1)}}@keyframes bounceIn{20%,40%,60%,80%,from,to{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{transform:scale3d(1.03,1.03,1.03);opacity:1}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scale3d(1,1,1)}}@-webkit-keyframes bounceInDown{to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}to{transform:translate3d(0,0,0)}}@keyframes bounceInDown{60%,75%,90%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:translate3d(0,0,0)}}@-webkit-keyframes bounceInLeft{to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}to{transform:translate3d(0,0,0)}}@keyframes bounceInLeft{60%,75%,90%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:translate3d(0,0,0)}}@-webkit-keyframes bounceInRight{to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}to{transform:translate3d(0,0,0)}}@keyframes bounceInRight{60%,75%,90%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:translate3d(0,0,0)}}@-webkit-keyframes bounceInUp{to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}to{transform:translate3d(0,0,0)}}@keyframes bounceInUp{60%,75%,90%,from,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translate3d(0,0,0)}}@-webkit-keyframes bounceOut{to{opacity:0;transform:scale3d(.3,.3,.3)}}@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}@-webkit-keyframes bounceOutDown{to{opacity:0;transform:translate3d(0,2000px,0)}}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}@-webkit-keyframes bounceOutLeft{to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}@-webkit-keyframes bounceOutRight{to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}@-webkit-keyframes bounceOutUp{to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@-webkit-keyframes zoomOut{to{opacity:0}}@keyframes zoomOut{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}@-webkit-keyframes zoomOutDown{to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@-webkit-keyframes zoomOutLeft{to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0);transform-origin:left center}}@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0);transform-origin:left center}}@-webkit-keyframes zoomOutRight{to{opacity:0;transform:scale(.1) translate3d(2000px,0,0);transform-origin:right center}}@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0);transform-origin:right center}}@-webkit-keyframes zoomOutUp{to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.32,1);animation-timing-function:cubic-bezier(.175,.885,.32,1)}}@-webkit-keyframes slideInDown{to{transform:translate3d(0,0,0)}}@keyframes slideInDown{from{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}@-webkit-keyframes slideInLeft{to{transform:translate3d(0,0,0)}}@keyframes slideInLeft{from{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}@-webkit-keyframes slideInRight{to{transform:translate3d(0,0,0)}}@keyframes slideInRight{from{transform:translate3d(100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}@-webkit-keyframes slideInUp{to{transform:translate3d(0,0,0)}}@keyframes slideInUp{from{transform:translate3d(0,100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}@-webkit-keyframes slideOutDown{to{visibility:hidden;transform:translate3d(0,100%,0)}}@keyframes slideOutDown{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}@-webkit-keyframes slideOutLeft{to{visibility:hidden;transform:translate3d(-100%,0,0)}}@keyframes slideOutLeft{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}@-webkit-keyframes slideOutRight{to{visibility:hidden;transform:translate3d(100%,0,0)}}@keyframes slideOutRight{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}@-webkit-keyframes slideOutUp{to{visibility:hidden;transform:translate3d(0,-100%,0)}}@keyframes slideOutUp{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInDown{to{opacity:1;transform:translate3d(0,0,0)}}@keyframes fadeInDown{from{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}@-webkit-keyframes fadeInDownBig{to{opacity:1;transform:translate3d(0,0,0)}}@keyframes fadeInDownBig{from{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:translate3d(0,0,0)}}@-webkit-keyframes fadeInLeft{to{opacity:1;transform:translate3d(0,0,0)}}@keyframes fadeInLeft{from{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}@-webkit-keyframes fadeInLeftBig{to{opacity:1;transform:translate3d(0,0,0)}}@keyframes fadeInLeftBig{from{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}@-webkit-keyframes fadeInRight{to{opacity:1;transform:translate3d(0,0,0)}}@keyframes fadeInRight{from{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}@-webkit-keyframes fadeInRightBig{to{opacity:1;transform:translate3d(0,0,0)}}@keyframes fadeInRightBig{from{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:translate3d(0,0,0)}}@-webkit-keyframes fadeInUp{to{opacity:1;transform:translate3d(0,0,0)}}@keyframes fadeInUp{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:translate3d(0,0,0)}}@-webkit-keyframes fadeInUpBig{to{opacity:1;transform:translate3d(0,0,0)}}@keyframes fadeInUpBig{from{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:translate3d(0,0,0)}}@-webkit-keyframes fadeOut{to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@-webkit-keyframes fadeOutDown{to{opacity:0;transform:translate3d(0,100%,0)}}@keyframes fadeOutDown{from{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}@-webkit-keyframes fadeOutDownBig{to{opacity:0;transform:translate3d(0,2000px,0)}}@keyframes fadeOutDownBig{from{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}@-webkit-keyframes fadeOutLeft{to{opacity:0;transform:translate3d(-100%,0,0)}}@keyframes fadeOutLeft{from{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}@-webkit-keyframes fadeOutLeftBig{to{opacity:0;transform:translate3d(-2000px,0,0)}}@keyframes fadeOutLeftBig{from{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}@-webkit-keyframes fadeOutRight{to{opacity:0;transform:translate3d(100%,0,0)}}@keyframes fadeOutRight{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}@-webkit-keyframes fadeOutRightBig{to{opacity:0;transform:translate3d(2000px,0,0)}}@keyframes fadeOutRightBig{from{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}@-webkit-keyframes fadeOutUp{to{opacity:0;transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{from{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeOutUpBig{to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes fadeOutUpBig{from{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}@media (max-width:767px){.md\\:bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.md\\:border-gray-200{--border-opacity:1;border-color:#edf2f7;border-color:rgba(237,242,247,var(--border-opacity))}.md\\:border-t{border-top-width:1px}.md\\:border-b{border-bottom-width:1px}.md\\:block{display:block}.md\\:hidden{display:none}.md\\:flex-col{flex-direction:column}.md\\:items-center{align-items:center}.md\\:h-screen{height:100vh}.md\\:mt-16{margin-top:4rem}.md\\:-ml-64{margin-left:-16rem}.md\\:p-10{padding:2.5rem}.md\\:fixed{position:fixed}.md\\:top-0{top:0}.md\\:left-0{left:0}.md\\:shadow-xl{box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04)}.md\\:w-full{width:100%}.md\\:z-20{z-index:20}.md\\:z-30{z-index:30}}@media (max-width:1023px){.lg\\:flex-col{flex-direction:column}.lg\\:h-auto{height:auto}.lg\\:mr-0{margin-right:0}.lg\\:mb-5{margin-bottom:1.25rem}.lg\\:mb-6{margin-bottom:1.5rem}.lg\\:w-auto{width:auto}.lg\\:w-full{width:100%}.lg\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:col-span-1{grid-column:span 1/span 1}.lg\\:col-span-2{grid-column:span 2/span 2}}@media (max-width:1279px){.xl\\:mt-1{margin-top:.25rem}.xl\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.xl\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.xl\\:col-span-1{grid-column:span 1/span 1}.xl\\:col-span-2{grid-column:span 2/span 2}}[class*=lang-] script[type='text/plain'],[class*=language-] script[type='text/plain'],script[type='text/plain'][class*=lang-],script[type='text/plain'][class*=language-]{display:block;font:100% Consolas,Monaco,monospace;white-space:pre;overflow:auto}\n  │                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ^\n  ╵\n  resources\\admin\\sass\\app.scss 1:26515  root stylesheet\n    at processResult (C:\\laragon\\www\\BeerOClock\\node_modules\\webpack\\lib\\NormalModule.js:690:19)\n    at C:\\laragon\\www\\BeerOClock\\node_modules\\webpack\\lib\\NormalModule.js:792:5\n    at C:\\laragon\\www\\BeerOClock\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at C:\\laragon\\www\\BeerOClock\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (C:\\laragon\\www\\BeerOClock\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at C:\\laragon\\www\\BeerOClock\\node_modules\\sass-loader\\dist\\index.js:54:7\n    at Function.call$2 (C:\\laragon\\www\\BeerOClock\\node_modules\\sass\\sass.dart.js:92612:16)\n    at _render_closure1.call$2 (C:\\laragon\\www\\BeerOClock\\node_modules\\sass\\sass.dart.js:81115:12)\n    at _RootZone.runBinary$3$3 (C:\\laragon\\www\\BeerOClock\\node_modules\\sass\\sass.dart.js:27260:18)\n    at _FutureListener.handleError$1 (C:\\laragon\\www\\BeerOClock\\node_modules\\sass\\sass.dart.js:25816:19)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/showcase/js/app": 0,
/******/ 			"showcase/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["showcase/css/app"], () => (__webpack_require__("./resources/showcase/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["showcase/css/app"], () => (__webpack_require__("./resources/showcase/sass/app.sass")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["showcase/css/app"], () => (__webpack_require__("./resources/admin/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;