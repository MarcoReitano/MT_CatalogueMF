import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `artist-element`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class CatalogueSearch extends PolymerElement {

  constructor() {
    super();
  }

  static get template() {
    return html`
      <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <div class="search-container">
        <div class="field has-addons">
          <div class="control is-expanded">
            <input id="searchInput" class="input" type="text" placeholder="Find an artist or event" on-input="search">
          </div>
          <div class="control">
            <button class="button" on-click="search">Search</button>
          </div>
        </div>        
      </div>

      <iron-ajax id="searchAPI" 
        url="https://api.marcoreitano.dev/artists/search/findByAlias_AliasIgnoreCaseContaining"
        handle-as="json"
        last-Response="{{liveData}}"
        on-response="_handleResponse"
        debounce-duration="300">
      </iron-ajax>
      <app-indexeddb-mirror
        key="search"
        data="{{liveData}}"
        persisted-data="{{persistedData}}"
        log=false>
      </app-indexeddb-mirror> 
      <iron-ajax 
        id="accountTest" 
        url="https://login.marcoreitano.dev/auth/realms/Mitneve/account"
        handle-as="json"
        on-response="_handleResponse"
        debounce-duration="300">
      </iron-ajax>
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
    }
  };

  // @formatter:on

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  search() {
    this.searchValue = this.$.searchInput.value;
    this.$.searchAPI.set('params', {"alias": this.searchValue});
    this.$.searchAPI.generateRequest();
    window.history.pushState({}, null, '/search');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }

  _handleResponse() {
    this.dispatchEvent(
        new CustomEvent('catalogueSearch', {bubbles: true, composed: true}));
  };
}

window.customElements.define('catalogue-search', CatalogueSearch);
