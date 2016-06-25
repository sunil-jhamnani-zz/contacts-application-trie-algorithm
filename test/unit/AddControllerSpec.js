///**
// * Created by sunil.jhamnani on 5/30/16.
// */
//
//'use strict';
//
//describe('AddController', function () {
//    var $controllerConstructor, $scope, $rootScope;
//    var $scope = {};
//    var $rootScope = {};
//
//    beforeEach(module('contactApp'));
//
//    beforeEach(inject(function(_$controller_) {
//        $controllerConstructor = _$controller_;
//        String.prototype.capitalize = function() {
//            return this.charAt(0).toUpperCase() + this.slice(1);
//        }
//    }));
//
//    beforeEach(function () {
//        $scope = $rootScope = {};
//        $rootScope.contacts = [
//
//            {firstname: 'Abinash', lastname: 'Tripathy'},
//            {firstname: 'Tushar', lastname: 'Makhija'},
//            {firstname: 'Kevin', lastname: 'Grant'},
//            {firstname: 'Baishampayan', lastname: 'Ghose'},
//            {firstname: 'Abinash', lastname: ''},
//            {firstname: 'Sunil', lastname: 'Jhamnani'},
//            {firstname: 'Sunil', lastname: ''},
//
//        ];
//        $controllerConstructor("AddController",
//            {$scope: $scope, $rootScope: $rootScope});
//
//    })
//    it('should be able to add a new contact', function() {
//
//        $scope.contact = {firstname: 'Niki', lastname: 'Jhamnani'};
//        $scope.addContact();
//        expect($rootScope.contacts).toContain($scope.contact);
//    });
//    it('should not be able to add new contact if already exists', function () {
//        var totalContacts = $rootScope.contacts.length;
//        $scope.contact = {firstname: 'Sunil', lastname: 'Jhamnani'};
//        $scope.addContact();
//        expect($rootScope.contacts.length).toBe(totalContacts);
//
//    });
//    it('should be upto 50 characters long', function () {
//        var totalContacts = $rootScope.contacts.length;
//        $scope.contact = {firstname: 'qwertyuiopqwertyuiopqwertyuiop', lastname: 'qwertyuiopqwertyuiopqwertyuiop'};
//        $scope.addContact();
//        expect($rootScope.contacts.length).toBe(totalContacts);
//    })
//});
