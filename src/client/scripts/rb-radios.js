/***********
 * RB-RADIOS
 ***********/
import { PolymerElement, html } from '../../../@polymer/polymer/polymer-element.js';
import '../../../@polymer/polymer/lib/elements/dom-repeat.js';

import template from '../views/rb-radios.html';

export class RbRadios extends PolymerElement {
	/* Lifecycle
	 ************/
	constructor() {
		super();
	}

	connectedCallback() {
		super.connectedCallback();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
	}

	/* Properties
	 *************/
	static get properties() {
		return {
			value: {
				type: Object,
				notify: true,
				observer: '_valueChanged'
			},
			data: {
				type: Array
			}
		}
	}

	/* Event Handlers
	 *****************/
	_handleClick(e, detail, sender) {
		this.value = e.model.item;
	}

	_valueChanged(newValue, oldValue) {
		var _radios = this.root.querySelectorAll('.rb-radio');
		for (var i = _radios.length - 1; i >= 0; i--) {
			if (_radios[i].getAttribute("value") != this.value){
				_radios[i].classList.remove("active");
				continue;
			}
			_radios[i].classList.add("active");
		}
	}


	/* Template
	 ***********/
	static get template() { // :string
		return html template;
	}
}

customElements.define('rb-radios', RbRadios);
