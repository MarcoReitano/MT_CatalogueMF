import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `artist-element`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CatalogueSearchResults extends PolymerElement {

  constructor() {
    super();
    this._boundListener = this._myLocationListener.bind(this);
  }

  static get template() {
    return html`

      <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <div class="search-container">
        <app-indexeddb-mirror 
          id="datastore"
          key="search"
          log=false>
        </app-indexeddb-mirror>
        <template is="dom-repeat" items="{{searchData._embedded.artists}}" as="artist">
          <catalogue-artist-element artist="{{artist}}"></catalogue-artist-element>
        </template>
      </div>
    `;
  }

  // @formatter:off
  static get importMeta() {
    return import.meta;
  }

  static get properties() {
    return {
      artist: {
        type: Object
      }
    };
  }
  // @formatter:on

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('catalogueSearch', this._boundListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('catalogueSearch', this._boundListener);
  }

  _myLocationListener(e) {
    console.log("Event received");
    this.$.datastore.getStoredValue().then(data => {
      this.searchData = data;
    });
  }
}

window.customElements.define('catalogue-search-results',
    CatalogueSearchResults);
