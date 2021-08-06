importScripts("/vue-typescript-admin-template/precache-manifest.f5d40e916de4eb221bb3689a4c792ff3.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// This is the code piece that GenerateSW mode can't provide for us.
// This code listens for the user's confirmation to update the app.
self.addEventListener('message', (e) => {
  if (e.data) {
    if (e.data === 'skipWaiting') {
      self.skipWaiting()
    }
  }
})

/* eslint-disable no-undef */
workbox.core.clientsClaim()
workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

