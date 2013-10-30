window.App.Bar = (function() {
    return {
        greet: function() {
            return "Hello, " + window.App.Foo.getName()
        }
    }
})()