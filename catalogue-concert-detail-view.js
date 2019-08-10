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
      <div>
      Concert detail view works!
        <p>{{this.location.params.id}}</p>
        <p>[[this.location.params.id]]</p>

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
  }

  ready() {
    super.ready();
    console.log("ready");
  }
}

window.customElements.define('catalogue-concert-detail-view',
    ConcertDetailView);
