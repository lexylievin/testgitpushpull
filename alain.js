var para = document.querySelector('#nom');
var para2 = document.querySelector('#prenom');

para.addEventListener('click', updateName);
para2.addEventListener('click', updateFirstName);

function updateName() {
  let name = prompt('Entrez le nom');
  para.textContent = 'Nom : ' + name;
}

function updateFirstName() {
  let name = prompt('Entrez le prenom ');
  para2.textContent = 'Prenom : ' + name;
}

function begin(){
	  alert("BRAVO !!!!");
}