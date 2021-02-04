let input= document.getElementById('filterInput');

input.addEventListener('keyup', filtration);

function filtration(){
    let inputValue=input.value.toUpperCase();
   
    let ul=document.getElementById('names');
    let li=ul.getElementsByTagName('li');

    for(c=0;c<li.length;c++){
        let innerLi=li[c].getElementsByTagName('a')[0];
        

        if((innerLi.innerHTML.toUpperCase().indexOf(inputValue)>-1)&&(
            innerLi.innerHTML.toUpperCase().charAt(0)==inputValue.charAt(0)
        )){
            li[c].style.display="";

        }
        else{
            li[c].style.display="none";
        }

    }
}


