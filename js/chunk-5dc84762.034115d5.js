(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dc84762"],{"485e":function(e,t,s){},6511:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("div",{staticClass:"home_menu"},e._l(e.menus,(function(s,n){return t("a",{key:n,staticClass:"home_menu_content",class:s.select?"home_menu_content_select":"",attrs:{href:s.pageId},on:{click:function(t){return e.onClickMenuBtn(s,n)}}})})),0),t("div",{ref:"down",staticClass:"mobile_down",on:{click:e.onClickNext}}),t("full-page",{ref:"fullpage",attrs:{options:e.options,id:"fullpage"}},[t("home-howWork",{staticClass:"section"}),t("home-about",{staticClass:"section"}),t("home-skillNFT",{staticClass:"section"}),t("home-mission",{staticClass:"section"}),t("home-token",{staticClass:"section"})],1)],1)},a=[],o={data(){return{menus:[{name:"howWork",select:!0,pageId:"#page1"},{name:"about",select:!1,pageId:"#page2"},{name:"skillNft",select:!1,pageId:"#page3"},{name:"mission",select:!1,pageId:"#page4"},{name:"token",select:!1,pageId:"#page5"}],options:{anchors:["page1","page2","page3","page4","page5"],onLeave:(e,t)=>{this.menus.map(e=>{e.pageId==="#"+t.anchor?e.select=!0:e.select=!1})},afterLoad:(e,t)=>{"page5"==t.anchor?this.$refs.down.style.display="none":this.$refs.down.style.display="block"},normalScrollElements:".introduction_content"}}},mounted(){},methods:{onClickMenuBtn(e,t){this.menus.map(t=>{t.name===e.name?t.select=!0:t.select=!1})},onClickNext(){this.$refs.fullpage.api.moveSectionDown()}}},c=o,i=(s("d20f"),s("2877")),l=Object(i["a"])(c,n,a,!1,null,"2b92ec90",null);t["default"]=l.exports},d20f:function(e,t,s){"use strict";s("485e")}}]);