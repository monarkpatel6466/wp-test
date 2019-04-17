/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
(function(){var a=wp.i18n.__,b=wp.blocks.registerBlockType,c=wp.element.Fragment,d=wp.editor,e=d.MediaUpload,f=d.AlignmentToolbar,g=d.InspectorControls,h=d.InnerBlocks,i=d.PanelColorSettings,j=d.BlockAlignmentToolbar,k=wp.components,l=k.PanelBody,m=k.TextControl,n=k.Button,o=k.SelectControl,p=k.RangeControl,q=k.ToggleControl,r=wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20px",height:"20px",viewBox:"0 0 612 612"},wp.element.createElement("g",null,wp.element.createElement("path",{d:"M1.659,484.737L1.001,206.595c-0.032-13.686,13.95-22.938,26.534-17.559l253.206,108.241c6.997,2.991,11.542,9.859,11.56,17.468l0.658,278.142c0.032,13.687-13.95,22.939-26.534,17.56L13.219,502.206C6.222,499.215,1.676,492.347,1.659,484.737z M581.805,219.687L348.142,320.883l0.608,257.406l233.664-101.196L581.805,219.687 M591.26,186.131c10.043-0.025,19.056,8.054,19.081,19.022l0.658,278.142c0.018,7.609-4.495,14.5-11.478,17.523l-252.69,109.438c-2.493,1.079-5.047,1.583-7.534,1.59c-10.044,0.023-19.058-8.055-19.083-19.022l-0.658-278.143c-0.019-7.609,4.495-14.5,11.479-17.523l252.69-109.437C586.218,186.64,588.771,186.137,591.26,186.131L591.26,186.131z M304.152,29.466L61.767,137.691l242.894,107.075l242.386-108.224L304.152,29.466 M304.083,0c2.632-0.006,5.266,0.533,7.728,1.618l266.403,117.439c15.112,6.663,15.163,28.088,0.082,34.821L312.451,272.577c-2.456,1.097-5.088,1.648-7.721,1.655c-2.632,0.006-5.266-0.533-7.728-1.618L30.6,155.175c-15.113-6.662-15.163-28.088-0.083-34.821L296.361,1.655C298.818,0.558,301.449,0.006,304.083,0L304.083,0z"})));/*
     **   Block:  Multi Purpose Block
     */b("md/multipurpose-block",{title:a("Multi Purpose Block"),description:a("Use one block containing multiple elements."),icon:r,category:"mdelement",attributes:{ElementTag:{type:"string",default:"div"},backgroundImage:{type:"string",default:""},backgroundColor:{type:"string",default:""},backgroundSize:{type:"boolean",default:!1},backgroundPosition:{type:"string",default:""},backgroundAttachment:{type:"boolean",default:!1},layout:{type:"string",default:""},borderStyle:{type:"string",default:""},borderWidth:{type:"number"},borderColor:{type:"string"},borderRadius:{type:"number"},topBorderStyle:{type:"string",default:""},topBorderWidth:{type:"number"},topBorderColor:{type:"string"},topBorderRadius:{type:"number"},bottomBorderStyle:{type:"string",default:""},bottomBorderWidth:{type:"number"},bottomBorderColor:{type:"string"},bottomBorderRadius:{type:"number"},rightBorderStyle:{type:"string",default:""},rightBorderWidth:{type:"number"},rightBorderColor:{type:"string"},rightBorderRadius:{type:"number"},leftBorderStyle:{type:"string",default:""},leftBorderWidth:{type:"number"},leftBorderColor:{type:"string"},leftBorderRadius:{type:"number"},blockAlign:{type:"string",default:"center"},textAlign:{type:"string",default:""},width:{type:"string",default:""},height:{type:"string",default:""},opacity:{type:"number",default:0},overlayColor:{type:"string"},paddingTop:{type:"string",default:""},paddingRight:{type:"string",default:""},paddingBottom:{type:"string",default:""},paddingLeft:{type:"string",default:""},marginTop:{type:"string",default:""},marginRight:{type:"string",default:""},marginBottom:{type:"string",default:""},marginLeft:{type:"string",default:""},gradientRange1:{type:"number",default:0},gradientRange2:{type:"number",default:0},gradientRange3:{type:"number",default:0},color1:{type:"string",default:"#fff"},color2:{type:"string",default:"#fff"},color3:{type:"string",default:"#fff"},gradientType:{type:"string",default:""}},edit:function qa(b){var d=b.attributes,k=b.setAttributes,r=b.className,s=d.backgroundImage,t=d.backgroundColor,u=d.backgroundSize,v=d.backgroundPosition,w=d.backgroundAttachment,x=d.layout,y=d.borderStyle,z=d.borderWidth,A=d.borderColor,B=d.borderRadius,C=d.blockAlign,D=d.textAlign,E=d.width,F=d.height,G=d.opacity,H=d.overlayColor,I=d.paddingTop,J=d.paddingRight,K=d.paddingBottom,L=d.paddingLeft,M=d.marginTop,N=d.marginRight,O=d.marginBottom,P=d.marginLeft,Q=d.gradientRange1,R=d.gradientRange2,S=d.gradientRange3,T=d.color1,U=d.color2,V=d.color3,W=d.gradientType,X=d.topBorderStyle,Y=d.topBorderWidth,Z=d.topBorderColor,$=d.topBorderRadius,_=d.bottomBorderStyle,aa=d.bottomBorderWidth,ba=d.bottomBorderColor,ca=d.bottomBorderRadius,da=d.rightBorderStyle,ea=d.rightBorderWidth,fa=d.rightBorderColor,ga=d.rightBorderRadius,ha=d.leftBorderStyle,ia=d.leftBorderWidth,ja=d.leftBorderColor,ka=d.leftBorderRadius,la=d.ElementTag,ma=function(a){var b=a.target.value,c=a.target.className;"components-button button has-tooltip active"===c&&k({layout:""}),"components-button button has-tooltip active"!==c&&k({layout:b?b:""})},na=function(a){k({ElementTag:a.target.value?a.target.value:"div"})},oa=__WEBPACK_IMPORTED_MODULE_0_classnames___default()(r,x&&"has-"+x,C&&"is-block-"+C,E&&"has-custom-width",{"has-background-size":u,"has-background-attachment":w,"has-background-opacity":0!==G},opacityRatioToClass(G)),pa={};return s&&(pa.backgroundImage="url("+s+")"),t&&(pa.backgroundColor=t),v&&(pa.backgroundPosition=v),D&&(pa.textAlign=D),E&&(pa.width=E+"%"),F&&(pa.height=F+"px"),H&&(pa.backgroundColor=H),I&&(pa.paddingTop=I+"px"),J&&(pa.paddingRight=J+"px"),K&&(pa.paddingBottom=K+"px"),L&&(pa.paddingLeft=L+"px"),M&&(pa.marginTop=M+"px"),N&&(pa.marginRight=N+"px"),O&&(pa.marginBottom=O+"px"),P&&(pa.marginLeft=P+"px"),W&&("#fff"!==T||"#fff"!==U||"#fff"!==V)&&(pa.background="linear-gradient("+W+", "+T+" "+Q+"%, "+U+" "+R+"%, "+V+" "+S+"%)"),M&&(pa.marginTop=M+"px"),y?(pa.borderStyle=y,z&&(pa.borderWidth=z+"px"),A&&(pa.borderColor=A),B&&(pa.borderRadius=B)):(X&&(pa.borderTopStyle=X,Y&&(pa.borderTopWidth=Y+"px"),Z&&(pa.borderTopColor=Z),$&&(pa.borderTopLeftRadius=$)),_&&(pa.borderBottomStyle=_,aa&&(pa.borderBottomWidth=aa+"px"),ba&&(pa.borderBottomColor=ba),ca&&(pa.borderBottomRightRadius=ca)),da&&(pa.borderRightStyle=da,ea&&(pa.borderRightWidth=ea+"px"),fa&&(pa.borderRightColor=fa),ga&&(pa.borderTopRightRadius=ga)),ha&&(pa.borderLeftStyle=ha,ia&&(pa.borderLeftWidth=ia+"px"),ja&&(pa.borderLeftColor=ja),ka&&(pa.borderBottomLeftRadius=ka))),[wp.element.createElement(g,null,wp.element.createElement("div",{className:"custom-inspactor-setting"},wp.element.createElement(l,{title:a("Page Tag settings "),initialOpen:!1},wp.element.createElement(n,{className:"header"===la?"button has-tooltip active":"button has-tooltip",onClick:na,value:"header"},a("Header")),wp.element.createElement(n,{className:"section"===la?"button has-tooltip active":"button has-tooltip",onClick:na,value:"section"},a("Section"))),wp.element.createElement(l,{title:a("Page layout settings "),initialOpen:!1},wp.element.createElement(n,{className:"fixed"===x?"button has-tooltip active":"button has-tooltip",onClick:ma,"data-tooltip":"This layout is for fixed width (width:1200px).",value:"fixed"},a("Fixed")),wp.element.createElement(n,{className:"semi"===x?"button has-tooltip active":"button has-tooltip",onClick:ma,"data-tooltip":"This layout is for Semi width (width:85%).",value:"semi"},a("Semi"))),wp.element.createElement(l,{title:a("Background Setting"),initialOpen:!1},wp.element.createElement(l,{title:a("Background Image"),initialOpen:!1},wp.element.createElement(e,{onSelect:function b(a){return k({backgroundImage:a.sizes.full.url?a.sizes.full.url:"",backgroundColor:""})},type:"image",value:s,render:function d(b){var c=b.open;return wp.element.createElement(n,{className:s?"image-button":"button button-large",onClick:c},s?wp.element.createElement("div",{style:{backgroundImage:"url("+s+")",backgroundSize:"cover",backgroundPosition:"center",height:"150px",width:"225px"}}):a("Upload Image"))}}),s?wp.element.createElement(n,{className:"button",onClick:function a(){return k({backgroundImage:"",overlayColor:""})}},a("Remove Background Image")):null,s&&wp.element.createElement(c,null,wp.element.createElement("br",null),wp.element.createElement("br",null),wp.element.createElement(q,{label:wp.element.createElement("p",null,wp.element.createElement("strong",null,a("Background Size")),wp.element.createElement("br",null),a("ON - Set background size \"Cover\"")),checked:u,onChange:function a(){return k({backgroundSize:!u})}}),wp.element.createElement(q,{label:wp.element.createElement("p",null,wp.element.createElement("strong",null,a("background Attachment")),wp.element.createElement("br",null),a("ON - Set background attachment \"Fixed\" ")),checked:w,onChange:function a(){return k({backgroundAttachment:!w})}}),wp.element.createElement(o,{label:a("Select Position"),value:v,options:[{label:a("Bottom"),value:"bottom"},{label:a("Center"),value:"center"},{label:a("Inherit"),value:"inherit"},{label:a("Initial"),value:"initial"},{label:a("Left"),value:"left"},{label:a("Right"),value:"right"},{label:a("Top"),value:"top"},{label:a("Unset"),value:"unset"}],onChange:function b(a){return k({backgroundPosition:a})}}))),s&&wp.element.createElement(c,null,wp.element.createElement(i,{title:a("Overlay"),initialOpen:!1,colorSettings:[{value:H,onChange:function b(a){return k({overlayColor:a})},label:a("Overlay Color")}]},wp.element.createElement(p,{label:a("Background Opacity"),value:G,onChange:function b(a){return k({opacity:a})},min:0,max:100,step:10}))),wp.element.createElement(i,{title:a("Background Color"),initialOpen:!1,colorSettings:[{label:a(""),value:t,onChange:function b(a){return k({backgroundColor:a?a:"",opacity:0})}}]}),wp.element.createElement(l,{title:a("Gradient Background"),initialOpen:!1,className:"gredient-setting"},wp.element.createElement(o,{label:a("Select Gradient Type"),value:W,options:[{label:a("Select Type"),value:""},{label:a("bottom"),value:"to bottom"},{label:a("Top"),value:"to top"},{label:a("Right"),value:"to right"},{label:a("Left"),value:"to left"},{label:a("Top Left"),value:"to top left"},{label:a("Bottom Left"),value:"to bottom left"},{label:a("Top Right"),value:"to top right"},{label:a("Bottom Right"),value:"to bottom right"}],onChange:function b(a){return k({gradientType:a})}}),W&&wp.element.createElement(c,null,wp.element.createElement("h3",null,a("Gradient Fill 1")),wp.element.createElement(i,{className:"gradientcolor",initialOpen:!0,colorSettings:[{label:a("Color"),value:T,onChange:function b(a){return k({color1:a?a:"#fff"})}}]}),wp.element.createElement(p,{label:a("Range"),value:Q,min:"0",max:"100",step:"10",onChange:function b(a){return k({gradientRange1:a})}}),wp.element.createElement("h3",null,a("Gradient Fill 2")),wp.element.createElement(i,{className:"gradientcolor",title:a("Color"),initialOpen:!0,colorSettings:[{label:a("Color"),value:U,onChange:function b(a){return k({color2:a?a:"#fff"})}}]}),wp.element.createElement(p,{label:a("Range"),value:R,min:"0",max:"100",step:"10",onChange:function b(a){return k({gradientRange2:a?a:0})}}),wp.element.createElement("h3",null,a("Gradient Fill 3")),wp.element.createElement(i,{className:"gradientcolor",title:a("Color"),initialOpen:!0,colorSettings:[{label:a("Color"),value:V,onChange:function b(a){return k({color3:a?a:"#fff"})}}]}),wp.element.createElement(p,{label:a("Range"),value:S,min:"0",max:"100",step:"10",onChange:function b(a){return k({gradientRange3:a?a:0})}})))),wp.element.createElement(l,{title:a("Border Setting"),initialOpen:!1,className:"border-setting"},wp.element.createElement(l,{title:a("All Border"),initialOpen:!1},wp.element.createElement(o,{label:a("Select Border Style"),value:y,options:[{label:a("Select Style"),value:""},{label:a("Solid"),value:"solid"},{label:a("Dashed"),value:"dashed"},{label:a("Dotted"),value:"dotted"}],onChange:function b(a){return k({borderStyle:a})}}),y&&wp.element.createElement(c,null,wp.element.createElement(i,{className:"bordercolor",title:a("Border Color"),initialOpen:!0,colorSettings:[{label:a("Border Color"),value:A,onChange:function b(a){return k({borderColor:a})}}]}),wp.element.createElement(p,{label:a("Border width"),value:z?z:0,min:0,max:10,onChange:function b(a){return k({borderWidth:a})}}),wp.element.createElement(p,{label:a("Border radius"),value:B?B:0,min:0,max:100,onChange:function b(a){return k({borderRadius:a})}}))),!y&&wp.element.createElement(l,{title:a("Top Border"),initialOpen:!1},wp.element.createElement(o,{label:a("Select Border Style"),value:X,options:[{label:a("Select Style"),value:""},{label:a("Solid"),value:"solid"},{label:a("Dashed"),value:"dashed"},{label:a("Dotted"),value:"dotted"}],onChange:function b(a){return k({topBorderStyle:a})}}),X&&wp.element.createElement(c,null,wp.element.createElement(i,{className:"bordercolor",title:a("Border Color"),initialOpen:!0,colorSettings:[{label:a("Border Color"),value:Z,onChange:function b(a){return k({topBorderColor:a})}}]}),wp.element.createElement(p,{label:a("Border width"),value:Y?Y:0,min:0,max:10,onChange:function b(a){return k({topBorderWidth:a})}}),wp.element.createElement(p,{label:a("Border radius"),value:$?$:0,min:0,max:100,onChange:function b(a){return k({topBorderRadius:a})}}))),!y&&wp.element.createElement(l,{title:a("Right Border"),initialOpen:!1},wp.element.createElement(o,{label:a("Select Border Style"),value:da,options:[{label:a("Select Style"),value:""},{label:a("Solid"),value:"solid"},{label:a("Dashed"),value:"dashed"},{label:a("Dotted"),value:"dotted"}],onChange:function b(a){return k({rightBorderStyle:a})}}),da&&wp.element.createElement(c,null,wp.element.createElement(i,{className:"bordercolor",title:a("Border Color"),initialOpen:!0,colorSettings:[{label:a("Border Color"),value:fa,onChange:function b(a){return k({rightBorderColor:a})}}]}),wp.element.createElement(p,{label:a("Border width"),value:ea?ea:0,min:0,max:10,onChange:function b(a){return k({rightBorderWidth:a})}}),wp.element.createElement(p,{label:a("Border radius"),value:ga?ga:0,min:0,max:100,onChange:function b(a){return k({rightBorderRadius:a})}}))),!y&&wp.element.createElement(l,{title:a("Bottom Border"),initialOpen:!1},wp.element.createElement(o,{label:a("Border Style"),value:_,options:[{label:a("Select Style"),value:""},{label:a("Solid"),value:"solid"},{label:a("Dashed"),value:"dashed"},{label:a("Dotted"),value:"dotted"}],onChange:function b(a){return k({bottomBorderStyle:a})}}),_&&wp.element.createElement(c,null,wp.element.createElement(i,{className:"bordercolor",title:a("Border Color"),initialOpen:!0,colorSettings:[{label:a("Border Color"),value:ba,onChange:function b(a){return k({bottomBorderColor:a})}}]}),wp.element.createElement(p,{label:a("Border width"),value:aa?aa:0,min:0,max:10,onChange:function b(a){return k({bottomBorderWidth:a})}}),wp.element.createElement(p,{label:a("Border radius"),value:ca?ca:0,min:0,max:100,onChange:function b(a){return k({bottomBorderRadius:a})}}))),!y&&wp.element.createElement(l,{title:a("Left Border"),initialOpen:!1},wp.element.createElement(o,{label:a("Select Border Style"),value:ha,options:[{label:a("Select Style"),value:""},{label:a("Solid"),value:"solid"},{label:a("Dashed"),value:"dashed"},{label:a("Dotted"),value:"dotted"}],onChange:function b(a){return k({leftBorderStyle:a})}}),ha&&wp.element.createElement(c,null,wp.element.createElement(i,{title:a("Border Color"),initialOpen:!0,colorSettings:[{label:a("Border Color"),value:ja,onChange:function b(a){return k({leftBorderColor:a})}}]}),wp.element.createElement(p,{label:a("Border width"),value:ia?ia:0,min:1,max:10,onChange:function b(a){return k({leftBorderWidth:a})}}),wp.element.createElement(p,{label:a("Border radius"),value:ka?ka:0,min:0,max:100,onChange:function b(a){return k({leftBorderRadius:a})}})))),wp.element.createElement(l,{title:a("General Setting"),initialOpen:!1},wp.element.createElement("div",{className:"alignment-settings"},wp.element.createElement("div",{className:"alignment-wrapper"},wp.element.createElement(m,{label:"Width",type:"number",placeHolder:"Width (%)",value:E,min:"1",max:"100",step:"1",onChange:function b(a){return k({width:a})}})),wp.element.createElement("div",{className:"alignment-wrapper"},wp.element.createElement(m,{label:"Height",type:"number",min:"1",placeHolder:"Height (px)",value:F,onChange:function b(a){return k({height:a})}}))),wp.element.createElement("p",null,"Padding Setting (px)"),wp.element.createElement("div",{class:"padding-setting"},wp.element.createElement("div",{className:"padding-top has-tooltip","data-tooltip":"Padding Top"},wp.element.createElement(m,{type:"number",min:"1",value:I,onChange:function b(a){return k({paddingTop:a})}})),wp.element.createElement("div",{className:"padding-right has-tooltip","data-tooltip":"Padding Right"},wp.element.createElement(m,{type:"number",min:"1",value:J,onChange:function b(a){return k({paddingRight:a})}})),wp.element.createElement("div",{className:"padding-bottom has-tooltip","data-tooltip":"Padding Bottom"},wp.element.createElement(m,{type:"number",min:"1",value:K,onChange:function b(a){return k({paddingBottom:a})}})),wp.element.createElement("div",{className:"padding-left has-tooltip","data-tooltip":"Padding Left"},wp.element.createElement(m,{type:"number",min:"1",value:L,onChange:function b(a){return k({paddingLeft:a})}}))),wp.element.createElement("p",null,"Margin Setting (px)"),wp.element.createElement("div",{class:"margin-setting"},wp.element.createElement("div",{className:"margin-top has-tooltip","data-tooltip":"Margin Top"},wp.element.createElement(m,{type:"number",value:M,onChange:function b(a){return k({marginTop:a})}})),wp.element.createElement("div",{className:"margin-right has-tooltip","data-tooltip":"Margin Right"},wp.element.createElement(m,{type:"number",value:N,onChange:function b(a){return k({marginRight:a})}})),wp.element.createElement("div",{className:"margin-bottom has-tooltip","data-tooltip":"Margin Bottom"},wp.element.createElement(m,{type:"number",value:O,onChange:function b(a){return k({marginBottom:a})}})),wp.element.createElement("div",{className:"margin-left has-tooltip","data-tooltip":"Margin Left"},wp.element.createElement(m,{type:"number",value:P,onChange:function b(a){return k({marginLeft:a})}}))),wp.element.createElement("div",{className:"block-text-alignment-settings"},wp.element.createElement("div",{className:"alignment-wrapper"},wp.element.createElement("p",null,"Block Alignment"),wp.element.createElement(j,{value:C,onChange:function b(a){return k({blockAlign:a})}})),wp.element.createElement("div",{className:"alignment-wrapper"},wp.element.createElement("p",null,"Text Alignment"),wp.element.createElement(f,{value:D,onChange:function b(a){return k({textAlign:a})}})))))),wp.element.createElement(la,{className:oa,style:pa},wp.element.createElement(h,null))]},save:function aa(a){var b=a.attributes,c=a.className,d=b.backgroundImage,e=b.backgroundColor,f=b.backgroundSize,g=b.backgroundPosition,i=b.backgroundAttachment,j=b.layout,k=b.borderStyle,l=b.borderWidth,m=b.borderColor,n=b.borderRadius,o=b.blockAlign,p=b.textAlign,q=b.width,r=b.height,s=b.opacity,t=b.overlayColor,u=b.paddingTop,v=b.paddingRight,w=b.paddingBottom,x=b.paddingLeft,y=b.marginTop,z=b.marginRight,A=b.marginBottom,B=b.marginLeft,C=b.gradientRange1,D=b.gradientRange2,E=b.gradientRange3,F=b.color1,G=b.color2,H=b.color3,I=b.gradientType,J=b.topBorderStyle,K=b.topBorderWidth,L=b.topBorderColor,M=b.topBorderRadius,N=b.bottomBorderStyle,O=b.bottomBorderWidth,P=b.bottomBorderColor,Q=b.bottomBorderRadius,R=b.rightBorderStyle,S=b.rightBorderWidth,T=b.rightBorderColor,U=b.rightBorderRadius,V=b.leftBorderStyle,W=b.leftBorderWidth,X=b.leftBorderColor,Y=b.leftBorderRadius,Z=b.ElementTag,$=__WEBPACK_IMPORTED_MODULE_0_classnames___default()(c,j&&"has-"+j,o&&"is-block-"+o,q&&"has-custom-width",{"has-background-size":f,"has-background-attachment":i,"has-background-opacity":0!==s},opacityRatioToClass(s)),_={};return d&&(_.backgroundImage="url("+d+")"),e&&(_.backgroundColor=e),g&&(_.backgroundPosition=g),p&&(_.textAlign=p),q&&(_.width=q+"%"),r&&(_.height=r+"px"),t&&(_.backgroundColor=t),u&&(_.paddingTop=u+"px"),v&&(_.paddingRight=v+"px"),w&&(_.paddingBottom=w+"px"),x&&(_.paddingLeft=x+"px"),y&&(_.marginTop=y+"px"),z&&(_.marginRight=z+"px"),A&&(_.marginBottom=A+"px"),B&&(_.marginLeft=B+"px"),I&&("#fff"!==F||"#fff"!==G||"#fff"!==H)&&(_.background="linear-gradient("+I+", "+F+" "+C+"%, "+G+" "+D+"%, "+H+" "+E+"%)"),y&&(_.marginTop=y+"px"),k?(_.borderStyle=k,l&&(_.borderWidth=l+"px"),m&&(_.borderColor=m),n&&(_.borderRadius=n)):(J&&(_.borderTopStyle=J,K&&(_.borderTopWidth=K+"px"),L&&(_.borderTopColor=L),M&&(_.borderTopLeftRadius=M)),N&&(_.borderBottomStyle=N,O&&(_.borderBottomWidth=O+"px"),P&&(_.borderBottomColor=P),Q&&(_.borderBottomRightRadius=Q)),R&&(_.borderRightStyle=R,S&&(_.borderRightWidth=S+"px"),T&&(_.borderRightColor=T),U&&(_.borderTopRightRadius=U)),V&&(_.borderLeftStyle=V,W&&(_.borderLeftWidth=W+"px"),X&&(_.borderLeftColor=X),Y&&(_.borderBottomLeftRadius=Y))),wp.element.createElement(Z,{className:$,style:_},wp.element.createElement(h.Content,null))}})})(window.wp.blocks,window.wp.i18n,window.wp.element,window.wp.editor,window.wp.components);function opacityRatioToClass(a){return 0===a?null:"has-background-opacity-"+10*Math.round(a/10)}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ })
/******/ ]);