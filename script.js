class Pokemon{
	constructor(ajaxNumber){
		this.name;
		this.hp;
		this.attack;
		this.defense;
		this.abilities = [];
		this.sprites = [];
		this.types = [];
		this.pokemonID = ajaxNumber;
		this.getPokemon(ajaxNumber);
	}
	getPokemon(ajaxNumber){
		var that = this
		$.ajax({url: "https://fizal.me/pokeapi/api/"+ajaxNumber+".json",
		success: function(result){
					// console.log(result)
					that.hp = that.getHP(result)
					that.attack = that.getAttack(result);
					that.defense = that.getDefense(result);
					that.abilities = that.getAbilities(result);
					that.name = that.getName(result);
					that.sprites = that.getImage(result);
					that.types = that.getType(result);
				}
		})
	}
	getImage(result){
		var imageArray = [];
		imageArray.push(result.sprites.back_default);
		imageArray.push(result.sprites.front_default);
		return imageArray;
	}
	getName(result){
		//sends a name
		return result.name
	}
	getHP(result){
		return result.stats[5].base_stat
	}
	getAttack(result){
		return result.stats[4].base_stat
	}
	getDefense(result){
		return result.stats[3].base_stat
	}
	getAbilities(result){
		let abilityArray = [];
		for(let i = 0 ; i< result.abilities.length;i++){
			abilityArray.push(result.abilities[i].ability.name)
		}
		return abilityArray;
	}
	getType(result){
		var types= [];
		for(let i = 0; i< result.types.length; i++){
			types.push(result.types[i].type.name)
		}
		return types
	}
}

class Trainer{
	constructor(pokemon1,pokemon2,pokemon3){
		this.pokemons = [pokemon1, pokemon2, pokemon3];
	}
	nameAll(){
		for(let i = 0; i<pokemons.length; i++){
			this.pokemons[i].name;
		}
	}
	selectPokemon(name){
		var index = this.pokemons.name.indexOf('name');

	}
}

var bug = ['bug',['dark','grass','psychic'],['fire','flying','rock']];
var dark = ['dark',['ghost','psychic'],['bug','fairy','fighting']];
var dragon = ['dragon',['dragon'],['dragon','fairy','ice']];
var electric =['electric',['flying','water'],['ground']];
var fairy = ['fairy',['dark','dragon','fighting'],['posion','steel']];
var fighting = ['fighting',['dark','ice','normal','rock','steel'],['fairy','flying','psychic']]
var fire = ['fire',['bug','grass','ice','steel'],['ground','rock','water']];
var flying = ['flying',['bug','fighting','grass'],['electric','ice','rock']];
var ghost = ['ghost',['ghost','psychic'],['dark','ghost']];
var grass = ['grass',['ground','rock','water'],['bug','fire','flying','ice','poison']];
var ground = ['ground',['electric','fire','poison','rock','steel'],['grass','ice','water']];
var ice = ['ice',['dragon','flying','grass','ground'],['fighting','fire','rock','steel']];
var normal = ['normal',['none'],['fighting']];
var poison = ['poison',['fairy','grass'],['ground','psychic']];
var psychic = ['psychic',['fighting','poison'],['bug','dark','ghost']];
var rock = ['rock',['bug','fire','flying','ice'],['fighting','grass','ground']]
var water = ['water',['fire','ground','rock'],['electric','grass']];

var allPokemonTypes = [bug,dark,dragon,electric,fairy,fighting,fire,flying,ghost,grass,ground,ice,normal,poison,psychic,rock,water];


var blastoise = new Pokemon(9);
var kadabra = new Pokemon(64);
var arcanine = new Pokemon(59);



var nidoran = new Pokemon(32);
var nidorino = new Pokemon(33);
var nidoking = new Pokemon(34);



var empoleon = new Pokemon(395);
var arceus = new Pokemon(493);
var charizard = new Pokemon(6);
var mannyTrainer = new Trainer(blastoise, kadabra, arcanine);
var kyleTrainer = new Trainer(empoleon,arceus, charizard);
var adamTrainer = new Trainer(nidoran,nidorino,nidoking);

var adam = document.getElementById('adam');
var kyle = document.getElementById('kyle');
var manny = document.getElementById('manny');
var picture = document.getElementById('pokemonImage');

var leftButt = document.getElementById('left');
var rightButt = document.getElementById('right');
var trainerInfo = document.getElementById('trainerInfo');
var pokemonInfo = document.getElementById('pokemonInfo');
var trainerImage = document.getElementById('trainerImage');
var pokemonName = document.getElementById('pokemonName');
var pokemon = document.getElementById('pokemon')
var bottomWrapper = document.getElementById('bottomWrapper')

picture.style.backgroundSize = '100% 100%';
pokemon.style.backgroundSize = "100% 100%";
trainerImage.style.backgroundSize = '100% 100%';
pokemonInfo.style.textAlign = 'center';

adam.addEventListener('click',function(){
	addGrid();
	getAdamTrainer();
	next();
})
kyle.addEventListener('click',function(){
	addGrid();
	getKyleTrainer();
	next();
})
manny.addEventListener('click',function(){
	addGrid();
	getMannyTrainer();
	next();
})


bottomWrapper.addEventListener('click', function(e){
	if(e.target.id=='left'){
		previous();
	}else if(e.target.id == 'right'){
		next();
	}

})


function getAdamTrainer(){
	trainerInfo.innerHTML = ''
	trainerInfo.innerHTML = 'James is a common member of Team Rocket. James is part of a unit made up of himself, Jessie, and Meowth. He is close friends with the two of them, and is known to make personal sacrifices in order to keep them safe'
	trainerImage.style.backgroundImage = "url(library/images/james.jpeg)"
}

function getNidoran(){
	pokemonInfo.innerHTML = '';
	var name = document.createElement("DIV");
	name.innerHTML = nidoran.name.toUpperCase();
	name.style.fontWeight = 'bold';
	picture.style.backgroundImage = "url('"+nidoran.sprites[1]+"')";
	var hp = document.createElement('div');
	hp.innerHTML = "HP: " + nidoran.hp;
	var attack = document.createElement('div');
	attack.innerHTML = "Attack: "+ nidoran.attack;
	var defense = document.createElement('div');
	defense.innerHTML = "Defense: " + nidoran.defense;
	var abilities = document.createElement('div');
	abilities.innerHTML = "Abilities: "+ nidoran.abilities.join(",");
	pokemonInfo.appendChild(name);
	pokemonInfo.appendChild(hp);
	pokemonInfo.appendChild(attack);
	pokemonInfo.appendChild(defense);
	pokemonInfo.appendChild(abilities);

}

function getNidorino(){
	pokemonInfo.innerHTML = '';
	var name = document.createElement("DIV");
	name.innerHTML = nidorino.name.toUpperCase();
	name.style.fontWeight = 'bold';
	picture.style.backgroundImage = "url('"+nidorino.sprites[1]+"')";
	var hp = document.createElement('div');
	hp.innerHTML = "HP: " + nidorino.hp;
	var attack = document.createElement('div');
	attack.innerHTML = "Attack: "+ nidorino.attack;
	var defense = document.createElement('div');
	defense.innerHTML = "Defense: " + nidorino.defense;
	var abilities = document.createElement('div');
	abilities.innerHTML = "Abilities: "+ nidorino.abilities.join(",");

	pokemonInfo.appendChild(name);
	pokemonInfo.appendChild(hp);
	pokemonInfo.appendChild(attack);
	pokemonInfo.appendChild(defense);
	pokemonInfo.appendChild(abilities);
}

function getNidoking(){
	pokemonInfo.innerHTML = '';
	var name = document.createElement("DIV");
	name.innerHTML = nidoking.name.toUpperCase();
	name.style.fontWeight = 'bold';
	picture.style.backgroundImage = "url('"+nidoking.sprites[1]+"')";
	var hp = document.createElement('div');
	hp.innerHTML = "HP: " + nidoking.hp;
	var attack = document.createElement('div');
	attack.innerHTML = "Attack: "+ nidoking.attack;
	var defense = document.createElement('div');
	defense.innerHTML = "Defense: " + nidoking.defense;
	var abilities = document.createElement('div');
	abilities.innerHTML = "Abilities: ";
	abilities.innerHTML = "Abilities: "+ nidoking.abilities.join(",");

	pokemonInfo.appendChild(name);
	pokemonInfo.appendChild(hp);
	pokemonInfo.appendChild(attack);
	pokemonInfo.appendChild(defense);
	pokemonInfo.appendChild(abilities);
}























function getMannyTrainer(){
	trainerInfo.innerHTML =" "
	trainerImage.style.backgroundImage = "url('library/images/giovanni.jpeg')"
	trainerInfo.innerHTML =  'Manny Giovanni: '
	trainerInfo.innerHTML += 'A slick dude who has an even slicker attitude.'
}

function getBlastoise(){
	pokemonInfo.innerHTML = " "
	var name = document.createElement("DIV");
	name.innerHTML = blastoise.name.toUpperCase();
	name.style.fontWeight = 'bold';
	picture.style.backgroundImage  = "url('"+blastoise.sprites[1]+"')"
	pokemon.style.backgroundSize = "100% 100%"
	var hp = document.createElement("DIV");
	hp.innerHTML = "HP: " +blastoise.hp;
	var attack = document.createElement("DIV");
	attack.innerHTML = "Attack: "+blastoise.attack;
	var defense = document.createElement("DIV");
	defense.innerHTML = "Defense: "+blastoise.defense;
	var abilities = document.createElement("DIV");
	abilities.innerHTML = "Abilities: "+ blastoise.abilities.join(",");
	pokemonInfo.appendChild(name);
	pokemonInfo.appendChild(hp);
	pokemonInfo.appendChild(attack);
	pokemonInfo.appendChild(defense);
	pokemonInfo.appendChild(abilities);
}
function getKadabra(){
	pokemonInfo.innerHTML = " "
	var name = document.createElement("DIV");
	name.innerHTML = kadabra.name.toUpperCase();
	name.style.fontWeight = 'bold';
	picture.style.backgroundImage  = "url('"+kadabra.sprites[1]+"')"
	var hp = document.createElement("DIV");
	hp.innerHTML = "HP: " +kadabra.hp;
	var attack = document.createElement("DIV");
	attack.innerHTML = "Attack: "+kadabra.attack;
	var defense = document.createElement("DIV");
	defense.innerHTML = "Defense: "+kadabra.defense;
	var abilities = document.createElement("DIV");
	abilities.innerHTML = "Abilities: "+ kadabra.abilities.join(",");
	pokemonInfo.appendChild(name);
	pokemonInfo.appendChild(hp);
	pokemonInfo.appendChild(attack);
	pokemonInfo.appendChild(defense);
	pokemonInfo.appendChild(abilities);
}
function getArcanine(){
	pokemonInfo.innerHTML = " "
	picture.style.backgroundImage  = "url('"+arcanine.sprites[1]+"')"
	var name = document.createElement("DIV");
	name.innerHTML = arcanine.name.toUpperCase();
	name.style.fontWeight = 'bold';
	var hp = document.createElement("DIV");
	hp.innerHTML = "HP: " +arcanine.hp;
	var attack = document.createElement("DIV");
	attack.innerHTML = "Attack: "+arcanine.attack;
	var defense = document.createElement("DIV");
	defense.innerHTML = "Defense: "+arcanine.defense;
	var abilities = document.createElement("DIV");
	abilities.innerHTML = "Abilities: "+ arcanine.abilities.join(",");
	pokemonInfo.appendChild(name)
	pokemonInfo.appendChild(hp);
	pokemonInfo.appendChild(attack);
	pokemonInfo.appendChild(defense);
	pokemonInfo.appendChild(abilities);
}









function getKyleTrainer(){
	trainerInfo.innerHTML = " "
	trainerImage.style.backgroundImage = "url('library/images/jessie.jpeg')"
	trainerInfo.innerHTML = 'Jessie is over james #teamRocket'
}
function getEmpoleon() {
	pokemonInfo.innerHTML = " "
	var name = document.createElement("DIV");
	name.innerHTML = empoleon.name.toUpperCase();
	name.style.fontWeight = 'bold';
	picture.style.backgroundImage  = "url('library/images/empoleon.gif')"
	let hp = document.createElement('div')
	hp.innerHTML = 'HP: ' + empoleon.hp;
	let attack = document.createElement('div')
	attack.innerHTML = 'Attack: ' + empoleon.attack;
	let defense = document.createElement('div')
	defense.innerHTML = 'Defense: ' + empoleon.defense;
	let abilities = document.createElement('div')
	abilities.innerHTML = "Abilities: "+ empoleon.abilities.join(",");

		pokemonInfo.appendChild(name);
		pokemonInfo.appendChild(hp);
		pokemonInfo.appendChild(attack);
		pokemonInfo.appendChild(defense);
		pokemonInfo.appendChild(abilities);

}
function getArceus() {
	pokemonInfo.innerHTML = " "
	var name = document.createElement("DIV");
	name.innerHTML = arceus.name.toUpperCase();
	name.style.fontWeight = 'bold';
	picture.style.backgroundImage= "url('library/images/arceus.gif')"
	let hp = document.createElement('div')
	hp.innerHTML = 'HP: ' + arceus.hp;
	let attack = document.createElement('div')
	attack.innerHTML = 'Attack: ' + arceus.attack;
	let defense = document.createElement('div')
	defense.innerHTML = 'Defense: ' + arceus.defense;
	let abilities = document.createElement('div');
	abilities.innerHTML = "Abilities: "+ arceus.abilities.join(",");

		pokemonInfo.appendChild(name);
		pokemonInfo.appendChild(hp);
		pokemonInfo.appendChild(attack);
		pokemonInfo.appendChild(defense);
		pokemonInfo.appendChild(abilities);
}
function getCharizard(){
	pokemonInfo.innerHTML = " "
	var name = document.createElement("DIV");
	name.innerHTML = charizard.name.toUpperCase();
	name.style.fontWeight = 'bold';
	picture.style.backgroundImage  = "url('library/images/charizard.gif')"
	let hp = document.createElement('div')
	hp.innerHTML = 'HP: ' + charizard.hp;
	let attack = document.createElement('div')
	attack.innerHTML = 'Attack: ' + charizard.attack;
	let defense = document.createElement('div')
	defense.innerHTML = 'Defense: ' + charizard.defense;
	let abilities  = document.createElement('div');
	abilities.innerHTML = "Abilities: ";
	abilities.innerHTML = "Abilities: "+ charizard.abilities.join(",");

		pokemonInfo.appendChild(name);
		pokemonInfo.appendChild(hp);
		pokemonInfo.appendChild(attack);
		pokemonInfo.appendChild(defense);
		pokemonInfo.appendChild(abilities);
}
// adam.addEventListener('click',)




// manny.addEventListener('click',)



function addGrid(){
 	pokemon.style.height='100%';
 	pokemon.style.width='100%';

 	var buttonLeft = document.createElement('BUTTON');
 	var buttonRight = document.createElement('BUTTON');
 	buttonRight.id = 'left';
 	buttonLeft.id = 'right';
 	bottomWrapper.appendChild(buttonLeft);
 	bottomWrapper.appendChild(buttonRight);
 	buttonLeft.style.gridRow = '1/2';
 	buttonRight.style.gridRow = '1/2';
 	buttonRight.style.gridColumn = '2/3';
 	buttonLeft.style.gridColumn = '4/5';
 	buttonRight.style.height = '20%';
 	buttonLeft.style.height = '20%';
 	buttonRight.style.marginTop= '270%';
 	buttonLeft.style.marginTop= '270%';


 	pokemonImage.style.backgroundImage = 'none';
 	pokemonImage.style.gridArea = 'none';
 	pokemonImage.style.gridRow = '1/2';
 	pokemonImage.style.height = '35vh';
 	pokemonImage.style.width = '35vh';
 	pokemon.style.gridRow = '1/2';
 	pokemon.style.gridColumn = '3/4';

 	bottomWrapper.style.marginTop= '2%'
 	bottomWrapper.style.display= 'grid'
 	bottomWrapper.style.gridTemplateRows= '.8fr 1fr'
 	bottomWrapper.style.gridTemplateColumns= '1fr .2fr 1fr .2fr'
 	bottomWrapper.style.height= 'auto';
 	bottomWrapper.style.textAlign = 'center';
 	pokemon.style.display = 'grid';
 	pokemonName.style.gridColumn = '2/3'
 	pokemonName.style.gridRow = '2/3'
 	pokemon.style.textAlign = 'center;'

 // #pokemonInfo {
 //    grid-row: 2/3;
 //    grid-column: 2/5;
	 pokemonInfo.style.gridRow = '2/3'
	 pokemonInfo.style.gridColumn = '2/5'
}



var kyleCounter=0;
function kylePokemonGroup(kyleCounter){
	if(kyleCounter==0){
		getEmpoleon()
	}
	if(kyleCounter==1){
		getArceus()
	}
	if(kyleCounter==2){
		getCharizard()
	}
}

var mannyCounter=0;
function mannyPokemonGroup(mannyCounter){
	if(mannyCounter==0){
		getBlastoise();
	}if(mannyCounter==1){
		getKadabra();
	}if(mannyCounter==2){
		getArcanine();
	}
}

var adamCounter = 0;
function adamPokemonGroup(adamCounter){
	if(adamCounter==0){
		getNidoran();
	}if(adamCounter==1){
		getNidorino();
	}if(adamCounter==2){
		getNidoking();
	}
}


function next(){
	if(trainerInfo.innerHTML == 'Jessie is over james #teamRocket'){
		if(kyleCounter==2){
			kyleCounter=0	
		}else{
			kyleCounter++;
		}
		kylePokemonGroup(kyleCounter)
		
	}else if(trainerInfo.innerHTML ==  'Manny Giovanni: A slick dude who has an even slicker attitude.'){
		
		if(mannyCounter==2){
			mannyCounter=0
			
		}else{
			mannyCounter++;
		}	
		mannyPokemonGroup(mannyCounter);
	}else if(trainerInfo.innerHTML == 'James is a common member of Team Rocket. James is part of a unit made up of himself, Jessie, and Meowth. He is close friends with the two of them, and is known to make personal sacrifices in order to keep them safe'){
		
		if(adamCounter==2){
			adamCounter=0
			
		}else{
			adamCounter++;
		}
		adamPokemonGroup(adamCounter);
	}
}


function previous(){
	if(trainerInfo.innerHTML == 'Jessie is over james #teamRocket'){
		if(kyleCounter==0){
			kyleCounter=2;
		}else{
			kyleCounter--;
		}
		kylePokemonGroup(kyleCounter);
	}else if(trainerInfo.innerHTML ==  'Manny Giovanni: A slick dude who has an even slicker attitude.'){
		if(mannyCounter==0){
			mannyCounter=2;
		}else{
			mannyCounter--;
		}
		mannyPokemonGroup(mannyCounter);
	}else if(trainerInfo.innerHTML == 'James is a common member of Team Rocket. James is part of a unit made up of himself, Jessie, and Meowth. He is close friends with the two of them, and is known to make personal sacrifices in order to keep them safe'){
		if(adamCounter==0){
			adamCounter=2;
		}else{
			adamCounter--;
		}
		adamPokemonGroup(adamCounter);
	}
}
