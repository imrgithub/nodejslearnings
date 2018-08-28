var Tutor=require('./Tutorial.js');
exports.NodeTutorial=function()
{
	console.log("Node Tutorial")		
	exports.NodeTutorial.ParentTutor=function()
	{
		var pTutor=Tutor
		pTutor.tutorial();	
	};
}