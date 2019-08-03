import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `artist-element`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class HomeView extends PolymerElement {
  static get template() {
    return html`
    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
      <style xmlns="http://www.w3.org/1999/html">
      </style>
      <div>
        <button on-click="test">Testbutton</button>
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
      artistId: {
        type: String
      }
    }
  }

  test() {
    // window.location.href = "/artist/123";
    // window.dispatchEvent(new CustomEvent(
    //     `vaadin-router-go`, {cancelable: true, pathname: '/artist/123'}
    // ));
    window.history.pushState({}, null, '/artist/123');
    window.dispatchEvent(new PopStateEvent('popstate'));
  }
}

window.customElements.define('catalogue-home-view', HomeView);
