(function() {
    'use strict';

    angular
        .module('avaliacao360MpaivaApp')
        .factory('AvaliacaoModeloSearch', AvaliacaoModeloSearch);

    AvaliacaoModeloSearch.$inject = ['$resource'];

    function AvaliacaoModeloSearch($resource) {
        var resourceUrl =  'api/_search/avaliacao-modelos/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true}
        });
    }
})();
