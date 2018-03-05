(function () {
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

    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    // 选择目标节点
    var target = document.getElementsByClassName('TopstoryMain')[0];
    // 创建观察者对象
    var observer = new MutationObserver(function (mutations) {
        var newValue = target.dataset.zaExtraModule;
        mutations.forEach(function (mutation) {
            if (newValue !== mutation.oldValue) {
                hideGarbage();
            }
        });
    });
    // 配置观察选项:
    var config = {
        attributes: true,
        attributeOldValue: true
    }
    // 传入目标节点和观察选项
    observer.observe(target, config);

})();