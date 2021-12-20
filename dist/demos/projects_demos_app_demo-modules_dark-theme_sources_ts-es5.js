(function () {
  "use strict";

  (self["webpackChunkangular_calendar"] = self["webpackChunkangular_calendar"] || []).push([["projects_demos_app_demo-modules_dark-theme_sources_ts"], {
    /***/
    57263: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "sources": function sources() {
          return (
            /* binding */
            _sources
          );
        }
        /* harmony export */

      });

      var _sources = [{
        filename: 'component.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./component */
          81403),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./component */
          13286)
        }
      }, {
        filename: 'template.html',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./template.html */
          35297),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=xml!./template.html */
          23863)
        }
      }, {
        filename: 'styles.scss',
        contents: {
          raw: {
            "default": __webpack_require__(
            /*! !!raw-loader!./styles.scss */
            16422)["default"].replace('../../../../angular-calendar/src/angular-calendar.scss', '~angular-calendar/scss/angular-calendar.scss')
          },
          highlighted: {
            "default": __webpack_require__(
            /*! !!raw-loader!highlightjs-loader?lang=scss!./styles.scss */
            22026)["default"].replace('../../../../angular-calendar/src/angular-calendar.scss', '~angular-calendar/scss/angular-calendar.scss')
          }
        }
      }, {
        filename: 'module.ts',
        contents: {
          raw: __webpack_require__(
          /*! !!raw-loader!./module */
          26035),
          highlighted: __webpack_require__(
          /*! !!raw-loader!highlightjs-loader?lang=typescript!./module */
          15224)
        }
      }];
      /***/
    },

    /***/
    13286: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> {\n  ChangeDetectionStrategy,\n  Component,\n  Inject,\n  OnDestroy,\n  OnInit,\n  ViewEncapsulation,\n} from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarEvent, CalendarView } from <span class=\"hljs-string\">'angular-calendar'</span>;\n\n<span class=\"hljs-keyword\">import</span> { colors } from <span class=\"hljs-string\">'../demo-utils/colors'</span>;\n<span class=\"hljs-keyword\">import</span> { DOCUMENT } from <span class=\"hljs-string\">'@angular/common'</span>;\n\n@Component({\n  selector: <span class=\"hljs-string\">'mwl-demo-component'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class=\"hljs-string\">'template.html'</span>,\n  styleUrls: [<span class=\"hljs-string\">'styles.scss'</span>],\n  encapsulation: ViewEncapsulation.None,\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoComponent <span class=\"hljs-keyword\">implements</span> OnInit, OnDestroy {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate = <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>();\n\n  events: CalendarEvent[] = [\n    {\n      title: <span class=\"hljs-string\">'An event'</span>,\n      start: <span class=\"hljs-keyword\">new</span> <span class=\"hljs-built_in\">Date</span>(),\n      color: colors.red,\n    },\n  ];\n\n  <span class=\"hljs-keyword\">private</span> readonly darkThemeClass = <span class=\"hljs-string\">'dark-theme'</span>;\n\n  <span class=\"hljs-constructor\"><span class=\"hljs-keyword\">constructor</span>(@Inject(DOCUMENT) private document) </span>{}\n\n  ngOnInit(): <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-keyword\">this</span>.document.body.classList.add(<span class=\"hljs-keyword\">this</span>.darkThemeClass);\n  }\n\n  ngOnDestroy(): <span class=\"hljs-built_in\">void</span> {\n    <span class=\"hljs-keyword\">this</span>.document.body.classList.remove(<span class=\"hljs-keyword\">this</span>.darkThemeClass);\n  }\n}\n";
      /***/
    },

    /***/
    15224: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-keyword\">import</span> { NgModule } from <span class=\"hljs-string\">'@angular/core'</span>;\n<span class=\"hljs-keyword\">import</span> { CommonModule } from <span class=\"hljs-string\">'@angular/common'</span>;\n<span class=\"hljs-keyword\">import</span> { RouterModule } from <span class=\"hljs-string\">'@angular/router'</span>;\n<span class=\"hljs-keyword\">import</span> { CalendarModule, DateAdapter } from <span class=\"hljs-string\">'angular-calendar'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoUtilsModule } from <span class=\"hljs-string\">'../demo-utils/module'</span>;\n<span class=\"hljs-keyword\">import</span> { DemoComponent } from <span class=\"hljs-string\">'./component'</span>;\n<span class=\"hljs-keyword\">import</span> { adapterFactory } from <span class=\"hljs-string\">'angular-calendar/date-adapters/date-fns'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class=\"hljs-string\">''</span>, component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\n<span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">class</span> DemoModule {}\n";
      /***/
    },

    /***/
    23863: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span> [(<span class=\"hljs-attribute\">view</span>)]=<span class=\"hljs-value\">\"view\"</span> [(<span class=\"hljs-attribute\">viewDate</span>)]=<span class=\"hljs-value\">\"viewDate\"</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">div</span> [<span class=\"hljs-attribute\">ngSwitch</span>]=<span class=\"hljs-value\">\"view\"</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-month-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'month'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n    [<span class=\"hljs-attribute\">activeDayIsOpen</span>]=<span class=\"hljs-value\">\"true\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-month-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-week-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'week'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-week-view</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-title\">mwl-calendar-day-view</span>\n    *<span class=\"hljs-attribute\">ngSwitchCase</span>=<span class=\"hljs-value\">\"'day'\"</span>\n    [<span class=\"hljs-attribute\">viewDate</span>]=<span class=\"hljs-value\">\"viewDate\"</span>\n    [<span class=\"hljs-attribute\">events</span>]=<span class=\"hljs-value\">\"events\"</span>\n  &gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">mwl-calendar-day-view</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-title\">div</span>&gt;</span>\n";
      /***/
    },

    /***/
    81403: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import {\n  ChangeDetectionStrategy,\n  Component,\n  Inject,\n  OnDestroy,\n  OnInit,\n  ViewEncapsulation,\n} from '@angular/core';\nimport { CalendarEvent, CalendarView } from 'angular-calendar';\n\nimport { colors } from '../demo-utils/colors';\nimport { DOCUMENT } from '@angular/common';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html',\n  styleUrls: ['styles.scss'],\n  encapsulation: ViewEncapsulation.None,\n})\nexport class DemoComponent implements OnInit, OnDestroy {\n  view: CalendarView = CalendarView.Month;\n\n  viewDate = new Date();\n\n  events: CalendarEvent[] = [\n    {\n      title: 'An event',\n      start: new Date(),\n      color: colors.red,\n    },\n  ];\n\n  private readonly darkThemeClass = 'dark-theme';\n\n  constructor(@Inject(DOCUMENT) private document) {}\n\n  ngOnInit(): void {\n    this.document.body.classList.add(this.darkThemeClass);\n  }\n\n  ngOnDestroy(): void {\n    this.document.body.classList.remove(this.darkThemeClass);\n  }\n}\n";
      /***/
    },

    /***/
    26035: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule, DateAdapter } from 'angular-calendar';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\nimport { adapterFactory } from 'angular-calendar/date-adapters/date-fns';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot({\n      provide: DateAdapter,\n      useFactory: adapterFactory,\n    }),\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }]),\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent],\n})\nexport class DemoModule {}\n";
      /***/
    },

    /***/
    35297: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mwl-demo-utils-calendar-header [(view)]=\"view\" [(viewDate)]=\"viewDate\">\n</mwl-demo-utils-calendar-header>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [activeDayIsOpen]=\"true\"\n  >\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n  >\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n  >\n  </mwl-calendar-day-view>\n</div>\n";
      /***/
    },

    /***/
    22026: function _(module) {
      module.exports = "export default \"<span class=\\\"hljs-at_rule\\\">@<span class=\\\"hljs-keyword\\\">import</span> <span class=\\\"hljs-string\\\">'../../../../angular-calendar/src/angular-calendar.scss'</span>;</span>\\n\\n<span class=\\\"hljs-class\\\">.dark-theme</span> {\\n  <span class=\\\"hljs-comment\\\">// First define some global color variables for your app, these are just for the demo, they can be anything you like</span>\\n  <span class=\\\"hljs-variable\\\">$bg-dark-primary</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-hexcolor\\\">#1f262d</span>;</span>\\n  <span class=\\\"hljs-variable\\\">$bg-dark-secondary</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-hexcolor\\\">#394046</span>;</span>\\n  <span class=\\\"hljs-variable\\\">$bg-active</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-hexcolor\\\">#2c343a</span>;</span>\\n  <span class=\\\"hljs-variable\\\">$text-color</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-hexcolor\\\">#d5d6d7</span>;</span>\\n  <span class=\\\"hljs-variable\\\">$border-color</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-function\\\">rgba</span>(<span class=\\\"hljs-number\\\">0</span>, <span class=\\\"hljs-number\\\">0</span>, <span class=\\\"hljs-number\\\">0</span>, <span class=\\\"hljs-number\\\">0.6</span>);</span>\\n\\n  <span class=\\\"hljs-comment\\\">// Call the calendar mixin with a sass color map of your theme. Every property is optional.</span>\\n  <span class=\\\"hljs-comment\\\">// For a list of all variables and how they are used,</span>\\n  <span class=\\\"hljs-comment\\\">// see https://github.com/mattlewis92/angular-calendar/tree/master/projects/angular-calendar/src/variables.scss</span>\\n  <span class=\\\"hljs-at_rule\\\">@<span class=\\\"hljs-keyword\\\">include</span><span class=\\\"hljs-preprocessor\\\"> cal-theme</span>(\\n    (\\n     <span class=\\\"hljs-preprocessor\\\"> bg-primary</span>: <span class=\\\"hljs-variable\\\">$bg-dark-primary</span>,\\n     <span class=\\\"hljs-preprocessor\\\"> bg-secondary</span>: <span class=\\\"hljs-variable\\\">$bg-dark-secondary</span>,\\n     <span class=\\\"hljs-preprocessor\\\"> weekend-color</span>:<span class=\\\"hljs-preprocessor\\\"> indianred</span>,\\n     <span class=\\\"hljs-preprocessor\\\"> bg-active</span>: <span class=\\\"hljs-variable\\\">$bg-active</span>,\\n     <span class=\\\"hljs-preprocessor\\\"> border-color</span>: <span class=\\\"hljs-variable\\\">$border-color</span>,\\n     <span class=\\\"hljs-preprocessor\\\"> gray</span>: <span class=\\\"hljs-variable\\\">$bg-dark-secondary</span>,\\n     <span class=\\\"hljs-preprocessor\\\"> today-bg</span>: <span class=\\\"hljs-variable\\\">$bg-dark-secondary</span>,\\n     <span class=\\\"hljs-preprocessor\\\"> event-color-primary</span>: <span class=\\\"hljs-variable\\\">$bg-dark-secondary</span>,\\n    )\\n  );</span>\\n\\n  <span class=\\\"hljs-comment\\\">// How to override a non themable property, this was copied from chrome -&gt; inspect element -&gt; styles panel</span>\\n  <span class=\\\"hljs-class\\\">.cal-month-view</span> <span class=\\\"hljs-class\\\">.cal-day-cell</span><span class=\\\"hljs-class\\\">.cal-out-month</span> <span class=\\\"hljs-class\\\">.cal-day-number</span> {\\n    <span class=\\\"hljs-attribute\\\">opacity</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-number\\\">0.15</span>;</span>\\n  }\\n\\n  <span class=\\\"hljs-comment\\\">// Everything else below is just themes the demo, it's probably not relevant to your app</span>\\n  <span class=\\\"hljs-attribute\\\">background-color</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-variable\\\">$bg-dark-primary</span>;</span>\\n  <span class=\\\"hljs-attribute\\\">color</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-variable\\\">$text-color</span>;</span>\\n\\n  <span class=\\\"hljs-class\\\">.card</span> {\\n    <span class=\\\"hljs-attribute\\\">border-color</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-variable\\\">$border-color</span>;</span>\\n  }\\n\\n  <span class=\\\"hljs-class\\\">.card-header</span> {\\n    <span class=\\\"hljs-attribute\\\">background-color</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-variable\\\">$bg-dark-secondary</span>;</span>\\n  }\\n\\n  <span class=\\\"hljs-class\\\">.card-body</span> {\\n    <span class=\\\"hljs-attribute\\\">background-color</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-variable\\\">$bg-dark-primary</span>;</span>\\n  }\\n\\n  <span class=\\\"hljs-class\\\">.nav-tabs</span> {\\n    <span class=\\\"hljs-attribute\\\">border-bottom-color</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-variable\\\">$border-color</span>;</span>\\n  }\\n\\n  <span class=\\\"hljs-class\\\">.nav-tabs</span> <span class=\\\"hljs-class\\\">.nav-link</span><span class=\\\"hljs-class\\\">.active</span> {\\n    <span class=\\\"hljs-attribute\\\">background-color</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-variable\\\">$bg-dark-primary</span>;</span>\\n    <span class=\\\"hljs-attribute\\\">color</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-variable\\\">$text-color</span>;</span>\\n    <span class=\\\"hljs-attribute\\\">border-color</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-variable\\\">$border-color</span>;</span>\\n  }\\n\\n  <span class=\\\"hljs-class\\\">.nav-tabs</span> <span class=\\\"hljs-class\\\">.nav-link</span><span class=\\\"hljs-pseudo\\\">:hover</span>,\\n  <span class=\\\"hljs-class\\\">.nav-tabs</span> <span class=\\\"hljs-class\\\">.nav-link</span><span class=\\\"hljs-pseudo\\\">:focus</span> {\\n    <span class=\\\"hljs-attribute\\\">border-color</span><span class=\\\"hljs-value\\\">: <span class=\\\"hljs-variable\\\">$border-color</span>;</span>\\n  }\\n}\\n\";";
      /***/
    },

    /***/
    16422: function _(module) {
      module.exports = "export default \"@import '../../../../angular-calendar/src/angular-calendar.scss';\\n\\n.dark-theme {\\n  // First define some global color variables for your app, these are just for the demo, they can be anything you like\\n  $bg-dark-primary: #1f262d;\\n  $bg-dark-secondary: #394046;\\n  $bg-active: #2c343a;\\n  $text-color: #d5d6d7;\\n  $border-color: rgba(0, 0, 0, 0.6);\\n\\n  // Call the calendar mixin with a sass color map of your theme. Every property is optional.\\n  // For a list of all variables and how they are used,\\n  // see https://github.com/mattlewis92/angular-calendar/tree/master/projects/angular-calendar/src/variables.scss\\n  @include cal-theme(\\n    (\\n      bg-primary: $bg-dark-primary,\\n      bg-secondary: $bg-dark-secondary,\\n      weekend-color: indianred,\\n      bg-active: $bg-active,\\n      border-color: $border-color,\\n      gray: $bg-dark-secondary,\\n      today-bg: $bg-dark-secondary,\\n      event-color-primary: $bg-dark-secondary,\\n    )\\n  );\\n\\n  // How to override a non themable property, this was copied from chrome -> inspect element -> styles panel\\n  .cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\\n    opacity: 0.15;\\n  }\\n\\n  // Everything else below is just themes the demo, it's probably not relevant to your app\\n  background-color: $bg-dark-primary;\\n  color: $text-color;\\n\\n  .card {\\n    border-color: $border-color;\\n  }\\n\\n  .card-header {\\n    background-color: $bg-dark-secondary;\\n  }\\n\\n  .card-body {\\n    background-color: $bg-dark-primary;\\n  }\\n\\n  .nav-tabs {\\n    border-bottom-color: $border-color;\\n  }\\n\\n  .nav-tabs .nav-link.active {\\n    background-color: $bg-dark-primary;\\n    color: $text-color;\\n    border-color: $border-color;\\n  }\\n\\n  .nav-tabs .nav-link:hover,\\n  .nav-tabs .nav-link:focus {\\n    border-color: $border-color;\\n  }\\n}\\n\";";
      /***/
    }
  }]);
})();
//# sourceMappingURL=projects_demos_app_demo-modules_dark-theme_sources_ts-es5.js.map