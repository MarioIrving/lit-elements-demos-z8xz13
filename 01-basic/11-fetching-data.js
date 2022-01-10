import { LitElement, html } from 'lit-element';

class FetchingData extends LitElement {
  static get properties() {
    return {
      response: { type: Array }
    }
  }

  constructor() {
    super();
    this.response = [];
  }

  firstUpdated() { 
    fetch ('https://www.balldontlie.io/api/v1/players') 
    .then( r => r.json ()) 
    .then( data => this.handleData( data )); 
  } 

  handleData( data ) { 
    this.response = [ ... data.data ]; 
  } 

  render() { 
    const {  response  } = this; 
    return html` 
      <ul> 
        ${ response . map ( 
          item  =>  html  ` 
            <li> ${ item . first_name }  </li>` 
          )}
      </ul> 
    ` ; 
  } 
}

customElements.define('fetching-data', FetchingData);