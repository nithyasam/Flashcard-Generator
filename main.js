var ClozeCard 	= require("./ClozeCard.js");
var BasicCard 	= require("./BasicCard.js");
var inquirer	= require("inquirer");
//---For choosing BasicCard/ClozeCard option---
var question_set1 = [{
	name:"choice",
	message: "Press 1 for BasicCard \n  Press 2 for ClozeCard\n"
}
];
//---For BasicCard option---
var question_set2 = [{
	name: "front",
	message: "Enter the front text: "
},
{
	name:"back",
	message: "Enter the back text: "
}
];
//---For ClozeCard option---
var question_set3 = [{
	name: "fullText",
	message: "Enter the full text: "
},
{
	name:"cloze",
	message: "Enter the cloze: "
}
];

inquirer.prompt(question_set1).then(function(answer){
	//---BasicCard---
	if(answer.choice == "1"){
		inquirer.prompt(question_set2).then(function(answer){
			//---constructor called without the new keyword(scope-safe)---
			var basicCardObj = BasicCard(answer.front, answer.back);
			console.log("Front: "+basicCardObj.front+"\nBack: "+ basicCardObj.back);
		});
	}
	//---ClozeCard---
	else if(answer.choice == "2"){
		inquirer.prompt(question_set3).then(function(answer){
			//---Checking if cloze exists in the full text entered.---
			if(answer.fullText.includes(answer.cloze)){
				//---constructor called without the new keyword(scope-safe)---
				var clozeCardObj = ClozeCard(answer.fullText, answer.cloze);
				console.log("Full Text   : "+ clozeCardObj.fullText +
						  "\nPartial Text: "+ clozeCardObj.partial +
						  "\nCloze       : "+ clozeCardObj.cloze);
			}
			else {
				console.log("'"+ answer.cloze +"' is not present in the text '"+
					answer.fullText+"'");
			}
		});
	}
});