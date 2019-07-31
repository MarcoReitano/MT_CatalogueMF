import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `artist-element`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ArtistDetailView extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <style xmlns="http://www.w3.org/1999/html">
      </style>
      <div>
      blaa
        <p>{{this.location.params.id}}</p>
        <p>[[this.location.params.id]]</p>
        <p>[[location.params.id]]</p>
        <p>[[location.params.id]]</p>
        <p>[[arrayItem(this.location.params.*),0)]]</p>
        <p>[[arrayItem(location.params.*),0)]]</p>
        <div class="artist-alias">[[artist.alias]]</div>
        <div class="artist-genre">[[artist.genre]]</div>
      </div>
    `;
  };

  // @formatter:off
  static get importMeta() {
    return import.meta;
  }
  // @formatter:on

  static get properties() {
    return {
      artistId: {
        type: String
      }
    }
  }

  ready() {
    super.ready();
    console.log('Test1' + window.location.pathname);
    console.log('Test2' + this.location.params.id);
    console.log('Test5' + this.location.pathname);
  }
}

window.customElements.define('catalogue-artist-detail-view', ArtistDetailView);
