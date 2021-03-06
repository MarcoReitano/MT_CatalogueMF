import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js'
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/app-storage/app-indexeddb-mirror/app-indexeddb-mirror.js'

/**
 * `artist-list`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ArtistList extends PolymerElement {
  constructor() {
    super();
  }

  static get template() {
    return html`
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
          
      <style>
        .artist-list {
          display: block;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }
        .list-title {
          color:black
        }
      </style>
      
      <div class="artist-list">
        <h1 class="list-title">Artists list</h1>

        <template is="dom-repeat" items="{{persistedData._embedded.artists}}" as="artist">
          <catalogue-artist-element artist="{{artist}}"></catalogue-artist-element>
        </template>

        <iron-ajax 
          auto 
          url="https://api.marcoreitano.dev/artists/"
          handle-as="json"
          last-Response="{{liveData}}"
          on-response="_handleResponse"
          debounce-duration="300">
        </iron-ajax>
        
        <app-indexeddb-mirror
          key="artists"
          data="{{liveData}}"
          persisted-data="{{persistedData}}">
        </app-indexeddb-mirror>
        
      </div>
    `;
  }

  static get properties() {
    return {
      artists: {
        type: Array
      }
    };
  }

  // @formatter:off
  static get importMeta() {
    return import.meta;
  }
  // @formatter:on

  _handleResponse(event, request) {
    console.log("Response!");
  }
}

window.customElements.define('catalogue-artist-list', ArtistList);
