import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `artist-element`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class VenueElement extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <style xmlns="http://www.w3.org/1999/html">
        .venue-container{
          position: relative;
          background: linear-gradient(to right, transparent , #000000) no-repeat, url("resources/Adele.jpg") no-repeat, black;
          background-size: 200px;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
          height: 100px;
          padding: 20px 20px 20px 200px;
        }
        .venue-name{
          font-weight: bold;
          font-size: 2em;
        }
        .venue-address{
          font-weight: bold;
          font-size: 1.24em;
        }
      </style>
      <div class="venue-container">
        <div class="venue-name">[[venue.name]]</div>
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
      venue: {
        type: Object
      },
    };
  }
}

window.customElements.define('catalogue-venue-element', VenueElement);
