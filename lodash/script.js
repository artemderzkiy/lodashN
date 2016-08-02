
var part=[{
	id:1,
	city:'Samara',
	street:'Lenina',
	countOfHouses:78
},
{
	id:2,
	city:'Samara',
	street:'Nelenina',
	countOfHouses:90
},
{
  id:3,
  city:'Moscow',
  street:'Stalina',
  countOfHouses:180
},
{
  id:4,
  city:'Eburg',
  street:'Bolshaya',
  countOfHouses:20
}];

function temlpateGen(obj) {

  var tmpl = document.getElementById('grid-template').innerHTML.trim();
  tmpl = _.template(tmpl);
  document.getElementById('grid-holder').innerHTML = tmpl({
    list: obj
  });

  var removeButtons = document.getElementsByClassName("delete");
  for (var i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", deleteIt);
    removeButtons[i].setAttribute("id", i);
  }
  

}

temlpateGen(part);

function showShort() {
  var tmpl = document.getElementById('grid-template-short').innerHTML.trim();
  tmpl = _.template(tmpl);
  document.getElementById('grid-holder').innerHTML = tmpl({
    list: part
  });    	
}

function showFull() {
 temlpateGen(part);
}

function inputShow() {
 document.getElementById('inputForm').style.display = 'inline';
}




function showMin() {
  var partNew=[];

var min=_.minBy(part,'countOfHouses');
//  min=part[0];
//  minH=part[0].countOfHouses;
//  console.log(min);
//  console.log(minH);
//  for (var i=0;i<part.length;i++){
//   if (part[i].countOfHouses<minH)
//   {
//    minH=part[i].countOfHouses;
//    min=part[i];
//    console.log(min);
//     console.log(minH);
//  }
// }
 partNew.push(min);
temlpateGen(partNew);
 }




function showMax() {
 var partNew=[];
 max=_.maxBy(part, 'countOfHouses');
//  maxH=part[0].countOfHouses;
//  max=part[0];
//  for (var i=0;i<part.length;i++){
//   if (part[i].countOfHouses>maxH)
//   {
//    maxH=part[i].countOfHouses;
//    max=part[i];
//  }
// }
partNew.push(max);
temlpateGen(partNew);
}

function submit() {
	var idN=document.getElementById("idIn").value;
	var cityN=document.getElementById("cityIn").value;
	var streetN=document.getElementById("streetIn").value;
	var countOfHousesN=document.getElementById("countOfHousesIn").value;
	var objN = {
   id:idN,
   city:cityN,
   street:streetN,
   countOfHouses:countOfHousesN
 }
 part.push(objN);
 document.getElementById('inputForm').style.display = 'none';
 document.getElementById("idIn").value="";
 document.getElementById("cityIn").value="";
 document.getElementById("streetIn").value="";
 document.getElementById("countOfHousesIn").value="";
 temlpateGen(part);
}

function deleteIt(event) {
  var index = event.target.id;
  part.splice(index,1);
  temlpateGen(part);
};


