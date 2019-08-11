import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `catalogue-concert-detail-view`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ConcertDetailView extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <style xmlns="http://www.w3.org/1999/html">
      </style>
      <div class="concertdetailviewcontainer">
        Concert detail view
        <ticketing-ticket-list
          concerturi=[[concert._links.self.href]]></ticketing-ticket-list>       
        {{concert._links.self.href}}
        <app-indexeddb-mirrorpol
          id="concertdatastore"
          key="concerts">
        </app-indexeddb-mirrorpol> 

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
      concert: {
        type: Object
      },
      concertsData: {
        type: Array
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("connectedCallback");
    this.$.concertdatastore.getStoredValue().then(data => {
      this.concertsData = data._embedded.concerts;
      this.concert = this.concertsData.find(
          concert => concert.id === this.location.params.id);
    });
  }

  ready() {
    super.ready();
    console.log("ready");
  }
}

window.customElements.define('catalogue-concert-detail-view',
    ConcertDetailView);
