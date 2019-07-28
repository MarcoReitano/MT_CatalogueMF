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
class ConcertList extends PolymerElement {
  constructor() {
    super();
  }

  static get template() {
    return html`
      <style>
        .concert-list {
          display: block;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }
        .list-title {
          color:black
        }
      </style>
      <div class="concert-list">
        <h1 class="list-title">Concert list</h1>

        <template is="dom-repeat" items="[[responseData._embedded.concerts]]">
          <catalogue-concert-element concert="{{item}}"></catalogue-concert-element>
        </template>

        <iron-ajax 
          auto 
          url="https://api.marcoreitano.dev/concerts/"
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
    console.log("Response concerts!");
  }
}

window.customElements.define('catalogue-concert-list', ConcertList);
