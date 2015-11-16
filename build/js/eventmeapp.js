angular.module("in2.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("about/about.html","<div>\n    <span class=\"fa fa-spinner\" /> Work in progress...\n</div>");
$templateCache.put("auth/login.html","<!-- Start of page -->\n\n<div class=\"login\">\n\n    <h3>Sign in</h3>\n    <p>Come on it is free</p>\n\n    <form ng-submit=\"login.doLogin()\" class=\"ui form\">\n        <div ng-show=\"login.errors._general\" class=\"form-group has-error\">\n            <div class=\"help-block\">{{login.errors._general}}</div>\n        </div>\n\n        <div class=\"field\" ng-class=\"login.errors.email ? \'has-error\' : \'\'\">\n            <input type=\"text\" class=\"form-control\" ng-model=\"login.email\" placeholder=\"E-mail\" />\n            <div class=\"help-block\">{{login.errors.email.join(\'\\n\')}}</div>\n        </div>\n\n        <div class=\"field\" ng-class=\"login.errors.password ? \'has-error\' : \'\'\">\n            <input type=\"password\" class=\"form-control\" ng-model=\"login.password\" placeholder=\"Password\" />\n            <div class=\"help-block\">{{login.errors.password.join(\'\\n\')}}</div>\n        </div>\n\n        <div class=\"field\">\n            <div class=\"ui vertical animated green  button fluid \" ng-disabled=\"login.busy.busy\" ng-click=\"login.doLogin()\">\n                <div class=\"visible content\">\n                    Sign in\n                </div>\n                <div class=\"hidden content\">\n                    It is free\n                </div>\n            </div>\n\n\n\n        </div>\n\n        <div class=\"field\">\n            <div class=\"ui facebook button fluid\" ng-disabled=\"login.busy.busy\" ng-click=\"login.authenticate(\'facebook\')\">\n                <i class=\"fa fa-facebook\"></i>\n                Facebook\n            </div>\n        </div>\n\n  \n\n        <div class=\"field center \">\n            <a href=\"\">Forgotten yout password?</a>\n        </div>\n    </form>\n</div>\n");
$templateCache.put("auth/register.html","<form ng-submit=\"register.doRegister()\" class=\"ui form\">\n<div ng-show=\"register.errors._general\" class=\"form-group has-error\">\n    <div class=\"help-block\">{{register.errors._general}}</div>\n</div>\n<div class=\"form-group\" ng-class=\"register.errors.email ? \'has-error\' : \'\'\">\n    <input type=\"email\" class=\"form-control\" ng-model=\"register.email\" placeholder=\"E-mail\" />\n    <div class=\"help-block\">{{register.errors.email.join(\'\\n\')}}</div>\n</div>\n<div class=\"form-group\" ng-class=\"register.errors.name ? \'has-error\' : \'\'\">\n    <input type=\"text\" class=\"form-control\" ng-model=\"register.name\" placeholder=\"Full Name\" />\n    <div class=\"help-block\">{{register.errors.name.join(\'\\n\')}}</div>\n</div>\n<div class=\"form-group\" ng-class=\"register.errors.password ? \'has-error\' : \'\'\">\n    <input type=\"password\" class=\"form-control\" ng-model=\"register.password\" placeholder=\"Password\" />\n    <div class=\"help-block\">{{register.errors.password.join(\'\\n\')}}</div>\n</div>\n<p>\n    <button type=\"submit\" class=\"btn btn-block btn-primary btn-social\" ng-disabled=\"register.busy.busy\">\n        Register\n    </button>\n</p>\n</form>");
$templateCache.put("auth/signup.html","<emu-tabs>\n	<emu-tab label=\"Login\">\n		<emu-login></emu-login>\n	</emu-tab>\n	<emu-tab label=\"Register\">\n		<emu-register></emu-register>\n	</emu-tab>\n</emu-tabs>\n");
$templateCache.put("auth/test.html","<h1>TEST</h1>\n");
$templateCache.put("events/events.html","<div>\n    <span class=\"fa fa-spinner\" /> Work in progress...\n\n    Example:\n    <div class=\"ui grid\">\n        <emu-cal-column></emu-cal-column>\n        <emu-cal-column></emu-cal-column>\n        <emu-cal-column></emu-cal-column>\n        <emu-cal-column></emu-cal-column>\n        <emu-cal-column></emu-cal-column>\n        <emu-cal-column></emu-cal-column>\n        <emu-cal-column></emu-cal-column>\n    </div>\n</div>\n");
$templateCache.put("following/following.html","<div>\n    <span class=\"fa fa-spinner\" /> Work in progress...\n</div>");
$templateCache.put("fx/nag.html","<div ng-show=\"nag.data.show\">\n    {{nag.data.message}}\n    <a ng-click=\"nag.hide()\" ng-show=\"nag.data.dismissible\">\n        <span class=\"right fa fa-close\"/>\n    </a>\n</div>\n");
$templateCache.put("fx/tab.html","<div class=\"active tab \" ng-class=\"class\" ng-show=\"class === \'active\'\" ng-transclude>\n</div>\n");
$templateCache.put("fx/tabs.html","\n  <div class=\"ui top attached tabular menu\">\n    <a ng-repeat=\"tab in tabs.tabs\"\n      class=\"item\"\n      ng-class=\"$index == tabs.activeIndex ? \'active\' : \'\'\"\n      ng-click=\"tabs.activate($index)\">\n      {{tab}}\n    </a>\n  </div>\n  <div ng-transclude class=\"ui segment bottom attached \"></div>\n</div>\n");
$templateCache.put("index/index.html","\n<div class=\"homepage main\" >\n\n<div class=\"ui container\" ng-show=\"navbar.user.loggedIn\">\n <h1>Welcome {{navbar.user.name}}</h1>\n</div>\n\n\n<div class=\"hexagon\"></div>\n<div class=\"hexagon mini\"></div>\n<div class=\"hexagon tiny\"></div>\n<div class=\"hexagon small\"></div>\n\n<div class=\"ui container\" ng-hide=\"navbar.user.loggedIn\">\n<div class=\"ui grid\">\n   <div class=\"nine wide column\">\n     <h1 class=\"logo\">Eventmeapp</h1>\n   <p class=\"intro\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n   consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n   cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n   proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n   </div>\n   <div class=\"seven wide column\">\n\n    <emu-signup></emu-signup>\n   </div>\n</div>\n\n<div class=\"row-fluid\" ng-show=\"index.user.loggedIn\">\n    <h2>Welcome {{index.user.name}}!</h2>\n</div>\n\n</div>\n");
$templateCache.put("navbar/navbar.html","<div class=\"ui grid\">\n        <div class=\"computer tablet only row\">\n            <div class=\"ui fixed inverted menu medium\">\n            <div class=\"container\">\n               \n\n\n                \n\n                <a class=\"title item header\"  ui-sref=\"index\" ui-sref-active=\"active\">Eventmeapp</a>\n                <a class=\"item\" ui-sref-active=\"active\" ui-sref=\"profile\">Profile</a>\n                <a class=\"item\" ui-sref-active=\"active\" ui-sref=\"events\">Events</a>\n                <a class=\"item\" ui-sref-active=\"active\" ui-sref=\"follow\">Following</a>\n                <a class=\"item\" ui-sref-active=\"active\" ui-sref=\"settings\">Settings</a>\n  <div class=\"right menu \">\n                    <div class=\"item\">\n                        <div class=\"ui transparent1 icon input inverted transparent search\">\n                            <input type=\"text\" class=\"prompt\" placeholder=\"Search...\">\n                            <i class=\"search link icon\"></i>\n                            <div class=\"results\"></div>\n                        </div>\n                    </div>\n\n                    <div class=\"ui item dropdown top\" ng-show=\"navbar.user.loggedIn\">\n                        <img class=\"ui circular1 avatar tiny \" style=\"width:24px; height:24px; margin:0px; margin-right:5px;\" ng-src=\"{{navbar.user.avatar.small}}\">\n                        {{navbar.user.name}}\n                        <div class=\"menu\">\n                          <a class=\"item\">Action</a>\n                          <a class=\"ui aider\"></a>\n                          <a class=\"item\">Seperated link</a>\n                          <a class=\"item\" ui-sref=\"index\" ng-click=\"navbar.doLogout()\">Log Out</a>\n                        </div>\n                    </div>\n</div>       \n\n            </div>\n            </div>\n        </div>\n        <div class=\"mobile only row\">\n            <div class=\"ui inverted navbar menu\">\n                <a href=\"\" class=\"brand item\">Project Name</a>\n                <div class=\"right menu open\">\n                    <a href=\"\" class=\"menu item\">\n                        <i class=\"reorder icon\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"ui vertical navbar menu\">\n                <a href=\"\" class=\"active item\">Home</a>\n                <a href=\"\" class=\"item\">About</a>\n                <a href=\"\" class=\"item\">Contact</a>\n                <div class=\"ui item\">\n                    <div class=\"text\">Dropdown</div>\n                    <div class=\"menu\">\n                        <a class=\"item\">Action</a>\n                        <a class=\"item\">Another action</a>\n                        <a class=\"item\">Something else here</a>\n                        <a class=\"ui aider\"></a>\n                        <a class=\"item\">Seperated link</a>\n                        <a class=\"item\">One more seperated link</a>\n                      </div>\n                </div>\n                <div class=\"menu\">\n                    <a href=\"\" class=\"active item\">Default</a>\n                    <a href=\"\" class=\"item\">Static top</a>\n                    <a href=\"\" class=\"item\">Fixed top</a>\n                </div>\n            </div>\n        </div>\n</div>\n");
$templateCache.put("navbar/navbarnew.html","\n\n<div class=\"ui grid\" >\n    <div class=\"computer tablet only row\" >\n        <div class=\"ui fixed top inverted menu medium main\" >\n            <div class=\"ui container cd-main-nav \" ng-class=\"{\'moves-out\':navbar.isUserMenuVisible}\">\n                <div class=\"title item header\"  ui-sref=\"index1\" >Eventmeapp</div>\n                \n                <a class=\"item\" ui-sref=\"index\" ui-sref-active=\"active\">\n                    <i class=\"icon home\"></i> \n                    Home\n                </a>\n\n                <a class=\"item\" ui-sref-active=\"active\" ui-sref=\"events\">\n                    <i class=\"icon search\"></i> \n                    Discover\n                </a>\n\n                \n                <div class=\"right menu \">\n                    <div class=\"item\">\n                        <div class=\"ui transparent1 icon input inverted transparent search\">\n                            <input type=\"text\" class=\"prompt\" placeholder=\"Search...\">\n                            <i class=\"search link icon\"></i>\n                            <div class=\"results\"></div>\n                        </div>\n                    </div>\n\n                    <div class=\"ui item dropdown1 top user-holder \" ng-show=\"navbar.user.loggedIn\">\n                       <a class=\"cd-subnav-trigger\" href=\"\" ng-click=\"navbar.toggleUserMenu()\">\n                            <img class=\"ui circular1 avatar tiny image\" style=\"width:24px; height:24px; margin:0px; margin-right:5px;\" ng-src=\"{{navbar.user.avatar.small}}\">\n                            {{navbar.user.name}}\n                            \n                        </a>\n                    </div>\n                </div><!-- End of right menu -->  \n<div class=\"user-menu ui menu\" >\n   <div class=\"ui container\">\n                            <a class=\"item\" ui-sref-active=\"active\" ui-sref=\"profile\">\n                                <i class=\"icon user\"></i>\n                                Me\n                            </a>\n              \n                             <a class=\"item\" ui-sref-active=\"active\" ui-sref=\"follow\">Following</a>\n                             <a class=\"item\" ui-sref-active=\"active\" ui-sref=\"settings\">\n                                <i class=\"icon setting\"></i>\n                                Settings\n                             </a>\n                              \n                              <a class=\"item\" ui-sref=\"index\" ng-click=\"navbar.doLogout()\">\n                                <i class=\"sign out icon\"></i>\n                                Sign out\n                              </a>\n                              </div>\n                            </div>\n\n            </div><!-- End of container -->\n\n\n\n\n        </div><!-- End of ui menu-->\n    </div><!-- End of computer-->\n    \n    <div class=\"mobile only row\">\n            <div class=\"ui inverted navbar menu\">\n                <a href=\"\" class=\"brand item\">Project Name</a>\n                <div class=\"right menu open\">\n                    <a href=\"\" class=\"menu item\">\n                        <i class=\"reorder icon\"></i>\n                    </a>\n                </div>\n            </div>\n            <div class=\"ui vertical navbar menu\">\n                <a href=\"\" class=\"active item\">Home</a>\n                <a href=\"\" class=\"item\">About</a>\n                <a href=\"\" class=\"item\">Contact</a>\n                <div class=\"ui item\">\n                    <div class=\"text\">Dropdown</div>\n                    <div class=\"menu\">\n                        <a class=\"item\">Action</a>\n                        <a class=\"item\">Another action</a>\n                        <a class=\"item\">Something else here</a>\n                        <a class=\"ui aider\"></a>\n                        <a class=\"item\">Seperated link</a>\n                        <a class=\"item\">One more seperated link</a>\n                      </div>\n                </div>\n                <div class=\"menu\">\n                    <a href=\"\" class=\"active item\">Default</a>\n                    <a href=\"\" class=\"item\">Static top</a>\n                    <a href=\"\" class=\"item\">Fixed top</a>\n                </div>\n            </div>\n        </div>\n</div>\n");
$templateCache.put("navbar/user.html","<div class=\"ui vertical navbar menu\">\n        <a href=\"\" class=\"active item\">Home</a>\n        <a href=\"\" class=\"item\">About</a>\n        <a href=\"\" class=\"item\">Contact</a>\n        <div class=\"ui item\">\n            <div class=\"text\">Dropdown</div>\n            <div class=\"menu\">\n                <a class=\"item\">Action</a>\n                <a class=\"item\">Another action</a>\n                <a class=\"item\">Something else here</a>\n                <a class=\"ui aider\"></a>\n                <a class=\"item\">Seperated link</a>\n                <a class=\"item\">One more seperated link</a>\n              </div>\n        </div>\n        <div class=\"menu\">\n            <a href=\"\" class=\"active item\">Default</a>\n            <a href=\"\" class=\"item\">Static top</a>\n            <a href=\"\" class=\"item\">Fixed top</a>\n        </div>\n</div>");
$templateCache.put("profile/profile.html","\n<div class=\"page profile\">\n\n<div class=\"header segment\">\n  <div class=\"ui container\">\n    <div class=\"ui items\">\n      <div class=\"item\">\n   \n        <div class=\"middle aligned content\">\n          <div class=\"ui image-octogon mini image\">\n              <div class=\"octogon\">\n                 <img ng-src=\"{{profile.user.avatar.large}}\" class=\"ui image\" alt=\"User profile picture\" />\n              </div>\n          </div>\n          <div class=\"header user\">{{profile.user.name}}</div>\n          <div class=\"right floated\">\n            <div class=\"ui four column grid \">\n              <div class=\"column  wide\">\n                <div class=\"ui horizontal segment \">\n                  <div class=\"ui mini statistic\">\n                    <div class=\"value\">{{profile.user.following}}</div>\n                    <div class=\"label\">Following </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"column wide\">\n                <div class=\"ui horizontal segment \">\n                  <div class=\"ui mini statistic\">\n                    <div class=\"value\">1,250</div>\n                    <div class=\"label\">Events</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"column wide\">\n                <div class=\"ui horizontal segment \">\n                  <div class=\"ui mini statistic\">\n                    <div class=\"value\">{{profile.user.followers}}</div>\n                    <div class=\"label\">Followers </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"column wide\">\n                \n                   <div class=\"ui primary button\" ng-hide=\"isMe\">Follow</div>\n                   <div class=\"ui primary button\" ng-show=\"isMe\">Edit</div>\n              </div>\n            </div><!-- End of floated Content -->\n          </div>\n        </div>\n      </div><!-- End of Item -->\n    </div><!-- End of items-->\n\n\n \n\n  </div><!-- End of Container Segment-->\n</div><!-- End of Header Segment-->\n\n\n\n<div class=\"ui container\">\n<div class=\"ui relaxed items\">\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <a class=\"header\">12 Years a Slave</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <a class=\"header\">My Neighbor Totoro</a>\n    </div>\n  </div>\n  <div class=\"item\">\n    <div class=\"ui tiny image\">\n      <img src=\"/images/wireframe/image.png\">\n    </div>\n    <div class=\"middle aligned content\">\n      <a class=\"header\">Watchmen</a>\n    </div>\n  </div>\n</div>\n</div>\n\n\n\n<div class=\"ui centered grid\">\n\n\n\n    <div class=\"two wide column\">\n      \n       \n\n        <div class=\"ui horizontal divider\">\n          Stats\n        </div>\n        <div class=\"stats-panel\">\n          <div class=\"row\">\n            Followed By : {{0}}\n          </div>\n          <div class=\"row\">\n            Follows : {{0}}\n          </div>\n          <div class=\"row\">\n            Events Created : {{0}}\n          </div>\n          <div class=\"row\">\n            Last Seen: One Day Ago\n          </div>\n        </div>\n    </div>\n    <div class=\"six wide column\">\n        <div class=\"ui grid\">\n          <div class=\"row\">\n              <div class=\"eight wide column\">\n                  <strong>Name</strong>\n              </div>\n              <div class=\"eight wide column\">\n                  {{profile.user.name}}\n              </div>\n          </div>\n\n          <div class=\"row\" ng-show=\"profile.user.settings.showGender\">\n              <div class=\"eight wide column\">\n                  <strong>Sex</strong>\n              </div>\n              <div class=\"eight wide column\">\n                  <span class=\"{{profile.user.gender | gender}}\" />\n              </div>\n          </div>\n\n          <div class=\"row\" ng-show=\"profile.user.settings.showEmail\">\n              <div class=\"eight wide column\">\n                  <strong>E-Mail</strong>\n              </div>\n              <div class=\"eight wide column\">\n                  {{profile.user.email}}\n              </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"column wide column\">\n              {{profile.user || json}}\n            </div>\n          </div>\n        </div>\n    </div>\n\n    <div class=\"four wide column\">\n        <!-- Padding -->\n    </div>\n\n</div>\n\n</div>");
$templateCache.put("search/search_users.html","<div class=\"ui transparent1 icon input search\">\n  <input type=\"text\" class=\"prompt\" placeholder=\"Search...\">\n  <i class=\"search link icon\"></i>\n  <div class=\"results\"></div>\n</div>");
$templateCache.put("settings/settings.html","<div>\n    <span class=\"fa fa-spinner\" /> Work in progress...\n</div>");}]);
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
/**
 * The EventMeUp main AngularJS module.
 *
 * (c) Marijan Gregurić, Luka Skukan @ 2015
 * Version 0.1.0
 */

(function() {
    'use strict';

    angular
        .module('emu.api',
        [
            'emu.api.utils',
            'emu.auth',
            'emu.user'
        ]);

    angular
        .module('emu.views',
         [
             'emu.views.index',
             'emu.views.profile',
             'emu.auth',
             'emu.navbar',
             'emu.fx'
        ]);

    angular
        .module('emu', [
            'emu.api',
            'emu.views',
            'emu.status',
            'satellizer',
            'ngSanitize',
            'ui.router',
            'ngResource',
            'ngTouch',
            'angularSpinner'
        ])
        .config(configureSatellizer)
        .config(configureStates)
        .run(CatchAuthErrors)
        .run(LoadUser);


    configureSatellizer.$inject = ['$authProvider'];


    function configureSatellizer($authProvider) {
        $authProvider.facebook({
            clientId: '1460287160888476',
            url : 'api/dev/auth/facebook'

        });

        $authProvider.google({
            clientId: '640161769176-l1n9r4iu4d2626ov6qse6ad3bmmhp8g9.apps.googleusercontent.com',
            url : 'auth/google'
        });
    }

    configureStates.$inject = [
        '$stateProvider',
        '$urlRouterProvider',
        'profileProvider',
        'currentUser',
        'emuStatusProvider'
    ];

    function configureStates($stateProvider, $urlRouterProvider, profileProvider, user, statusProvider) {
        /**
         * Set the default state
         */
        $urlRouterProvider.otherwise('/');

        /**
         * Configure the states by calling creator functions
         */
        $stateProvider
            .state('index', indexState())
            .state('about', aboutState())
            .state('events', eventsState())
            .state('follow', followState())
            .state('profile', profileState())
            .state('settings', settingsState());

        /**
         * State constructor function block
         */

        function indexState() {
            return {
                url : '/',
                templateUrl : 'index/index.html',
                controller : 'IndexController',
                controllerAs : 'index'
            };
        }

        function aboutState() {
            return {
                url : 'about',
                templateUrl : 'about/about.html'
            };
        }

        function eventsState() {
            return {
                url : 'events',
                templateUrl : 'events/events.html',
                resolve : {
                    authenticated : Authenticated
                }
            };
        }

        function followState() {
            return {
                url : 'follow',
                templateUrl : 'following/following.html',
                resolve : {
                    authenticated : Authenticated
                }
            };
        }

        function profileState() {

            return {
                url : 'profile',
                templateUrl : 'profile/profile.html',
                controller : 'ProfileController',
                controllerAs : 'profile',
                resolve : {
                    authenticated : Authenticated,
                    profile : function() {
                      return profileProvider.$get();
                    },
                    user : function(profile, authenticated, $stateParams) {
                        if(!authenticated) {
                          return; //Nothing is going to happen anyway
                        }

                        var status = statusProvider.$get();

                        status.setBusy(); //Toggle loading spinner

                        return profile
                            .load($stateParams.id)//Load by id, null means load myself
                            .then(function(user) {
                                status.setFree(); //Kill loading spinner
                                return user.data;
                        });
                    },
                    currentUser : function() {
                        return user;
                    }
                }
            };
        }

        function settingsState() {
            return {
                url : 'settings',
                templateUrl : 'settings/settings.html',
                resolve : {
                    authenticated : Authenticated
                }
            };
        }

        // User authentification for restricted pages
        Authenticated.$inject = ['$q', 'currentUser'];

        function Authenticated($q, user) {
            var deferred = $q.defer();

            if(user.loggedIn) {
                deferred.resolve(true);
            } else {
                deferred.reject(false);
            }

            return deferred.promise;
        }
    }

    // If authentication fails, handle it and redirect to index
    CatchAuthErrors.$inject = ['$rootScope', '$state', 'emuStatus', 'nag'];

    function CatchAuthErrors($rootScope, $state, status, nag) {
        $rootScope.$on('$stateChangeError', function () {
            //Kill the spinner
            status.setFree();

            // Redirect user to our login page
            $state.go('index');
            nag.flash('You have to log in first!', 2000);
        });
    }

    LoadUser.$inject = ['loadUser'];

    function LoadUser(loadUser) {
        loadUser();
    }
})();

(function () {
    'use strict';

    angular
        .module('emu.api.auth', ['emu.api.utils', 'emu.user'])
        .factory('register', Register)
        .factory('login', Login)
        .factory('logout', Logout)
        .factory('saveUser', SaveUser)
        .factory('loadUser', LoadUser);

    /**
     * Registers the user by e-mail, name and password via api
     */
    Register.$inject = ['api'];

    function Register(api) {
        function register(name, email, password, timezone) {
            return api.post(
                'auth/register',
                {
                    "name" : name,
                    "email" : email,
                    "password" : password,
                    "timezone_offset" : timezone
                }).then(
                function (response) {
                    return response.data;
                }
            );
        }

        return register;
    }

    /**
     * Performs a vanilla e-mail/password login via api
     */
    Login.$inject = ['api'];

    function Login(api) {
        function login(email, password) {
            return api.post(
                'auth/login',
                {"email" : email, "password" : password}).then(
                function (response) {
                    return response.data;
                }
            );
        }

        return login;
    }

    /**
     * Erases all record the user is logged in from the front-end
     */
    Logout.$inject = ['currentUser'];

    function Logout(currentUser) {
        return function() {
            currentUser.loggedIn = false;
            currentUser.token = '';
            currentUser.name = '';
            currentUser.email = '';
            currentUser.avatar = '';
            currentUser.id = '';
            currentUser.lastSeen = '';

            //Remove user from local storage, if any
            if(localStorage) {
                localStorage.removeItem('emu.user');
            }
        };
    }

    /**
     * Record a given response  containing the user into the user constant and,
     * if possible, local storage
     */
    SaveUser.$inject = ['currentUser'];

    function SaveUser(currentUser) {
        return function(response) {
            currentUser.name = response.data.name;
            currentUser.id = response.data.id;
            currentUser.email = response.data.email;
            currentUser.lastSeen = response.data.last_seen;
            currentUser.avatar = response.data.avatar;
            currentUser.loggedIn = true;

            //If there is such a thing as local storage (HTML5), also save the user in it
            if(localStorage) {
                localStorage.setItem('emu.user', JSON.stringify(currentUser));
            }
        };
    }

    /**
     * Load the user from local storage if such a user exists and local storage is available
     */

    LoadUser.$inject = ['currentUser'];

    function LoadUser(currentUser) {
        // TODO expired token handling?
        return function() {
            // Check whether local storage is defined
            if (localStorage) {
                var user = localStorage.getItem('emu.user');

                if (user) {
                    user = JSON.parse(user);

                    currentUser.token = user.token;
                    currentUser.name = user.name;
                    currentUser.id = user.id;
                    currentUser.email = user.email;
                    currentUser.avatar = user.avatar;
                    currentUser.lastSeen = user.lastSeen;
                    currentUser.loggedIn = user.loggedIn;
                }
            }
        };
    }

})();

(function() {
    'use strict';

    angular
        .module('emu.auth', ['emu.api.auth', 'emu.user', 'templates', 'emu.status', 'satellizer', 'emu.fx'])
        .directive('emuRegister', RegisterDirective)
        .directive('emuLogin', LoginDirective)
        .directive('emuSignup', SignupDirective);


    function pad(number, length){
        var str = "" + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }

    function getTimezoneOffset() {
        var offset = new Date().getTimezoneOffset();
        return ((offset<0? '+':'-') + pad(parseInt(Math.abs(offset/60)), 2) + pad(Math.abs(offset%60), 2));
    }

    RegisterDirective.$inject = ['$templateCache'];

    function RegisterDirective($templateCache) {

        RegisterController.$inject = ['register', 'saveUser', 'emuStatus'];

        function RegisterController(register, saveUser, status) {
            var self = this;

            self.doRegister = doRegister;
            self.errors = {};
            self.busy = status;


            function doRegister() {
                self.busy.setBusy();
                self.errors = {};
                var tzo = getTimezoneOffset();

                register(
                    self.name,
                    self.email,
                    self.password,
                    tzo
                ).then(recordSuccess, recordFailure);
            }

            function recordSuccess(response) {
                saveUser(response);

                self.busy.setFree();
                self.email = '';
                self.name = '';
                self.password = '';
            }

            function recordFailure(response) {
                if(response.data.error) {
                    if(angular.isObject(response.data.error.message)) {
                        self.errors = response.data.error.message;
                    } else {
                        self.errors = {
                            _general : response.data.error.message
                        };
                    }
                }

                self.busy.setFree();
            }

        }

        return {
            restrict : 'E',
            scope : {},
            controller : RegisterController,
            controllerAs : 'register',
            template : $templateCache.get('auth/register.html')
        };
    }

    LoginDirective.$inject = ['$templateCache'];

    function LoginDirective($templateCache) {
        LoginController.$inject = ['login', 'saveUser', 'emuStatus', '$auth'];

        function LoginController(login, saveUser, status, $auth) {
            var self = this;
            self.busy = status;
            self.errors = {};
            self.doLogin = doLogin;
            self.authenticate = socialAuth;

            function socialAuth(provider) {
                $auth.authenticate(provider)
                     .then(success, failure);
            }

            function doLogin() {
                self.errors = {};
                self.busy.setBusy();

                login(
                    self.email,
                    self.password
                ).then(
                    success,
                    failure
                );
            }

            function success(response) {
                console.log('response');
                saveUser(response);

                self.busy.setFree();
                self.email = '';
                self.password = '';
            }

            function failure(response) {
              console.log('failure', response);
                if(response.data.error) {
                    if(angular.isObject(response.data.error.message)) {
                        self.errors = response.data.error.message;
                    } else {
                        self.errors = {
                            _general : response.data.error.message
                        };
                    }
                }

                self.busy.setFree();

            }
        }

        return {
            restrict : 'E',
            template : $templateCache.get('auth/login.html'),
            scope : {},
            controller : LoginController,
            controllerAs : 'login'
        };
    }

    SignupDirective.$inject = ['$templateCache'];

    function SignupDirective($templateCache) {

        return {
            restrict : 'E',
            scope : {},
            template : $templateCache.get('auth/signup.html')
        };
    }

})();

(function() {
    'use strict';

    angular
        .module('emu.user', [])
        .constant('currentUser', {
            loggedIn : false,
            token : '',
            name : '',
            email : '',
            id: '',
            lastSeen: {}
        });
})();

(function () {
    'use strict';

    angular
        .module('emu.fx', ['templates'])
        .directive('emuFadeIn', FadeInDirective)
        .directive('emuNag', NagDirective)
        .directive('emuTabs', SemanticTabs)
        .directive('emuTab', SemanticTab);

    function FadeInDirective() {
      return {
          restrict : 'A',
          link : linkFadeIn
      };

      function linkFadeIn(scope, element, attrs) {
          $(element).find('.field').addClass('hidden');
          element = $('.field', element);

          //element = $(element.toArray().reverse());
          element.transition({
              animation: 'fade up',
              reverse: 'auto', // default setting
              interval: 600,
              duration: 2000,
              queue: false
          });

      }
    }

    NagDirective.$inject = ['$templateCache'];

    function NagDirective($templateCache) {
      return {
          restrict : 'E',
          scope : {},
          template : $templateCache.get('fx/nag.html'),
          controller : NagController,
          controllerAs : 'nag'
      };
    }

    NagController.$inject = ['nag'];

    function NagController(nag) {
        var self = this;

        self.data = nag.data;
        self.hide = nag.hide;

        function hide() {
            nag.hide();
        }
    }

    SemanticTabs.$inject = ['$templateCache'];

    function SemanticTabs($templateCache) {
      return {
        restrict : 'E',
        scope : {},
        transclude : true,
        template : $templateCache.get('fx/tabs.html'),
        controller : TabsCtrl,
        controllerAs : 'tabs'
      };
    }

    TabsCtrl.$inject = ['$scope'];

    function TabsCtrl($scope) {
      var self = this;

      self.tabs = [];
      self.addTab = addTab; //this ! Must be to be accessible by child!
      self.activate = activate;
      self.lastIndex = 0;
      self.activeIndex = 0;
      self.getActiveIndex = getActiveIndex;

      function getActiveIndex() {
        return self.activeIndex;
      }

      function addTab(tabName) {
        var index = 0 + self.lastIndex++;
        tabName = tabName || ('Tab ' + (index + 1));

        self.tabs.push(tabName);
        return index;
      }

      function activate(index) {
        self.activeIndex = index;
      }

    }

    SemanticTab.$inject = ['$templateCache'];

    function SemanticTab($templateCache) {
      return {
        restrict : 'E',
        transclude : true,
        scope : {label : '@'},
        require : '^emuTabs',
        template : $templateCache.get('fx/tab.html'),
        link : linkTab
      };

      function linkTab(scope, element, attrs, tabsCtrl) {
        scope.index = tabsCtrl.addTab(scope.label);
        scope.activeIndex = 0;
        scope.class = scope.index === scope.activeIndex ? 'active' : '';

        scope.$watch(
          tabsCtrl.getActiveIndex,
          function(active) {
            scope.activeIndex = active;
            scope.class = scope.index === scope.activeIndex ? 'active' : '';
          }
        );
      }
    }
})();

(function () {
    'use strict';

    angular
        .module('emu.fx')
        .filter('gender', Gender);

    function Gender() {
        return function(input) {
            var genderClass = "fa fa-";

            if(input === 'male') {
                return genderClass + 'mars';
            } else if(input === 'female') {
                return genderClass + 'venus';
            }

            return genderClass + 'genderless';
        };
    }
})();
(function () {
    'use strict';

    angular
        .module('emu.fx')
        .factory('nag', Nag);


    Nag.$inject = ['$timeout'];

    function Nag($timeout) {
        var NagContainer = {
            data : {
                show : false,
                message : '',
                dismissible : false
            },
            flash : flash,
            display : display,
            hide : hide
        };

        /**
         * Show a dismissible message that does not disppear on its own and has to be dismissed by a user.
         * @param message The message to show
         */
        function display(message) {
            NagContainer.data.message = message;
            NagContainer.data.show = true;
            NagContainer.data.dismissible = true;
        }

        /**
         * Show a message that is dismissed after a given number of milliseconds. If no number is given, it
         * disappears after one second.
         *
         * @param message The message to show
         * @param delay Duration of message being show in milliseconds.
         */
        function flash(message, delay) {
            delay = delay || 1000; //Default to one second

            NagContainer.data.message = message;
            NagContainer.data.show = true;
            NagContainer.data.dismissible = false;

            $timeout(NagContainer.hide, delay);
        }

        /**
         * Hide the message window
         */
        function hide() {
            NagContainer.data.message = '';
            NagContainer.data.show = false;
        }

        return NagContainer;
    }
})();
(function(){
    angular
        .module('emu.views.index', ['emu.user'])
        .controller('IndexController', Index);

    Index.$inject = ['currentUser'];

    function Index(user) {
        var self = this;
        self.user = user;


    }
})();

(function() {
    angular
        .module('emu.navbar', ['emu.api.auth', 'emu.user', 'templates', 'ui.router'])
        .directive('emuNavbar', Navbar);

    Navbar.$inject = ['$templateCache'];

    function Navbar($templateCache) {
        return {
            restrict : 'E',
            template : $templateCache.get('navbar/navbarnew.html'),
            scope : {},
            controller : NavbarController,
            controllerAs : 'navbar'
        };
    }

    NavbarController.$inject = ['logout', 'currentUser'];

    function NavbarController(logout, user) {
        var self = this;
        self.doLogout = function(){
            logout();
            self.isUserMenuVisible = false;
        };
        
        self.user = user;
        console.log(user);
        self.toggleUserMenu = function (){

            self.isUserMenuVisible = ! self.isUserMenuVisible;
        };
        self.isUserMenuVisible = false;

        $('.dropdown').dropdown();
    }



})();

(function () {
    'use strict';

    angular
        .module('emu.views.profile', ['emu.profile', 'emu.user', 'emu.fx'])
        .controller('ProfileController', ProfileController);

        function ProfileController(profile, user, currentUser) {
            var self = this;

            self.user = user;
            self.editMode = false;
            self.isMe = user.id === currentUser.id;
            self.save = save;
            self.toggleEdit = toggleEdit;
            self.errors = {};

            function toggleEdit() {
                if(self.isMe) {
                    self.editMode = ! self.editMode;
                }
            }

            function save() {
                self.errors = {};
                if(self.editMode && self.isMe) {
                    profile.save(self.user).then(success, failure);
                }
            }

            function success(data) {
                if(data && data.data) {
                    self.user = data.data;
                    self.isMe = self.user.id === currentUser.id;
                }
            }

            function failure(data) {
                if(data && data.error && data.error.message) {
                    if(angular.isObject(data.error.message)) {
                        self.errors = data.error.message;
                    } else {
                        self.errors = {_general : data.error.message};
                    }
                }
            }
        }

})();

(function () {
    'use strict';

    angular
        .module('emu.profile', ['emu.api.utils'])
        .factory('profile', Profile);

    Profile.$inject = ['api'];

    function Profile(api) {
        var profile = {};

        profile.load = getProfile;
        profile.save = saveProfile;

        function getProfile(id) {
            var url = id ? ('profile/' + id) : 'profile/me';

            return api.get(url).then(function(response) {
                return response.data;
            });
        }

        function saveProfile(profile) {
            return api.post('profile/me', profile).then(
                function(response) {
                    return response.data;
                }
            );
        }

        function getFollowers(id){
            var url = 'user/list/followers/'+id;
            return api.get(url).then(function(response) {
                return response.data;
            });
        }

        return profile;
    }

})();
(function() {
    angular
        .module('emu.searchUsers', ['emu.api.auth', 'emu.api.searchUsers', 'templates', 'ui.router'])
        .directive('emuSearchUsers', SearchUsers);

    SearchUsers.$inject = ['$templateCache'];

    function SearchUsers($templateCache) {
        return {
            restrict : 'E',
            template : $templateCache.get('search/search_users.html'),
            scope : {},
            controller : SearchUsersController,
            controllerAs : 'searchusers'
        };
    }

    SearchUsersController.$inject = [ 'searchUsers'];

    function SearchUsersController(searchUsers) {
        var self = this;
        self.search = function(){
            alert('search');
        };

    }



})();

(function () {
    'use strict';

    angular
        .module('emu.api.searchUsers', ['emu.api.utils', 'emu.user'])
        .factory('searchUsers', SearchUsers);

    /**
     * Registers the user by e-mail, name and password via api
     */
    SearchUsers.$inject = ['api'];

    function SearchUsers(api) {
        function register(name) {
            return api.get(
                'auth/register',
                {
                    "token" : name
                }).then(
                function (response) {
                    return response.data;
                }
            );
        }

        return register;
    }





})();

(function() {
    'use strict';

    angular
        .module('emu.api.utils', ['emu.user']);
})();

(function () {
    'use strict';

    angular
        .module('emu.api.utils')
        .factory('apiLink', ApiLink)
        .factory('api', Api);

    function ApiLink() {
        var defVersion = 'v1/';

        return function(path, domain, version) {
          domain = domain || 'http://api.eventmeapp.dev';
          version = version || defVersion;

          var basePath = domain + version;

          //Normalise the string in regards to leading slashes
          while(path.charAt(0) === '/') {
              path = path.substring(1);
          }

          //Links the path to the api prefix
          return basePath + path;
        };
    }

    Api.$inject = ['$http', 'apiLink', 'currentUser'];

    function Api($http, link, currentUser) {
        var api = {};

        api.get = doGet;
        api.post = doPost;
        api.put = doPut;
        api.delete = doDelete;

        /**
         * Inner functions/methods
         */

        /**
         * Extends a given headers (or empty object if no argument is provided) with the JWTAuth-required
         * token-bearing authorization header, provided a user is logged in at all. Otherwise returns the given
         * object (or {} if no object was given).
         * @param headers Object containing $http headers
         * @returns Object containing $http headers extended with authorization header
         */
        function addToken(options) {
            if(currentUser.loggedIn && currentUser.token) {
                options = options || {};

                var headers = options.headers || {};

                headers = angular.extend(headers, {'Authorization' : 'Bearer ' + currentUser.token});
                options.headers = headers;

                return options || {};
            }

            return options;
        }

        /**
         * If there is a token inside the (root) of the given response, it is retrieved and refreshed on the
         * current user.
         *
         * @param response $http response
         */
        function retrieveToken(response) {
            if(response.data && response.data.token) {
                currentUser.token = response.data.token;
            }

            // Return promise to keep the then chain going
            return response;
        }

        function doGet(url, options) {
            options = addToken(options);

            return $http.get(link(url), options).then(retrieveToken);
        }

        function doPost(url, data, options) {
            options = addToken(options);

            return $http.post(link(url), data, options).then(retrieveToken);
        }

        function doPut(url, data, options) {
            options = addToken(options);

            return $http.put(link(url), data, options).then(retrieveToken);
        }

        function doDelete(url, options) {
            options = addToken(options);

            return $http.delete(link(url), options).then(retrieveToken);
        }

        /**
         * Return
         */
        return api;
    }
})();

(function() {
    'use strict';

    angular
        .module('emu.status', ['angularSpinner'])
        .service('emuStatus', Spinner);

    Spinner.$inject = ['usSpinnerService'];

    function Spinner(spinner) {
        this.busy = false;

        this.setBusy = function(key) {
            key = key || 'main-spinner';
            this.busy = true;
            spinner.spin(key);
        };

        this.setFree = function(key) {
            key = key || 'main-spinner';
            this.busy = false;
            spinner.stop(key);
        };

        return this;
    }
})();