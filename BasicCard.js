function BasicCard(front, back){
	//---Scope-safe constructor---
	if(this instanceof BasicCard){
		this.front = front;
		this.back = back;
	}
	else {
		return new BasicCard(front, back);
	}
}

module.exports = BasicCard;