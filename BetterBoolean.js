'use strict';
/**
 * The main BetterBoolean class.
 * 
 * @author Joshua Herron
 * @license ISC
 */
class BetterBoolean {
	/**
	 * Create a BetterBoolean.
	 * @param {*} value - (Optional) The initial value to load the BetterBoolean with.
	 */
	constructor(value) {
		this.sign = 1;
		this.state = false;
		if (value !== undefined) {
			this.set(value);
		}
	}
	/**
	 * The type of the BetterBoolean.
	 */
	type = "BetterBoolean";
	/**
	 * Converts the BetterBoolean to a String.
	 * @returns The String representation of the BetterBoolean.
	 */
	toString() {
		return ((this.sign == -1) ? "-" : "").concat(this.state.toString());
	}
	/**
	 * Converts the BetterBoolean to an Integer.
	 * @returns The Integer representation of the BetterBoolean.
	 */
	toInt() {
		return this.sign * this.state;
	}
	/**
	 * Converts the BetterBoolean to its primitive representation.
	 * @returns The String representation of the BetterBoolean.
	 */
	valueOf() {
		return this.toString();
	}
	/**
	 * Set the value of the BetterBoolean.
	 * @param {*} value The value to load into the BetterBoolean.
	 */
	set(value) {
		switch (typeof value) {
			case "boolean":
				this.sign = 1;
				this.state = value;
				break;
			case "string":
				switch (value) {
					default:
						throw new Error("Invalid string value");
					case "true":
						this.sign = 1;
						this.state = true;
						break;
					case "false":
						this.sign = 1;
						this.state = false;
						break;
					case "-true":
						this.sign = -1;
						this.state = true;
						break;
					case "-false":
						this.sign = -1;
						this.state = false;
						break;
				}
				break;
			case "number":
				if (value == 1) {
					this.sign = 1;
					this.state = true;
				} else if (value == -1) {
					this.sign = -1;
					this.state = true;
				} else if (Object.is(value, 0)) {
					this.sign = 1;
					this.state = false;
				} else if (Object.is(value, -0)) {
					this.sign = -1;
					this.state = false;
				} else {
					throw new Error("Invalid numerical value");
				}
				break;
			case "object":
				if (value instanceof BetterBoolean) {
					this.sign = value.sign;
					this.state = value.state;
				} else {
					throw new Error("Invalid object type");
				}
				break;
		}
	}
	/**
	 * Set the sign of the BetterBoolean.
	 * @param {*} sign An object representing what to set the sign of the BetterBoolean to.
	 */
	setSign(sign) {
		switch (typeof sign) {
			default:
				throw new Error("Invalid sign type");
			case "boolean":
			case "string":
			case "number":
				var tmpBB = new BetterBoolean(sign);
				this.setSign(tmpBB);
				break;
			case "object":
				if(sign instanceof BetterBoolean) {
					this.sign = (sign.state ? 1 : -1);
					if (sign.sign == -1) {
						this.sign = (-1)*this.sign;
					}
				}
				break;
		}
	}
	/**
	 * Set the state of the BetterBoolean.
	 * @param {*} state An object representing what to set the stateof the BetterBoolean to.
	 */
	setState(state) {
		switch (typeof state) {
			default:
				throw new Error("Invalid state type");
			case "boolean":
			case "string":
			case "number":
				var tmpBB = new BetterBoolean(state);
				this.setState(tmpBB);
				break;
			case "object":
				if(state instanceof BetterBoolean) {
					this.state = state.state;
					if (state.sign == -1) {
						this.state = !this.state;
					}
				}
				break;
		}
	}
	/**
	 * Compare two BetterBooleans or the BetterBoolean to any compatible type.
	 * @param {*} other The other object to compare the BetterBoolean to.
	 * @returns A BetterBoolean representing if the BetterBoolean and other object are equal.
	 */
	equals(other) {
		var retVal = new BetterBoolean();
		switch (typeof other) {
			default:
				throw new Error("Invalid comparison type");
			case "boolean":
			case "string":
			case "number":
				var tmpBB = new BetterBoolean(other);
				retVal = this.equals(tmpBB);
				break;
			case "object":
				retVal.setState(other instanceof BetterBoolean && this.sign == other.sign && this.state == other.state);
				break;
		}
		return retVal;
	}
}
export default BetterBoolean;
