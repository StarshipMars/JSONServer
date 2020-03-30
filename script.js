document.addEventListener("DOMContentLoaded", function(){
let unload = document.querySelector('.unload');

    unload.addEventListener('click', unLoading);

    function unLoading(){
        fetch('info.json').then((response)=>{
            return response.json()
        })
        .then((response)=>{
            console.log(response);
        })
        
    }
})