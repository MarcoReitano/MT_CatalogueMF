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
        <div class="tile is-ancestor is-vertical">
          <div class="tile">
            <div class="tile is-parent">
              <div class="tile is-child">
                <catalogue-artist-element artist='{"alias":"Ed Sheeran", "genre":"Singer/Songwriter", "facebookuri":"http://www.facebook.com/9189674485"}'></catalogue-artist-element>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child">
                <catalogue-artist-element artist='{"alias":"Ed Sheeran", "genre":"Singer/Songwriter", "facebookuri":"http://www.facebook.com/9189674485"}'></catalogue-artist-element>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child">
                <catalogue-artist-element artist='{"alias":"Ed Sheeran", "genre":"Singer/Songwriter", "facebookuri":"http://www.facebook.com/9189674485"}'></catalogue-artist-element>
              </div>
            </div>
          </div>  
           
          <div class="tile">
            <div class="tile is-parent">
              <div class="tile is-child">
                <catalogue-artist-element artist='{"alias":"Ed Sheeran", "genre":"Singer/Songwriter", "facebookuri":"http://www.facebook.com/9189674485"}'></catalogue-artist-element>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child">
                <catalogue-artist-element artist='{"alias":"Ed Sheeran", "genre":"Singer/Songwriter", "facebookuri":"http://www.facebook.com/9189674485"}'></catalogue-artist-element>
              </div>
            </div>
            <div class="tile is-parent">
              <div class="tile is-child">
                <catalogue-artist-element artist='{"alias":"Ed Sheeran", "genre":"Singer/Songwriter", "facebookuri":"http://www.facebook.com/9189674485"}'></catalogue-artist-element>
              </div>
            </div>
          </div>            
      </div>
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
