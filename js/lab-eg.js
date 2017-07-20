
	var a33 = document.querySelector(".btnn");
		a33.innerHTML = "All categories";
		var fl = true;
	a33.onclick = function(){		
		if(fl){
			$(".nav-daohang").slideDown("slow");
			fl = false;
		}else{
			$(".nav-daohang").slideUp("slow");
			fl= true;
		}
	}	
	
	