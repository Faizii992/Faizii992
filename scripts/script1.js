$("document").ready(function(){
	
	

	var holes=document.querySelectorAll(".sofa");
	var moles=document.getElementsByClassName("janice");
	var timer=document.querySelector("#time");

	var time=100;
	function peep(){
			
			time-=10;
			timer.style.width=time+"%";
			timer.textContent=time+ "% time remaining";
			
		var chosenindex=Math.floor(Math.random()*moles.length);
		var chosenmole=moles[chosenindex];
		 chosenmole.classList.add("imgdisplay");
		 
		 setTimeout(()=>{
			 
			 chosenmole.classList.remove("imgdisplay");
		 },1450);
	
		if(time==0){
		document.body.style.opacity="1";
		document.getElementById("finalscore").innerHTML="FINAL SCORE: "+score;
		$("#scoremodal").show();
	}
	}
	
	
	
	var i;
		let score=0;
	for(i=0;i<moles.length;i++){
		
		moles[i].addEventListener('click',(e)=>{
			score++;
			
		document.querySelector(".score").textContent=score+" points";
		
			e.target.classList.remove("imgdisplay");
			
		});
		

	}
	document.querySelector("body :not(#startbtn)").style.opacity="0.2";
	document.getElementById("startbtn").addEventListener('click',(e)=>{
	document.querySelector("body :not(#startbtn)").style.opacity="1";
		e.target.style.display="none";
	
	setInterval(peep,1500);
		
	});
	
	
	
	
	
});
