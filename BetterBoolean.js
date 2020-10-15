function BetterBoolean(value) {
	this.type = Object.defineProperty(this, "type", {value:"BetterBoolean"});
	this.sign = 1;
	this.state = 0;
	if (value != undefined) {
		if (typeof value == "boolean") {
			this.sign = 1;
			if (value) {
				this.state = 1;
			} else {
				this.state = 0;
			}
		} else if (typeof value == "object" && value.constructor.name == "BetterBoolean") {
			this.sign = value.sign;
			this.state = value.state;
		} else if (typeof value == "string" && (value == "true" || value == "false" || value == "-true" || value == "-false")) {
			switch (value) {
				default:
					throw "Invalid initial value";
					break;
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
			} else if (value == -0) {
				this.sign = -1;
				this.state = 0;
			} else {
				this.sign = 1;
				this.state = 0;
			}
		} else {
			throw "Invalid initial value";
		}
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
		var returnValue = new BetterBoolean("false");
		switch (typeof other) {
			default:
				throw "Invalid comparison type";
				break;
			case "boolean":
				if (this.sign == 1) {
					if ((this.state == 1 && other) || (this.state == 0 && !other)) {
						returnValue.setState(1);
					}
				}
				break;
			case "string":
				if (other.toLowerCase() == this.toString()) {
					returnValue.setState(1);
				}
				break;
			case "number":
				if (this.toInt() == other) {
					returnValue.setState(1);
				}
				break;
			case "object":
				if (other.constructor.name == "BetterBoolean") {
					if (this.state == other.state && this.sign == other.sign) {
						returnValue.setState(1);
					}
				} else {
					throw "Invalid comparison type";
				}
				break;
		}
		return returnValue;
	}
	this.set = function(value) {
		if (value != undefined) {
			if (typeof value == "boolean") {
				this.sign = 1;
				if (value) {
					this.state = 1;
				} else {
					this.state = 0;
				}
			} else if (typeof value == "object" && value.constructor.name == "BetterBoolean") {
				this.sign = value.sign;
				this.state = value.state;
			} else if (typeof value == "string" && (value == "true" || value == "false" || value == "-true" || value == "-false")) {
				switch (value) {
					default:
						throw "Invalid initial value";
						break;
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
				} else if (value == -0) {
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
				if (sign) {
					this.sign = -1;
				} else {
					this.sign = 1;
				}
				break;
			case "object":
				if (sign.constructor.name == "BetterBoolean") {
					switch (sign.toString()) {
						case "true":
							this.sign = -1;
						case "-false":
							this.sign = -1;
							break;
						case "-true":
							this.sign = 1;
						case "false":
							this.sign = 1;
							break;
					}
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
				if (state) {
					this.state = 1;
				} else {
					this.state = 0;
				}
				break;
			case "object":
				if (sign.constructor.name == "BetterBoolean") {
					switch (state.toString()) {
						case "true":
							this.state = 1;
						case "-false":
							this.state = 1;
							break;
						case "-true":
							this.state = 0;
						case "false":
							this.state = 0;
							break;
					}
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
