function BetterBoolean(value) {
	this.type = Object.defineProperty(this, "type", {value:"BetterBoolean"});
	this.sign = 1;
	this.state = 0;
	if (value != undefined) {
		this.set(value);
	}
	this.toString = function() {
		var returnValue = "";
		if (this.sign == -1) {
			returnValue = "-";
		}
		if (this.state == 0) {
			returnValue = returnValue+"false";
		} else {
			returnValue = returnValue+"true";
		}
		return returnValue;
	}
	this.toInt = function() {
		return this.sign*this.state;
	}
	this.valueOf = function() {
		return this.sign*this.state;
	}
	this.equals = function(other) {
		var otherBB;
		if(other instanceof BetterBoolean) {
			otherBB = other;
		} else {
			otherBB = new BetterBoolean(other);
		}
		return (this.type == otherBB.type && this.sign == otherBB.sign);
	}
	this.set = function(value) {
		if (value != undefined) {
			if (typeof value == "boolean") {
				this.sign = 1;
				this.state = value ? 1 : 0;
			} else if (typeof value == "object" && value.constructor.name == "BetterBoolean") {
				this.sign = value.sign;
				this.state = value.state;
			} else if (typeof value == "string" && (value == "true" || value == "false" || value == "-true" || value == "-false")) {
				switch (value) {
					case "true":
						this.state = 1;
						this.sign = 1;
						break;
					case "false":
						this.state = 0;
						this.sign = 1;
						break;
					case "-true":
						this.state = 1;
						this.sign = -1;
						break;
					case "-false":
						this.state = 0;
						this.sign = -1;
						break;
				}
			} else if (typeof value == "number" && (value == -1 || value == -0 || value == 0 || value == 1)) {
				if (value == 1) {
					this.sign = 1;
					this.state = 1;
				} else if (value == -1) {
					this.sign = -1;
					this.state = 1;
				} else if (Object.is(value,-0)) {
					this.sign = -1;
					this.state = 0;
				} else {
					this.sign = 1;
					this.state = 0;
				}
			} else {
				throw "Invalid value";
			}
		} else {
			throw "No value provided";
		}
	}
	this.setSign = function(sign) {
		switch (typeof sign) {
			default:
				throw "Invalid sign type";
				break;
			case "boolean":
				this.sign = sign ? 1 : -1;
				break;
			case "object":
				if (sign.constructor.name == "BetterBoolean") {
					this.sign = sign.sign;
				} else {
					throw "Invalid sign object type";
				}
				break;
			case "number":
				if (sign == -1 || sign == 1) {
					this.sign = sign;
				} else {
					throw "Invalid sign value";
				}
				break;
			case "string":
				if (sign.toLowerCase() == "false" || sign.toLowerCase() == "positive") {
					this.sign = 1;
				} else if (sign.toLowerCase() == "true" || sign.toLowerCase() == "negative") {
					this.sign = -1;
				} else {
					throw "Invalid sign value";
				}
				break;
		}
	}
	this.setState = function(state) {
		switch(typeof state) {
			default:
				throw "Invalid state type";
				break;
			case "boolean":
				this.state = state? 1 : 0;
				break;
			case "object":
				if (sign.constructor.name == "BetterBoolean") {
					this.state = state.state;
				} else {
					throw "Invalid state object type";
				}
			case "number":
				if (state == 0 || state == 1) {
					this.state = state;
				} else {
					throw "Invalid state value";
				}
				break;
			case "string":
				if (sign.toLowerCase() == "true") {
					this.state = 1;
				} else if (sign.toLowerCase() == "false") {
					this.state = 0;
				} else {
					throw "Invalid sign value";
				}
				break;
		}
	}
	return this.sign*this.state;
}
