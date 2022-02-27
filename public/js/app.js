const productos = []
const pintarElementoCarrito = document.getElementById('pintarElementosCarrito')

document.addEventListener('click', (e) => {
    //console.log(e.target.dataset.bsTarget === '#exampleModal')
    if(e.target.dataset.bsTarget === '#exampleModal') {
    //console.log(e.target.dataset.producto)
        productos.push(e.target.dataset.producto)
        //console.log(productos)
        e.target.classList.add('disabled')
        pintarElementoEnHTML()
    }
})

const pintarElementoEnHTML = () => {
    pintarElementosCarrito.innerHTML = ''
    productos.forEach((item) => {
        pintarElementoCarrito.innerHTML += `
        <img src='/img/${item}.png' class="card-img-top" alt="">
        `
    })
}