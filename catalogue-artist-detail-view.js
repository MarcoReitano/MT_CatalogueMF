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
        <app-indexeddb-mirror 
          id="datastore"
          key="search">
        </app-indexeddb-mirror>
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
      artist: {
        type: Object
      },
      artistsData: {
        type: Array
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("connectedCallback");
    //find from indexdc
    //or get
    this.$.datastore.getStoredValue().then(data => {
      console.log(data._embedded.arttists);
      this.artistsData = JSON.parse(data._embedded.artists);
      // this.artist = this.artistsData.filter(artist => {
      //   return artist.id === this.location.params.id
      // });
    });
    console.log(this.artistsData);
  }

  ready() {
    super.ready();
    console.log("ready");
  }
}

window.customElements.define('catalogue-artist-detail-view', ArtistDetailView);
