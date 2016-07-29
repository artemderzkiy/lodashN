

// part=[{
// 	id:1,
// 	city:'Samara',
// 	street:'Lenina',
// 	countOfHouses:78
// },
// {
// 	id:2,
// 	city:'Samara',
// 	street:'Nelenina',
// 	countOfHouses:90
// }];


// APP.outputFull=function(arr){
// 	for (var i=0,max=arr.length; i<max;i++){
// 		console.log(arr[i]);
// 	}
// }
// APP.outputFull(APP.part);

//var tmpl = _.template('<span class="title"><%=city%></span>');
//alert( tmpl(APP.part) );
//var compiled = _.template('hello <%= user %>!');
//console.log(compiled({ 'user': 'fred' }));

// var tmpl = '<ul>\
//   <% for (var i=1; i<=count; i++) { %> \
//     <li><%=i%></li> \
//   <% } %>\
// </ul>';
// alert( _.template(tmpl)({count: 5}) ); 

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
}];

    var tmpl = document.getElementById('grid-template').innerHTML.trim();
    tmpl = _.template(tmpl);


    document.getElementById('grid-holder').innerHTML = tmpl({
      list: part
    });

    function showShort() {
    	 var tmpl = document.getElementById('grid-template-short').innerHTML.trim();
    tmpl = _.template(tmpl);
    document.getElementById('grid-holder').innerHTML = tmpl({
      list: part
    });    	
    }

function showFull() {
    	 var tmpl = document.getElementById('grid-template').innerHTML.trim();
    tmpl = _.template(tmpl);
    document.getElementById('grid-holder').innerHTML = tmpl({
      list: part
    });    	
    }

  function inputShow() {
  	document.getElementById('inputForm').style.display = 'inline';
  	//alert(document.getElementById("txt").value);
  }


  function showMin() {
  	var partNew=[];
  	min=part[0];
  	minH=part[0].countOfHouses;
  	for (var i=0;i<part.length;i++){
  		if (part[i].countOfHouses<minH)
  		{
  			minH=part[i].countOfHouses;
  			max=part[i];
  		}

  	}
  	partNew.push(min);
  	console.log(min);

  	var tmpl = document.getElementById('grid-template').innerHTML.trim();
    tmpl = _.template(tmpl);


    document.getElementById('grid-holder').innerHTML = tmpl({
      list: partNew
    });

  }

function showMax() {
  	var partNew=[];
  	maxH=part[0].countOfHouses;
  	max=part[0];
  	for (var i=0;i<part.length;i++){
  		if (part[i].countOfHouses>maxH)
  		{
  			maxH=part[i].countOfHouses;
  			max=part[i];
  		}

  	}
  	partNew.push(max);
  	console.log(max);
  	var tmpl = document.getElementById('grid-template').innerHTML.trim();
    tmpl = _.template(tmpl);


    document.getElementById('grid-holder').innerHTML = tmpl({
      list: partNew
    });
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
 var tmpl = document.getElementById('grid-template').innerHTML.trim();
    tmpl = _.template(tmpl);


    document.getElementById('grid-holder').innerHTML = tmpl({
      list: part
    });

}

function deleteOb() {
	
	 for (var i=0; i<part.length;i++)
	 {
	 	
	 }	

	var tmpl = document.getElementById('grid-template').innerHTML.trim();
    tmpl = _.template(tmpl);


    document.getElementById('grid-holder').innerHTML = tmpl({
      list: part
    });

	}


