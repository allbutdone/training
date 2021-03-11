const boxes=document.querySelectorAll('.box');

window.addEventListener('scroll',activBoxes);
activBoxes();

function activBoxes(){
    const startPoint=window.innerHeight/5*4;
    boxes.forEach(box => {
        const topBox=box.getBoundingClientRect().top;

        if(topBox<startPoint){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
        
    });
  
}
