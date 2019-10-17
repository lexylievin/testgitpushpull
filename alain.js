let para = document.querySelector('nom');
let para2 = document.querySelector('prenom');

para.addEventListener('click', updateName);
para2.addEventListener('click', updateFirstName);

function updateName() {
  let name = prompt('Entrez le prenom');
  para.textContent = 'Nom : ' + name;
}

function updateFirstName() {
  let name = prompt('Entrez le prenom ');
  para.textContent = 'Prenom : ' + name;
}

function begin(){
	  alert("QUE LE COMBAT COMMENCE !!!!");
}