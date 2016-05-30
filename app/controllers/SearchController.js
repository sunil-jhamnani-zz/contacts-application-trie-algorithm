/**
 * Created by sunil.jhamnani on 5/28/16.
 */

(function(){
    angular.module('contactApp')
        .controller('SearchController',['$scope', '$rootScope', function($scope, $rootScope) {
            $scope.contacts = $rootScope.contacts;
        }])
}());