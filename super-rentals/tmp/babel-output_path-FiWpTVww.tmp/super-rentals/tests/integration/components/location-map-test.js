define('super-rentals/tests/integration/components/location-map-test', ['exports', 'ember-qunit', 'ember'], function (exports, _emberQunit, _ember) {

  var StubMapsService = _ember['default'].Service.extend({
    getMapElement: function getMapElement(location) {
      this.set('calledWithLocation', location);
      // We create a div here to simulate our maps service,
      // which will create and then cache the map element
      return document.createElement('div');
    }
  });

  (0, _emberQunit.moduleForComponent)('location-map', 'Integration | Component | location map', {
    integration: true,
    beforeEach: function beforeEach() {
      this.register('service:maps', StubMapsService);
      this.inject.service('maps', { as: 'mapsService' });
    }
  });

  (0, _emberQunit.test)('should append map element to container element', function (assert) {
    this.set('myLocation', 'New York');
    this.render(_ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.9.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 36
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'location-map', [], ['location', ['subexpr', '@mut', [['get', 'myLocation', ['loc', [null, [1, 24], [1, 34]]], 0, 0, 0, 0]], [], [], 0, 0]], ['loc', [null, [1, 0], [1, 36]]], 0, 0]],
        locals: [],
        templates: []
      };
    })()));
    assert.equal(this.$('.map-container').children().length, 1, 'the map element should be put onscreen');
    assert.equal(this.get('mapsService.calledWithLocation'), 'New York', 'a map of New York should be requested');
  });
});