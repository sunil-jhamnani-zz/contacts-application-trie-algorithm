/**
 * Created by sunil.jhamnani on 5/28/16.
 */
/**
 * AddController works to add a new contact
 */

(function () {
    angular.module('contactApp')
        .controller('AddController', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
            $scope.addContact = function () {
                $scope.message = '';
                if (($scope.contact.firstname + " " + $scope.contact.lastname).length > 50) {
                    $scope.message = "Contact can only be upto 50 characters. Try again!"
                }
                else {
                    $scope.contact.lastname = $scope.contact.lastname ? $scope.contact.lastname : '';
                    if (checkAvailability()) {

                        $rootScope.firstNameTrie.put($scope.contact.firstname, $scope.contact.lastname);
                        if ($scope.contact.lastname) {
                            $rootScope.lastNameTrie.put($scope.contact.lastname, $scope.contact.firstname);
                        }
                        $scope.message = "Contact Added Successfully";
                    }
                }

                $timeout(function () {
                    $scope.contact = null;
                    $scope.message = null;
                }, 1000);

            };

            /**
             * Function to check if the name is already added
             * @returns {boolean}
             */
            var checkAvailability = function () {
                var list = $rootScope.firstNameTrie.get();
                if (list) {
                    if (!list.indexOf($scope.contact.firstname + " " + $scope.contact.lastname)) {
                        return false;
                    }
                }

                return true;
            };
        }])
}());