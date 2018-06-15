/***********
 * RB-RADIOS
 ***********/
import { PolymerElement, html } from '../../../@polymer/polymer/polymer-element.js';
import template from '../views/rb-radios.html';

export class RbRadios extends PolymerElement {
	/* Lifecycle
	 ************/
	constructor() {
		super();
	}

	/* Properties
	 *************/
	static get properties() {
		return {
			kind: {
				type: String,
				value: 'default'
			}
		}
	}

	/* Template
	 ***********/
	static get template() { // :string
		return html template;
	}
}

customElements.define('rb-radios', RbRadios);
