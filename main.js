function purify(nodes) {
    for (let node of nodes) {
        if (node.textContent.indexOf('热门内容, ') === 0) {
            node.querySelector('.TopstoryItem-rightButton').click()
            node.parentNode.removeChild(node)
        }
    }
}

const mo = new MutationObserver(mutations => {
    for (let mutation of mutations) {
        if (mutation.type === 'childList') {
            purify(mutation.addedNodes)
        }
    }
})

purify(document.querySelectorAll('.TopstoryItem'))
mo.observe(document.querySelector('.TopstoryMain > div'), { childList: true })