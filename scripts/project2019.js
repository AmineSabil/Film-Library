/*
 NOM : SABIL MOHAMED AMINE
 GROUPE : SESI 14
*/



var setup=function(){
	/*setup: fonction utilisé lors du chargement de la page et contient tout les abonnements
	 * Paramètres:Pas de paramètres
	 * Résultat:(pas de return)met en marche tout les abonnements de la page
	*/
	for (var index=0;index<filmData.length;index++){
		createFilm(index);
	}
	var filter=document.getElementById('filter');
	filter.addEventListener("keyup",filtreFilm);
	filtreFilm();
	var showdetails=document.getElementById('showDetails');
	showdetails.addEventListener('change',afficheDetail);
	var film=document.querySelectorAll('div.film');
	for (var i=0;i<film.length;i++){
		film[i].addEventListener('mouseover',changeText);
		film[i].addEventListener('mouseout',changevide);
		
	}
	var film2=document.querySelectorAll("#films div.film"); 
	for (var i=0;i<film.length;i++){
		film2[i].addEventListener('click',selectionFilm);	
	}
	
}

window.addEventListener('load',setup);


/*3*/
/*3-1*/
var createFilm=function(index){
	/*createFilm:prend en paramètre un entier index et dont le résultat est l'élément DOM div.film correspondant au film d'indice index
	 * Paramètres:
	 * index: un entier compris entre 0 et filmData.length-1
	 * Résultat:(pas de return)l'élément DOM div.film correspondant au film d'indice index
	*/
	var parent=document.getElementById('films');
	var nodeNew=document.createElement('div');
	nodeNew.setAttribute("class",'film');
	nodeNew.setAttribute("id",String(index)+"-film");
	parent.appendChild(nodeNew);
	var newImage=document.createElement('img');
	newImage.src=filmData[index].image;
	newImage.alt=filmData[index].text;
	nodeNew.appendChild(newImage);
	var newTitre=document.createElement('h3');
	newTitre.textContent=filmData[index].title;
	nodeNew.appendChild(newTitre);
}

/*Q4*/
/*Fait*/

/*Q5*/
 var filtreFilm=function(){
	/*filtreFilm:filtre les films pour que seuls les films dont le title contient le texte présent dans #filter soient affichés dans le catalogue #films.
	 * Paramètres:Pas de paramètres
	 * Résultat:(pas de return)filtre les films pour que seuls les films dont le title contient le texte présent dans #filter soient affichés dans le catalogue #films.
	*/
	var elements=document.querySelectorAll('#films div.film h3');
	var filter=document.getElementById('filter');
	var contenu=filter.value;
	for (var i=0;i<elements.length;i++){
		if (String(elements[i].textContent).toUpperCase().includes(contenu.toUpperCase())==false){
			elements[i].parentNode.style.display="none";
		}
		else{
			elements[i].parentNode.style.display="inline-block";
		}
	}
}

/*Q6*/
var afficheDetail=function(){
	/*afficheDetail:gére l'affichage ou le masquage de la zone #details selon que la case #showDetails soit cochée ou non.
	 * Paramètres:Pas de paramètres
	 * Résultat:(pas de return)gére l'affichage ou le masquage de la zone #details selon que la case #showDetails soit cochée ou non.
	*/
	var details=document.getElementById('details');
	var showdetails=document.getElementById('showDetails');
	if (showdetails.checked==true){
		details.style.display='block';
	}
	else{
		details.style.display='none';
	}
}		
/*Q7*/
var changeText=function(){
	/*changeText:affiche la valeur du champ text de la donnée film correspondante comme contenu de l'élément #details.
	 * Paramètres:Pas de paramètres
	 * Résultat:(pas de return)affiche la valeur du champ text de la donnée film correspondante comme contenu de l'élément #details.
	*/
	var texte=filmData[parseInt(this.id)].text;
	var details=document.getElementById('details');
	details.textContent=texte;
}

/*Q8*/
var changevide=function(){
	/*changevide:rend vide contenu de l'élément #details .
	 * Paramètres:Pas de paramètres
	 * Résultat:(pas de return)rend vide contenu de l'élément #details .
	*/
	var details=document.getElementById('details');
	details.textContent="";
}  
/*Q9*/
var selectionFilm=function(){
	/*selectionFilm:Si un des éléments #select1 ou #select2 est libre, elle insére avant l'élément span qu'il contient, l'élément div.film qui a été cliqué.Si aucun emplacement n'est libre elle affiche un message.
	 * Paramètres:Pas de paramètres
	 * Résultat:(pas de return)Si un des éléments #select1 ou #select2 est libre, elle insére avant l'élément span qu'il contient, l'élément div.film qui a été cliqué.Si aucun emplacement n'est libre elle affiche un message.
	*/
	var select1=document.getElementById("select1");
	var select2=document.getElementById("select2");
	if (select1.childNodes.length==1){
		select1.insertBefore(this,select1.childNodes[0]);
		this.addEventListener('click',retourFilm);
		this.removeEventListener('click',selectionFilm);
	}
	else if (select2.childNodes.length==1){
		select2.insertBefore(this,select2.childNodes[0]);
		this.addEventListener('click',retourFilm);
		this.removeEventListener('click',selectionFilm);
	}
	else{
		window.alert("Désolé, Aucun emplacement n'est libre ");
	}
	
	
}
var retourFilm=function(){
	/*retourFilm: déplace l'élément div.film correspondant en fin de l'élément #films.
	 * Paramètres:Pas de paramètres
	 * Résultat:(pas de return) déplace l'élément div.film correspondant en fin de l'élément #films
	*/
	var blocFilm=document.getElementById("films");
	blocFilm.append(this);
	this.addEventListener('click',selectionFilm);
	this.removeEventListener('click',retourFilm);
	filtreFilm()
	
	
}
