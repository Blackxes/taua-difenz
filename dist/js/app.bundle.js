!function(t){function n(n){for(var r,a,c=n[0],l=n[1],f=n[2],s=0,d=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);for(u&&u(n);d.length;)d.shift()();return i.push.apply(i,f||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,c=1;c<e.length;c++){var l=e[c];0!==o[l]&&(r=!1)}r&&(i.splice(n--,1),t=a(a.s=e[0]))}return t}var r={},o={0:0},i=[];function a(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.e=function(t){var n=[],e=o[t];if(0!==e)if(e)n.push(e[2]);else{var r=new Promise((function(n,r){e=o[t]=[n,r]}));n.push(e[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(t){return a.p+"js/"+({}[t]||t)+".bundle.js"}(t);var l=new Error;i=function(n){c.onerror=c.onload=null,clearTimeout(f);var e=o[t];if(0!==e){if(e){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,e[1](l)}o[t]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(n)},a.m=t,a.c=r,a.d=function(t,n,e){a.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,n){if(1&n&&(t=a(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(a.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)a.d(e,r,function(n){return t[n]}.bind(null,r));return e},a.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(n,"a",n),n},a.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},a.p="",a.oe=function(t){throw console.error(t),t};var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=n,c=c.slice();for(var f=0;f<c.length;f++)n(c[f]);var u=l;i.push([34,1]),e()}({0:function(t,n){t.exports=React},11:function(t,n){t.exports=ReactDOM},34:function(t,n,e){"use strict";e.r(n);var r=e(0),o=e(11),i=e(25),a=e(4),c=e(18),l=e.n(c),f=e(7),u=e(26),s={},d=Object.keys(s).length?Object(f.combineReducers)(s):function(){},p=e(14),g=e.n(p),m=e(27),h=g.a.mark(b);function b(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.a)([]);case 2:case"end":return t.stop()}}),h)}var y={type:"_PnptSetupAction",pl:{version:"1.0.0"}},w=Object(u.a)(),O=[w],v=("object"===("undefined"==typeof window?"undefined":l()(window))&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):f.compose)(f.applyMiddleware.apply(void 0,O)),x=function(t,n,e){return Object(f.createStore)(t,n,e)}(d,d({},y),v);w.run(b);var S,j,R,P,E,A,k,C,G,z,_,T,H,K,B,D,I,M,q,W,N,L,X,F=x,U=function(t){return null},V=e.p+"assets/images/6190dfc062f43df4a9e50e8f9ccd74bb.png",J=e.p+"assets/images/9951b51ba16043de21877160a76ebd87.png",Y={fieldHeight:600,fieldWidth:600,columnsCount:7,rowsCount:7,tileSpacing:1,design:"\n\t\tGRASS GRASS GRASS GRASS GRASS BROOK BROOK\n\t\tPATH  PATH  PATH  PATH  GRASS BROOK BROOK\n\t\tGRASS GRASS GRASS PATH  GRASS BROOK BROOK\n\t\tGRASS GRASS GRASS PATH  GRASS GRASS GRASS\n\t\tROCK  GRASS GRASS PATH  PATH  PATH  PATH\n\t\tBROOK ROCK  GRASS GRASS GRASS GRASS GRASS \n\t\tBROOK BROOK ROCK  GRASS GRASS ROCK  ROCK"},Q={shopItems:[{id:"pFj0zYGvSB5BaqUW",label:"Gunner",iconPath:V,goldCost:30,crystalCost:0,stats:[{label:"PhysicalDamage",value:30},{label:"Magic Damage",value:0}]},{id:"0hvF7HTIH62p29Nd",label:"Laser",iconPath:J,goldCost:50,crystalCost:5,stats:[{label:"PhysicalDamage",value:10},{label:"Magic Damage",value:25}]}],onPickingItem:function(){return console.log("onPickingItem cant be passed by the test data. Needs to be passed by the parent component.")},onDroppingItem:function(){return console.log("onPickingItem cant be passed by the test data. Needs to be passed by the parent component.")}},Z=e.p+"assets/images/086b4ca4cba3157eb38808153e75aec8.png",$=e.p+"assets/images/a8e09955938e2108a910655ea283444d.png",tt=e.p+"assets/images/bc17283c2467e8cb15bc6e726ea44ff4.png",nt=e.p+"assets/images/b0069c8e92c8f44b7c6ec41718d07530.png",et=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},rt=a.d.div(S||(S=et(["\n\tmargin: 0;\n\tpadding: 5px;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tbackground: papayawhip;\n\tfont-family: 'Consolas';\n\tborder: 2px dashed ",";\n\n\t:hover {\n\t\tborder-color: antiquewhite};\n\t}\n"],["\n\tmargin: 0;\n\tpadding: 5px;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tbackground: papayawhip;\n\tfont-family: 'Consolas';\n\tborder: 2px dashed ",";\n\n\t:hover {\n\t\tborder-color: antiquewhite};\n\t}\n"])),(function(t){return t.isBuilding?"#ea7745":"transparent"})),ot={grass:Object(a.d)(rt)(j||(j=et(["\n    background: url(",");\n"],["\n    background: url(",");\n"])),Z),path:Object(a.d)(rt)(R||(R=et(["\n    background: url(",");\n"],["\n    background: url(",");\n"])),$),rock:Object(a.d)(rt)(P||(P=et(["\n    background: url(",");\n"],["\n    background: url(",");\n"])),tt),brook:Object(a.d)(rt)(E||(E=et(["\n    background: url(",");\n"],["\n    background: url(",");\n"])),nt)},it=function(t){var n=ot[t.type.toLowerCase()]||rt;return r.createElement(r.Fragment,null,r.createElement(n,null))},at=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},ct=function(){return(ct=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},lt=a.d.div(A||(A=at(["\n    padding: ","px;\n    width: ","px;\n    height: ","px;\n    display: grid;\n    grid-gap: ","px;\n    grid-auto-flow: row;\n    grid-template:\n        repeat(\n            ",",\n            ","px\n        )\n        /\n        repeat(\n            ",",\n            ","px\n        );\n    align-content: center;\n    background: antiquewhite;\n"],["\n    padding: ","px;\n    width: ","px;\n    height: ","px;\n    display: grid;\n    grid-gap: ","px;\n    grid-auto-flow: row;\n    grid-template:\n        repeat(\n            ",",\n            ","px\n        )\n        /\n        repeat(\n            ",",\n            ","px\n        );\n    align-content: center;\n    background: antiquewhite;\n"])),(function(t){return t.tileSpacing||1}),(function(t){return t.fieldWidth+(t.columnsCount+1)*(t.tileSpacing||1)}),(function(t){return t.fieldHeight+(t.rowsCount+1)*(t.tileSpacing||1)}),(function(t){return t.tileSpacing||1}),(function(t){return t.rowsCount}),(function(t){return t.fieldWidth/t.columnsCount}),(function(t){return t.columnsCount}),(function(t){return t.fieldWidth/t.columnsCount})),ft=function(t){for(var n=[],e=t.design.trim().split(/[\s\t]+/),o=0;o<t.columnsCount*t.rowsCount;o++)n.push(r.createElement(it,{type:e[o]}));return r.createElement(lt,ct({},t),n)},ut=e(22),st=e(24),dt=e(23),pt=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},gt=function(){return(gt=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},mt=a.d.div(G||(G=pt(["\n    display: flex;\n    flex-direction: ",";\n    align-items: ",";\n    justify-content: ",";\n    & > * {\n        margin-right: ","px;\n        margin-bottom: 0;\n        width: fit-content;\n        :last-child {\n            margin-right: 0;\n        }\n    }\n    ","\n    ","\n"],["\n    display: flex;\n    flex-direction: ",";\n    align-items: ",";\n    justify-content: ",";\n    & > * {\n        margin-right: ","px;\n        margin-bottom: 0;\n        width: fit-content;\n        :last-child {\n            margin-right: 0;\n        }\n    }\n    ","\n    ","\n"])),(function(t){return t.vertical?"column":"row"}),(function(t){return t.align||"center"}),(function(t){return t.justify||"start"}),(function(t){return t.margin||10}),(function(t){return t.vertical&&!t.align&&Object(a.c)(k||(k=pt(["\n            align-items: start;\n        "],["\n            align-items: start;\n        "])))}),(function(t){return t.vertical&&Object(a.c)(C||(C=pt(["\n            & > * {\n                margin-right: 0;\n                margin-bottom: ","px;\n                width: 100%;\n                :last-child {\n                    margin-bottom: 0;\n                }\n            }\n        "],["\n            & > * {\n                margin-right: 0;\n                margin-bottom: ","px;\n                width: 100%;\n                :last-child {\n                    margin-bottom: 0;\n                }\n            }\n        "])),t.margin||10)})),ht=function(t){return r.createElement(mt,gt({},t))},bt=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},yt=function(){return(yt=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},wt=a.d.button(_||(_=bt(["\n    padding: 7px 12px;\n    border: none;\n    outline: none;\n    width: ",";\n    background: ",";\n    transition: filter 0.2s ease-in-out;\n    :active,\n    :focus {\n        border: none;\n    }\n    :hover {\n        cursor: pointer;\n        filter: brightness(1.5);\n    }\n\n    ","\n"],["\n    padding: 7px 12px;\n    border: none;\n    outline: none;\n    width: ",";\n    background: ",";\n    transition: filter 0.2s ease-in-out;\n    :active,\n    :focus {\n        border: none;\n    }\n    :hover {\n        cursor: pointer;\n        filter: brightness(1.5);\n    }\n\n    ","\n"])),(function(t){return t.fullWidth?"100%":"fit-content"}),(function(t){return function(t){switch(t){case"ok":return"#099e31";case"error":return"#d84b4c";case"warning":return"#eab800";case"info":return"#558fc9";case"submit":return"#ffa600";case"regular":default:return"#ffffff"}}(t.type)}),(function(t){return t.small&&Object(a.c)(z||(z=bt(["\n            padding: 5px 10px;\n            font-size: 12px;\n        "],["\n            padding: 5px 10px;\n            font-size: 12px;\n        "])))})),Ot=function(t){return r.createElement(wt,yt({},t))},vt=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},xt=a.d.div(T||(T=vt(["\n    width: 100%;\n"],["\n    width: 100%;\n"]))),St=a.d.div(H||(H=vt(["\n    padding: 10px;\n    background: #423a34;\n"],["\n    padding: 10px;\n    background: #423a34;\n"]))),jt=(a.d.p(K||(K=vt(["\n    margin: 0;\n    font-size: 20px;\n    algin-self: start;\n"],["\n    margin: 0;\n    font-size: 20px;\n    algin-self: start;\n"]))),a.d.img(B||(B=vt(["\n    margin-left: auto;\n    width: 32px;\n    height: min-content;\n"],["\n    margin-left: auto;\n    width: 32px;\n    height: min-content;\n"]))),a.d.p(D||(D=vt(["\n    font-size: 14px;\n"],["\n    font-size: 14px;\n"]))),Object(a.d)(ut.a)(I||(I=vt(["\n    width: 100%;\n    font-size: 12px;\n"],["\n    width: 100%;\n    font-size: 12px;\n"])))),Rt=Object(a.d)(jt)(M||(M=vt(["\n    color: gold;\n"],["\n    color: gold;\n"]))),Pt=Object(a.d)(jt)(q||(q=vt(["\n    color: aquamarine;\n"],["\n    color: aquamarine;\n"]))),Et=function(t){return r.createElement(xt,null,r.createElement(ht,{vertical:!0,margin:20},t.shopItems.map((function(t){return r.createElement(St,null,r.createElement(ht,{margin:20},r.createElement("p",null,t.label),r.createElement(ht,{margin:10},r.createElement(ht,{margin:3},r.createElement(Rt,{icon:dt.a}),r.createElement("p",null,t.goldCost)),r.createElement(ht,{margin:3},r.createElement(Pt,{icon:st.a}),r.createElement("p",null,t.crystalCost)))),r.createElement("img",{src:t.iconPath}),r.createElement(ht,null,r.createElement(Ot,{type:"info",small:!0},"Purchase")))}))))},At=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},kt=function(){return(kt=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},Ct=a.d.div(W||(W=At(["\n    display: flex;\n    > * {\n        margin-right: 20px;\n        :last-child {\n            margin-right: 0;\n        }\n    }\n"],["\n    display: flex;\n    > * {\n        margin-right: 20px;\n        :last-child {\n            margin-right: 0;\n        }\n    }\n"]))),Gt=U,zt=function(t){var n=r.useState(null),e=(n[0],n[1],r.useState(null)),o=(e[0],e[1],r.useState(null)),i=(o[0],o[1],r.useState([]));i[0],i[1];return r.createElement(Ct,null,r.createElement(ft,kt({},Y)),r.createElement(Et,kt({},Q)))},_t=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},Tt=function(){return(Tt=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},Ht=e.e(2).then(e.bind(null,35)),Kt=a.d.div(N||(N=_t(["\n\tmin-height: 100vh;\n\theight: 100%;\n\tbackground: #1e1916 fixed repeat-y url('","');\n"],["\n\tmin-height: 100vh;\n\theight: 100%;\n\tbackground: #1e1916 fixed repeat-y url('","');\n"])),(function(t){return t.image||""})),Bt=function(t){var n=r.useState(""),e=n[0],o=n[1];return Ht.then((function(t){return o(t.default)})),r.createElement(Kt,Tt({image:t.image||e},t))},Dt=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},It=function(){return(It=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},Mt=a.d.div(L||(L=Dt(["\n    margin: 0 auto;\n    padding: 50px 0;\n    display: flex;\n    flex-direction: column;\n    max-width: ","px;\n"],["\n    margin: 0 auto;\n    padding: 50px 0;\n    display: flex;\n    flex-direction: column;\n    max-width: ","px;\n"])),(function(t){return t.appWidth})),qt=function(t){return r.createElement(Bt,null,r.createElement(Mt,{appWidth:980},r.createElement(Gt,It({},t)),r.createElement(zt,It({},t))))},Wt=e.p+"assets/fonts/4f39c5796e60c9d8e7327a00e9a4442e.ttf",Nt=e.p+"assets/fonts/ad2445ca4e46908fbf7bb4e0fff71139.ttf",Lt=e.p+"assets/fonts/2a1b89d7506c26fb931b47bbc5d8c926.ttf",Xt=e.p+"assets/fonts/0cea39826bd36bbfe33076c544e3a1af.ttf",Ft=e.p+"assets/fonts/f3afeb2d078386350b6657727c8de98e.ttf",Ut=e.p+"assets/fonts/03523cf578d69fa923226ff457b92d90.ttf",Vt=e.p+"assets/fonts/c38fab23fc1c36894f10dd8014479b53.ttf",Jt=e.p+"assets/fonts/082b9e840d3a498e8a3c8119f3a7132a.ttf",Yt=function(t,n){return Object.defineProperty?Object.defineProperty(t,"raw",{value:n}):t.raw=n,t},Qt=Object(a.b)(X||(X=Yt(["\n\t// bold\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype')\n\t\tfont-weight: bold;\n\t}\n\t// bold italic\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype');\n\t\tfont-weight: bold;\n\t\tfont-style: italic;\n\t}\n\t// italic\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype');\n\t\tfont-style: italic;\n\t}\n\t// light\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype');\n\t\tfont-weight: 200;\n\t}\n\t// light italic\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype');\n\t\tfont-style: italic;\n\t\tfont-weight: 200;\n\t}\n\t// regular\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype');\n\t}\n\t// thin\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype');\n\t\tfont-weight: 100;\n\t}\n\t// thin italic\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype');\n\t\tfont-style: italic;\n\t\tfont-weight: 100;\n\t}\n\n\t* { margin: 0; padding: 0; box-sizing: border-box; }\n\thtml { height: 100%; }\n\thtml, body {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%;\n\t\tfont: 1rem 'Roboto';\n\t}\n\tbody {\n\t\tposition: relative;\n\t\tmin-height: 100%;\n\t\tcolor: #fff;\n\t}\n\th1 { font-size: 1.9rem; }\n\th2 { font-size: 1.9rem; }\n\th3 { font-size: 1.64rem; }\n\th4 { font-size: 1.43rem; }\n\th5 { font-size: 1.28rem; }\n\th6 { font-size: 1.18rem; }\n\th1, h2, h3, h4, h5, h6 { margin-bottom: 0.6em; color: inherit; font-weight: 400; }\n\n\tspan, label, p { margin-bottom: 0.5rem;\n\t\t&:last-child { margin-bottom: 0; }\n\t}\n\ta { color: inherit;\n\t\t&:hover { text-decoration: underline; }\n\t}\n\n\tli { list-style-type: none; }\n"],["\n\t// bold\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype')\n\t\tfont-weight: bold;\n\t}\n\t// bold italic\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype');\n\t\tfont-weight: bold;\n\t\tfont-style: italic;\n\t}\n\t// italic\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype');\n\t\tfont-style: italic;\n\t}\n\t// light\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype');\n\t\tfont-weight: 200;\n\t}\n\t// light italic\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype');\n\t\tfont-style: italic;\n\t\tfont-weight: 200;\n\t}\n\t// regular\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype');\n\t}\n\t// thin\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype');\n\t\tfont-weight: 100;\n\t}\n\t// thin italic\n\t@font-face {\n\t\tfont-family: 'Roboto';\n\t\tsrc: url('","') format('truetype');\n\t\tfont-style: italic;\n\t\tfont-weight: 100;\n\t}\n\n\t* { margin: 0; padding: 0; box-sizing: border-box; }\n\thtml { height: 100%; }\n\thtml, body {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%;\n\t\tfont: 1rem 'Roboto';\n\t}\n\tbody {\n\t\tposition: relative;\n\t\tmin-height: 100%;\n\t\tcolor: #fff;\n\t}\n\th1 { font-size: 1.9rem; }\n\th2 { font-size: 1.9rem; }\n\th3 { font-size: 1.64rem; }\n\th4 { font-size: 1.43rem; }\n\th5 { font-size: 1.28rem; }\n\th6 { font-size: 1.18rem; }\n\th1, h2, h3, h4, h5, h6 { margin-bottom: 0.6em; color: inherit; font-weight: 400; }\n\n\tspan, label, p { margin-bottom: 0.5rem;\n\t\t&:last-child { margin-bottom: 0; }\n\t}\n\ta { color: inherit;\n\t\t&:hover { text-decoration: underline; }\n\t}\n\n\tli { list-style-type: none; }\n"])),Wt,Nt,Lt,Xt,Ft,Ut,Vt,Jt);Object(o.render)(r.createElement(i.a,{store:F},r.createElement(Qt,null),r.createElement(a.a,{disableVendorPrefixes:!0},r.createElement(qt,null))),document.getElementById("app"))},7:function(t,n){t.exports=Redux}});