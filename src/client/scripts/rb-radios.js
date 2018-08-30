/************
 * RB-RADIOS
 ************/
import { props, html, RbBase } from '../../rb-base/scripts/rb-base.js';
import type from '../../rb-base/scripts/type-service.js';
import validate from './validation.js';
import template from '../views/rb-radios.html';

export class RbRadios extends RbBase() {
	/* Lifecycle
	 ************/
	constructor() {
		super();
		this.state = {
			guid: this.rb.guid.create(5)
		}
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

	/* Helpers
	 **********/
	getKey(code) { // :string | void
		if (!code) return;
		return code.toLowerCase();
	}
	clearPrevCheckedRadio(value) { // needed for firefox
		const radio = this.shadowRoot.querySelector('input[checked]');
		if (radio && radio.value !== value) radio.checked = false;
	}
	valueChanged(value) { // boolean
		const valueChanged = this.value !== value;
		if (valueChanged) this.clearPrevCheckedRadio(value);
		return valueChanged;
	}
	toggleValue() { // void (mutator: this.value and updates dom)
		this.value = undefined;
		this.shadowRoot.querySelector('input[checked]').checked = false;
	}
	setValue(value) { // void
		const valueChanged = this.valueChanged(value);
		if (valueChanged) return this.value = value;
		if (this.toggle) return this.toggleValue();
	}

	/* Observer
	 ***********/
	updating(prevProps) { // :void
		if (prevProps.value === this.value) return;
		this.rb.events.emit(this, 'value-changed', {
			detail: { value: this.value }
		});
	}

	/* Event Handlers
	 *****************/
	_onclick(value, evt) { // :void
		this.setValue(value);
	}
	_onkeypress(value, evt) { // :void
		const keys = ['enter','space'];
		const key  = this.getKey(evt.code);
		if (keys.indexOf(key) === -1) return;
		evt.preventDefault(); // prevent space key from moving page down
		this.setValue(value);
		if (this.value === undefined) return;
		// evt.currentTarget = label
		evt.currentTarget.querySelector('input').checked = true;
	}

	/* Template
	 ***********/
	render({ props, state }) { // :string
		return html template;
	}
}

customElements.define('rb-radios', RbRadios);
