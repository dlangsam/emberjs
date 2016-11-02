define('super-rentals/utils/google-maps', ['exports', 'ember'], function (exports, _ember) {

  var google = window.google;

  exports['default'] = _ember['default'].Object.extend({

    init: function init() {
      this.set('geocoder', new google.maps.Geocoder());
    },

    createMap: function createMap(element, location) {
      var map = new google.maps.Map(element, { scrollwheel: false, zoom: 10 });
      this.pinLocation(location, map);
      return map;
    },

    pinLocation: function pinLocation(location, map) {
      this.get('geocoder').geocode({ address: location }, function (result, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          var geometry = result[0].geometry.location;
          var position = { lat: geometry.lat(), lng: geometry.lng() };
          map.setCenter(position);
          new google.maps.Marker({ position: position, map: map, title: location });
        }
      });
    }

  });
});