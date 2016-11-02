define('super-rentals/helpers/app-version', ['exports', 'ember', 'super-rentals/config/environment'], function (exports, _ember, _superRentalsConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _superRentalsConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});