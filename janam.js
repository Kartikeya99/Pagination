var current=0;
var end=10;
var onpage=10;
var length=100;
var pagesno=length/onpage;
var rem=length%onpage;
if(rem>0){
	pagesno=pagesno+1;
}

var arr=[];
for(var i=0;i<=pagesno;i++){
	arr.push(i);
}

var elements=document.getElementsByClassName('A');

var myFunction=function(){
	var page=event.target.innerHTML;
	page=parseInt(page);
	var x=document.getElementsByClassName("current");
	x[0].classList.remove('current');
	this.classList.add('current');
	if(page==1){
		document.getElementById("prev").classList.add("notactive");
		document.getElementById("next").classList.remove("notactive");
	}
	else if(page==10){
		document.getElementById("prev").classList.remove("notactive");
		document.getElementById("next").classList.add("notactive");
	}
	else{
		document.getElementById("prev").classList.remove("notactive");
		document.getElementById("next").classList.remove("notactive");
	}
	current=(page-1)*onpage;
	end=page*onpage;

	var req = new XMLHttpRequest();
	req.overrideMimeType("application/json");
	req.open('GET', "janam.json", true);
	req.onload  = function displayObjects() {
		document.getElementById("tbody").innerHTML = '';
   		var data = JSON.parse(req.responseText);
   		for( var i = current; i < end; i++) {
        	var record="<tr><td class='one'>"+data[i].ID+"</td><td class='two'>"+data[i].Name+
					"</td><td class='three'>"+data[i].Description+"</td><td class='four'>"+data[i].Years+
					"</td><td class='five'>"+data[i].Salary+"</td></tr>";
			document.getElementById("tbody").innerHTML += record;
    	}
	};
	req.send();
}


for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction, false);
}

document.getElementById('prev').addEventListener('click',function(){
	var x=document.getElementsByClassName("current");
	var temp=x[0].innerHTML;
	temp=parseInt(temp);
	if(temp==1){
		document.getElementById("prev").classList.add("notactive");
		document.getElementById("next").classList.remove("notactive");
		current=(temp-1)*onpage;
		end=temp*onpage;
	}
	else if(temp==10){
		document.getElementById("prev").classList.remove("notactive");
		document.getElementById("next").classList.add("notactive");
		x[0].classList.remove('current');
		document.querySelector("#nav tr td:nth-child(10)").classList.add("current");
		current=(temp-2)*onpage;
		end=(temp-1)*onpage;
	}
	else{
		document.getElementById("prev").classList.remove("notactive");
		document.getElementById("next").classList.remove("notactive");
		x[0].classList.remove('current');
		if(temp==2){
			document.getElementById("prev").classList.add("notactive");
		}
		document.querySelector("#nav tr td:nth-child("+temp+")").classList.add("current");
		current=(temp-2)*onpage;
		end=(temp-1)*onpage;
	}

	var req = new XMLHttpRequest();
	req.overrideMimeType("application/json");
	req.open('GET', "janam.json", true);
	req.onload  = function displayObjects() {
		document.getElementById("tbody").innerHTML = '';
   		var data = JSON.parse(req.responseText);
   		for( var i = current; i < end; i++) {
        	var record="<tr><td class='one'>"+data[i].ID+"</td><td class='two'>"+data[i].Name+
					"</td><td class='three'>"+data[i].Description+"</td><td class='four'>"+data[i].Years+
					"</td><td class='five'>"+data[i].Salary+"</td></tr>";
			document.getElementById("tbody").innerHTML += record;
    	}
	};
	req.send();
});

document.getElementById('next').addEventListener('click',function(){
	var x=document.getElementsByClassName("current");
	var tempor=x[0].innerHTML;
	tempor=parseInt(tempor);
	console.log(tempor);
	if(tempor==1){
		document.getElementById("prev").classList.add("notactive");
		document.getElementById("next").classList.remove("notactive");
		x[0].classList.remove('current');
		document.querySelector("#nav tr td:nth-child(3)").classList.add("current");
		current=(tempor)*onpage;
		end=(tempor+1)*onpage;
	}
	else if(tempor==10){
		document.getElementById("prev").classList.remove("notactive");
		document.getElementById("next").classList.add("notactive");
		current=(tempor-1)*onpage;
		end=(tempor)*onpage;
	}
	else if(tempor>=5 && tempor<=pagesno-2){
		document.getElementById("prev").classList.remove("notactive");
		document.getElementById("next").classList.remove("notactive");
		x[0].classList.remove('current');
		document.querySelector("#nav tr td:nth-child(2)").remove();		
		var output = "<td class='A current'>" + arr[tempor + 1] + "</td>";
		document.getElementById("next").insertAdjacentHTML("beforebegin", output);
		current = tempor * onpage;
		end = (tempor + 1) * onpage;
    	}
    	var q="<td class='A current'>"+arr[tempor+1]+"</td>";
    	var n="<td id='next'>Next<span>&raquo;</span></td>";
		document.getElementById("limit").innerHTML +=q+ n;
		current=(tempor)*onpage;
		end=(tempor+1)*onpage;
	}
	else{
		document.getElementById("prev").classList.remove("notactive");
		document.getElementById("next").classList.remove("notactive");
		x[0].classList.remove('current');
		if(tempor==9){
			document.getElementById("next").classList.add("notactive");
		}
		var t=tempor+2;
		document.querySelector("#nav tr td:nth-child("+t+")").classList.add("current");
		current=(tempor)*onpage;
		end=(tempor+1)*onpage;
	}
	var req = new XMLHttpRequest();
	req.overrideMimeType("application/json");
	req.open('GET', "janam.json", true);
	req.onload  = function displayObjects() {
		document.getElementById("tbody").innerHTML = '';
   		var data = JSON.parse(req.responseText);
   		for( var i = current; i < end; i++) {
        	var record="<tr><td class='one'>"+data[i].ID+"</td><td class='two'>"+data[i].Name+
					"</td><td class='three'>"+data[i].Description+"</td><td class='four'>"+data[i].Years+
					"</td><td class='five'>"+data[i].Salary+"</td></tr>";
			document.getElementById("tbody").innerHTML += record;
    	}
	};
	req.send();
});

var req = new XMLHttpRequest();
req.overrideMimeType("application/json");
req.open('GET', "janam.json", true);
req.onload  = function displayObjects() {
	document.getElementById("tbody").innerHTML = '';
   	var data = JSON.parse(req.responseText);
   	for( var i = current; i < end; i++) {
        var record="<tr><td class='one'>"+data[i].ID+"</td><td class='two'>"+data[i].Name+
				"</td><td class='three'>"+data[i].Description+"</td><td class='four'>"+data[i].Years+
				"</td><td class='five'>"+data[i].Salary+"</td></tr>";
		document.getElementById("tbody").innerHTML += record;
    }
    
};
req.send();



