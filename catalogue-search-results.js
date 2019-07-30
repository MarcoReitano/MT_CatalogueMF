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
  static get template() {
    return html`

      <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <div class="search-container">
        <catalogue-artist-list></catalogue-artist-list>
      </div>
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
  }
}

window.customElements.define('catalogue-search-results',
    CatalogueSearchResults);
