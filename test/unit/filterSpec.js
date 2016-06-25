///**
// * Created by sunil.jhamnani on 5/30/16.
// */
//
//'use strict';
//
//describe('Contact filter', function () {
//    var $filter, input, filterstring;
//
//    beforeEach(module('contactApp'));
//
//    beforeEach(inject(function(_$filter_){
//        $filter = _$filter_;
//    }));
//
//    beforeEach(function () {
//        input = [
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
//    });
//
//    it("should return some contacts matching the filterstring", function () {
//        var contactFilter = $filter('filterContact');
//        filterstring = "sunil"
//        var output = contactFilter(input,filterstring)
//        expect(output.length).toBe(2);
//    });
//
//    it("should return null if nothing found matching the filterstring", function () {
//        var contactFilter = $filter('filterContact');
//        filterstring = "test"
//        var output = contactFilter(input,filterstring)
//        expect(output.length).toBe(0);
//    });
//
//    it("should return all contacts if filterstring empty", function () {
//        var contactFilter = $filter('filterContact');
//        filterstring = "";
//        var output = contactFilter(input,filterstring)
//        expect(angular.equals(input,output)).toBe(true);
//    });
//
//});