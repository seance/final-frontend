window.App.Geo = (function() {
    return {
        getGeoString: function(ready) {
            App.GeoBackend.getLocation(function(location) {
                ready("Your location: " + location)
            })
        }
    }
})()