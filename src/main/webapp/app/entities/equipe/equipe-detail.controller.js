(function() {
    'use strict';

    angular
        .module('avaliacao360MpaivaApp')
        .controller('EquipeDetailController', EquipeDetailController);

    EquipeDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Equipe', 'User'];

    function EquipeDetailController($scope, $rootScope, $stateParams, previousState, entity, Equipe, User) {
        var vm = this;

        vm.equipe = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('avaliacao360MpaivaApp:equipeUpdate', function(event, result) {
            vm.equipe = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
