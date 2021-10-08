'use strict';
class BetterBoolean {
	constructor(value) {
		this.sign = 1;
		this.state = false;
		if (value !== undefined) {
			this.set(value);
		}
		return this.valueOf();
	}
	type = "BetterBoolean";
	toString() {
		return ((this.sign == -1) ? "-" : "").concat(this.state.toString());
	}
	toInt() {
		return this.sign * this.state;
	}
	valueOf() {
		return this.toString();
	}
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
