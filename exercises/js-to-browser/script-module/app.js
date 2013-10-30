window.App = {}

window.onload = function() {
    var greeting = document.createElement('div')
    var text = document.createTextNode(App.Bar.greet())

    greeting.appendChild(text)
    document.body.appendChild(greeting)
}