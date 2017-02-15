(function() {
    'use strict';

    angular
        .module('avaliacao360MpaivaApp')
        .controller('AvaliacaoModeloDialogController', AvaliacaoModeloDialogController);

    AvaliacaoModeloDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'AvaliacaoModelo', 'Equipe'];

    function AvaliacaoModeloDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, AvaliacaoModelo, Equipe) {
        var vm = this;

        vm.avaliacaoModelo = entity;
        vm.clear = clear;
        vm.save = save;
        vm.equipes = Equipe.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.avaliacaoModelo.id !== null) {
                AvaliacaoModelo.update(vm.avaliacaoModelo, onSaveSuccess, onSaveError);
            } else {
                AvaliacaoModelo.save(vm.avaliacaoModelo, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('avaliacao360MpaivaApp:avaliacaoModeloUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }


    }
})();
