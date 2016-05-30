/**
 * Created by sunil.jhamnani on 5/29/16.
 */
(function (){
    angular.module('contactApp')
        .controller('MainController',['$rootScope', 'ContactService', function($rootScope, ContactService) {
             $rootScope.contacts = ContactService.getContacts();
        }]);
}());