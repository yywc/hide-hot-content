var hideGarbage = function () {
    var ele = document.getElementsByClassName('FeedSource-firstline');
    for (var i = 0; i < ele.length; i++) {
        var children = ele[i].children;
        for (var j = 0; j < children.length; j++) {
            var text = children[j].textContent;
            if (text.match('热门内容')) {
                children[j].parentNode.parentNode.parentNode.parentNode.style.display = 'none';
            }
        }
    }
};

hideGarbage();

window.addEventListener('scroll', hideGarbage);