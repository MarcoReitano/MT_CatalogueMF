import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js'
import '@polymer/iron-ajax/iron-ajax.js';

/**
 * `artist-list`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class VenueList extends PolymerElement {
  constructor() {
    super();
  }

  static get template() {
    return html`
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <style>
        .venue-list {
          display: block;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }
        .list-title {
          color:black
        }
      </style>
      <div class="venue-list">
        <h1 class="list-title">Venue list</h1>

        <template is="dom-repeat" items="[[responseData._embedded.venues]]">
          <catalogue-venue-element venue="{{item}}"></catalogue-venue-element>
        </template>

        <iron-ajax 
          auto 
          url="https://api.marcoreitano.dev/venues/"
          handle-as="json"
          last-Response="{{responseData}}"
          on-response="_handleResponse"
          debounce-duration="300">
        </iron-ajax>
      </div>
    `;
  }

  static get properties() {
    return {
      artists: {
        type: Array
      }
    };
  }

  _handleResponse(event, request) {
    console.log("Response venues!");
  }
}

window.customElements.define('catalogue-venue-list', VenueList);
