import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `artist-element`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ConcertElement extends PolymerElement {
  static get template() {
    return html`
      <style xmlns="http://www.w3.org/1999/html">
        .concert-container{
          position: relative;
          background: linear-gradient(to right, transparent , #000000) no-repeat, url("resources/Adele.jpg") no-repeat, green;
          background-size: 200px;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
          height: 100px;
          padding: 20px 20px 20px 200px;
        }
        .concert-name{
          font-weight: bold;
          font-size: 2em;
        }
        .concert-address{
          font-weight: bold;
          font-size: 1.24em;
        }
      </style>
      <div class="concert-container">
        <div class="concert-name">[[concert.artist.alias]]</div>
        <div class="concert-name">[[concert.venue.name]]</div>
        <div class="concert-name">[[concert.date]]</div>
        <div class="concert-name">[[concert.begin]]</div>
      </div>
    `;
  }

  static get properties() {
    return {
      concert: {
        type: Object
      },
    };
  }
}

window.customElements.define('catalogue-concert-element', ConcertElement);