import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `artist-element`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ArtistElement extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <style xmlns="http://www.w3.org/1999/html">
        .artist-container{
          position: relative;
          background: linear-gradient(to right, transparent , #000000) no-repeat, url("./resources/Adele.jpg") no-repeat, black;
          background-size: 200px;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
          height: 100px;
          padding: 20px 20px 20px 200px;
        }
        .artist-alias{
          font-weight: bold;
          font-size: 2em;
        }
        .artist-genre{
          font-weight: bold;
          font-size: 1.24em;
        }
        .artist-bubble{
          display: inline-block;
          height: 100px;
          border-radius: 50%;          
        }
        .socialmedia-bar{
          position: absolute;
          right: 20px;
          bottom: 20px;
        }
        .socialmedia-icon{
          width: 20px;
        }
      </style>
      <div class="artist-container">
        <p>[[importPath]]</p>
        <div class="artist-alias">[[artist.alias]]</div>
        <div class="artist-genre">[[artist.genre]]</div>
        <div class="socialmedia-bar">
        
          <template is="dom-if" if="{{artist.facebookURI}}">
            <a href="[[artist.facebookURI]]">
              <img class="socialmedia-icon" src$="[[importPath]]resources/flogo-HexRBG-Wht-58.png" alt="facebook">
            </a>
          </template>  
                  
          <template is="dom-if" if="{{artist.twitterURI}}">
            <a href="[[artist.twitterURI]]">
              <img class="socialmedia-icon" src$="[[importPath]]resources/Twitter_Social_Icon_Square_White.png" alt="twitter">
            </a>
          </template>
          
          <template is="dom-if" if="{{artist.mtvURI}}">
            <a href="[[artist.mtvURI]]">
              <img class="socialmedia-icon" src$="[[importPath]]resources/mtv-icon-white-200px.png" alt="mtv">
            </a>
          </template>
        </div>
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
    };
  }
}

window.customElements.define('catalogue-artist-element', ArtistElement);
