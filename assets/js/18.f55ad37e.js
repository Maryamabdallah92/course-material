(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{336:function(e,t,a){},395:function(e,t,a){"use strict";var n=a(336);a.n(n).a},418:function(e,t,a){"use strict";a.r(t);a(165),a(300),a(388),a(92),a(9),a(62),a(93),a(24),a(389),a(29),a(391);var n=a(323),i=[],s={props:{rememberSelectedKey:String},data:function(){return{tabs:[],selectedTabId:""}},created:function(){this.tabs=this.$children,i.push(this)},destroyed:function(){i.splice(i.indexOf(this),1)},mounted:function(){var e=this.getSelectedTabIdFromQueryString();e&&this.doesTabWithIdExist(e)||(e=this.getSelectedTabIdFromLocalStorage()),e&&this.doesTabWithIdExist(e)||0<this.tabs.length&&(e=this.tabs[0].id),this.changeToTabWithId(e)},methods:{getSelectedTabIdFromQueryString:function(){return new URLSearchParams(window.location.search).get(this.rememberSelectedKey)},changeSelectedTabIdInQueryString:function(e){var t=window.location.hash,a=new URLSearchParams(window.location.search);a.set(this.rememberSelectedKey,e),history.replaceState({},"","?"+a.toString()+t)},getSelectedTabIdFromLocalStorage:function(){return window.localStorage[this.rememberSelectedKey]},changeSelectedTabIdInLocalStorage:function(e){window.localStorage[this.rememberSelectedKey]=e},doesTabWithIdExist:function(e){return this.tabs.some((function(t){return t.id==e}))},changeToTabWithId:function(e){this.changeSelectedTabIdInQueryString(e),this.changeSelectedTabIdInLocalStorage(e),this.changeToTabWithId2(e);var t,a=Object(n.a)(i);try{for(a.s();!(t=a.n()).done;){var s=t.value;s.rememberSelectedKey==this.rememberSelectedKey&&s.changeToTabWithId2(e)}}catch(e){a.e(e)}finally{a.f()}},changeToTabWithId2:function(e){var t,a=Object(n.a)(this.tabs);try{for(a.s();!(t=a.n()).done;){var i=t.value;i.isSelected=i.id==e}}catch(e){a.e(e)}finally{a.f()}this.selectedTabId=e}}},c=(a(395),a(40)),r=Object(c.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tabs-component"},[a("ul",{staticClass:"tabs-component-tabs",attrs:{role:"tablist"}},e._l(e.tabs,(function(t,n){return a("li",{key:n,staticClass:"tabs-component-tab",class:{"is-selected":t.isSelected},attrs:{role:"presentation"}},[a("a",{staticClass:"tabs-component-tab-a",attrs:{"aria-controls":t.id,"aria-selected":t.isSelected,role:"tab"},on:{click:function(a){return a.preventDefault(),e.changeToTabWithId(t.id)}}},[e._v(e._s(t.title))])])})),0),e._v(" "),a("div",{staticClass:"tabs-component-panels"},[e._t("default")],2)])}),[],!1,null,null,null);t.default=r.exports}}]);