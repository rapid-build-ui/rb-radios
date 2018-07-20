/************
 * RB-RADIOS
 ************/
import { props, withComponent } from '../../../skatejs/dist/esnext/index.js';
import { html, withRenderer } from './renderer.js';
import EventService from './event-service.js';
import type from './type.js';
import validate from './validation.js';
import validationMessages from './validation-messages.js';
import template from '../views/rb-radios.html';

export class RbRadios extends withComponent(withRenderer()) {
	/* Lifecycle
	 ************/
	constructor() {
		super();
		this.rbEvent = EventService.call(this);
	}

	/* Properties
	 *************/
	static get props() {
		return {
			disabled: props.boolean,
			horizontal: props.boolean,
			inline: props.boolean,
			label: props.string, // radios label
			labelProp: props.string, // TODO: radio label
			right: props.boolean,
			stacked: props.boolean, // TODO: change default to unstacked
			subtext: props.string,
			toggle: props.boolean,
			validation: Object.assign({}, props.array, {
				// TODO: support for custom functions
				deserialize(val) { return eval(val); }
			}),
			data: Object.assign({}, props.array, {
				deserialize(val) { // :array
					if (type.is.array(val)) return val;
					if (!type.is.string(val)) return val;
					val = val.trim();
					if (/^\[[^]*\]$/.test(val)) return JSON.parse(val);
					return val;
				}
			}),
			value: Object.assign({}, props.any, {
				deserialize(val) { // :boolean | string | object
					val = type.is.string(val) ? val.trim() : val;
					let newVal;
					switch (true) {
						case /^(?:true|false)$/i.test(val): // boolean
							newVal = /^true$/i.test(val);
							break;
						case /^{[^]*}$/.test(val): // object
							newVal = JSON.parse(val);
							break;
						default:  // string
							newVal = val;
					}
					return newVal;
				}
			}),
			// TODO
			_eMsg: props.string,
			_dirty: props.boolean,
			_valid: Object.assign({}, props.boolean, {
				default: true
			})
		}
	}

	/* Observer
	 ***********/
	updating(prevProps) { // :void
		if (prevProps.value === this.value) return;
		this.rbEvent.emit(this, 'value-changed', {
			detail: { value: this.value }
		});
	}

	/* Event Handlers
	 *****************/
	_onclick(val) {
		if (this.toggle && this.value === val){
			this.value = undefined;
			return;
		}
		this.value = val;

	}

	/* Template
	 ***********/
	render({ props }) { // :string
		return html template;
	}
}

customElements.define('rb-radios', RbRadios);
