/**
 * Created by sunil.jhamnani on 5/28/16.
 */
/**
 * Service to store the data which is used by the controllers
 */
(function() {
    angular.module('contactApp')
        .factory('ContactService', [function(){
            var factory = {};

            factory.getContacts = function () {
                return contactList;
            };

            var contactList = [

                {firstname: 'Abinash', lastname: ''},
                {firstname: 'Tushar', lastname: 'Makhija'},
                {firstname: 'Kevin', lastname: 'Grant'},
                {firstname: 'Baishampayan', lastname: 'Ghose'},
                {firstname: 'Abinash', lastname: 'Tripathy'},
                {firstname: 'Sunil', lastname: 'Jhamnani'},
                {firstname: 'Sunil', lastname: ''},

            ];

            return factory;
        }])
}());