function light(value){
    var pic;
    var allBulbs=document.getElementsByClassName('bulb');
    var btnOn=document.getElementById('btnOn');
    var broken=Math.floor(Math.random()*(allBulbs.length));
    
    if(value==0){
        pic="of.png";
        btnOn.style["box-shadow"]=null;
        document.body.style["background-color"]="#e2e2e2";
    }
    else{
        pic="on.png";
        btnOn.style["box-shadow"]="0px 10px 10px rgba(0, 0, 0, 0.2)";
        document.body.style["background-color"]="#fff";
      
    }
    for(i=0;i<allBulbs.length;i++){
        if(i==broken){
            allBulbs[i].src="of.png"; 
        }
        else{
            allBulbs[i].src=pic;
        }
        
    }
   
}