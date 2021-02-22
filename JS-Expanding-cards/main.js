const slices=document.querySelectorAll('.slice');

slices.forEach(function(slice){
    slice.addEventListener('click',function(){
        removeClassActive();
        slice.classList.add('active')
    })
})


function removeClassActive(){
    slices.forEach(function(slice){
        slice.classList.remove('active')
    })
}