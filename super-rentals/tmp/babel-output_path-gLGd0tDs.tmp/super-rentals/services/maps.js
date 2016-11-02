define('super-rentals/services/maps', ['exports', 'ember', 'super-rentals/utils/google-maps'], function (exports, _ember, _superRentalsUtilsGoogleMaps) {
  exports['default'] = _ember['default'].Service.extend({

    init: function init() {
      if (!this.get('cachedMaps')) {
        this.set('cachedMaps', _ember['default'].Object.create());
      }
      if (!this.get('mapUtil')) {
        this.set('mapUtil', _superRentalsUtilsGoogleMaps['default'].create());
      }
    },

    getMapElement: function getMapElement(location) {
      var camelizedLocation = location.camelize();
      var element = this.get('cachedMaps.' + camelizedLocation);
      if (!element) {
        element = this.createMapElement();
        this.get('mapUtil').createMap(element, location);
        this.set('cachedMaps.' + camelizedLocation, element);
      }
      return element;
    },

    createMapElement: function createMapElement() {
      var element = document.createElement('div');
      element.className = 'map';
      return element;
    }

  });
});