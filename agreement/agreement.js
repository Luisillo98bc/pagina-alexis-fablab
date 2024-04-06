const bar = document.getElementById('bar');
const cerrar = document.getElementById('cerrar');
const nav = document.getElementById('links');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active')
    })
}

if(cerrar){
    cerrar.addEventListener('click', () =>{
        nav.classList.remove('active')
    })
}
