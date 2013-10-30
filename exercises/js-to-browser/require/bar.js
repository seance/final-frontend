define(['foo'], function(foo) {
    return {
        greet: function() {
            return "Hello, " + foo.getName()
        }
    }
})
