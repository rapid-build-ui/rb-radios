/************
 * RB-RADIOS
 ************/
import { props, html, RbBase } from '../../rb-base/scripts/rb-base.js';
import FormControl from '../../form-control/scripts/form-control.js';
import Type from '../../rb-base/scripts/type-service.js';
import template from '../views/rb-radios.html';

export class RbRadios extends FormControl(RbBase()) {
	connectedCallback() { // :void
		super.connectedCallback && super.connectedCallback();
		this.validateValue()
	}

	validateValue() { // :void
		if (!this.data.length || !this.value) return;

		switch (true) {
			case Type.is.string(this.data[0]):
				if (this.data.indexOf(this.value) == -1)
					this.value = undefined;
				break;
			case Type.is.object(this.data[0]):
				if (!this.objectArrContains(this.data, this.value))
					this.value = undefined;
				break;
		}

	}

	objectArrContains() { // :boolean
		let isMatch = false;
		for (const item of this.data) {
			if (JSON.stringify(this.value) === JSON.stringify(item)) {
				isMatch = true;
				break;
			};
		}
		return isMatch;
	}

	/* Properties
	 *************/
	static get props() {
		return {
			...super.props,
			horizontal: props.boolean,
			inline: props.boolean,
			label: props.string, // radios label
			labelProp: props.string, // TODO: radio label
			right: props.boolean,
			stacked: props.boolean, // TODO: change default to unstacked
			subtext: props.string,
			toggle: props.boolean,
			data: Object.assign({}, props.array, {
				deserialize(val) { // :array
					if (Type.is.array(val)) return val;
					if (!Type.is.string(val)) return val;
					val = val.trim();
					if (/^\[[^]*\]$/.test(val)) return JSON.parse(val);
					return val;
				}
			}),
			value: Object.assign({}, props.any, {
				deserialize(val) { // :boolean | string | object
					val = Type.is.string(val) ? val.trim() : val;
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
			_dirty: props.boolean
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
	async toggleValue() { // void (mutator: this.value and updates dom)
		this.value = undefined;
		this.shadowRoot.querySelector('input[checked]').checked = false;
		await this.validate();
	}
	async setValue(value) { // void
		const valueChanged = this.valueChanged(value);
		if (valueChanged) {
			this.value = value;
			await this.validate();

			return
		}

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
