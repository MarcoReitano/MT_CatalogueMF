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
      Artist detail view
        <p>[[location.params.id]]</p>
        <div class="artist-alias">[[artist.alias]]</div>
        <div class="artist-genre">[[artist.genre]]</div>
        <template is="dom-repeat" items="{{concerts}}" as="concert">
          <catalogue-concert-element concert="{{concert}}"></catalogue-concert-element>
        </template>
        <iron-ajax id="concertAPI" 
          url="https://api.marcoreitano.dev/concerts/search/findByArtist"
          handle-as="json"
          last-Response="{{concertLiveData}}"
          on-response="_handleConcertAPIResponse"
          debounce-duration="300">
        </iron-ajax>
        <app-indexeddb-mirror
          key="concerts"
          data="{{concertLiveData}}"
          persisted-data="{{concertPersistedData}}">
        </app-indexeddb-mirror> 
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
      },
      concerts: {
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
      this.artistsData = data._embedded.artists;
      this.artist = this.artistsData.find(
          artist => artist.id === this.location.params.id);
      this._getConcerts();
    });

  }

  ready() {
    super.ready();
    console.log("ready");
  }

  _getConcerts() {
    this.$.concertAPI.set('params',
        {"artisturi": this.artist._links.self.href});
    this.$.concertAPI.generateRequest();
  }

  _handleConcertAPIResponse() {
    console.log("ConcertAPI Response");
    this.concerts = this.concertPersistedData._embedded.concerts;
  };
}

window.customElements.define('catalogue-artist-detail-view', ArtistDetailView);
