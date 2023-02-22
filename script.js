function clickMenu() {
    if (abrir.style.display == 'none') {
        abrir.style.display = 'inline-block'
    } else {
        abrir.style.display = 'none'
    }

    if (fechar.style.display == 'inline-block') {
        fechar.style.display = 'none'
    } else {
        fechar.style.display = 'inline-block'
    }

    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }

    if (corpo.style.overflowY == 'hidden') {
        corpo.style.overflowY = 'scroll'
    } else {
        corpo.style.overflowY = 'hidden'
    }
}

function mudouTamanho() {
    if (window.innerWidth >= 768) {
        abrir.style.display = 'none'
        fechar.style.display = 'none'
        menu.style.display = 'block'
        corpo.style.overflowY = 'scroll'
    }
    else {
        abrir.style.display = 'inline-block'
        fechar.style.display = 'none'
        menu.style.display = 'none'
    }
}

function abrirDetalhes() {
    mais.style.display = 'none'
    detalhes.style.display = 'block'
}