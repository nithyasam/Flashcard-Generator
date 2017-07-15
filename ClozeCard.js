function ClozeCard(text, cloze){
	//---Scope-safe constructor---
	if(this instanceof ClozeCard){
		this.cloze = cloze;
		this.partial = text.replace(cloze,"...");
		this.fullText = text;
	}
	else {
		return new ClozeCard(text, cloze);
	}
}

module.exports = ClozeCard;