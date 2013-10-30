var Foo = {
    name: 'Mr. Foo'
}

var Bar = {
    greet: function() {
        return "Hello, " + Foo.name
    }
}

window.onload = function() {
    var greeting = document.createElement('div')
    var text = document.createTextNode(Bar.greet())

    greeting.appendChild(text)
    document.body.appendChild(greeting)
}