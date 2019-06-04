/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dbc57f04e08e8bc422521287f410b9ee"
  },
  {
    "url": "assets/css/0.styles.2d9b3752.css",
    "revision": "c6e9b7117b50e3e9384886266ef4ec83"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.f71fdeda.js",
    "revision": "6b5ef812f227e827e1a785c79af35398"
  },
  {
    "url": "assets/js/3.cee8e4e2.js",
    "revision": "86f7c5ef3d8dd3c2c31de917dea192b3"
  },
  {
    "url": "assets/js/4.9bc8c765.js",
    "revision": "644b558c8eb083c633e39506ac2c6e37"
  },
  {
    "url": "assets/js/5.3d8a2aba.js",
    "revision": "974267128c1a5ff8a63c4faba8d5ba51"
  },
  {
    "url": "assets/js/app.b3193a30.js",
    "revision": "47ddec729e3a759c6fd8edebe7093a58"
  },
  {
    "url": "index.html",
    "revision": "d0faf431ab9a89b1a6796e01769a28cd"
  },
  {
    "url": "logo.png",
    "revision": "a53179ca13039218c56cb6bce42e3aa6"
  },
  {
    "url": "wap/zh-cn.html",
    "revision": "5d9d49e00e09980777f0182fe04265a1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
