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
            <input class="input" type="text" placeholder="Find an artist or event" value="{{searchValue}}">
          </div>
          <div class="control">
            <button class="button" on-click="searchOnClick">Search</button>
          </div>
        </div>        
      </div>
      
      <iron-ajax 
        auto 
        url="https://api.marcoreitano.dev/artists/search/findByAlias_AliasIgnoreCaseContaining"
        params='{"alias":"ed"}'
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
      },
    };
  };

  searchOnClick() {

  };

}

window.customElements.define('catalogue-search', CatalogueSearch);
