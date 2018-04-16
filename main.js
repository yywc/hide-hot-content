(function () {
    // 单条消息父级元素className
    var main = 'TopstoryMain';
    // 单条消息右侧的关闭按钮className
    var buttion = 'TopstoryItem-rightButton';
    // 单条消息div    
    var items = document.getElementsByClassName(item);
    var hideHotContent = function (nodes) {
        for (var node of nodes) {
            if (node.textContent.indexOf('热门内容, ') === 0) {
                // node.querySelector(button).click();
                node.parentNode.removeChild(node);
            }
        }
    };

    // 观察者模式
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    // 选择目标节点
    var observedEle = document.getElementsByClassName(main)[0].children[0];
    // 创建观察者对象
    var observer = new MutationObserver(function (mutations) {
        for (var mutation of mutations) {
            if (mutation.type === 'childList') {
                hideHotContent(mutation.addedNodes)
            }
        }
    });
    // 配置观察选项:
    var config = {
        childList: true
    }
    // 传入目标节点和观察选项
    observer.observe(observedEle, config);

    // 初次调用
    hideHotContent();
})();