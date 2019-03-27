// console.log("Hello");
// function Player(name,team) {
// 	this.name=name;
// 	this.team=team;
// }
// const virat=new Player("Virat Kohali","RCB");
// const msd=new Player("MSD","CSK");
// Player.prototype.greet=function(){
// 	console.log(`Hello,I'm ${this.name}) and I am in ${this.team}`);
// }
// Player.prototype.nickname="Something";
// Prototypal Inheritance allows objects to use newly created properties and/or functions on run-time

class Player{
	constuctor(name,team){
		this.name=name;
		this.team=team;
	}
	greet(){
		console.log(`Hello,I'm ${this.name}) and I am in ${this.team}`);
	}
}
const virat=new Player("Virat Kohali","RCB");
const msd=new Player("MSD","CSK");
