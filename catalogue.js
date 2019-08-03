import '@polymer/app-storage/app-indexeddb-mirror/app-indexeddb-mirror-worker.js'
import '@polymer/app-storage/app-indexeddb-mirror/common-worker-scope.js'
import './artist-element'
import './artist-list'
import './catalogue-search'
import './catalogue-search-results'
import './concert-element'
import './concert-list'
import './venue-element'
import './venue-list'

import './catalogue-artist-detail-view'

if ('serviceWorker' in navigator) {
  // Delay registering until page load
  window.addEventListener('load', function () {
    navigator.serviceWorker.register(
        '/webcomponents/catalogue/service-worker.js');
  });
}
