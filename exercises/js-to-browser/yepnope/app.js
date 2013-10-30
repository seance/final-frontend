window.App = {
    run: function() {
        App.Geo.getGeoString(function(geo) {
            var greeting = document.createElement('div')
            var text = document.createTextNode(geo)

            greeting.appendChild(text)
            document.body.appendChild(greeting)
        })
    }
}