const selected = 'destacado'

const showCategory = (category) => {
    document.querySelectorAll('.listado').forEach(el => {
        el.style.display = 'none'
    })

    document.querySelector(`#${category}`).style.display = 'block'
}

showCategory(selected)

const clearStylesOnItems = () => {
    document.querySelectorAll('.listener').forEach(el => {
        el.style.color = 'black'
        el.style.fontWeight = '400'
    })
}

document.querySelectorAll('.listener').forEach(el => {
    el.addEventListener('click', () => {
        clearStylesOnItems()
        
        el.style.color = '#1243C7'
        el.style.fontWeight = '500'

        showCategory(el.attributes.getNamedItem('categoria').value)
    }, false)
})