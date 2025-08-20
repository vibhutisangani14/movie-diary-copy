// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"bjC8Z":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "cbcbf289fdb79b41";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"2O6fb":[function(require,module,exports,__globalThis) {
// Importing functions for search rendering and event handling
var _searchJs = require("../search.js");
var _appJs = require("../app.js");
var _storageJs = require("../../storage.js");
// DOM element container for the movie journal
const movieListContainer = document.querySelector("#movieList-journal");
(0, _searchJs.searchEventListners)();
(0, _searchJs.renderSearchList)();
/**
 * Fetches favorite movies from localStorage and renders them to the DOM.
 * Also enables toggling of the movie overview text and saving notes per movie.
 *
 * @function getMovieFromLocalStorage
 */ const getMovieFromLocalStorage = ()=>{
    // Get favorite movies from localStorage, defaulting to empty array
    const favouriteMovies = JSON.parse(localStorage.getItem("favouriteMovie")) || [];
    movieListContainer.innerHTML = ""; // Clear existing content
    favouriteMovies.forEach((movie)=>{
        //overview text
        const shortOverview = movie.overview.length > 100 ? movie.overview.slice(0, 100) + "..." : movie.overview;
        const movieElement = document.createElement("div");
        movieElement.className = "max-auto text-white rounded-lg shadow-md";
        // Set inner HTML of movie element with poster, title, notes icon, and overview;
        movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster" 
        class="border-gray-800 rounded-lg border-4 hover:border-white
        transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mb-2"/>
    
      <div class="p-2 flex justify-between">
        <h1 class="text-2xl font-bold mb-2 w-5/6">${movie.title}</h1>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          id="notes-icon"
          class="ml-2 w-5 h-5 text-center cursor-pointer mt-2"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-file-text"
          viewBox="0 0 24 24"
        >
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      </div>
     <p class="text-gray-300">
        Info: <span class="short-text">${shortOverview}</span>
        <span class="full-text hidden">${movie.overview}</span>
        <button class="toggle-btn text-blue-400 underline ml-1">Read more</button>
      </p>

    `;
        movieListContainer.appendChild(movieElement);
        (0, _appJs.toggleOverviewText)(movieElement);
        // Enable saving of notes for this movie to localStorage
        (0, _storageJs.saveNotesToLocalStorage)(movie, movieElement);
    });
};
// Execute function to render favorite movies on page load
getMovieFromLocalStorage();

},{"../search.js":"8gVq6","../app.js":"bNKaB","../../storage.js":"kS9sU"}],"8gVq6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "searchEventListners", ()=>searchEventListners);
parcelHelpers.export(exports, "renderSearchList", ()=>renderSearchList);
var _networkJs = require("../network.js");
const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");
const searchEventListners = ()=>{
    searchBtn.addEventListener("click", (e)=>{
        e.stopPropagation(); // Prevent closing immediately
        searchBox.classList.remove("w-0", "opacity-0", "mx-0");
        searchBox.classList.add("w-64", "opacity-100", "mx-2");
        searchBox.focus();
    });
    document.addEventListener("click", (e)=>{
        if (!searchWrapper.contains(e.target)) {
            searchBox.classList.remove("w-64", "opacity-100", "mx-2");
            searchBox.classList.add("w-0", "opacity-0", "mx-0");
            searchBox.blur();
        }
    });
};
const renderSearchList = ()=>{
    //fetching Search list from The Movie Database API
    (0, _networkJs.fetchSearchList)();
    //Rendering Search list to the DOM
    const renderSearchList = (movies, query)=>{
        const filtered = movies.filter((movie)=>movie.title.toLowerCase().includes(query));
        filtered.forEach((movie)=>{
            const div = document.createElement("div");
            div.className = "flex flex-row px-3 py-2 hover:bg-gray-700 cursor-pointer";
            div.innerHTML = `
     <img
                    src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"
                    alt="demo"
                    class="w-[40px] h-[60px]"
                  />
                  <div class="flex flex-col justify-center">
                    <div class="ml-2 text-[0.8rem]">${movie.title}</div>
                  </div>`;
            div.addEventListener("click", ()=>{
                searchBox.value = movie.title;
                suggestions.classList.add("hidden");
            });
            suggestions.appendChild(div);
            suggestions.classList.toggle("hidden", filtered.length === 0);
        });
    };
    // Fetching and rendering the Search list
    const fetchAndRenderSearchList = async (query)=>{
        try {
            const movies = await (0, _networkJs.fetchSearchList)(query);
            console.log("Fetched movies:", movies);
            renderSearchList(movies, query);
        } catch (error) {
            console.error("Error fetching movie list:", error);
            return;
        }
    };
    searchBox.addEventListener("input", ()=>{
        const query = searchBox.value.toLowerCase();
        suggestions.innerHTML = "";
        if (query) fetchAndRenderSearchList(query);
        else suggestions.classList.add("hidden");
    });
    document.addEventListener("click", (event)=>{
        if (!event.target.closest("#searchBox") && !event.target.closest("#suggestions")) suggestions.classList.add("hidden");
    });
};

},{"../network.js":"gukqw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gukqw":[function(require,module,exports,__globalThis) {
// API key for accessing The Movie Database (TMDb) API
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// Exporting functions for use in other modules
parcelHelpers.export(exports, "fetchMovieList", ()=>fetchMovieList);
parcelHelpers.export(exports, "fetchSearchList", ()=>fetchSearchList);
const api_key = "db85a489a7f0131f0f43f57e6a905f19";
/**
 * Fetches a list of popular movies from TMDb API.
 *
 * @async
 * @function fetchMovieList
 * @returns {Promise<Array>} A promise that resolves to an array of movie objects.
 * @throws {Error} Throws an error if the API response is not OK.
 */ const fetchMovieList = async ()=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${api_key}`);
    // Handle network errors (non-200 responses)
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results; // Return only the results (movie array)
};
/**
 * Fetches a list of movies matching a search query from TMDb API.
 *
 * @async
 * @function fetchSearchList
 * @param {string} queryP - The search query string (e.g., movie title).
 * @returns {Promise<Array>} A promise that resolves to an array of matching movie objects.
 * @throws {Error} Throws an error if the API response is not OK.
 */ const fetchSearchList = async (queryP)=>{
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${queryP}&
    include_adult=false&language=en-US&page=1&api_key=${api_key}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data.results;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bNKaB":[function(require,module,exports,__globalThis) {
// Importing necessary functions from other modules
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleOverviewText", ()=>toggleOverviewText);
var _searchJs = require("./search.js");
var _storageJs = require("../storage.js");
var _networkJs = require("../network.js");
// Container where movies will be rendered
const movieListContainer = document.querySelector("#movieList-container");
// Initialize search functionality
(0, _searchJs.searchEventListners)();
(0, _searchJs.renderSearchList)();
/**
 * Renders a list of movies into the DOM.
 * @param {Array} movies - Array of movie objects fetched from API.
 */ const renderMovieList = (movies)=>{
    movies.forEach((movie)=>{
        const movieElement = document.createElement("div");
        movieElement.className = "max-auto text-white rounded-lg shadow-md";
        // Get current favourite movies from localStorage
        const currentFavourites = JSON.parse(localStorage.getItem("favouriteMovie")) || [];
        const isFavourite = currentFavourites.some((m)=>m.id === movie.id);
        // Shorten movie overview if it's too long
        const shortOverview = movie.overview.length > 100 ? movie.overview.slice(0, 100) + "..." : movie.overview;
        // Movie card HTML structure
        movieElement.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} poster" 
        class="border-gray-800 rounded-lg border-4 hover:border-white
        transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg mb-2"/>
      
      <div class="p-2 flex justify-between">
        <h1 class="text-2xl font-bold mb-2 w-5/6">${movie.title}</h1>
        
        <!-- Favourite Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" 
             fill="${isFavourite ? "red" : "none"}" 
             viewBox="0 0 24 24" stroke-width="1.5" 
             stroke="currentColor" 
             class="w-5 h-5 cursor-pointer fav-icon hover:scale-110 transition-transform w-1/6 mt-1">
          <path stroke-linecap="round" stroke-linejoin="round" 
                d="M21.435 4.582a5.373 5.373 0 00-7.606 0L12 6.41l-1.829-1.828a5.373 5.373 0 00-7.606 7.606l1.828 1.828L12 21.435l7.607-7.606 1.828-1.828a5.373 5.373 0 000-7.606z" />
        </svg>
        
        <!-- Notes Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="notes-icon"
          class="ml-2 w-5 h-5 text-center cursor-pointer mt-1"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-file-text"
          viewBox="0 0 24 24"
        >
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      </div>

      <!-- Movie Overview -->
      <p class="text-gray-300">
        Info: <span class="short-text">${shortOverview}</span>
        <span class="full-text hidden">${movie.overview}</span>
        <button class="toggle-btn text-blue-400 underline ml-1">Read more</button>
      </p>
    `;
        // Append movie card to container
        movieListContainer?.appendChild(movieElement);
        // Add toggle functionality for overview text
        toggleOverviewText(movieElement);
        // Save favourite movies and notes to localStorage
        (0, _storageJs.saveMovieToLocalStorage)(movie, movieElement);
        (0, _storageJs.saveNotesToLocalStorage)(movie, movieElement);
    });
};
/**
 * Adds "Read more / Read less" toggle functionality for movie overview.
 * @param {HTMLElement} movieElement - The movie card element.
 */ const toggleOverviewText = (movieElement)=>{
    const toggleBtn = movieElement.querySelector(".toggle-btn");
    const shortText = movieElement.querySelector(".short-text");
    const fullText = movieElement.querySelector(".full-text");
    toggleBtn.addEventListener("click", ()=>{
        if (fullText.classList.contains("hidden")) {
            shortText.classList.add("hidden");
            fullText.classList.remove("hidden");
            toggleBtn.textContent = "Read less";
        } else {
            shortText.classList.remove("hidden");
            fullText.classList.add("hidden");
            toggleBtn.textContent = "Read more";
        }
    });
};
/**
 * Renders an error message on the UI.
 * @param {string} message - The error message to display.
 */ const renderErrorMessage = (message)=>{
    if (!movieListContainer) return;
    movieListContainer.innerHTML = `
    <div class="flex justify-center items-center w-full">
      <div class="max-w-md w-full text-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
        <strong class="font-bold">Error: </strong>
        <span class="block sm:inline">${message}</span>
      </div>
    </div>
  `;
};
/**
 * Fetches movie list from API and renders it.
 * Displays error message if fetch fails.
 */ const fetchAndRenderMovieList = async ()=>{
    try {
        const movies = await (0, _networkJs.fetchMovieList)();
        if (!movies || movies.length === 0) {
            console.warn("No movies found from API.");
            renderMovieList([]);
            return;
        }
        console.log("Fetched movies:", movies);
        renderMovieList(movies);
    } catch (error) {
        console.error("Error fetching movie list:", error);
        renderErrorMessage("Failed to load movies. Please try again later.");
    }
};
// Fetch movies on page load
fetchAndRenderMovieList();

},{"./search.js":"8gVq6","../storage.js":"kS9sU","../network.js":"gukqw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kS9sU":[function(require,module,exports,__globalThis) {
// Save movie to local storage
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "saveMovieToLocalStorage", ()=>saveMovieToLocalStorage);
parcelHelpers.export(exports, "saveNotesToLocalStorage", ()=>saveNotesToLocalStorage);
const saveMovieToLocalStorage = (movie, movieElement)=>{
    const favIcon = movieElement.querySelector(".fav-icon");
    favIcon.addEventListener("click", ()=>{
        let currentFavourites = JSON.parse(localStorage.getItem("favouriteMovie")) || [];
        const exists = currentFavourites.some((m)=>m.id === movie.id);
        if (!exists) {
            currentFavourites.push({
                ...movie,
                count: 1
            });
            favIcon.setAttribute("fill", "red");
            console.log(`${movie.title} added to favourites.`);
        } else {
            currentFavourites = currentFavourites.filter((m)=>m.id !== movie.id);
            favIcon.setAttribute("fill", "none");
            console.log(`${movie.title} removed from favourites.`);
        }
        localStorage.setItem("favouriteMovie", JSON.stringify(currentFavourites));
    });
};
// Save Notes to local storage
const saveNotesToLocalStorage = (movie, movieElement)=>{
    const notesIcon = movieElement.querySelector("#notes-icon");
    notesIcon.addEventListener("click", ()=>{
        const dialogOverlay = document.querySelector("#dialogOverlay");
        const noteText = document.querySelector("#noteText");
        const saveBtn = document.querySelector("#saveBtn");
        const closeBtn = document.querySelector("#closeBtn");
        const storageKey = "Notes";
        const savedNotes = JSON.parse(localStorage.getItem(storageKey)) || [];
        const existingNote = savedNotes.find((n)=>n.id === movie.id);
        noteText.value = existingNote ? existingNote.content : "";
        dialogOverlay.classList.remove("hidden");
        saveBtn.onclick = ()=>{
            const filtered = savedNotes.filter((n)=>n.id !== movie.id);
            if (noteText.value.trim()) filtered.push({
                id: movie.id,
                content: noteText.value.trim()
            });
            localStorage.setItem(storageKey, JSON.stringify(filtered));
            dialogOverlay.classList.add("hidden");
        };
        closeBtn.onclick = ()=>dialogOverlay.classList.add("hidden");
        dialogOverlay.onclick = (e)=>{
            if (e.target === dialogOverlay) dialogOverlay.classList.add("hidden");
        };
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["bjC8Z","2O6fb"], "2O6fb", "parcelRequire8370", {})

//# sourceMappingURL=journal.js.map
