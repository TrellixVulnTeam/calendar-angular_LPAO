(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

  function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_context-menu_module_ts"], {
    /***/
    51606: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "A11yModule": function A11yModule() {
          return (
            /* binding */
            _A11yModule
          );
        },

        /* harmony export */
        "ActiveDescendantKeyManager": function ActiveDescendantKeyManager() {
          return (
            /* binding */
            _ActiveDescendantKeyManager
          );
        },

        /* harmony export */
        "AriaDescriber": function AriaDescriber() {
          return (
            /* binding */
            _AriaDescriber
          );
        },

        /* harmony export */
        "CDK_DESCRIBEDBY_HOST_ATTRIBUTE": function CDK_DESCRIBEDBY_HOST_ATTRIBUTE() {
          return (
            /* binding */
            _CDK_DESCRIBEDBY_HOST_ATTRIBUTE
          );
        },

        /* harmony export */
        "CDK_DESCRIBEDBY_ID_PREFIX": function CDK_DESCRIBEDBY_ID_PREFIX() {
          return (
            /* binding */
            _CDK_DESCRIBEDBY_ID_PREFIX
          );
        },

        /* harmony export */
        "CdkAriaLive": function CdkAriaLive() {
          return (
            /* binding */
            _CdkAriaLive
          );
        },

        /* harmony export */
        "CdkMonitorFocus": function CdkMonitorFocus() {
          return (
            /* binding */
            _CdkMonitorFocus
          );
        },

        /* harmony export */
        "CdkTrapFocus": function CdkTrapFocus() {
          return (
            /* binding */
            _CdkTrapFocus
          );
        },

        /* harmony export */
        "ConfigurableFocusTrap": function ConfigurableFocusTrap() {
          return (
            /* binding */
            _ConfigurableFocusTrap
          );
        },

        /* harmony export */
        "ConfigurableFocusTrapFactory": function ConfigurableFocusTrapFactory() {
          return (
            /* binding */
            _ConfigurableFocusTrapFactory
          );
        },

        /* harmony export */
        "EventListenerFocusTrapInertStrategy": function EventListenerFocusTrapInertStrategy() {
          return (
            /* binding */
            _EventListenerFocusTrapInertStrategy
          );
        },

        /* harmony export */
        "FOCUS_MONITOR_DEFAULT_OPTIONS": function FOCUS_MONITOR_DEFAULT_OPTIONS() {
          return (
            /* binding */
            _FOCUS_MONITOR_DEFAULT_OPTIONS
          );
        },

        /* harmony export */
        "FOCUS_TRAP_INERT_STRATEGY": function FOCUS_TRAP_INERT_STRATEGY() {
          return (
            /* binding */
            _FOCUS_TRAP_INERT_STRATEGY
          );
        },

        /* harmony export */
        "FocusKeyManager": function FocusKeyManager() {
          return (
            /* binding */
            _FocusKeyManager
          );
        },

        /* harmony export */
        "FocusMonitor": function FocusMonitor() {
          return (
            /* binding */
            _FocusMonitor
          );
        },

        /* harmony export */
        "FocusTrap": function FocusTrap() {
          return (
            /* binding */
            _FocusTrap
          );
        },

        /* harmony export */
        "FocusTrapFactory": function FocusTrapFactory() {
          return (
            /* binding */
            _FocusTrapFactory
          );
        },

        /* harmony export */
        "HighContrastModeDetector": function HighContrastModeDetector() {
          return (
            /* binding */
            _HighContrastModeDetector
          );
        },

        /* harmony export */
        "INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS": function INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS() {
          return (
            /* binding */
            _INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS
          );
        },

        /* harmony export */
        "INPUT_MODALITY_DETECTOR_OPTIONS": function INPUT_MODALITY_DETECTOR_OPTIONS() {
          return (
            /* binding */
            _INPUT_MODALITY_DETECTOR_OPTIONS
          );
        },

        /* harmony export */
        "InputModalityDetector": function InputModalityDetector() {
          return (
            /* binding */
            _InputModalityDetector
          );
        },

        /* harmony export */
        "InteractivityChecker": function InteractivityChecker() {
          return (
            /* binding */
            _InteractivityChecker
          );
        },

        /* harmony export */
        "IsFocusableConfig": function IsFocusableConfig() {
          return (
            /* binding */
            _IsFocusableConfig
          );
        },

        /* harmony export */
        "LIVE_ANNOUNCER_DEFAULT_OPTIONS": function LIVE_ANNOUNCER_DEFAULT_OPTIONS() {
          return (
            /* binding */
            _LIVE_ANNOUNCER_DEFAULT_OPTIONS
          );
        },

        /* harmony export */
        "LIVE_ANNOUNCER_ELEMENT_TOKEN": function LIVE_ANNOUNCER_ELEMENT_TOKEN() {
          return (
            /* binding */
            _LIVE_ANNOUNCER_ELEMENT_TOKEN
          );
        },

        /* harmony export */
        "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY": function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
          return (
            /* binding */
            _LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
          );
        },

        /* harmony export */
        "ListKeyManager": function ListKeyManager() {
          return (
            /* binding */
            _ListKeyManager
          );
        },

        /* harmony export */
        "LiveAnnouncer": function LiveAnnouncer() {
          return (
            /* binding */
            _LiveAnnouncer
          );
        },

        /* harmony export */
        "MESSAGES_CONTAINER_ID": function MESSAGES_CONTAINER_ID() {
          return (
            /* binding */
            _MESSAGES_CONTAINER_ID
          );
        },

        /* harmony export */
        "isFakeMousedownFromScreenReader": function isFakeMousedownFromScreenReader() {
          return (
            /* binding */
            _isFakeMousedownFromScreenReader
          );
        },

        /* harmony export */
        "isFakeTouchstartFromScreenReader": function isFakeTouchstartFromScreenReader() {
          return (
            /* binding */
            _isFakeTouchstartFromScreenReader
          );
        },

        /* harmony export */
        "ɵangular_material_src_cdk_a11y_a11y_a": function ɵangular_material_src_cdk_a11y_a11y_a() {
          return (
            /* binding */
            FocusTrapManager
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      77127);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! rxjs */
      69606);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs */
      47599);
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      90084);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      39349);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      71775);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      76477);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      49005);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      35116);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      99454);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs/operators */
      52249);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs/operators */
      44094);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/platform */
      36145);
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/cdk/observers */
      90851);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** IDs are delimited by an empty space, as per the spec. */


      var ID_DELIMITER = ' ';
      /**
       * Adds the given ID to the specified ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       */

      function addAriaReferencedId(el, attr, id) {
        var ids = getAriaReferenceIds(el, attr);

        if (ids.some(function (existingId) {
          return existingId.trim() == id.trim();
        })) {
          return;
        }

        ids.push(id.trim());
        el.setAttribute(attr, ids.join(ID_DELIMITER));
      }
      /**
       * Removes the given ID from the specified ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       */


      function removeAriaReferencedId(el, attr, id) {
        var ids = getAriaReferenceIds(el, attr);
        var filteredIds = ids.filter(function (val) {
          return val != id.trim();
        });

        if (filteredIds.length) {
          el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
        } else {
          el.removeAttribute(attr);
        }
      }
      /**
       * Gets the list of IDs referenced by the given ARIA attribute on an element.
       * Used for attributes such as aria-labelledby, aria-owns, etc.
       */


      function getAriaReferenceIds(el, attr) {
        // Get string array of all individual ids (whitespace delimited) in the attribute value
        return (el.getAttribute(attr) || '').match(/\S+/g) || [];
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** ID used for the body container where all messages are appended. */


      var _MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
      /** ID prefix used for each created message element. */

      var _CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
      /** Attribute given to each host element that is described by a message element. */

      var _CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
      /** Global incremental identifier for each registered message element. */

      var nextId = 0;
      /** Global map of all registered message elements that have been placed into the document. */

      var messageRegistry = new Map();
      /** Container for all registered messages. */

      var messagesContainer = null;
      /**
       * Utility that creates visually hidden elements with a message content. Useful for elements that
       * want to use aria-describedby to further describe themselves without adding additional visual
       * content.
       */

      var _AriaDescriber = /*#__PURE__*/function () {
        function _AriaDescriber(_document) {
          _classCallCheck(this, _AriaDescriber);

          this._document = _document;
        }

        _createClass(_AriaDescriber, [{
          key: "describe",
          value: function describe(hostElement, message, role) {
            if (!this._canBeDescribed(hostElement, message)) {
              return;
            }

            var key = getKey(message, role);

            if (typeof message !== 'string') {
              // We need to ensure that the element has an ID.
              setMessageId(message);
              messageRegistry.set(key, {
                messageElement: message,
                referenceCount: 0
              });
            } else if (!messageRegistry.has(key)) {
              this._createMessageElement(message, role);
            }

            if (!this._isElementDescribedByMessage(hostElement, key)) {
              this._addMessageReference(hostElement, key);
            }
          }
        }, {
          key: "removeDescription",
          value: function removeDescription(hostElement, message, role) {
            if (!message || !this._isElementNode(hostElement)) {
              return;
            }

            var key = getKey(message, role);

            if (this._isElementDescribedByMessage(hostElement, key)) {
              this._removeMessageReference(hostElement, key);
            } // If the message is a string, it means that it's one that we created for the
            // consumer so we can remove it safely, otherwise we should leave it in place.


            if (typeof message === 'string') {
              var registeredMessage = messageRegistry.get(key);

              if (registeredMessage && registeredMessage.referenceCount === 0) {
                this._deleteMessageElement(key);
              }
            }

            if (messagesContainer && messagesContainer.childNodes.length === 0) {
              this._deleteMessagesContainer();
            }
          }
          /** Unregisters all created message elements and removes the message container. */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var describedElements = this._document.querySelectorAll("[".concat(_CDK_DESCRIBEDBY_HOST_ATTRIBUTE, "]"));

            for (var i = 0; i < describedElements.length; i++) {
              this._removeCdkDescribedByReferenceIds(describedElements[i]);

              describedElements[i].removeAttribute(_CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
            }

            if (messagesContainer) {
              this._deleteMessagesContainer();
            }

            messageRegistry.clear();
          }
          /**
           * Creates a new element in the visually hidden message container element with the message
           * as its content and adds it to the message registry.
           */

        }, {
          key: "_createMessageElement",
          value: function _createMessageElement(message, role) {
            var messageElement = this._document.createElement('div');

            setMessageId(messageElement);
            messageElement.textContent = message;

            if (role) {
              messageElement.setAttribute('role', role);
            }

            this._createMessagesContainer();

            messagesContainer.appendChild(messageElement);
            messageRegistry.set(getKey(message, role), {
              messageElement: messageElement,
              referenceCount: 0
            });
          }
          /** Deletes the message element from the global messages container. */

        }, {
          key: "_deleteMessageElement",
          value: function _deleteMessageElement(key) {
            var registeredMessage = messageRegistry.get(key);
            var messageElement = registeredMessage && registeredMessage.messageElement;

            if (messagesContainer && messageElement) {
              messagesContainer.removeChild(messageElement);
            }

            messageRegistry["delete"](key);
          }
          /** Creates the global container for all aria-describedby messages. */

        }, {
          key: "_createMessagesContainer",
          value: function _createMessagesContainer() {
            if (!messagesContainer) {
              var preExistingContainer = this._document.getElementById(_MESSAGES_CONTAINER_ID); // When going from the server to the client, we may end up in a situation where there's
              // already a container on the page, but we don't have a reference to it. Clear the
              // old container so we don't get duplicates. Doing this, instead of emptying the previous
              // container, should be slightly faster.


              if (preExistingContainer && preExistingContainer.parentNode) {
                preExistingContainer.parentNode.removeChild(preExistingContainer);
              }

              messagesContainer = this._document.createElement('div');
              messagesContainer.id = _MESSAGES_CONTAINER_ID; // We add `visibility: hidden` in order to prevent text in this container from
              // being searchable by the browser's Ctrl + F functionality.
              // Screen-readers will still read the description for elements with aria-describedby even
              // when the description element is not visible.

              messagesContainer.style.visibility = 'hidden'; // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
              // the description element doesn't impact page layout.

              messagesContainer.classList.add('cdk-visually-hidden');

              this._document.body.appendChild(messagesContainer);
            }
          }
          /** Deletes the global messages container. */

        }, {
          key: "_deleteMessagesContainer",
          value: function _deleteMessagesContainer() {
            if (messagesContainer && messagesContainer.parentNode) {
              messagesContainer.parentNode.removeChild(messagesContainer);
              messagesContainer = null;
            }
          }
          /** Removes all cdk-describedby messages that are hosted through the element. */

        }, {
          key: "_removeCdkDescribedByReferenceIds",
          value: function _removeCdkDescribedByReferenceIds(element) {
            // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
            var originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(function (id) {
              return id.indexOf(_CDK_DESCRIBEDBY_ID_PREFIX) != 0;
            });
            element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
          }
          /**
           * Adds a message reference to the element using aria-describedby and increments the registered
           * message's reference count.
           */

        }, {
          key: "_addMessageReference",
          value: function _addMessageReference(element, key) {
            var registeredMessage = messageRegistry.get(key); // Add the aria-describedby reference and set the
            // describedby_host attribute to mark the element.

            addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
            element.setAttribute(_CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
            registeredMessage.referenceCount++;
          }
          /**
           * Removes a message reference from the element using aria-describedby
           * and decrements the registered message's reference count.
           */

        }, {
          key: "_removeMessageReference",
          value: function _removeMessageReference(element, key) {
            var registeredMessage = messageRegistry.get(key);
            registeredMessage.referenceCount--;
            removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
            element.removeAttribute(_CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
          }
          /** Returns true if the element has been described by the provided message ID. */

        }, {
          key: "_isElementDescribedByMessage",
          value: function _isElementDescribedByMessage(element, key) {
            var referenceIds = getAriaReferenceIds(element, 'aria-describedby');
            var registeredMessage = messageRegistry.get(key);
            var messageId = registeredMessage && registeredMessage.messageElement.id;
            return !!messageId && referenceIds.indexOf(messageId) != -1;
          }
          /** Determines whether a message can be described on a particular element. */

        }, {
          key: "_canBeDescribed",
          value: function _canBeDescribed(element, message) {
            if (!this._isElementNode(element)) {
              return false;
            }

            if (message && typeof message === 'object') {
              // We'd have to make some assumptions about the description element's text, if the consumer
              // passed in an element. Assume that if an element is passed in, the consumer has verified
              // that it can be used as a description.
              return true;
            }

            var trimmedMessage = message == null ? '' : "".concat(message).trim();
            var ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
            // element, because screen readers will end up reading out the same text twice in a row.

            return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
          }
          /** Checks whether a node is an Element node. */

        }, {
          key: "_isElementNode",
          value: function _isElementNode(element) {
            return element.nodeType === this._document.ELEMENT_NODE;
          }
        }]);

        return _AriaDescriber;
      }();

      _AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
        return new (t || _AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };

      _AriaDescriber.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function AriaDescriber_Factory() {
          return new _AriaDescriber(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
        },
        token: _AriaDescriber,
        providedIn: "root"
      });

      _AriaDescriber.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_AriaDescriber, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }]
          }];
        }, null);
      })();
      /** Gets a key that can be used to look messages up in the registry. */


      function getKey(message, role) {
        return typeof message === 'string' ? "".concat(role || '', "/").concat(message) : message;
      }
      /** Assigns a unique ID to an element, if it doesn't have one already. */


      function setMessageId(element) {
        if (!element.id) {
          element.id = "".concat(_CDK_DESCRIBEDBY_ID_PREFIX, "-").concat(nextId++);
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * This class manages keyboard events for selectable lists. If you pass it a query list
       * of items, it will set the active item correctly when arrow events occur.
       */


      var _ListKeyManager = /*#__PURE__*/function () {
        function _ListKeyManager(_items) {
          var _this2 = this;

          _classCallCheck(this, _ListKeyManager);

          this._items = _items;
          this._activeItemIndex = -1;
          this._activeItem = null;
          this._wrap = false;
          this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription.EMPTY;
          this._vertical = true;
          this._allowedModifierKeys = [];
          this._homeAndEnd = false;
          /**
           * Predicate function that can be used to check whether an item should be skipped
           * by the key manager. By default, disabled items are skipped.
           */

          this._skipPredicateFn = function (item) {
            return item.disabled;
          }; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


          this._pressedLetters = [];
          /**
           * Stream that emits any time the TAB key is pressed, so components can react
           * when focus is shifted off of the list.
           */

          this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          /** Stream that emits whenever the active item of the list manager changes. */

          this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(); // We allow for the items to be an array because, in some cases, the consumer may
          // not have access to a QueryList of the items they want to manage (e.g. when the
          // items aren't being collected via `ViewChildren` or `ContentChildren`).

          if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
            _items.changes.subscribe(function (newItems) {
              if (_this2._activeItem) {
                var itemArray = newItems.toArray();
                var newIndex = itemArray.indexOf(_this2._activeItem);

                if (newIndex > -1 && newIndex !== _this2._activeItemIndex) {
                  _this2._activeItemIndex = newIndex;
                }
              }
            });
          }
        }
        /**
         * Sets the predicate function that determines which items should be skipped by the
         * list key manager.
         * @param predicate Function that determines whether the given item should be skipped.
         */


        _createClass(_ListKeyManager, [{
          key: "skipPredicate",
          value: function skipPredicate(predicate) {
            this._skipPredicateFn = predicate;
            return this;
          }
          /**
           * Configures wrapping mode, which determines whether the active item will wrap to
           * the other end of list when there are no more items in the given direction.
           * @param shouldWrap Whether the list should wrap when reaching the end.
           */

        }, {
          key: "withWrap",
          value: function withWrap() {
            var shouldWrap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._wrap = shouldWrap;
            return this;
          }
          /**
           * Configures whether the key manager should be able to move the selection vertically.
           * @param enabled Whether vertical selection should be enabled.
           */

        }, {
          key: "withVerticalOrientation",
          value: function withVerticalOrientation() {
            var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._vertical = enabled;
            return this;
          }
          /**
           * Configures the key manager to move the selection horizontally.
           * Passing in `null` will disable horizontal movement.
           * @param direction Direction in which the selection can be moved.
           */

        }, {
          key: "withHorizontalOrientation",
          value: function withHorizontalOrientation(direction) {
            this._horizontal = direction;
            return this;
          }
          /**
           * Modifier keys which are allowed to be held down and whose default actions will be prevented
           * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
           */

        }, {
          key: "withAllowedModifierKeys",
          value: function withAllowedModifierKeys(keys) {
            this._allowedModifierKeys = keys;
            return this;
          }
          /**
           * Turns on typeahead mode which allows users to set the active item by typing.
           * @param debounceInterval Time to wait after the last keystroke before setting the active item.
           */

        }, {
          key: "withTypeAhead",
          value: function withTypeAhead() {
            var _this3 = this;

            var debounceInterval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;

            if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._items.length && this._items.some(function (item) {
              return typeof item.getLabel !== 'function';
            })) {
              throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
            }

            this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
            // and convert those letters back into a string. Afterwards find the first item that starts
            // with that string and select it.


            this._typeaheadSubscription = this._letterKeyStream.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (letter) {
              return _this3._pressedLetters.push(letter);
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(debounceInterval), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(function () {
              return _this3._pressedLetters.length > 0;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(function () {
              return _this3._pressedLetters.join('');
            })).subscribe(function (inputString) {
              var items = _this3._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
              // following the current active item.


              for (var i = 1; i < items.length + 1; i++) {
                var index = (_this3._activeItemIndex + i) % items.length;
                var item = items[index];

                if (!_this3._skipPredicateFn(item) && item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
                  _this3.setActiveItem(index);

                  break;
                }
              }

              _this3._pressedLetters = [];
            });
            return this;
          }
          /**
           * Configures the key manager to activate the first and last items
           * respectively when the Home or End key is pressed.
           * @param enabled Whether pressing the Home or End key activates the first/last item.
           */

        }, {
          key: "withHomeAndEnd",
          value: function withHomeAndEnd() {
            var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._homeAndEnd = enabled;
            return this;
          }
        }, {
          key: "setActiveItem",
          value: function setActiveItem(item) {
            var previousActiveItem = this._activeItem;
            this.updateActiveItem(item);

            if (this._activeItem !== previousActiveItem) {
              this.change.next(this._activeItemIndex);
            }
          }
          /**
           * Sets the active item depending on the key event passed in.
           * @param event Keyboard event to be used for determining which element should be active.
           */

        }, {
          key: "onKeydown",
          value: function onKeydown(event) {
            var _this4 = this;

            var keyCode = event.keyCode;
            var modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
            var isModifierAllowed = modifiers.every(function (modifier) {
              return !event[modifier] || _this4._allowedModifierKeys.indexOf(modifier) > -1;
            });

            switch (keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.TAB:
                this.tabOut.next();
                return;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.DOWN_ARROW:
                if (this._vertical && isModifierAllowed) {
                  this.setNextItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.UP_ARROW:
                if (this._vertical && isModifierAllowed) {
                  this.setPreviousItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.RIGHT_ARROW:
                if (this._horizontal && isModifierAllowed) {
                  this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.LEFT_ARROW:
                if (this._horizontal && isModifierAllowed) {
                  this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.HOME:
                if (this._homeAndEnd && isModifierAllowed) {
                  this.setFirstItemActive();
                  break;
                } else {
                  return;
                }

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.END:
                if (this._homeAndEnd && isModifierAllowed) {
                  this.setLastItemActive();
                  break;
                } else {
                  return;
                }

              default:
                if (isModifierAllowed || (0, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.hasModifierKey)(event, 'shiftKey')) {
                  // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                  // otherwise fall back to resolving alphanumeric characters via the keyCode.
                  if (event.key && event.key.length === 1) {
                    this._letterKeyStream.next(event.key.toLocaleUpperCase());
                  } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.A && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.Z || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ZERO && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.NINE) {
                    this._letterKeyStream.next(String.fromCharCode(keyCode));
                  }
                } // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.


                return;
            }

            this._pressedLetters = [];
            event.preventDefault();
          }
          /** Index of the currently active item. */

        }, {
          key: "activeItemIndex",
          get: function get() {
            return this._activeItemIndex;
          }
          /** The active item. */

        }, {
          key: "activeItem",
          get: function get() {
            return this._activeItem;
          }
          /** Gets whether the user is currently typing into the manager using the typeahead feature. */

        }, {
          key: "isTyping",
          value: function isTyping() {
            return this._pressedLetters.length > 0;
          }
          /** Sets the active item to the first enabled item in the list. */

        }, {
          key: "setFirstItemActive",
          value: function setFirstItemActive() {
            this._setActiveItemByIndex(0, 1);
          }
          /** Sets the active item to the last enabled item in the list. */

        }, {
          key: "setLastItemActive",
          value: function setLastItemActive() {
            this._setActiveItemByIndex(this._items.length - 1, -1);
          }
          /** Sets the active item to the next enabled item in the list. */

        }, {
          key: "setNextItemActive",
          value: function setNextItemActive() {
            this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
          }
          /** Sets the active item to a previous enabled item in the list. */

        }, {
          key: "setPreviousItemActive",
          value: function setPreviousItemActive() {
            this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
          }
        }, {
          key: "updateActiveItem",
          value: function updateActiveItem(item) {
            var itemArray = this._getItemsArray();

            var index = typeof item === 'number' ? item : itemArray.indexOf(item);
            var activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

            this._activeItem = activeItem == null ? null : activeItem;
            this._activeItemIndex = index;
          }
          /**
           * This method sets the active item, given a list of items and the delta between the
           * currently active item and the new active item. It will calculate differently
           * depending on whether wrap mode is turned on.
           */

        }, {
          key: "_setActiveItemByDelta",
          value: function _setActiveItemByDelta(delta) {
            this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
          }
          /**
           * Sets the active item properly given "wrap" mode. In other words, it will continue to move
           * down the list until it finds an item that is not disabled, and it will wrap if it
           * encounters either end of the list.
           */

        }, {
          key: "_setActiveInWrapMode",
          value: function _setActiveInWrapMode(delta) {
            var items = this._getItemsArray();

            for (var i = 1; i <= items.length; i++) {
              var index = (this._activeItemIndex + delta * i + items.length) % items.length;
              var item = items[index];

              if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
              }
            }
          }
          /**
           * Sets the active item properly given the default mode. In other words, it will
           * continue to move down the list until it finds an item that is not disabled. If
           * it encounters either end of the list, it will stop and not wrap.
           */

        }, {
          key: "_setActiveInDefaultMode",
          value: function _setActiveInDefaultMode(delta) {
            this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
          }
          /**
           * Sets the active item to the first enabled item starting at the index specified. If the
           * item is disabled, it will move in the fallbackDelta direction until it either
           * finds an enabled item or encounters the end of the list.
           */

        }, {
          key: "_setActiveItemByIndex",
          value: function _setActiveItemByIndex(index, fallbackDelta) {
            var items = this._getItemsArray();

            if (!items[index]) {
              return;
            }

            while (this._skipPredicateFn(items[index])) {
              index += fallbackDelta;

              if (!items[index]) {
                return;
              }
            }

            this.setActiveItem(index);
          }
          /** Returns the items as an array. */

        }, {
          key: "_getItemsArray",
          value: function _getItemsArray() {
            return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList ? this._items.toArray() : this._items;
          }
        }]);

        return _ListKeyManager;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _ActiveDescendantKeyManager = /*#__PURE__*/function (_ListKeyManager2) {
        _inherits(_ActiveDescendantKeyManager, _ListKeyManager2);

        var _super2 = _createSuper(_ActiveDescendantKeyManager);

        function _ActiveDescendantKeyManager() {
          _classCallCheck(this, _ActiveDescendantKeyManager);

          return _super2.apply(this, arguments);
        }

        _createClass(_ActiveDescendantKeyManager, [{
          key: "setActiveItem",
          value: function setActiveItem(index) {
            if (this.activeItem) {
              this.activeItem.setInactiveStyles();
            }

            _get(_getPrototypeOf(_ActiveDescendantKeyManager.prototype), "setActiveItem", this).call(this, index);

            if (this.activeItem) {
              this.activeItem.setActiveStyles();
            }
          }
        }]);

        return _ActiveDescendantKeyManager;
      }(_ListKeyManager);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _FocusKeyManager = /*#__PURE__*/function (_ListKeyManager3) {
        _inherits(_FocusKeyManager, _ListKeyManager3);

        var _super3 = _createSuper(_FocusKeyManager);

        function _FocusKeyManager() {
          var _this5;

          _classCallCheck(this, _FocusKeyManager);

          _this5 = _super3.apply(this, arguments);
          _this5._origin = 'program';
          return _this5;
        }
        /**
         * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
         * @param origin Focus origin to be used when focusing items.
         */


        _createClass(_FocusKeyManager, [{
          key: "setFocusOrigin",
          value: function setFocusOrigin(origin) {
            this._origin = origin;
            return this;
          }
        }, {
          key: "setActiveItem",
          value: function setActiveItem(item) {
            _get(_getPrototypeOf(_FocusKeyManager.prototype), "setActiveItem", this).call(this, item);

            if (this.activeItem) {
              this.activeItem.focus(this._origin);
            }
          }
        }]);

        return _FocusKeyManager;
      }(_ListKeyManager);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Configuration for the isFocusable method.
       */


      var _IsFocusableConfig = function _IsFocusableConfig() {
        _classCallCheck(this, _IsFocusableConfig);

        /**
         * Whether to count an element as focusable even if it is not currently visible.
         */
        this.ignoreVisibility = false;
      }; // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
      // Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
      // supported.

      /**
       * Utility for checking the interactivity of an element, such as whether is is focusable or
       * tabbable.
       */


      var _InteractivityChecker = /*#__PURE__*/function () {
        function _InteractivityChecker(_platform) {
          _classCallCheck(this, _InteractivityChecker);

          this._platform = _platform;
        }
        /**
         * Gets whether an element is disabled.
         *
         * @param element Element to be checked.
         * @returns Whether the element is disabled.
         */


        _createClass(_InteractivityChecker, [{
          key: "isDisabled",
          value: function isDisabled(element) {
            // This does not capture some cases, such as a non-form control with a disabled attribute or
            // a form control inside of a disabled form, but should capture the most common cases.
            return element.hasAttribute('disabled');
          }
          /**
           * Gets whether an element is visible for the purposes of interactivity.
           *
           * This will capture states like `display: none` and `visibility: hidden`, but not things like
           * being clipped by an `overflow: hidden` parent or being outside the viewport.
           *
           * @returns Whether the element is visible.
           */

        }, {
          key: "isVisible",
          value: function isVisible(element) {
            return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
          }
          /**
           * Gets whether an element can be reached via Tab key.
           * Assumes that the element has already been checked with isFocusable.
           *
           * @param element Element to be checked.
           * @returns Whether the element is tabbable.
           */

        }, {
          key: "isTabbable",
          value: function isTabbable(element) {
            // Nothing is tabbable on the server 😎
            if (!this._platform.isBrowser) {
              return false;
            }

            var frameElement = getFrameElement(getWindow(element));

            if (frameElement) {
              // Frame elements inherit their tabindex onto all child elements.
              if (getTabIndexValue(frameElement) === -1) {
                return false;
              } // Browsers disable tabbing to an element inside of an invisible frame.


              if (!this.isVisible(frameElement)) {
                return false;
              }
            }

            var nodeName = element.nodeName.toLowerCase();
            var tabIndexValue = getTabIndexValue(element);

            if (element.hasAttribute('contenteditable')) {
              return tabIndexValue !== -1;
            }

            if (nodeName === 'iframe' || nodeName === 'object') {
              // The frame or object's content may be tabbable depending on the content, but it's
              // not possibly to reliably detect the content of the frames. We always consider such
              // elements as non-tabbable.
              return false;
            } // In iOS, the browser only considers some specific elements as tabbable.


            if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
              return false;
            }

            if (nodeName === 'audio') {
              // Audio elements without controls enabled are never tabbable, regardless
              // of the tabindex attribute explicitly being set.
              if (!element.hasAttribute('controls')) {
                return false;
              } // Audio elements with controls are by default tabbable unless the
              // tabindex attribute is set to `-1` explicitly.


              return tabIndexValue !== -1;
            }

            if (nodeName === 'video') {
              // For all video elements, if the tabindex attribute is set to `-1`, the video
              // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
              // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
              // tabindex attribute is the source of truth here.
              if (tabIndexValue === -1) {
                return false;
              } // If the tabindex is explicitly set, and not `-1` (as per check before), the
              // video element is always tabbable (regardless of whether it has controls or not).


              if (tabIndexValue !== null) {
                return true;
              } // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
              // has controls enabled. Firefox is special as videos are always tabbable regardless
              // of whether there are controls or not.


              return this._platform.FIREFOX || element.hasAttribute('controls');
            }

            return element.tabIndex >= 0;
          }
          /**
           * Gets whether an element can be focused by the user.
           *
           * @param element Element to be checked.
           * @param config The config object with options to customize this method's behavior
           * @returns Whether the element is focusable.
           */

        }, {
          key: "isFocusable",
          value: function isFocusable(element, config) {
            // Perform checks in order of left to most expensive.
            // Again, naive approach that does not capture many edge cases and browser quirks.
            return isPotentiallyFocusable(element) && !this.isDisabled(element) && ((config === null || config === void 0 ? void 0 : config.ignoreVisibility) || this.isVisible(element));
          }
        }]);

        return _InteractivityChecker;
      }();

      _InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
        return new (t || _InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform));
      };

      _InteractivityChecker.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function InteractivityChecker_Factory() {
          return new _InteractivityChecker(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform));
        },
        token: _InteractivityChecker,
        providedIn: "root"
      });

      _InteractivityChecker.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_InteractivityChecker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
          }];
        }, null);
      })();
      /**
       * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
       * the frameElement property is being accessed from a different host address, this property
       * should be accessed carefully.
       */


      function getFrameElement(window) {
        try {
          return window.frameElement;
        } catch (_a) {
          return null;
        }
      }
      /** Checks whether the specified element has any geometry / rectangles. */


      function hasGeometry(element) {
        // Use logic from jQuery to check for an invisible element.
        // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
        return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
      }
      /** Gets whether an element's  */


      function isNativeFormElement(element) {
        var nodeName = element.nodeName.toLowerCase();
        return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
      }
      /** Gets whether an element is an `<input type="hidden">`. */


      function isHiddenInput(element) {
        return isInputElement(element) && element.type == 'hidden';
      }
      /** Gets whether an element is an anchor that has an href attribute. */


      function isAnchorWithHref(element) {
        return isAnchorElement(element) && element.hasAttribute('href');
      }
      /** Gets whether an element is an input element. */


      function isInputElement(element) {
        return element.nodeName.toLowerCase() == 'input';
      }
      /** Gets whether an element is an anchor element. */


      function isAnchorElement(element) {
        return element.nodeName.toLowerCase() == 'a';
      }
      /** Gets whether an element has a valid tabindex. */


      function hasValidTabIndex(element) {
        if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
          return false;
        }

        var tabIndex = element.getAttribute('tabindex'); // IE11 parses tabindex="" as the value "-32768"

        if (tabIndex == '-32768') {
          return false;
        }

        return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
      }
      /**
       * Returns the parsed tabindex from the element attributes instead of returning the
       * evaluated tabindex from the browsers defaults.
       */


      function getTabIndexValue(element) {
        if (!hasValidTabIndex(element)) {
          return null;
        } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054


        var tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
        return isNaN(tabIndex) ? -1 : tabIndex;
      }
      /** Checks whether the specified element is potentially tabbable on iOS */


      function isPotentiallyTabbableIOS(element) {
        var nodeName = element.nodeName.toLowerCase();
        var inputType = nodeName === 'input' && element.type;
        return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
      }
      /**
       * Gets whether an element is potentially focusable without taking current visible/disabled state
       * into account.
       */


      function isPotentiallyFocusable(element) {
        // Inputs are potentially focusable *unless* they're type="hidden".
        if (isHiddenInput(element)) {
          return false;
        }

        return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
      }
      /** Gets the parent window of a DOM node with regards of being inside of an iframe. */


      function getWindow(node) {
        // ownerDocument is null if `node` itself *is* a document.
        return node.ownerDocument && node.ownerDocument.defaultView || window;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class that allows for trapping focus within a DOM element.
       *
       * This class currently uses a relatively simple approach to focus trapping.
       * It assumes that the tab order is the same as DOM order, which is not necessarily true.
       * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to be misaligned.
       *
       * @deprecated Use `ConfigurableFocusTrap` instead.
       * @breaking-change 11.0.0
       */


      var _FocusTrap = /*#__PURE__*/function () {
        function _FocusTrap(_element, _checker, _ngZone, _document) {
          var _this6 = this;

          var deferAnchors = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

          _classCallCheck(this, _FocusTrap);

          this._element = _element;
          this._checker = _checker;
          this._ngZone = _ngZone;
          this._document = _document;
          this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

          this.startAnchorListener = function () {
            return _this6.focusLastTabbableElement();
          };

          this.endAnchorListener = function () {
            return _this6.focusFirstTabbableElement();
          };

          this._enabled = true;

          if (!deferAnchors) {
            this.attachAnchors();
          }
        }
        /** Whether the focus trap is active. */


        _createClass(_FocusTrap, [{
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            this._enabled = value;

            if (this._startAnchor && this._endAnchor) {
              this._toggleAnchorTabIndex(value, this._startAnchor);

              this._toggleAnchorTabIndex(value, this._endAnchor);
            }
          }
          /** Destroys the focus trap by cleaning up the anchors. */

        }, {
          key: "destroy",
          value: function destroy() {
            var startAnchor = this._startAnchor;
            var endAnchor = this._endAnchor;

            if (startAnchor) {
              startAnchor.removeEventListener('focus', this.startAnchorListener);

              if (startAnchor.parentNode) {
                startAnchor.parentNode.removeChild(startAnchor);
              }
            }

            if (endAnchor) {
              endAnchor.removeEventListener('focus', this.endAnchorListener);

              if (endAnchor.parentNode) {
                endAnchor.parentNode.removeChild(endAnchor);
              }
            }

            this._startAnchor = this._endAnchor = null;
            this._hasAttached = false;
          }
          /**
           * Inserts the anchors into the DOM. This is usually done automatically
           * in the constructor, but can be deferred for cases like directives with `*ngIf`.
           * @returns Whether the focus trap managed to attach successfully. This may not be the case
           * if the target element isn't currently in the DOM.
           */

        }, {
          key: "attachAnchors",
          value: function attachAnchors() {
            var _this7 = this;

            // If we're not on the browser, there can be no focus to trap.
            if (this._hasAttached) {
              return true;
            }

            this._ngZone.runOutsideAngular(function () {
              if (!_this7._startAnchor) {
                _this7._startAnchor = _this7._createAnchor();

                _this7._startAnchor.addEventListener('focus', _this7.startAnchorListener);
              }

              if (!_this7._endAnchor) {
                _this7._endAnchor = _this7._createAnchor();

                _this7._endAnchor.addEventListener('focus', _this7.endAnchorListener);
              }
            });

            if (this._element.parentNode) {
              this._element.parentNode.insertBefore(this._startAnchor, this._element);

              this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);

              this._hasAttached = true;
            }

            return this._hasAttached;
          }
          /**
           * Waits for the zone to stabilize, then either focuses the first element that the
           * user specified, or the first tabbable element.
           * @returns Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfully.
           */

        }, {
          key: "focusInitialElementWhenReady",
          value: function focusInitialElementWhenReady(options) {
            var _this8 = this;

            return new Promise(function (resolve) {
              _this8._executeOnStable(function () {
                return resolve(_this8.focusInitialElement(options));
              });
            });
          }
          /**
           * Waits for the zone to stabilize, then focuses
           * the first tabbable element within the focus trap region.
           * @returns Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfully.
           */

        }, {
          key: "focusFirstTabbableElementWhenReady",
          value: function focusFirstTabbableElementWhenReady(options) {
            var _this9 = this;

            return new Promise(function (resolve) {
              _this9._executeOnStable(function () {
                return resolve(_this9.focusFirstTabbableElement(options));
              });
            });
          }
          /**
           * Waits for the zone to stabilize, then focuses
           * the last tabbable element within the focus trap region.
           * @returns Returns a promise that resolves with a boolean, depending
           * on whether focus was moved successfully.
           */

        }, {
          key: "focusLastTabbableElementWhenReady",
          value: function focusLastTabbableElementWhenReady(options) {
            var _this10 = this;

            return new Promise(function (resolve) {
              _this10._executeOnStable(function () {
                return resolve(_this10.focusLastTabbableElement(options));
              });
            });
          }
          /**
           * Get the specified boundary element of the trapped region.
           * @param bound The boundary to get (start or end of trapped region).
           * @returns The boundary element.
           */

        }, {
          key: "_getRegionBoundary",
          value: function _getRegionBoundary(bound) {
            // Contains the deprecated version of selector, for temporary backwards comparability.
            var markers = this._element.querySelectorAll("[cdk-focus-region-".concat(bound, "], ") + "[cdkFocusRegion".concat(bound, "], ") + "[cdk-focus-".concat(bound, "]"));

            for (var i = 0; i < markers.length; i++) {
              // @breaking-change 8.0.0
              if (markers[i].hasAttribute("cdk-focus-".concat(bound))) {
                console.warn("Found use of deprecated attribute 'cdk-focus-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated ") + "attribute will be removed in 8.0.0.", markers[i]);
              } else if (markers[i].hasAttribute("cdk-focus-region-".concat(bound))) {
                console.warn("Found use of deprecated attribute 'cdk-focus-region-".concat(bound, "', ") + "use 'cdkFocusRegion".concat(bound, "' instead. The deprecated attribute ") + "will be removed in 8.0.0.", markers[i]);
              }
            }

            if (bound == 'start') {
              return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
            }

            return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
          }
          /**
           * Focuses the element that should be focused when the focus trap is initialized.
           * @returns Whether focus was moved successfully.
           */

        }, {
          key: "focusInitialElement",
          value: function focusInitialElement(options) {
            // Contains the deprecated version of selector, for temporary backwards comparability.
            var redirectToElement = this._element.querySelector("[cdk-focus-initial], " + "[cdkFocusInitial]");

            if (redirectToElement) {
              // @breaking-change 8.0.0
              if (redirectToElement.hasAttribute("cdk-focus-initial")) {
                console.warn("Found use of deprecated attribute 'cdk-focus-initial', " + "use 'cdkFocusInitial' instead. The deprecated attribute " + "will be removed in 8.0.0", redirectToElement);
              } // Warn the consumer if the element they've pointed to
              // isn't focusable, when not in production mode.


              if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
                console.warn("Element matching '[cdkFocusInitial]' is not focusable.", redirectToElement);
              }

              if (!this._checker.isFocusable(redirectToElement)) {
                var focusableChild = this._getFirstTabbableElement(redirectToElement);

                focusableChild === null || focusableChild === void 0 ? void 0 : focusableChild.focus(options);
                return !!focusableChild;
              }

              redirectToElement.focus(options);
              return true;
            }

            return this.focusFirstTabbableElement(options);
          }
          /**
           * Focuses the first tabbable element within the focus trap region.
           * @returns Whether focus was moved successfully.
           */

        }, {
          key: "focusFirstTabbableElement",
          value: function focusFirstTabbableElement(options) {
            var redirectToElement = this._getRegionBoundary('start');

            if (redirectToElement) {
              redirectToElement.focus(options);
            }

            return !!redirectToElement;
          }
          /**
           * Focuses the last tabbable element within the focus trap region.
           * @returns Whether focus was moved successfully.
           */

        }, {
          key: "focusLastTabbableElement",
          value: function focusLastTabbableElement(options) {
            var redirectToElement = this._getRegionBoundary('end');

            if (redirectToElement) {
              redirectToElement.focus(options);
            }

            return !!redirectToElement;
          }
          /**
           * Checks whether the focus trap has successfully been attached.
           */

        }, {
          key: "hasAttached",
          value: function hasAttached() {
            return this._hasAttached;
          }
          /** Get the first tabbable element from a DOM subtree (inclusive). */

        }, {
          key: "_getFirstTabbableElement",
          value: function _getFirstTabbableElement(root) {
            if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
              return root;
            } // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
            // back to `childNodes` which includes text nodes, comments etc.


            var children = root.children || root.childNodes;

            for (var i = 0; i < children.length; i++) {
              var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;

              if (tabbableChild) {
                return tabbableChild;
              }
            }

            return null;
          }
          /** Get the last tabbable element from a DOM subtree (inclusive). */

        }, {
          key: "_getLastTabbableElement",
          value: function _getLastTabbableElement(root) {
            if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
              return root;
            } // Iterate in reverse DOM order.


            var children = root.children || root.childNodes;

            for (var i = children.length - 1; i >= 0; i--) {
              var tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;

              if (tabbableChild) {
                return tabbableChild;
              }
            }

            return null;
          }
          /** Creates an anchor element. */

        }, {
          key: "_createAnchor",
          value: function _createAnchor() {
            var anchor = this._document.createElement('div');

            this._toggleAnchorTabIndex(this._enabled, anchor);

            anchor.classList.add('cdk-visually-hidden');
            anchor.classList.add('cdk-focus-trap-anchor');
            anchor.setAttribute('aria-hidden', 'true');
            return anchor;
          }
          /**
           * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
           * @param isEnabled Whether the focus trap is enabled.
           * @param anchor Anchor on which to toggle the tabindex.
           */

        }, {
          key: "_toggleAnchorTabIndex",
          value: function _toggleAnchorTabIndex(isEnabled, anchor) {
            // Remove the tabindex completely, rather than setting it to -1, because if the
            // element has a tabindex, the user might still hit it when navigating with the arrow keys.
            isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
          }
          /**
           * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
           * @param enabled: Whether the anchors should trap Tab.
           */

        }, {
          key: "toggleAnchors",
          value: function toggleAnchors(enabled) {
            if (this._startAnchor && this._endAnchor) {
              this._toggleAnchorTabIndex(enabled, this._startAnchor);

              this._toggleAnchorTabIndex(enabled, this._endAnchor);
            }
          }
          /** Executes a function when the zone is stable. */

        }, {
          key: "_executeOnStable",
          value: function _executeOnStable(fn) {
            if (this._ngZone.isStable) {
              fn();
            } else {
              this._ngZone.onStable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(fn);
            }
          }
        }]);

        return _FocusTrap;
      }();
      /**
       * Factory that allows easy instantiation of focus traps.
       * @deprecated Use `ConfigurableFocusTrapFactory` instead.
       * @breaking-change 11.0.0
       */


      var _FocusTrapFactory = /*#__PURE__*/function () {
        function _FocusTrapFactory(_checker, _ngZone, _document) {
          _classCallCheck(this, _FocusTrapFactory);

          this._checker = _checker;
          this._ngZone = _ngZone;
          this._document = _document;
        }
        /**
         * Creates a focus-trapped region around the given element.
         * @param element The element around which focus will be trapped.
         * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
         *     manually by the user.
         * @returns The created focus trap instance.
         */


        _createClass(_FocusTrapFactory, [{
          key: "create",
          value: function create(element) {
            var deferCaptureElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            return new _FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
          }
        }]);

        return _FocusTrapFactory;
      }();

      _FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
        return new (t || _FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };

      _FocusTrapFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function FocusTrapFactory_Factory() {
          return new _FocusTrapFactory(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
        },
        token: _FocusTrapFactory,
        providedIn: "root"
      });

      _FocusTrapFactory.ctorParameters = function () {
        return [{
          type: _InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FocusTrapFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _InteractivityChecker
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }]
          }];
        }, null);
      })();
      /** Directive for trapping focus within a region. */


      var _CdkTrapFocus = /*#__PURE__*/function () {
        function _CdkTrapFocus(_elementRef, _focusTrapFactory,
        /**
         * @deprecated No longer being used. To be removed.
         * @breaking-change 13.0.0
         */
        _document) {
          _classCallCheck(this, _CdkTrapFocus);

          this._elementRef = _elementRef;
          this._focusTrapFactory = _focusTrapFactory;
          /** Previously focused element to restore focus to upon destroy when using autoCapture. */

          this._previouslyFocusedElement = null;
          this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
        }
        /** Whether the focus trap is active. */


        _createClass(_CdkTrapFocus, [{
          key: "enabled",
          get: function get() {
            return this.focusTrap.enabled;
          },
          set: function set(value) {
            this.focusTrap.enabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
          }
          /**
           * Whether the directive should automatically move focus into the trapped region upon
           * initialization and return focus to the previous activeElement upon destruction.
           */

        }, {
          key: "autoCapture",
          get: function get() {
            return this._autoCapture;
          },
          set: function set(value) {
            this._autoCapture = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
            // element now that the trapped region is being destroyed.

            if (this._previouslyFocusedElement) {
              this._previouslyFocusedElement.focus();

              this._previouslyFocusedElement = null;
            }
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this.focusTrap.attachAnchors();

            if (this.autoCapture) {
              this._captureFocus();
            }
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (!this.focusTrap.hasAttached()) {
              this.focusTrap.attachAnchors();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var autoCaptureChange = changes['autoCapture'];

            if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap.hasAttached()) {
              this._captureFocus();
            }
          }
        }, {
          key: "_captureFocus",
          value: function _captureFocus() {
            this._previouslyFocusedElement = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getFocusedElementPierceShadowDom)();
            this.focusTrap.focusInitialElementWhenReady();
          }
        }]);

        return _CdkTrapFocus;
      }();

      _CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
        return new (t || _CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };

      _CdkTrapFocus.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkTrapFocus,
        selectors: [["", "cdkTrapFocus", ""]],
        inputs: {
          enabled: ["cdkTrapFocus", "enabled"],
          autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
        },
        exportAs: ["cdkTrapFocus"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });

      _CdkTrapFocus.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _FocusTrapFactory
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
          }]
        }];
      };

      _CdkTrapFocus.propDecorators = {
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['cdkTrapFocus']
        }],
        autoCapture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['cdkTrapFocusAutoCapture']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkTrapFocus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkTrapFocus]',
            exportAs: 'cdkTrapFocus'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _FocusTrapFactory
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }]
          }];
        }, {
          enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['cdkTrapFocus']
          }],
          autoCapture: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['cdkTrapFocusAutoCapture']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class that allows for trapping focus within a DOM element.
       *
       * This class uses a strategy pattern that determines how it traps focus.
       * See FocusTrapInertStrategy.
       */


      var _ConfigurableFocusTrap = /*#__PURE__*/function (_FocusTrap2) {
        _inherits(_ConfigurableFocusTrap, _FocusTrap2);

        var _super4 = _createSuper(_ConfigurableFocusTrap);

        function _ConfigurableFocusTrap(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
          var _this11;

          _classCallCheck(this, _ConfigurableFocusTrap);

          _this11 = _super4.call(this, _element, _checker, _ngZone, _document, config.defer);
          _this11._focusTrapManager = _focusTrapManager;
          _this11._inertStrategy = _inertStrategy;

          _this11._focusTrapManager.register(_assertThisInitialized(_this11));

          return _this11;
        }
        /** Whether the FocusTrap is enabled. */


        _createClass(_ConfigurableFocusTrap, [{
          key: "enabled",
          get: function get() {
            return this._enabled;
          },
          set: function set(value) {
            this._enabled = value;

            if (this._enabled) {
              this._focusTrapManager.register(this);
            } else {
              this._focusTrapManager.deregister(this);
            }
          }
          /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */

        }, {
          key: "destroy",
          value: function destroy() {
            this._focusTrapManager.deregister(this);

            _get(_getPrototypeOf(_ConfigurableFocusTrap.prototype), "destroy", this).call(this);
          }
          /** @docs-private Implemented as part of ManagedFocusTrap. */

        }, {
          key: "_enable",
          value: function _enable() {
            this._inertStrategy.preventFocus(this);

            this.toggleAnchors(true);
          }
          /** @docs-private Implemented as part of ManagedFocusTrap. */

        }, {
          key: "_disable",
          value: function _disable() {
            this._inertStrategy.allowFocus(this);

            this.toggleAnchors(false);
          }
        }]);

        return _ConfigurableFocusTrap;
      }(_FocusTrap);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The injection token used to specify the inert strategy. */


      var _FOCUS_TRAP_INERT_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('FOCUS_TRAP_INERT_STRATEGY');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** IE 11 compatible closest implementation that is able to start from non-Element Nodes. */


      function closest(element, selector) {
        if (!(element instanceof Node)) {
          return null;
        }

        var curr = element;

        while (curr != null && !(curr instanceof Element)) {
          curr = curr.parentNode;
        }

        return curr && (hasNativeClosest ? curr.closest(selector) : polyfillClosest(curr, selector));
      }
      /** Polyfill for browsers without Element.closest. */


      function polyfillClosest(element, selector) {
        var curr = element;

        while (curr != null && !(curr instanceof Element && matches(curr, selector))) {
          curr = curr.parentNode;
        }

        return curr || null;
      }

      var hasNativeClosest = typeof Element != 'undefined' && !!Element.prototype.closest;
      /** IE 11 compatible matches implementation. */

      function matches(element, selector) {
        return element.matches ? element.matches(selector) : element['msMatchesSelector'](selector);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Lightweight FocusTrapInertStrategy that adds a document focus event
       * listener to redirect focus back inside the FocusTrap.
       */


      var _EventListenerFocusTrapInertStrategy = /*#__PURE__*/function () {
        function _EventListenerFocusTrapInertStrategy() {
          _classCallCheck(this, _EventListenerFocusTrapInertStrategy);

          /** Focus event handler. */
          this._listener = null;
        }
        /** Adds a document event listener that keeps focus inside the FocusTrap. */


        _createClass(_EventListenerFocusTrapInertStrategy, [{
          key: "preventFocus",
          value: function preventFocus(focusTrap) {
            var _this12 = this;

            // Ensure there's only one listener per document
            if (this._listener) {
              focusTrap._document.removeEventListener('focus', this._listener, true);
            }

            this._listener = function (e) {
              return _this12._trapFocus(focusTrap, e);
            };

            focusTrap._ngZone.runOutsideAngular(function () {
              focusTrap._document.addEventListener('focus', _this12._listener, true);
            });
          }
          /** Removes the event listener added in preventFocus. */

        }, {
          key: "allowFocus",
          value: function allowFocus(focusTrap) {
            if (!this._listener) {
              return;
            }

            focusTrap._document.removeEventListener('focus', this._listener, true);

            this._listener = null;
          }
          /**
           * Refocuses the first element in the FocusTrap if the focus event target was outside
           * the FocusTrap.
           *
           * This is an event listener callback. The event listener is added in runOutsideAngular,
           * so all this code runs outside Angular as well.
           */

        }, {
          key: "_trapFocus",
          value: function _trapFocus(focusTrap, event) {
            var target = event.target;
            var focusTrapRoot = focusTrap._element; // Don't refocus if target was in an overlay, because the overlay might be associated
            // with an element inside the FocusTrap, ex. mat-select.

            if (!focusTrapRoot.contains(target) && closest(target, 'div.cdk-overlay-pane') === null) {
              // Some legacy FocusTrap usages have logic that focuses some element on the page
              // just before FocusTrap is destroyed. For backwards compatibility, wait
              // to be sure FocusTrap is still enabled before refocusing.
              setTimeout(function () {
                // Check whether focus wasn't put back into the focus trap while the timeout was pending.
                if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
                  focusTrap.focusFirstTabbableElement();
                }
              });
            }
          }
        }]);

        return _EventListenerFocusTrapInertStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injectable that ensures only the most recently enabled FocusTrap is active. */


      var FocusTrapManager = /*#__PURE__*/function () {
        function FocusTrapManager() {
          _classCallCheck(this, FocusTrapManager);

          // A stack of the FocusTraps on the page. Only the FocusTrap at the
          // top of the stack is active.
          this._focusTrapStack = [];
        }
        /**
         * Disables the FocusTrap at the top of the stack, and then pushes
         * the new FocusTrap onto the stack.
         */


        _createClass(FocusTrapManager, [{
          key: "register",
          value: function register(focusTrap) {
            // Dedupe focusTraps that register multiple times.
            this._focusTrapStack = this._focusTrapStack.filter(function (ft) {
              return ft !== focusTrap;
            });
            var stack = this._focusTrapStack;

            if (stack.length) {
              stack[stack.length - 1]._disable();
            }

            stack.push(focusTrap);

            focusTrap._enable();
          }
          /**
           * Removes the FocusTrap from the stack, and activates the
           * FocusTrap that is the new top of the stack.
           */

        }, {
          key: "deregister",
          value: function deregister(focusTrap) {
            focusTrap._disable();

            var stack = this._focusTrapStack;
            var i = stack.indexOf(focusTrap);

            if (i !== -1) {
              stack.splice(i, 1);

              if (stack.length) {
                stack[stack.length - 1]._enable();
              }
            }
          }
        }]);

        return FocusTrapManager;
      }();

      FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
        return new (t || FocusTrapManager)();
      };

      FocusTrapManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function FocusTrapManager_Factory() {
          return new FocusTrapManager();
        },
        token: FocusTrapManager,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapManager, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Factory that allows easy instantiation of configurable focus traps. */


      var _ConfigurableFocusTrapFactory = /*#__PURE__*/function () {
        function _ConfigurableFocusTrapFactory(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
          _classCallCheck(this, _ConfigurableFocusTrapFactory);

          this._checker = _checker;
          this._ngZone = _ngZone;
          this._focusTrapManager = _focusTrapManager;
          this._document = _document; // TODO split up the strategies into different modules, similar to DateAdapter.

          this._inertStrategy = _inertStrategy || new _EventListenerFocusTrapInertStrategy();
        }

        _createClass(_ConfigurableFocusTrapFactory, [{
          key: "create",
          value: function create(element) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
              defer: false
            };
            var configObject;

            if (typeof config === 'boolean') {
              configObject = {
                defer: config
              };
            } else {
              configObject = config;
            }

            return new _ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
          }
        }]);

        return _ConfigurableFocusTrapFactory;
      }();

      _ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
        return new (t || _ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_FOCUS_TRAP_INERT_STRATEGY, 8));
      };

      _ConfigurableFocusTrapFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function ConfigurableFocusTrapFactory_Factory() {
          return new _ConfigurableFocusTrapFactory(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_FOCUS_TRAP_INERT_STRATEGY, 8));
        },
        token: _ConfigurableFocusTrapFactory,
        providedIn: "root"
      });

      _ConfigurableFocusTrapFactory.ctorParameters = function () {
        return [{
          type: _InteractivityChecker
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: FocusTrapManager
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_FOCUS_TRAP_INERT_STRATEGY]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ConfigurableFocusTrapFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _InteractivityChecker
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: FocusTrapManager
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_FOCUS_TRAP_INERT_STRATEGY]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */


      function _isFakeMousedownFromScreenReader(event) {
        // Some screen readers will dispatch a fake `mousedown` event when pressing enter or space on
        // a clickable element. We can distinguish these events when both `offsetX` and `offsetY` are
        // zero. Note that there's an edge case where the user could click the 0x0 spot of the screen
        // themselves, but that is unlikely to contain interaction elements. Historially we used to check
        // `event.buttons === 0`, however that no longer works on recent versions of NVDA.
        return event.offsetX === 0 && event.offsetY === 0;
      }
      /** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */


      function _isFakeTouchstartFromScreenReader(event) {
        var touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0]; // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
        // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
        // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
        // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.

        return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injectable options for the InputModalityDetector. These are shallowly merged with the default
       * options.
       */


      var _INPUT_MODALITY_DETECTOR_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-input-modality-detector-options');
      /**
       * Default options for the InputModalityDetector.
       *
       * Modifier keys are ignored by default (i.e. when pressed won't cause the service to detect
       * keyboard input modality) for two reasons:
       *
       * 1. Modifier keys are commonly used with mouse to perform actions such as 'right click' or 'open
       *    in new tab', and are thus less representative of actual keyboard interaction.
       * 2. VoiceOver triggers some keyboard events when linearly navigating with Control + Option (but
       *    confusingly not with Caps Lock). Thus, to have parity with other screen readers, we ignore
       *    these keys so as to not update the input modality.
       *
       * Note that we do not by default ignore the right Meta key on Safari because it has the same key
       * code as the ContextMenu key on other browsers. When we switch to using event.key, we can
       * distinguish between the two.
       */


      var _INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
        ignoreKeys: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.ALT, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.CONTROL, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.MAC_META, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.META, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__.SHIFT]
      };
      /**
       * The amount of time needed to pass after a touchstart event in order for a subsequent mousedown
       * event to be attributed as mouse and not touch.
       *
       * This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
       * that a value of around 650ms seems appropriate.
       */

      var TOUCH_BUFFER_MS = 650;
      /**
       * Event listener options that enable capturing and also mark the listener as passive if the browser
       * supports it.
       */

      var modalityEventListenerOptions = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.normalizePassiveListenerOptions)({
        passive: true,
        capture: true
      });
      /**
       * Service that detects the user's input modality.
       *
       * This service does not update the input modality when a user navigates with a screen reader
       * (e.g. linear navigation with VoiceOver, object navigation / browse mode with NVDA, virtual PC
       * cursor mode with JAWS). This is in part due to technical limitations (i.e. keyboard events do not
       * fire as expected in these modes) but is also arguably the correct behavior. Navigating with a
       * screen reader is akin to visually scanning a page, and should not be interpreted as actual user
       * input interaction.
       *
       * When a user is not navigating but *interacting* with a screen reader, this service attempts to
       * update the input modality to keyboard, but in general this service's behavior is largely
       * undefined.
       */

      var _InputModalityDetector = /*#__PURE__*/function () {
        function _InputModalityDetector(_platform, ngZone, document, options) {
          var _this13 = this;

          _classCallCheck(this, _InputModalityDetector);

          this._platform = _platform;
          /**
           * The most recently detected input modality event target. Is null if no input modality has been
           * detected or if the associated event target is null for some unknown reason.
           */

          this._mostRecentTarget = null;
          /** The underlying BehaviorSubject that emits whenever an input modality is detected. */

          this._modality = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(null);
          /**
           * The timestamp of the last touch input modality. Used to determine whether mousedown events
           * should be attributed to mouse or touch.
           */

          this._lastTouchMs = 0;
          /**
           * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
           * bound.
           */

          this._onKeydown = function (event) {
            var _a, _b; // If this is one of the keys we should ignore, then ignore it and don't update the input
            // modality to keyboard.


            if ((_b = (_a = _this13._options) === null || _a === void 0 ? void 0 : _a.ignoreKeys) === null || _b === void 0 ? void 0 : _b.some(function (keyCode) {
              return keyCode === event.keyCode;
            })) {
              return;
            }

            _this13._modality.next('keyboard');

            _this13._mostRecentTarget = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getEventTarget)(event);
          };
          /**
           * Handles mousedown events. Must be an arrow function in order to preserve the context when it
           * gets bound.
           */


          this._onMousedown = function (event) {
            // Touches trigger both touch and mouse events, so we need to distinguish between mouse events
            // that were triggered via mouse vs touch. To do so, check if the mouse event occurs closely
            // after the previous touch event.
            if (Date.now() - _this13._lastTouchMs < TOUCH_BUFFER_MS) {
              return;
            } // Fake mousedown events are fired by some screen readers when controls are activated by the
            // screen reader. Attribute them to keyboard input modality.


            _this13._modality.next(_isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse');

            _this13._mostRecentTarget = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getEventTarget)(event);
          };
          /**
           * Handles touchstart events. Must be an arrow function in order to preserve the context when it
           * gets bound.
           */


          this._onTouchstart = function (event) {
            // Same scenario as mentioned in _onMousedown, but on touch screen devices, fake touchstart
            // events are fired. Again, attribute to keyboard input modality.
            if (_isFakeTouchstartFromScreenReader(event)) {
              _this13._modality.next('keyboard');

              return;
            } // Store the timestamp of this touch event, as it's used to distinguish between mouse events
            // triggered via mouse vs touch.


            _this13._lastTouchMs = Date.now();

            _this13._modality.next('touch');

            _this13._mostRecentTarget = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getEventTarget)(event);
          };

          this._options = Object.assign(Object.assign({}, _INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options); // Skip the first emission as it's null.

          this.modalityDetected = this._modality.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.skip)(1));
          this.modalityChanged = this.modalityDetected.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)()); // If we're not in a browser, this service should do nothing, as there's no relevant input
          // modality to detect.

          if (!_platform.isBrowser) {
            return;
          } // Add the event listeners used to detect the user's input modality.


          ngZone.runOutsideAngular(function () {
            document.addEventListener('keydown', _this13._onKeydown, modalityEventListenerOptions);
            document.addEventListener('mousedown', _this13._onMousedown, modalityEventListenerOptions);
            document.addEventListener('touchstart', _this13._onTouchstart, modalityEventListenerOptions);
          });
        }
        /** The most recently detected input modality. */


        _createClass(_InputModalityDetector, [{
          key: "mostRecentModality",
          get: function get() {
            return this._modality.value;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (!this._platform.isBrowser) {
              return;
            }

            document.removeEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
            document.removeEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
            document.removeEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
          }
        }]);

        return _InputModalityDetector;
      }();

      _InputModalityDetector.ɵfac = function InputModalityDetector_Factory(t) {
        return new (t || _InputModalityDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_INPUT_MODALITY_DETECTOR_OPTIONS, 8));
      };

      _InputModalityDetector.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function InputModalityDetector_Factory() {
          return new _InputModalityDetector(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_INPUT_MODALITY_DETECTOR_OPTIONS, 8));
        },
        token: _InputModalityDetector,
        providedIn: "root"
      });

      _InputModalityDetector.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_INPUT_MODALITY_DETECTOR_OPTIONS]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_InputModalityDetector, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_INPUT_MODALITY_DETECTOR_OPTIONS]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('liveAnnouncerElement', {
        providedIn: 'root',
        factory: _LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
      });
      /** @docs-private */


      function _LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
        return null;
      }
      /** Injection token that can be used to configure the default options for the LiveAnnouncer. */


      var _LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('LIVE_ANNOUNCER_DEFAULT_OPTIONS');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _LiveAnnouncer = /*#__PURE__*/function () {
        function _LiveAnnouncer(elementToken, _ngZone, _document, _defaultOptions) {
          _classCallCheck(this, _LiveAnnouncer);

          this._ngZone = _ngZone;
          this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
          // reference browser globals (HTMLElement, Document) on non-browser environments, since having
          // a class decorator causes TypeScript to preserve the constructor signature types.

          this._document = _document;
          this._liveElement = elementToken || this._createLiveElement();
        }

        _createClass(_LiveAnnouncer, [{
          key: "announce",
          value: function announce(message) {
            var _this14 = this;

            var defaultOptions = this._defaultOptions;
            var politeness;
            var duration;

            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            if (args.length === 1 && typeof args[0] === 'number') {
              duration = args[0];
            } else {
              politeness = args[0];
              duration = args[1];
            }

            this.clear();
            clearTimeout(this._previousTimeout);

            if (!politeness) {
              politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
            }

            if (duration == null && defaultOptions) {
              duration = defaultOptions.duration;
            } // TODO: ensure changing the politeness works on all environments we support.


            this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
            // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
            // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
            //   second time without clearing and then using a non-zero delay.
            // (using JAWS 17 at time of this writing).


            return this._ngZone.runOutsideAngular(function () {
              return new Promise(function (resolve) {
                clearTimeout(_this14._previousTimeout);
                _this14._previousTimeout = setTimeout(function () {
                  _this14._liveElement.textContent = message;
                  resolve();

                  if (typeof duration === 'number') {
                    _this14._previousTimeout = setTimeout(function () {
                      return _this14.clear();
                    }, duration);
                  }
                }, 100);
              });
            });
          }
          /**
           * Clears the current text from the announcer element. Can be used to prevent
           * screen readers from reading the text out again while the user is going
           * through the page landmarks.
           */

        }, {
          key: "clear",
          value: function clear() {
            if (this._liveElement) {
              this._liveElement.textContent = '';
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            clearTimeout(this._previousTimeout);

            if (this._liveElement && this._liveElement.parentNode) {
              this._liveElement.parentNode.removeChild(this._liveElement);

              this._liveElement = null;
            }
          }
        }, {
          key: "_createLiveElement",
          value: function _createLiveElement() {
            var elementClass = 'cdk-live-announcer-element';

            var previousElements = this._document.getElementsByClassName(elementClass);

            var liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


            for (var i = 0; i < previousElements.length; i++) {
              previousElements[i].parentNode.removeChild(previousElements[i]);
            }

            liveEl.classList.add(elementClass);
            liveEl.classList.add('cdk-visually-hidden');
            liveEl.setAttribute('aria-atomic', 'true');
            liveEl.setAttribute('aria-live', 'polite');

            this._document.body.appendChild(liveEl);

            return liveEl;
          }
        }]);

        return _LiveAnnouncer;
      }();

      _LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
        return new (t || _LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
      };

      _LiveAnnouncer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function LiveAnnouncer_Factory() {
          return new _LiveAnnouncer(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
        },
        token: _LiveAnnouncer,
        providedIn: "root"
      });

      _LiveAnnouncer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_LIVE_ANNOUNCER_ELEMENT_TOKEN]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_LIVE_ANNOUNCER_DEFAULT_OPTIONS]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_LiveAnnouncer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_LIVE_ANNOUNCER_ELEMENT_TOKEN]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_LIVE_ANNOUNCER_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /**
       * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
       * with a wider range of browsers and screen readers.
       */


      var _CdkAriaLive = /*#__PURE__*/function () {
        function _CdkAriaLive(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
          _classCallCheck(this, _CdkAriaLive);

          this._elementRef = _elementRef;
          this._liveAnnouncer = _liveAnnouncer;
          this._contentObserver = _contentObserver;
          this._ngZone = _ngZone;
          this._politeness = 'polite';
        }
        /** The aria-live politeness level to use when announcing messages. */


        _createClass(_CdkAriaLive, [{
          key: "politeness",
          get: function get() {
            return this._politeness;
          },
          set: function set(value) {
            var _this15 = this;

            this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';

            if (this._politeness === 'off') {
              if (this._subscription) {
                this._subscription.unsubscribe();

                this._subscription = null;
              }
            } else if (!this._subscription) {
              this._subscription = this._ngZone.runOutsideAngular(function () {
                return _this15._contentObserver.observe(_this15._elementRef).subscribe(function () {
                  // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
                  var elementText = _this15._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
                  // changes which we don't want to announce.

                  if (elementText !== _this15._previousAnnouncedText) {
                    _this15._liveAnnouncer.announce(elementText, _this15._politeness);

                    _this15._previousAnnouncedText = elementText;
                  }
                });
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._subscription) {
              this._subscription.unsubscribe();
            }
          }
        }]);

        return _CdkAriaLive;
      }();

      _CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
        return new (t || _CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _CdkAriaLive.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkAriaLive,
        selectors: [["", "cdkAriaLive", ""]],
        inputs: {
          politeness: ["cdkAriaLive", "politeness"]
        },
        exportAs: ["cdkAriaLive"]
      });

      _CdkAriaLive.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _LiveAnnouncer
        }, {
          type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ContentObserver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }];
      };

      _CdkAriaLive.propDecorators = {
        politeness: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['cdkAriaLive']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkAriaLive, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkAriaLive]',
            exportAs: 'cdkAriaLive'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _LiveAnnouncer
          }, {
            type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ContentObserver
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }];
        }, {
          politeness: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['cdkAriaLive']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** InjectionToken for FocusMonitorOptions. */


      var _FOCUS_MONITOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-focus-monitor-default-options');
      /**
       * Event listener options that enable capturing and also
       * mark the listener as passive if the browser supports it.
       */


      var captureEventListenerOptions = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.normalizePassiveListenerOptions)({
        passive: true,
        capture: true
      });
      /** Monitors mouse and keyboard events to determine the cause of focus events. */

      var _FocusMonitor = /*#__PURE__*/function () {
        function _FocusMonitor(_ngZone, _platform, _inputModalityDetector,
        /** @breaking-change 11.0.0 make document required */
        document, options) {
          var _this16 = this;

          _classCallCheck(this, _FocusMonitor);

          this._ngZone = _ngZone;
          this._platform = _platform;
          this._inputModalityDetector = _inputModalityDetector;
          /** The focus origin that the next focus event is a result of. */

          this._origin = null;
          /** Whether the window has just been focused. */

          this._windowFocused = false;
          /**
           * Whether the origin was determined via a touch interaction. Necessary as properly attributing
           * focus events to touch interactions requires special logic.
           */

          this._originFromTouchInteraction = false;
          /** Map of elements being monitored to their info. */

          this._elementInfo = new Map();
          /** The number of elements currently being monitored. */

          this._monitoredElementCount = 0;
          /**
           * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
           * as well as the number of monitored elements that they contain. We have to treat focus/blur
           * handlers differently from the rest of the events, because the browser won't emit events
           * to the document when focus moves inside of a shadow root.
           */

          this._rootNodeFocusListenerCount = new Map();
          /**
           * Event listener for `focus` events on the window.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */

          this._windowFocusListener = function () {
            // Make a note of when the window regains focus, so we can
            // restore the origin info for the focused element.
            _this16._windowFocused = true;
            _this16._windowFocusTimeoutId = setTimeout(function () {
              return _this16._windowFocused = false;
            });
          };
          /** Subject for stopping our InputModalityDetector subscription. */


          this._stopInputModalityDetector = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          /**
           * Event listener for `focus` and 'blur' events on the document.
           * Needs to be an arrow function in order to preserve the context when it gets bound.
           */

          this._rootNodeFocusAndBlurListener = function (event) {
            var target = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getEventTarget)(event);
            var handler = event.type === 'focus' ? _this16._onFocus : _this16._onBlur; // We need to walk up the ancestor chain in order to support `checkChildren`.

            for (var element = target; element; element = element.parentElement) {
              handler.call(_this16, event, element);
            }
          };

          this._document = document;
          this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0
          /* IMMEDIATE */
          ;
        }

        _createClass(_FocusMonitor, [{
          key: "monitor",
          value: function monitor(element) {
            var checkChildren = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var nativeElement = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element); // Do nothing if we're not on the browser platform or the passed in node isn't an element.

            if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(null);
            } // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
            // the shadow root, rather than the `document`, because the browser won't emit focus events
            // to the `document`, if focus is moving within the same shadow root.


            var rootNode = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getShadowRoot)(nativeElement) || this._getDocument();

            var cachedInfo = this._elementInfo.get(nativeElement); // Check if we're already monitoring this element.


            if (cachedInfo) {
              if (checkChildren) {
                // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
                // observers into ones that behave as if `checkChildren` was turned on. We need a more
                // robust solution.
                cachedInfo.checkChildren = true;
              }

              return cachedInfo.subject;
            } // Create monitored element info.


            var info = {
              checkChildren: checkChildren,
              subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject(),
              rootNode: rootNode
            };

            this._elementInfo.set(nativeElement, info);

            this._registerGlobalListeners(info);

            return info.subject;
          }
        }, {
          key: "stopMonitoring",
          value: function stopMonitoring(element) {
            var nativeElement = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element);

            var elementInfo = this._elementInfo.get(nativeElement);

            if (elementInfo) {
              elementInfo.subject.complete();

              this._setClasses(nativeElement);

              this._elementInfo["delete"](nativeElement);

              this._removeGlobalListeners(elementInfo);
            }
          }
        }, {
          key: "focusVia",
          value: function focusVia(element, origin, options) {
            var _this17 = this;

            var nativeElement = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element);

            var focusedElement = this._getDocument().activeElement; // If the element is focused already, calling `focus` again won't trigger the event listener
            // which means that the focus classes won't be updated. If that's the case, update the classes
            // directly without waiting for an event.


            if (nativeElement === focusedElement) {
              this._getClosestElementsInfo(nativeElement).forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    currentElement = _ref2[0],
                    info = _ref2[1];

                return _this17._originChanged(currentElement, origin, info);
              });
            } else {
              this._setOrigin(origin); // `focus` isn't available on the server


              if (typeof nativeElement.focus === 'function') {
                nativeElement.focus(options);
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this18 = this;

            this._elementInfo.forEach(function (_info, element) {
              return _this18.stopMonitoring(element);
            });
          }
          /** Access injected document if available or fallback to global document reference */

        }, {
          key: "_getDocument",
          value: function _getDocument() {
            return this._document || document;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            var doc = this._getDocument();

            return doc.defaultView || window;
          }
        }, {
          key: "_toggleClass",
          value: function _toggleClass(element, className, shouldSet) {
            if (shouldSet) {
              element.classList.add(className);
            } else {
              element.classList.remove(className);
            }
          }
        }, {
          key: "_getFocusOrigin",
          value: function _getFocusOrigin(focusEventTarget) {
            if (this._origin) {
              // If the origin was realized via a touch interaction, we need to perform additional checks
              // to determine whether the focus origin should be attributed to touch or program.
              if (this._originFromTouchInteraction) {
                return this._shouldBeAttributedToTouch(focusEventTarget) ? 'touch' : 'program';
              } else {
                return this._origin;
              }
            } // If the window has just regained focus, we can restore the most recent origin from before the
            // window blurred. Otherwise, we've reached the point where we can't identify the source of the
            // focus. This typically means one of two things happened:
            //
            // 1) The element was programmatically focused, or
            // 2) The element was focused via screen reader navigation (which generally doesn't fire
            //    events).
            //
            // Because we can't distinguish between these two cases, we default to setting `program`.


            return this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : 'program';
          }
          /**
           * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
           * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
           * handle a focus event following a touch interaction, we need to determine whether (1) the focus
           * event was directly caused by the touch interaction or (2) the focus event was caused by a
           * subsequent programmatic focus call triggered by the touch interaction.
           * @param focusEventTarget The target of the focus event under examination.
           */

        }, {
          key: "_shouldBeAttributedToTouch",
          value: function _shouldBeAttributedToTouch(focusEventTarget) {
            // Please note that this check is not perfect. Consider the following edge case:
            //
            // <div #parent tabindex="0">
            //   <div #child tabindex="0" (click)="#parent.focus()"></div>
            // </div>
            //
            // Suppose there is a FocusMonitor in IMMEDIATE mode attached to #parent. When the user touches
            // #child, #parent is programmatically focused. This code will attribute the focus to touch
            // instead of program. This is a relatively minor edge-case that can be worked around by using
            // focusVia(parent, 'program') to focus #parent.
            return this._detectionMode === 1
            /* EVENTUAL */
            || !!(focusEventTarget === null || focusEventTarget === void 0 ? void 0 : focusEventTarget.contains(this._inputModalityDetector._mostRecentTarget));
          }
          /**
           * Sets the focus classes on the element based on the given focus origin.
           * @param element The element to update the classes on.
           * @param origin The focus origin.
           */

        }, {
          key: "_setClasses",
          value: function _setClasses(element, origin) {
            this._toggleClass(element, 'cdk-focused', !!origin);

            this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');

            this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');

            this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');

            this._toggleClass(element, 'cdk-program-focused', origin === 'program');
          }
          /**
           * Updates the focus origin. If we're using immediate detection mode, we schedule an async
           * function to clear the origin at the end of a timeout. The duration of the timeout depends on
           * the origin being set.
           * @param origin The origin to set.
           * @param isFromInteraction Whether we are setting the origin from an interaction event.
           */

        }, {
          key: "_setOrigin",
          value: function _setOrigin(origin) {
            var _this19 = this;

            var isFromInteraction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            this._ngZone.runOutsideAngular(function () {
              _this19._origin = origin;
              _this19._originFromTouchInteraction = origin === 'touch' && isFromInteraction; // If we're in IMMEDIATE mode, reset the origin at the next tick (or in `TOUCH_BUFFER_MS` ms
              // for a touch event). We reset the origin at the next tick because Firefox focuses one tick
              // after the interaction event. We wait `TOUCH_BUFFER_MS` ms before resetting the origin for
              // a touch event because when a touch event is fired, the associated focus event isn't yet in
              // the event queue. Before doing so, clear any pending timeouts.

              if (_this19._detectionMode === 0
              /* IMMEDIATE */
              ) {
                clearTimeout(_this19._originTimeoutId);
                var ms = _this19._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
                _this19._originTimeoutId = setTimeout(function () {
                  return _this19._origin = null;
                }, ms);
              }
            });
          }
          /**
           * Handles focus events on a registered element.
           * @param event The focus event.
           * @param element The monitored element.
           */

        }, {
          key: "_onFocus",
          value: function _onFocus(event, element) {
            // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
            // focus event affecting the monitored element. If we want to use the origin of the first event
            // instead we should check for the cdk-focused class here and return if the element already has
            // it. (This only matters for elements that have includesChildren = true).
            // If we are not counting child-element-focus as focused, make sure that the event target is the
            // monitored element itself.
            var elementInfo = this._elementInfo.get(element);

            var focusEventTarget = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__._getEventTarget)(event);

            if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
              return;
            }

            this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
          }
          /**
           * Handles blur events on a registered element.
           * @param event The blur event.
           * @param element The monitored element.
           */

        }, {
          key: "_onBlur",
          value: function _onBlur(event, element) {
            // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
            // order to focus another child of the monitored element.
            var elementInfo = this._elementInfo.get(element);

            if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
              return;
            }

            this._setClasses(element);

            this._emitOrigin(elementInfo.subject, null);
          }
        }, {
          key: "_emitOrigin",
          value: function _emitOrigin(subject, origin) {
            this._ngZone.run(function () {
              return subject.next(origin);
            });
          }
        }, {
          key: "_registerGlobalListeners",
          value: function _registerGlobalListeners(elementInfo) {
            var _this20 = this;

            if (!this._platform.isBrowser) {
              return;
            }

            var rootNode = elementInfo.rootNode;
            var rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;

            if (!rootNodeFocusListeners) {
              this._ngZone.runOutsideAngular(function () {
                rootNode.addEventListener('focus', _this20._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                rootNode.addEventListener('blur', _this20._rootNodeFocusAndBlurListener, captureEventListenerOptions);
              });
            }

            this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1); // Register global listeners when first element is monitored.


            if (++this._monitoredElementCount === 1) {
              // Note: we listen to events in the capture phase so we
              // can detect them even if the user stops propagation.
              this._ngZone.runOutsideAngular(function () {
                var window = _this20._getWindow();

                window.addEventListener('focus', _this20._windowFocusListener);
              }); // The InputModalityDetector is also just a collection of global listeners.


              this._inputModalityDetector.modalityDetected.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._stopInputModalityDetector)).subscribe(function (modality) {
                _this20._setOrigin(modality, true
                /* isFromInteraction */
                );
              });
            }
          }
        }, {
          key: "_removeGlobalListeners",
          value: function _removeGlobalListeners(elementInfo) {
            var rootNode = elementInfo.rootNode;

            if (this._rootNodeFocusListenerCount.has(rootNode)) {
              var rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);

              if (rootNodeFocusListeners > 1) {
                this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
              } else {
                rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
                rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);

                this._rootNodeFocusListenerCount["delete"](rootNode);
              }
            } // Unregister global listeners when last element is unmonitored.


            if (! --this._monitoredElementCount) {
              var _window = this._getWindow();

              _window.removeEventListener('focus', this._windowFocusListener); // Equivalently, stop our InputModalityDetector subscription.


              this._stopInputModalityDetector.next(); // Clear timeouts for all potentially pending timeouts to prevent the leaks.


              clearTimeout(this._windowFocusTimeoutId);
              clearTimeout(this._originTimeoutId);
            }
          }
          /** Updates all the state on an element once its focus origin has changed. */

        }, {
          key: "_originChanged",
          value: function _originChanged(element, origin, elementInfo) {
            this._setClasses(element, origin);

            this._emitOrigin(elementInfo.subject, origin);

            this._lastFocusOrigin = origin;
          }
          /**
           * Collects the `MonitoredElementInfo` of a particular element and
           * all of its ancestors that have enabled `checkChildren`.
           * @param element Element from which to start the search.
           */

        }, {
          key: "_getClosestElementsInfo",
          value: function _getClosestElementsInfo(element) {
            var results = [];

            this._elementInfo.forEach(function (info, currentElement) {
              if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
                results.push([currentElement, info]);
              }
            });

            return results;
          }
        }]);

        return _FocusMonitor;
      }();

      _FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
        return new (t || _FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_InputModalityDetector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
      };

      _FocusMonitor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function FocusMonitor_Factory() {
          return new _FocusMonitor(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_InputModalityDetector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
        },
        token: _FocusMonitor,
        providedIn: "root"
      });

      _FocusMonitor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
        }, {
          type: _InputModalityDetector
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_FOCUS_MONITOR_DEFAULT_OPTIONS]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_FocusMonitor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
          }, {
            type: _InputModalityDetector
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_FOCUS_MONITOR_DEFAULT_OPTIONS]
            }]
          }];
        }, null);
      })();
      /**
       * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
       * programmatically) and adds corresponding classes to the element.
       *
       * There are two variants of this directive:
       * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
       *    focused.
       * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
       */


      var _CdkMonitorFocus = /*#__PURE__*/function () {
        function _CdkMonitorFocus(_elementRef, _focusMonitor) {
          _classCallCheck(this, _CdkMonitorFocus);

          this._elementRef = _elementRef;
          this._focusMonitor = _focusMonitor;
          this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_CdkMonitorFocus, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this21 = this;

            var element = this._elementRef.nativeElement;
            this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(function (origin) {
              return _this21.cdkFocusChange.emit(origin);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);

            if (this._monitorSubscription) {
              this._monitorSubscription.unsubscribe();
            }
          }
        }]);

        return _CdkMonitorFocus;
      }();

      _CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
        return new (t || _CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_FocusMonitor));
      };

      _CdkMonitorFocus.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkMonitorFocus,
        selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
        outputs: {
          cdkFocusChange: "cdkFocusChange"
        }
      });

      _CdkMonitorFocus.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _FocusMonitor
        }];
      };

      _CdkMonitorFocus.propDecorators = {
        cdkFocusChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkMonitorFocus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _FocusMonitor
          }];
        }, {
          cdkFocusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** CSS class applied to the document body when in black-on-white high-contrast mode. */


      var BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
      /** CSS class applied to the document body when in white-on-black high-contrast mode. */

      var WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
      /** CSS class applied to the document body when in high-contrast mode. */

      var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
      /**
       * Service to determine whether the browser is currently in a high-contrast-mode environment.
       *
       * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
       * changes the appearance of all applications, including web applications, to dramatically increase
       * contrast.
       *
       * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
       * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
       * browser extension.
       */

      var _HighContrastModeDetector = /*#__PURE__*/function () {
        function _HighContrastModeDetector(_platform, document) {
          _classCallCheck(this, _HighContrastModeDetector);

          this._platform = _platform;
          this._document = document;
        }
        /** Gets the current high-contrast-mode for the page. */


        _createClass(_HighContrastModeDetector, [{
          key: "getHighContrastMode",
          value: function getHighContrastMode() {
            if (!this._platform.isBrowser) {
              return 0
              /* NONE */
              ;
            } // Create a test element with an arbitrary background-color that is neither black nor
            // white; high-contrast mode will coerce the color to either black or white. Also ensure that
            // appending the test element to the DOM does not affect layout by absolutely positioning it


            var testElement = this._document.createElement('div');

            testElement.style.backgroundColor = 'rgb(1,2,3)';
            testElement.style.position = 'absolute';

            this._document.body.appendChild(testElement); // Get the computed style for the background color, collapsing spaces to normalize between
            // browsers. Once we get this color, we no longer need the test element. Access the `window`
            // via the document so we can fake it in tests. Note that we have extra null checks, because
            // this logic will likely run during app bootstrap and throwing can break the entire app.


            var documentWindow = this._document.defaultView || window;
            var computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
            var computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');

            this._document.body.removeChild(testElement);

            switch (computedColor) {
              case 'rgb(0,0,0)':
                return 2
                /* WHITE_ON_BLACK */
                ;

              case 'rgb(255,255,255)':
                return 1
                /* BLACK_ON_WHITE */
                ;
            }

            return 0
            /* NONE */
            ;
          }
          /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */

        }, {
          key: "_applyBodyHighContrastModeCssClasses",
          value: function _applyBodyHighContrastModeCssClasses() {
            if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
              var bodyClasses = this._document.body.classList; // IE11 doesn't support `classList` operations with multiple arguments

              bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
              bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
              bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
              this._hasCheckedHighContrastMode = true;
              var mode = this.getHighContrastMode();

              if (mode === 1
              /* BLACK_ON_WHITE */
              ) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
              } else if (mode === 2
              /* WHITE_ON_BLACK */
              ) {
                bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
                bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
              }
            }
          }
        }]);

        return _HighContrastModeDetector;
      }();

      _HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
        return new (t || _HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };

      _HighContrastModeDetector.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function HighContrastModeDetector_Factory() {
          return new _HighContrastModeDetector(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
        },
        token: _HighContrastModeDetector,
        providedIn: "root"
      });

      _HighContrastModeDetector.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_HighContrastModeDetector, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _A11yModule = function _A11yModule(highContrastModeDetector) {
        _classCallCheck(this, _A11yModule);

        highContrastModeDetector._applyBodyHighContrastModeCssClasses();
      };

      _A11yModule.ɵfac = function A11yModule_Factory(t) {
        return new (t || _A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_HighContrastModeDetector));
      };

      _A11yModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _A11yModule
      });
      _A11yModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.PlatformModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ObserversModule]]
      });

      _A11yModule.ctorParameters = function () {
        return [{
          type: _HighContrastModeDetector
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_A11yModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.PlatformModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ObserversModule],
            declarations: [_CdkAriaLive, _CdkTrapFocus, _CdkMonitorFocus],
            exports: [_CdkAriaLive, _CdkTrapFocus, _CdkMonitorFocus]
          }]
        }], function () {
          return [{
            type: _HighContrastModeDetector
          }];
        }, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_A11yModule, {
          declarations: function declarations() {
            return [_CdkAriaLive, _CdkTrapFocus, _CdkMonitorFocus];
          },
          imports: function imports() {
            return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.PlatformModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ObserversModule];
          },
          exports: function exports() {
            return [_CdkAriaLive, _CdkTrapFocus, _CdkMonitorFocus];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    772: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BidiModule": function BidiModule() {
          return (
            /* binding */
            _BidiModule
          );
        },

        /* harmony export */
        "DIR_DOCUMENT": function DIR_DOCUMENT() {
          return (
            /* binding */
            _DIR_DOCUMENT
          );
        },

        /* harmony export */
        "Dir": function Dir() {
          return (
            /* binding */
            _Dir
          );
        },

        /* harmony export */
        "Directionality": function Directionality() {
          return (
            /* binding */
            _Directionality
          );
        },

        /* harmony export */
        "ɵangular_material_src_cdk_bidi_bidi_a": function ɵangular_material_src_cdk_bidi_bidi_a() {
          return (
            /* binding */
            DIR_DOCUMENT_FACTORY
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token used to inject the document into Directionality.
       * This is used so that the value can be faked in tests.
       *
       * We can't use the real document in tests because changing the real `dir` causes geometry-based
       * tests in Safari to fail.
       *
       * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
       * themselves use things like `querySelector` in test code.
       *
       * This token is defined in a separate file from Directionality as a workaround for
       * https://github.com/angular/angular/issues/22559
       *
       * @docs-private
       */


      var _DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-dir-doc', {
        providedIn: 'root',
        factory: DIR_DOCUMENT_FACTORY
      });
      /** @docs-private */


      function DIR_DOCUMENT_FACTORY() {
        return (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * The directionality (LTR / RTL) context for the application (or a subtree of it).
       * Exposes the current direction and a stream of direction changes.
       */


      var _Directionality = /*#__PURE__*/function () {
        function _Directionality(_document) {
          _classCallCheck(this, _Directionality);

          /** The current 'ltr' or 'rtl' value. */
          this.value = 'ltr';
          /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

          if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            var bodyDir = _document.body ? _document.body.dir : null;
            var htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            var value = bodyDir || htmlDir;
            this.value = value === 'ltr' || value === 'rtl' ? value : 'ltr';
          }
        }

        _createClass(_Directionality, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.change.complete();
          }
        }]);

        return _Directionality;
      }();

      _Directionality.ɵfac = function Directionality_Factory(t) {
        return new (t || _Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_DIR_DOCUMENT, 8));
      };

      _Directionality.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function Directionality_Factory() {
          return new _Directionality(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_DIR_DOCUMENT, 8));
        },
        token: _Directionality,
        providedIn: "root"
      });

      _Directionality.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_DIR_DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_Directionality, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_DIR_DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive to listen for changes of direction of part of the DOM.
       *
       * Provides itself as Directionality such that descendant directives only need to ever inject
       * Directionality to get the closest direction.
       */


      var _Dir = /*#__PURE__*/function () {
        function _Dir() {
          _classCallCheck(this, _Dir);

          /** Normalized direction that accounts for invalid/unsupported values. */
          this._dir = 'ltr';
          /** Whether the `value` has been set to its initial value. */

          this._isInitialized = false;
          /** Event emitted when the direction changes. */

          this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }
        /** @docs-private */


        _createClass(_Dir, [{
          key: "dir",
          get: function get() {
            return this._dir;
          },
          set: function set(value) {
            var old = this._dir;
            var normalizedValue = value ? value.toLowerCase() : value;
            this._rawDir = value;
            this._dir = normalizedValue === 'ltr' || normalizedValue === 'rtl' ? normalizedValue : 'ltr';

            if (old !== this._dir && this._isInitialized) {
              this.change.emit(this._dir);
            }
          }
          /** Current layout direction of the element. */

        }, {
          key: "value",
          get: function get() {
            return this.dir;
          }
          /** Initialize once default value has been set. */

        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            this._isInitialized = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.change.complete();
          }
        }]);

        return _Dir;
      }();

      _Dir.ɵfac = function Dir_Factory(t) {
        return new (t || _Dir)();
      };

      _Dir.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _Dir,
        selectors: [["", "dir", ""]],
        hostVars: 1,
        hostBindings: function Dir_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
          }
        },
        inputs: {
          dir: "dir"
        },
        outputs: {
          change: "dirChange"
        },
        exportAs: ["dir"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _Directionality,
          useExisting: _Dir
        }])]
      });
      _Dir.propDecorators = {
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['dirChange']
        }],
        dir: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_Dir, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[dir]',
            providers: [{
              provide: _Directionality,
              useExisting: _Dir
            }],
            host: {
              '[attr.dir]': '_rawDir'
            },
            exportAs: 'dir'
          }]
        }], function () {
          return [];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['dirChange']
          }],
          dir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _BidiModule = function _BidiModule() {
        _classCallCheck(this, _BidiModule);
      };

      _BidiModule.ɵfac = function BidiModule_Factory(t) {
        return new (t || _BidiModule)();
      };

      _BidiModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _BidiModule
      });
      _BidiModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_BidiModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            exports: [_Dir],
            declarations: [_Dir]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_BidiModule, {
          declarations: [_Dir],
          exports: [_Dir]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    62604: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ArrayDataSource": function ArrayDataSource() {
          return (
            /* binding */
            _ArrayDataSource
          );
        },

        /* harmony export */
        "DataSource": function DataSource() {
          return (
            /* binding */
            _DataSource
          );
        },

        /* harmony export */
        "SelectionModel": function SelectionModel() {
          return (
            /* binding */
            _SelectionModel
          );
        },

        /* harmony export */
        "UniqueSelectionDispatcher": function UniqueSelectionDispatcher() {
          return (
            /* binding */
            _UniqueSelectionDispatcher
          );
        },

        /* harmony export */
        "_DisposeViewRepeaterStrategy": function _DisposeViewRepeaterStrategy() {
          return (
            /* binding */
            _DisposeViewRepeaterStrategy2
          );
        },

        /* harmony export */
        "_RecycleViewRepeaterStrategy": function _RecycleViewRepeaterStrategy() {
          return (
            /* binding */
            _RecycleViewRepeaterStrategy2
          );
        },

        /* harmony export */
        "_VIEW_REPEATER_STRATEGY": function _VIEW_REPEATER_STRATEGY() {
          return (
            /* binding */
            _VIEW_REPEATER_STRATEGY2
          );
        },

        /* harmony export */
        "getMultipleValuesInSingleSelectionError": function getMultipleValuesInSingleSelectionError() {
          return (
            /* binding */
            _getMultipleValuesInSingleSelectionError
          );
        },

        /* harmony export */
        "isDataSource": function isDataSource() {
          return (
            /* binding */
            _isDataSource
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      20411);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      47599);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _DataSource = function _DataSource() {
        _classCallCheck(this, _DataSource);
      };
      /** Checks whether an object is a data source. */


      function _isDataSource(value) {
        // Check if the value is a DataSource by observing if it has a connect function. Cannot
        // be checked as an `instanceof DataSource` since people could create their own sources
        // that match the interface, but don't extend DataSource.
        return value && typeof value.connect === 'function';
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** DataSource wrapper for a native array. */


      var _ArrayDataSource = /*#__PURE__*/function (_DataSource2) {
        _inherits(_ArrayDataSource, _DataSource2);

        var _super5 = _createSuper(_ArrayDataSource);

        function _ArrayDataSource(_data) {
          var _this22;

          _classCallCheck(this, _ArrayDataSource);

          _this22 = _super5.call(this);
          _this22._data = _data;
          return _this22;
        }

        _createClass(_ArrayDataSource, [{
          key: "connect",
          value: function connect() {
            return (0, rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(this._data) ? this._data : (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this._data);
          }
        }, {
          key: "disconnect",
          value: function disconnect() {}
        }]);

        return _ArrayDataSource;
      }(_DataSource);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A repeater that destroys views when they are removed from a
       * {@link ViewContainerRef}. When new items are inserted into the container,
       * the repeater will always construct a new embedded view for each item.
       *
       * @template T The type for the embedded view's $implicit property.
       * @template R The type for the item in each IterableDiffer change record.
       * @template C The type for the context passed to each embedded view.
       */


      var _DisposeViewRepeaterStrategy2 = /*#__PURE__*/function () {
        function _DisposeViewRepeaterStrategy2() {
          _classCallCheck(this, _DisposeViewRepeaterStrategy2);
        }

        _createClass(_DisposeViewRepeaterStrategy2, [{
          key: "applyChanges",
          value: function applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
            changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
              var view;
              var operation;

              if (record.previousIndex == null) {
                var insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
                view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
                operation = 1
                /* INSERTED */
                ;
              } else if (currentIndex == null) {
                viewContainerRef.remove(adjustedPreviousIndex);
                operation = 3
                /* REMOVED */
                ;
              } else {
                view = viewContainerRef.get(adjustedPreviousIndex);
                viewContainerRef.move(view, currentIndex);
                operation = 2
                /* MOVED */
                ;
              }

              if (itemViewChanged) {
                itemViewChanged({
                  context: view === null || view === void 0 ? void 0 : view.context,
                  operation: operation,
                  record: record
                });
              }
            });
          }
        }, {
          key: "detach",
          value: function detach() {}
        }]);

        return _DisposeViewRepeaterStrategy2;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A repeater that caches views when they are removed from a
       * {@link ViewContainerRef}. When new items are inserted into the container,
       * the repeater will reuse one of the cached views instead of creating a new
       * embedded view. Recycling cached views reduces the quantity of expensive DOM
       * inserts.
       *
       * @template T The type for the embedded view's $implicit property.
       * @template R The type for the item in each IterableDiffer change record.
       * @template C The type for the context passed to each embedded view.
       */


      var _RecycleViewRepeaterStrategy2 = /*#__PURE__*/function () {
        function _RecycleViewRepeaterStrategy2() {
          _classCallCheck(this, _RecycleViewRepeaterStrategy2);

          /**
           * The size of the cache used to store unused views.
           * Setting the cache size to `0` will disable caching. Defaults to 20 views.
           */
          this.viewCacheSize = 20;
          /**
           * View cache that stores embedded view instances that have been previously stamped out,
           * but don't are not currently rendered. The view repeater will reuse these views rather than
           * creating brand new ones.
           *
           * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
           */

          this._viewCache = [];
        }
        /** Apply changes to the DOM. */


        _createClass(_RecycleViewRepeaterStrategy2, [{
          key: "applyChanges",
          value: function applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
            var _this23 = this;

            // Rearrange the views to put them in the right location.
            changes.forEachOperation(function (record, adjustedPreviousIndex, currentIndex) {
              var view;
              var operation;

              if (record.previousIndex == null) {
                // Item added.
                var viewArgsFactory = function viewArgsFactory() {
                  return itemContextFactory(record, adjustedPreviousIndex, currentIndex);
                };

                view = _this23._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
                operation = view ? 1
                /* INSERTED */
                : 0
                /* REPLACED */
                ;
              } else if (currentIndex == null) {
                // Item removed.
                _this23._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);

                operation = 3
                /* REMOVED */
                ;
              } else {
                // Item moved.
                view = _this23._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
                operation = 2
                /* MOVED */
                ;
              }

              if (itemViewChanged) {
                itemViewChanged({
                  context: view === null || view === void 0 ? void 0 : view.context,
                  operation: operation,
                  record: record
                });
              }
            });
          }
        }, {
          key: "detach",
          value: function detach() {
            var _iterator = _createForOfIteratorHelper(this._viewCache),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var view = _step.value;
                view.destroy();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this._viewCache = [];
          }
          /**
           * Inserts a view for a new item, either from the cache or by creating a new
           * one. Returns `undefined` if the item was inserted into a cached view.
           */

        }, {
          key: "_insertView",
          value: function _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
            var cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);

            if (cachedView) {
              cachedView.context.$implicit = value;
              return undefined;
            }

            var viewArgs = viewArgsFactory();
            return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
          }
          /** Detaches the view at the given index and inserts into the view cache. */

        }, {
          key: "_detachAndCacheView",
          value: function _detachAndCacheView(index, viewContainerRef) {
            var detachedView = viewContainerRef.detach(index);

            this._maybeCacheView(detachedView, viewContainerRef);
          }
          /** Moves view at the previous index to the current index. */

        }, {
          key: "_moveView",
          value: function _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
            var view = viewContainerRef.get(adjustedPreviousIndex);
            viewContainerRef.move(view, currentIndex);
            view.context.$implicit = value;
            return view;
          }
          /**
           * Cache the given detached view. If the cache is full, the view will be
           * destroyed.
           */

        }, {
          key: "_maybeCacheView",
          value: function _maybeCacheView(view, viewContainerRef) {
            if (this._viewCache.length < this.viewCacheSize) {
              this._viewCache.push(view);
            } else {
              var index = viewContainerRef.indexOf(view); // The host component could remove views from the container outside of
              // the view repeater. It's unlikely this will occur, but just in case,
              // destroy the view on its own, otherwise destroy it through the
              // container to ensure that all the references are removed.

              if (index === -1) {
                view.destroy();
              } else {
                viewContainerRef.remove(index);
              }
            }
          }
          /** Inserts a recycled view from the cache at the given index. */

        }, {
          key: "_insertViewFromCache",
          value: function _insertViewFromCache(index, viewContainerRef) {
            var cachedView = this._viewCache.pop();

            if (cachedView) {
              viewContainerRef.insert(cachedView, index);
            }

            return cachedView || null;
          }
        }]);

        return _RecycleViewRepeaterStrategy2;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class to be used to power selecting one or more options from a list.
       */


      var _SelectionModel = /*#__PURE__*/function () {
        function _SelectionModel() {
          var _this24 = this;

          var _multiple = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          var initiallySelectedValues = arguments.length > 1 ? arguments[1] : undefined;

          var _emitChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

          _classCallCheck(this, _SelectionModel);

          this._multiple = _multiple;
          this._emitChanges = _emitChanges;
          /** Currently-selected values. */

          this._selection = new Set();
          /** Keeps track of the deselected options that haven't been emitted by the change event. */

          this._deselectedToEmit = [];
          /** Keeps track of the selected options that haven't been emitted by the change event. */

          this._selectedToEmit = [];
          /** Event emitted when the value has changed. */

          this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();

          if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
              initiallySelectedValues.forEach(function (value) {
                return _this24._markSelected(value);
              });
            } else {
              this._markSelected(initiallySelectedValues[0]);
            } // Clear the array in order to avoid firing the change event for preselected values.


            this._selectedToEmit.length = 0;
          }
        }
        /** Selected values. */


        _createClass(_SelectionModel, [{
          key: "selected",
          get: function get() {
            if (!this._selected) {
              this._selected = Array.from(this._selection.values());
            }

            return this._selected;
          }
          /**
           * Selects a value or an array of values.
           */

        }, {
          key: "select",
          value: function select() {
            var _this25 = this;

            for (var _len2 = arguments.length, values = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              values[_key2] = arguments[_key2];
            }

            this._verifyValueAssignment(values);

            values.forEach(function (value) {
              return _this25._markSelected(value);
            });

            this._emitChangeEvent();
          }
          /**
           * Deselects a value or an array of values.
           */

        }, {
          key: "deselect",
          value: function deselect() {
            var _this26 = this;

            for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              values[_key3] = arguments[_key3];
            }

            this._verifyValueAssignment(values);

            values.forEach(function (value) {
              return _this26._unmarkSelected(value);
            });

            this._emitChangeEvent();
          }
          /**
           * Toggles a value between selected and deselected.
           */

        }, {
          key: "toggle",
          value: function toggle(value) {
            this.isSelected(value) ? this.deselect(value) : this.select(value);
          }
          /**
           * Clears all of the selected values.
           */

        }, {
          key: "clear",
          value: function clear() {
            this._unmarkAll();

            this._emitChangeEvent();
          }
          /**
           * Determines whether a value is selected.
           */

        }, {
          key: "isSelected",
          value: function isSelected(value) {
            return this._selection.has(value);
          }
          /**
           * Determines whether the model does not have a value.
           */

        }, {
          key: "isEmpty",
          value: function isEmpty() {
            return this._selection.size === 0;
          }
          /**
           * Determines whether the model has a value.
           */

        }, {
          key: "hasValue",
          value: function hasValue() {
            return !this.isEmpty();
          }
          /**
           * Sorts the selected values based on a predicate function.
           */

        }, {
          key: "sort",
          value: function sort(predicate) {
            if (this._multiple && this.selected) {
              this._selected.sort(predicate);
            }
          }
          /**
           * Gets whether multiple values can be selected.
           */

        }, {
          key: "isMultipleSelection",
          value: function isMultipleSelection() {
            return this._multiple;
          }
          /** Emits a change event and clears the records of selected and deselected values. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            // Clear the selected values so they can be re-cached.
            this._selected = null;

            if (this._selectedToEmit.length || this._deselectedToEmit.length) {
              this.changed.next({
                source: this,
                added: this._selectedToEmit,
                removed: this._deselectedToEmit
              });
              this._deselectedToEmit = [];
              this._selectedToEmit = [];
            }
          }
          /** Selects a value. */

        }, {
          key: "_markSelected",
          value: function _markSelected(value) {
            if (!this.isSelected(value)) {
              if (!this._multiple) {
                this._unmarkAll();
              }

              this._selection.add(value);

              if (this._emitChanges) {
                this._selectedToEmit.push(value);
              }
            }
          }
          /** Deselects a value. */

        }, {
          key: "_unmarkSelected",
          value: function _unmarkSelected(value) {
            if (this.isSelected(value)) {
              this._selection["delete"](value);

              if (this._emitChanges) {
                this._deselectedToEmit.push(value);
              }
            }
          }
          /** Clears out the selected values. */

        }, {
          key: "_unmarkAll",
          value: function _unmarkAll() {
            var _this27 = this;

            if (!this.isEmpty()) {
              this._selection.forEach(function (value) {
                return _this27._unmarkSelected(value);
              });
            }
          }
          /**
           * Verifies the value assignment and throws an error if the specified value array is
           * including multiple values while the selection model is not supporting multiple values.
           */

        }, {
          key: "_verifyValueAssignment",
          value: function _verifyValueAssignment(values) {
            if (values.length > 1 && !this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw _getMultipleValuesInSingleSelectionError();
            }
          }
        }]);

        return _SelectionModel;
      }();
      /**
       * Returns an error that reports that multiple values are passed into a selection model
       * with a single value.
       * @docs-private
       */


      function _getMultipleValuesInSingleSelectionError() {
        return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Class to coordinate unique selection based on name.
       * Intended to be consumed as an Angular service.
       * This service is needed because native radio change events are only fired on the item currently
       * being selected, and we still need to uncheck the previous selection.
       *
       * This service does not *store* any IDs and names because they may change at any time, so it is
       * less error-prone if they are simply passed through when the events occur.
       */


      var _UniqueSelectionDispatcher = /*#__PURE__*/function () {
        function _UniqueSelectionDispatcher() {
          _classCallCheck(this, _UniqueSelectionDispatcher);

          this._listeners = [];
        }
        /**
         * Notify other items that selection for the given name has been set.
         * @param id ID of the item.
         * @param name Name of the item.
         */


        _createClass(_UniqueSelectionDispatcher, [{
          key: "notify",
          value: function notify(id, name) {
            var _iterator2 = _createForOfIteratorHelper(this._listeners),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var listener = _step2.value;
                listener(id, name);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          /**
           * Listen for future changes to item selection.
           * @return Function used to deregister listener
           */

        }, {
          key: "listen",
          value: function listen(listener) {
            var _this28 = this;

            this._listeners.push(listener);

            return function () {
              _this28._listeners = _this28._listeners.filter(function (registered) {
                return listener !== registered;
              });
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._listeners = [];
          }
        }]);

        return _UniqueSelectionDispatcher;
      }();

      _UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
        return new (t || _UniqueSelectionDispatcher)();
      };

      _UniqueSelectionDispatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        factory: function UniqueSelectionDispatcher_Factory() {
          return new _UniqueSelectionDispatcher();
        },
        token: _UniqueSelectionDispatcher,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_UniqueSelectionDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Injection token for {@link _ViewRepeater}. This token is for use by Angular Material only.
       * @docs-private
       */


      var _VIEW_REPEATER_STRATEGY2 = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('_ViewRepeater');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    90084: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "A": function A() {
          return (
            /* binding */
            _A
          );
        },

        /* harmony export */
        "ALT": function ALT() {
          return (
            /* binding */
            _ALT
          );
        },

        /* harmony export */
        "APOSTROPHE": function APOSTROPHE() {
          return (
            /* binding */
            _APOSTROPHE
          );
        },

        /* harmony export */
        "AT_SIGN": function AT_SIGN() {
          return (
            /* binding */
            _AT_SIGN
          );
        },

        /* harmony export */
        "B": function B() {
          return (
            /* binding */
            _B
          );
        },

        /* harmony export */
        "BACKSLASH": function BACKSLASH() {
          return (
            /* binding */
            _BACKSLASH
          );
        },

        /* harmony export */
        "BACKSPACE": function BACKSPACE() {
          return (
            /* binding */
            _BACKSPACE
          );
        },

        /* harmony export */
        "C": function C() {
          return (
            /* binding */
            _C
          );
        },

        /* harmony export */
        "CAPS_LOCK": function CAPS_LOCK() {
          return (
            /* binding */
            _CAPS_LOCK
          );
        },

        /* harmony export */
        "CLOSE_SQUARE_BRACKET": function CLOSE_SQUARE_BRACKET() {
          return (
            /* binding */
            _CLOSE_SQUARE_BRACKET
          );
        },

        /* harmony export */
        "COMMA": function COMMA() {
          return (
            /* binding */
            _COMMA
          );
        },

        /* harmony export */
        "CONTEXT_MENU": function CONTEXT_MENU() {
          return (
            /* binding */
            _CONTEXT_MENU
          );
        },

        /* harmony export */
        "CONTROL": function CONTROL() {
          return (
            /* binding */
            _CONTROL
          );
        },

        /* harmony export */
        "D": function D() {
          return (
            /* binding */
            _D
          );
        },

        /* harmony export */
        "DASH": function DASH() {
          return (
            /* binding */
            _DASH
          );
        },

        /* harmony export */
        "DELETE": function DELETE() {
          return (
            /* binding */
            _DELETE
          );
        },

        /* harmony export */
        "DOWN_ARROW": function DOWN_ARROW() {
          return (
            /* binding */
            _DOWN_ARROW
          );
        },

        /* harmony export */
        "E": function E() {
          return (
            /* binding */
            _E
          );
        },

        /* harmony export */
        "EIGHT": function EIGHT() {
          return (
            /* binding */
            _EIGHT
          );
        },

        /* harmony export */
        "END": function END() {
          return (
            /* binding */
            _END
          );
        },

        /* harmony export */
        "ENTER": function ENTER() {
          return (
            /* binding */
            _ENTER
          );
        },

        /* harmony export */
        "EQUALS": function EQUALS() {
          return (
            /* binding */
            _EQUALS
          );
        },

        /* harmony export */
        "ESCAPE": function ESCAPE() {
          return (
            /* binding */
            _ESCAPE
          );
        },

        /* harmony export */
        "F": function F() {
          return (
            /* binding */
            _F
          );
        },

        /* harmony export */
        "F1": function F1() {
          return (
            /* binding */
            _F2
          );
        },

        /* harmony export */
        "F10": function F10() {
          return (
            /* binding */
            _F3
          );
        },

        /* harmony export */
        "F11": function F11() {
          return (
            /* binding */
            _F4
          );
        },

        /* harmony export */
        "F12": function F12() {
          return (
            /* binding */
            _F5
          );
        },

        /* harmony export */
        "F2": function F2() {
          return (
            /* binding */
            _F6
          );
        },

        /* harmony export */
        "F3": function F3() {
          return (
            /* binding */
            _F7
          );
        },

        /* harmony export */
        "F4": function F4() {
          return (
            /* binding */
            _F8
          );
        },

        /* harmony export */
        "F5": function F5() {
          return (
            /* binding */
            _F9
          );
        },

        /* harmony export */
        "F6": function F6() {
          return (
            /* binding */
            _F10
          );
        },

        /* harmony export */
        "F7": function F7() {
          return (
            /* binding */
            _F11
          );
        },

        /* harmony export */
        "F8": function F8() {
          return (
            /* binding */
            _F12
          );
        },

        /* harmony export */
        "F9": function F9() {
          return (
            /* binding */
            _F13
          );
        },

        /* harmony export */
        "FF_EQUALS": function FF_EQUALS() {
          return (
            /* binding */
            _FF_EQUALS
          );
        },

        /* harmony export */
        "FF_MINUS": function FF_MINUS() {
          return (
            /* binding */
            _FF_MINUS
          );
        },

        /* harmony export */
        "FF_MUTE": function FF_MUTE() {
          return (
            /* binding */
            _FF_MUTE
          );
        },

        /* harmony export */
        "FF_SEMICOLON": function FF_SEMICOLON() {
          return (
            /* binding */
            _FF_SEMICOLON
          );
        },

        /* harmony export */
        "FF_VOLUME_DOWN": function FF_VOLUME_DOWN() {
          return (
            /* binding */
            _FF_VOLUME_DOWN
          );
        },

        /* harmony export */
        "FF_VOLUME_UP": function FF_VOLUME_UP() {
          return (
            /* binding */
            _FF_VOLUME_UP
          );
        },

        /* harmony export */
        "FIRST_MEDIA": function FIRST_MEDIA() {
          return (
            /* binding */
            _FIRST_MEDIA
          );
        },

        /* harmony export */
        "FIVE": function FIVE() {
          return (
            /* binding */
            _FIVE
          );
        },

        /* harmony export */
        "FOUR": function FOUR() {
          return (
            /* binding */
            _FOUR
          );
        },

        /* harmony export */
        "G": function G() {
          return (
            /* binding */
            _G
          );
        },

        /* harmony export */
        "H": function H() {
          return (
            /* binding */
            _H
          );
        },

        /* harmony export */
        "HOME": function HOME() {
          return (
            /* binding */
            _HOME
          );
        },

        /* harmony export */
        "I": function I() {
          return (
            /* binding */
            _I
          );
        },

        /* harmony export */
        "INSERT": function INSERT() {
          return (
            /* binding */
            _INSERT
          );
        },

        /* harmony export */
        "J": function J() {
          return (
            /* binding */
            _J
          );
        },

        /* harmony export */
        "K": function K() {
          return (
            /* binding */
            _K
          );
        },

        /* harmony export */
        "L": function L() {
          return (
            /* binding */
            _L
          );
        },

        /* harmony export */
        "LAST_MEDIA": function LAST_MEDIA() {
          return (
            /* binding */
            _LAST_MEDIA
          );
        },

        /* harmony export */
        "LEFT_ARROW": function LEFT_ARROW() {
          return (
            /* binding */
            _LEFT_ARROW
          );
        },

        /* harmony export */
        "M": function M() {
          return (
            /* binding */
            _M
          );
        },

        /* harmony export */
        "MAC_ENTER": function MAC_ENTER() {
          return (
            /* binding */
            _MAC_ENTER
          );
        },

        /* harmony export */
        "MAC_META": function MAC_META() {
          return (
            /* binding */
            _MAC_META
          );
        },

        /* harmony export */
        "MAC_WK_CMD_LEFT": function MAC_WK_CMD_LEFT() {
          return (
            /* binding */
            _MAC_WK_CMD_LEFT
          );
        },

        /* harmony export */
        "MAC_WK_CMD_RIGHT": function MAC_WK_CMD_RIGHT() {
          return (
            /* binding */
            _MAC_WK_CMD_RIGHT
          );
        },

        /* harmony export */
        "META": function META() {
          return (
            /* binding */
            _META
          );
        },

        /* harmony export */
        "MUTE": function MUTE() {
          return (
            /* binding */
            _MUTE
          );
        },

        /* harmony export */
        "N": function N() {
          return (
            /* binding */
            _N
          );
        },

        /* harmony export */
        "NINE": function NINE() {
          return (
            /* binding */
            _NINE
          );
        },

        /* harmony export */
        "NUMPAD_DIVIDE": function NUMPAD_DIVIDE() {
          return (
            /* binding */
            _NUMPAD_DIVIDE
          );
        },

        /* harmony export */
        "NUMPAD_EIGHT": function NUMPAD_EIGHT() {
          return (
            /* binding */
            _NUMPAD_EIGHT
          );
        },

        /* harmony export */
        "NUMPAD_FIVE": function NUMPAD_FIVE() {
          return (
            /* binding */
            _NUMPAD_FIVE
          );
        },

        /* harmony export */
        "NUMPAD_FOUR": function NUMPAD_FOUR() {
          return (
            /* binding */
            _NUMPAD_FOUR
          );
        },

        /* harmony export */
        "NUMPAD_MINUS": function NUMPAD_MINUS() {
          return (
            /* binding */
            _NUMPAD_MINUS
          );
        },

        /* harmony export */
        "NUMPAD_MULTIPLY": function NUMPAD_MULTIPLY() {
          return (
            /* binding */
            _NUMPAD_MULTIPLY
          );
        },

        /* harmony export */
        "NUMPAD_NINE": function NUMPAD_NINE() {
          return (
            /* binding */
            _NUMPAD_NINE
          );
        },

        /* harmony export */
        "NUMPAD_ONE": function NUMPAD_ONE() {
          return (
            /* binding */
            _NUMPAD_ONE
          );
        },

        /* harmony export */
        "NUMPAD_PERIOD": function NUMPAD_PERIOD() {
          return (
            /* binding */
            _NUMPAD_PERIOD
          );
        },

        /* harmony export */
        "NUMPAD_PLUS": function NUMPAD_PLUS() {
          return (
            /* binding */
            _NUMPAD_PLUS
          );
        },

        /* harmony export */
        "NUMPAD_SEVEN": function NUMPAD_SEVEN() {
          return (
            /* binding */
            _NUMPAD_SEVEN
          );
        },

        /* harmony export */
        "NUMPAD_SIX": function NUMPAD_SIX() {
          return (
            /* binding */
            _NUMPAD_SIX
          );
        },

        /* harmony export */
        "NUMPAD_THREE": function NUMPAD_THREE() {
          return (
            /* binding */
            _NUMPAD_THREE
          );
        },

        /* harmony export */
        "NUMPAD_TWO": function NUMPAD_TWO() {
          return (
            /* binding */
            _NUMPAD_TWO
          );
        },

        /* harmony export */
        "NUMPAD_ZERO": function NUMPAD_ZERO() {
          return (
            /* binding */
            _NUMPAD_ZERO
          );
        },

        /* harmony export */
        "NUM_CENTER": function NUM_CENTER() {
          return (
            /* binding */
            _NUM_CENTER
          );
        },

        /* harmony export */
        "NUM_LOCK": function NUM_LOCK() {
          return (
            /* binding */
            _NUM_LOCK
          );
        },

        /* harmony export */
        "O": function O() {
          return (
            /* binding */
            _O
          );
        },

        /* harmony export */
        "ONE": function ONE() {
          return (
            /* binding */
            _ONE
          );
        },

        /* harmony export */
        "OPEN_SQUARE_BRACKET": function OPEN_SQUARE_BRACKET() {
          return (
            /* binding */
            _OPEN_SQUARE_BRACKET
          );
        },

        /* harmony export */
        "P": function P() {
          return (
            /* binding */
            _P
          );
        },

        /* harmony export */
        "PAGE_DOWN": function PAGE_DOWN() {
          return (
            /* binding */
            _PAGE_DOWN
          );
        },

        /* harmony export */
        "PAGE_UP": function PAGE_UP() {
          return (
            /* binding */
            _PAGE_UP
          );
        },

        /* harmony export */
        "PAUSE": function PAUSE() {
          return (
            /* binding */
            _PAUSE
          );
        },

        /* harmony export */
        "PERIOD": function PERIOD() {
          return (
            /* binding */
            _PERIOD
          );
        },

        /* harmony export */
        "PLUS_SIGN": function PLUS_SIGN() {
          return (
            /* binding */
            _PLUS_SIGN
          );
        },

        /* harmony export */
        "PRINT_SCREEN": function PRINT_SCREEN() {
          return (
            /* binding */
            _PRINT_SCREEN
          );
        },

        /* harmony export */
        "Q": function Q() {
          return (
            /* binding */
            _Q
          );
        },

        /* harmony export */
        "QUESTION_MARK": function QUESTION_MARK() {
          return (
            /* binding */
            _QUESTION_MARK
          );
        },

        /* harmony export */
        "R": function R() {
          return (
            /* binding */
            _R
          );
        },

        /* harmony export */
        "RIGHT_ARROW": function RIGHT_ARROW() {
          return (
            /* binding */
            _RIGHT_ARROW
          );
        },

        /* harmony export */
        "S": function S() {
          return (
            /* binding */
            _S
          );
        },

        /* harmony export */
        "SCROLL_LOCK": function SCROLL_LOCK() {
          return (
            /* binding */
            _SCROLL_LOCK
          );
        },

        /* harmony export */
        "SEMICOLON": function SEMICOLON() {
          return (
            /* binding */
            _SEMICOLON
          );
        },

        /* harmony export */
        "SEVEN": function SEVEN() {
          return (
            /* binding */
            _SEVEN
          );
        },

        /* harmony export */
        "SHIFT": function SHIFT() {
          return (
            /* binding */
            _SHIFT
          );
        },

        /* harmony export */
        "SINGLE_QUOTE": function SINGLE_QUOTE() {
          return (
            /* binding */
            _SINGLE_QUOTE
          );
        },

        /* harmony export */
        "SIX": function SIX() {
          return (
            /* binding */
            _SIX
          );
        },

        /* harmony export */
        "SLASH": function SLASH() {
          return (
            /* binding */
            _SLASH
          );
        },

        /* harmony export */
        "SPACE": function SPACE() {
          return (
            /* binding */
            _SPACE
          );
        },

        /* harmony export */
        "T": function T() {
          return (
            /* binding */
            _T
          );
        },

        /* harmony export */
        "TAB": function TAB() {
          return (
            /* binding */
            _TAB
          );
        },

        /* harmony export */
        "THREE": function THREE() {
          return (
            /* binding */
            _THREE
          );
        },

        /* harmony export */
        "TILDE": function TILDE() {
          return (
            /* binding */
            _TILDE
          );
        },

        /* harmony export */
        "TWO": function TWO() {
          return (
            /* binding */
            _TWO
          );
        },

        /* harmony export */
        "U": function U() {
          return (
            /* binding */
            _U
          );
        },

        /* harmony export */
        "UP_ARROW": function UP_ARROW() {
          return (
            /* binding */
            _UP_ARROW
          );
        },

        /* harmony export */
        "V": function V() {
          return (
            /* binding */
            _V
          );
        },

        /* harmony export */
        "VOLUME_DOWN": function VOLUME_DOWN() {
          return (
            /* binding */
            _VOLUME_DOWN
          );
        },

        /* harmony export */
        "VOLUME_UP": function VOLUME_UP() {
          return (
            /* binding */
            _VOLUME_UP
          );
        },

        /* harmony export */
        "W": function W() {
          return (
            /* binding */
            _W
          );
        },

        /* harmony export */
        "X": function X() {
          return (
            /* binding */
            _X
          );
        },

        /* harmony export */
        "Y": function Y() {
          return (
            /* binding */
            _Y
          );
        },

        /* harmony export */
        "Z": function Z() {
          return (
            /* binding */
            _Z
          );
        },

        /* harmony export */
        "ZERO": function ZERO() {
          return (
            /* binding */
            _ZERO
          );
        },

        /* harmony export */
        "hasModifierKey": function hasModifierKey() {
          return (
            /* binding */
            _hasModifierKey
          );
        }
        /* harmony export */

      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MAC_ENTER = 3;
      var _BACKSPACE = 8;
      var _TAB = 9;
      var _NUM_CENTER = 12;
      var _ENTER = 13;
      var _SHIFT = 16;
      var _CONTROL = 17;
      var _ALT = 18;
      var _PAUSE = 19;
      var _CAPS_LOCK = 20;
      var _ESCAPE = 27;
      var _SPACE = 32;
      var _PAGE_UP = 33;
      var _PAGE_DOWN = 34;
      var _END = 35;
      var _HOME = 36;
      var _LEFT_ARROW = 37;
      var _UP_ARROW = 38;
      var _RIGHT_ARROW = 39;
      var _DOWN_ARROW = 40;
      var _PLUS_SIGN = 43;
      var _PRINT_SCREEN = 44;
      var _INSERT = 45;
      var _DELETE = 46;
      var _ZERO = 48;
      var _ONE = 49;
      var _TWO = 50;
      var _THREE = 51;
      var _FOUR = 52;
      var _FIVE = 53;
      var _SIX = 54;
      var _SEVEN = 55;
      var _EIGHT = 56;
      var _NINE = 57;
      var _FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186

      var _FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187

      var _QUESTION_MARK = 63;
      var _AT_SIGN = 64;
      var _A = 65;
      var _B = 66;
      var _C = 67;
      var _D = 68;
      var _E = 69;
      var _F = 70;
      var _G = 71;
      var _H = 72;
      var _I = 73;
      var _J = 74;
      var _K = 75;
      var _L = 76;
      var _M = 77;
      var _N = 78;
      var _O = 79;
      var _P = 80;
      var _Q = 81;
      var _R = 82;
      var _S = 83;
      var _T = 84;
      var _U = 85;
      var _V = 86;
      var _W = 87;
      var _X = 88;
      var _Y = 89;
      var _Z = 90;
      var _META = 91; // WIN_KEY_LEFT

      var _MAC_WK_CMD_LEFT = 91;
      var _MAC_WK_CMD_RIGHT = 93;
      var _CONTEXT_MENU = 93;
      var _NUMPAD_ZERO = 96;
      var _NUMPAD_ONE = 97;
      var _NUMPAD_TWO = 98;
      var _NUMPAD_THREE = 99;
      var _NUMPAD_FOUR = 100;
      var _NUMPAD_FIVE = 101;
      var _NUMPAD_SIX = 102;
      var _NUMPAD_SEVEN = 103;
      var _NUMPAD_EIGHT = 104;
      var _NUMPAD_NINE = 105;
      var _NUMPAD_MULTIPLY = 106;
      var _NUMPAD_PLUS = 107;
      var _NUMPAD_MINUS = 109;
      var _NUMPAD_PERIOD = 110;
      var _NUMPAD_DIVIDE = 111;
      var _F2 = 112;
      var _F6 = 113;
      var _F7 = 114;
      var _F8 = 115;
      var _F9 = 116;
      var _F10 = 117;
      var _F11 = 118;
      var _F12 = 119;
      var _F13 = 120;
      var _F3 = 121;
      var _F4 = 122;
      var _F5 = 123;
      var _NUM_LOCK = 144;
      var _SCROLL_LOCK = 145;
      var _FIRST_MEDIA = 166;
      var _FF_MINUS = 173;
      var _MUTE = 173; // Firefox (Gecko) fires 181 for MUTE

      var _VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN

      var _VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP

      var _FF_MUTE = 181;
      var _FF_VOLUME_DOWN = 182;
      var _LAST_MEDIA = 183;
      var _FF_VOLUME_UP = 183;
      var _SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON

      var _EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS

      var _COMMA = 188;
      var _DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS

      var _PERIOD = 190;
      var _SLASH = 191;
      var _APOSTROPHE = 192;
      var _TILDE = 192;
      var _OPEN_SQUARE_BRACKET = 219;
      var _BACKSLASH = 220;
      var _CLOSE_SQUARE_BRACKET = 221;
      var _SINGLE_QUOTE = 222;
      var _MAC_META = 224;
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Checks whether a modifier key is pressed.
       * @param event Event to be checked.
       */

      function _hasModifierKey(event) {
        for (var _len4 = arguments.length, modifiers = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          modifiers[_key4 - 1] = arguments[_key4];
        }

        if (modifiers.length) {
          return modifiers.some(function (modifier) {
            return event[modifier];
          });
        }

        return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    90851: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CdkObserveContent": function CdkObserveContent() {
          return (
            /* binding */
            _CdkObserveContent
          );
        },

        /* harmony export */
        "ContentObserver": function ContentObserver() {
          return (
            /* binding */
            _ContentObserver
          );
        },

        /* harmony export */
        "MutationObserverFactory": function MutationObserverFactory() {
          return (
            /* binding */
            _MutationObserverFactory
          );
        },

        /* harmony export */
        "ObserversModule": function ObserversModule() {
          return (
            /* binding */
            _ObserversModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      54926);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      71775);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
       * @docs-private
       */


      var _MutationObserverFactory = /*#__PURE__*/function () {
        function _MutationObserverFactory() {
          _classCallCheck(this, _MutationObserverFactory);
        }

        _createClass(_MutationObserverFactory, [{
          key: "create",
          value: function create(callback) {
            return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
          }
        }]);

        return _MutationObserverFactory;
      }();

      _MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
        return new (t || _MutationObserverFactory)();
      };

      _MutationObserverFactory.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function MutationObserverFactory_Factory() {
          return new _MutationObserverFactory();
        },
        token: _MutationObserverFactory,
        providedIn: "root"
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MutationObserverFactory, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /** An injectable service that allows watching elements for changes to their content. */


      var _ContentObserver = /*#__PURE__*/function () {
        function _ContentObserver(_mutationObserverFactory) {
          _classCallCheck(this, _ContentObserver);

          this._mutationObserverFactory = _mutationObserverFactory;
          /** Keeps track of the existing MutationObservers so they can be reused. */

          this._observedElements = new Map();
        }

        _createClass(_ContentObserver, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this29 = this;

            this._observedElements.forEach(function (_, element) {
              return _this29._cleanupObserver(element);
            });
          }
        }, {
          key: "observe",
          value: function observe(elementOrRef) {
            var _this30 = this;

            var element = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(elementOrRef);
            return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(function (observer) {
              var stream = _this30._observeElement(element);

              var subscription = stream.subscribe(observer);
              return function () {
                subscription.unsubscribe();

                _this30._unobserveElement(element);
              };
            });
          }
          /**
           * Observes the given element by using the existing MutationObserver if available, or creating a
           * new one if not.
           */

        }, {
          key: "_observeElement",
          value: function _observeElement(element) {
            if (!this._observedElements.has(element)) {
              var stream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();

              var observer = this._mutationObserverFactory.create(function (mutations) {
                return stream.next(mutations);
              });

              if (observer) {
                observer.observe(element, {
                  characterData: true,
                  childList: true,
                  subtree: true
                });
              }

              this._observedElements.set(element, {
                observer: observer,
                stream: stream,
                count: 1
              });
            } else {
              this._observedElements.get(element).count++;
            }

            return this._observedElements.get(element).stream;
          }
          /**
           * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
           * observing this element.
           */

        }, {
          key: "_unobserveElement",
          value: function _unobserveElement(element) {
            if (this._observedElements.has(element)) {
              this._observedElements.get(element).count--;

              if (!this._observedElements.get(element).count) {
                this._cleanupObserver(element);
              }
            }
          }
          /** Clean up the underlying MutationObserver for the specified element. */

        }, {
          key: "_cleanupObserver",
          value: function _cleanupObserver(element) {
            if (this._observedElements.has(element)) {
              var _this$_observedElemen = this._observedElements.get(element),
                  observer = _this$_observedElemen.observer,
                  stream = _this$_observedElemen.stream;

              if (observer) {
                observer.disconnect();
              }

              stream.complete();

              this._observedElements["delete"](element);
            }
          }
        }]);

        return _ContentObserver;
      }();

      _ContentObserver.ɵfac = function ContentObserver_Factory(t) {
        return new (t || _ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_MutationObserverFactory));
      };

      _ContentObserver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function ContentObserver_Factory() {
          return new _ContentObserver(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_MutationObserverFactory));
        },
        token: _ContentObserver,
        providedIn: "root"
      });

      _ContentObserver.ctorParameters = function () {
        return [{
          type: _MutationObserverFactory
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ContentObserver, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _MutationObserverFactory
          }];
        }, null);
      })();
      /**
       * Directive that triggers a callback whenever the content of
       * its associated element has changed.
       */


      var _CdkObserveContent = /*#__PURE__*/function () {
        function _CdkObserveContent(_contentObserver, _elementRef, _ngZone) {
          _classCallCheck(this, _CdkObserveContent);

          this._contentObserver = _contentObserver;
          this._elementRef = _elementRef;
          this._ngZone = _ngZone;
          /** Event emitted for each change in the element's content. */

          this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this._disabled = false;
          this._currentSubscription = null;
        }
        /**
         * Whether observing content is disabled. This option can be used
         * to disconnect the underlying MutationObserver until it is needed.
         */


        _createClass(_CdkObserveContent, [{
          key: "disabled",
          get: function get() {
            return this._disabled;
          },
          set: function set(value) {
            this._disabled = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
            this._disabled ? this._unsubscribe() : this._subscribe();
          }
          /** Debounce interval for emitting the changes. */

        }, {
          key: "debounce",
          get: function get() {
            return this._debounce;
          },
          set: function set(value) {
            this._debounce = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(value);

            this._subscribe();
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            if (!this._currentSubscription && !this.disabled) {
              this._subscribe();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._unsubscribe();
          }
        }, {
          key: "_subscribe",
          value: function _subscribe() {
            var _this31 = this;

            this._unsubscribe();

            var stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
            // Consider brining it back inside the zone next time we're making breaking changes.
            // Bringing it back inside can cause things like infinite change detection loops and changed
            // after checked errors if people's code isn't handling it properly.


            this._ngZone.runOutsideAngular(function () {
              _this31._currentSubscription = (_this31.debounce ? stream.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(_this31.debounce)) : stream).subscribe(_this31.event);
            });
          }
        }, {
          key: "_unsubscribe",
          value: function _unsubscribe() {
            var _a;

            (_a = this._currentSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
          }
        }]);

        return _CdkObserveContent;
      }();

      _CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
        return new (t || _CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _CdkObserveContent.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkObserveContent,
        selectors: [["", "cdkObserveContent", ""]],
        inputs: {
          disabled: ["cdkObserveContentDisabled", "disabled"],
          debounce: "debounce"
        },
        outputs: {
          event: "cdkObserveContent"
        },
        exportAs: ["cdkObserveContent"]
      });

      _CdkObserveContent.ctorParameters = function () {
        return [{
          type: _ContentObserver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }];
      };

      _CdkObserveContent.propDecorators = {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['cdkObserveContent']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['cdkObserveContentDisabled']
        }],
        debounce: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkObserveContent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkObserveContent]',
            exportAs: 'cdkObserveContent'
          }]
        }], function () {
          return [{
            type: _ContentObserver
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }];
        }, {
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['cdkObserveContent']
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['cdkObserveContentDisabled']
          }],
          debounce: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _ObserversModule = function _ObserversModule() {
        _classCallCheck(this, _ObserversModule);
      };

      _ObserversModule.ɵfac = function ObserversModule_Factory(t) {
        return new (t || _ObserversModule)();
      };

      _ObserversModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _ObserversModule
      });
      _ObserversModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [_MutationObserverFactory]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ObserversModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            exports: [_CdkObserveContent],
            declarations: [_CdkObserveContent],
            providers: [_MutationObserverFactory]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_ObserversModule, {
          declarations: [_CdkObserveContent],
          exports: [_CdkObserveContent]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    45129: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CdkScrollable": function CdkScrollable() {
          return (
            /* reexport safe */
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.CdkScrollable
          );
        },

        /* harmony export */
        "ScrollDispatcher": function ScrollDispatcher() {
          return (
            /* reexport safe */
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ScrollDispatcher
          );
        },

        /* harmony export */
        "ViewportRuler": function ViewportRuler() {
          return (
            /* reexport safe */
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ViewportRuler
          );
        },

        /* harmony export */
        "BlockScrollStrategy": function BlockScrollStrategy() {
          return (
            /* binding */
            _BlockScrollStrategy
          );
        },

        /* harmony export */
        "CdkConnectedOverlay": function CdkConnectedOverlay() {
          return (
            /* binding */
            _CdkConnectedOverlay
          );
        },

        /* harmony export */
        "CdkOverlayOrigin": function CdkOverlayOrigin() {
          return (
            /* binding */
            _CdkOverlayOrigin
          );
        },

        /* harmony export */
        "CloseScrollStrategy": function CloseScrollStrategy() {
          return (
            /* binding */
            _CloseScrollStrategy
          );
        },

        /* harmony export */
        "ConnectedOverlayPositionChange": function ConnectedOverlayPositionChange() {
          return (
            /* binding */
            _ConnectedOverlayPositionChange
          );
        },

        /* harmony export */
        "ConnectedPositionStrategy": function ConnectedPositionStrategy() {
          return (
            /* binding */
            _ConnectedPositionStrategy
          );
        },

        /* harmony export */
        "ConnectionPositionPair": function ConnectionPositionPair() {
          return (
            /* binding */
            _ConnectionPositionPair
          );
        },

        /* harmony export */
        "FlexibleConnectedPositionStrategy": function FlexibleConnectedPositionStrategy() {
          return (
            /* binding */
            _FlexibleConnectedPositionStrategy
          );
        },

        /* harmony export */
        "FullscreenOverlayContainer": function FullscreenOverlayContainer() {
          return (
            /* binding */
            _FullscreenOverlayContainer
          );
        },

        /* harmony export */
        "GlobalPositionStrategy": function GlobalPositionStrategy() {
          return (
            /* binding */
            _GlobalPositionStrategy
          );
        },

        /* harmony export */
        "NoopScrollStrategy": function NoopScrollStrategy() {
          return (
            /* binding */
            _NoopScrollStrategy
          );
        },

        /* harmony export */
        "Overlay": function Overlay() {
          return (
            /* binding */
            _Overlay
          );
        },

        /* harmony export */
        "OverlayConfig": function OverlayConfig() {
          return (
            /* binding */
            _OverlayConfig
          );
        },

        /* harmony export */
        "OverlayContainer": function OverlayContainer() {
          return (
            /* binding */
            _OverlayContainer
          );
        },

        /* harmony export */
        "OverlayKeyboardDispatcher": function OverlayKeyboardDispatcher() {
          return (
            /* binding */
            _OverlayKeyboardDispatcher
          );
        },

        /* harmony export */
        "OverlayModule": function OverlayModule() {
          return (
            /* binding */
            _OverlayModule
          );
        },

        /* harmony export */
        "OverlayOutsideClickDispatcher": function OverlayOutsideClickDispatcher() {
          return (
            /* binding */
            _OverlayOutsideClickDispatcher
          );
        },

        /* harmony export */
        "OverlayPositionBuilder": function OverlayPositionBuilder() {
          return (
            /* binding */
            _OverlayPositionBuilder
          );
        },

        /* harmony export */
        "OverlayRef": function OverlayRef() {
          return (
            /* binding */
            _OverlayRef
          );
        },

        /* harmony export */
        "RepositionScrollStrategy": function RepositionScrollStrategy() {
          return (
            /* binding */
            _RepositionScrollStrategy
          );
        },

        /* harmony export */
        "ScrollStrategyOptions": function ScrollStrategyOptions() {
          return (
            /* binding */
            _ScrollStrategyOptions
          );
        },

        /* harmony export */
        "ScrollingVisibility": function ScrollingVisibility() {
          return (
            /* binding */
            _ScrollingVisibility
          );
        },

        /* harmony export */
        "validateHorizontalPosition": function validateHorizontalPosition() {
          return (
            /* binding */
            _validateHorizontalPosition
          );
        },

        /* harmony export */
        "validateVerticalPosition": function validateVerticalPosition() {
          return (
            /* binding */
            _validateVerticalPosition
          );
        },

        /* harmony export */
        "ɵangular_material_src_cdk_overlay_overlay_a": function ɵangular_material_src_cdk_overlay_overlay_a() {
          return (
            /* binding */
            CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY
          );
        },

        /* harmony export */
        "ɵangular_material_src_cdk_overlay_overlay_b": function ɵangular_material_src_cdk_overlay_overlay_b() {
          return (
            /* binding */
            CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
          );
        },

        /* harmony export */
        "ɵangular_material_src_cdk_overlay_overlay_c": function ɵangular_material_src_cdk_overlay_overlay_c() {
          return (
            /* binding */
            CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER
          );
        },

        /* harmony export */
        "ɵangular_material_src_cdk_overlay_overlay_d": function ɵangular_material_src_cdk_overlay_overlay_d() {
          return (
            /* binding */
            BaseOverlayDispatcher
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      42791);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/cdk/platform */
      36145);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      772);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/cdk/portal */
      40912);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      77127);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      17159);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      35116);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      44094);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs/operators */
      59913);
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      90084);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var scrollBehaviorSupported = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.supportsScrollBehavior)();
      /**
       * Strategy that will prevent the user from scrolling while the overlay is visible.
       */

      var _BlockScrollStrategy = /*#__PURE__*/function () {
        function _BlockScrollStrategy(_viewportRuler, document) {
          _classCallCheck(this, _BlockScrollStrategy);

          this._viewportRuler = _viewportRuler;
          this._previousHTMLStyles = {
            top: '',
            left: ''
          };
          this._isEnabled = false;
          this._document = document;
        }
        /** Attaches this scroll strategy to an overlay. */


        _createClass(_BlockScrollStrategy, [{
          key: "attach",
          value: function attach() {}
          /** Blocks page-level scroll while the attached overlay is open. */

        }, {
          key: "enable",
          value: function enable() {
            if (this._canBeEnabled()) {
              var root = this._document.documentElement;
              this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(); // Cache the previous inline styles in case the user had set them.

              this._previousHTMLStyles.left = root.style.left || '';
              this._previousHTMLStyles.top = root.style.top || ''; // Note: we're using the `html` node, instead of the `body`, because the `body` may
              // have the user agent margin, whereas the `html` is guaranteed not to have one.

              root.style.left = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(-this._previousScrollPosition.left);
              root.style.top = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(-this._previousScrollPosition.top);
              root.classList.add('cdk-global-scrollblock');
              this._isEnabled = true;
            }
          }
          /** Unblocks page-level scroll while the attached overlay is open. */

        }, {
          key: "disable",
          value: function disable() {
            if (this._isEnabled) {
              var html = this._document.documentElement;
              var body = this._document.body;
              var htmlStyle = html.style;
              var bodyStyle = body.style;
              var previousHtmlScrollBehavior = htmlStyle.scrollBehavior || '';
              var previousBodyScrollBehavior = bodyStyle.scrollBehavior || '';
              this._isEnabled = false;
              htmlStyle.left = this._previousHTMLStyles.left;
              htmlStyle.top = this._previousHTMLStyles.top;
              html.classList.remove('cdk-global-scrollblock'); // Disable user-defined smooth scrolling temporarily while we restore the scroll position.
              // See https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior
              // Note that we don't mutate the property if the browser doesn't support `scroll-behavior`,
              // because it can throw off feature detections in `supportsScrollBehavior` which
              // checks for `'scrollBehavior' in documentElement.style`.

              if (scrollBehaviorSupported) {
                htmlStyle.scrollBehavior = bodyStyle.scrollBehavior = 'auto';
              }

              window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top);

              if (scrollBehaviorSupported) {
                htmlStyle.scrollBehavior = previousHtmlScrollBehavior;
                bodyStyle.scrollBehavior = previousBodyScrollBehavior;
              }
            }
          }
        }, {
          key: "_canBeEnabled",
          value: function _canBeEnabled() {
            // Since the scroll strategies can't be singletons, we have to use a global CSS class
            // (`cdk-global-scrollblock`) to make sure that we don't try to disable global
            // scrolling multiple times.
            var html = this._document.documentElement;

            if (html.classList.contains('cdk-global-scrollblock') || this._isEnabled) {
              return false;
            }

            var body = this._document.body;

            var viewport = this._viewportRuler.getViewportSize();

            return body.scrollHeight > viewport.height || body.scrollWidth > viewport.width;
          }
        }]);

        return _BlockScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Returns an error to be thrown when attempting to attach an already-attached scroll strategy.
       */


      function getMatScrollStrategyAlreadyAttachedError() {
        return Error("Scroll strategy has already been attached.");
      }
      /**
       * Strategy that will close the overlay as soon as the user starts scrolling.
       */


      var _CloseScrollStrategy = /*#__PURE__*/function () {
        function _CloseScrollStrategy(_scrollDispatcher, _ngZone, _viewportRuler, _config) {
          var _this32 = this;

          _classCallCheck(this, _CloseScrollStrategy);

          this._scrollDispatcher = _scrollDispatcher;
          this._ngZone = _ngZone;
          this._viewportRuler = _viewportRuler;
          this._config = _config;
          this._scrollSubscription = null;
          /** Detaches the overlay ref and disables the scroll strategy. */

          this._detach = function () {
            _this32.disable();

            if (_this32._overlayRef.hasAttached()) {
              _this32._ngZone.run(function () {
                return _this32._overlayRef.detach();
              });
            }
          };
        }
        /** Attaches this scroll strategy to an overlay. */


        _createClass(_CloseScrollStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            if (this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatScrollStrategyAlreadyAttachedError();
            }

            this._overlayRef = overlayRef;
          }
          /** Enables the closing of the attached overlay on scroll. */

        }, {
          key: "enable",
          value: function enable() {
            var _this33 = this;

            if (this._scrollSubscription) {
              return;
            }

            var stream = this._scrollDispatcher.scrolled(0);

            if (this._config && this._config.threshold && this._config.threshold > 1) {
              this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top;
              this._scrollSubscription = stream.subscribe(function () {
                var scrollPosition = _this33._viewportRuler.getViewportScrollPosition().top;

                if (Math.abs(scrollPosition - _this33._initialScrollPosition) > _this33._config.threshold) {
                  _this33._detach();
                } else {
                  _this33._overlayRef.updatePosition();
                }
              });
            } else {
              this._scrollSubscription = stream.subscribe(this._detach);
            }
          }
          /** Disables the closing the attached overlay on scroll. */

        }, {
          key: "disable",
          value: function disable() {
            if (this._scrollSubscription) {
              this._scrollSubscription.unsubscribe();

              this._scrollSubscription = null;
            }
          }
        }, {
          key: "detach",
          value: function detach() {
            this.disable();
            this._overlayRef = null;
          }
        }]);

        return _CloseScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Scroll strategy that doesn't do anything. */


      var _NoopScrollStrategy = /*#__PURE__*/function () {
        function _NoopScrollStrategy() {
          _classCallCheck(this, _NoopScrollStrategy);
        }

        _createClass(_NoopScrollStrategy, [{
          key: "enable",
          value:
          /** Does nothing, as this scroll strategy is a no-op. */
          function enable() {}
          /** Does nothing, as this scroll strategy is a no-op. */

        }, {
          key: "disable",
          value: function disable() {}
          /** Does nothing, as this scroll strategy is a no-op. */

        }, {
          key: "attach",
          value: function attach() {}
        }]);

        return _NoopScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO(jelbourn): move this to live with the rest of the scrolling code
      // TODO(jelbourn): someday replace this with IntersectionObservers

      /**
       * Gets whether an element is scrolled outside of view by any of its parent scrolling containers.
       * @param element Dimensions of the element (from getBoundingClientRect)
       * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
       * @returns Whether the element is scrolled out of view
       * @docs-private
       */


      function isElementScrolledOutsideView(element, scrollContainers) {
        return scrollContainers.some(function (containerBounds) {
          var outsideAbove = element.bottom < containerBounds.top;
          var outsideBelow = element.top > containerBounds.bottom;
          var outsideLeft = element.right < containerBounds.left;
          var outsideRight = element.left > containerBounds.right;
          return outsideAbove || outsideBelow || outsideLeft || outsideRight;
        });
      }
      /**
       * Gets whether an element is clipped by any of its scrolling containers.
       * @param element Dimensions of the element (from getBoundingClientRect)
       * @param scrollContainers Dimensions of element's scrolling containers (from getBoundingClientRect)
       * @returns Whether the element is clipped
       * @docs-private
       */


      function isElementClippedByScrolling(element, scrollContainers) {
        return scrollContainers.some(function (scrollContainerRect) {
          var clippedAbove = element.top < scrollContainerRect.top;
          var clippedBelow = element.bottom > scrollContainerRect.bottom;
          var clippedLeft = element.left < scrollContainerRect.left;
          var clippedRight = element.right > scrollContainerRect.right;
          return clippedAbove || clippedBelow || clippedLeft || clippedRight;
        });
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Strategy that will update the element position as the user is scrolling.
       */


      var _RepositionScrollStrategy = /*#__PURE__*/function () {
        function _RepositionScrollStrategy(_scrollDispatcher, _viewportRuler, _ngZone, _config) {
          _classCallCheck(this, _RepositionScrollStrategy);

          this._scrollDispatcher = _scrollDispatcher;
          this._viewportRuler = _viewportRuler;
          this._ngZone = _ngZone;
          this._config = _config;
          this._scrollSubscription = null;
        }
        /** Attaches this scroll strategy to an overlay. */


        _createClass(_RepositionScrollStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            if (this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw getMatScrollStrategyAlreadyAttachedError();
            }

            this._overlayRef = overlayRef;
          }
          /** Enables repositioning of the attached overlay on scroll. */

        }, {
          key: "enable",
          value: function enable() {
            var _this34 = this;

            if (!this._scrollSubscription) {
              var throttle = this._config ? this._config.scrollThrottle : 0;
              this._scrollSubscription = this._scrollDispatcher.scrolled(throttle).subscribe(function () {
                _this34._overlayRef.updatePosition(); // TODO(crisbeto): make `close` on by default once all components can handle it.


                if (_this34._config && _this34._config.autoClose) {
                  var overlayRect = _this34._overlayRef.overlayElement.getBoundingClientRect();

                  var _this34$_viewportRule = _this34._viewportRuler.getViewportSize(),
                      width = _this34$_viewportRule.width,
                      height = _this34$_viewportRule.height; // TODO(crisbeto): include all ancestor scroll containers here once
                  // we have a way of exposing the trigger element to the scroll strategy.


                  var parentRects = [{
                    width: width,
                    height: height,
                    bottom: height,
                    right: width,
                    top: 0,
                    left: 0
                  }];

                  if (isElementScrolledOutsideView(overlayRect, parentRects)) {
                    _this34.disable();

                    _this34._ngZone.run(function () {
                      return _this34._overlayRef.detach();
                    });
                  }
                }
              });
            }
          }
          /** Disables repositioning of the attached overlay on scroll. */

        }, {
          key: "disable",
          value: function disable() {
            if (this._scrollSubscription) {
              this._scrollSubscription.unsubscribe();

              this._scrollSubscription = null;
            }
          }
        }, {
          key: "detach",
          value: function detach() {
            this.disable();
            this._overlayRef = null;
          }
        }]);

        return _RepositionScrollStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Options for how an overlay will handle scrolling.
       *
       * Users can provide a custom value for `ScrollStrategyOptions` to replace the default
       * behaviors. This class primarily acts as a factory for ScrollStrategy instances.
       */


      var _ScrollStrategyOptions = function _ScrollStrategyOptions(_scrollDispatcher, _viewportRuler, _ngZone, document) {
        var _this35 = this;

        _classCallCheck(this, _ScrollStrategyOptions);

        this._scrollDispatcher = _scrollDispatcher;
        this._viewportRuler = _viewportRuler;
        this._ngZone = _ngZone;
        /** Do nothing on scroll. */

        this.noop = function () {
          return new _NoopScrollStrategy();
        };
        /**
         * Close the overlay as soon as the user scrolls.
         * @param config Configuration to be used inside the scroll strategy.
         */


        this.close = function (config) {
          return new _CloseScrollStrategy(_this35._scrollDispatcher, _this35._ngZone, _this35._viewportRuler, config);
        };
        /** Block scrolling. */


        this.block = function () {
          return new _BlockScrollStrategy(_this35._viewportRuler, _this35._document);
        };
        /**
         * Update the overlay's position on scroll.
         * @param config Configuration to be used inside the scroll strategy.
         * Allows debouncing the reposition calls.
         */


        this.reposition = function (config) {
          return new _RepositionScrollStrategy(_this35._scrollDispatcher, _this35._viewportRuler, _this35._ngZone, config);
        };

        this._document = document;
      };

      _ScrollStrategyOptions.ɵfac = function ScrollStrategyOptions_Factory(t) {
        return new (t || _ScrollStrategyOptions)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT));
      };

      _ScrollStrategyOptions.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        factory: function ScrollStrategyOptions_Factory() {
          return new _ScrollStrategyOptions(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT));
        },
        token: _ScrollStrategyOptions,
        providedIn: "root"
      });

      _ScrollStrategyOptions.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ScrollDispatcher
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ViewportRuler
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_ScrollStrategyOptions, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ScrollDispatcher
          }, {
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ViewportRuler
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Initial configuration used when creating an overlay. */


      var _OverlayConfig = function _OverlayConfig(config) {
        _classCallCheck(this, _OverlayConfig);

        /** Strategy to be used when handling scroll events while the overlay is open. */
        this.scrollStrategy = new _NoopScrollStrategy();
        /** Custom class to add to the overlay pane. */

        this.panelClass = '';
        /** Whether the overlay has a backdrop. */

        this.hasBackdrop = false;
        /** Custom class to add to the backdrop */

        this.backdropClass = 'cdk-overlay-dark-backdrop';
        /**
         * Whether the overlay should be disposed of when the user goes backwards/forwards in history.
         * Note that this usually doesn't include clicking on links (unless the user is using
         * the `HashLocationStrategy`).
         */

        this.disposeOnNavigation = false;

        if (config) {
          // Use `Iterable` instead of `Array` because TypeScript, as of 3.6.3,
          // loses the array generic type in the `for of`. But we *also* have to use `Array` because
          // typescript won't iterate over an `Iterable` unless you compile with `--downlevelIteration`
          var configKeys = Object.keys(config);

          for (var _i2 = 0, _configKeys = configKeys; _i2 < _configKeys.length; _i2++) {
            var key = _configKeys[_i2];

            if (config[key] !== undefined) {
              // TypeScript, as of version 3.5, sees the left-hand-side of this expression
              // as "I don't know *which* key this is, so the only valid value is the intersection
              // of all the posible values." In this case, that happens to be `undefined`. TypeScript
              // is not smart enough to see that the right-hand-side is actually an access of the same
              // exact type with the same exact key, meaning that the value type must be identical.
              // So we use `any` to work around this.
              this[key] = config[key];
            }
          }
        }
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The points of the origin element and the overlay element to connect. */


      var _ConnectionPositionPair = function _ConnectionPositionPair(origin, overlay,
      /** Offset along the X axis. */
      offsetX,
      /** Offset along the Y axis. */
      offsetY,
      /** Class(es) to be applied to the panel while this position is active. */
      panelClass) {
        _classCallCheck(this, _ConnectionPositionPair);

        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.panelClass = panelClass;
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
      };
      /**
       * Set of properties regarding the position of the origin and overlay relative to the viewport
       * with respect to the containing Scrollable elements.
       *
       * The overlay and origin are clipped if any part of their bounding client rectangle exceeds the
       * bounds of any one of the strategy's Scrollable's bounding client rectangle.
       *
       * The overlay and origin are outside view if there is no overlap between their bounding client
       * rectangle and any one of the strategy's Scrollable's bounding client rectangle.
       *
       *       -----------                    -----------
       *       | outside |                    | clipped |
       *       |  view   |              --------------------------
       *       |         |              |     |         |        |
       *       ----------               |     -----------        |
       *  --------------------------    |                        |
       *  |                        |    |      Scrollable        |
       *  |                        |    |                        |
       *  |                        |     --------------------------
       *  |      Scrollable        |
       *  |                        |
       *  --------------------------
       *
       *  @docs-private
       */


      var _ScrollingVisibility = function _ScrollingVisibility() {
        _classCallCheck(this, _ScrollingVisibility);
      };
      /** The change event emitted by the strategy when a fallback position is used. */


      var _ConnectedOverlayPositionChange = function _ConnectedOverlayPositionChange(
      /** The position used as a result of this change. */
      connectionPair,
      /** @docs-private */
      scrollableViewProperties) {
        _classCallCheck(this, _ConnectedOverlayPositionChange);

        this.connectionPair = connectionPair;
        this.scrollableViewProperties = scrollableViewProperties;
      };

      _ConnectedOverlayPositionChange.ctorParameters = function () {
        return [{
          type: _ConnectionPositionPair
        }, {
          type: _ScrollingVisibility,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
          }]
        }];
      };
      /**
       * Validates whether a vertical position property matches the expected values.
       * @param property Name of the property being validated.
       * @param value Value of the property being validated.
       * @docs-private
       */


      function _validateVerticalPosition(property, value) {
        if (value !== 'top' && value !== 'bottom' && value !== 'center') {
          throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"top\", \"bottom\" or \"center\".");
        }
      }
      /**
       * Validates whether a horizontal position property matches the expected values.
       * @param property Name of the property being validated.
       * @param value Value of the property being validated.
       * @docs-private
       */


      function _validateHorizontalPosition(property, value) {
        if (value !== 'start' && value !== 'end' && value !== 'center') {
          throw Error("ConnectedPosition: Invalid ".concat(property, " \"").concat(value, "\". ") + "Expected \"start\", \"end\" or \"center\".");
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Service for dispatching events that land on the body to appropriate overlay ref,
       * if any. It maintains a list of attached overlays to determine best suited overlay based
       * on event target and order of overlay opens.
       */


      var BaseOverlayDispatcher = /*#__PURE__*/function () {
        function BaseOverlayDispatcher(document) {
          _classCallCheck(this, BaseOverlayDispatcher);

          /** Currently attached overlays in the order they were attached. */
          this._attachedOverlays = [];
          this._document = document;
        }

        _createClass(BaseOverlayDispatcher, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.detach();
          }
          /** Add a new overlay to the list of attached overlay refs. */

        }, {
          key: "add",
          value: function add(overlayRef) {
            // Ensure that we don't get the same overlay multiple times.
            this.remove(overlayRef);

            this._attachedOverlays.push(overlayRef);
          }
          /** Remove an overlay from the list of attached overlay refs. */

        }, {
          key: "remove",
          value: function remove(overlayRef) {
            var index = this._attachedOverlays.indexOf(overlayRef);

            if (index > -1) {
              this._attachedOverlays.splice(index, 1);
            } // Remove the global listener once there are no more overlays.


            if (this._attachedOverlays.length === 0) {
              this.detach();
            }
          }
        }]);

        return BaseOverlayDispatcher;
      }();

      BaseOverlayDispatcher.ɵfac = function BaseOverlayDispatcher_Factory(t) {
        return new (t || BaseOverlayDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT));
      };

      BaseOverlayDispatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        factory: function BaseOverlayDispatcher_Factory() {
          return new BaseOverlayDispatcher(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT));
        },
        token: BaseOverlayDispatcher,
        providedIn: "root"
      });

      BaseOverlayDispatcher.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BaseOverlayDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Service for dispatching keyboard events that land on the body to appropriate overlay ref,
       * if any. It maintains a list of attached overlays to determine best suited overlay based
       * on event target and order of overlay opens.
       */


      var _OverlayKeyboardDispatcher = /*#__PURE__*/function (_BaseOverlayDispatche) {
        _inherits(_OverlayKeyboardDispatcher, _BaseOverlayDispatche);

        var _super6 = _createSuper(_OverlayKeyboardDispatcher);

        function _OverlayKeyboardDispatcher(document) {
          var _this36;

          _classCallCheck(this, _OverlayKeyboardDispatcher);

          _this36 = _super6.call(this, document);
          /** Keyboard event listener that will be attached to the body. */

          _this36._keydownListener = function (event) {
            var overlays = _this36._attachedOverlays;

            for (var i = overlays.length - 1; i > -1; i--) {
              // Dispatch the keydown event to the top overlay which has subscribers to its keydown events.
              // We want to target the most recent overlay, rather than trying to match where the event came
              // from, because some components might open an overlay, but keep focus on a trigger element
              // (e.g. for select and autocomplete). We skip overlays without keydown event subscriptions,
              // because we don't want overlays that don't handle keyboard events to block the ones below
              // them that do.
              if (overlays[i]._keydownEvents.observers.length > 0) {
                overlays[i]._keydownEvents.next(event);

                break;
              }
            }
          };

          return _this36;
        }
        /** Add a new overlay to the list of attached overlay refs. */


        _createClass(_OverlayKeyboardDispatcher, [{
          key: "add",
          value: function add(overlayRef) {
            _get(_getPrototypeOf(_OverlayKeyboardDispatcher.prototype), "add", this).call(this, overlayRef); // Lazily start dispatcher once first overlay is added


            if (!this._isAttached) {
              this._document.body.addEventListener('keydown', this._keydownListener);

              this._isAttached = true;
            }
          }
          /** Detaches the global keyboard event listener. */

        }, {
          key: "detach",
          value: function detach() {
            if (this._isAttached) {
              this._document.body.removeEventListener('keydown', this._keydownListener);

              this._isAttached = false;
            }
          }
        }]);

        return _OverlayKeyboardDispatcher;
      }(BaseOverlayDispatcher);

      _OverlayKeyboardDispatcher.ɵfac = function OverlayKeyboardDispatcher_Factory(t) {
        return new (t || _OverlayKeyboardDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT));
      };

      _OverlayKeyboardDispatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        factory: function OverlayKeyboardDispatcher_Factory() {
          return new _OverlayKeyboardDispatcher(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT));
        },
        token: _OverlayKeyboardDispatcher,
        providedIn: "root"
      });

      _OverlayKeyboardDispatcher.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_OverlayKeyboardDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Service for dispatching mouse click events that land on the body to appropriate overlay ref,
       * if any. It maintains a list of attached overlays to determine best suited overlay based
       * on event target and order of overlay opens.
       */


      var _OverlayOutsideClickDispatcher = /*#__PURE__*/function (_BaseOverlayDispatche2) {
        _inherits(_OverlayOutsideClickDispatcher, _BaseOverlayDispatche2);

        var _super7 = _createSuper(_OverlayOutsideClickDispatcher);

        function _OverlayOutsideClickDispatcher(document, _platform) {
          var _this37;

          _classCallCheck(this, _OverlayOutsideClickDispatcher);

          _this37 = _super7.call(this, document);
          _this37._platform = _platform;
          _this37._cursorStyleIsSet = false;
          /** Click event listener that will be attached to the body propagate phase. */

          _this37._clickListener = function (event) {
            var target = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__._getEventTarget)(event); // We copy the array because the original may be modified asynchronously if the
            // outsidePointerEvents listener decides to detach overlays resulting in index errors inside
            // the for loop.

            var overlays = _this37._attachedOverlays.slice(); // Dispatch the mouse event to the top overlay which has subscribers to its mouse events.
            // We want to target all overlays for which the click could be considered as outside click.
            // As soon as we reach an overlay for which the click is not outside click we break off
            // the loop.


            for (var i = overlays.length - 1; i > -1; i--) {
              var overlayRef = overlays[i];

              if (overlayRef._outsidePointerEvents.observers.length < 1 || !overlayRef.hasAttached()) {
                continue;
              } // If it's a click inside the overlay, just break - we should do nothing
              // If it's an outside click dispatch the mouse event, and proceed with the next overlay


              if (overlayRef.overlayElement.contains(target)) {
                break;
              }

              overlayRef._outsidePointerEvents.next(event);
            }
          };

          return _this37;
        }
        /** Add a new overlay to the list of attached overlay refs. */


        _createClass(_OverlayOutsideClickDispatcher, [{
          key: "add",
          value: function add(overlayRef) {
            _get(_getPrototypeOf(_OverlayOutsideClickDispatcher.prototype), "add", this).call(this, overlayRef); // Safari on iOS does not generate click events for non-interactive
            // elements. However, we want to receive a click for any element outside
            // the overlay. We can force a "clickable" state by setting
            // `cursor: pointer` on the document body. See:
            // https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event#Safari_Mobile
            // https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/HandlingEvents/HandlingEvents.html


            if (!this._isAttached) {
              var body = this._document.body;
              body.addEventListener('click', this._clickListener, true);
              body.addEventListener('auxclick', this._clickListener, true);
              body.addEventListener('contextmenu', this._clickListener, true); // click event is not fired on iOS. To make element "clickable" we are
              // setting the cursor to pointer

              if (this._platform.IOS && !this._cursorStyleIsSet) {
                this._cursorOriginalValue = body.style.cursor;
                body.style.cursor = 'pointer';
                this._cursorStyleIsSet = true;
              }

              this._isAttached = true;
            }
          }
          /** Detaches the global keyboard event listener. */

        }, {
          key: "detach",
          value: function detach() {
            if (this._isAttached) {
              var body = this._document.body;
              body.removeEventListener('click', this._clickListener, true);
              body.removeEventListener('auxclick', this._clickListener, true);
              body.removeEventListener('contextmenu', this._clickListener, true);

              if (this._platform.IOS && this._cursorStyleIsSet) {
                body.style.cursor = this._cursorOriginalValue;
                this._cursorStyleIsSet = false;
              }

              this._isAttached = false;
            }
          }
        }]);

        return _OverlayOutsideClickDispatcher;
      }(BaseOverlayDispatcher);

      _OverlayOutsideClickDispatcher.ɵfac = function OverlayOutsideClickDispatcher_Factory(t) {
        return new (t || _OverlayOutsideClickDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
      };

      _OverlayOutsideClickDispatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        factory: function OverlayOutsideClickDispatcher_Factory() {
          return new _OverlayOutsideClickDispatcher(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
        },
        token: _OverlayOutsideClickDispatcher,
        providedIn: "root"
      });

      _OverlayOutsideClickDispatcher.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_OverlayOutsideClickDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var globalsForTest = typeof window !== 'undefined' ? window : {};
      /**
       * Whether we're in a testing environment.
       * TODO(crisbeto): remove this once we have an overlay testing module or Angular starts tearing
       * down the testing `NgModule` (see https://github.com/angular/angular/issues/18831).
       */

      var isTestEnvironment = typeof globalsForTest.__karma__ !== 'undefined' && !!globalsForTest.__karma__ || typeof globalsForTest.jasmine !== 'undefined' && !!globalsForTest.jasmine || typeof globalsForTest.jest !== 'undefined' && !!globalsForTest.jest || typeof globalsForTest.Mocha !== 'undefined' && !!globalsForTest.Mocha;
      /** Container inside which all overlays will render. */

      var _OverlayContainer = /*#__PURE__*/function () {
        function _OverlayContainer(document, _platform) {
          _classCallCheck(this, _OverlayContainer);

          this._platform = _platform;
          this._document = document;
        }

        _createClass(_OverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var container = this._containerElement;

            if (container && container.parentNode) {
              container.parentNode.removeChild(container);
            }
          }
          /**
           * This method returns the overlay container element. It will lazily
           * create the element the first time  it is called to facilitate using
           * the container in non-browser environments.
           * @returns the container element
           */

        }, {
          key: "getContainerElement",
          value: function getContainerElement() {
            if (!this._containerElement) {
              this._createContainer();
            }

            return this._containerElement;
          }
          /**
           * Create the overlay container element, which is simply a div
           * with the 'cdk-overlay-container' class on the document body.
           */

        }, {
          key: "_createContainer",
          value: function _createContainer() {
            var containerClass = 'cdk-overlay-container';

            if (this._platform.isBrowser || isTestEnvironment) {
              var oppositePlatformContainers = this._document.querySelectorAll(".".concat(containerClass, "[platform=\"server\"], ") + ".".concat(containerClass, "[platform=\"test\"]")); // Remove any old containers from the opposite platform.
              // This can happen when transitioning from the server to the client.


              for (var i = 0; i < oppositePlatformContainers.length; i++) {
                oppositePlatformContainers[i].parentNode.removeChild(oppositePlatformContainers[i]);
              }
            }

            var container = this._document.createElement('div');

            container.classList.add(containerClass); // A long time ago we kept adding new overlay containers whenever a new app was instantiated,
            // but at some point we added logic which clears the duplicate ones in order to avoid leaks.
            // The new logic was a little too aggressive since it was breaking some legitimate use cases.
            // To mitigate the problem we made it so that only containers from a different platform are
            // cleared, but the side-effect was that people started depending on the overly-aggressive
            // logic to clean up their tests for them. Until we can introduce an overlay-specific testing
            // module which does the cleanup, we try to detect that we're in a test environment and we
            // always clear the container. See #17006.
            // TODO(crisbeto): remove the test environment check once we have an overlay testing module.

            if (isTestEnvironment) {
              container.setAttribute('platform', 'test');
            } else if (!this._platform.isBrowser) {
              container.setAttribute('platform', 'server');
            }

            this._document.body.appendChild(container);

            this._containerElement = container;
          }
        }]);

        return _OverlayContainer;
      }();

      _OverlayContainer.ɵfac = function OverlayContainer_Factory(t) {
        return new (t || _OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
      };

      _OverlayContainer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        factory: function OverlayContainer_Factory() {
          return new _OverlayContainer(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
        },
        token: _OverlayContainer,
        providedIn: "root"
      });

      _OverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_OverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Reference to an overlay that has been created with the Overlay service.
       * Used to manipulate or dispose of said overlay.
       */


      var _OverlayRef = /*#__PURE__*/function () {
        function _OverlayRef(_portalOutlet, _host, _pane, _config, _ngZone, _keyboardDispatcher, _document, _location, _outsideClickDispatcher) {
          var _this38 = this;

          _classCallCheck(this, _OverlayRef);

          this._portalOutlet = _portalOutlet;
          this._host = _host;
          this._pane = _pane;
          this._config = _config;
          this._ngZone = _ngZone;
          this._keyboardDispatcher = _keyboardDispatcher;
          this._document = _document;
          this._location = _location;
          this._outsideClickDispatcher = _outsideClickDispatcher;
          this._backdropElement = null;
          this._backdropClick = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          this._attachments = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          this._detachments = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          this._locationChanges = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;

          this._backdropClickHandler = function (event) {
            return _this38._backdropClick.next(event);
          };
          /** Stream of keydown events dispatched to this overlay. */


          this._keydownEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          /** Stream of mouse outside events dispatched to this overlay. */

          this._outsidePointerEvents = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();

          if (_config.scrollStrategy) {
            this._scrollStrategy = _config.scrollStrategy;

            this._scrollStrategy.attach(this);
          }

          this._positionStrategy = _config.positionStrategy;
        }
        /** The overlay's HTML element */


        _createClass(_OverlayRef, [{
          key: "overlayElement",
          get: function get() {
            return this._pane;
          }
          /** The overlay's backdrop HTML element. */

        }, {
          key: "backdropElement",
          get: function get() {
            return this._backdropElement;
          }
          /**
           * Wrapper around the panel element. Can be used for advanced
           * positioning where a wrapper with specific styling is
           * required around the overlay pane.
           */

        }, {
          key: "hostElement",
          get: function get() {
            return this._host;
          }
          /**
           * Attaches content, given via a Portal, to the overlay.
           * If the overlay is configured to have a backdrop, it will be created.
           *
           * @param portal Portal instance to which to attach the overlay.
           * @returns The portal attachment result.
           */

        }, {
          key: "attach",
          value: function attach(portal) {
            var _this39 = this;

            var attachResult = this._portalOutlet.attach(portal); // Update the pane element with the given configuration.


            if (!this._host.parentElement && this._previousHostParent) {
              this._previousHostParent.appendChild(this._host);
            }

            if (this._positionStrategy) {
              this._positionStrategy.attach(this);
            }

            this._updateStackingOrder();

            this._updateElementSize();

            this._updateElementDirection();

            if (this._scrollStrategy) {
              this._scrollStrategy.enable();
            } // Update the position once the zone is stable so that the overlay will be fully rendered
            // before attempting to position it, as the position may depend on the size of the rendered
            // content.


            this._ngZone.onStable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1)).subscribe(function () {
              // The overlay could've been detached before the zone has stabilized.
              if (_this39.hasAttached()) {
                _this39.updatePosition();
              }
            }); // Enable pointer events for the overlay pane element.


            this._togglePointerEvents(true);

            if (this._config.hasBackdrop) {
              this._attachBackdrop();
            }

            if (this._config.panelClass) {
              this._toggleClasses(this._pane, this._config.panelClass, true);
            } // Only emit the `attachments` event once all other setup is done.


            this._attachments.next(); // Track this overlay by the keyboard dispatcher


            this._keyboardDispatcher.add(this);

            if (this._config.disposeOnNavigation) {
              this._locationChanges = this._location.subscribe(function () {
                return _this39.dispose();
              });
            }

            this._outsideClickDispatcher.add(this);

            return attachResult;
          }
          /**
           * Detaches an overlay from a portal.
           * @returns The portal detachment result.
           */

        }, {
          key: "detach",
          value: function detach() {
            if (!this.hasAttached()) {
              return;
            }

            this.detachBackdrop(); // When the overlay is detached, the pane element should disable pointer events.
            // This is necessary because otherwise the pane element will cover the page and disable
            // pointer events therefore. Depends on the position strategy and the applied pane boundaries.

            this._togglePointerEvents(false);

            if (this._positionStrategy && this._positionStrategy.detach) {
              this._positionStrategy.detach();
            }

            if (this._scrollStrategy) {
              this._scrollStrategy.disable();
            }

            var detachmentResult = this._portalOutlet.detach(); // Only emit after everything is detached.


            this._detachments.next(); // Remove this overlay from keyboard dispatcher tracking.


            this._keyboardDispatcher.remove(this); // Keeping the host element in the DOM can cause scroll jank, because it still gets
            // rendered, even though it's transparent and unclickable which is why we remove it.


            this._detachContentWhenStable();

            this._locationChanges.unsubscribe();

            this._outsideClickDispatcher.remove(this);

            return detachmentResult;
          }
          /** Cleans up the overlay from the DOM. */

        }, {
          key: "dispose",
          value: function dispose() {
            var isAttached = this.hasAttached();

            if (this._positionStrategy) {
              this._positionStrategy.dispose();
            }

            this._disposeScrollStrategy();

            this.detachBackdrop();

            this._locationChanges.unsubscribe();

            this._keyboardDispatcher.remove(this);

            this._portalOutlet.dispose();

            this._attachments.complete();

            this._backdropClick.complete();

            this._keydownEvents.complete();

            this._outsidePointerEvents.complete();

            this._outsideClickDispatcher.remove(this);

            if (this._host && this._host.parentNode) {
              this._host.parentNode.removeChild(this._host);

              this._host = null;
            }

            this._previousHostParent = this._pane = null;

            if (isAttached) {
              this._detachments.next();
            }

            this._detachments.complete();
          }
          /** Whether the overlay has attached content. */

        }, {
          key: "hasAttached",
          value: function hasAttached() {
            return this._portalOutlet.hasAttached();
          }
          /** Gets an observable that emits when the backdrop has been clicked. */

        }, {
          key: "backdropClick",
          value: function backdropClick() {
            return this._backdropClick;
          }
          /** Gets an observable that emits when the overlay has been attached. */

        }, {
          key: "attachments",
          value: function attachments() {
            return this._attachments;
          }
          /** Gets an observable that emits when the overlay has been detached. */

        }, {
          key: "detachments",
          value: function detachments() {
            return this._detachments;
          }
          /** Gets an observable of keydown events targeted to this overlay. */

        }, {
          key: "keydownEvents",
          value: function keydownEvents() {
            return this._keydownEvents;
          }
          /** Gets an observable of pointer events targeted outside this overlay. */

        }, {
          key: "outsidePointerEvents",
          value: function outsidePointerEvents() {
            return this._outsidePointerEvents;
          }
          /** Gets the current overlay configuration, which is immutable. */

        }, {
          key: "getConfig",
          value: function getConfig() {
            return this._config;
          }
          /** Updates the position of the overlay based on the position strategy. */

        }, {
          key: "updatePosition",
          value: function updatePosition() {
            if (this._positionStrategy) {
              this._positionStrategy.apply();
            }
          }
          /** Switches to a new position strategy and updates the overlay position. */

        }, {
          key: "updatePositionStrategy",
          value: function updatePositionStrategy(strategy) {
            if (strategy === this._positionStrategy) {
              return;
            }

            if (this._positionStrategy) {
              this._positionStrategy.dispose();
            }

            this._positionStrategy = strategy;

            if (this.hasAttached()) {
              strategy.attach(this);
              this.updatePosition();
            }
          }
          /** Update the size properties of the overlay. */

        }, {
          key: "updateSize",
          value: function updateSize(sizeConfig) {
            this._config = Object.assign(Object.assign({}, this._config), sizeConfig);

            this._updateElementSize();
          }
          /** Sets the LTR/RTL direction for the overlay. */

        }, {
          key: "setDirection",
          value: function setDirection(dir) {
            this._config = Object.assign(Object.assign({}, this._config), {
              direction: dir
            });

            this._updateElementDirection();
          }
          /** Add a CSS class or an array of classes to the overlay pane. */

        }, {
          key: "addPanelClass",
          value: function addPanelClass(classes) {
            if (this._pane) {
              this._toggleClasses(this._pane, classes, true);
            }
          }
          /** Remove a CSS class or an array of classes from the overlay pane. */

        }, {
          key: "removePanelClass",
          value: function removePanelClass(classes) {
            if (this._pane) {
              this._toggleClasses(this._pane, classes, false);
            }
          }
          /**
           * Returns the layout direction of the overlay panel.
           */

        }, {
          key: "getDirection",
          value: function getDirection() {
            var direction = this._config.direction;

            if (!direction) {
              return 'ltr';
            }

            return typeof direction === 'string' ? direction : direction.value;
          }
          /** Switches to a new scroll strategy. */

        }, {
          key: "updateScrollStrategy",
          value: function updateScrollStrategy(strategy) {
            if (strategy === this._scrollStrategy) {
              return;
            }

            this._disposeScrollStrategy();

            this._scrollStrategy = strategy;

            if (this.hasAttached()) {
              strategy.attach(this);
              strategy.enable();
            }
          }
          /** Updates the text direction of the overlay panel. */

        }, {
          key: "_updateElementDirection",
          value: function _updateElementDirection() {
            this._host.setAttribute('dir', this.getDirection());
          }
          /** Updates the size of the overlay element based on the overlay config. */

        }, {
          key: "_updateElementSize",
          value: function _updateElementSize() {
            if (!this._pane) {
              return;
            }

            var style = this._pane.style;
            style.width = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(this._config.width);
            style.height = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(this._config.height);
            style.minWidth = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(this._config.minWidth);
            style.minHeight = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(this._config.minHeight);
            style.maxWidth = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(this._config.maxWidth);
            style.maxHeight = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(this._config.maxHeight);
          }
          /** Toggles the pointer events for the overlay pane element. */

        }, {
          key: "_togglePointerEvents",
          value: function _togglePointerEvents(enablePointer) {
            this._pane.style.pointerEvents = enablePointer ? '' : 'none';
          }
          /** Attaches a backdrop for this overlay. */

        }, {
          key: "_attachBackdrop",
          value: function _attachBackdrop() {
            var _this40 = this;

            var showingClass = 'cdk-overlay-backdrop-showing';
            this._backdropElement = this._document.createElement('div');

            this._backdropElement.classList.add('cdk-overlay-backdrop');

            if (this._config.backdropClass) {
              this._toggleClasses(this._backdropElement, this._config.backdropClass, true);
            } // Insert the backdrop before the pane in the DOM order,
            // in order to handle stacked overlays properly.


            this._host.parentElement.insertBefore(this._backdropElement, this._host); // Forward backdrop clicks such that the consumer of the overlay can perform whatever
            // action desired when such a click occurs (usually closing the overlay).


            this._backdropElement.addEventListener('click', this._backdropClickHandler); // Add class to fade-in the backdrop after one frame.


            if (typeof requestAnimationFrame !== 'undefined') {
              this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                  if (_this40._backdropElement) {
                    _this40._backdropElement.classList.add(showingClass);
                  }
                });
              });
            } else {
              this._backdropElement.classList.add(showingClass);
            }
          }
          /**
           * Updates the stacking order of the element, moving it to the top if necessary.
           * This is required in cases where one overlay was detached, while another one,
           * that should be behind it, was destroyed. The next time both of them are opened,
           * the stacking will be wrong, because the detached element's pane will still be
           * in its original DOM position.
           */

        }, {
          key: "_updateStackingOrder",
          value: function _updateStackingOrder() {
            if (this._host.nextSibling) {
              this._host.parentNode.appendChild(this._host);
            }
          }
          /** Detaches the backdrop (if any) associated with the overlay. */

        }, {
          key: "detachBackdrop",
          value: function detachBackdrop() {
            var _this41 = this;

            var backdropToDetach = this._backdropElement;

            if (!backdropToDetach) {
              return;
            }

            var timeoutId;

            var finishDetach = function finishDetach() {
              // It may not be attached to anything in certain cases (e.g. unit tests).
              if (backdropToDetach) {
                backdropToDetach.removeEventListener('click', _this41._backdropClickHandler);
                backdropToDetach.removeEventListener('transitionend', finishDetach);

                if (backdropToDetach.parentNode) {
                  backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
              } // It is possible that a new portal has been attached to this overlay since we started
              // removing the backdrop. If that is the case, only clear the backdrop reference if it
              // is still the same instance that we started to remove.


              if (_this41._backdropElement == backdropToDetach) {
                _this41._backdropElement = null;
              }

              if (_this41._config.backdropClass) {
                _this41._toggleClasses(backdropToDetach, _this41._config.backdropClass, false);
              }

              clearTimeout(timeoutId);
            };

            backdropToDetach.classList.remove('cdk-overlay-backdrop-showing');

            this._ngZone.runOutsideAngular(function () {
              backdropToDetach.addEventListener('transitionend', finishDetach);
            }); // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
            // In this case we make it unclickable and we try to remove it after a delay.


            backdropToDetach.style.pointerEvents = 'none'; // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.

            timeoutId = this._ngZone.runOutsideAngular(function () {
              return setTimeout(finishDetach, 500);
            });
          }
          /** Toggles a single CSS class or an array of classes on an element. */

        }, {
          key: "_toggleClasses",
          value: function _toggleClasses(element, cssClasses, isAdd) {
            var classList = element.classList;
            (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceArray)(cssClasses).forEach(function (cssClass) {
              // We can't do a spread here, because IE doesn't support setting multiple classes.
              // Also trying to add an empty string to a DOMTokenList will throw.
              if (cssClass) {
                isAdd ? classList.add(cssClass) : classList.remove(cssClass);
              }
            });
          }
          /** Detaches the overlay content next time the zone stabilizes. */

        }, {
          key: "_detachContentWhenStable",
          value: function _detachContentWhenStable() {
            var _this42 = this;

            // Normally we wouldn't have to explicitly run this outside the `NgZone`, however
            // if the consumer is using `zone-patch-rxjs`, the `Subscription.unsubscribe` call will
            // be patched to run inside the zone, which will throw us into an infinite loop.
            this._ngZone.runOutsideAngular(function () {
              // We can't remove the host here immediately, because the overlay pane's content
              // might still be animating. This stream helps us avoid interrupting the animation
              // by waiting for the pane to become empty.
              var subscription = _this42._ngZone.onStable.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)((0, rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(_this42._attachments, _this42._detachments))).subscribe(function () {
                // Needs a couple of checks for the pane and host, because
                // they may have been removed by the time the zone stabilizes.
                if (!_this42._pane || !_this42._host || _this42._pane.children.length === 0) {
                  if (_this42._pane && _this42._config.panelClass) {
                    _this42._toggleClasses(_this42._pane, _this42._config.panelClass, false);
                  }

                  if (_this42._host && _this42._host.parentElement) {
                    _this42._previousHostParent = _this42._host.parentElement;

                    _this42._previousHostParent.removeChild(_this42._host);
                  }

                  subscription.unsubscribe();
                }
              });
            });
          }
          /** Disposes of a scroll strategy. */

        }, {
          key: "_disposeScrollStrategy",
          value: function _disposeScrollStrategy() {
            var scrollStrategy = this._scrollStrategy;

            if (scrollStrategy) {
              scrollStrategy.disable();

              if (scrollStrategy.detach) {
                scrollStrategy.detach();
              }
            }
          }
        }]);

        return _OverlayRef;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // TODO: refactor clipping detection into a separate thing (part of scrolling module)
      // TODO: doesn't handle both flexible width and height when it has to scroll along both axis.

      /** Class to be added to the overlay bounding box. */


      var boundingBoxClass = 'cdk-overlay-connected-position-bounding-box';
      /** Regex used to split a string on its CSS units. */

      var cssUnitPattern = /([A-Za-z%]+)$/;
      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * implicit position relative some origin element. The relative position is defined in terms of
       * a point on the origin element that is connected to a point on the overlay element. For example,
       * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
       * of the overlay.
       */

      var _FlexibleConnectedPositionStrategy = /*#__PURE__*/function () {
        function _FlexibleConnectedPositionStrategy(connectedTo, _viewportRuler, _document, _platform, _overlayContainer) {
          _classCallCheck(this, _FlexibleConnectedPositionStrategy);

          this._viewportRuler = _viewportRuler;
          this._document = _document;
          this._platform = _platform;
          this._overlayContainer = _overlayContainer;
          /** Last size used for the bounding box. Used to avoid resizing the overlay after open. */

          this._lastBoundingBoxSize = {
            width: 0,
            height: 0
          };
          /** Whether the overlay was pushed in a previous positioning. */

          this._isPushed = false;
          /** Whether the overlay can be pushed on-screen on the initial open. */

          this._canPush = true;
          /** Whether the overlay can grow via flexible width/height after the initial open. */

          this._growAfterOpen = false;
          /** Whether the overlay's width and height can be constrained to fit within the viewport. */

          this._hasFlexibleDimensions = true;
          /** Whether the overlay position is locked. */

          this._positionLocked = false;
          /** Amount of space that must be maintained between the overlay and the edge of the viewport. */

          this._viewportMargin = 0;
          /** The Scrollable containers used to check scrollable view properties on position change. */

          this._scrollables = [];
          /** Ordered list of preferred positions, from most to least desirable. */

          this._preferredPositions = [];
          /** Subject that emits whenever the position changes. */

          this._positionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          /** Subscription to viewport size changes. */

          this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
          /** Default offset for the overlay along the x axis. */

          this._offsetX = 0;
          /** Default offset for the overlay along the y axis. */

          this._offsetY = 0;
          /** Keeps track of the CSS classes that the position strategy has applied on the overlay panel. */

          this._appliedPanelClasses = [];
          /** Observable sequence of position changes. */

          this.positionChanges = this._positionChanges;
          this.setOrigin(connectedTo);
        }
        /** Ordered list of preferred positions, from most to least desirable. */


        _createClass(_FlexibleConnectedPositionStrategy, [{
          key: "positions",
          get: function get() {
            return this._preferredPositions;
          }
          /** Attaches this position strategy to an overlay. */

        }, {
          key: "attach",
          value: function attach(overlayRef) {
            var _this43 = this;

            if (this._overlayRef && overlayRef !== this._overlayRef && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('This position strategy is already attached to an overlay');
            }

            this._validatePositions();

            overlayRef.hostElement.classList.add(boundingBoxClass);
            this._overlayRef = overlayRef;
            this._boundingBox = overlayRef.hostElement;
            this._pane = overlayRef.overlayElement;
            this._isDisposed = false;
            this._isInitialRender = true;
            this._lastPosition = null;

            this._resizeSubscription.unsubscribe();

            this._resizeSubscription = this._viewportRuler.change().subscribe(function () {
              // When the window is resized, we want to trigger the next reposition as if it
              // was an initial render, in order for the strategy to pick a new optimal position,
              // otherwise position locking will cause it to stay at the old one.
              _this43._isInitialRender = true;

              _this43.apply();
            });
          }
          /**
           * Updates the position of the overlay element, using whichever preferred position relative
           * to the origin best fits on-screen.
           *
           * The selection of a position goes as follows:
           *  - If any positions fit completely within the viewport as-is,
           *      choose the first position that does so.
           *  - If flexible dimensions are enabled and at least one satifies the given minimum width/height,
           *      choose the position with the greatest available size modified by the positions' weight.
           *  - If pushing is enabled, take the position that went off-screen the least and push it
           *      on-screen.
           *  - If none of the previous criteria were met, use the position that goes off-screen the least.
           * @docs-private
           */

        }, {
          key: "apply",
          value: function apply() {
            // We shouldn't do anything if the strategy was disposed or we're on the server.
            if (this._isDisposed || !this._platform.isBrowser) {
              return;
            } // If the position has been applied already (e.g. when the overlay was opened) and the
            // consumer opted into locking in the position, re-use the old position, in order to
            // prevent the overlay from jumping around.


            if (!this._isInitialRender && this._positionLocked && this._lastPosition) {
              this.reapplyLastPosition();
              return;
            }

            this._clearPanelClasses();

            this._resetOverlayElementStyles();

            this._resetBoundingBoxStyles(); // We need the bounding rects for the origin and the overlay to determine how to position
            // the overlay relative to the origin.
            // We use the viewport rect to determine whether a position would go off-screen.


            this._viewportRect = this._getNarrowedViewportRect();
            this._originRect = this._getOriginRect();
            this._overlayRect = this._pane.getBoundingClientRect();
            var originRect = this._originRect;
            var overlayRect = this._overlayRect;
            var viewportRect = this._viewportRect; // Positions where the overlay will fit with flexible dimensions.

            var flexibleFits = []; // Fallback if none of the preferred positions fit within the viewport.

            var fallback; // Go through each of the preferred positions looking for a good fit.
            // If a good fit is found, it will be applied immediately.

            var _iterator3 = _createForOfIteratorHelper(this._preferredPositions),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var pos = _step3.value;

                // Get the exact (x, y) coordinate for the point-of-origin on the origin element.
                var originPoint = this._getOriginPoint(originRect, pos); // From that point-of-origin, get the exact (x, y) coordinate for the top-left corner of the
                // overlay in this position. We use the top-left corner for calculations and later translate
                // this into an appropriate (top, left, bottom, right) style.


                var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos); // Calculate how well the overlay would fit into the viewport with this point.


                var overlayFit = this._getOverlayFit(overlayPoint, overlayRect, viewportRect, pos); // If the overlay, without any further work, fits into the viewport, use this position.


                if (overlayFit.isCompletelyWithinViewport) {
                  this._isPushed = false;

                  this._applyPosition(pos, originPoint);

                  return;
                } // If the overlay has flexible dimensions, we can use this position
                // so long as there's enough space for the minimum dimensions.


                if (this._canFitWithFlexibleDimensions(overlayFit, overlayPoint, viewportRect)) {
                  // Save positions where the overlay will fit with flexible dimensions. We will use these
                  // if none of the positions fit *without* flexible dimensions.
                  flexibleFits.push({
                    position: pos,
                    origin: originPoint,
                    overlayRect: overlayRect,
                    boundingBoxRect: this._calculateBoundingBoxRect(originPoint, pos)
                  });
                  continue;
                } // If the current preferred position does not fit on the screen, remember the position
                // if it has more visible area on-screen than we've seen and move onto the next preferred
                // position.


                if (!fallback || fallback.overlayFit.visibleArea < overlayFit.visibleArea) {
                  fallback = {
                    overlayFit: overlayFit,
                    overlayPoint: overlayPoint,
                    originPoint: originPoint,
                    position: pos,
                    overlayRect: overlayRect
                  };
                }
              } // If there are any positions where the overlay would fit with flexible dimensions, choose the
              // one that has the greatest area available modified by the position's weight

            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            if (flexibleFits.length) {
              var bestFit = null;
              var bestScore = -1;

              var _iterator4 = _createForOfIteratorHelper(flexibleFits),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var fit = _step4.value;
                  var score = fit.boundingBoxRect.width * fit.boundingBoxRect.height * (fit.position.weight || 1);

                  if (score > bestScore) {
                    bestScore = score;
                    bestFit = fit;
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }

              this._isPushed = false;

              this._applyPosition(bestFit.position, bestFit.origin);

              return;
            } // When none of the preferred positions fit within the viewport, take the position
            // that went off-screen the least and attempt to push it on-screen.


            if (this._canPush) {
              // TODO(jelbourn): after pushing, the opening "direction" of the overlay might not make sense.
              this._isPushed = true;

              this._applyPosition(fallback.position, fallback.originPoint);

              return;
            } // All options for getting the overlay within the viewport have been exhausted, so go with the
            // position that went off-screen the least.


            this._applyPosition(fallback.position, fallback.originPoint);
          }
        }, {
          key: "detach",
          value: function detach() {
            this._clearPanelClasses();

            this._lastPosition = null;
            this._previousPushAmount = null;

            this._resizeSubscription.unsubscribe();
          }
          /** Cleanup after the element gets destroyed. */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this._isDisposed) {
              return;
            } // We can't use `_resetBoundingBoxStyles` here, because it resets
            // some properties to zero, rather than removing them.


            if (this._boundingBox) {
              extendStyles(this._boundingBox.style, {
                top: '',
                left: '',
                right: '',
                bottom: '',
                height: '',
                width: '',
                alignItems: '',
                justifyContent: ''
              });
            }

            if (this._pane) {
              this._resetOverlayElementStyles();
            }

            if (this._overlayRef) {
              this._overlayRef.hostElement.classList.remove(boundingBoxClass);
            }

            this.detach();

            this._positionChanges.complete();

            this._overlayRef = this._boundingBox = null;
            this._isDisposed = true;
          }
          /**
           * This re-aligns the overlay element with the trigger in its last calculated position,
           * even if a position higher in the "preferred positions" list would now fit. This
           * allows one to re-align the panel without changing the orientation of the panel.
           */

        }, {
          key: "reapplyLastPosition",
          value: function reapplyLastPosition() {
            if (!this._isDisposed && (!this._platform || this._platform.isBrowser)) {
              this._originRect = this._getOriginRect();
              this._overlayRect = this._pane.getBoundingClientRect();
              this._viewportRect = this._getNarrowedViewportRect();
              var lastPosition = this._lastPosition || this._preferredPositions[0];

              var originPoint = this._getOriginPoint(this._originRect, lastPosition);

              this._applyPosition(lastPosition, originPoint);
            }
          }
          /**
           * Sets the list of Scrollable containers that host the origin element so that
           * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
           * Scrollable must be an ancestor element of the strategy's origin element.
           */

        }, {
          key: "withScrollableContainers",
          value: function withScrollableContainers(scrollables) {
            this._scrollables = scrollables;
            return this;
          }
          /**
           * Adds new preferred positions.
           * @param positions List of positions options for this overlay.
           */

        }, {
          key: "withPositions",
          value: function withPositions(positions) {
            this._preferredPositions = positions; // If the last calculated position object isn't part of the positions anymore, clear
            // it in order to avoid it being picked up if the consumer tries to re-apply.

            if (positions.indexOf(this._lastPosition) === -1) {
              this._lastPosition = null;
            }

            this._validatePositions();

            return this;
          }
          /**
           * Sets a minimum distance the overlay may be positioned to the edge of the viewport.
           * @param margin Required margin between the overlay and the viewport edge in pixels.
           */

        }, {
          key: "withViewportMargin",
          value: function withViewportMargin(margin) {
            this._viewportMargin = margin;
            return this;
          }
          /** Sets whether the overlay's width and height can be constrained to fit within the viewport. */

        }, {
          key: "withFlexibleDimensions",
          value: function withFlexibleDimensions() {
            var flexibleDimensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._hasFlexibleDimensions = flexibleDimensions;
            return this;
          }
          /** Sets whether the overlay can grow after the initial open via flexible width/height. */

        }, {
          key: "withGrowAfterOpen",
          value: function withGrowAfterOpen() {
            var growAfterOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._growAfterOpen = growAfterOpen;
            return this;
          }
          /** Sets whether the overlay can be pushed on-screen if none of the provided positions fit. */

        }, {
          key: "withPush",
          value: function withPush() {
            var canPush = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._canPush = canPush;
            return this;
          }
          /**
           * Sets whether the overlay's position should be locked in after it is positioned
           * initially. When an overlay is locked in, it won't attempt to reposition itself
           * when the position is re-applied (e.g. when the user scrolls away).
           * @param isLocked Whether the overlay should locked in.
           */

        }, {
          key: "withLockedPosition",
          value: function withLockedPosition() {
            var isLocked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            this._positionLocked = isLocked;
            return this;
          }
          /**
           * Sets the origin, relative to which to position the overlay.
           * Using an element origin is useful for building components that need to be positioned
           * relatively to a trigger (e.g. dropdown menus or tooltips), whereas using a point can be
           * used for cases like contextual menus which open relative to the user's pointer.
           * @param origin Reference to the new origin.
           */

        }, {
          key: "setOrigin",
          value: function setOrigin(origin) {
            this._origin = origin;
            return this;
          }
          /**
           * Sets the default offset for the overlay's connection point on the x-axis.
           * @param offset New offset in the X axis.
           */

        }, {
          key: "withDefaultOffsetX",
          value: function withDefaultOffsetX(offset) {
            this._offsetX = offset;
            return this;
          }
          /**
           * Sets the default offset for the overlay's connection point on the y-axis.
           * @param offset New offset in the Y axis.
           */

        }, {
          key: "withDefaultOffsetY",
          value: function withDefaultOffsetY(offset) {
            this._offsetY = offset;
            return this;
          }
          /**
           * Configures that the position strategy should set a `transform-origin` on some elements
           * inside the overlay, depending on the current position that is being applied. This is
           * useful for the cases where the origin of an animation can change depending on the
           * alignment of the overlay.
           * @param selector CSS selector that will be used to find the target
           *    elements onto which to set the transform origin.
           */

        }, {
          key: "withTransformOriginOn",
          value: function withTransformOriginOn(selector) {
            this._transformOriginSelector = selector;
            return this;
          }
          /**
           * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
           */

        }, {
          key: "_getOriginPoint",
          value: function _getOriginPoint(originRect, pos) {
            var x;

            if (pos.originX == 'center') {
              // Note: when centering we should always use the `left`
              // offset, otherwise the position will be wrong in RTL.
              x = originRect.left + originRect.width / 2;
            } else {
              var startX = this._isRtl() ? originRect.right : originRect.left;
              var endX = this._isRtl() ? originRect.left : originRect.right;
              x = pos.originX == 'start' ? startX : endX;
            }

            var y;

            if (pos.originY == 'center') {
              y = originRect.top + originRect.height / 2;
            } else {
              y = pos.originY == 'top' ? originRect.top : originRect.bottom;
            }

            return {
              x: x,
              y: y
            };
          }
          /**
           * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
           * origin point to which the overlay should be connected.
           */

        }, {
          key: "_getOverlayPoint",
          value: function _getOverlayPoint(originPoint, overlayRect, pos) {
            // Calculate the (overlayStartX, overlayStartY), the start of the
            // potential overlay position relative to the origin point.
            var overlayStartX;

            if (pos.overlayX == 'center') {
              overlayStartX = -overlayRect.width / 2;
            } else if (pos.overlayX === 'start') {
              overlayStartX = this._isRtl() ? -overlayRect.width : 0;
            } else {
              overlayStartX = this._isRtl() ? 0 : -overlayRect.width;
            }

            var overlayStartY;

            if (pos.overlayY == 'center') {
              overlayStartY = -overlayRect.height / 2;
            } else {
              overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
            } // The (x, y) coordinates of the overlay.


            return {
              x: originPoint.x + overlayStartX,
              y: originPoint.y + overlayStartY
            };
          }
          /** Gets how well an overlay at the given point will fit within the viewport. */

        }, {
          key: "_getOverlayFit",
          value: function _getOverlayFit(point, rawOverlayRect, viewport, position) {
            // Round the overlay rect when comparing against the
            // viewport, because the viewport is always rounded.
            var overlay = getRoundedBoundingClientRect(rawOverlayRect);
            var x = point.x,
                y = point.y;

            var offsetX = this._getOffset(position, 'x');

            var offsetY = this._getOffset(position, 'y'); // Account for the offsets since they could push the overlay out of the viewport.


            if (offsetX) {
              x += offsetX;
            }

            if (offsetY) {
              y += offsetY;
            } // How much the overlay would overflow at this position, on each side.


            var leftOverflow = 0 - x;
            var rightOverflow = x + overlay.width - viewport.width;
            var topOverflow = 0 - y;
            var bottomOverflow = y + overlay.height - viewport.height; // Visible parts of the element on each axis.

            var visibleWidth = this._subtractOverflows(overlay.width, leftOverflow, rightOverflow);

            var visibleHeight = this._subtractOverflows(overlay.height, topOverflow, bottomOverflow);

            var visibleArea = visibleWidth * visibleHeight;
            return {
              visibleArea: visibleArea,
              isCompletelyWithinViewport: overlay.width * overlay.height === visibleArea,
              fitsInViewportVertically: visibleHeight === overlay.height,
              fitsInViewportHorizontally: visibleWidth == overlay.width
            };
          }
          /**
           * Whether the overlay can fit within the viewport when it may resize either its width or height.
           * @param fit How well the overlay fits in the viewport at some position.
           * @param point The (x, y) coordinates of the overlat at some position.
           * @param viewport The geometry of the viewport.
           */

        }, {
          key: "_canFitWithFlexibleDimensions",
          value: function _canFitWithFlexibleDimensions(fit, point, viewport) {
            if (this._hasFlexibleDimensions) {
              var availableHeight = viewport.bottom - point.y;
              var availableWidth = viewport.right - point.x;
              var minHeight = getPixelValue(this._overlayRef.getConfig().minHeight);
              var minWidth = getPixelValue(this._overlayRef.getConfig().minWidth);
              var verticalFit = fit.fitsInViewportVertically || minHeight != null && minHeight <= availableHeight;
              var horizontalFit = fit.fitsInViewportHorizontally || minWidth != null && minWidth <= availableWidth;
              return verticalFit && horizontalFit;
            }

            return false;
          }
          /**
           * Gets the point at which the overlay can be "pushed" on-screen. If the overlay is larger than
           * the viewport, the top-left corner will be pushed on-screen (with overflow occuring on the
           * right and bottom).
           *
           * @param start Starting point from which the overlay is pushed.
           * @param overlay Dimensions of the overlay.
           * @param scrollPosition Current viewport scroll position.
           * @returns The point at which to position the overlay after pushing. This is effectively a new
           *     originPoint.
           */

        }, {
          key: "_pushOverlayOnScreen",
          value: function _pushOverlayOnScreen(start, rawOverlayRect, scrollPosition) {
            // If the position is locked and we've pushed the overlay already, reuse the previous push
            // amount, rather than pushing it again. If we were to continue pushing, the element would
            // remain in the viewport, which goes against the expectations when position locking is enabled.
            if (this._previousPushAmount && this._positionLocked) {
              return {
                x: start.x + this._previousPushAmount.x,
                y: start.y + this._previousPushAmount.y
              };
            } // Round the overlay rect when comparing against the
            // viewport, because the viewport is always rounded.


            var overlay = getRoundedBoundingClientRect(rawOverlayRect);
            var viewport = this._viewportRect; // Determine how much the overlay goes outside the viewport on each
            // side, which we'll use to decide which direction to push it.

            var overflowRight = Math.max(start.x + overlay.width - viewport.width, 0);
            var overflowBottom = Math.max(start.y + overlay.height - viewport.height, 0);
            var overflowTop = Math.max(viewport.top - scrollPosition.top - start.y, 0);
            var overflowLeft = Math.max(viewport.left - scrollPosition.left - start.x, 0); // Amount by which to push the overlay in each axis such that it remains on-screen.

            var pushX = 0;
            var pushY = 0; // If the overlay fits completely within the bounds of the viewport, push it from whichever
            // direction is goes off-screen. Otherwise, push the top-left corner such that its in the
            // viewport and allow for the trailing end of the overlay to go out of bounds.

            if (overlay.width <= viewport.width) {
              pushX = overflowLeft || -overflowRight;
            } else {
              pushX = start.x < this._viewportMargin ? viewport.left - scrollPosition.left - start.x : 0;
            }

            if (overlay.height <= viewport.height) {
              pushY = overflowTop || -overflowBottom;
            } else {
              pushY = start.y < this._viewportMargin ? viewport.top - scrollPosition.top - start.y : 0;
            }

            this._previousPushAmount = {
              x: pushX,
              y: pushY
            };
            return {
              x: start.x + pushX,
              y: start.y + pushY
            };
          }
          /**
           * Applies a computed position to the overlay and emits a position change.
           * @param position The position preference
           * @param originPoint The point on the origin element where the overlay is connected.
           */

        }, {
          key: "_applyPosition",
          value: function _applyPosition(position, originPoint) {
            this._setTransformOrigin(position);

            this._setOverlayElementStyles(originPoint, position);

            this._setBoundingBoxStyles(originPoint, position);

            if (position.panelClass) {
              this._addPanelClasses(position.panelClass);
            } // Save the last connected position in case the position needs to be re-calculated.


            this._lastPosition = position; // Notify that the position has been changed along with its change properties.
            // We only emit if we've got any subscriptions, because the scroll visibility
            // calculcations can be somewhat expensive.

            if (this._positionChanges.observers.length) {
              var scrollableViewProperties = this._getScrollVisibility();

              var changeEvent = new _ConnectedOverlayPositionChange(position, scrollableViewProperties);

              this._positionChanges.next(changeEvent);
            }

            this._isInitialRender = false;
          }
          /** Sets the transform origin based on the configured selector and the passed-in position.  */

        }, {
          key: "_setTransformOrigin",
          value: function _setTransformOrigin(position) {
            if (!this._transformOriginSelector) {
              return;
            }

            var elements = this._boundingBox.querySelectorAll(this._transformOriginSelector);

            var xOrigin;
            var yOrigin = position.overlayY;

            if (position.overlayX === 'center') {
              xOrigin = 'center';
            } else if (this._isRtl()) {
              xOrigin = position.overlayX === 'start' ? 'right' : 'left';
            } else {
              xOrigin = position.overlayX === 'start' ? 'left' : 'right';
            }

            for (var i = 0; i < elements.length; i++) {
              elements[i].style.transformOrigin = "".concat(xOrigin, " ").concat(yOrigin);
            }
          }
          /**
           * Gets the position and size of the overlay's sizing container.
           *
           * This method does no measuring and applies no styles so that we can cheaply compute the
           * bounds for all positions and choose the best fit based on these results.
           */

        }, {
          key: "_calculateBoundingBoxRect",
          value: function _calculateBoundingBoxRect(origin, position) {
            var viewport = this._viewportRect;

            var isRtl = this._isRtl();

            var height, top, bottom;

            if (position.overlayY === 'top') {
              // Overlay is opening "downward" and thus is bound by the bottom viewport edge.
              top = origin.y;
              height = viewport.height - top + this._viewportMargin;
            } else if (position.overlayY === 'bottom') {
              // Overlay is opening "upward" and thus is bound by the top viewport edge. We need to add
              // the viewport margin back in, because the viewport rect is narrowed down to remove the
              // margin, whereas the `origin` position is calculated based on its `ClientRect`.
              bottom = viewport.height - origin.y + this._viewportMargin * 2;
              height = viewport.height - bottom + this._viewportMargin;
            } else {
              // If neither top nor bottom, it means that the overlay is vertically centered on the
              // origin point. Note that we want the position relative to the viewport, rather than
              // the page, which is why we don't use something like `viewport.bottom - origin.y` and
              // `origin.y - viewport.top`.
              var smallestDistanceToViewportEdge = Math.min(viewport.bottom - origin.y + viewport.top, origin.y);
              var previousHeight = this._lastBoundingBoxSize.height;
              height = smallestDistanceToViewportEdge * 2;
              top = origin.y - smallestDistanceToViewportEdge;

              if (height > previousHeight && !this._isInitialRender && !this._growAfterOpen) {
                top = origin.y - previousHeight / 2;
              }
            } // The overlay is opening 'right-ward' (the content flows to the right).


            var isBoundedByRightViewportEdge = position.overlayX === 'start' && !isRtl || position.overlayX === 'end' && isRtl; // The overlay is opening 'left-ward' (the content flows to the left).

            var isBoundedByLeftViewportEdge = position.overlayX === 'end' && !isRtl || position.overlayX === 'start' && isRtl;
            var width, left, right;

            if (isBoundedByLeftViewportEdge) {
              right = viewport.width - origin.x + this._viewportMargin;
              width = origin.x - this._viewportMargin;
            } else if (isBoundedByRightViewportEdge) {
              left = origin.x;
              width = viewport.right - origin.x;
            } else {
              // If neither start nor end, it means that the overlay is horizontally centered on the
              // origin point. Note that we want the position relative to the viewport, rather than
              // the page, which is why we don't use something like `viewport.right - origin.x` and
              // `origin.x - viewport.left`.
              var _smallestDistanceToViewportEdge = Math.min(viewport.right - origin.x + viewport.left, origin.x);

              var previousWidth = this._lastBoundingBoxSize.width;
              width = _smallestDistanceToViewportEdge * 2;
              left = origin.x - _smallestDistanceToViewportEdge;

              if (width > previousWidth && !this._isInitialRender && !this._growAfterOpen) {
                left = origin.x - previousWidth / 2;
              }
            }

            return {
              top: top,
              left: left,
              bottom: bottom,
              right: right,
              width: width,
              height: height
            };
          }
          /**
           * Sets the position and size of the overlay's sizing wrapper. The wrapper is positioned on the
           * origin's connection point and stetches to the bounds of the viewport.
           *
           * @param origin The point on the origin element where the overlay is connected.
           * @param position The position preference
           */

        }, {
          key: "_setBoundingBoxStyles",
          value: function _setBoundingBoxStyles(origin, position) {
            var boundingBoxRect = this._calculateBoundingBoxRect(origin, position); // It's weird if the overlay *grows* while scrolling, so we take the last size into account
            // when applying a new size.


            if (!this._isInitialRender && !this._growAfterOpen) {
              boundingBoxRect.height = Math.min(boundingBoxRect.height, this._lastBoundingBoxSize.height);
              boundingBoxRect.width = Math.min(boundingBoxRect.width, this._lastBoundingBoxSize.width);
            }

            var styles = {};

            if (this._hasExactPosition()) {
              styles.top = styles.left = '0';
              styles.bottom = styles.right = styles.maxHeight = styles.maxWidth = '';
              styles.width = styles.height = '100%';
            } else {
              var maxHeight = this._overlayRef.getConfig().maxHeight;

              var maxWidth = this._overlayRef.getConfig().maxWidth;

              styles.height = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(boundingBoxRect.height);
              styles.top = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(boundingBoxRect.top);
              styles.bottom = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(boundingBoxRect.bottom);
              styles.width = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(boundingBoxRect.width);
              styles.left = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(boundingBoxRect.left);
              styles.right = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(boundingBoxRect.right); // Push the pane content towards the proper direction.

              if (position.overlayX === 'center') {
                styles.alignItems = 'center';
              } else {
                styles.alignItems = position.overlayX === 'end' ? 'flex-end' : 'flex-start';
              }

              if (position.overlayY === 'center') {
                styles.justifyContent = 'center';
              } else {
                styles.justifyContent = position.overlayY === 'bottom' ? 'flex-end' : 'flex-start';
              }

              if (maxHeight) {
                styles.maxHeight = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(maxHeight);
              }

              if (maxWidth) {
                styles.maxWidth = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(maxWidth);
              }
            }

            this._lastBoundingBoxSize = boundingBoxRect;
            extendStyles(this._boundingBox.style, styles);
          }
          /** Resets the styles for the bounding box so that a new positioning can be computed. */

        }, {
          key: "_resetBoundingBoxStyles",
          value: function _resetBoundingBoxStyles() {
            extendStyles(this._boundingBox.style, {
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              height: '',
              width: '',
              alignItems: '',
              justifyContent: ''
            });
          }
          /** Resets the styles for the overlay pane so that a new positioning can be computed. */

        }, {
          key: "_resetOverlayElementStyles",
          value: function _resetOverlayElementStyles() {
            extendStyles(this._pane.style, {
              top: '',
              left: '',
              bottom: '',
              right: '',
              position: '',
              transform: ''
            });
          }
          /** Sets positioning styles to the overlay element. */

        }, {
          key: "_setOverlayElementStyles",
          value: function _setOverlayElementStyles(originPoint, position) {
            var styles = {};

            var hasExactPosition = this._hasExactPosition();

            var hasFlexibleDimensions = this._hasFlexibleDimensions;

            var config = this._overlayRef.getConfig();

            if (hasExactPosition) {
              var scrollPosition = this._viewportRuler.getViewportScrollPosition();

              extendStyles(styles, this._getExactOverlayY(position, originPoint, scrollPosition));
              extendStyles(styles, this._getExactOverlayX(position, originPoint, scrollPosition));
            } else {
              styles.position = 'static';
            } // Use a transform to apply the offsets. We do this because the `center` positions rely on
            // being in the normal flex flow and setting a `top` / `left` at all will completely throw
            // off the position. We also can't use margins, because they won't have an effect in some
            // cases where the element doesn't have anything to "push off of". Finally, this works
            // better both with flexible and non-flexible positioning.


            var transformString = '';

            var offsetX = this._getOffset(position, 'x');

            var offsetY = this._getOffset(position, 'y');

            if (offsetX) {
              transformString += "translateX(".concat(offsetX, "px) ");
            }

            if (offsetY) {
              transformString += "translateY(".concat(offsetY, "px)");
            }

            styles.transform = transformString.trim(); // If a maxWidth or maxHeight is specified on the overlay, we remove them. We do this because
            // we need these values to both be set to "100%" for the automatic flexible sizing to work.
            // The maxHeight and maxWidth are set on the boundingBox in order to enforce the constraint.
            // Note that this doesn't apply when we have an exact position, in which case we do want to
            // apply them because they'll be cleared from the bounding box.

            if (config.maxHeight) {
              if (hasExactPosition) {
                styles.maxHeight = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(config.maxHeight);
              } else if (hasFlexibleDimensions) {
                styles.maxHeight = '';
              }
            }

            if (config.maxWidth) {
              if (hasExactPosition) {
                styles.maxWidth = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(config.maxWidth);
              } else if (hasFlexibleDimensions) {
                styles.maxWidth = '';
              }
            }

            extendStyles(this._pane.style, styles);
          }
          /** Gets the exact top/bottom for the overlay when not using flexible sizing or when pushing. */

        }, {
          key: "_getExactOverlayY",
          value: function _getExactOverlayY(position, originPoint, scrollPosition) {
            // Reset any existing styles. This is necessary in case the
            // preferred position has changed since the last `apply`.
            var styles = {
              top: '',
              bottom: ''
            };

            var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

            if (this._isPushed) {
              overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
            }

            var virtualKeyboardOffset = this._overlayContainer.getContainerElement().getBoundingClientRect().top; // Normally this would be zero, however when the overlay is attached to an input (e.g. in an
            // autocomplete), mobile browsers will shift everything in order to put the input in the middle
            // of the screen and to make space for the virtual keyboard. We need to account for this offset,
            // otherwise our positioning will be thrown off.


            overlayPoint.y -= virtualKeyboardOffset; // We want to set either `top` or `bottom` based on whether the overlay wants to appear
            // above or below the origin and the direction in which the element will expand.

            if (position.overlayY === 'bottom') {
              // When using `bottom`, we adjust the y position such that it is the distance
              // from the bottom of the viewport rather than the top.
              var documentHeight = this._document.documentElement.clientHeight;
              styles.bottom = "".concat(documentHeight - (overlayPoint.y + this._overlayRect.height), "px");
            } else {
              styles.top = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(overlayPoint.y);
            }

            return styles;
          }
          /** Gets the exact left/right for the overlay when not using flexible sizing or when pushing. */

        }, {
          key: "_getExactOverlayX",
          value: function _getExactOverlayX(position, originPoint, scrollPosition) {
            // Reset any existing styles. This is necessary in case the preferred position has
            // changed since the last `apply`.
            var styles = {
              left: '',
              right: ''
            };

            var overlayPoint = this._getOverlayPoint(originPoint, this._overlayRect, position);

            if (this._isPushed) {
              overlayPoint = this._pushOverlayOnScreen(overlayPoint, this._overlayRect, scrollPosition);
            } // We want to set either `left` or `right` based on whether the overlay wants to appear "before"
            // or "after" the origin, which determines the direction in which the element will expand.
            // For the horizontal axis, the meaning of "before" and "after" change based on whether the
            // page is in RTL or LTR.


            var horizontalStyleProperty;

            if (this._isRtl()) {
              horizontalStyleProperty = position.overlayX === 'end' ? 'left' : 'right';
            } else {
              horizontalStyleProperty = position.overlayX === 'end' ? 'right' : 'left';
            } // When we're setting `right`, we adjust the x position such that it is the distance
            // from the right edge of the viewport rather than the left edge.


            if (horizontalStyleProperty === 'right') {
              var documentWidth = this._document.documentElement.clientWidth;
              styles.right = "".concat(documentWidth - (overlayPoint.x + this._overlayRect.width), "px");
            } else {
              styles.left = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceCssPixelValue)(overlayPoint.x);
            }

            return styles;
          }
          /**
           * Gets the view properties of the trigger and overlay, including whether they are clipped
           * or completely outside the view of any of the strategy's scrollables.
           */

        }, {
          key: "_getScrollVisibility",
          value: function _getScrollVisibility() {
            // Note: needs fresh rects since the position could've changed.
            var originBounds = this._getOriginRect();

            var overlayBounds = this._pane.getBoundingClientRect(); // TODO(jelbourn): instead of needing all of the client rects for these scrolling containers
            // every time, we should be able to use the scrollTop of the containers if the size of those
            // containers hasn't changed.


            var scrollContainerBounds = this._scrollables.map(function (scrollable) {
              return scrollable.getElementRef().nativeElement.getBoundingClientRect();
            });

            return {
              isOriginClipped: isElementClippedByScrolling(originBounds, scrollContainerBounds),
              isOriginOutsideView: isElementScrolledOutsideView(originBounds, scrollContainerBounds),
              isOverlayClipped: isElementClippedByScrolling(overlayBounds, scrollContainerBounds),
              isOverlayOutsideView: isElementScrolledOutsideView(overlayBounds, scrollContainerBounds)
            };
          }
          /** Subtracts the amount that an element is overflowing on an axis from its length. */

        }, {
          key: "_subtractOverflows",
          value: function _subtractOverflows(length) {
            for (var _len5 = arguments.length, overflows = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
              overflows[_key5 - 1] = arguments[_key5];
            }

            return overflows.reduce(function (currentValue, currentOverflow) {
              return currentValue - Math.max(currentOverflow, 0);
            }, length);
          }
          /** Narrows the given viewport rect by the current _viewportMargin. */

        }, {
          key: "_getNarrowedViewportRect",
          value: function _getNarrowedViewportRect() {
            // We recalculate the viewport rect here ourselves, rather than using the ViewportRuler,
            // because we want to use the `clientWidth` and `clientHeight` as the base. The difference
            // being that the client properties don't include the scrollbar, as opposed to `innerWidth`
            // and `innerHeight` that do. This is necessary, because the overlay container uses
            // 100% `width` and `height` which don't include the scrollbar either.
            var width = this._document.documentElement.clientWidth;
            var height = this._document.documentElement.clientHeight;

            var scrollPosition = this._viewportRuler.getViewportScrollPosition();

            return {
              top: scrollPosition.top + this._viewportMargin,
              left: scrollPosition.left + this._viewportMargin,
              right: scrollPosition.left + width - this._viewportMargin,
              bottom: scrollPosition.top + height - this._viewportMargin,
              width: width - 2 * this._viewportMargin,
              height: height - 2 * this._viewportMargin
            };
          }
          /** Whether the we're dealing with an RTL context */

        }, {
          key: "_isRtl",
          value: function _isRtl() {
            return this._overlayRef.getDirection() === 'rtl';
          }
          /** Determines whether the overlay uses exact or flexible positioning. */

        }, {
          key: "_hasExactPosition",
          value: function _hasExactPosition() {
            return !this._hasFlexibleDimensions || this._isPushed;
          }
          /** Retrieves the offset of a position along the x or y axis. */

        }, {
          key: "_getOffset",
          value: function _getOffset(position, axis) {
            if (axis === 'x') {
              // We don't do something like `position['offset' + axis]` in
              // order to avoid breking minifiers that rename properties.
              return position.offsetX == null ? this._offsetX : position.offsetX;
            }

            return position.offsetY == null ? this._offsetY : position.offsetY;
          }
          /** Validates that the current position match the expected values. */

        }, {
          key: "_validatePositions",
          value: function _validatePositions() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!this._preferredPositions.length) {
                throw Error('FlexibleConnectedPositionStrategy: At least one position is required.');
              } // TODO(crisbeto): remove these once Angular's template type
              // checking is advanced enough to catch these cases.


              this._preferredPositions.forEach(function (pair) {
                _validateHorizontalPosition('originX', pair.originX);

                _validateVerticalPosition('originY', pair.originY);

                _validateHorizontalPosition('overlayX', pair.overlayX);

                _validateVerticalPosition('overlayY', pair.overlayY);
              });
            }
          }
          /** Adds a single CSS class or an array of classes on the overlay panel. */

        }, {
          key: "_addPanelClasses",
          value: function _addPanelClasses(cssClasses) {
            var _this44 = this;

            if (this._pane) {
              (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceArray)(cssClasses).forEach(function (cssClass) {
                if (cssClass !== '' && _this44._appliedPanelClasses.indexOf(cssClass) === -1) {
                  _this44._appliedPanelClasses.push(cssClass);

                  _this44._pane.classList.add(cssClass);
                }
              });
            }
          }
          /** Clears the classes that the position strategy has applied from the overlay panel. */

        }, {
          key: "_clearPanelClasses",
          value: function _clearPanelClasses() {
            var _this45 = this;

            if (this._pane) {
              this._appliedPanelClasses.forEach(function (cssClass) {
                _this45._pane.classList.remove(cssClass);
              });

              this._appliedPanelClasses = [];
            }
          }
          /** Returns the ClientRect of the current origin. */

        }, {
          key: "_getOriginRect",
          value: function _getOriginRect() {
            var origin = this._origin;

            if (origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef) {
              return origin.nativeElement.getBoundingClientRect();
            } // Check for Element so SVG elements are also supported.


            if (origin instanceof Element) {
              return origin.getBoundingClientRect();
            }

            var width = origin.width || 0;
            var height = origin.height || 0; // If the origin is a point, return a client rect as if it was a 0x0 element at the point.

            return {
              top: origin.y,
              bottom: origin.y + height,
              left: origin.x,
              right: origin.x + width,
              height: height,
              width: width
            };
          }
        }]);

        return _FlexibleConnectedPositionStrategy;
      }();
      /** Shallow-extends a stylesheet object with another stylesheet object. */


      function extendStyles(destination, source) {
        for (var key in source) {
          if (source.hasOwnProperty(key)) {
            destination[key] = source[key];
          }
        }

        return destination;
      }
      /**
       * Extracts the pixel value as a number from a value, if it's a number
       * or a CSS pixel string (e.g. `1337px`). Otherwise returns null.
       */


      function getPixelValue(input) {
        if (typeof input !== 'number' && input != null) {
          var _input$split = input.split(cssUnitPattern),
              _input$split2 = _slicedToArray(_input$split, 2),
              value = _input$split2[0],
              units = _input$split2[1];

          return !units || units === 'px' ? parseFloat(value) : null;
        }

        return input || null;
      }
      /**
       * Gets a version of an element's bounding `ClientRect` where all the values are rounded down to
       * the nearest pixel. This allows us to account for the cases where there may be sub-pixel
       * deviations in the `ClientRect` returned by the browser (e.g. when zoomed in with a percentage
       * size, see #21350).
       */


      function getRoundedBoundingClientRect(clientRect) {
        return {
          top: Math.floor(clientRect.top),
          right: Math.floor(clientRect.right),
          bottom: Math.floor(clientRect.bottom),
          left: Math.floor(clientRect.left),
          width: Math.floor(clientRect.width),
          height: Math.floor(clientRect.height)
        };
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * implicit position relative to some origin element. The relative position is defined in terms of
       * a point on the origin element that is connected to a point on the overlay element. For example,
       * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
       * of the overlay.
       * @deprecated Use `FlexibleConnectedPositionStrategy` instead.
       * @breaking-change 8.0.0
       */


      var _ConnectedPositionStrategy = /*#__PURE__*/function () {
        function _ConnectedPositionStrategy(originPos, overlayPos, connectedTo, viewportRuler, document, platform, overlayContainer) {
          _classCallCheck(this, _ConnectedPositionStrategy);

          /** Ordered list of preferred positions, from most to least desirable. */
          this._preferredPositions = []; // Since the `ConnectedPositionStrategy` is deprecated and we don't want to maintain
          // the extra logic, we create an instance of the positioning strategy that has some
          // defaults that make it behave as the old position strategy and to which we'll
          // proxy all of the API calls.

          this._positionStrategy = new _FlexibleConnectedPositionStrategy(connectedTo, viewportRuler, document, platform, overlayContainer).withFlexibleDimensions(false).withPush(false).withViewportMargin(0);
          this.withFallbackPosition(originPos, overlayPos);
          this.onPositionChange = this._positionStrategy.positionChanges;
        }
        /** Ordered list of preferred positions, from most to least desirable. */


        _createClass(_ConnectedPositionStrategy, [{
          key: "positions",
          get: function get() {
            return this._preferredPositions;
          }
          /** Attach this position strategy to an overlay. */

        }, {
          key: "attach",
          value: function attach(overlayRef) {
            this._overlayRef = overlayRef;

            this._positionStrategy.attach(overlayRef);

            if (this._direction) {
              overlayRef.setDirection(this._direction);
              this._direction = null;
            }
          }
          /** Disposes all resources used by the position strategy. */

        }, {
          key: "dispose",
          value: function dispose() {
            this._positionStrategy.dispose();
          }
          /** @docs-private */

        }, {
          key: "detach",
          value: function detach() {
            this._positionStrategy.detach();
          }
          /**
           * Updates the position of the overlay element, using whichever preferred position relative
           * to the origin fits on-screen.
           * @docs-private
           */

        }, {
          key: "apply",
          value: function apply() {
            this._positionStrategy.apply();
          }
          /**
           * Re-positions the overlay element with the trigger in its last calculated position,
           * even if a position higher in the "preferred positions" list would now fit. This
           * allows one to re-align the panel without changing the orientation of the panel.
           */

        }, {
          key: "recalculateLastPosition",
          value: function recalculateLastPosition() {
            this._positionStrategy.reapplyLastPosition();
          }
          /**
           * Sets the list of Scrollable containers that host the origin element so that
           * on reposition we can evaluate if it or the overlay has been clipped or outside view. Every
           * Scrollable must be an ancestor element of the strategy's origin element.
           */

        }, {
          key: "withScrollableContainers",
          value: function withScrollableContainers(scrollables) {
            this._positionStrategy.withScrollableContainers(scrollables);
          }
          /**
           * Adds a new preferred fallback position.
           * @param originPos
           * @param overlayPos
           */

        }, {
          key: "withFallbackPosition",
          value: function withFallbackPosition(originPos, overlayPos, offsetX, offsetY) {
            var position = new _ConnectionPositionPair(originPos, overlayPos, offsetX, offsetY);

            this._preferredPositions.push(position);

            this._positionStrategy.withPositions(this._preferredPositions);

            return this;
          }
          /**
           * Sets the layout direction so the overlay's position can be adjusted to match.
           * @param dir New layout direction.
           */

        }, {
          key: "withDirection",
          value: function withDirection(dir) {
            // Since the direction might be declared before the strategy is attached,
            // we save the value in a temporary property and we'll transfer it to the
            // overlay ref on attachment.
            if (this._overlayRef) {
              this._overlayRef.setDirection(dir);
            } else {
              this._direction = dir;
            }

            return this;
          }
          /**
           * Sets an offset for the overlay's connection point on the x-axis
           * @param offset New offset in the X axis.
           */

        }, {
          key: "withOffsetX",
          value: function withOffsetX(offset) {
            this._positionStrategy.withDefaultOffsetX(offset);

            return this;
          }
          /**
           * Sets an offset for the overlay's connection point on the y-axis
           * @param  offset New offset in the Y axis.
           */

        }, {
          key: "withOffsetY",
          value: function withOffsetY(offset) {
            this._positionStrategy.withDefaultOffsetY(offset);

            return this;
          }
          /**
           * Sets whether the overlay's position should be locked in after it is positioned
           * initially. When an overlay is locked in, it won't attempt to reposition itself
           * when the position is re-applied (e.g. when the user scrolls away).
           * @param isLocked Whether the overlay should locked in.
           */

        }, {
          key: "withLockedPosition",
          value: function withLockedPosition(isLocked) {
            this._positionStrategy.withLockedPosition(isLocked);

            return this;
          }
          /**
           * Overwrites the current set of positions with an array of new ones.
           * @param positions Position pairs to be set on the strategy.
           */

        }, {
          key: "withPositions",
          value: function withPositions(positions) {
            this._preferredPositions = positions.slice();

            this._positionStrategy.withPositions(this._preferredPositions);

            return this;
          }
          /**
           * Sets the origin element, relative to which to position the overlay.
           * @param origin Reference to the new origin element.
           */

        }, {
          key: "setOrigin",
          value: function setOrigin(origin) {
            this._positionStrategy.setOrigin(origin);

            return this;
          }
        }]);

        return _ConnectedPositionStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Class to be added to the overlay pane wrapper. */


      var wrapperClass = 'cdk-global-overlay-wrapper';
      /**
       * A strategy for positioning overlays. Using this strategy, an overlay is given an
       * explicit position relative to the browser's viewport. We use flexbox, instead of
       * transforms, in order to avoid issues with subpixel rendering which can cause the
       * element to become blurry.
       */

      var _GlobalPositionStrategy = /*#__PURE__*/function () {
        function _GlobalPositionStrategy() {
          _classCallCheck(this, _GlobalPositionStrategy);

          this._cssPosition = 'static';
          this._topOffset = '';
          this._bottomOffset = '';
          this._leftOffset = '';
          this._rightOffset = '';
          this._alignItems = '';
          this._justifyContent = '';
          this._width = '';
          this._height = '';
        }

        _createClass(_GlobalPositionStrategy, [{
          key: "attach",
          value: function attach(overlayRef) {
            var config = overlayRef.getConfig();
            this._overlayRef = overlayRef;

            if (this._width && !config.width) {
              overlayRef.updateSize({
                width: this._width
              });
            }

            if (this._height && !config.height) {
              overlayRef.updateSize({
                height: this._height
              });
            }

            overlayRef.hostElement.classList.add(wrapperClass);
            this._isDisposed = false;
          }
          /**
           * Sets the top position of the overlay. Clears any previously set vertical position.
           * @param value New top offset.
           */

        }, {
          key: "top",
          value: function top() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._bottomOffset = '';
            this._topOffset = value;
            this._alignItems = 'flex-start';
            return this;
          }
          /**
           * Sets the left position of the overlay. Clears any previously set horizontal position.
           * @param value New left offset.
           */

        }, {
          key: "left",
          value: function left() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._rightOffset = '';
            this._leftOffset = value;
            this._justifyContent = 'flex-start';
            return this;
          }
          /**
           * Sets the bottom position of the overlay. Clears any previously set vertical position.
           * @param value New bottom offset.
           */

        }, {
          key: "bottom",
          value: function bottom() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._topOffset = '';
            this._bottomOffset = value;
            this._alignItems = 'flex-end';
            return this;
          }
          /**
           * Sets the right position of the overlay. Clears any previously set horizontal position.
           * @param value New right offset.
           */

        }, {
          key: "right",
          value: function right() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this._leftOffset = '';
            this._rightOffset = value;
            this._justifyContent = 'flex-end';
            return this;
          }
          /**
           * Sets the overlay width and clears any previously set width.
           * @param value New width for the overlay
           * @deprecated Pass the `width` through the `OverlayConfig`.
           * @breaking-change 8.0.0
           */

        }, {
          key: "width",
          value: function width() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (this._overlayRef) {
              this._overlayRef.updateSize({
                width: value
              });
            } else {
              this._width = value;
            }

            return this;
          }
          /**
           * Sets the overlay height and clears any previously set height.
           * @param value New height for the overlay
           * @deprecated Pass the `height` through the `OverlayConfig`.
           * @breaking-change 8.0.0
           */

        }, {
          key: "height",
          value: function height() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

            if (this._overlayRef) {
              this._overlayRef.updateSize({
                height: value
              });
            } else {
              this._height = value;
            }

            return this;
          }
          /**
           * Centers the overlay horizontally with an optional offset.
           * Clears any previously set horizontal position.
           *
           * @param offset Overlay offset from the horizontal center.
           */

        }, {
          key: "centerHorizontally",
          value: function centerHorizontally() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.left(offset);
            this._justifyContent = 'center';
            return this;
          }
          /**
           * Centers the overlay vertically with an optional offset.
           * Clears any previously set vertical position.
           *
           * @param offset Overlay offset from the vertical center.
           */

        }, {
          key: "centerVertically",
          value: function centerVertically() {
            var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
            this.top(offset);
            this._alignItems = 'center';
            return this;
          }
          /**
           * Apply the position to the element.
           * @docs-private
           */

        }, {
          key: "apply",
          value: function apply() {
            // Since the overlay ref applies the strategy asynchronously, it could
            // have been disposed before it ends up being applied. If that is the
            // case, we shouldn't do anything.
            if (!this._overlayRef || !this._overlayRef.hasAttached()) {
              return;
            }

            var styles = this._overlayRef.overlayElement.style;
            var parentStyles = this._overlayRef.hostElement.style;

            var config = this._overlayRef.getConfig();

            var width = config.width,
                height = config.height,
                maxWidth = config.maxWidth,
                maxHeight = config.maxHeight;
            var shouldBeFlushHorizontally = (width === '100%' || width === '100vw') && (!maxWidth || maxWidth === '100%' || maxWidth === '100vw');
            var shouldBeFlushVertically = (height === '100%' || height === '100vh') && (!maxHeight || maxHeight === '100%' || maxHeight === '100vh');
            styles.position = this._cssPosition;
            styles.marginLeft = shouldBeFlushHorizontally ? '0' : this._leftOffset;
            styles.marginTop = shouldBeFlushVertically ? '0' : this._topOffset;
            styles.marginBottom = this._bottomOffset;
            styles.marginRight = this._rightOffset;

            if (shouldBeFlushHorizontally) {
              parentStyles.justifyContent = 'flex-start';
            } else if (this._justifyContent === 'center') {
              parentStyles.justifyContent = 'center';
            } else if (this._overlayRef.getConfig().direction === 'rtl') {
              // In RTL the browser will invert `flex-start` and `flex-end` automatically, but we
              // don't want that because our positioning is explicitly `left` and `right`, hence
              // why we do another inversion to ensure that the overlay stays in the same position.
              // TODO: reconsider this if we add `start` and `end` methods.
              if (this._justifyContent === 'flex-start') {
                parentStyles.justifyContent = 'flex-end';
              } else if (this._justifyContent === 'flex-end') {
                parentStyles.justifyContent = 'flex-start';
              }
            } else {
              parentStyles.justifyContent = this._justifyContent;
            }

            parentStyles.alignItems = shouldBeFlushVertically ? 'flex-start' : this._alignItems;
          }
          /**
           * Cleans up the DOM changes from the position strategy.
           * @docs-private
           */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this._isDisposed || !this._overlayRef) {
              return;
            }

            var styles = this._overlayRef.overlayElement.style;
            var parent = this._overlayRef.hostElement;
            var parentStyles = parent.style;
            parent.classList.remove(wrapperClass);
            parentStyles.justifyContent = parentStyles.alignItems = styles.marginTop = styles.marginBottom = styles.marginLeft = styles.marginRight = styles.position = '';
            this._overlayRef = null;
            this._isDisposed = true;
          }
        }]);

        return _GlobalPositionStrategy;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Builder for overlay position strategy. */


      var _OverlayPositionBuilder = /*#__PURE__*/function () {
        function _OverlayPositionBuilder(_viewportRuler, _document, _platform, _overlayContainer) {
          _classCallCheck(this, _OverlayPositionBuilder);

          this._viewportRuler = _viewportRuler;
          this._document = _document;
          this._platform = _platform;
          this._overlayContainer = _overlayContainer;
        }
        /**
         * Creates a global position strategy.
         */


        _createClass(_OverlayPositionBuilder, [{
          key: "global",
          value: function global() {
            return new _GlobalPositionStrategy();
          }
          /**
           * Creates a relative position strategy.
           * @param elementRef
           * @param originPos
           * @param overlayPos
           * @deprecated Use `flexibleConnectedTo` instead.
           * @breaking-change 8.0.0
           */

        }, {
          key: "connectedTo",
          value: function connectedTo(elementRef, originPos, overlayPos) {
            return new _ConnectedPositionStrategy(originPos, overlayPos, elementRef, this._viewportRuler, this._document, this._platform, this._overlayContainer);
          }
          /**
           * Creates a flexible position strategy.
           * @param origin Origin relative to which to position the overlay.
           */

        }, {
          key: "flexibleConnectedTo",
          value: function flexibleConnectedTo(origin) {
            return new _FlexibleConnectedPositionStrategy(origin, this._viewportRuler, this._document, this._platform, this._overlayContainer);
          }
        }]);

        return _OverlayPositionBuilder;
      }();

      _OverlayPositionBuilder.ɵfac = function OverlayPositionBuilder_Factory(t) {
        return new (t || _OverlayPositionBuilder)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_OverlayContainer));
      };

      _OverlayPositionBuilder.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        factory: function OverlayPositionBuilder_Factory() {
          return new _OverlayPositionBuilder(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_OverlayContainer));
        },
        token: _OverlayPositionBuilder,
        providedIn: "root"
      });

      _OverlayPositionBuilder.ctorParameters = function () {
        return [{
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ViewportRuler
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
        }, {
          type: _OverlayContainer
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_OverlayPositionBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ViewportRuler
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
          }, {
            type: _OverlayContainer
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Next overlay unique ID. */


      var nextUniqueId = 0; // Note that Overlay is *not* scoped to the app root because of the ComponentFactoryResolver
      // which needs to be different depending on where OverlayModule is imported.

      /**
       * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
       * used as a low-level building block for other components. Dialogs, tooltips, menus,
       * selects, etc. can all be built using overlays. The service should primarily be used by authors
       * of re-usable components rather than developers building end-user applications.
       *
       * An overlay *is* a PortalOutlet, so any kind of Portal can be loaded into one.
       */

      var _Overlay = /*#__PURE__*/function () {
        function _Overlay(
        /** Scrolling strategies that can be used when creating an overlay. */
        scrollStrategies, _overlayContainer, _componentFactoryResolver, _positionBuilder, _keyboardDispatcher, _injector, _ngZone, _document, _directionality, _location, _outsideClickDispatcher) {
          _classCallCheck(this, _Overlay);

          this.scrollStrategies = scrollStrategies;
          this._overlayContainer = _overlayContainer;
          this._componentFactoryResolver = _componentFactoryResolver;
          this._positionBuilder = _positionBuilder;
          this._keyboardDispatcher = _keyboardDispatcher;
          this._injector = _injector;
          this._ngZone = _ngZone;
          this._document = _document;
          this._directionality = _directionality;
          this._location = _location;
          this._outsideClickDispatcher = _outsideClickDispatcher;
        }
        /**
         * Creates an overlay.
         * @param config Configuration applied to the overlay.
         * @returns Reference to the created overlay.
         */


        _createClass(_Overlay, [{
          key: "create",
          value: function create(config) {
            var host = this._createHostElement();

            var pane = this._createPaneElement(host);

            var portalOutlet = this._createPortalOutlet(pane);

            var overlayConfig = new _OverlayConfig(config);
            overlayConfig.direction = overlayConfig.direction || this._directionality.value;
            return new _OverlayRef(portalOutlet, host, pane, overlayConfig, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher);
          }
          /**
           * Gets a position builder that can be used, via fluent API,
           * to construct and configure a position strategy.
           * @returns An overlay position builder.
           */

        }, {
          key: "position",
          value: function position() {
            return this._positionBuilder;
          }
          /**
           * Creates the DOM element for an overlay and appends it to the overlay container.
           * @returns Newly-created pane element
           */

        }, {
          key: "_createPaneElement",
          value: function _createPaneElement(host) {
            var pane = this._document.createElement('div');

            pane.id = "cdk-overlay-".concat(nextUniqueId++);
            pane.classList.add('cdk-overlay-pane');
            host.appendChild(pane);
            return pane;
          }
          /**
           * Creates the host element that wraps around an overlay
           * and can be used for advanced positioning.
           * @returns Newly-create host element.
           */

        }, {
          key: "_createHostElement",
          value: function _createHostElement() {
            var host = this._document.createElement('div');

            this._overlayContainer.getContainerElement().appendChild(host);

            return host;
          }
          /**
           * Create a DomPortalOutlet into which the overlay content can be loaded.
           * @param pane The DOM element to turn into a portal outlet.
           * @returns A portal outlet for the given DOM element.
           */

        }, {
          key: "_createPortalOutlet",
          value: function _createPortalOutlet(pane) {
            // We have to resolve the ApplicationRef later in order to allow people
            // to use overlay-based providers during app initialization.
            if (!this._appRef) {
              this._appRef = this._injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__.ApplicationRef);
            }

            return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.DomPortalOutlet(pane, this._componentFactoryResolver, this._appRef, this._injector, this._document);
          }
        }]);

        return _Overlay;
      }();

      _Overlay.ɵfac = function Overlay_Factory(t) {
        return new (t || _Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ScrollStrategyOptions), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_OverlayPositionBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_OverlayKeyboardDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_OverlayOutsideClickDispatcher));
      };

      _Overlay.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _Overlay,
        factory: _Overlay.ɵfac
      });

      _Overlay.ctorParameters = function () {
        return [{
          type: _ScrollStrategyOptions
        }, {
          type: _OverlayContainer
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ComponentFactoryResolver
        }, {
          type: _OverlayPositionBuilder
        }, {
          type: _OverlayKeyboardDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
        }, {
          type: _OverlayOutsideClickDispatcher
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_Overlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
        }], function () {
          return [{
            type: _ScrollStrategyOptions
          }, {
            type: _OverlayContainer
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ComponentFactoryResolver
          }, {
            type: _OverlayPositionBuilder
          }, {
            type: _OverlayKeyboardDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injector
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__.Location
          }, {
            type: _OverlayOutsideClickDispatcher
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Default set of positions for the overlay. Follows the behavior of a dropdown. */


      var defaultPositionList = [{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
      }, {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }];
      /** Injection token that determines the scroll handling while the connected overlay is open. */

      var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('cdk-connected-overlay-scroll-strategy');
      /**
       * Directive applied to an element to make it usable as an origin for an Overlay using a
       * ConnectedPositionStrategy.
       */

      var _CdkOverlayOrigin = function _CdkOverlayOrigin(
      /** Reference to the element on which the directive is applied. */
      elementRef) {
        _classCallCheck(this, _CdkOverlayOrigin);

        this.elementRef = elementRef;
      };

      _CdkOverlayOrigin.ɵfac = function CdkOverlayOrigin_Factory(t) {
        return new (t || _CdkOverlayOrigin)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
      };

      _CdkOverlayOrigin.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: _CdkOverlayOrigin,
        selectors: [["", "cdk-overlay-origin", ""], ["", "overlay-origin", ""], ["", "cdkOverlayOrigin", ""]],
        exportAs: ["cdkOverlayOrigin"]
      });

      _CdkOverlayOrigin.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_CdkOverlayOrigin, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
          args: [{
            selector: '[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]',
            exportAs: 'cdkOverlayOrigin'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef
          }];
        }, null);
      })();
      /**
       * Directive to facilitate declarative creation of an
       * Overlay using a FlexibleConnectedPositionStrategy.
       */


      var _CdkConnectedOverlay = /*#__PURE__*/function () {
        // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
        function _CdkConnectedOverlay(_overlay, templateRef, viewContainerRef, scrollStrategyFactory, _dir) {
          _classCallCheck(this, _CdkConnectedOverlay);

          this._overlay = _overlay;
          this._dir = _dir;
          this._hasBackdrop = false;
          this._lockPosition = false;
          this._growAfterOpen = false;
          this._flexibleDimensions = false;
          this._push = false;
          this._backdropSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
          this._attachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
          this._detachSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
          this._positionSubscription = rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription.EMPTY;
          /** Margin between the overlay and the viewport edges. */

          this.viewportMargin = 0;
          /** Whether the overlay is open. */

          this.open = false;
          /** Whether the overlay can be closed by user interaction. */

          this.disableClose = false;
          /** Event emitted when the backdrop is clicked. */

          this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          /** Event emitted when the position has changed. */

          this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          /** Event emitted when the overlay has been attached. */

          this.attach = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          /** Event emitted when the overlay has been detached. */

          this.detach = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          /** Emits when there are keyboard events that are targeted at the overlay. */

          this.overlayKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          /** Emits when there are mouse outside click events that are targeted at the overlay. */

          this.overlayOutsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this._templatePortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.TemplatePortal(templateRef, viewContainerRef);
          this._scrollStrategyFactory = scrollStrategyFactory;
          this.scrollStrategy = this._scrollStrategyFactory();
        }
        /** The offset in pixels for the overlay connection point on the x-axis */


        _createClass(_CdkConnectedOverlay, [{
          key: "offsetX",
          get: function get() {
            return this._offsetX;
          },
          set: function set(offsetX) {
            this._offsetX = offsetX;

            if (this._position) {
              this._updatePositionStrategy(this._position);
            }
          }
          /** The offset in pixels for the overlay connection point on the y-axis */

        }, {
          key: "offsetY",
          get: function get() {
            return this._offsetY;
          },
          set: function set(offsetY) {
            this._offsetY = offsetY;

            if (this._position) {
              this._updatePositionStrategy(this._position);
            }
          }
          /** Whether or not the overlay should attach a backdrop. */

        }, {
          key: "hasBackdrop",
          get: function get() {
            return this._hasBackdrop;
          },
          set: function set(value) {
            this._hasBackdrop = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
          }
          /** Whether or not the overlay should be locked when scrolling. */

        }, {
          key: "lockPosition",
          get: function get() {
            return this._lockPosition;
          },
          set: function set(value) {
            this._lockPosition = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
          }
          /** Whether the overlay's width and height can be constrained to fit within the viewport. */

        }, {
          key: "flexibleDimensions",
          get: function get() {
            return this._flexibleDimensions;
          },
          set: function set(value) {
            this._flexibleDimensions = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
          }
          /** Whether the overlay can grow after the initial open when flexible positioning is turned on. */

        }, {
          key: "growAfterOpen",
          get: function get() {
            return this._growAfterOpen;
          },
          set: function set(value) {
            this._growAfterOpen = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
          }
          /** Whether the overlay can be pushed on-screen if none of the provided positions fit. */

        }, {
          key: "push",
          get: function get() {
            return this._push;
          },
          set: function set(value) {
            this._push = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__.coerceBooleanProperty)(value);
          }
          /** The associated overlay reference. */

        }, {
          key: "overlayRef",
          get: function get() {
            return this._overlayRef;
          }
          /** The element's layout direction. */

        }, {
          key: "dir",
          get: function get() {
            return this._dir ? this._dir.value : 'ltr';
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._attachSubscription.unsubscribe();

            this._detachSubscription.unsubscribe();

            this._backdropSubscription.unsubscribe();

            this._positionSubscription.unsubscribe();

            if (this._overlayRef) {
              this._overlayRef.dispose();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this._position) {
              this._updatePositionStrategy(this._position);

              this._overlayRef.updateSize({
                width: this.width,
                minWidth: this.minWidth,
                height: this.height,
                minHeight: this.minHeight
              });

              if (changes['origin'] && this.open) {
                this._position.apply();
              }
            }

            if (changes['open']) {
              this.open ? this._attachOverlay() : this._detachOverlay();
            }
          }
          /** Creates an overlay */

        }, {
          key: "_createOverlay",
          value: function _createOverlay() {
            var _this46 = this;

            if (!this.positions || !this.positions.length) {
              this.positions = defaultPositionList;
            }

            var overlayRef = this._overlayRef = this._overlay.create(this._buildConfig());

            this._attachSubscription = overlayRef.attachments().subscribe(function () {
              return _this46.attach.emit();
            });
            this._detachSubscription = overlayRef.detachments().subscribe(function () {
              return _this46.detach.emit();
            });
            overlayRef.keydownEvents().subscribe(function (event) {
              _this46.overlayKeydown.next(event);

              if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.ESCAPE && !_this46.disableClose && !(0, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.hasModifierKey)(event)) {
                event.preventDefault();

                _this46._detachOverlay();
              }
            });

            this._overlayRef.outsidePointerEvents().subscribe(function (event) {
              _this46.overlayOutsideClick.next(event);
            });
          }
          /** Builds the overlay config based on the directive's inputs */

        }, {
          key: "_buildConfig",
          value: function _buildConfig() {
            var positionStrategy = this._position = this.positionStrategy || this._createPositionStrategy();

            var overlayConfig = new _OverlayConfig({
              direction: this._dir,
              positionStrategy: positionStrategy,
              scrollStrategy: this.scrollStrategy,
              hasBackdrop: this.hasBackdrop
            });

            if (this.width || this.width === 0) {
              overlayConfig.width = this.width;
            }

            if (this.height || this.height === 0) {
              overlayConfig.height = this.height;
            }

            if (this.minWidth || this.minWidth === 0) {
              overlayConfig.minWidth = this.minWidth;
            }

            if (this.minHeight || this.minHeight === 0) {
              overlayConfig.minHeight = this.minHeight;
            }

            if (this.backdropClass) {
              overlayConfig.backdropClass = this.backdropClass;
            }

            if (this.panelClass) {
              overlayConfig.panelClass = this.panelClass;
            }

            return overlayConfig;
          }
          /** Updates the state of a position strategy, based on the values of the directive inputs. */

        }, {
          key: "_updatePositionStrategy",
          value: function _updatePositionStrategy(positionStrategy) {
            var _this47 = this;

            var positions = this.positions.map(function (currentPosition) {
              return {
                originX: currentPosition.originX,
                originY: currentPosition.originY,
                overlayX: currentPosition.overlayX,
                overlayY: currentPosition.overlayY,
                offsetX: currentPosition.offsetX || _this47.offsetX,
                offsetY: currentPosition.offsetY || _this47.offsetY,
                panelClass: currentPosition.panelClass || undefined
              };
            });
            return positionStrategy.setOrigin(this.origin.elementRef).withPositions(positions).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector);
          }
          /** Returns the position strategy of the overlay to be set on the overlay config */

        }, {
          key: "_createPositionStrategy",
          value: function _createPositionStrategy() {
            var strategy = this._overlay.position().flexibleConnectedTo(this.origin.elementRef);

            this._updatePositionStrategy(strategy);

            return strategy;
          }
          /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */

        }, {
          key: "_attachOverlay",
          value: function _attachOverlay() {
            var _this48 = this;

            if (!this._overlayRef) {
              this._createOverlay();
            } else {
              // Update the overlay size, in case the directive's inputs have changed
              this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop;
            }

            if (!this._overlayRef.hasAttached()) {
              this._overlayRef.attach(this._templatePortal);
            }

            if (this.hasBackdrop) {
              this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function (event) {
                _this48.backdropClick.emit(event);
              });
            } else {
              this._backdropSubscription.unsubscribe();
            }

            this._positionSubscription.unsubscribe(); // Only subscribe to `positionChanges` if requested, because putting
            // together all the information for it can be expensive.


            if (this.positionChange.observers.length > 0) {
              this._positionSubscription = this._position.positionChanges.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeWhile)(function () {
                return _this48.positionChange.observers.length > 0;
              })).subscribe(function (position) {
                _this48.positionChange.emit(position);

                if (_this48.positionChange.observers.length === 0) {
                  _this48._positionSubscription.unsubscribe();
                }
              });
            }
          }
          /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */

        }, {
          key: "_detachOverlay",
          value: function _detachOverlay() {
            if (this._overlayRef) {
              this._overlayRef.detach();
            }

            this._backdropSubscription.unsubscribe();

            this._positionSubscription.unsubscribe();
          }
        }]);

        return _CdkConnectedOverlay;
      }();

      _CdkConnectedOverlay.ɵfac = function CdkConnectedOverlay_Factory(t) {
        return new (t || _CdkConnectedOverlay)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality, 8));
      };

      _CdkConnectedOverlay.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
        type: _CdkConnectedOverlay,
        selectors: [["", "cdk-connected-overlay", ""], ["", "connected-overlay", ""], ["", "cdkConnectedOverlay", ""]],
        inputs: {
          viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"],
          open: ["cdkConnectedOverlayOpen", "open"],
          disableClose: ["cdkConnectedOverlayDisableClose", "disableClose"],
          scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
          offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"],
          offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"],
          hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"],
          lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"],
          flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"],
          growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"],
          push: ["cdkConnectedOverlayPush", "push"],
          positions: ["cdkConnectedOverlayPositions", "positions"],
          origin: ["cdkConnectedOverlayOrigin", "origin"],
          positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"],
          width: ["cdkConnectedOverlayWidth", "width"],
          height: ["cdkConnectedOverlayHeight", "height"],
          minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"],
          minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"],
          backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"],
          panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"],
          transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"]
        },
        outputs: {
          backdropClick: "backdropClick",
          positionChange: "positionChange",
          attach: "attach",
          detach: "detach",
          overlayKeydown: "overlayKeydown",
          overlayOutsideClick: "overlayOutsideClick"
        },
        exportAs: ["cdkConnectedOverlay"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]]
      });

      _CdkConnectedOverlay.ctorParameters = function () {
        return [{
          type: _Overlay
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
            args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
          }]
        }];
      };

      _CdkConnectedOverlay.propDecorators = {
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayOrigin']
        }],
        positions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayPositions']
        }],
        positionStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayPositionStrategy']
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayOffsetX']
        }],
        offsetY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayOffsetY']
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayWidth']
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayHeight']
        }],
        minWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayMinWidth']
        }],
        minHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayMinHeight']
        }],
        backdropClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayBackdropClass']
        }],
        panelClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayPanelClass']
        }],
        viewportMargin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayViewportMargin']
        }],
        scrollStrategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayScrollStrategy']
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayOpen']
        }],
        disableClose: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayDisableClose']
        }],
        transformOriginSelector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayTransformOriginOn']
        }],
        hasBackdrop: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayHasBackdrop']
        }],
        lockPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayLockPosition']
        }],
        flexibleDimensions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayFlexibleDimensions']
        }],
        growAfterOpen: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayGrowAfterOpen']
        }],
        push: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
          args: ['cdkConnectedOverlayPush']
        }],
        backdropClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }],
        positionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }],
        attach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }],
        detach: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }],
        overlayKeydown: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }],
        overlayOutsideClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_CdkConnectedOverlay, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Directive,
          args: [{
            selector: '[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]',
            exportAs: 'cdkConnectedOverlay'
          }]
        }], function () {
          return [{
            type: _Overlay
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewContainerRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
              args: [CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Optional
            }]
          }];
        }, {
          viewportMargin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayViewportMargin']
          }],
          open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayOpen']
          }],
          disableClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayDisableClose']
          }],
          backdropClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
          }],
          positionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
          }],
          attach: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
          }],
          detach: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
          }],
          overlayKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
          }],
          overlayOutsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output
          }],
          scrollStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayScrollStrategy']
          }],
          offsetX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayOffsetX']
          }],
          offsetY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayOffsetY']
          }],
          hasBackdrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayHasBackdrop']
          }],
          lockPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayLockPosition']
          }],
          flexibleDimensions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayFlexibleDimensions']
          }],
          growAfterOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayGrowAfterOpen']
          }],
          push: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayPush']
          }],
          positions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayPositions']
          }],
          origin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayOrigin']
          }],
          positionStrategy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayPositionStrategy']
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayWidth']
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayHeight']
          }],
          minWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayMinWidth']
          }],
          minHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayMinHeight']
          }],
          backdropClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayBackdropClass']
          }],
          panelClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayPanelClass']
          }],
          transformOriginSelector: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input,
            args: ['cdkConnectedOverlayTransformOriginOn']
          }]
        });
      })();
      /** @docs-private */


      function CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay) {
        return function () {
          return overlay.scrollStrategies.reposition();
        };
      }
      /** @docs-private */


      var CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER = {
        provide: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY,
        deps: [_Overlay],
        useFactory: CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER_FACTORY
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var _OverlayModule = function _OverlayModule() {
        _classCallCheck(this, _OverlayModule);
      };

      _OverlayModule.ɵfac = function OverlayModule_Factory(t) {
        return new (t || _OverlayModule)();
      };

      _OverlayModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _OverlayModule
      });
      _OverlayModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        providers: [_Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER],
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ScrollingModule], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ScrollingModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_OverlayModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule,
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ScrollingModule],
            exports: [_CdkConnectedOverlay, _CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ScrollingModule],
            declarations: [_CdkConnectedOverlay, _CdkOverlayOrigin],
            providers: [_Overlay, CDK_CONNECTED_OVERLAY_SCROLL_STRATEGY_PROVIDER]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_OverlayModule, {
          declarations: function declarations() {
            return [_CdkConnectedOverlay, _CdkOverlayOrigin];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.BidiModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ScrollingModule];
          },
          exports: function exports() {
            return [_CdkConnectedOverlay, _CdkOverlayOrigin, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__.ScrollingModule];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Alternative to OverlayContainer that supports correct displaying of overlay elements in
       * Fullscreen mode
       * https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullScreen
       *
       * Should be provided in the root component.
       */


      var _FullscreenOverlayContainer = /*#__PURE__*/function (_OverlayContainer2) {
        _inherits(_FullscreenOverlayContainer, _OverlayContainer2);

        var _super8 = _createSuper(_FullscreenOverlayContainer);

        function _FullscreenOverlayContainer(_document, platform) {
          _classCallCheck(this, _FullscreenOverlayContainer);

          return _super8.call(this, _document, platform);
        }

        _createClass(_FullscreenOverlayContainer, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(_FullscreenOverlayContainer.prototype), "ngOnDestroy", this).call(this);

            if (this._fullScreenEventName && this._fullScreenListener) {
              this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener);
            }
          }
        }, {
          key: "_createContainer",
          value: function _createContainer() {
            var _this49 = this;

            _get(_getPrototypeOf(_FullscreenOverlayContainer.prototype), "_createContainer", this).call(this);

            this._adjustParentForFullscreenChange();

            this._addFullscreenChangeListener(function () {
              return _this49._adjustParentForFullscreenChange();
            });
          }
        }, {
          key: "_adjustParentForFullscreenChange",
          value: function _adjustParentForFullscreenChange() {
            if (!this._containerElement) {
              return;
            }

            var fullscreenElement = this.getFullscreenElement();
            var parent = fullscreenElement || this._document.body;
            parent.appendChild(this._containerElement);
          }
        }, {
          key: "_addFullscreenChangeListener",
          value: function _addFullscreenChangeListener(fn) {
            var eventName = this._getEventName();

            if (eventName) {
              if (this._fullScreenListener) {
                this._document.removeEventListener(eventName, this._fullScreenListener);
              }

              this._document.addEventListener(eventName, fn);

              this._fullScreenListener = fn;
            }
          }
        }, {
          key: "_getEventName",
          value: function _getEventName() {
            if (!this._fullScreenEventName) {
              var _document = this._document;

              if (_document.fullscreenEnabled) {
                this._fullScreenEventName = 'fullscreenchange';
              } else if (_document.webkitFullscreenEnabled) {
                this._fullScreenEventName = 'webkitfullscreenchange';
              } else if (_document.mozFullScreenEnabled) {
                this._fullScreenEventName = 'mozfullscreenchange';
              } else if (_document.msFullscreenEnabled) {
                this._fullScreenEventName = 'MSFullscreenChange';
              }
            }

            return this._fullScreenEventName;
          }
          /**
           * When the page is put into fullscreen mode, a specific element is specified.
           * Only that element and its children are visible when in fullscreen mode.
           */

        }, {
          key: "getFullscreenElement",
          value: function getFullscreenElement() {
            var _document = this._document;
            return _document.fullscreenElement || _document.webkitFullscreenElement || _document.mozFullScreenElement || _document.msFullscreenElement || null;
          }
        }]);

        return _FullscreenOverlayContainer;
      }(_OverlayContainer);

      _FullscreenOverlayContainer.ɵfac = function FullscreenOverlayContainer_Factory(t) {
        return new (t || _FullscreenOverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
      };

      _FullscreenOverlayContainer.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        factory: function FullscreenOverlayContainer_Factory() {
          return new _FullscreenOverlayContainer(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
        },
        token: _FullscreenOverlayContainer,
        providedIn: "root"
      });

      _FullscreenOverlayContainer.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
          }]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](_FullscreenOverlayContainer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.DOCUMENT]
            }]
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    40912: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BasePortalHost": function BasePortalHost() {
          return (
            /* binding */
            _BasePortalHost
          );
        },

        /* harmony export */
        "BasePortalOutlet": function BasePortalOutlet() {
          return (
            /* binding */
            _BasePortalOutlet
          );
        },

        /* harmony export */
        "CdkPortal": function CdkPortal() {
          return (
            /* binding */
            _CdkPortal
          );
        },

        /* harmony export */
        "CdkPortalOutlet": function CdkPortalOutlet() {
          return (
            /* binding */
            _CdkPortalOutlet
          );
        },

        /* harmony export */
        "ComponentPortal": function ComponentPortal() {
          return (
            /* binding */
            _ComponentPortal
          );
        },

        /* harmony export */
        "DomPortal": function DomPortal() {
          return (
            /* binding */
            _DomPortal
          );
        },

        /* harmony export */
        "DomPortalHost": function DomPortalHost() {
          return (
            /* binding */
            _DomPortalHost
          );
        },

        /* harmony export */
        "DomPortalOutlet": function DomPortalOutlet() {
          return (
            /* binding */
            _DomPortalOutlet
          );
        },

        /* harmony export */
        "Portal": function Portal() {
          return (
            /* binding */
            _Portal
          );
        },

        /* harmony export */
        "PortalHostDirective": function PortalHostDirective() {
          return (
            /* binding */
            _PortalHostDirective
          );
        },

        /* harmony export */
        "PortalInjector": function PortalInjector() {
          return (
            /* binding */
            _PortalInjector
          );
        },

        /* harmony export */
        "PortalModule": function PortalModule() {
          return (
            /* binding */
            _PortalModule
          );
        },

        /* harmony export */
        "TemplatePortal": function TemplatePortal() {
          return (
            /* binding */
            _TemplatePortal
          );
        },

        /* harmony export */
        "TemplatePortalDirective": function TemplatePortalDirective() {
          return (
            /* binding */
            _TemplatePortalDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Throws an exception when attempting to attach a null portal to a host.
       * @docs-private
       */


      function throwNullPortalError() {
        throw Error('Must provide a portal to attach');
      }
      /**
       * Throws an exception when attempting to attach a portal to a host that is already attached.
       * @docs-private
       */


      function throwPortalAlreadyAttachedError() {
        throw Error('Host already has a portal attached');
      }
      /**
       * Throws an exception when attempting to attach a portal to an already-disposed host.
       * @docs-private
       */


      function throwPortalOutletAlreadyDisposedError() {
        throw Error('This PortalOutlet has already been disposed');
      }
      /**
       * Throws an exception when attempting to attach an unknown portal type.
       * @docs-private
       */


      function throwUnknownPortalTypeError() {
        throw Error('Attempting to attach an unknown Portal type. BasePortalOutlet accepts either ' + 'a ComponentPortal or a TemplatePortal.');
      }
      /**
       * Throws an exception when attempting to attach a portal to a null host.
       * @docs-private
       */


      function throwNullPortalOutletError() {
        throw Error('Attempting to attach a portal to a null PortalOutlet');
      }
      /**
       * Throws an exception when attempting to detach a portal that is not attached.
       * @docs-private
       */


      function throwNoPortalAttachedError() {
        throw Error('Attempting to detach a portal that is not attached to a host');
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A `Portal` is something that you want to render somewhere else.
       * It can be attach to / detached from a `PortalOutlet`.
       */


      var _Portal = /*#__PURE__*/function () {
        function _Portal() {
          _classCallCheck(this, _Portal);
        }

        _createClass(_Portal, [{
          key: "attach",
          value:
          /** Attach this portal to a host. */
          function attach(host) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (host == null) {
                throwNullPortalOutletError();
              }

              if (host.hasAttached()) {
                throwPortalAlreadyAttachedError();
              }
            }

            this._attachedHost = host;
            return host.attach(this);
          }
          /** Detach this portal from its host */

        }, {
          key: "detach",
          value: function detach() {
            var host = this._attachedHost;

            if (host != null) {
              this._attachedHost = null;
              host.detach();
            } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
              throwNoPortalAttachedError();
            }
          }
          /** Whether this portal is attached to a host. */

        }, {
          key: "isAttached",
          get: function get() {
            return this._attachedHost != null;
          }
          /**
           * Sets the PortalOutlet reference without performing `attach()`. This is used directly by
           * the PortalOutlet when it is performing an `attach()` or `detach()`.
           */

        }, {
          key: "setAttachedHost",
          value: function setAttachedHost(host) {
            this._attachedHost = host;
          }
        }]);

        return _Portal;
      }();
      /**
       * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
       */


      var _ComponentPortal = /*#__PURE__*/function (_Portal2) {
        _inherits(_ComponentPortal, _Portal2);

        var _super9 = _createSuper(_ComponentPortal);

        function _ComponentPortal(component, viewContainerRef, injector, componentFactoryResolver) {
          var _this50;

          _classCallCheck(this, _ComponentPortal);

          _this50 = _super9.call(this);
          _this50.component = component;
          _this50.viewContainerRef = viewContainerRef;
          _this50.injector = injector;
          _this50.componentFactoryResolver = componentFactoryResolver;
          return _this50;
        }

        return _ComponentPortal;
      }(_Portal);
      /**
       * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
       */


      var _TemplatePortal = /*#__PURE__*/function (_Portal3) {
        _inherits(_TemplatePortal, _Portal3);

        var _super10 = _createSuper(_TemplatePortal);

        function _TemplatePortal(template, viewContainerRef, context) {
          var _this51;

          _classCallCheck(this, _TemplatePortal);

          _this51 = _super10.call(this);
          _this51.templateRef = template;
          _this51.viewContainerRef = viewContainerRef;
          _this51.context = context;
          return _this51;
        }

        _createClass(_TemplatePortal, [{
          key: "origin",
          get: function get() {
            return this.templateRef.elementRef;
          }
          /**
           * Attach the portal to the provided `PortalOutlet`.
           * When a context is provided it will override the `context` property of the `TemplatePortal`
           * instance.
           */

        }, {
          key: "attach",
          value: function attach(host) {
            var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
            this.context = context;
            return _get(_getPrototypeOf(_TemplatePortal.prototype), "attach", this).call(this, host);
          }
        }, {
          key: "detach",
          value: function detach() {
            this.context = undefined;
            return _get(_getPrototypeOf(_TemplatePortal.prototype), "detach", this).call(this);
          }
        }]);

        return _TemplatePortal;
      }(_Portal);
      /**
       * A `DomPortal` is a portal whose DOM element will be taken from its current position
       * in the DOM and moved into a portal outlet, when it is attached. On detach, the content
       * will be restored to its original position.
       */


      var _DomPortal = /*#__PURE__*/function (_Portal4) {
        _inherits(_DomPortal, _Portal4);

        var _super11 = _createSuper(_DomPortal);

        function _DomPortal(element) {
          var _this52;

          _classCallCheck(this, _DomPortal);

          _this52 = _super11.call(this);
          _this52.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? element.nativeElement : element;
          return _this52;
        }

        return _DomPortal;
      }(_Portal);
      /**
       * Partial implementation of PortalOutlet that handles attaching
       * ComponentPortal and TemplatePortal.
       */


      var _BasePortalOutlet = /*#__PURE__*/function () {
        function _BasePortalOutlet() {
          _classCallCheck(this, _BasePortalOutlet);

          /** Whether this host has already been permanently disposed. */
          this._isDisposed = false; // @breaking-change 10.0.0 `attachDomPortal` to become a required abstract method.

          this.attachDomPortal = null;
        }
        /** Whether this host has an attached portal. */


        _createClass(_BasePortalOutlet, [{
          key: "hasAttached",
          value: function hasAttached() {
            return !!this._attachedPortal;
          }
          /** Attaches a portal. */

        }, {
          key: "attach",
          value: function attach(portal) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!portal) {
                throwNullPortalError();
              }

              if (this.hasAttached()) {
                throwPortalAlreadyAttachedError();
              }

              if (this._isDisposed) {
                throwPortalOutletAlreadyDisposedError();
              }
            }

            if (portal instanceof _ComponentPortal) {
              this._attachedPortal = portal;
              return this.attachComponentPortal(portal);
            } else if (portal instanceof _TemplatePortal) {
              this._attachedPortal = portal;
              return this.attachTemplatePortal(portal); // @breaking-change 10.0.0 remove null check for `this.attachDomPortal`.
            } else if (this.attachDomPortal && portal instanceof _DomPortal) {
              this._attachedPortal = portal;
              return this.attachDomPortal(portal);
            }

            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              throwUnknownPortalTypeError();
            }
          }
          /** Detaches a previously attached portal. */

        }, {
          key: "detach",
          value: function detach() {
            if (this._attachedPortal) {
              this._attachedPortal.setAttachedHost(null);

              this._attachedPortal = null;
            }

            this._invokeDisposeFn();
          }
          /** Permanently dispose of this portal host. */

        }, {
          key: "dispose",
          value: function dispose() {
            if (this.hasAttached()) {
              this.detach();
            }

            this._invokeDisposeFn();

            this._isDisposed = true;
          }
          /** @docs-private */

        }, {
          key: "setDisposeFn",
          value: function setDisposeFn(fn) {
            this._disposeFn = fn;
          }
        }, {
          key: "_invokeDisposeFn",
          value: function _invokeDisposeFn() {
            if (this._disposeFn) {
              this._disposeFn();

              this._disposeFn = null;
            }
          }
        }]);

        return _BasePortalOutlet;
      }();
      /**
       * @deprecated Use `BasePortalOutlet` instead.
       * @breaking-change 9.0.0
       */


      var _BasePortalHost = /*#__PURE__*/function (_BasePortalOutlet2) {
        _inherits(_BasePortalHost, _BasePortalOutlet2);

        var _super12 = _createSuper(_BasePortalHost);

        function _BasePortalHost() {
          _classCallCheck(this, _BasePortalHost);

          return _super12.apply(this, arguments);
        }

        return _BasePortalHost;
      }(_BasePortalOutlet);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A PortalOutlet for attaching portals to an arbitrary DOM element outside of the Angular
       * application context.
       */


      var _DomPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet3) {
        _inherits(_DomPortalOutlet, _BasePortalOutlet3);

        var _super13 = _createSuper(_DomPortalOutlet);

        function _DomPortalOutlet(
        /** Element into which the content is projected. */
        outletElement, _componentFactoryResolver, _appRef, _defaultInjector,
        /**
         * @deprecated `_document` Parameter to be made required.
         * @breaking-change 10.0.0
         */
        _document) {
          var _thisSuper, _this53;

          _classCallCheck(this, _DomPortalOutlet);

          _this53 = _super13.call(this);
          _this53.outletElement = outletElement;
          _this53._componentFactoryResolver = _componentFactoryResolver;
          _this53._appRef = _appRef;
          _this53._defaultInjector = _defaultInjector;
          /**
           * Attaches a DOM portal by transferring its content into the outlet.
           * @param portal Portal to be attached.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this53.attachDomPortal = function (portal) {
            // @breaking-change 10.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!_this53._document && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('Cannot attach DOM portal without _document constructor parameter');
            }

            var element = portal.element;

            if (!element.parentNode && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('DOM portal content must be attached to a parent node.');
            } // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.


            var anchorNode = _this53._document.createComment('dom-portal');

            element.parentNode.insertBefore(anchorNode, element);

            _this53.outletElement.appendChild(element);

            _this53._attachedPortal = portal;

            _get((_thisSuper = _assertThisInitialized(_this53), _getPrototypeOf(_DomPortalOutlet.prototype)), "setDisposeFn", _thisSuper).call(_thisSuper, function () {
              // We can't use `replaceWith` here because IE doesn't support it.
              if (anchorNode.parentNode) {
                anchorNode.parentNode.replaceChild(element, anchorNode);
              }
            });
          };

          _this53._document = _document;
          return _this53;
        }
        /**
         * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
         * @param portal Portal to be attached
         * @returns Reference to the created component.
         */


        _createClass(_DomPortalOutlet, [{
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            var _this54 = this;

            var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
            var componentFactory = resolver.resolveComponentFactory(portal.component);
            var componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
            // for the component (in terms of Angular's component tree, not rendering).
            // When the ViewContainerRef is missing, we use the factory to create the component directly
            // and then manually attach the view to the application.

            if (portal.viewContainerRef) {
              componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.injector);
              this.setDisposeFn(function () {
                return componentRef.destroy();
              });
            } else {
              componentRef = componentFactory.create(portal.injector || this._defaultInjector);

              this._appRef.attachView(componentRef.hostView);

              this.setDisposeFn(function () {
                _this54._appRef.detachView(componentRef.hostView);

                componentRef.destroy();
              });
            } // At this point the component has been instantiated, so we move it to the location in the DOM
            // where we want it to be rendered.


            this.outletElement.appendChild(this._getComponentRootNode(componentRef));
            this._attachedPortal = portal;
            return componentRef;
          }
          /**
           * Attaches a template portal to the DOM as an embedded view.
           * @param portal Portal to be attached.
           * @returns Reference to the created embedded view.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            var _this55 = this;

            var viewContainer = portal.viewContainerRef;
            var viewRef = viewContainer.createEmbeddedView(portal.templateRef, portal.context); // The method `createEmbeddedView` will add the view as a child of the viewContainer.
            // But for the DomPortalOutlet the view can be added everywhere in the DOM
            // (e.g Overlay Container) To move the view to the specified host element. We just
            // re-append the existing root nodes.

            viewRef.rootNodes.forEach(function (rootNode) {
              return _this55.outletElement.appendChild(rootNode);
            }); // Note that we want to detect changes after the nodes have been moved so that
            // any directives inside the portal that are looking at the DOM inside a lifecycle
            // hook won't be invoked too early.

            viewRef.detectChanges();
            this.setDisposeFn(function () {
              var index = viewContainer.indexOf(viewRef);

              if (index !== -1) {
                viewContainer.remove(index);
              }
            });
            this._attachedPortal = portal; // TODO(jelbourn): Return locals from view.

            return viewRef;
          }
          /**
           * Clears out a portal from the DOM.
           */

        }, {
          key: "dispose",
          value: function dispose() {
            _get(_getPrototypeOf(_DomPortalOutlet.prototype), "dispose", this).call(this);

            if (this.outletElement.parentNode != null) {
              this.outletElement.parentNode.removeChild(this.outletElement);
            }
          }
          /** Gets the root HTMLElement for an instantiated component. */

        }, {
          key: "_getComponentRootNode",
          value: function _getComponentRootNode(componentRef) {
            return componentRef.hostView.rootNodes[0];
          }
        }]);

        return _DomPortalOutlet;
      }(_BasePortalOutlet);
      /**
       * @deprecated Use `DomPortalOutlet` instead.
       * @breaking-change 9.0.0
       */


      var _DomPortalHost = /*#__PURE__*/function (_DomPortalOutlet2) {
        _inherits(_DomPortalHost, _DomPortalOutlet2);

        var _super14 = _createSuper(_DomPortalHost);

        function _DomPortalHost() {
          _classCallCheck(this, _DomPortalHost);

          return _super14.apply(this, arguments);
        }

        return _DomPortalHost;
      }(_DomPortalOutlet);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Directive version of a `TemplatePortal`. Because the directive *is* a TemplatePortal,
       * the directive instance itself can be attached to a host, enabling declarative use of portals.
       */


      var _CdkPortal = /*#__PURE__*/function (_TemplatePortal2) {
        _inherits(_CdkPortal, _TemplatePortal2);

        var _super15 = _createSuper(_CdkPortal);

        function _CdkPortal(templateRef, viewContainerRef) {
          _classCallCheck(this, _CdkPortal);

          return _super15.call(this, templateRef, viewContainerRef);
        }

        return _CdkPortal;
      }(_TemplatePortal);

      _CdkPortal.ɵfac = function CdkPortal_Factory(t) {
        return new (t || _CdkPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
      };

      _CdkPortal.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkPortal,
        selectors: [["", "cdkPortal", ""]],
        exportAs: ["cdkPortal"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _CdkPortal.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkPortal, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkPortal]',
            exportAs: 'cdkPortal'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }];
        }, null);
      })();
      /**
       * @deprecated Use `CdkPortal` instead.
       * @breaking-change 9.0.0
       */


      var _TemplatePortalDirective = /*#__PURE__*/function (_CdkPortal2) {
        _inherits(_TemplatePortalDirective, _CdkPortal2);

        var _super16 = _createSuper(_TemplatePortalDirective);

        function _TemplatePortalDirective() {
          _classCallCheck(this, _TemplatePortalDirective);

          return _super16.apply(this, arguments);
        }

        return _TemplatePortalDirective;
      }(_CdkPortal);

      _TemplatePortalDirective.ɵfac = /*@__PURE__*/function () {
        var ɵTemplatePortalDirective_BaseFactory;
        return function TemplatePortalDirective_Factory(t) {
          return (ɵTemplatePortalDirective_BaseFactory || (ɵTemplatePortalDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_TemplatePortalDirective)))(t || _TemplatePortalDirective);
        };
      }();

      _TemplatePortalDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _TemplatePortalDirective,
        selectors: [["", "cdk-portal", ""], ["", "portal", ""]],
        exportAs: ["cdkPortal"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _CdkPortal,
          useExisting: _TemplatePortalDirective
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_TemplatePortalDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdk-portal], [portal]',
            exportAs: 'cdkPortal',
            providers: [{
              provide: _CdkPortal,
              useExisting: _TemplatePortalDirective
            }]
          }]
        }], null, null);
      })();
      /**
       * Directive version of a PortalOutlet. Because the directive *is* a PortalOutlet, portals can be
       * directly attached to it, enabling declarative use.
       *
       * Usage:
       * `<ng-template [cdkPortalOutlet]="greeting"></ng-template>`
       */


      var _CdkPortalOutlet = /*#__PURE__*/function (_BasePortalOutlet4) {
        _inherits(_CdkPortalOutlet, _BasePortalOutlet4);

        var _super17 = _createSuper(_CdkPortalOutlet);

        function _CdkPortalOutlet(_componentFactoryResolver, _viewContainerRef,
        /**
         * @deprecated `_document` parameter to be made required.
         * @breaking-change 9.0.0
         */
        _document) {
          var _thisSuper2, _this56;

          _classCallCheck(this, _CdkPortalOutlet);

          _this56 = _super17.call(this);
          _this56._componentFactoryResolver = _componentFactoryResolver;
          _this56._viewContainerRef = _viewContainerRef;
          /** Whether the portal component is initialized. */

          _this56._isInitialized = false;
          /** Emits when a portal is attached to the outlet. */

          _this56.attached = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * Attaches the given DomPortal to this PortalHost by moving all of the portal content into it.
           * @param portal Portal to be attached.
           * @deprecated To be turned into a method.
           * @breaking-change 10.0.0
           */

          _this56.attachDomPortal = function (portal) {
            // @breaking-change 9.0.0 Remove check and error once the
            // `_document` constructor parameter is required.
            if (!_this56._document && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('Cannot attach DOM portal without _document constructor parameter');
            }

            var element = portal.element;

            if (!element.parentNode && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('DOM portal content must be attached to a parent node.');
            } // Anchor used to save the element's previous position so
            // that we can restore it when the portal is detached.


            var anchorNode = _this56._document.createComment('dom-portal');

            portal.setAttachedHost(_assertThisInitialized(_this56));
            element.parentNode.insertBefore(anchorNode, element);

            _this56._getRootNode().appendChild(element);

            _this56._attachedPortal = portal;

            _get((_thisSuper2 = _assertThisInitialized(_this56), _getPrototypeOf(_CdkPortalOutlet.prototype)), "setDisposeFn", _thisSuper2).call(_thisSuper2, function () {
              if (anchorNode.parentNode) {
                anchorNode.parentNode.replaceChild(element, anchorNode);
              }
            });
          };

          _this56._document = _document;
          return _this56;
        }
        /** Portal associated with the Portal outlet. */


        _createClass(_CdkPortalOutlet, [{
          key: "portal",
          get: function get() {
            return this._attachedPortal;
          },
          set: function set(portal) {
            // Ignore the cases where the `portal` is set to a falsy value before the lifecycle hooks have
            // run. This handles the cases where the user might do something like `<div cdkPortalOutlet>`
            // and attach a portal programmatically in the parent component. When Angular does the first CD
            // round, it will fire the setter with empty string, causing the user's content to be cleared.
            if (this.hasAttached() && !portal && !this._isInitialized) {
              return;
            }

            if (this.hasAttached()) {
              _get(_getPrototypeOf(_CdkPortalOutlet.prototype), "detach", this).call(this);
            }

            if (portal) {
              _get(_getPrototypeOf(_CdkPortalOutlet.prototype), "attach", this).call(this, portal);
            }

            this._attachedPortal = portal;
          }
          /** Component or view reference that is attached to the portal. */

        }, {
          key: "attachedRef",
          get: function get() {
            return this._attachedRef;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this._isInitialized = true;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            _get(_getPrototypeOf(_CdkPortalOutlet.prototype), "dispose", this).call(this);

            this._attachedPortal = null;
            this._attachedRef = null;
          }
          /**
           * Attach the given ComponentPortal to this PortalOutlet using the ComponentFactoryResolver.
           *
           * @param portal Portal to be attached to the portal outlet.
           * @returns Reference to the created component.
           */

        }, {
          key: "attachComponentPortal",
          value: function attachComponentPortal(portal) {
            portal.setAttachedHost(this); // If the portal specifies an origin, use that as the logical location of the component
            // in the application tree. Otherwise use the location of this PortalOutlet.

            var viewContainerRef = portal.viewContainerRef != null ? portal.viewContainerRef : this._viewContainerRef;
            var resolver = portal.componentFactoryResolver || this._componentFactoryResolver;
            var componentFactory = resolver.resolveComponentFactory(portal.component);
            var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.injector); // If we're using a view container that's different from the injected one (e.g. when the portal
            // specifies its own) we need to move the component into the outlet, otherwise it'll be rendered
            // inside of the alternate view container.

            if (viewContainerRef !== this._viewContainerRef) {
              this._getRootNode().appendChild(ref.hostView.rootNodes[0]);
            }

            _get(_getPrototypeOf(_CdkPortalOutlet.prototype), "setDisposeFn", this).call(this, function () {
              return ref.destroy();
            });

            this._attachedPortal = portal;
            this._attachedRef = ref;
            this.attached.emit(ref);
            return ref;
          }
          /**
           * Attach the given TemplatePortal to this PortalHost as an embedded View.
           * @param portal Portal to be attached.
           * @returns Reference to the created embedded view.
           */

        }, {
          key: "attachTemplatePortal",
          value: function attachTemplatePortal(portal) {
            var _this57 = this;

            portal.setAttachedHost(this);

            var viewRef = this._viewContainerRef.createEmbeddedView(portal.templateRef, portal.context);

            _get(_getPrototypeOf(_CdkPortalOutlet.prototype), "setDisposeFn", this).call(this, function () {
              return _this57._viewContainerRef.clear();
            });

            this._attachedPortal = portal;
            this._attachedRef = viewRef;
            this.attached.emit(viewRef);
            return viewRef;
          }
          /** Gets the root node of the portal outlet. */

        }, {
          key: "_getRootNode",
          value: function _getRootNode() {
            var nativeElement = this._viewContainerRef.element.nativeElement; // The directive could be set on a template which will result in a comment
            // node being the root. Use the comment's parent node if that is the case.

            return nativeElement.nodeType === nativeElement.ELEMENT_NODE ? nativeElement : nativeElement.parentNode;
          }
        }]);

        return _CdkPortalOutlet;
      }(_BasePortalOutlet);

      _CdkPortalOutlet.ɵfac = function CdkPortalOutlet_Factory(t) {
        return new (t || _CdkPortalOutlet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
      };

      _CdkPortalOutlet.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkPortalOutlet,
        selectors: [["", "cdkPortalOutlet", ""]],
        inputs: {
          portal: ["cdkPortalOutlet", "portal"]
        },
        outputs: {
          attached: "attached"
        },
        exportAs: ["cdkPortalOutlet"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      _CdkPortalOutlet.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
          }]
        }];
      };

      _CdkPortalOutlet.propDecorators = {
        attached: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkPortalOutlet, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkPortalOutlet]',
            exportAs: 'cdkPortalOutlet',
            inputs: ['portal: cdkPortalOutlet']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }]
          }];
        }, {
          attached: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }]
        });
      })();
      /**
       * @deprecated Use `CdkPortalOutlet` instead.
       * @breaking-change 9.0.0
       */


      var _PortalHostDirective = /*#__PURE__*/function (_CdkPortalOutlet2) {
        _inherits(_PortalHostDirective, _CdkPortalOutlet2);

        var _super18 = _createSuper(_PortalHostDirective);

        function _PortalHostDirective() {
          _classCallCheck(this, _PortalHostDirective);

          return _super18.apply(this, arguments);
        }

        return _PortalHostDirective;
      }(_CdkPortalOutlet);

      _PortalHostDirective.ɵfac = /*@__PURE__*/function () {
        var ɵPortalHostDirective_BaseFactory;
        return function PortalHostDirective_Factory(t) {
          return (ɵPortalHostDirective_BaseFactory || (ɵPortalHostDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_PortalHostDirective)))(t || _PortalHostDirective);
        };
      }();

      _PortalHostDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _PortalHostDirective,
        selectors: [["", "cdkPortalHost", ""], ["", "portalHost", ""]],
        inputs: {
          portal: ["cdkPortalHost", "portal"]
        },
        exportAs: ["cdkPortalHost"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _CdkPortalOutlet,
          useExisting: _PortalHostDirective
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_PortalHostDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkPortalHost], [portalHost]',
            exportAs: 'cdkPortalHost',
            inputs: ['portal: cdkPortalHost'],
            providers: [{
              provide: _CdkPortalOutlet,
              useExisting: _PortalHostDirective
            }]
          }]
        }], null, null);
      })();

      var _PortalModule = function _PortalModule() {
        _classCallCheck(this, _PortalModule);
      };

      _PortalModule.ɵfac = function PortalModule_Factory(t) {
        return new (t || _PortalModule)();
      };

      _PortalModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _PortalModule
      });
      _PortalModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_PortalModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            exports: [_CdkPortal, _CdkPortalOutlet, _TemplatePortalDirective, _PortalHostDirective],
            declarations: [_CdkPortal, _CdkPortalOutlet, _TemplatePortalDirective, _PortalHostDirective]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_PortalModule, {
          declarations: [_CdkPortal, _CdkPortalOutlet, _TemplatePortalDirective, _PortalHostDirective],
          exports: [_CdkPortal, _CdkPortalOutlet, _TemplatePortalDirective, _PortalHostDirective]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Custom injector to be used when providing custom
       * injection tokens to components inside a portal.
       * @docs-private
       * @deprecated Use `Injector.create` instead.
       * @breaking-change 11.0.0
       */


      var _PortalInjector = /*#__PURE__*/function () {
        function _PortalInjector(_parentInjector, _customTokens) {
          _classCallCheck(this, _PortalInjector);

          this._parentInjector = _parentInjector;
          this._customTokens = _customTokens;
        }

        _createClass(_PortalInjector, [{
          key: "get",
          value: function get(token, notFoundValue) {
            var value = this._customTokens.get(token);

            if (typeof value !== 'undefined') {
              return value;
            }

            return this._parentInjector.get(token, notFoundValue);
          }
        }]);

        return _PortalInjector;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    42791: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CdkFixedSizeVirtualScroll": function CdkFixedSizeVirtualScroll() {
          return (
            /* binding */
            _CdkFixedSizeVirtualScroll
          );
        },

        /* harmony export */
        "CdkScrollable": function CdkScrollable() {
          return (
            /* binding */
            _CdkScrollable
          );
        },

        /* harmony export */
        "CdkScrollableModule": function CdkScrollableModule() {
          return (
            /* binding */
            _CdkScrollableModule
          );
        },

        /* harmony export */
        "CdkVirtualForOf": function CdkVirtualForOf() {
          return (
            /* binding */
            _CdkVirtualForOf
          );
        },

        /* harmony export */
        "CdkVirtualScrollViewport": function CdkVirtualScrollViewport() {
          return (
            /* binding */
            _CdkVirtualScrollViewport
          );
        },

        /* harmony export */
        "DEFAULT_RESIZE_TIME": function DEFAULT_RESIZE_TIME() {
          return (
            /* binding */
            _DEFAULT_RESIZE_TIME
          );
        },

        /* harmony export */
        "DEFAULT_SCROLL_TIME": function DEFAULT_SCROLL_TIME() {
          return (
            /* binding */
            _DEFAULT_SCROLL_TIME
          );
        },

        /* harmony export */
        "FixedSizeVirtualScrollStrategy": function FixedSizeVirtualScrollStrategy() {
          return (
            /* binding */
            _FixedSizeVirtualScrollStrategy
          );
        },

        /* harmony export */
        "ScrollDispatcher": function ScrollDispatcher() {
          return (
            /* binding */
            _ScrollDispatcher
          );
        },

        /* harmony export */
        "ScrollingModule": function ScrollingModule() {
          return (
            /* binding */
            _ScrollingModule
          );
        },

        /* harmony export */
        "VIRTUAL_SCROLL_STRATEGY": function VIRTUAL_SCROLL_STRATEGY() {
          return (
            /* binding */
            _VIRTUAL_SCROLL_STRATEGY
          );
        },

        /* harmony export */
        "ViewportRuler": function ViewportRuler() {
          return (
            /* binding */
            _ViewportRuler
          );
        },

        /* harmony export */
        "_fixedSizeVirtualScrollStrategyFactory": function _fixedSizeVirtualScrollStrategyFactory() {
          return (
            /* binding */
            _fixedSizeVirtualScrollStrategyFactory2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      47599);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      54926);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      12027);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      22526);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      31232);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! rxjs */
      77127);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! rxjs */
      20411);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      52249);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      49417);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      76477);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      44094);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! rxjs/operators */
      57993);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! rxjs/operators */
      72184);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! rxjs/operators */
      98578);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! rxjs/operators */
      41757);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/cdk/platform */
      36145);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      772);
      /* harmony import */


      var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/cdk/collections */
      62604);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** The injection token used to specify the virtual scrolling strategy. */


      var _c0 = ["contentWrapper"];
      var _c1 = ["*"];

      var _VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VIRTUAL_SCROLL_STRATEGY');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Virtual scrolling strategy for lists with items of known fixed size. */


      var _FixedSizeVirtualScrollStrategy = /*#__PURE__*/function () {
        /**
         * @param itemSize The size of the items in the virtually scrolling list.
         * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
         * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
         */
        function _FixedSizeVirtualScrollStrategy(itemSize, minBufferPx, maxBufferPx) {
          _classCallCheck(this, _FixedSizeVirtualScrollStrategy);

          this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

          this.scrolledIndexChange = this._scrolledIndexChange.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
          /** The attached viewport. */

          this._viewport = null;
          this._itemSize = itemSize;
          this._minBufferPx = minBufferPx;
          this._maxBufferPx = maxBufferPx;
        }
        /**
         * Attaches this scroll strategy to a viewport.
         * @param viewport The viewport to attach this strategy to.
         */


        _createClass(_FixedSizeVirtualScrollStrategy, [{
          key: "attach",
          value: function attach(viewport) {
            this._viewport = viewport;

            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** Detaches this scroll strategy from the currently attached viewport. */

        }, {
          key: "detach",
          value: function detach() {
            this._scrolledIndexChange.complete();

            this._viewport = null;
          }
          /**
           * Update the item size and buffer size.
           * @param itemSize The size of the items in the virtually scrolling list.
           * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
           * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
           */

        }, {
          key: "updateItemAndBufferSize",
          value: function updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
            if (maxBufferPx < minBufferPx && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
            }

            this._itemSize = itemSize;
            this._minBufferPx = minBufferPx;
            this._maxBufferPx = maxBufferPx;

            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onContentScrolled",
          value: function onContentScrolled() {
            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onDataLengthChanged",
          value: function onDataLengthChanged() {
            this._updateTotalContentSize();

            this._updateRenderedRange();
          }
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onContentRendered",
          value: function onContentRendered() {}
          /** @docs-private Implemented as part of VirtualScrollStrategy. */

        }, {
          key: "onRenderedOffsetChanged",
          value: function onRenderedOffsetChanged() {}
          /**
           * Scroll to the offset for the given index.
           * @param index The index of the element to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling.
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index, behavior) {
            if (this._viewport) {
              this._viewport.scrollToOffset(index * this._itemSize, behavior);
            }
          }
          /** Update the viewport's total content size. */

        }, {
          key: "_updateTotalContentSize",
          value: function _updateTotalContentSize() {
            if (!this._viewport) {
              return;
            }

            this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
          }
          /** Update the viewport's rendered range. */

        }, {
          key: "_updateRenderedRange",
          value: function _updateRenderedRange() {
            if (!this._viewport) {
              return;
            }

            var renderedRange = this._viewport.getRenderedRange();

            var newRange = {
              start: renderedRange.start,
              end: renderedRange.end
            };

            var viewportSize = this._viewport.getViewportSize();

            var dataLength = this._viewport.getDataLength();

            var scrollOffset = this._viewport.measureScrollOffset(); // Prevent NaN as result when dividing by zero.


            var firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0; // If user scrolls to the bottom of the list and data changes to a smaller list

            if (newRange.end > dataLength) {
              // We have to recalculate the first visible index based on new data length and viewport size.
              var maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
              var newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems)); // If first visible index changed we must update scroll offset to handle start/end buffers
              // Current range must also be adjusted to cover the new position (bottom of new list).

              if (firstVisibleIndex != newVisibleIndex) {
                firstVisibleIndex = newVisibleIndex;
                scrollOffset = newVisibleIndex * this._itemSize;
                newRange.start = Math.floor(firstVisibleIndex);
              }

              newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
            }

            var startBuffer = scrollOffset - newRange.start * this._itemSize;

            if (startBuffer < this._minBufferPx && newRange.start != 0) {
              var expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
              newRange.start = Math.max(0, newRange.start - expandStart);
              newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
            } else {
              var endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

              if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
                var expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

                if (expandEnd > 0) {
                  newRange.end = Math.min(dataLength, newRange.end + expandEnd);
                  newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
                }
              }
            }

            this._viewport.setRenderedRange(newRange);

            this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

            this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
          }
        }]);

        return _FixedSizeVirtualScrollStrategy;
      }();
      /**
       * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
       * `FixedSizeVirtualScrollStrategy` from the given directive.
       * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
       *     `FixedSizeVirtualScrollStrategy` from.
       */


      function _fixedSizeVirtualScrollStrategyFactory2(fixedSizeDir) {
        return fixedSizeDir._scrollStrategy;
      }
      /** A virtual scroll strategy that supports fixed-size items. */


      var _CdkFixedSizeVirtualScroll = /*#__PURE__*/function () {
        function _CdkFixedSizeVirtualScroll() {
          _classCallCheck(this, _CdkFixedSizeVirtualScroll);

          this._itemSize = 20;
          this._minBufferPx = 100;
          this._maxBufferPx = 200;
          /** The scroll strategy used by this directive. */

          this._scrollStrategy = new _FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
        }
        /** The size of the items in the list (in pixels). */


        _createClass(_CdkFixedSizeVirtualScroll, [{
          key: "itemSize",
          get: function get() {
            return this._itemSize;
          },
          set: function set(value) {
            this._itemSize = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
          }
          /**
           * The minimum amount of buffer rendered beyond the viewport (in pixels).
           * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
           */

        }, {
          key: "minBufferPx",
          get: function get() {
            return this._minBufferPx;
          },
          set: function set(value) {
            this._minBufferPx = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
          }
          /**
           * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
           */

        }, {
          key: "maxBufferPx",
          get: function get() {
            return this._maxBufferPx;
          },
          set: function set(value) {
            this._maxBufferPx = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
          }
        }]);

        return _CdkFixedSizeVirtualScroll;
      }();

      _CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
        return new (t || _CdkFixedSizeVirtualScroll)();
      };

      _CdkFixedSizeVirtualScroll.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkFixedSizeVirtualScroll,
        selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
        inputs: {
          itemSize: "itemSize",
          minBufferPx: "minBufferPx",
          maxBufferPx: "maxBufferPx"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _VIRTUAL_SCROLL_STRATEGY,
          useFactory: _fixedSizeVirtualScrollStrategyFactory2,
          deps: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
            return _CdkFixedSizeVirtualScroll;
          })]
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
      _CdkFixedSizeVirtualScroll.propDecorators = {
        itemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        minBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        maxBufferPx: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkFixedSizeVirtualScroll, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'cdk-virtual-scroll-viewport[itemSize]',
            providers: [{
              provide: _VIRTUAL_SCROLL_STRATEGY,
              useFactory: _fixedSizeVirtualScrollStrategyFactory2,
              deps: [(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
                return _CdkFixedSizeVirtualScroll;
              })]
            }]
          }]
        }], function () {
          return [];
        }, {
          itemSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          minBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          maxBufferPx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Time in ms to throttle the scrolling events by default. */


      var _DEFAULT_SCROLL_TIME = 20;
      /**
       * Service contained all registered Scrollable references and emits an event when any one of the
       * Scrollable references emit a scrolled event.
       */

      var _ScrollDispatcher = /*#__PURE__*/function () {
        function _ScrollDispatcher(_ngZone, _platform, document) {
          _classCallCheck(this, _ScrollDispatcher);

          this._ngZone = _ngZone;
          this._platform = _platform;
          /** Subject for notifying that a registered scrollable reference element has been scrolled. */

          this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Keeps track of the global `scroll` and `resize` subscriptions. */

          this._globalSubscription = null;
          /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */

          this._scrolledCount = 0;
          /**
           * Map of all the scrollable references that are registered with the service and their
           * scroll event subscriptions.
           */

          this.scrollContainers = new Map();
          this._document = document;
        }
        /**
         * Registers a scrollable instance with the service and listens for its scrolled events. When the
         * scrollable is scrolled, the service emits the event to its scrolled observable.
         * @param scrollable Scrollable instance to be registered.
         */


        _createClass(_ScrollDispatcher, [{
          key: "register",
          value: function register(scrollable) {
            var _this58 = this;

            if (!this.scrollContainers.has(scrollable)) {
              this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(function () {
                return _this58._scrolled.next(scrollable);
              }));
            }
          }
          /**
           * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
           * @param scrollable Scrollable instance to be deregistered.
           */

        }, {
          key: "deregister",
          value: function deregister(scrollable) {
            var scrollableReference = this.scrollContainers.get(scrollable);

            if (scrollableReference) {
              scrollableReference.unsubscribe();
              this.scrollContainers["delete"](scrollable);
            }
          }
          /**
           * Returns an observable that emits an event whenever any of the registered Scrollable
           * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
           * to override the default "throttle" time.
           *
           * **Note:** in order to avoid hitting change detection for every scroll event,
           * all of the events emitted from this stream will be run outside the Angular zone.
           * If you need to update any data bindings as a result of a scroll event, you have
           * to run the callback using `NgZone.run`.
           */

        }, {
          key: "scrolled",
          value: function scrolled() {
            var _this59 = this;

            var auditTimeInMs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _DEFAULT_SCROLL_TIME;

            if (!this._platform.isBrowser) {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
            }

            return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(function (observer) {
              if (!_this59._globalSubscription) {
                _this59._addGlobalListener();
              } // In the case of a 0ms delay, use an observable without auditTime
              // since it does add a perceptible delay in processing overhead.


              var subscription = auditTimeInMs > 0 ? _this59._scrolled.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(auditTimeInMs)).subscribe(observer) : _this59._scrolled.subscribe(observer);
              _this59._scrolledCount++;
              return function () {
                subscription.unsubscribe();
                _this59._scrolledCount--;

                if (!_this59._scrolledCount) {
                  _this59._removeGlobalListener();
                }
              };
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var _this60 = this;

            this._removeGlobalListener();

            this.scrollContainers.forEach(function (_, container) {
              return _this60.deregister(container);
            });

            this._scrolled.complete();
          }
          /**
           * Returns an observable that emits whenever any of the
           * scrollable ancestors of an element are scrolled.
           * @param elementOrElementRef Element whose ancestors to listen for.
           * @param auditTimeInMs Time to throttle the scroll events.
           */

        }, {
          key: "ancestorScrolled",
          value: function ancestorScrolled(elementOrElementRef, auditTimeInMs) {
            var ancestors = this.getAncestorScrollContainers(elementOrElementRef);
            return this.scrolled(auditTimeInMs).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function (target) {
              return !target || ancestors.indexOf(target) > -1;
            }));
          }
          /** Returns all registered Scrollables that contain the provided element. */

        }, {
          key: "getAncestorScrollContainers",
          value: function getAncestorScrollContainers(elementOrElementRef) {
            var _this61 = this;

            var scrollingContainers = [];
            this.scrollContainers.forEach(function (_subscription, scrollable) {
              if (_this61._scrollableContainsElement(scrollable, elementOrElementRef)) {
                scrollingContainers.push(scrollable);
              }
            });
            return scrollingContainers;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            return this._document.defaultView || window;
          }
          /** Returns true if the element is contained within the provided Scrollable. */

        }, {
          key: "_scrollableContainsElement",
          value: function _scrollableContainsElement(scrollable, elementOrElementRef) {
            var element = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(elementOrElementRef);
            var scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
            // are the scrollable's element.

            do {
              if (element == scrollableElement) {
                return true;
              }
            } while (element = element.parentElement);

            return false;
          }
          /** Sets up the global scroll listeners. */

        }, {
          key: "_addGlobalListener",
          value: function _addGlobalListener() {
            var _this62 = this;

            this._globalSubscription = this._ngZone.runOutsideAngular(function () {
              var window = _this62._getWindow();

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(window.document, 'scroll').subscribe(function () {
                return _this62._scrolled.next();
              });
            });
          }
          /** Cleans up the global scroll listener. */

        }, {
          key: "_removeGlobalListener",
          value: function _removeGlobalListener() {
            if (this._globalSubscription) {
              this._globalSubscription.unsubscribe();

              this._globalSubscription = null;
            }
          }
        }]);

        return _ScrollDispatcher;
      }();

      _ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
        return new (t || _ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT, 8));
      };

      _ScrollDispatcher.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function ScrollDispatcher_Factory() {
          return new _ScrollDispatcher(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT, 8));
        },
        token: _ScrollDispatcher,
        providedIn: "root"
      });

      _ScrollDispatcher.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ScrollDispatcher, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Sends an event when the directive's element is scrolled. Registers itself with the
       * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
       * can be listened to through the service.
       */


      var _CdkScrollable = /*#__PURE__*/function () {
        function _CdkScrollable(elementRef, scrollDispatcher, ngZone, dir) {
          var _this63 = this;

          _classCallCheck(this, _CdkScrollable);

          this.elementRef = elementRef;
          this.scrollDispatcher = scrollDispatcher;
          this.ngZone = ngZone;
          this.dir = dir;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(function (observer) {
            return _this63.ngZone.runOutsideAngular(function () {
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(_this63.elementRef.nativeElement, 'scroll').pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(_this63._destroyed)).subscribe(observer);
            });
          });
        }

        _createClass(_CdkScrollable, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.scrollDispatcher.register(this);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.scrollDispatcher.deregister(this);

            this._destroyed.next();

            this._destroyed.complete();
          }
          /** Returns observable that emits when a scroll event is fired on the host element. */

        }, {
          key: "elementScrolled",
          value: function elementScrolled() {
            return this._elementScrolled;
          }
          /** Gets the ElementRef for the viewport. */

        }, {
          key: "getElementRef",
          value: function getElementRef() {
            return this.elementRef;
          }
          /**
           * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
           * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param options specified the offsets to scroll to.
           */

        }, {
          key: "scrollTo",
          value: function scrollTo(options) {
            var el = this.elementRef.nativeElement;
            var isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

            if (options.left == null) {
              options.left = isRtl ? options.end : options.start;
            }

            if (options.right == null) {
              options.right = isRtl ? options.start : options.end;
            } // Rewrite the bottom offset as a top offset.


            if (options.bottom != null) {
              options.top = el.scrollHeight - el.clientHeight - options.bottom;
            } // Rewrite the right offset as a left offset.


            if (isRtl && (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() != 0
            /* NORMAL */
            ) {
              if (options.left != null) {
                options.right = el.scrollWidth - el.clientWidth - options.left;
              }

              if ((0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == 2
              /* INVERTED */
              ) {
                options.left = options.right;
              } else if ((0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == 1
              /* NEGATED */
              ) {
                options.left = options.right ? -options.right : options.right;
              }
            } else {
              if (options.right != null) {
                options.left = el.scrollWidth - el.clientWidth - options.right;
              }
            }

            this._applyScrollToOptions(options);
          }
        }, {
          key: "_applyScrollToOptions",
          value: function _applyScrollToOptions(options) {
            var el = this.elementRef.nativeElement;

            if ((0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.supportsScrollBehavior)()) {
              el.scrollTo(options);
            } else {
              if (options.top != null) {
                el.scrollTop = options.top;
              }

              if (options.left != null) {
                el.scrollLeft = options.left;
              }
            }
          }
          /**
           * Measures the scroll offset relative to the specified edge of the viewport. This method can be
           * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
           * about what scrollLeft means in RTL. The values returned by this method are normalized such that
           * left and right always refer to the left and right side of the scrolling container irrespective
           * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
           * in an RTL context.
           * @param from The edge to measure from.
           */

        }, {
          key: "measureScrollOffset",
          value: function measureScrollOffset(from) {
            var LEFT = 'left';
            var RIGHT = 'right';
            var el = this.elementRef.nativeElement;

            if (from == 'top') {
              return el.scrollTop;
            }

            if (from == 'bottom') {
              return el.scrollHeight - el.clientHeight - el.scrollTop;
            } // Rewrite start & end as left or right offsets.


            var isRtl = this.dir && this.dir.value == 'rtl';

            if (from == 'start') {
              from = isRtl ? RIGHT : LEFT;
            } else if (from == 'end') {
              from = isRtl ? LEFT : RIGHT;
            }

            if (isRtl && (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == 2
            /* INVERTED */
            ) {
              // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              } else {
                return el.scrollLeft;
              }
            } else if (isRtl && (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == 1
            /* NEGATED */
            ) {
              // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
              // 0 when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft + el.scrollWidth - el.clientWidth;
              } else {
                return -el.scrollLeft;
              }
            } else {
              // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
              // (scrollWidth - clientWidth) when scrolled all the way right.
              if (from == LEFT) {
                return el.scrollLeft;
              } else {
                return el.scrollWidth - el.clientWidth - el.scrollLeft;
              }
            }
          }
        }]);

        return _CdkScrollable;
      }();

      _CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
        return new (t || _CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8));
      };

      _CdkScrollable.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkScrollable,
        selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
      });

      _CdkScrollable.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _ScrollDispatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkScrollable, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdk-scrollable], [cdkScrollable]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _ScrollDispatcher
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Time in ms to throttle the resize events by default. */


      var _DEFAULT_RESIZE_TIME = 20;
      /**
       * Simple utility for getting the bounds of the browser viewport.
       * @docs-private
       */

      var _ViewportRuler = /*#__PURE__*/function () {
        function _ViewportRuler(_platform, ngZone, document) {
          var _this64 = this;

          _classCallCheck(this, _ViewportRuler);

          this._platform = _platform;
          /** Stream of viewport change events. */

          this._change = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Event listener that will be used to handle the viewport change events. */

          this._changeListener = function (event) {
            _this64._change.next(event);
          };

          this._document = document;
          ngZone.runOutsideAngular(function () {
            if (_platform.isBrowser) {
              var _window2 = _this64._getWindow(); // Note that bind the events ourselves, rather than going through something like RxJS's
              // `fromEvent` so that we can ensure that they're bound outside of the NgZone.


              _window2.addEventListener('resize', _this64._changeListener);

              _window2.addEventListener('orientationchange', _this64._changeListener);
            } // Clear the cached position so that the viewport is re-measured next time it is required.
            // We don't need to keep track of the subscription, because it is completed on destroy.


            _this64.change().subscribe(function () {
              return _this64._viewportSize = null;
            });
          });
        }

        _createClass(_ViewportRuler, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._platform.isBrowser) {
              var _window3 = this._getWindow();

              _window3.removeEventListener('resize', this._changeListener);

              _window3.removeEventListener('orientationchange', this._changeListener);
            }

            this._change.complete();
          }
          /** Returns the viewport's width and height. */

        }, {
          key: "getViewportSize",
          value: function getViewportSize() {
            if (!this._viewportSize) {
              this._updateViewportSize();
            }

            var output = {
              width: this._viewportSize.width,
              height: this._viewportSize.height
            }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

            if (!this._platform.isBrowser) {
              this._viewportSize = null;
            }

            return output;
          }
          /** Gets a ClientRect for the viewport's bounds. */

        }, {
          key: "getViewportRect",
          value: function getViewportRect() {
            // Use the document element's bounding rect rather than the window scroll properties
            // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
            // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
            // conceptual viewports. Under most circumstances these viewports are equivalent, but they
            // can disagree when the page is pinch-zoomed (on devices that support touch).
            // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
            // We use the documentElement instead of the body because, by default (without a css reset)
            // browsers typically give the document body an 8px margin, which is not included in
            // getBoundingClientRect().
            var scrollPosition = this.getViewportScrollPosition();

            var _this$getViewportSize = this.getViewportSize(),
                width = _this$getViewportSize.width,
                height = _this$getViewportSize.height;

            return {
              top: scrollPosition.top,
              left: scrollPosition.left,
              bottom: scrollPosition.top + height,
              right: scrollPosition.left + width,
              height: height,
              width: width
            };
          }
          /** Gets the (top, left) scroll position of the viewport. */

        }, {
          key: "getViewportScrollPosition",
          value: function getViewportScrollPosition() {
            // While we can get a reference to the fake document
            // during SSR, it doesn't have getBoundingClientRect.
            if (!this._platform.isBrowser) {
              return {
                top: 0,
                left: 0
              };
            } // The top-left-corner of the viewport is determined by the scroll position of the document
            // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
            // whether `document.body` or `document.documentElement` is the scrolled element, so reading
            // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
            // `document.documentElement` works consistently, where the `top` and `left` values will
            // equal negative the scroll position.


            var document = this._document;

            var window = this._getWindow();

            var documentElement = document.documentElement;
            var documentRect = documentElement.getBoundingClientRect();
            var top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
            var left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
            return {
              top: top,
              left: left
            };
          }
          /**
           * Returns a stream that emits whenever the size of the viewport changes.
           * This stream emits outside of the Angular zone.
           * @param throttleTime Time in milliseconds to throttle the stream.
           */

        }, {
          key: "change",
          value: function change() {
            var throttleTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _DEFAULT_RESIZE_TIME;
            return throttleTime > 0 ? this._change.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(throttleTime)) : this._change;
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            return this._document.defaultView || window;
          }
          /** Updates the cached viewport size. */

        }, {
          key: "_updateViewportSize",
          value: function _updateViewportSize() {
            var window = this._getWindow();

            this._viewportSize = this._platform.isBrowser ? {
              width: window.innerWidth,
              height: window.innerHeight
            } : {
              width: 0,
              height: 0
            };
          }
        }]);

        return _ViewportRuler;
      }();

      _ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
        return new (t || _ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT, 8));
      };

      _ViewportRuler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        factory: function ViewportRuler_Factory() {
          return new _ViewportRuler(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT, 8));
        },
        token: _ViewportRuler,
        providedIn: "root"
      });

      _ViewportRuler.ctorParameters = function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ViewportRuler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Checks if the given ranges are equal. */


      function rangesEqual(r1, r2) {
        return r1.start == r2.start && r1.end == r2.end;
      }
      /**
       * Scheduler to be used for scroll events. Needs to fall back to
       * something that doesn't rely on requestAnimationFrame on environments
       * that don't support it (e.g. server-side rendering).
       */


      var SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_13__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_14__.asapScheduler;
      /** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */

      var _CdkVirtualScrollViewport = /*#__PURE__*/function (_CdkScrollable2) {
        _inherits(_CdkVirtualScrollViewport, _CdkScrollable2);

        var _super19 = _createSuper(_CdkVirtualScrollViewport);

        function _CdkVirtualScrollViewport(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, viewportRuler) {
          var _this65;

          _classCallCheck(this, _CdkVirtualScrollViewport);

          _this65 = _super19.call(this, elementRef, scrollDispatcher, ngZone, dir);
          _this65.elementRef = elementRef;
          _this65._changeDetectorRef = _changeDetectorRef;
          _this65._scrollStrategy = _scrollStrategy;
          /** Emits when the viewport is detached from a CdkVirtualForOf. */

          _this65._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Emits when the rendered range changes. */

          _this65._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          _this65._orientation = 'vertical';
          _this65._appendOnly = false; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
          // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
          // depending on how the strategy calculates the scrolled index, it may come at a cost to
          // performance.

          /** Emits when the index of the first element visible in the viewport changes. */

          _this65.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(function (observer) {
            return _this65._scrollStrategy.scrolledIndexChange.subscribe(function (index) {
              return Promise.resolve().then(function () {
                return _this65.ngZone.run(function () {
                  return observer.next(index);
                });
              });
            });
          });
          /** A stream that emits whenever the rendered range changes. */

          _this65.renderedRangeStream = _this65._renderedRangeSubject;
          /**
           * The total size of all content (in pixels), including content that is not currently rendered.
           */

          _this65._totalContentSize = 0;
          /** A string representing the `style.width` property value to be used for the spacer element. */

          _this65._totalContentWidth = '';
          /** A string representing the `style.height` property value to be used for the spacer element. */

          _this65._totalContentHeight = '';
          /** The currently rendered range of indices. */

          _this65._renderedRange = {
            start: 0,
            end: 0
          };
          /** The length of the data bound to this viewport (in number of items). */

          _this65._dataLength = 0;
          /** The size of the viewport (in pixels). */

          _this65._viewportSize = 0;
          /** The last rendered content offset that was set. */

          _this65._renderedContentOffset = 0;
          /**
           * Whether the last rendered content offset was to the end of the content (and therefore needs to
           * be rewritten as an offset to the start of the content).
           */

          _this65._renderedContentOffsetNeedsRewrite = false;
          /** Whether there is a pending change detection cycle. */

          _this65._isChangeDetectionPending = false;
          /** A list of functions to run after the next change detection cycle. */

          _this65._runAfterChangeDetection = [];
          /** Subscription to changes in the viewport size. */

          _this65._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription.EMPTY;

          if (!_scrollStrategy && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
          }

          _this65._viewportChanges = viewportRuler.change().subscribe(function () {
            _this65.checkViewportSize();
          });
          return _this65;
        }
        /** The direction the viewport scrolls. */


        _createClass(_CdkVirtualScrollViewport, [{
          key: "orientation",
          get: function get() {
            return this._orientation;
          },
          set: function set(orientation) {
            if (this._orientation !== orientation) {
              this._orientation = orientation;

              this._calculateSpacerSize();
            }
          }
          /**
           * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
           * will be removed.
           */

        }, {
          key: "appendOnly",
          get: function get() {
            return this._appendOnly;
          },
          set: function set(value) {
            this._appendOnly = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this66 = this;

            _get(_getPrototypeOf(_CdkVirtualScrollViewport.prototype), "ngOnInit", this).call(this); // It's still too early to measure the viewport at this point. Deferring with a promise allows
            // the Viewport to be rendered with the correct size before we measure. We run this outside the
            // zone to avoid causing more change detection cycles. We handle the change detection loop
            // ourselves instead.


            this.ngZone.runOutsideAngular(function () {
              return Promise.resolve().then(function () {
                _this66._measureViewportSize();

                _this66._scrollStrategy.attach(_this66);

                _this66.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(null), // Collect multiple events into one until the next animation frame. This way if
                // there are multiple scroll events in the same frame we only need to recheck
                // our layout once.
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(0, SCROLL_SCHEDULER)).subscribe(function () {
                  return _this66._scrollStrategy.onContentScrolled();
                });

                _this66._markChangeDetectionNeeded();
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.detach();

            this._scrollStrategy.detach(); // Complete all subjects


            this._renderedRangeSubject.complete();

            this._detachedSubject.complete();

            this._viewportChanges.unsubscribe();

            _get(_getPrototypeOf(_CdkVirtualScrollViewport.prototype), "ngOnDestroy", this).call(this);
          }
          /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */

        }, {
          key: "attach",
          value: function attach(forOf) {
            var _this67 = this;

            if (this._forOf && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error('CdkVirtualScrollViewport is already attached.');
            } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
            // changes. Run outside the zone to avoid triggering change detection, since we're managing the
            // change detection loop ourselves.


            this.ngZone.runOutsideAngular(function () {
              _this67._forOf = forOf;

              _this67._forOf.dataStream.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(_this67._detachedSubject)).subscribe(function (data) {
                var newLength = data.length;

                if (newLength !== _this67._dataLength) {
                  _this67._dataLength = newLength;

                  _this67._scrollStrategy.onDataLengthChanged();
                }

                _this67._doChangeDetection();
              });
            });
          }
          /** Detaches the current `CdkVirtualForOf`. */

        }, {
          key: "detach",
          value: function detach() {
            this._forOf = null;

            this._detachedSubject.next();
          }
          /** Gets the length of the data bound to this viewport (in number of items). */

        }, {
          key: "getDataLength",
          value: function getDataLength() {
            return this._dataLength;
          }
          /** Gets the size of the viewport (in pixels). */

        }, {
          key: "getViewportSize",
          value: function getViewportSize() {
            return this._viewportSize;
          } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
          // cycle happens. I'm being careful to only call it after the render cycle is complete and before
          // setting it to something else, but its error prone and should probably be split into
          // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

          /** Get the current rendered range of items. */

        }, {
          key: "getRenderedRange",
          value: function getRenderedRange() {
            return this._renderedRange;
          }
          /**
           * Sets the total size of all content (in pixels), including content that is not currently
           * rendered.
           */

        }, {
          key: "setTotalContentSize",
          value: function setTotalContentSize(size) {
            if (this._totalContentSize !== size) {
              this._totalContentSize = size;

              this._calculateSpacerSize();

              this._markChangeDetectionNeeded();
            }
          }
          /** Sets the currently rendered range of indices. */

        }, {
          key: "setRenderedRange",
          value: function setRenderedRange(range) {
            var _this68 = this;

            if (!rangesEqual(this._renderedRange, range)) {
              if (this.appendOnly) {
                range = {
                  start: 0,
                  end: Math.max(this._renderedRange.end, range.end)
                };
              }

              this._renderedRangeSubject.next(this._renderedRange = range);

              this._markChangeDetectionNeeded(function () {
                return _this68._scrollStrategy.onContentRendered();
              });
            }
          }
          /**
           * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
           */

        }, {
          key: "getOffsetToRenderedContentStart",
          value: function getOffsetToRenderedContentStart() {
            return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
          }
          /**
           * Sets the offset from the start of the viewport to either the start or end of the rendered data
           * (in pixels).
           */

        }, {
          key: "setRenderedContentOffset",
          value: function setRenderedContentOffset(offset) {
            var _this69 = this;

            var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'to-start';
            // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
            // in the negative direction.
            var isRtl = this.dir && this.dir.value == 'rtl';
            var isHorizontal = this.orientation == 'horizontal';
            var axis = isHorizontal ? 'X' : 'Y';
            var axisDirection = isHorizontal && isRtl ? -1 : 1;
            var transform = "translate".concat(axis, "(").concat(Number(axisDirection * offset), "px)");
            this._renderedContentOffset = offset;

            if (to === 'to-end') {
              transform += " translate".concat(axis, "(-100%)"); // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
              // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
              // expand upward).

              this._renderedContentOffsetNeedsRewrite = true;
            }

            if (this._renderedContentTransform != transform) {
              // We know this value is safe because we parse `offset` with `Number()` before passing it
              // into the string.
              this._renderedContentTransform = transform;

              this._markChangeDetectionNeeded(function () {
                if (_this69._renderedContentOffsetNeedsRewrite) {
                  _this69._renderedContentOffset -= _this69.measureRenderedContentSize();
                  _this69._renderedContentOffsetNeedsRewrite = false;

                  _this69.setRenderedContentOffset(_this69._renderedContentOffset);
                } else {
                  _this69._scrollStrategy.onRenderedOffsetChanged();
                }
              });
            }
          }
          /**
           * Scrolls to the given offset from the start of the viewport. Please note that this is not always
           * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
           * direction, this would be the equivalent of setting a fictional `scrollRight` property.
           * @param offset The offset to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           */

        }, {
          key: "scrollToOffset",
          value: function scrollToOffset(offset) {
            var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
            var options = {
              behavior: behavior
            };

            if (this.orientation === 'horizontal') {
              options.start = offset;
            } else {
              options.top = offset;
            }

            this.scrollTo(options);
          }
          /**
           * Scrolls to the offset for the given index.
           * @param index The index of the element to scroll to.
           * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index) {
            var behavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

            this._scrollStrategy.scrollToIndex(index, behavior);
          }
          /**
           * Gets the current scroll offset from the start of the viewport (in pixels).
           * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
           *     in horizontal mode.
           */

        }, {
          key: "measureScrollOffset",
          value: function measureScrollOffset(from) {
            return from ? _get(_getPrototypeOf(_CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, from) : _get(_getPrototypeOf(_CdkVirtualScrollViewport.prototype), "measureScrollOffset", this).call(this, this.orientation === 'horizontal' ? 'start' : 'top');
          }
          /** Measure the combined size of all of the rendered items. */

        }, {
          key: "measureRenderedContentSize",
          value: function measureRenderedContentSize() {
            var contentEl = this._contentWrapper.nativeElement;
            return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
          }
          /**
           * Measure the total combined size of the given range. Throws if the range includes items that are
           * not rendered.
           */

        }, {
          key: "measureRangeSize",
          value: function measureRangeSize(range) {
            if (!this._forOf) {
              return 0;
            }

            return this._forOf.measureRangeSize(range, this.orientation);
          }
          /** Update the viewport dimensions and re-render. */

        }, {
          key: "checkViewportSize",
          value: function checkViewportSize() {
            // TODO: Cleanup later when add logic for handling content resize
            this._measureViewportSize();

            this._scrollStrategy.onDataLengthChanged();
          }
          /** Measure the viewport size. */

        }, {
          key: "_measureViewportSize",
          value: function _measureViewportSize() {
            var viewportEl = this.elementRef.nativeElement;
            this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
          }
          /** Queue up change detection to run. */

        }, {
          key: "_markChangeDetectionNeeded",
          value: function _markChangeDetectionNeeded(runAfter) {
            var _this70 = this;

            if (runAfter) {
              this._runAfterChangeDetection.push(runAfter);
            } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
            // properties sequentially we only have to run `_doChangeDetection` once at the end.


            if (!this._isChangeDetectionPending) {
              this._isChangeDetectionPending = true;
              this.ngZone.runOutsideAngular(function () {
                return Promise.resolve().then(function () {
                  _this70._doChangeDetection();
                });
              });
            }
          }
          /** Run change detection. */

        }, {
          key: "_doChangeDetection",
          value: function _doChangeDetection() {
            var _this71 = this;

            this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
            // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
            // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
            // the `Number` function first to coerce it to a numeric value.

            this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
            // from the root, since the repeated items are content projected in. Calling `detectChanges`
            // instead does not properly check the projected content.

            this.ngZone.run(function () {
              return _this71._changeDetectorRef.markForCheck();
            });
            var runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];

            var _iterator5 = _createForOfIteratorHelper(runAfterChangeDetection),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var fn = _step5.value;
                fn();
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
          /** Calculates the `style.width` and `style.height` for the spacer element. */

        }, {
          key: "_calculateSpacerSize",
          value: function _calculateSpacerSize() {
            this._totalContentHeight = this.orientation === 'horizontal' ? '' : "".concat(this._totalContentSize, "px");
            this._totalContentWidth = this.orientation === 'horizontal' ? "".concat(this._totalContentSize, "px") : '';
          }
        }]);

        return _CdkVirtualScrollViewport;
      }(_CdkScrollable);

      _CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
        return new (t || _CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ViewportRuler));
      };

      _CdkVirtualScrollViewport.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CdkVirtualScrollViewport,
        selectors: [["cdk-virtual-scroll-viewport"]],
        viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
          }
        },
        hostAttrs: [1, "cdk-virtual-scroll-viewport"],
        hostVars: 4,
        hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
          }
        },
        inputs: {
          orientation: "orientation",
          appendOnly: "appendOnly"
        },
        outputs: {
          scrolledIndexChange: "scrolledIndexChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _CdkScrollable,
          useExisting: _CdkVirtualScrollViewport
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c1,
        decls: 10,
        vars: 4,
        consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
        template: function CdkVirtualScrollViewport_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
          }
        },
        styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      _CdkVirtualScrollViewport.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_VIRTUAL_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }]
        }, {
          type: _ScrollDispatcher
        }, {
          type: _ViewportRuler
        }];
      };

      _CdkVirtualScrollViewport.propDecorators = {
        orientation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        appendOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        scrolledIndexChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        _contentWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['contentWrapper', {
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkVirtualScrollViewport, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'cdk-virtual-scroll-viewport',
            template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
            host: {
              'class': 'cdk-virtual-scroll-viewport',
              '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
              '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            providers: [{
              provide: _CdkScrollable,
              useExisting: _CdkVirtualScrollViewport
            }],
            styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_VIRTUAL_SCROLL_STRATEGY]
            }]
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }]
          }, {
            type: _ScrollDispatcher
          }, {
            type: _ViewportRuler
          }];
        }, {
          scrolledIndexChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          orientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          appendOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          _contentWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['contentWrapper', {
              "static": true
            }]
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Helper to extract the offset of a DOM Node in a certain direction. */


      function getOffset(orientation, direction, node) {
        var el = node;

        if (!el.getBoundingClientRect) {
          return 0;
        }

        var rect = el.getBoundingClientRect();

        if (orientation === 'horizontal') {
          return direction === 'start' ? rect.left : rect.right;
        }

        return direction === 'start' ? rect.top : rect.bottom;
      }
      /**
       * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
       * container.
       */


      var _CdkVirtualForOf = /*#__PURE__*/function () {
        function _CdkVirtualForOf(
        /** The view container to add items to. */
        _viewContainerRef,
        /** The template to use when stamping out new items. */
        _template,
        /** The set of available differs. */
        _differs,
        /** The strategy used to render items in the virtual scroll viewport. */
        _viewRepeater,
        /** The virtual scrolling viewport that these items are being rendered in. */
        _viewport, ngZone) {
          var _this72 = this;

          _classCallCheck(this, _CdkVirtualForOf);

          this._viewContainerRef = _viewContainerRef;
          this._template = _template;
          this._differs = _differs;
          this._viewRepeater = _viewRepeater;
          this._viewport = _viewport;
          /** Emits when the rendered view of the data changes. */

          this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Subject that emits when a new DataSource instance is given. */

          this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          /** Emits whenever the data in the current DataSource changes. */

          this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(null), // Bundle up the previous and current data sources so we can work with both.
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.pairwise)(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
          // new one, passing back a stream of data changes which we run through `switchMap` to give
          // us a data stream that emits the latest data from whatever the current `DataSource` is.
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                prev = _ref4[0],
                cur = _ref4[1];

            return _this72._changeDataSource(prev, cur);
          }), // Replay the last emitted data when someone subscribes.
          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.shareReplay)(1));
          /** The differ used to calculate changes to the data. */

          this._differ = null;
          /** Whether the rendered data should be updated during the next ngDoCheck cycle. */

          this._needsUpdate = false;
          this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
          this.dataStream.subscribe(function (data) {
            _this72._data = data;

            _this72._onRenderedDataChange();
          });

          this._viewport.renderedRangeStream.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(function (range) {
            _this72._renderedRange = range;
            ngZone.run(function () {
              return _this72.viewChange.next(_this72._renderedRange);
            });

            _this72._onRenderedDataChange();
          });

          this._viewport.attach(this);
        }
        /** The DataSource to display. */


        _createClass(_CdkVirtualForOf, [{
          key: "cdkVirtualForOf",
          get: function get() {
            return this._cdkVirtualForOf;
          },
          set: function set(value) {
            this._cdkVirtualForOf = value;

            if ((0, _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__.isDataSource)(value)) {
              this._dataSourceChanges.next(value);
            } else {
              // If value is an an NgIterable, convert it to an array.
              this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__.ArrayDataSource((0, rxjs__WEBPACK_IMPORTED_MODULE_21__.isObservable)(value) ? value : Array.from(value || [])));
            }
          }
          /**
           * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
           * the item and produces a value to be used as the item's identity when tracking changes.
           */

        }, {
          key: "cdkVirtualForTrackBy",
          get: function get() {
            return this._cdkVirtualForTrackBy;
          },
          set: function set(fn) {
            var _this73 = this;

            this._needsUpdate = true;
            this._cdkVirtualForTrackBy = fn ? function (index, item) {
              return fn(index + (_this73._renderedRange ? _this73._renderedRange.start : 0), item);
            } : undefined;
          }
          /** The template used to stamp out new elements. */

        }, {
          key: "cdkVirtualForTemplate",
          set: function set(value) {
            if (value) {
              this._needsUpdate = true;
              this._template = value;
            }
          }
          /**
           * The size of the cache used to store templates that are not being used for re-use later.
           * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
           */

        }, {
          key: "cdkVirtualForTemplateCacheSize",
          get: function get() {
            return this._viewRepeater.viewCacheSize;
          },
          set: function set(size) {
            this._viewRepeater.viewCacheSize = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(size);
          }
          /**
           * Measures the combined size (width for horizontal orientation, height for vertical) of all items
           * in the specified range. Throws an error if the range includes items that are not currently
           * rendered.
           */

        }, {
          key: "measureRangeSize",
          value: function measureRangeSize(range, orientation) {
            if (range.start >= range.end) {
              return 0;
            }

            if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw Error("Error: attempted to measure an item that isn't rendered.");
            } // The index into the list of rendered views for the first item in the range.


            var renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

            var rangeLen = range.end - range.start; // Loop over all the views, find the first and land node and compute the size by subtracting
            // the top of the first node from the bottom of the last one.

            var firstNode;
            var lastNode; // Find the first node by starting from the beginning and going forwards.

            for (var i = 0; i < rangeLen; i++) {
              var view = this._viewContainerRef.get(i + renderedStartIndex);

              if (view && view.rootNodes.length) {
                firstNode = lastNode = view.rootNodes[0];
                break;
              }
            } // Find the last node by starting from the end and going backwards.


            for (var _i3 = rangeLen - 1; _i3 > -1; _i3--) {
              var _view = this._viewContainerRef.get(_i3 + renderedStartIndex);

              if (_view && _view.rootNodes.length) {
                lastNode = _view.rootNodes[_view.rootNodes.length - 1];
                break;
              }
            }

            return firstNode && lastNode ? getOffset(orientation, 'end', lastNode) - getOffset(orientation, 'start', firstNode) : 0;
          }
        }, {
          key: "ngDoCheck",
          value: function ngDoCheck() {
            if (this._differ && this._needsUpdate) {
              // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
              // this list being rendered (can use simpler algorithm) vs needs update due to data actually
              // changing (need to do this diff).
              var changes = this._differ.diff(this._renderedItems);

              if (!changes) {
                this._updateContext();
              } else {
                this._applyChanges(changes);
              }

              this._needsUpdate = false;
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._viewport.detach();

            this._dataSourceChanges.next(undefined);

            this._dataSourceChanges.complete();

            this.viewChange.complete();

            this._destroyed.next();

            this._destroyed.complete();

            this._viewRepeater.detach();
          }
          /** React to scroll state changes in the viewport. */

        }, {
          key: "_onRenderedDataChange",
          value: function _onRenderedDataChange() {
            var _this74 = this;

            if (!this._renderedRange) {
              return;
            }

            this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

            if (!this._differ) {
              // Use a wrapper function for the `trackBy` so any new values are
              // picked up automatically without having to recreate the differ.
              this._differ = this._differs.find(this._renderedItems).create(function (index, item) {
                return _this74.cdkVirtualForTrackBy ? _this74.cdkVirtualForTrackBy(index, item) : item;
              });
            }

            this._needsUpdate = true;
          }
          /** Swap out one `DataSource` for another. */

        }, {
          key: "_changeDataSource",
          value: function _changeDataSource(oldDs, newDs) {
            if (oldDs) {
              oldDs.disconnect(this);
            }

            this._needsUpdate = true;
            return newDs ? newDs.connect(this) : (0, rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
          }
          /** Update the `CdkVirtualForOfContext` for all views. */

        }, {
          key: "_updateContext",
          value: function _updateContext() {
            var count = this._data.length;
            var i = this._viewContainerRef.length;

            while (i--) {
              var view = this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);

              view.detectChanges();
            }
          }
          /** Apply changes to the DOM. */

        }, {
          key: "_applyChanges",
          value: function _applyChanges(changes) {
            var _this75 = this;

            this._viewRepeater.applyChanges(changes, this._viewContainerRef, function (record, _adjustedPreviousIndex, currentIndex) {
              return _this75._getEmbeddedViewArgs(record, currentIndex);
            }, function (record) {
              return record.item;
            }); // Update $implicit for any items that had an identity change.


            changes.forEachIdentityChange(function (record) {
              var view = _this75._viewContainerRef.get(record.currentIndex);

              view.context.$implicit = record.item;
            }); // Update the context variables on all items.

            var count = this._data.length;
            var i = this._viewContainerRef.length;

            while (i--) {
              var view = this._viewContainerRef.get(i);

              view.context.index = this._renderedRange.start + i;
              view.context.count = count;

              this._updateComputedContextProperties(view.context);
            }
          }
          /** Update the computed properties on the `CdkVirtualForOfContext`. */

        }, {
          key: "_updateComputedContextProperties",
          value: function _updateComputedContextProperties(context) {
            context.first = context.index === 0;
            context.last = context.index === context.count - 1;
            context.even = context.index % 2 === 0;
            context.odd = !context.even;
          }
        }, {
          key: "_getEmbeddedViewArgs",
          value: function _getEmbeddedViewArgs(record, index) {
            // Note that it's important that we insert the item directly at the proper index,
            // rather than inserting it and the moving it in place, because if there's a directive
            // on the same node that injects the `ViewContainerRef`, Angular will insert another
            // comment node which can throw off the move when it's being repeated for all items.
            return {
              templateRef: this._template,
              context: {
                $implicit: record.item,
                // It's guaranteed that the iterable is not "undefined" or "null" because we only
                // generate views for elements if the "cdkVirtualForOf" iterable has elements.
                cdkVirtualForOf: this._cdkVirtualForOf,
                index: -1,
                count: -1,
                first: false,
                last: false,
                odd: false,
                even: false
              },
              index: index
            };
          }
        }]);

        return _CdkVirtualForOf;
      }();

      _CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
        return new (t || _CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._VIEW_REPEATER_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };

      _CdkVirtualForOf.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _CdkVirtualForOf,
        selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
        inputs: {
          cdkVirtualForOf: "cdkVirtualForOf",
          cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
          cdkVirtualForTemplate: "cdkVirtualForTemplate",
          cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._VIEW_REPEATER_STRATEGY,
          useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._RecycleViewRepeaterStrategy
        }])]
      });

      _CdkVirtualForOf.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
        }, {
          type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._RecycleViewRepeaterStrategy,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._VIEW_REPEATER_STRATEGY]
          }]
        }, {
          type: _CdkVirtualScrollViewport,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
        }];
      };

      _CdkVirtualForOf.propDecorators = {
        cdkVirtualForOf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        cdkVirtualForTrackBy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        cdkVirtualForTemplate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        cdkVirtualForTemplateCacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkVirtualForOf, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[cdkVirtualFor][cdkVirtualForOf]',
            providers: [{
              provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._VIEW_REPEATER_STRATEGY,
              useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._RecycleViewRepeaterStrategy
            }]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
          }, {
            type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._RecycleViewRepeaterStrategy,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._VIEW_REPEATER_STRATEGY]
            }]
          }, {
            type: _CdkVirtualScrollViewport,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
          }];
        }, {
          cdkVirtualForOf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          cdkVirtualForTrackBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          cdkVirtualForTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          cdkVirtualForTemplateCacheSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _CdkScrollableModule = function _CdkScrollableModule() {
        _classCallCheck(this, _CdkScrollableModule);
      };

      _CdkScrollableModule.ɵfac = function CdkScrollableModule_Factory(t) {
        return new (t || _CdkScrollableModule)();
      };

      _CdkScrollableModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _CdkScrollableModule
      });
      _CdkScrollableModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_CdkScrollableModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            exports: [_CdkScrollable],
            declarations: [_CdkScrollable]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_CdkScrollableModule, {
          declarations: [_CdkScrollable],
          exports: [_CdkScrollable]
        });
      })();
      /**
       * @docs-primary-export
       */


      var _ScrollingModule = function _ScrollingModule() {
        _classCallCheck(this, _ScrollingModule);
      };

      _ScrollingModule.ɵfac = function ScrollingModule_Factory(t) {
        return new (t || _ScrollingModule)();
      };

      _ScrollingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _ScrollingModule
      });
      _ScrollingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.PlatformModule, _CdkScrollableModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, _CdkScrollableModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ScrollingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.PlatformModule, _CdkScrollableModule],
            exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, _CdkScrollableModule, _CdkFixedSizeVirtualScroll, _CdkVirtualForOf, _CdkVirtualScrollViewport],
            declarations: [_CdkFixedSizeVirtualScroll, _CdkVirtualForOf, _CdkVirtualScrollViewport]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_ScrollingModule, {
          declarations: function declarations() {
            return [_CdkFixedSizeVirtualScroll, _CdkVirtualForOf, _CdkVirtualScrollViewport];
          },
          imports: function imports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.PlatformModule, _CdkScrollableModule];
          },
          exports: function exports() {
            return [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, _CdkScrollableModule, _CdkFixedSizeVirtualScroll, _CdkVirtualForOf, _CdkVirtualScrollViewport];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    6101: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ContextMenuAttachDirective": function ContextMenuAttachDirective() {
          return (
            /* binding */
            _ContextMenuAttachDirective
          );
        },

        /* harmony export */
        "ContextMenuComponent": function ContextMenuComponent() {
          return (
            /* binding */
            _ContextMenuComponent
          );
        },

        /* harmony export */
        "ContextMenuItemDirective": function ContextMenuItemDirective() {
          return (
            /* binding */
            _ContextMenuItemDirective
          );
        },

        /* harmony export */
        "ContextMenuModule": function ContextMenuModule() {
          return (
            /* binding */
            _ContextMenuModule
          );
        },

        /* harmony export */
        "ContextMenuService": function ContextMenuService() {
          return (
            /* binding */
            _ContextMenuService
          );
        },

        /* harmony export */
        "ɵa": function ɵa() {
          return (
            /* binding */
            CONTEXT_MENU_OPTIONS
          );
        },

        /* harmony export */
        "ɵb": function ɵb() {
          return (
            /* binding */
            ContextMenuContentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/overlay */
      45129);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      77127);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      80993);
      /* harmony import */


      var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/portal */
      40912);
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      51606);

      var _c0 = ["menu"];
      var _c1 = ["li"];

      function ContextMenuContentComponent_li_6_a_3_ng_template_2_Template(rf, ctx) {}

      var _c2 = function _c2(a0) {
        return {
          $implicit: a0
        };
      };

      function ContextMenuContentComponent_li_6_a_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuContentComponent_li_6_a_3_Template_a_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.onMenuItemSelect(menuItem_r2, $event);
          })("mouseenter", function ContextMenuContentComponent_li_6_a_3_Template_a_mouseenter_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onOpenSubMenu(menuItem_r2, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContextMenuContentComponent_li_6_a_3_ng_template_2_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropdown-item", ctx_r5.useBootstrap4)("active", menuItem_r2.isActive && ctx_r5.isMenuItemEnabled(menuItem_r2))("disabled", ctx_r5.useBootstrap4 && !ctx_r5.isMenuItemEnabled(menuItem_r2))("hasSubMenu", !!menuItem_r2.subMenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", menuItem_r2.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx_r5.item));
        }
      }

      function ContextMenuContentComponent_li_6_span_5_ng_template_2_Template(rf, ctx) {}

      function ContextMenuContentComponent_li_6_span_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContextMenuContentComponent_li_6_span_5_Template_span_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.stopEvent($event);
          })("contextmenu", function ContextMenuContentComponent_li_6_span_5_Template_span_contextmenu_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r17.stopEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n            ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContextMenuContentComponent_li_6_span_5_ng_template_2_Template, 0, 0, "ng-template", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("dropdown-item", ctx_r6.useBootstrap4)("disabled", ctx_r6.useBootstrap4 && !ctx_r6.isMenuItemEnabled(menuItem_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", menuItem_r2.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r6.item));
        }
      }

      function ContextMenuContentComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContextMenuContentComponent_li_6_a_3_Template, 4, 12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\n          ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ContextMenuContentComponent_li_6_span_5_Template, 4, 8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx_r1.isMenuItemEnabled(menuItem_r2))("divider", menuItem_r2.divider)("dropdown-divider", ctx_r1.useBootstrap4 && menuItem_r2.divider)("active", menuItem_r2.isActive && ctx_r1.isMenuItemEnabled(menuItem_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", menuItem_r2.divider ? "separator" : undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menuItem_r2.divider && !menuItem_r2.passive);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menuItem_r2.divider && menuItem_r2.passive);
        }
      }

      var _ContextMenuItemDirective = /*#__PURE__*/function () {
        function _ContextMenuItemDirective(template, elementRef) {
          _classCallCheck(this, _ContextMenuItemDirective);

          this.template = template;
          this.elementRef = elementRef;
          this.divider = false;
          this.enabled = true;
          this.passive = false;
          this.visible = true;
          this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.isActive = false;
        }

        _createClass(_ContextMenuItemDirective, [{
          key: "disabled",
          get: function get() {
            return this.passive || this.divider || !this.evaluateIfFunction(this.enabled, this.currentItem);
          }
        }, {
          key: "evaluateIfFunction",
          value: function evaluateIfFunction(value, item) {
            if (value instanceof Function) {
              return value(item);
            }

            return value;
          }
        }, {
          key: "setActiveStyles",
          value: function setActiveStyles() {
            this.isActive = true;
          }
        }, {
          key: "setInactiveStyles",
          value: function setInactiveStyles() {
            this.isActive = false;
          }
        }, {
          key: "triggerExecute",
          value: function triggerExecute(item, $event) {
            if (!this.evaluateIfFunction(this.enabled, item)) {
              return;
            }

            this.execute.emit({
              event: $event,
              item: item
            });
          }
        }]);

        return _ContextMenuItemDirective;
      }();

      _ContextMenuItemDirective.ɵfac = function ContextMenuItemDirective_Factory(t) {
        return new (t || _ContextMenuItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _ContextMenuItemDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ContextMenuItemDirective,
        selectors: [["", "contextMenuItem", ""]],
        inputs: {
          divider: "divider",
          enabled: "enabled",
          passive: "passive",
          visible: "visible",
          subMenu: "subMenu"
        },
        outputs: {
          execute: "execute"
        }
      });
      /** @nocollapse */

      _ContextMenuItemDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      _ContextMenuItemDirective.propDecorators = {
        subMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        divider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        passive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        execute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ContextMenuItemDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            /* tslint:disable:directive-selector-type */
            selector: '[contextMenuItem]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, {
          divider: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          enabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          passive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          execute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          subMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var CONTEXT_MENU_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CONTEXT_MENU_OPTIONS');
      var ARROW_LEFT_KEYCODE = 37;

      var ContextMenuContentComponent = /*#__PURE__*/function () {
        function ContextMenuContentComponent(changeDetector, elementRef, options) {
          _classCallCheck(this, ContextMenuContentComponent);

          this.changeDetector = changeDetector;
          this.elementRef = elementRef;
          this.options = options;
          this.menuItems = [];
          this.isLeaf = false;
          this.execute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.openSubMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.closeLeafMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.closeAllMenus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.autoFocus = false;
          this.useBootstrap4 = false;
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();

          if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
          }
        }

        _createClass(ContextMenuContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this76 = this;

            this.menuItems.forEach(function (menuItem) {
              menuItem.currentItem = _this76.item;

              _this76.subscription.add(menuItem.execute.subscribe(function (event) {
                return _this76.execute.emit(Object.assign(Object.assign({}, event), {
                  menuItem: menuItem
                }));
              }));
            });
            var queryList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
            queryList.reset(this.menuItems);
            this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.ActiveDescendantKeyManager(queryList).withWrap();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this77 = this;

            if (this.autoFocus) {
              setTimeout(function () {
                return _this77.focus();
              });
            }

            this.overlay.updatePosition();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "focus",
          value: function focus() {
            if (this.autoFocus) {
              this.menuElement.nativeElement.focus();
            }
          }
        }, {
          key: "stopEvent",
          value: function stopEvent($event) {
            $event.stopPropagation();
          }
        }, {
          key: "isMenuItemEnabled",
          value: function isMenuItemEnabled(menuItem) {
            return this.evaluateIfFunction(menuItem && menuItem.enabled);
          }
        }, {
          key: "isMenuItemVisible",
          value: function isMenuItemVisible(menuItem) {
            return this.evaluateIfFunction(menuItem && menuItem.visible);
          }
        }, {
          key: "evaluateIfFunction",
          value: function evaluateIfFunction(value) {
            if (value instanceof Function) {
              return value(this.item);
            }

            return value;
          }
        }, {
          key: "isDisabled",
          value: function isDisabled(link) {
            return link.enabled && !link.enabled(this.item);
          }
        }, {
          key: "onKeyEvent",
          value: function onKeyEvent(event) {
            if (!this.isLeaf) {
              return;
            }

            this._keyManager.onKeydown(event);
          }
        }, {
          key: "keyboardOpenSubMenu",
          value: function keyboardOpenSubMenu(event) {
            if (!this.isLeaf) {
              return;
            }

            this.cancelEvent(event);
            var menuItem = this.menuItems[this._keyManager.activeItemIndex];

            if (menuItem) {
              this.onOpenSubMenu(menuItem);
            }
          }
        }, {
          key: "keyboardMenuItemSelect",
          value: function keyboardMenuItemSelect(event) {
            if (!this.isLeaf) {
              return;
            }

            this.cancelEvent(event);
            var menuItem = this.menuItems[this._keyManager.activeItemIndex];

            if (menuItem) {
              this.onMenuItemSelect(menuItem, event);
            }
          }
        }, {
          key: "onCloseLeafMenu",
          value: function onCloseLeafMenu(event) {
            if (!this.isLeaf) {
              return;
            }

            this.cancelEvent(event);
            this.closeLeafMenu.emit({
              exceptRootMenu: event.keyCode === ARROW_LEFT_KEYCODE,
              event: event
            });
          }
        }, {
          key: "closeMenu",
          value: function closeMenu(event) {
            if (event.type === 'click' && event.button === 2) {
              return;
            }

            this.closeAllMenus.emit({
              event: event
            });
          }
        }, {
          key: "onOpenSubMenu",
          value: function onOpenSubMenu(menuItem, event) {
            var anchorElementRef = this.menuItemElements.toArray()[this._keyManager.activeItemIndex];

            var anchorElement = anchorElementRef && anchorElementRef.nativeElement;
            this.openSubMenu.emit({
              anchorElement: anchorElement,
              contextMenu: menuItem.subMenu,
              event: event,
              item: this.item,
              parentContextMenu: this
            });
          }
        }, {
          key: "onMenuItemSelect",
          value: function onMenuItemSelect(menuItem, event) {
            event.preventDefault();
            event.stopPropagation();
            this.onOpenSubMenu(menuItem, event);

            if (!menuItem.subMenu) {
              menuItem.triggerExecute(this.item, event);
            }
          }
        }, {
          key: "cancelEvent",
          value: function cancelEvent(event) {
            if (!event) {
              return;
            }

            var target = event.target;

            if (['INPUT', 'TEXTAREA', 'SELECT'].indexOf(target.tagName) > -1 || target.isContentEditable) {
              return;
            }

            event.preventDefault();
            event.stopPropagation();
          }
        }]);

        return ContextMenuContentComponent;
      }();

      ContextMenuContentComponent.ɵfac = function ContextMenuContentComponent_Factory(t) {
        return new (t || ContextMenuContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CONTEXT_MENU_OPTIONS, 8));
      };

      ContextMenuContentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContextMenuContentComponent,
        selectors: [["context-menu-content"]],
        viewQuery: function ContextMenuContentComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuItemElements = _t);
          }
        },
        hostBindings: function ContextMenuContentComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown.ArrowDown", function ContextMenuContentComponent_keydown_ArrowDown_HostBindingHandler($event) {
              return ctx.onKeyEvent($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.ArrowUp", function ContextMenuContentComponent_keydown_ArrowUp_HostBindingHandler($event) {
              return ctx.onKeyEvent($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.ArrowRight", function ContextMenuContentComponent_keydown_ArrowRight_HostBindingHandler($event) {
              return ctx.keyboardOpenSubMenu($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.Enter", function ContextMenuContentComponent_keydown_Enter_HostBindingHandler($event) {
              return ctx.keyboardMenuItemSelect($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.Space", function ContextMenuContentComponent_keydown_Space_HostBindingHandler($event) {
              return ctx.keyboardMenuItemSelect($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.Escape", function ContextMenuContentComponent_keydown_Escape_HostBindingHandler($event) {
              return ctx.onCloseLeafMenu($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("keydown.ArrowLeft", function ContextMenuContentComponent_keydown_ArrowLeft_HostBindingHandler($event) {
              return ctx.onCloseLeafMenu($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("click", function ContextMenuContentComponent_click_HostBindingHandler($event) {
              return ctx.closeMenu($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("contextmenu", function ContextMenuContentComponent_contextmenu_HostBindingHandler($event) {
              return ctx.closeMenu($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
          }
        },
        inputs: {
          menuItems: "menuItems",
          isLeaf: "isLeaf",
          item: "item",
          event: "event",
          parentContextMenu: "parentContextMenu",
          menuClass: "menuClass",
          overlay: "overlay"
        },
        outputs: {
          execute: "execute",
          openSubMenu: "openSubMenu",
          closeLeafMenu: "closeLeafMenu",
          closeAllMenus: "closeAllMenus"
        },
        decls: 10,
        vars: 2,
        consts: [["tabindex", "0", 1, "dropdown", "open", "show", "ngx-contextmenu", 3, "ngClass"], ["tabindex", "0", 1, "dropdown-menu", "show", 2, "position", "static", "float", "none"], ["menu", ""], [3, "disabled", "divider", "dropdown-divider", "active", 4, "ngFor", "ngForOf"], ["li", ""], ["href", "", 3, "dropdown-item", "active", "disabled", "hasSubMenu", "click", "mouseenter", 4, "ngIf"], ["class", "passive", 3, "dropdown-item", "disabled", "click", "contextmenu", 4, "ngIf"], ["href", "", 3, "click", "mouseenter"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "passive", 3, "click", "contextmenu"]],
        template: function ContextMenuContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ContextMenuContentComponent_li_6_Template, 7, 11, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n  ");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.menuClass);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet],
        styles: [".passive[_ngcontent-%COMP%] {\n        display: block;\n        padding: 3px 20px;\n        clear: both;\n        font-weight: normal;\n        line-height: @line-height-base;\n        white-space: nowrap;\n      }\n      .hasSubMenu[_ngcontent-%COMP%]:before {\n        content: '\u25B6';\n        float: right;\n      }"]
      });
      /** @nocollapse */

      ContextMenuContentComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [CONTEXT_MENU_OPTIONS]
          }]
        }];
      };

      ContextMenuContentComponent.propDecorators = {
        menuItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        parentContextMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        menuClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        overlay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        isLeaf: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        execute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        openSubMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        closeLeafMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        closeAllMenus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        menuElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['menu', {
            "static": true
          }]
        }],
        menuItemElements: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
          args: ['li']
        }],
        onKeyEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:keydown.ArrowDown', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:keydown.ArrowUp', ['$event']]
        }],
        keyboardOpenSubMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:keydown.ArrowRight', ['$event']]
        }],
        keyboardMenuItemSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:keydown.Enter', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:keydown.Space', ['$event']]
        }],
        onCloseLeafMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:keydown.Escape', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['window:keydown.ArrowLeft', ['$event']]
        }],
        closeMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['document:click', ['$event']]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['document:contextmenu', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContextMenuContentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'context-menu-content',
            template: "\n    <div\n      class=\"dropdown open show ngx-contextmenu\"\n      [ngClass]=\"menuClass\"\n      tabindex=\"0\"\n    >\n      <ul\n        #menu\n        class=\"dropdown-menu show\"\n        style=\"position: static; float: none;\"\n        tabindex=\"0\"\n      >\n        <li\n          #li\n          *ngFor=\"let menuItem of menuItems; let i = index\"\n          [class.disabled]=\"!isMenuItemEnabled(menuItem)\"\n          [class.divider]=\"menuItem.divider\"\n          [class.dropdown-divider]=\"useBootstrap4 && menuItem.divider\"\n          [class.active]=\"menuItem.isActive && isMenuItemEnabled(menuItem)\"\n          [attr.role]=\"menuItem.divider ? 'separator' : undefined\"\n        >\n          <a\n            *ngIf=\"!menuItem.divider && !menuItem.passive\"\n            href\n            [class.dropdown-item]=\"useBootstrap4\"\n            [class.active]=\"menuItem.isActive && isMenuItemEnabled(menuItem)\"\n            [class.disabled]=\"useBootstrap4 && !isMenuItemEnabled(menuItem)\"\n            [class.hasSubMenu]=\"!!menuItem.subMenu\"\n            (click)=\"onMenuItemSelect(menuItem, $event)\"\n            (mouseenter)=\"onOpenSubMenu(menuItem, $event)\"\n          >\n            <ng-template\n              [ngTemplateOutlet]=\"menuItem.template\"\n              [ngTemplateOutletContext]=\"{ $implicit: item }\"\n            ></ng-template>\n          </a>\n\n          <span\n            (click)=\"stopEvent($event)\"\n            (contextmenu)=\"stopEvent($event)\"\n            class=\"passive\"\n            *ngIf=\"!menuItem.divider && menuItem.passive\"\n            [class.dropdown-item]=\"useBootstrap4\"\n            [class.disabled]=\"useBootstrap4 && !isMenuItemEnabled(menuItem)\"\n          >\n            <ng-template\n              [ngTemplateOutlet]=\"menuItem.template\"\n              [ngTemplateOutletContext]=\"{ $implicit: item }\"\n            ></ng-template>\n          </span>\n        </li>\n      </ul>\n    </div>\n  ",
            styles: ["\n      .passive {\n        display: block;\n        padding: 3px 20px;\n        clear: both;\n        font-weight: normal;\n        line-height: @line-height-base;\n        white-space: nowrap;\n      }\n      .hasSubMenu:before {\n        content: '\u25B6';\n        float: right;\n      }\n    "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [CONTEXT_MENU_OPTIONS]
            }]
          }];
        }, {
          menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          isLeaf: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          execute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          openSubMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          closeLeafMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          closeAllMenus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          onKeyEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown.ArrowDown', ['$event']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown.ArrowUp', ['$event']]
          }],
          keyboardOpenSubMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown.ArrowRight', ['$event']]
          }],
          keyboardMenuItemSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown.Enter', ['$event']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown.Space', ['$event']]
          }],
          onCloseLeafMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown.Escape', ['$event']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['window:keydown.ArrowLeft', ['$event']]
          }],
          closeMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['document:click', ['$event']]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['document:contextmenu', ['$event']]
          }],
          item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          parentContextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          menuClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          overlay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          menuElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['menu', {
              "static": true
            }]
          }],
          menuItemElements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChildren,
            args: ['li']
          }]
        });
      })();

      var _ContextMenuService = /*#__PURE__*/function () {
        function _ContextMenuService(overlay, scrollStrategy) {
          _classCallCheck(this, _ContextMenuService);

          this.overlay = overlay;
          this.scrollStrategy = scrollStrategy;
          this.isDestroyingLeafMenu = false;
          this.show = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          this.triggerClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          this.close = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
          this.overlays = [];
          this.fakeElement = {
            getBoundingClientRect: function getBoundingClientRect() {
              return {
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0
              };
            }
          };
        }

        _createClass(_ContextMenuService, [{
          key: "openContextMenu",
          value: function openContextMenu(context) {
            var anchorElement = context.anchorElement,
                event = context.event,
                parentContextMenu = context.parentContextMenu;

            if (!parentContextMenu) {
              var mouseEvent = event;

              this.fakeElement.getBoundingClientRect = function () {
                return {
                  bottom: mouseEvent.clientY,
                  height: 0,
                  left: mouseEvent.clientX,
                  right: mouseEvent.clientX,
                  top: mouseEvent.clientY,
                  width: 0
                };
              };

              this.closeAllContextMenus({
                eventType: 'cancel',
                event: event
              });
              var positionStrategy = this.overlay.position().connectedTo(new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef(anchorElement || this.fakeElement), {
                originX: 'start',
                originY: 'bottom'
              }, {
                overlayX: 'start',
                overlayY: 'top'
              }).withFallbackPosition({
                originX: 'start',
                originY: 'top'
              }, {
                overlayX: 'start',
                overlayY: 'bottom'
              }).withFallbackPosition({
                originX: 'end',
                originY: 'top'
              }, {
                overlayX: 'start',
                overlayY: 'top'
              }).withFallbackPosition({
                originX: 'start',
                originY: 'top'
              }, {
                overlayX: 'end',
                overlayY: 'top'
              }).withFallbackPosition({
                originX: 'end',
                originY: 'center'
              }, {
                overlayX: 'start',
                overlayY: 'center'
              }).withFallbackPosition({
                originX: 'start',
                originY: 'center'
              }, {
                overlayX: 'end',
                overlayY: 'center'
              });
              this.overlays = [this.overlay.create({
                positionStrategy: positionStrategy,
                panelClass: 'ngx-contextmenu',
                scrollStrategy: this.scrollStrategy.close()
              })];
              this.attachContextMenu(this.overlays[0], context);
            } else {
              var _positionStrategy = this.overlay.position().connectedTo(new _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef(event ? event.target : anchorElement), {
                originX: 'end',
                originY: 'top'
              }, {
                overlayX: 'start',
                overlayY: 'top'
              }).withFallbackPosition({
                originX: 'start',
                originY: 'top'
              }, {
                overlayX: 'end',
                overlayY: 'top'
              }).withFallbackPosition({
                originX: 'end',
                originY: 'bottom'
              }, {
                overlayX: 'start',
                overlayY: 'bottom'
              }).withFallbackPosition({
                originX: 'start',
                originY: 'bottom'
              }, {
                overlayX: 'end',
                overlayY: 'bottom'
              });

              var newOverlay = this.overlay.create({
                positionStrategy: _positionStrategy,
                panelClass: 'ngx-contextmenu',
                scrollStrategy: this.scrollStrategy.close()
              });
              this.destroySubMenus(parentContextMenu);
              this.overlays = this.overlays.concat(newOverlay);
              this.attachContextMenu(newOverlay, context);
            }
          }
        }, {
          key: "attachContextMenu",
          value: function attachContextMenu(overlay, context) {
            var _this78 = this;

            var event = context.event,
                item = context.item,
                menuItems = context.menuItems,
                menuClass = context.menuClass;
            var contextMenuContent = overlay.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.ComponentPortal(ContextMenuContentComponent));
            contextMenuContent.instance.event = event;
            contextMenuContent.instance.item = item;
            contextMenuContent.instance.menuItems = menuItems;
            contextMenuContent.instance.overlay = overlay;
            contextMenuContent.instance.isLeaf = true;
            contextMenuContent.instance.menuClass = menuClass;
            overlay.contextMenu = contextMenuContent.instance;
            var subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
            subscriptions.add(contextMenuContent.instance.execute.asObservable().subscribe(function (executeEvent) {
              return _this78.closeAllContextMenus(Object.assign({
                eventType: 'execute'
              }, executeEvent));
            }));
            subscriptions.add(contextMenuContent.instance.closeAllMenus.asObservable().subscribe(function (closeAllEvent) {
              return _this78.closeAllContextMenus(Object.assign({
                eventType: 'cancel'
              }, closeAllEvent));
            }));
            subscriptions.add(contextMenuContent.instance.closeLeafMenu.asObservable().subscribe(function (closeLeafMenuEvent) {
              return _this78.destroyLeafMenu(closeLeafMenuEvent);
            }));
            subscriptions.add(contextMenuContent.instance.openSubMenu.asObservable().subscribe(function (subMenuEvent) {
              _this78.destroySubMenus(contextMenuContent.instance);

              if (!subMenuEvent.contextMenu) {
                contextMenuContent.instance.isLeaf = true;
                return;
              }

              contextMenuContent.instance.isLeaf = false;

              _this78.show.next(subMenuEvent);
            }));
            contextMenuContent.onDestroy(function () {
              menuItems.forEach(function (menuItem) {
                return menuItem.isActive = false;
              });
              subscriptions.unsubscribe();
            });
            contextMenuContent.changeDetectorRef.detectChanges();
          }
        }, {
          key: "closeAllContextMenus",
          value: function closeAllContextMenus(closeEvent) {
            if (this.overlays) {
              this.close.next(closeEvent);
              this.overlays.forEach(function (overlay, index) {
                overlay.detach();
                overlay.dispose();
              });
            }

            this.overlays = [];
          }
        }, {
          key: "getLastAttachedOverlay",
          value: function getLastAttachedOverlay() {
            var overlay = this.overlays[this.overlays.length - 1];

            while (this.overlays.length > 1 && overlay && !overlay.hasAttached()) {
              overlay.detach();
              overlay.dispose();
              this.overlays = this.overlays.slice(0, -1);
              overlay = this.overlays[this.overlays.length - 1];
            }

            return overlay;
          }
        }, {
          key: "destroyLeafMenu",
          value: function destroyLeafMenu() {
            var _this79 = this;

            var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                exceptRootMenu = _ref5.exceptRootMenu,
                event = _ref5.event;

            if (this.isDestroyingLeafMenu) {
              return;
            }

            this.isDestroyingLeafMenu = true;
            setTimeout(function () {
              var overlay = _this79.getLastAttachedOverlay();

              if (_this79.overlays.length > 1 && overlay) {
                overlay.detach();
                overlay.dispose();
              }

              if (!exceptRootMenu && _this79.overlays.length > 0 && overlay) {
                _this79.close.next({
                  eventType: 'cancel',
                  event: event
                });

                overlay.detach();
                overlay.dispose();
              }

              var newLeaf = _this79.getLastAttachedOverlay();

              if (newLeaf) {
                newLeaf.contextMenu.isLeaf = true;
              }

              _this79.isDestroyingLeafMenu = false;
            });
          }
        }, {
          key: "destroySubMenus",
          value: function destroySubMenus(contextMenu) {
            var overlay = contextMenu.overlay;
            var index = this.overlays.indexOf(overlay);
            this.overlays.slice(index + 1).forEach(function (subMenuOverlay) {
              subMenuOverlay.detach();
              subMenuOverlay.dispose();
            });
          }
        }, {
          key: "isLeafMenu",
          value: function isLeafMenu(contextMenuContent) {
            var overlay = this.getLastAttachedOverlay();
            return contextMenuContent.overlay === overlay;
          }
        }]);

        return _ContextMenuService;
      }();

      _ContextMenuService.ɵfac = function ContextMenuService_Factory(t) {
        return new (t || _ContextMenuService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.ScrollStrategyOptions));
      };

      _ContextMenuService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ContextMenuService,
        factory: _ContextMenuService.ɵfac
      });
      /** @nocollapse */

      _ContextMenuService.ctorParameters = function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay
        }, {
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.ScrollStrategyOptions
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ContextMenuService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
        }], function () {
          return [{
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.Overlay
          }, {
            type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.ScrollStrategyOptions
          }];
        }, null);
      })();

      var _ContextMenuComponent = /*#__PURE__*/function () {
        function _ContextMenuComponent(_contextMenuService, changeDetector, elementRef, options) {
          var _this80 = this;

          _classCallCheck(this, _ContextMenuComponent);

          this._contextMenuService = _contextMenuService;
          this.changeDetector = changeDetector;
          this.elementRef = elementRef;
          this.options = options;
          this.menuClass = "";
          this.autoFocus = false;
          this.useBootstrap4 = false;
          this.disabled = false;
          this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.visibleMenuItems = [];
          this.links = [];
          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();

          if (options) {
            this.autoFocus = options.autoFocus;
            this.useBootstrap4 = options.useBootstrap4;
          }

          this.subscription.add(_contextMenuService.show.subscribe(function (menuEvent) {
            _this80.onMenuEvent(menuEvent);
          }));
        }

        _createClass(_ContextMenuComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscription.unsubscribe();
          }
        }, {
          key: "onMenuEvent",
          value: function onMenuEvent(menuEvent) {
            var _this81 = this;

            if (this.disabled) {
              return;
            }

            var contextMenu = menuEvent.contextMenu,
                event = menuEvent.event,
                item = menuEvent.item;

            if (contextMenu && contextMenu !== this) {
              return;
            }

            this.event = event;
            this.item = item;
            this.setVisibleMenuItems();

            this._contextMenuService.openContextMenu(Object.assign(Object.assign({}, menuEvent), {
              menuItems: this.visibleMenuItems,
              menuClass: this.menuClass
            }));

            this._contextMenuService.close.asObservable().pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.first)()).subscribe(function (closeEvent) {
              return _this81.close.emit(closeEvent);
            });

            this.open.next(menuEvent);
          }
        }, {
          key: "isMenuItemVisible",
          value: function isMenuItemVisible(menuItem) {
            return this.evaluateIfFunction(menuItem.visible);
          }
        }, {
          key: "setVisibleMenuItems",
          value: function setVisibleMenuItems() {
            var _this82 = this;

            this.visibleMenuItems = this.menuItems.filter(function (menuItem) {
              return _this82.isMenuItemVisible(menuItem);
            });
          }
        }, {
          key: "evaluateIfFunction",
          value: function evaluateIfFunction(value) {
            if (value instanceof Function) {
              return value(this.item);
            }

            return value;
          }
        }]);

        return _ContextMenuComponent;
      }();

      _ContextMenuComponent.ɵfac = function ContextMenuComponent_Factory(t) {
        return new (t || _ContextMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ContextMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CONTEXT_MENU_OPTIONS, 8));
      };

      _ContextMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ContextMenuComponent,
        selectors: [["context-menu"]],
        contentQueries: function ContextMenuComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ContextMenuItemDirective, 4);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuItems = _t);
          }
        },
        viewQuery: function ContextMenuComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.menuElement = _t.first);
          }
        },
        inputs: {
          menuClass: "menuClass",
          autoFocus: "autoFocus",
          useBootstrap4: "useBootstrap4",
          disabled: "disabled"
        },
        outputs: {
          close: "close",
          open: "open"
        },
        decls: 1,
        vars: 0,
        template: function ContextMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " ");
          }
        },
        styles: ["\n    .cdk-overlay-container {\n      position: fixed;\n      z-index: 1000;\n      pointer-events: none;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .ngx-contextmenu.cdk-overlay-pane {\n      position: absolute;\n      pointer-events: auto;\n      box-sizing: border-box;\n    }\n  "],
        encapsulation: 2
      });
      /** @nocollapse */

      _ContextMenuComponent.ctorParameters = function () {
        return [{
          type: _ContextMenuService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [CONTEXT_MENU_OPTIONS]
          }]
        }];
      };

      _ContextMenuComponent.propDecorators = {
        menuClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        autoFocus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        useBootstrap4: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        close: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        menuItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
          args: [_ContextMenuItemDirective]
        }],
        menuElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['menu', {
            "static": false
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ContextMenuComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            selector: 'context-menu',
            template: " ",
            styles: ["\n    .cdk-overlay-container {\n      position: fixed;\n      z-index: 1000;\n      pointer-events: none;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n    }\n    .ngx-contextmenu.cdk-overlay-pane {\n      position: absolute;\n      pointer-events: auto;\n      box-sizing: border-box;\n    }\n  "]
          }]
        }], function () {
          return [{
            type: _ContextMenuService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [CONTEXT_MENU_OPTIONS]
            }]
          }];
        }, {
          menuClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          autoFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          useBootstrap4: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          menuItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [_ContextMenuItemDirective]
          }],
          menuElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['menu', {
              "static": false
            }]
          }]
        });
      })();

      var _ContextMenuAttachDirective = /*#__PURE__*/function () {
        function _ContextMenuAttachDirective(contextMenuService) {
          _classCallCheck(this, _ContextMenuAttachDirective);

          this.contextMenuService = contextMenuService;
        }

        _createClass(_ContextMenuAttachDirective, [{
          key: "onContextMenu",
          value: function onContextMenu(event) {
            if (!this.contextMenu.disabled) {
              this.contextMenuService.show.next({
                contextMenu: this.contextMenu,
                event: event,
                item: this.contextMenuSubject
              });
              event.preventDefault();
              event.stopPropagation();
            }
          }
        }]);

        return _ContextMenuAttachDirective;
      }();

      _ContextMenuAttachDirective.ɵfac = function ContextMenuAttachDirective_Factory(t) {
        return new (t || _ContextMenuAttachDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ContextMenuService));
      };

      _ContextMenuAttachDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _ContextMenuAttachDirective,
        selectors: [["", "contextMenu", ""]],
        hostBindings: function ContextMenuAttachDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("contextmenu", function ContextMenuAttachDirective_contextmenu_HostBindingHandler($event) {
              return ctx.onContextMenu($event);
            });
          }
        },
        inputs: {
          contextMenuSubject: "contextMenuSubject",
          contextMenu: "contextMenu"
        }
      });
      /** @nocollapse */

      _ContextMenuAttachDirective.ctorParameters = function () {
        return [{
          type: _ContextMenuService
        }];
      };

      _ContextMenuAttachDirective.propDecorators = {
        contextMenuSubject: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        contextMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        onContextMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
          args: ['contextmenu', ['$event']]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ContextMenuAttachDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[contextMenu]'
          }]
        }], function () {
          return [{
            type: _ContextMenuService
          }];
        }, {
          onContextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['contextmenu', ['$event']]
          }],
          contextMenuSubject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          contextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _ContextMenuModule = /*#__PURE__*/function () {
        function _ContextMenuModule() {
          _classCallCheck(this, _ContextMenuModule);
        }

        _createClass(_ContextMenuModule, null, [{
          key: "forRoot",
          value: function forRoot(options) {
            return {
              ngModule: _ContextMenuModule,
              providers: [_ContextMenuService, {
                provide: CONTEXT_MENU_OPTIONS,
                useValue: options
              }, {
                provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayContainer,
                useClass: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.FullscreenOverlayContainer
              }]
            };
          }
        }]);

        return _ContextMenuModule;
      }();

      _ContextMenuModule.ɵfac = function ContextMenuModule_Factory(t) {
        return new (t || _ContextMenuModule)();
      };

      _ContextMenuModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _ContextMenuModule
      });
      _ContextMenuModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_ContextMenuModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [_ContextMenuAttachDirective, _ContextMenuComponent, ContextMenuContentComponent, _ContextMenuItemDirective],
            entryComponents: [ContextMenuContentComponent],
            exports: [_ContextMenuAttachDirective, _ContextMenuComponent, _ContextMenuItemDirective],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_ContextMenuModule, {
          declarations: function declarations() {
            return [_ContextMenuAttachDirective, _ContextMenuComponent, ContextMenuContentComponent, _ContextMenuItemDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.OverlayModule];
          },
          exports: function exports() {
            return [_ContextMenuAttachDirective, _ContextMenuComponent, _ContextMenuItemDirective];
          }
        });
      })();
      /*
       * Public API Surface of ngx-contextmenu
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    43682: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "audit": function audit() {
          return (
            /* binding */
            _audit
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/lift */
      13256);
      /* harmony import */


      var _observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../observable/from */
      14500);
      /* harmony import */


      var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./OperatorSubscriber */
      36487);

      function _audit(durationSelector) {
        return (0, _util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(function (source, subscriber) {
          var hasValue = false;
          var lastValue = null;
          var durationSubscriber = null;
          var isComplete = false;

          var endDuration = function endDuration() {
            durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
            durationSubscriber = null;

            if (hasValue) {
              hasValue = false;
              var value = lastValue;
              lastValue = null;
              subscriber.next(value);
            }

            isComplete && subscriber.complete();
          };

          var cleanupDuration = function cleanupDuration() {
            durationSubscriber = null;
            isComplete && subscriber.complete();
          };

          source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.OperatorSubscriber(subscriber, function (value) {
            hasValue = true;
            lastValue = value;

            if (!durationSubscriber) {
              (0, _observable_from__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(durationSelector(value)).subscribe(durationSubscriber = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.OperatorSubscriber(subscriber, endDuration, cleanupDuration));
            }
          }, function () {
            isComplete = true;
            (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
          }));
        });
      }
      /***/

    },

    /***/
    49417: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "auditTime": function auditTime() {
          return (
            /* binding */
            _auditTime
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../scheduler/async */
      39216);
      /* harmony import */


      var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./audit */
      43682);
      /* harmony import */


      var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../observable/timer */
      24390);

      function _auditTime(duration, scheduler) {
        if (scheduler === void 0) {
          scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
        }

        return (0, _audit__WEBPACK_IMPORTED_MODULE_1__.audit)(function () {
          return (0, _observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(duration, scheduler);
        });
      }
      /***/

    },

    /***/
    41757: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "shareReplay": function shareReplay() {
          return (
            /* binding */
            _shareReplay
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../ReplaySubject */
      55552);
      /* harmony import */


      var _share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./share */
      31635);

      function _shareReplay(configOrBufferSize, windowTime, scheduler) {
        var _a, _b;

        var bufferSize;
        var refCount = false;

        if (configOrBufferSize && typeof configOrBufferSize === 'object') {
          bufferSize = (_a = configOrBufferSize.bufferSize) !== null && _a !== void 0 ? _a : Infinity;
          windowTime = (_b = configOrBufferSize.windowTime) !== null && _b !== void 0 ? _b : Infinity;
          refCount = !!configOrBufferSize.refCount;
          scheduler = configOrBufferSize.scheduler;
        } else {
          bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
        }

        return (0, _share__WEBPACK_IMPORTED_MODULE_0__.share)({
          connector: function connector() {
            return new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(bufferSize, windowTime, scheduler);
          },
          resetOnError: true,
          resetOnComplete: false,
          resetOnRefCountZero: refCount
        });
      }
      /***/

    },

    /***/
    59913: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "takeWhile": function takeWhile() {
          return (
            /* binding */
            _takeWhile
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/lift */
      13256);
      /* harmony import */


      var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./OperatorSubscriber */
      36487);

      function _takeWhile(predicate, inclusive) {
        if (inclusive === void 0) {
          inclusive = false;
        }

        return (0, _util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(function (source, subscriber) {
          var index = 0;
          source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.OperatorSubscriber(subscriber, function (value) {
            var result = predicate(value, index++);
            (result || inclusive) && subscriber.next(value);
            !result && subscriber.complete();
          }));
        });
      }
      /***/

    },

    /***/
    86013: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AnimationFrameAction": function AnimationFrameAction() {
          return (
            /* binding */
            _AnimationFrameAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      10763);
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./AsyncAction */
      60607);
      /* harmony import */


      var _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./animationFrameProvider */
      56357);

      var _AnimationFrameAction = function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AnimationFrameAction, _super);

        function AnimationFrameAction(scheduler, work) {
          var _this = _super.call(this, scheduler, work) || this;

          _this.scheduler = scheduler;
          _this.work = work;
          return _this;
        }

        AnimationFrameAction.prototype.requestAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
            delay = 0;
          }

          if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
          }

          scheduler.actions.push(this);
          return scheduler._scheduled || (scheduler._scheduled = _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__.animationFrameProvider.requestAnimationFrame(function () {
            return scheduler.flush(undefined);
          }));
        };

        AnimationFrameAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
            delay = 0;
          }

          if (delay != null && delay > 0 || delay == null && this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
          }

          if (scheduler.actions.length === 0) {
            _animationFrameProvider__WEBPACK_IMPORTED_MODULE_1__.animationFrameProvider.cancelAnimationFrame(id);

            scheduler._scheduled = undefined;
          }

          return undefined;
        };

        return AnimationFrameAction;
      }(_AsyncAction__WEBPACK_IMPORTED_MODULE_2__.AsyncAction);
      /***/

    },

    /***/
    25873: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AnimationFrameScheduler": function AnimationFrameScheduler() {
          return (
            /* binding */
            _AnimationFrameScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      10763);
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsyncScheduler */
      3677);

      var _AnimationFrameScheduler = function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AnimationFrameScheduler, _super);

        function AnimationFrameScheduler() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        AnimationFrameScheduler.prototype.flush = function (action) {
          this._active = true;
          this._scheduled = undefined;
          var actions = this.actions;
          var error;
          var index = -1;
          action = action || actions.shift();
          var count = actions.length;

          do {
            if (error = action.execute(action.state, action.delay)) {
              break;
            }
          } while (++index < count && (action = actions.shift()));

          this._active = false;

          if (error) {
            while (++index < count && (action = actions.shift())) {
              action.unsubscribe();
            }

            throw error;
          }
        };

        return AnimationFrameScheduler;
      }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__.AsyncScheduler);
      /***/

    },

    /***/
    52387: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsapAction": function AsapAction() {
          return (
            /* binding */
            _AsapAction
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      10763);
      /* harmony import */


      var _AsyncAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./AsyncAction */
      60607);
      /* harmony import */


      var _immediateProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./immediateProvider */
      32522);

      var _AsapAction = function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AsapAction, _super);

        function AsapAction(scheduler, work) {
          var _this = _super.call(this, scheduler, work) || this;

          _this.scheduler = scheduler;
          _this.work = work;
          return _this;
        }

        AsapAction.prototype.requestAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
            delay = 0;
          }

          if (delay !== null && delay > 0) {
            return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
          }

          scheduler.actions.push(this);
          return scheduler._scheduled || (scheduler._scheduled = _immediateProvider__WEBPACK_IMPORTED_MODULE_1__.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
        };

        AsapAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
          if (delay === void 0) {
            delay = 0;
          }

          if (delay != null && delay > 0 || delay == null && this.delay > 0) {
            return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
          }

          if (scheduler.actions.length === 0) {
            _immediateProvider__WEBPACK_IMPORTED_MODULE_1__.immediateProvider.clearImmediate(id);

            scheduler._scheduled = undefined;
          }

          return undefined;
        };

        return AsapAction;
      }(_AsyncAction__WEBPACK_IMPORTED_MODULE_2__.AsyncAction);
      /***/

    },

    /***/
    4049: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AsapScheduler": function AsapScheduler() {
          return (
            /* binding */
            _AsapScheduler
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      10763);
      /* harmony import */


      var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsyncScheduler */
      3677);

      var _AsapScheduler = function (_super) {
        (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(AsapScheduler, _super);

        function AsapScheduler() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        AsapScheduler.prototype.flush = function (action) {
          this._active = true;
          this._scheduled = undefined;
          var actions = this.actions;
          var error;
          var index = -1;
          action = action || actions.shift();
          var count = actions.length;

          do {
            if (error = action.execute(action.state, action.delay)) {
              break;
            }
          } while (++index < count && (action = actions.shift()));

          this._active = false;

          if (error) {
            while (++index < count && (action = actions.shift())) {
              action.unsubscribe();
            }

            throw error;
          }
        };

        return AsapScheduler;
      }(_AsyncScheduler__WEBPACK_IMPORTED_MODULE_1__.AsyncScheduler);
      /***/

    },

    /***/
    22526: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "animationFrameScheduler": function animationFrameScheduler() {
          return (
            /* binding */
            _animationFrameScheduler
          );
        },

        /* harmony export */
        "animationFrame": function animationFrame() {
          return (
            /* binding */
            _animationFrame
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AnimationFrameAction */
      86013);
      /* harmony import */


      var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AnimationFrameScheduler */
      25873);

      var _animationFrameScheduler = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__.AnimationFrameScheduler(_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__.AnimationFrameAction);

      var _animationFrame = _animationFrameScheduler;
      /***/
    },

    /***/
    56357: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "animationFrameProvider": function animationFrameProvider() {
          return (
            /* binding */
            _animationFrameProvider
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      10763);
      /* harmony import */


      var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Subscription */
      77127);

      var _animationFrameProvider = {
        schedule: function schedule(callback) {
          var request = requestAnimationFrame;
          var cancel = cancelAnimationFrame;
          var delegate = _animationFrameProvider.delegate;

          if (delegate) {
            request = delegate.requestAnimationFrame;
            cancel = delegate.cancelAnimationFrame;
          }

          var handle = request(function (timestamp) {
            cancel = undefined;
            callback(timestamp);
          });
          return new _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription(function () {
            return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
          });
        },
        requestAnimationFrame: function (_requestAnimationFrame) {
          function requestAnimationFrame() {
            return _requestAnimationFrame.apply(this, arguments);
          }

          requestAnimationFrame.toString = function () {
            return _requestAnimationFrame.toString();
          };

          return requestAnimationFrame;
        }(function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          var delegate = _animationFrameProvider.delegate;
          return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(args)));
        }),
        cancelAnimationFrame: function (_cancelAnimationFrame) {
          function cancelAnimationFrame() {
            return _cancelAnimationFrame.apply(this, arguments);
          }

          cancelAnimationFrame.toString = function () {
            return _cancelAnimationFrame.toString();
          };

          return cancelAnimationFrame;
        }(function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          var delegate = _animationFrameProvider.delegate;
          return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(args)));
        }),
        delegate: undefined
      };
      /***/
    },

    /***/
    31232: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "asapScheduler": function asapScheduler() {
          return (
            /* binding */
            _asapScheduler
          );
        },

        /* harmony export */
        "asap": function asap() {
          return (
            /* binding */
            _asap
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./AsapAction */
      52387);
      /* harmony import */


      var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./AsapScheduler */
      4049);

      var _asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__.AsapScheduler(_AsapAction__WEBPACK_IMPORTED_MODULE_1__.AsapAction);

      var _asap = _asapScheduler;
      /***/
    },

    /***/
    32522: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "immediateProvider": function immediateProvider() {
          return (
            /* binding */
            _immediateProvider
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      10763);
      /* harmony import */


      var _util_Immediate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/Immediate */
      54117);

      var _setImmediate = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__.Immediate.setImmediate,
          _clearImmediate = _util_Immediate__WEBPACK_IMPORTED_MODULE_0__.Immediate.clearImmediate;
      var _immediateProvider = {
        setImmediate: function setImmediate() {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          var delegate = _immediateProvider.delegate;
          return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || _setImmediate).apply(void 0, (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(args)));
        },
        clearImmediate: function clearImmediate(handle) {
          var delegate = _immediateProvider.delegate;
          return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || _clearImmediate)(handle);
        },
        delegate: undefined
      };
      /***/
    },

    /***/
    54117: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Immediate": function Immediate() {
          return (
            /* binding */
            _Immediate
          );
        },

        /* harmony export */
        "TestTools": function TestTools() {
          return (
            /* binding */
            _TestTools
          );
        }
        /* harmony export */

      });

      var nextHandle = 1;
      var resolved;
      var activeHandles = {};

      function findAndClearHandle(handle) {
        if (handle in activeHandles) {
          delete activeHandles[handle];
          return true;
        }

        return false;
      }

      var _Immediate = {
        setImmediate: function setImmediate(cb) {
          var handle = nextHandle++;
          activeHandles[handle] = true;

          if (!resolved) {
            resolved = Promise.resolve();
          }

          resolved.then(function () {
            return findAndClearHandle(handle) && cb();
          });
          return handle;
        },
        clearImmediate: function clearImmediate(handle) {
          findAndClearHandle(handle);
        }
      };
      var _TestTools = {
        pending: function pending() {
          return Object.keys(activeHandles).length;
        }
      };
      /***/
    },

    /***/
    20411: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "isObservable": function isObservable() {
          return (
            /* binding */
            _isObservable
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../Observable */
      54926);
      /* harmony import */


      var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./isFunction */
      23250);

      function _isObservable(obj) {
        return !!obj && (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable || (0, _isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj.lift) && (0, _isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj.subscribe));
      }
      /***/

    },

    /***/
    74118: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DemoComponent": function DemoComponent() {
          return (
            /* binding */
            _DemoComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-calendar */
      4606);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      50931);
      /* harmony import */


      var _demo_utils_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../demo-utils/colors */
      55155);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../demo-utils/calendar-header.component */
      78767);
      /* harmony import */


      var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-contextmenu */
      6101);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-tooltip.directive */
      69416);
      /* harmony import */


      var _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/month/calendar-month-view.component */
      21426);
      /* harmony import */


      var _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/week/calendar-week-view.component */
      1913);
      /* harmony import */


      var _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/day/calendar-day-view.component */
      50811);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-date.pipe */
      12153);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-event-title.pipe */
      44602);

      function DemoComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    Add event\n  ");
        }
      }

      function DemoComponent_ng_template_9_span_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().day;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r13.badgeTotal);
        }
      }

      function DemoComponent_ng_template_9_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function DemoComponent_ng_template_9_div_14_Template_div_mouseenter_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var event_r23 = restoredCtx.$implicit;

            var highlightDay_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().highlightDay;

            return highlightDay_r17.emit({
              event: event_r23
            });
          })("mouseleave", function DemoComponent_ng_template_9_div_14_Template_div_mouseleave_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var event_r23 = restoredCtx.$implicit;

            var unhighlightDay_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().unhighlightDay;

            return unhighlightDay_r18.emit({
              event: event_r23
            });
          })("click", function DemoComponent_ng_template_9_div_14_Template_div_click_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var event_r23 = restoredCtx.$implicit;

            var eventClicked_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().eventClicked;

            $event.stopPropagation();
            return eventClicked_r19.emit({
              event: event_r23
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "calendarEventTitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var event_r23 = ctx.$implicit;

          var tooltipPlacement_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().tooltipPlacement;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", event_r23.color.primary);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", event_r23 == null ? null : event_r23.cssClass)("mwlCalendarTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 5, event_r23.title, "monthTooltip", event_r23))("tooltipPlacement", tooltipPlacement_r16);
        }
      }

      function DemoComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DemoComponent_ng_template_9_span_5_Template, 2, 1, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DemoComponent_ng_template_9_div_14_Template, 2, 9, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n");
        }

        if (rf & 2) {
          var day_r13 = ctx.day;
          var locale_r15 = ctx.locale;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contextMenu", _r0)("contextMenuSubject", day_r13.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r13.badgeTotal > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 5, day_r13.date, "monthViewDayNumber", locale_r15));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", day_r13.events);
        }
      }

      function DemoComponent_ng_template_12_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemoComponent_ng_template_12_div_3_Template_div_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

            var day_r36 = restoredCtx.$implicit;

            var dayHeaderClicked_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().dayHeaderClicked;

            return dayHeaderClicked_r34.emit({
              day: day_r36
            });
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n      ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var day_r36 = ctx.$implicit;

          var locale_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().locale;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-past", day_r36.isPast)("cal-today", day_r36.isToday)("cal-future", day_r36.isFuture)("cal-weekend", day_r36.isWeekend);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contextMenu", _r0)("contextMenuSubject", day_r36.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 12, day_r36.date, "weekViewColumnHeader", locale_r33));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 16, day_r36.date, "weekViewColumnSubHeader", locale_r33));
        }
      }

      function DemoComponent_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DemoComponent_ng_template_12_div_3_Template, 11, 20, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n");
        }

        if (rf & 2) {
          var days_r32 = ctx.days;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", days_r32);
        }
      }

      function DemoComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n");
        }

        if (rf & 2) {
          var segment_r41 = ctx.segment;
          var locale_r42 = ctx.locale;
          var segmentHeight_r43 = ctx.segmentHeight;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", segmentHeight_r43, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-hour-start", segment_r41.isStart)("cal-after-hour-start", !segment_r41.isStart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", segment_r41.cssClass)("contextMenu", _r0)("contextMenuSubject", segment_r41.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n      ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 10, segment_r41.date, "dayViewHour", locale_r42), "\n    ");
        }
      }

      function DemoComponent_ng_template_18_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "calendarDate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var segment_r44 = ctx_r49.segment;
          var locale_r45 = ctx_r49.locale;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n      ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, segment_r44.date, "weekViewHour", locale_r45), "\n    ");
        }
      }

      function DemoComponent_ng_template_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n    ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DemoComponent_ng_template_18_div_3_Template, 3, 5, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n");
        }

        if (rf & 2) {
          var segment_r44 = ctx.segment;
          var segmentHeight_r46 = ctx.segmentHeight;
          var isTimeLabel_r47 = ctx.isTimeLabel;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", segmentHeight_r46, "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cal-hour-start", segment_r44.isStart)("cal-after-hour-start", !segment_r44.isStart);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", segment_r44.cssClass)("contextMenu", _r0)("contextMenuSubject", segment_r44.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isTimeLabel_r47);
        }
      }

      function DemoComponent_mwl_calendar_month_view_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-month-view", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r10.viewDate)("events", ctx_r10.events)("refresh", ctx_r10.refresh)("cellTemplate", _r2);
        }
      }

      function DemoComponent_mwl_calendar_week_view_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-week-view", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r11.viewDate)("events", ctx_r11.events)("refresh", ctx_r11.refresh)("headerTemplate", _r4)("hourSegmentTemplate", _r8);
        }
      }

      function DemoComponent_mwl_calendar_day_view_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-calendar-day-view", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx_r12.viewDate)("events", ctx_r12.events)("refresh", ctx_r12.refresh)("hourSegmentTemplate", _r6);
        }
      }

      var _DemoComponent = /*#__PURE__*/function () {
        function _DemoComponent() {
          _classCallCheck(this, _DemoComponent);

          this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView.Month;
          this.viewDate = new Date();
          this.events = [];
          this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        }

        _createClass(_DemoComponent, [{
          key: "addEvent",
          value: function addEvent(date) {
            this.events.push({
              start: date,
              title: 'New event',
              color: _demo_utils_colors__WEBPACK_IMPORTED_MODULE_3__.colors.red
            });
            this.refresh.next();
          }
        }]);

        return _DemoComponent;
      }();

      _DemoComponent.ɵfac = function DemoComponent_Factory(t) {
        return new (t || _DemoComponent)();
      };

      _DemoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DemoComponent,
        selectors: [["mwl-demo-component"]],
        decls: 30,
        vars: 6,
        consts: [[3, "view", "viewDate", "viewChange", "viewDateChange"], ["basicMenu", ""], ["contextMenuItem", "", 3, "execute"], ["monthCellTemplate", ""], ["weekHeaderTemplate", ""], ["dayHourSegmentTemplate", ""], ["weekViewHourSegment", ""], [3, "ngSwitch"], [3, "viewDate", "events", "refresh", "cellTemplate", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "headerTemplate", "hourSegmentTemplate", 4, "ngSwitchCase"], [3, "viewDate", "events", "refresh", "hourSegmentTemplate", 4, "ngSwitchCase"], [1, "fill-height", 3, "contextMenu", "contextMenuSubject"], [1, "cal-cell-top"], ["class", "cal-day-badge", 4, "ngIf"], [1, "cal-day-number"], [1, "cal-events"], ["class", "cal-event", 3, "backgroundColor", "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], [1, "cal-day-badge"], [1, "cal-event", 3, "ngClass", "mwlCalendarTooltip", "tooltipPlacement", "mouseenter", "mouseleave", "click"], [1, "cal-day-headers"], ["class", "cal-header", 3, "cal-past", "cal-today", "cal-future", "cal-weekend", "contextMenu", "contextMenuSubject", "click", 4, "ngFor", "ngForOf"], [1, "cal-header", 3, "contextMenu", "contextMenuSubject", "click"], [1, "cal-hour-segment", 3, "ngClass", "contextMenu", "contextMenuSubject"], [1, "cal-time"], ["class", "cal-time", 4, "ngIf"], [3, "viewDate", "events", "refresh", "cellTemplate"], [3, "viewDate", "events", "refresh", "headerTemplate", "hourSegmentTemplate"], [3, "viewDate", "events", "refresh", "hourSegmentTemplate"]],
        template: function DemoComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mwl-demo-utils-calendar-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewChange_0_listener($event) {
              return ctx.view = $event;
            })("viewDateChange", function DemoComponent_Template_mwl_demo_utils_calendar_header_viewDateChange_0_listener($event) {
              return ctx.viewDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "context-menu", null, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DemoComponent_ng_template_6_Template, 1, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("execute", function DemoComponent_Template_ng_template_execute_6_listener($event) {
              return ctx.addEvent($event.item);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DemoComponent_ng_template_9_Template, 18, 9, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DemoComponent_ng_template_12_Template, 6, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DemoComponent_ng_template_15_Template, 8, 14, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DemoComponent_ng_template_18_Template, 6, 10, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DemoComponent_mwl_calendar_month_view_23_Template, 2, 4, "mwl-calendar-month-view", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DemoComponent_mwl_calendar_week_view_25_Template, 2, 5, "mwl-calendar-week-view", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, DemoComponent_mwl_calendar_day_view_27_Template, 2, 4, "mwl-calendar-day-view", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\n");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.view);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "month");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "week");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "day");
          }
        },
        directives: [_demo_utils_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__.CalendarHeaderComponent, ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__.ContextMenuComponent, ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__.ContextMenuItemDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__.ContextMenuAttachDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_calendar_src_modules_common_calendar_tooltip_directive__WEBPACK_IMPORTED_MODULE_7__.CalendarTooltipDirective, _angular_calendar_src_modules_month_calendar_month_view_component__WEBPACK_IMPORTED_MODULE_8__.CalendarMonthViewComponent, _angular_calendar_src_modules_week_calendar_week_view_component__WEBPACK_IMPORTED_MODULE_9__.CalendarWeekViewComponent, _angular_calendar_src_modules_day_calendar_day_view_component__WEBPACK_IMPORTED_MODULE_10__.CalendarDayViewComponent],
        pipes: [_angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_11__.CalendarDatePipe, _angular_calendar_src_modules_common_calendar_event_title_pipe__WEBPACK_IMPORTED_MODULE_12__.CalendarEventTitlePipe],
        styles: [".fill-height[_ngcontent-%COMP%] {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: stretch;\n      }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQ007UUFDRSxPQUFPO1FBQ1AsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixvQkFBb0I7TUFDdEIiLCJmaWxlIjoiY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuZmlsbC1oZWlnaHQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIH1cbiAgICAiXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    56910: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DemoModule": function DemoModule() {
          return (
            /* binding */
            _DemoModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/calendar.module */
      3746);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-calendar */
      90008);
      /* harmony import */


      var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-contextmenu */
      6101);
      /* harmony import */


      var _demo_utils_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../demo-utils/module */
      57671);
      /* harmony import */


      var _component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./component */
      74118);
      /* harmony import */


      var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-calendar/date-adapters/date-fns */
      20789);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DemoModule = function _DemoModule() {
        _classCallCheck(this, _DemoModule);
      };

      _DemoModule.ɵfac = function DemoModule_Factory(t) {
        return new (t || _DemoModule)();
      };

      _DemoModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _DemoModule
      });
      _DemoModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule.forRoot({
          provide: angular_calendar__WEBPACK_IMPORTED_MODULE_3__.DateAdapter,
          useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_4__.adapterFactory
        }), ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__.ContextMenuModule.forRoot({
          useBootstrap4: true
        }), _demo_utils_module__WEBPACK_IMPORTED_MODULE_6__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild([{
          path: '',
          component: _component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_DemoModule, {
          declarations: [_component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, angular_calendar__WEBPACK_IMPORTED_MODULE_2__.CalendarModule, ngx_contextmenu__WEBPACK_IMPORTED_MODULE_5__.ContextMenuModule, _demo_utils_module__WEBPACK_IMPORTED_MODULE_6__.DemoUtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
          exports: [_component__WEBPACK_IMPORTED_MODULE_8__.DemoComponent]
        });
      })();
      /***/

    },

    /***/
    78767: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CalendarHeaderComponent": function CalendarHeaderComponent() {
          return (
            /* binding */
            _CalendarHeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-calendar */
      4606);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-previous-view.directive */
      31726);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-today.directive */
      22167);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-next-view.directive */
      60897);
      /* harmony import */


      var _angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../angular-calendar/src/modules/common/calendar-date.pipe */
      12153);

      var _CalendarHeaderComponent = function _CalendarHeaderComponent() {
        _classCallCheck(this, _CalendarHeaderComponent);

        this.locale = 'en';
        this.viewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.viewDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_1__.CalendarView;
      };

      _CalendarHeaderComponent.ɵfac = function CalendarHeaderComponent_Factory(t) {
        return new (t || _CalendarHeaderComponent)();
      };

      _CalendarHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _CalendarHeaderComponent,
        selectors: [["mwl-demo-utils-calendar-header"]],
        inputs: {
          view: "view",
          viewDate: "viewDate",
          locale: "locale"
        },
        outputs: {
          viewChange: "viewChange",
          viewDateChange: "viewDateChange"
        },
        decls: 43,
        vars: 16,
        consts: [[1, "row", "text-center"], [1, "col-md-4"], [1, "btn-group"], ["mwlCalendarPreviousView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], ["mwlCalendarToday", "", 1, "btn", "btn-outline-secondary", 3, "viewDate", "viewDateChange"], ["mwlCalendarNextView", "", 1, "btn", "btn-primary", 3, "view", "viewDate", "viewDateChange"], [1, "btn", "btn-primary", 3, "click"]],
        template: function CalendarHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_7_listener() {
              return ctx.viewDateChange.next(ctx.viewDate);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            Previous\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_10_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_10_listener() {
              return ctx.viewDateChange.next(ctx.viewDate);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n            Today\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_13_listener($event) {
              return ctx.viewDate = $event;
            })("viewDateChange", function CalendarHeaderComponent_Template_div_viewDateChange_13_listener() {
              return ctx.viewDateChange.next(ctx.viewDate);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n            Next\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "calendarDate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_29_listener() {
              return ctx.viewChange.emit(ctx.CalendarView.Month);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n            Month\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_32_listener() {
              return ctx.viewChange.emit(ctx.CalendarView.Week);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n            Week\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CalendarHeaderComponent_Template_div_click_35_listener() {
              return ctx.viewChange.emit(ctx.CalendarView.Day);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n            Day\n          ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\n        ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n      ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\n  ");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", ctx.view)("viewDate", ctx.viewDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](22, 12, ctx.viewDate, ctx.view + "ViewTitle", ctx.locale));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Month);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Week);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.view === ctx.CalendarView.Day);
          }
        },
        directives: [_angular_calendar_src_modules_common_calendar_previous_view_directive__WEBPACK_IMPORTED_MODULE_2__.CalendarPreviousViewDirective, _angular_calendar_src_modules_common_calendar_today_directive__WEBPACK_IMPORTED_MODULE_3__.CalendarTodayDirective, _angular_calendar_src_modules_common_calendar_next_view_directive__WEBPACK_IMPORTED_MODULE_4__.CalendarNextViewDirective],
        pipes: [_angular_calendar_src_modules_common_calendar_date_pipe__WEBPACK_IMPORTED_MODULE_5__.CalendarDatePipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    57671: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DemoUtilsModule": function DemoUtilsModule() {
          return (
            /* binding */
            _DemoUtilsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var angular_calendar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-calendar */
      3746);
      /* harmony import */


      var _calendar_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./calendar-header.component */
      78767);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _DemoUtilsModule = function _DemoUtilsModule() {
        _classCallCheck(this, _DemoUtilsModule);
      };

      _DemoUtilsModule.ɵfac = function DemoUtilsModule_Factory(t) {
        return new (t || _DemoUtilsModule)();
      };

      _DemoUtilsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _DemoUtilsModule
      });
      _DemoUtilsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_DemoUtilsModule, {
          declarations: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__.CalendarHeaderComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, angular_calendar__WEBPACK_IMPORTED_MODULE_3__.CalendarModule],
          exports: [_calendar_header_component__WEBPACK_IMPORTED_MODULE_4__.CalendarHeaderComponent]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_context-menu_module_ts-es5.js.map