define('super-rentals/components/rental-listing', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    isWide: false,
    actions: {
      toggleImageSize: function toggleImageSize() {
        this.toggleProperty('isWide');
      }
    }
  });
});