(this["webpackJsonpdin-din-bike-tourism"]=this["webpackJsonpdin-din-bike-tourism"]||[]).push([[0],{78:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(23),r=c.n(a),i=c(3),o=c(42),l=c.p+"static/media/map.6753fba0.svg",j=c.p+"static/media/map-pin.4157f966.svg",d=c(2),b=c(4),m={Taichung:"\u81fa\u4e2d\u5e02",Keelung:"\u57fa\u9686\u5e02",HsinchuCounty:"\u65b0\u7af9\u7e23",MiaoliCounty:"\u82d7\u6817\u7e23",ChanghuaCounty:"\u5f70\u5316\u7e23",NewTaipei:"\u65b0\u5317\u5e02",NantouCounty:"\u5357\u6295\u7e23",YunlinCounty:"\u96f2\u6797\u7e23",ChiayiCounty:"\u5609\u7fa9\u7e23",Chiayi:"\u5609\u7fa9\u5e02",PingtungCounty:"\u5c4f\u6771\u7e23",YilanCounty:"\u5b9c\u862d\u7e23",HualienCounty:"\u82b1\u84ee\u7e23",TaitungCounty:"\u81fa\u6771\u7e23",KinmenCounty:"\u91d1\u9580\u7e23",PenghuCounty:"\u6f8e\u6e56\u7e23",Taoyuan:"\u6843\u5712\u5e02",Taipei:"\u81fa\u5317\u5e02",Kaohsiung:"\u9ad8\u96c4\u5e02",Tainan:"\u81fa\u5357\u5e02"},u=c(0);function h(){var e=Object(n.useContext)(ye),t=Object(d.f)();return Object(u.jsxs)("div",{className:"search container  z-30 mx-auto my-28 lg:my-40",children:[Object(u.jsx)("p",{className:"select-none",children:"\u9ad4\u9a57\u81ea\u7531\u8207\u901f\u5ea6\u7684\u65c5\u7a0b"}),Object(u.jsxs)("div",{className:"grid grid-cols-12 md:grid-cols-12 md:gap-4 ",children:[Object(u.jsxs)("div",{className:"relative hidden md:block md:col-span-4 ",children:[Object(u.jsx)("img",{className:"select-img",src:l}),Object(u.jsxs)("select",{className:"search  w-full  focus:outline-none",onChange:function(e){return t.push("/lane_info/".concat(e.target.value))},children:[Object(u.jsx)("option",{selected:!0,disabled:!0,children:"\u627e\u8def\u7dda"}),e.slice(20,40).map((function(e,t){return Object(u.jsx)("option",{value:e.RouteName,children:e.RouteName},t)}))]})]}),Object(u.jsxs)("div",{className:"relative col-span-11 md:col-span-5",children:[Object(u.jsx)("img",{className:"select-img",src:j}),Object(u.jsxs)("select",{className:"search  w-full  focus:outline-none",onChange:function(e){return t.push("/search_map/".concat(e.target.value))},children:[Object(u.jsx)("option",{selected:!0,disabled:!0,children:" \u60f3\u53bb\u54ea\u88e1"}),Object.entries(m).map((function(e){return Object(u.jsx)("option",{value:e[0],children:e[1]},e[0])}))]})]}),Object(u.jsx)("div",{className:"hidden md:block md:col-span-3",children:Object(u.jsx)(b.b,{to:e.length?"/lane_info/".concat(e.length&&e[Math.floor(Math.random()*e.length)].RouteName):"/",children:Object(u.jsx)("button",{children:"\u5c0b\u627e\u65c5\u7a0b"})})})]})]})}function A(){return Object(u.jsx)("section",{className:"banner",children:Object(u.jsx)("div",{className:"banner-up",children:Object(u.jsx)(h,{})})})}var x={white:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAABkCAYAAADQdGjWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA+2SURBVHgB7Z09WCPJEYZLfhyZS83GECOnpxguPS41mxqnXuIl3ot34+NSdOmxsTa1NhZOwSnEy6XcfKMqqabU86dfhL73efRIas1PT2v6m+rq6m4RQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghVXSEEPJieH5+7mZvHxpsOup0OpdCNspfhBCyjXQzsT0QslEooIRsLz0hG4VNeEJeEJlVuSfVwniWvfb181PWjD8TsjH+KoSQF0MmiE/Z26Ds90xgIZ4mmnvZ96Nsn1shG4FNeEK2i5vw/UTIxqCAErJFqIU6ckk9bfaTDUABJWT7+Oo+QzxphW4ICigh2wd8pE/u+/dCNgIFlJAtQ5vxQ5fUZTN+M1BACdlOYk/9qZC1QwElZAvR0CU24zcM40BfARobWCCrYI8N93nSJmEyzW2PJuJe1bH9No6ZY5XkY3LcVFpd3ncUhDRZTOghY0LXDwX0dfBJgnBllQlvqEzXsVKFCStQCa9CGsJk4kQV56K9vdm277Jj3sssqMwzTcls+4fs7Uu2T1/K8/4kUzGYXE+277kX0ZDPvr52FfTG+5FIGMFEAV0jbMJvOSVWn3GUvX7Otomi5iehGCXS0ClxFPZ5Yx9KxBMclqRj3zMIr08Meb9LpIGzirzfyQ6T/Q+4fh8TesLOpPVCC3T78aKFnlkTN1iL1tSFeA1cc7fr9jHrLs7sA+HyVqgJapVo2TFyi9Ol2dhuVPD7LB83ibzfJ9Jsn76zQg8SeX8RqGvhQlbD71kZfE2kI83+T4gnyodW6JqggG4/XlBurLmeVWaIFJrCqNSoWLBCrbnrfYwmXG/CcbvmU8vevag18X/e++Y6muEybdofy3Q4Yp0lbJzptRTyWWEJbwrk80hWw6AiHefdc3ngPKFrgk347cdbkxNBUWvTj5s+SHz21mSq4lvz2XdSlVk3hxXbeD/loWtmpixhn2YW84nrOGpiCS8V5Dd79RJuDb8N8rf2EUH6P/uyqI0J1Wth7OgSoAW6/VT1SHsLzTplZqzJkAZL8FC3N19oE79j6TbIV3acR5dX6zRKWcL74TgmqO+yY/wa874qtLMKoUE9lyfkp6yJHn21cKcsM0LgoeI3PKD8gwdCflOxPVoE+TXBpSJjK3ZYF7lBZqGAbj8pa7KKlDXp075qugkC3v28sWXN5m7NNilrJ5V3n3Yl06Y7jn/stluJn0+Fs6wp/l3JPtH6fMjE6GdZE+pmgVhbGUP4qwTU/98obwjqOfzk2XufQtocNuG3mGA5pkTrOPG7FwYTrmg9ovL5Dif7vSrusiqG1Cxa+/2xgSX8qFap9/2dJPK+FLSZDiFBiFRZU72syRutz02EVvly6pa5G2qa7ShfhLRxkuaGUEC3G29J+HCWlFVkY6dToluwHhP+00KoUQlVlvB/Evmos4QtrZ/IR55PWRJaVrB0U8MhUa6whBGCdV6yry8/WJ9fZP0Mw/duaiP9byGQ72V8XaPEZoja+JgaoEGKsAm/3Xgr4zt3w0M4vRjcuWD6lDWZsh5v9Bi1ohUtR5cP9Jj/S4qi3U/k/a4sTa3VgRQfBksbgaR5RXM7ikXT5mw37LuRwH5txo9kKpw+6iJui7K71deNm+XelzH+sw/Zb5ds0pdDAd1uvDC9K9kGnQ+5P64icN13kuRox48fKghGJefwAnIi5b3Rv7jKWBcD6sW6LytovpeIJ8rrU4shkb58NmV9GsjzJCa06dBO/U8+Zdub79s/ACGiFzs+ZLYUNuG3m7plbfMhmXOKFvC+UFBmidTFPkKU3mf5+OzSUpZw0teq+b+pyOe8RPHMe9mbimcmLCfyAqxPx0LLfWTXDasbTXv/P7/RNJKAFuh2c1OSjgowTFgN32RayUeJtIIfTa3Qj6IiWxG4fi9p8chjFEsEyfL+UJNm9GUq5kNZEO0oieJ52dLSKlifsuERQPp/+WY84j2v2lyTukwgmP7hgk6pUzeCjChc1pjsHNp0v3JJEL9Wvj61Pr3bBENlP8mKgculZnarmK+reYTPdaxNoiey1zmb8kXYhCe7yEzY0RwdJa1ClyBIsHqz19wiq/7qSz1OWQ95DOCfa57QhNvEhgMTBwWU7BSJ8K5R244fDbb3AjaoEmAMnZSxxQvRPagaEloDjnOkx7lKHSexrvzcQzZ1PgN/XRTQAAWU7BoxPnIg7WkbOB+jF+YdMx9Ducp8rtFHvIjw+fLZW0D8XyUUULJr9NznpzmsT1ieXkQGdc3/1FruMh/+vMOK88XlPhaZ5CT6T+fN+6uEAkp2jdjz3pZ5h20W1nJvO8pH3QaeUc0uXvj257UcVfz9A6IudG6noICSXcMLQKt40hL/adPOp7hd22GS0Y9Zl/fomljEcvRi/UbIBAoo2RkSVt9Ke95rztVWiGLeK8OJVNhHFfu34WlJx3l1MJA+kFUyhH28lfHImSftwcQkEv2waiTmhfzg4+J037gkxZ0txeCGDr6v6bXFNsMYv4dxyTKuFINUPF7JLDoDl290JhxUxSvq9Z7p9dpqnbBeTuP1JvaFdXeh1+fLBXGJjXq77RrQAxxmcYrcLSEmsfH+Wi5x0pB1Bs7P05OO+wf33mDBsmLsZwkUUIf6mTC4AELwY/b9fzL2k+EGwugMm0wXlfw5cVP2ZLomzWRSWxVEYOPOL3TVTIjAlW7j1w76m4xnxLFKM9RRQDaWHeOTv3ZmV7k803NaMxX5OMq2/UG/I/2by09qnR0TyxuZVhzk+aBBJbRJkycTWWiZoizwMCoM3NChgxNU4HEN15r0XsotnvfSfuRPzH9ja0ofpngQ9DSPbYdtRgF8kHa0ntCjk15DaR5odZZAAS1iIzhws/6gL1RUVJZP6oj/Q8aWSNPxwTiWCQIEAsoJ4UAF8hXaT+pxry8/g7sHFiRmaL9pIGq3mgcc40KPe+POk+OmZTvTvCF+0Kysrm4TJwn+6KxbP7LnVEfE9PV42OZAZjsgBu78tm4SlmH+DWnZ+8z0cYugIugnHm4lDC7Gcp7Qp/gftrXq4vYoy3XNkuTdDTu9EmqEAloEohh9U5iFHMKDm/WtpuEzrMjfGz7lIVQQB1gvaIL/U8bCNrFi3OJtqYr2xk1c8b2+45h1SzfY2GZcA8QIwohz4EHRD03Qrqab3ywXUh05g3MOZFphU+v/9F3ebNIQTOiMB8al5sOWydhPzNiOMfkYd/812+64s7pZjUzMQVfWR2FEUKf9gnhRuNbZmfNiV0LdNBTQIiZyBgQH1hAsz+g3hCCllnjwYR/2bmOK36tQHun+mP383+H8EBK/PhAqigntnv4u7nvErz0E0YKI4QEAYfxZrTCI31u4EYJQYRb4fEVH9UUin1Ye3gdszfIJaI6rFbtnTfPs+99lLNhnbvRO7sONmTarU5vJR9rcrwy9mXPsOc5vgoDwnv1OZy3zXXZDHlqhD6A2y3YsBf3f/H3GJZMdFNAiEKp4U+ZP+oS/rmzZA98UhwBARCB6uQWrvk/wR8n+E9+mCt2ZnnugN/OXmskhbBnjPT2/CToE6dKd/1nqrRgb/4yg7ZOGLoND19SHRfkPzROO0XMCPSNcWqYnul9qopsDzfMiszFhXz8yx1wNKyMx9HNe3yTuA8v7ZNlpWS3H4fvCM2G9JiigRVCBUxaoWUaesl5Rb4Hazf05sR0s0N8T6eY/tHPEEJJTFZ8rSWMWqM06DmJz0fyR0RLac9d5oMcY6nEgfOjc+lXKgbV5J8VF6ez8N5Z3GVvEz+LWL1fxtH1uVVxTD62TzgKzHmkLwFvppw0fDIsQfbnzilAUf3xemYAuGPe6E1BAHSpKBWHSm8hmRLeeUwgFBCH6pfJeb5mKkz29YXH4Gx++Vi9wxgdNN1cCxMyWI7Ym4IOUi/dApsIHUHFhzf0kU8FAvtBs75VYL97P6ZvWuF40xT9LOcjXSEOQCha6a4LaOjwTEdRog1NNX4dfEuV05vIMn/SvsgL0Yeh9iIN5RSixbEdvxVZoXMJ5ns6zVw0D6R2wviAU7vUON7ublcbWkcEY6n6iI8A6d7AtxOKrTHvAIbZVYTkAonkuUwG07+BYj/FYkvdDzZvP071M11//RcaiX3V+u66+zIq7hTVVTUwBobh7rp5qDaFbhbk31fpD2fwm6wHX4svxJ/UVLxUth2h9LuouiPu/e17B4m/OB25sermSFwkFdBZYCIUFudwEEgWLUwXXW4NmfYInKd6ATw0sD4ig3waC09UY0UKPu84J6Svnnjs/Pkf/5pMsEBCtIgcLGeVi1umjy49FEFRdIyyYQx1wEI+/tFU269Br+RiSL5Ypom7QhL8/rhdtAqu16X3gtm7R0kTUxeN6LoXMQAFtBm6oh0TIUmyeoWJaz7wF4E+21WZwFRDAiV/STWp7LmkLwJ8bFchXzmspWpuozGULzxl7KszR+rD83Kr4mI815v1BhdDK4MkfV6bN9ItVWE1tUCG6DskXKh4LoQ+8uN7S0NwhSwAPMf8wX5qI6v8UreaFhf+1Qh/oLD0XujF0Ad5mseShJK6zJbec3M0LH6Utw4uKZL3q1rNuPc2Fm11Dm/KYTxmL0Td3vq4ULSbb1ovYgUyb7MhDT89xbwHpbrTTsRTDoQwfQVDowHL77ul79P/imm5VgHq6r5WBHRflgocQxKXRao+hI2Opc1FC0LLjv5FiR8m5XmvrWeqdLzdab/lKn7IkNBQNZehFGteBwR79zvxLeMDnGcv4eonC/+qggBaxXmcLCkcoTe4/dNYfRMAE4aMJgFY2v3wwbsR7mXW87+tr6J3/+vncWUC2HyrftTs/8nbuPtv+k84vF3T/SxAoH1sZ8wVBHVkPtwq6F/lHmQaDj2TWF/dfGYvjvuVZxuWESINbf63ZseEK+D4hnnHqNEvzHXipyIW5wfVq51YMbUKLAWWEsLHKuE0n8jhG7OCbZ7G6Wjrpxd/yeRuy9B9l/P/c1j0E1Fg4lvScoRTPGrioHCGSCwl64t+W/Azx/r8U3TL2EI0xnh6I/W+rDJFS8bZWTQo8xPEAsIeT5dtaOqmIDmwL8ayKuCBCASVkgooRXDOLhlLlTfbOGmdrskEXsvjEH3mIGX2ezaCAEhJQ90Uc1tsEm2pwY+E+Cwhp7pZZp+i/BiighJTgZqgyf7Cf7MU662zmrOFLstq0Iyzm3UA+4fO2uOFhZ7UjsQghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCFt+BP5rM4y6K4k1AAAAABJRU5ErkJggg==",color:"data:image/png;base64,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"};function O(e){var t=e.logo_color,c=void 0===t?"white":t;return Object(u.jsxs)(b.b,{to:"/",children:[Object(u.jsx)("img",{className:"fixed  z-50 -top-5 lg:-top-3 transform scale-60 lg:scale-90 left-2/4 -translate-x-2/4 ",src:x[c],alt:"Logo"}),"white"===c&&Object(u.jsx)("img",{className:"fixed  z-50 -top-5 lg:-top-3 transform scale-60 lg:scale-90 left-2/4 -translate-x-2/4 ",src:x[c]})]})}var f=c(86);function g(e){var t=e.bg_color,c=void 0===t?"transparent":t,s=e.logo_color,a=(Object(n.useContext)(ye),Object(n.useState)(!1)),r=Object(i.a)(a,2),o=r[0],l=r[1],j="select-none fixed w-screen item-center  top-0 z-30 bg-white ".concat("transparent"==c?"text-white bg-opacity-10":"text-black shadow-md");return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("header",{className:j,children:[Object(u.jsx)(O,{logo_color:s}),Object(u.jsx)("div",{className:"hidden lg:block",children:Object(u.jsxs)("div",{className:"container px-10 m-auto flex justify-between items-center lg:h-20",children:[Object(u.jsx)("span",{}),Object(u.jsxs)("ul",{className:"flex",children:[Object(u.jsx)("li",{className:"mr-5",children:Object(u.jsx)(b.c,{to:"/search_map",className:"header-nav-btn",children:"\u63a2\u7d22\u5730\u5716"})}),Object(u.jsx)("li",{className:"",children:Object(u.jsx)(b.c,{to:"/nearby",className:"header-nav-btn",children:"\u5c0b\u627e\u55ae\u8eca"})})]})]})}),Object(u.jsx)("div",{className:"lg:hidden",children:Object(u.jsx)("div",{className:"float-right mr-4",children:Object(u.jsx)("div",{className:"container flex items-center h-16",children:Object(u.jsx)(f.a,{size:20,toggled:o,toggle:l})})})}),Object(u.jsx)(p,{isOpen:o})]})})}function p(e){var t=e.isOpen;e.bg_color;return t?Object(u.jsxs)("ul",{className:"fixed  bg-gray-700 bg-opacity-80 top-16 right-0 px-8 lg:hidden",children:[Object(u.jsx)("li",{className:"mt-5 mb-5 ",children:Object(u.jsx)(b.c,{to:"/search_map",className:"header-nav-btn",children:"\u63a2\u7d22\u5730\u5716"})}),Object(u.jsx)("li",{className:"mb-5",children:Object(u.jsx)(b.c,{to:"/nearby",className:"header-nav-btn",children:"\u5c0b\u627e\u55ae\u8eca"})})]}):Object(u.jsx)("span",{})}function v(e){var t=e.title_1,c=e.title_2;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:"intro-h2 mx-auto w-3/4 lg:w-1/2",children:t}),Object(u.jsx)("h1",{className:"intro-h1 mx-auto w-3/4 lg:w-1/2",children:c})]})}var N=c.p+"static/media/tip-plan.54863661.svg",w=c.p+"static/media/tip-bike.b72ca50e.svg",y=c.p+"static/media/tip-backpack.f607b022.svg",C=c.p+"static/media/arrow-forward.4f4ab3cb.svg";function k(e){var t=e.num,c=e.logo,n=e.title,s=e.desc1,a=e.desc2;return Object(u.jsxs)("div",{className:"flex-1 ",children:[Object(u.jsx)("p",{className:"font-bold text-3xl mr-24",style:{color:"#51AB5B"},children:t}),Object(u.jsx)("img",{className:"mx-auto w-20",src:c}),Object(u.jsx)("p",{className:" font-bold text-2xl mb-1",children:n}),Object(u.jsx)("p",{className:" font-normal text-base",children:s}),Object(u.jsx)("p",{className:" font-normal text-base mb-16",children:a})]})}function E(){return Object(u.jsxs)("div",{className:"w-full bg-white pt-20  ",children:[Object(u.jsx)(v,{title_1:"How does it work",title_2:"\u5982\u4f55\u5c55\u958b\u4e00\u5834\u55ae\u8eca\u4e4b\u65c5"}),Object(u.jsxs)("div",{className:"flex flex-col text-center lg:flex-row mt-3",children:[Object(u.jsx)(k,{num:1,logo:N,title:"\u898f\u5283\u65c5\u7a0b",desc1:"\u900f\u904e\u63a2\u7d22\u5730\u5716\u627e\u5230\u76ee\u7684\u5730",desc2:"\u642d\u914d\u5468\u906d\u7f8e\u98df\u666f\u9ede\u898f\u5283\u5b8c\u6574\u884c\u7a0b"}),Object(u.jsx)("img",{src:C,className:"hidden lg:block w-8"}),Object(u.jsx)(k,{num:2,logo:w,title:"\u78ba\u8a8d\u79df\u501f\u7ad9\u9ede",desc1:"\u78ba\u8a8d\u9644\u8fd1\u7684Ubike\u7ad9\u9ede",desc2:"\u79df\u501f\u8eca\u8f1b\u662f\u5426\u8db3\u5920"}),Object(u.jsx)("img",{src:C,className:"hidden lg:block w-8"}),Object(u.jsx)(k,{num:3,logo:y,title:"\u6574\u88dd\u51fa\u767c",desc1:"\u6536\u62fe\u88dd\u5099\uff0c\u7a7f\u4e0a\u904b\u52d5\u978b",desc2:"\u5c55\u958b\u4e00\u5834\u55ae\u8eca\u4e4b\u65c5"})]})]})}var S=c.p+"static/media/index_inspiration_1.536942bd.jpg",L=c.p+"static/media/index_inspiration_2.18eea058.jpg",F=c.p+"static/media/index_inspiration_3.960c841a.jpg",T=c.p+"static/media/index_inspiration_4.b558f7dd.jpg",I=c.p+"static/media/index_inspiration_5.efce5470.jpg",W=c.p+"static/media/index_inspiration_6.e5a6c13b.jpg",X=c.p+"static/media/distance.00653790.svg",R=!1,Q=[S,L,F,T,I,W];function U(e){var t=e.data,c=e.ind;return Object(u.jsx)(b.b,{to:"/lane_info/".concat(t.RouteName),children:Object(u.jsx)("div",{className:" recommend-route-box",children:Object(u.jsxs)("div",{className:"grid grid-cols-11 ",children:[Object(u.jsx)("div",{className:"col-span-5 ",children:Object(u.jsx)("img",{className:"recommend-route-img",src:Q[c]})}),Object(u.jsxs)("div",{className:"col-span-6 recommend-route-content ",children:[Object(u.jsx)("p",{className:"city mb-1",children:t.City}),Object(u.jsx)("p",{className:"route-name mb-1",children:t.RouteName}),Object(u.jsx)("img",{src:X,className:"distance-icon mr-1"}),Object(u.jsxs)("span",{className:"distance",children:[t.CyclingLength?t.CyclingLength/1e3:"?","km"]})]})]})})})}function z(){var e=Object(n.useContext)(ye);return Object(u.jsxs)("div",{className:"w-full pt-12 pb-12 mt-24 mb-24",children:[Object(u.jsx)(v,{title_1:"Looking for Inspiration",title_2:"\u63a8\u85a6\u55ae\u8eca\u8def\u7dda"}),Object(u.jsx)("div",{className:"flex  lg:justify-between items-center flex-col lg:flex-row",children:e.slice(0,3).map((function(e,t){return Object(u.jsx)(U,{ind:t,data:e},t)}))}),Object(u.jsx)("div",{className:"flex  lg:justify-between items-center flex-col lg:flex-row",children:e.slice(3,6).map((function(e,t){return Object(u.jsx)(U,{ind:t+3,data:e},t)}))})]})}var J=c(84),B=c(87),P=c(82),K=c(83),Z=c.p+"static/media/bike_orange.16fd6384.svg",G=c.p+"static/media/bike.647bae55.svg",V=c(5),Y=c(10),H=c.n(Y),q=c(13),M=c(43);var D=function(){var e=(new Date).toGMTString(),t=new M.a("SHA-1","TEXT");return t.setHMACKey("M0d0Qrehr5K5sB9wX5-jBTxMHNI","TEXT"),t.update("x-date: "+e),{Authorization:'hmac username="daae9592f5774bf6bfc0817806ca572f", algorithm="hmac-sha1", headers="x-date", signature="'+t.getHMAC("B64")+'"',"X-Date":e}},_=c(15),$=c.n(_);function ee(){return ee=Object(q.a)(H.a.mark((function e(t,c){var n=arguments;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>2&&void 0!==n[2]?n[2]:5e5,e.abrupt("return",$()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bike/Station/NearBy?$spatialFilter=nearby(".concat(c,",").concat(t,",500)"),headers:D()}).then((function(e){return e.data})).catch((function(e){return console.log("error",e)})));case 2:case"end":return e.stop()}}),e)}))),ee.apply(this,arguments)}function te(){return te=Object(q.a)(H.a.mark((function e(t,c){var n,s,a=arguments;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>2&&void 0!==a[2]?a[2]:[],s=a.length>3&&void 0!==a[3]?a[3]:500,e.abrupt("return",$()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/NearBy?$spatialFilter=nearby(".concat(c,",").concat(t,",").concat(s,")"),headers:D()}).then((function(e){var t=e.data,c=[];return t.forEach((function(e){n.forEach((function(t){e.StationUID===t.StationUID&&(e.StationName=t.StationName,e.StationAddress=t.StationAddress,e.StationPosition=t.StationPosition,c.push(e))}))})),c})).catch((function(e){return console.log("error",e)})));case 3:case"end":return e.stop()}}),e)}))),te.apply(this,arguments)}var ce=new V.Icon({iconUrl:Z,iconSize:[32,32],className:"leaflet-marker-icon return"}),ne=new V.Icon({iconUrl:G,iconSize:[32,32],className:"leaflet-marker-icon borrow"});function se(e){var t=e.mode,c=e.data,n=[c.StationPosition.PositionLat,c.StationPosition.PositionLon],s=c.StationName.Zh_tw.split("_");return n[0]&&n[1]&&Object(u.jsx)(P.a,{position:n,icon:"borrow"===t?ne:ce,children:Object(u.jsx)(K.a,{children:Object(u.jsxs)("div",{className:"popup-content",children:[1===c.ServiceStatus?Object(u.jsx)("span",{className:"normal-serv",children:"\u6b63\u5e38\u71df\u904b"}):0===c.ServiceStatus?Object(u.jsx)("span",{className:"no-serv",children:"\u505c\u6b62\u71df\u554f"}):Object(u.jsx)("span",{className:"no-serv",children:"\u66ab\u505c\u71df\u904b"}),Object(u.jsx)("span",{className:"type ml-2",children:s[0]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"title",children:s[1]}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"road",children:c.StationAddress.Zh_tw}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["borrow"===t?"\u53ef\u79df\u501f\u6578\u91cf":"\u53ef\u6b78\u9084\u6578\u91cf"," ","borrow"===t?c.AvailableRentBikes:c.AvailableReturnBikes]})," \u8f1b",Object(u.jsx)("br",{})]})})})}function ae(e){var t=e.location,c=e.mode,s=void 0===c?"borrow":c,a=Object(n.useState)([]),r=Object(i.a)(a,2),o=r[0],l=r[1];return Object(n.useEffect)((function(){(function(e,t){return ee.apply(this,arguments)})(t[1],t[0],1e3).then((function(e){return function(e,t){return te.apply(this,arguments)}(t[1],t[0],e,1e3)})).then((function(e){return l(e)}))}),[t]),Object(u.jsxs)(u.Fragment,{children:[R,o&&o.filter((function(e){return"borrow"===s?e.AvailableRentBikes>0:e.AvailableReturnBikes>0})).map((function(e){return Object(u.jsx)(se,{mode:s,data:e},e.StationUID)}))]})}function re(e){var t=e.isToggleOn,c=e.handleClick;return Object(u.jsxs)("div",{className:"bike-toggle select-none transition-all flex ",onClick:c,children:[Object(u.jsx)("img",{className:"bike-toggle-icon  flex-none "+(t?"return":"borrow"),src:t?Z:G}),Object(u.jsx)("span",{className:"bike-toggle-word  m-auto "+(t?"return":"borrow"),children:t?"\u6b78\u9084\u6a21\u5f0f":"\u79df\u501f\u6a21\u5f0f"})]})}var ie=new V.Icon({iconUrl:j,iconSize:[48,48],className:"leaflet-marker-icon pin"});function oe(e){var t=Object(n.useContext)(Ce),c=Object(n.useState)(null),s=Object(i.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)("borrow"),l=Object(i.a)(o,2),j=l[0],d=l[1],b=[t[1],t[0]];return Object(n.useEffect)((function(){a&&a.setView(b)}),[a,b]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(re,{isToggleOn:"return"===j,handleClick:function(){d("borrow"===j?"return":"borrow")}}),Object(u.jsxs)(J.a,{tap:!1,center:[25.0210905,121.5353809],zoom:16,scrollWheelZoom:!1,whenCreated:r,children:[Object(u.jsx)(B.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(u.jsx)(ae,{mode:j,location:b}),Object(u.jsx)(P.a,{position:b,icon:ie,children:Object(u.jsx)(K.a,{children:"\u4f60\u5728\u9019\u88e1"})})]})]})}function le(){Object(n.useContext)(ye);return Object(u.jsxs)("div",{className:"w-full bg-white mt-24 mb-24",children:[Object(u.jsx)(v,{title_1:"Looking for bikes",title_2:"\u5c0b\u627e\u9644\u8fd11\u516c\u91cc\u5167\u7684\u81ea\u884c\u8eca"}),Object(u.jsx)("div",{className:"relative near-bike-map mt-3 mx-auto mb-28",children:Object(u.jsx)(oe,{})})]})}var je=c(41),de=c(85),be=new V.Icon({iconUrl:l,iconSize:[32,32],className:"leaflet-marker-icon route"});var me={color:"#51AB5B"};function ue(e){var t=e.geometry,c=e.distance,s=e.seeToggle,a=void 0===s||s,r=(Object(n.useContext)(Ce),Object(n.useState)(null)),o=Object(i.a)(r,2),l=o[0],j=o[1],d=Object(n.useState)("borrow"),b=Object(i.a)(d,2),m=b[0],h=b[1];t=t.map((function(e){return[e[1],e[0]]}));for(var A=[],x=0,O=1;O<t.length;++O)t[O][0]&&t[O][1]||(A.push(t.slice(x,O)),x=++O+1);A.push(t.slice(x,t.length));!function(e){var t,c=e[0][0],n=e[0][1],s=c,a=n,r=Object(je.a)(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;i[0]>c?c=i[0]:i[0]<s&&(s=i[0]),i[1]<n?n=i[1]:i[1]>a&&(a=i[1])}}catch(o){r.e(o)}finally{r.f()}}(t);var f=t[0],g=c<=500?16:c<=3e3?15:14;return Object(n.useEffect)((function(){l&&l.setView(f,g)}),[l,f]),Object(u.jsxs)(u.Fragment,{children:[a&&Object(u.jsx)(re,{isToggleOn:"return"===m,handleClick:function(){h("borrow"===m?"return":"borrow")}}),Object(u.jsxs)(J.a,{tap:!1,center:[25.0210905,121.5353809],zoom:15,scrollWheelZoom:!1,whenCreated:j,children:[Object(u.jsx)(B.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),A.map((function(e,t){return Object(u.jsx)(de.a,{pathOptions:me,positions:e},t)})),a&&Object(u.jsx)(ae,{mode:m,location:t[0]}),Object(u.jsx)(P.a,{position:t[0],icon:be,children:Object(u.jsx)(K.a,{children:"\u8d77\u9ede"})})]})]})}function he(e){var t=e.lane,c=e.data,n=e.clickHandle;return Object(u.jsxs)("div",{className:" list-item w-full h-28 ".concat(t.RouteName===c.RouteName?"bg-gray-200":"bg-white"),onClick:function(){return n(c)},children:[Object(u.jsx)("span",{className:"city",children:c.City}),Object(u.jsx)("br",{}),Object(u.jsx)("p",{className:"route-name mb-7",children:c.RouteName}),Object(u.jsxs)("p",{className:"distance",children:["\u8ddd\u96e2 ",c.CyclingLength?c.CyclingLength/1e3:"?"," km",Object(u.jsx)(b.b,{to:"/lane_info/".concat(c.RouteName),children:Object(u.jsx)("span",{className:"float-right mr-2 more",children:"\u67e5\u770b\u66f4\u591a"})})]})]})}function Ae(){var e=Object(d.g)().city,t=Object(n.useContext)(ye),c=Object(n.useState)(t.slice(0,100)),s=Object(i.a)(c,2),a=s[0],r=s[1],o=Object(n.useState)({}),l=Object(i.a)(o,2),j=l[0],h=l[1],A=Object(d.f)();function x(e){h(e)}return Object(n.useEffect)((function(){e&&r(t.filter((function(t){return t.City===m[e]})))}),[e,t]),Object(n.useEffect)((function(){a.length&&h(a[0])}),[a]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{bg_color:"white",logo_color:"color"}),Object(u.jsx)("div",{className:"bg-gray-100 h-20 lg:h-28"}),Object(u.jsxs)("div",{className:"bg-gray-100 view-border pb-20",children:[Object(u.jsxs)("p",{className:"page-title",children:[Object(u.jsx)(b.b,{to:"/",children:"\u9996\u9801"}),Object(u.jsx)("span",{className:"mx-1",children:"/"}),Object(u.jsx)(b.b,{to:"/search_map",children:"\u63a2\u7d22\u5730\u5716"})]}),Object(u.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-12",children:[Object(u.jsx)("div",{className:"hidden sm:block col-span-9"}),Object(u.jsx)("div",{className:" col-span-1 mx-1 my-2 sm:col-span-3",children:Object(u.jsxs)("select",{className:"search-map-where w-full ",onChange:function(e){return A.push("/search_map/".concat(e.target.value))},children:[Object(u.jsx)("option",{selected:!0,disabled:!0,children:" \u60f3\u53bb\u54ea\u88e1"}),Object.entries(m).map((function(e){return Object(u.jsx)("option",{value:e[0],children:e[1]},e[0])}))]})})]}),Object(u.jsxs)("div",{className:"search-map-block grid grid-cols-1 sm:grid-cols-12",children:[Object(u.jsx)("div",{className:"hidden sm:block col-span-9",children:Object(u.jsx)("div",{className:"relative search-map-map",children:j.Geometry&&Object(u.jsx)(ue,{seeToggle:!1,geometry:j.Geometry,distance:j.CyclingLength})})}),Object(u.jsx)("div",{className:"search-map-route-list col-span-1 mx-1 sm:col-span-3",children:a&&a.map((function(e,t){return Object(u.jsx)(he,{lane:j,data:e,clickHandle:x},t)}))})]}),Object(u.jsx)("div",{className:"sm:hidden mt-20",children:Object(u.jsx)("div",{className:"relative search-map-map",children:j.Geometry&&Object(u.jsx)(ue,{seeToggle:!1,geometry:j.Geometry,distance:j.CyclingLength})})})]})]})}var xe=[{path:"/",exact:!0,component:function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{}),Object(u.jsx)(A,{}),Object(u.jsx)("div",{className:"view-border",children:Object(u.jsx)(E,{})}),Object(u.jsx)("div",{className:"bg-gray-100 view-border",children:Object(u.jsx)(z,{})}),Object(u.jsx)("div",{className:"view-border",children:Object(u.jsx)(le,{})})]})}},{path:"/lane_info/:RouteName",exact:!1,component:function(){var e=Object(d.g)().RouteName,t=Object(n.useContext)(ye),c=Object(n.useState)({}),s=Object(i.a)(c,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){t.length&&r(t.find((function(t){return t.RouteName===e})))}),[t]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{bg_color:"white",logo_color:"color"}),Object(u.jsx)("div",{className:"h-20 lg:h-28"}),Object(u.jsxs)("div",{className:"view-border pb-20 ",children:[Object(u.jsxs)("p",{className:"page-title",children:[Object(u.jsx)(b.b,{to:"/",children:"\u9996\u9801"}),Object(u.jsx)("span",{className:"mx-1",children:"/"}),Object(u.jsx)(b.b,{to:"/search_map",children:"\u63a2\u7d22\u5730\u5716"}),Object(u.jsx)("span",{className:"mx-1",children:"/"}),"\u8def\u7dda\u4ecb\u7d39"]}),Object(u.jsx)("p",{className:"lane-info-title mt-3 mb-3",children:a.RouteName}),Object(u.jsxs)("p",{className:"lane-info-subtitle mb-3",children:["\u57ce\u5e02\uff1a",a.City," ",Object(u.jsx)("span",{className:"mr-3"}),"\u96b8\u5c6c\u65bc\uff1a",a.AuthorityName]}),Object(u.jsxs)("p",{className:"lane-info-distance mt-8 mb-3",children:["\u7e3d\u9577\u5ea6\uff1a",a.CyclingLength?a.CyclingLength/1e3:"?"," km"]}),Object(u.jsx)("section",{className:"lane-info-section mt-28 mb-5",children:"\u8def\u7dda\u898f\u5283"}),Object(u.jsx)("div",{className:"relative lane-info-map",children:a.Geometry&&Object(u.jsx)(ue,{geometry:a.Geometry,distance:a.CyclingLength})})]})]})}},{path:"/search_map",exact:!0,component:Ae},{path:"/search_map/:city",exact:!1,component:Ae},{path:"/nearby",exact:!1,component:function(){return Object(d.g)().RouteName,Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(g,{bg_color:"white",logo_color:"color"}),Object(u.jsx)("div",{className:"h-20 lg:h-28"}),Object(u.jsxs)("div",{className:"view-border",children:[Object(u.jsxs)("p",{className:"page-title",children:[Object(u.jsx)(b.b,{to:"/",children:"\u9996\u9801"}),Object(u.jsx)("span",{className:"mx-1",children:"/"}),Object(u.jsx)(b.b,{to:"/nearby",children:"\u5c0b\u627e\u55ae\u8eca"}),Object(u.jsx)("span",{className:"mx-1",children:"/"}),"\u5c0b\u627e\u9644\u8fd1\u7684\u81ea\u884c\u8eca"]}),Object(u.jsx)("div",{className:"relative near-bike-map mt-12 mx-auto mb-28",children:Object(u.jsx)(oe,{})})]})]})}}],Oe=c(44);function fe(e){return e.match(/MULTILINESTRING \(\((.*)\)\)/)[1].split(",").map((function(e){return e.split(" ")})).map((function(e){return[+e[0],+e[1]]}))}function ge(){return pe.apply(this,arguments)}function pe(){return pe=Object(q.a)(H.a.mark((function e(){var t,c=arguments;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"NewTaipei",e.abrupt("return",$()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Cycling/Shape/".concat(t,"?$format=JSON"),headers:D()}).then((function(e){return e.data})).catch((function(e){return console.log("city",t,"error",e)})));case 2:case"end":return e.stop()}}),e)}))),pe.apply(this,arguments)}function ve(){return(ve=Object(q.a)(H.a.mark((function e(){var t,c,n;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(c in t=[],m)t.push(ge(c));return n=[],e.abrupt("return",Promise.all(t).then((function(e){return e.forEach((function(e){return n.push.apply(n,Object(Oe.a)(e))}))})).then((function(){return n.forEach((function(e){return e.Geometry=fe(e.Geometry)}))})).then((function(){return n})).catch((function(e){console.log("error",e)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ne(e,t){return Math.pow(Math.pow(100722*(e[0]-t[0]),2)+Math.pow(111200*(e[1]-t[1]),2),.5)}function we(){return Object(u.jsxs)("div",{className:"footer-bg flex justify-center items-center flex-col lg:flex-row",children:[Object(u.jsx)("div",{className:"footer-copyright flex-none",children:"Copyright \xa9 2021 \xa0"}),Object(u.jsx)("div",{className:"footer-copyright flex-none",children:"Lola Lin \xa0"}),Object(u.jsx)("div",{className:"footer-copyright flex-none",children:"& \xa0"}),Object(u.jsx)("div",{className:"footer-copyright flex-none",children:"Zhima Mochi. \xa0"}),Object(u.jsx)("div",{className:"footer-copyright flex-none",children:"All rights reserved."})]})}var ye=Object(n.createContext)([]),Ce=Object(n.createContext)([121.5410178,25.0208745]);function ke(){var e=Object(n.useState)(Object(n.useContext)(Ce)),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(Object(n.useContext)(ye)),r=Object(i.a)(a,2),l=r[0],j=r[1];return Object(n.useEffect)((function(){(function(){return ve.apply(this,arguments)})().then((function(e){return j(e)}))}),[]),Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){s([e.coords.longitude,e.coords.latitude])}),(function(e){var t=e.code,c=e.message;console.error(t),console.error(c)}))}),[]),Object(n.useEffect)((function(){j(l.sort((function(e,t){return Ne(e.Geometry[0],c)-Ne(t.Geometry[0],c)})))}),[c,l]),Object(u.jsx)(Ce.Provider,{value:c,children:Object(u.jsxs)(ye.Provider,{value:l,children:[Object(u.jsx)("div",{className:"min-h-screen",children:Object(o.a)(xe)}),Object(u.jsx)(we,{})]})})}c(77),c(78);var Ee=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,88)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};c(79);var Se=Object(d.h)((function(e){var t=e.history;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null}));r.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsxs)(b.a,{children:[Object(u.jsx)(Se,{}),Object(u.jsx)(ke,{})]})}),document.getElementById("root")),Ee()}},[[80,1,2]]]);
//# sourceMappingURL=main.aa84b3b5.chunk.js.map