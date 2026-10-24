window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })

(function(){
    const origAppendChild = Element.prototype.appendChild;
    const origAppend = Element.prototype.append;
    const origInsertAdjacentElement = Element.prototype.insertAdjacentElement;

    function isSidebar(node){
        return node.nodeType === 1 && node.matches('#__sidebar._sideMain_1l406_23');
    }

    Element.prototype.appendChild = function(node){
        if(isSidebar(node)){console.log('拦截sidebar appendChild');return node;}
        return origAppendChild.call(this, node);
    }
    Element.prototype.append = function(...nodes){
        const list = nodes.filter(n=>!isSidebar(n));
        return origAppend.call(this,...list);
    }
    Element.prototype.insertAdjacentElement = function(pos,node){
        if(isSidebar(node)){console.log('拦截sidebar insertAdjacentElement');return null;}
        return origInsertAdjacentElement.call(this,pos,node);
    }

    function setMainWidth(){
        const full = document.querySelector('._full_1l406_7');
        if(full){
            full.style.setProperty('width','960px','important');
        }
    }
    setMainWidth();
    setInterval(setMainWidth,300);
})();

