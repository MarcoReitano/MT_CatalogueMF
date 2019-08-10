import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `catalogue-venue-detail-view`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class VenueDetailView extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <style xmlns="http://www.w3.org/1999/html">
      </style>
      <div>
        Venue detail view
        <p>[[location.params.id]]</p>

        <!--<app-indexeddb-mirror -->
          <!--id="datastore"-->
          <!--key="search">-->
        <!--</app-indexeddb-mirror>-->
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
      venue: {
        type: Object
      },
      venueData: {
        type: Array
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    console.log("connectedCallback");
  }

  ready() {
    super.ready();
    console.log("ready");
  }
}

window.customElements.define('catalogue-venue-detail-view', VenueDetailView);
