/**
 * Created by sunil.jhamnani on 5/28/16.
 */
/**
 * AddController works to add a new contact
 */

(function(){
    angular.module('contactApp')
        .controller('AddController',['$scope', '$rootScope', '$timeout', function($scope, $rootScope, $timeout) {
            $scope.addContact = function () {
                $scope.message = '';
                if(($scope.contact.firstname + " " + $scope.contact.lastname).length > 50) {
                    $scope.message = "Contact can only be upto 50 characters. Try again!"
                }
                else {
                    $scope.contact.firstname = $scope.contact.firstname.capitalize();
                    $scope.contact.lastname = $scope.contact.lastname ? $scope.contact.lastname.capitalize() : '';
                    if (checkAvailability()) {
                        $rootScope.contacts.push($scope.contact);
                        $scope.message = "Contact Added Successfully";
                    }
                }

                $timeout(function() {
                    $scope.contact = null;
                    $scope.message=null;
                }, 1000);

            };

            /**
             * Function to check if the name is already added
             * @returns {boolean}
             */
            var checkAvailability = function() {
                for (i=0; i<$rootScope.contacts.length; i++) {
                    if (angular.equals($rootScope.contacts[i],$scope.contact)) {
                        $scope.message = "Contact already exists";
                        break;
                    }
                }
                if(i == $rootScope.contacts.length) {
                    return true;
                }
                else  {
                    return false;
                }
            };
        }])
}());