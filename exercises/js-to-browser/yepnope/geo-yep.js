window.App.GeoBackend = (function() {
    return {
        getLocation: function(ready) {
            navigator.geolocation.getCurrentPosition(function(p) {
                ready(p.coords)
            }, function(e) {
                ready("Geolocation failed: " + e.message)
            })
        }
    }
})()