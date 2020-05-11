// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/js/main.js":[function(require,module,exports) {
/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/*DARK THEME ADDED*/
var moonpath = "M32 69C32 107.108 71 138 71 138C31.7878 138 0 107.108 0 69C0 30.8924 31.7878 0 71 0C71 0 32 30.8924 32 69Z";
var sunpath = "M142 69C142 107.108 110.212 138 71 138C31.7878 138 0 107.108 0 69C0 30.8924 31.7878 0 71 0C110.212 0 142 30.8924 142 69Z";
var toogle = false;
var darkmode = document.querySelector('.darkmodediv');
darkmode.addEventListener('click', function () {
  var css = document.querySelector('#styles');
  css.href = toogle ? "assets/css/main.css" : "assets/css/darkmain.css";
  var h6 = document.querySelector('.h6');
  h6.innerText = toogle ? "Dark mode" : "Light mode";
  var timeline = anime.timeline({
    duration: 750,
    easing: 'easeOutExpo'
  }).add({
    targets: '#sunpath',
    d: [{
      value: toogle ? sunpath : moonpath
    }]
  }).add({
    targets: '#darkmodesvg',
    rotate: toogle ? 60 : 320
  }, '-=350'); // .add({
  // 	targets:'.darkbtn',
  // 	innerText:toogle ? "Dark Mode" : "Light Mode",
  // 	className:toogle ?"btn darkbtn btn-dark":"btn darkbtn btn-light"
  // },'-=700')

  if (!toogle) {
    toogle = true;
  } else {
    toogle = false;
  }
});
/*DARK THEME FINISHED*/

(function ($) {
  var $window = $(window),
      $body = $('body'),
      $main = $('#main'); // Breakpoints.

  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: ['361px', '480px'],
    xxsmall: [null, '360px']
  }); // Play initial animations on page load.

  $window.on('load', function () {
    window.setTimeout(function () {
      $body.removeClass('is-preload');
    }, 100);
  }); // Nav.

  var $nav = $('#nav');

  if ($nav.length > 0) {
    // Shrink effect.
    $main.scrollex({
      mode: 'top',
      enter: function enter() {
        $nav.addClass('alt');
      },
      leave: function leave() {
        $nav.removeClass('alt');
      }
    }); // Links.

    var $nav_a = $nav.find('a');
    $nav_a.scrolly({
      speed: 1000,
      offset: function offset() {
        return $nav.height();
      }
    }).on('click', function () {
      var $this = $(this); // External link? Bail.

      if ($this.attr('href').charAt(0) != '#') return; // Deactivate all links.

      $nav_a.removeClass('active').removeClass('active-locked'); // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).

      $this.addClass('active').addClass('active-locked');
    }).each(function () {
      var $this = $(this),
          id = $this.attr('href'),
          $section = $(id); // No section for this link? Bail.

      if ($section.length < 1) return; // Scrollex.

      $section.scrollex({
        mode: 'middle',
        initialize: function initialize() {
          // Deactivate section.
          if (browser.canUse('transition')) $section.addClass('inactive');
        },
        enter: function enter() {
          // Activate section.
          $section.removeClass('inactive'); // No locked links? Deactivate all links and activate this section's one.

          if ($nav_a.filter('.active-locked').length == 0) {
            $nav_a.removeClass('active');
            $this.addClass('active');
          } // Otherwise, if this section's link is the one that's locked, unlock it.
          else if ($this.hasClass('active-locked')) $this.removeClass('active-locked');
        }
      });
    });
  } // Scrolly.


  $('.scrolly').scrolly({
    speed: 1000
  });
})(jQuery); // Board member tab animation


var tabs = $(".tabs");
var selector = $(".tabs").find("a").length; //var selector = $(".tabs").find(".selector");

var activeItem = tabs.find(".active");
var activeWidth = activeItem.innerWidth();
$(".selector").css({
  left: activeItem.position.left + "px",
  width: activeWidth + "px"
});
$(".tabs").on("click", "a", function (e) {
  e.preventDefault();
  $(".tabs a").removeClass("active");
  $(this).addClass("active");
  var activeWidth = $(this).innerWidth();
  var itemPos = $(this).position();
  $(".selector").css({
    left: itemPos.left + "px",
    width: activeWidth + "px"
  });
}); // TODO:Improve below code i.e., use function and pass element to be displayed in that

$("#title-current-board-desktop").on("click", function (e) {
  $('#current-board').fadeIn('slow');
  $("#ex-board").fadeOut('fast');
  $("#advisory-board").fadeOut('fast');
});
$("#title-ex-board-desktop").on("click", function (e) {
  $('#ex-board').fadeIn('slow');
  $("#current-board").fadeOut('fast');
  $("#advisory-board").fadeOut('fast');
});
$("#title-advisory-board-mobile").on("click", function (e) {
  $('#advisory-board').fadeIn('slow');
  $("#ex-board").fadeOut('fast');
  $("#current-board").fadeOut('fast');
});
$("#title-current-board-mobile").on("click", function (e) {
  $('#current-board').fadeIn('slow');
  $("#ex-board").fadeOut('fast');
  $("#advisory-board").fadeOut('fast');
});
$("#title-ex-board-mobile").on("click", function (e) {
  $('#ex-board').fadeIn('slow');
  $("#current-board").fadeOut('fast');
  $("#advisory-board").fadeOut('fast');
});
$("#title-advisory-board-desktop").on("click", function (e) {
  $('#advisory-board').fadeIn('slow');
  $("#ex-board").fadeOut('fast');
  $("#current-board").fadeOut('fast');
});
$(document).ready(function () {
  keepCurrentBoardDiv();

  if ($('#content-mobile').css('display') == 'block') {
    $("#title-current-board-mobile").click();
  } else {
    $("#title-current-board-desktop").click();
  }
});

function keepCurrentBoardDiv() {
  $("#ex-board").fadeOut('fast');
  $("#advisory-board").fadeOut('fast');
}
},{}],"C:/Users/Wimpy Warlord/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "4357" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Wimpy Warlord/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/main.js"], null)
//# sourceMappingURL=/main.cea5deef.js.map