/**
 * Created by sunil.jhamnani on 5/28/16.
 */

(function () {
    angular.module('contactApp')
        .controller('SearchController', ['$scope', '$rootScope', '$filter', function ($scope, $rootScope, $filter) {
            $scope.$watch('searchFilter', function () {
                $scope.contacts = $filter('filterContact')($rootScope.firstNameTrie, $rootScope.lastNameTrie, $scope.searchFilter);
            });
        }])
}());