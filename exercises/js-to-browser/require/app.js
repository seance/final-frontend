define(['lib/domReady', 'bar'], function(domReady, bar) {
    domReady(function() {
        var greeting = document.createElement('div')
        var text = document.createTextNode(bar.greet())

        greeting.appendChild(text)
        document.body.appendChild(greeting)
    })
})