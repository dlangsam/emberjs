define('super-rentals/tests/integration/components/list-filter-test', ['exports', 'ember-qunit', 'ember-test-helpers/wait', 'rsvp'], function (exports, _emberQunit, _emberTestHelpersWait, _rsvp) {

  (0, _emberQunit.moduleForComponent)('list-filter', 'Integration | Component | filter listing', {
    integration: true
  });

  var ITEMS = [{ city: 'San Francisco' }, { city: 'Portland' }, { city: 'Seattle' }];
  var FILTERED_ITEMS = [{ city: 'San Francisco' }];

  (0, _emberQunit.test)('should initially load all listings', function (assert) {
    var _this = this;

    // we want our actions to return promises, since they are potentially fetching data asynchronously
    this.on('filterByCity', function (val) {
      if (val === '') {
        return _rsvp['default'].resolve(ITEMS);
      } else {
        return _rsvp['default'].resolve(FILTERED_ITEMS);
      }
    });

    // with an integration test, you can set up and use your component in the same way your application
    // will use it.
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.9.0',
              'loc': {
                'source': null,
                'start': {
                  'line': 4,
                  'column': 6
                },
                'end': {
                  'line': 8,
                  'column': 6
                }
              }
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('        ');
              dom.appendChild(el0, el1);
              var el1 = dom.createElement('li');
              dom.setAttribute(el1, 'class', 'city');
              var el2 = dom.createTextNode('\n          ');
              dom.appendChild(el1, el2);
              var el2 = dom.createComment('');
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode('\n        ');
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode('\n');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              return morphs;
            },
            statements: [['content', 'item.city', ['loc', [null, [6, 10], [6, 23]]], 0, 0, 0, 0]],
            locals: ['item'],
            templates: []
          };
        })();

        return {
          meta: {
            'revision': 'Ember@2.9.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 10,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createElement('ul');
            var el2 = dom.createTextNode('\n');
            dom.appendChild(el1, el2);
            var el2 = dom.createComment('');
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode('      ');
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [['block', 'each', [['get', 'results', ['loc', [null, [4, 14], [4, 21]]], 0, 0, 0, 0]], [], 0, null, ['loc', [null, [4, 6], [8, 15]]]]],
          locals: ['results'],
          templates: [child0]
        };
      })();

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
              'line': 11,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'list-filter', [], ['filter', ['subexpr', 'action', ['filterByCity'], [], ['loc', [null, [2, 26], [2, 49]]], 0, 0]], 0, null, ['loc', [null, [2, 4], [10, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    // the wait function will return a promise that will wait for all promises
    // and xhr requests to resolve before running the contents of the then block.
    return (0, _emberTestHelpersWait['default'])().then(function () {
      assert.equal(_this.$('.city').length, 3);
      assert.equal(_this.$('.city').first().text().trim(), 'San Francisco');
    });
  });

  (0, _emberQunit.test)('should update with matching listings', function (assert) {
    var _this2 = this;

    this.on('filterByCity', function (val) {
      if (val === '') {
        return _rsvp['default'].resolve(ITEMS);
      } else {
        return _rsvp['default'].resolve(FILTERED_ITEMS);
      }
    });

    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              'revision': 'Ember@2.9.0',
              'loc': {
                'source': null,
                'start': {
                  'line': 4,
                  'column': 6
                },
                'end': {
                  'line': 8,
                  'column': 6
                }
              }
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode('        ');
              dom.appendChild(el0, el1);
              var el1 = dom.createElement('li');
              dom.setAttribute(el1, 'class', 'city');
              var el2 = dom.createTextNode('\n          ');
              dom.appendChild(el1, el2);
              var el2 = dom.createComment('');
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode('\n        ');
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode('\n');
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              return morphs;
            },
            statements: [['content', 'item.city', ['loc', [null, [6, 10], [6, 23]]], 0, 0, 0, 0]],
            locals: ['item'],
            templates: []
          };
        })();

        return {
          meta: {
            'revision': 'Ember@2.9.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 10,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      ');
            dom.appendChild(el0, el1);
            var el1 = dom.createElement('ul');
            var el2 = dom.createTextNode('\n');
            dom.appendChild(el1, el2);
            var el2 = dom.createComment('');
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode('      ');
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode('\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [['block', 'each', [['get', 'results', ['loc', [null, [4, 14], [4, 21]]], 0, 0, 0, 0]], [], 0, null, ['loc', [null, [4, 6], [8, 15]]]]],
          locals: ['results'],
          templates: [child0]
        };
      })();

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
              'line': 11,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'list-filter', [], ['filter', ['subexpr', 'action', ['filterByCity'], [], ['loc', [null, [2, 26], [2, 49]]], 0, 0]], 0, null, ['loc', [null, [2, 4], [10, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    // The keyup event here should invoke an action that will cause the list to be filtered
    this.$('.list-filter input').val('San').keyup();

    return (0, _emberTestHelpersWait['default'])().then(function () {
      assert.equal(_this2.$('.city').length, 1);
      assert.equal(_this2.$('.city').text().trim(), 'San Francisco');
    });
  });
});