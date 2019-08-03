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
  static get template() {
    return html`
      <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <div class="search-container">
        <div class="field has-addons">
          <div class="control is-expanded">
            <input id="searchInput" class="input" type="text" placeholder="Find an artist or event" on-input="onInput">
          </div>
          <div class="control">
            <button class="button" on-click="searchOnClick">Search</button>
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
        persisted-data="{{persistedData}}">
      </app-indexeddb-mirror> 
      
      <template is="dom-repeat" items="{{persistedData2._embedded.artists}}" as="artist">
        <catalogue-artist-element artist="{{artist}}"></catalogue-artist-element>
      </template>
    `;
  }

  // @formatter:off
  static get importMeta() {
    return import.meta;
  }
  // @formatter:on

  static get properties() {
    return {
      artist: {
        type: Object
      }
    }
  };

  onInput() {
    this.searchValue = this.$.searchInput.value;
    this.$.searchAPI.set('params', {"alias": this.searchValue});
    this.$.searchAPI.generateRequest();
  }

  searchOnClick() {
    this.searchValue = this.$.searchInput.value;
    this.$.searchAPI.set('params', {"alias": this.searchValue});
    this.$.searchAPI.generateRequest();
  };

  _handleResponse() {
    this.dispatchEvent(
        new CustomEvent('catalogueSearch', {bubbles: true, composed: true}));
    console.log("catalogueSearch event dispatched")
  }

}

window.customElements.define('catalogue-search', CatalogueSearch);
