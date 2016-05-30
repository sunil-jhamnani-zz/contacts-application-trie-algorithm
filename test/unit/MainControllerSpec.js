/**
 * Created by sunil.jhamnani on 5/30/16.
 */

'use strict';

describe('MainContoller', function() {

    var $controllerConstructor, rootScope, mockContactService;

    beforeEach(module('contactApp'));

    beforeEach(inject(function(_$controller_, $rootScope) {
        $controllerConstructor = _$controller_;
        rootScope = $rootScope.$new();
        mockContactService = sinon.stub({getContacts: function () {}});
    }));
    it('should set the rootScope contacts to the result of ContactService.getContacts()', function() {

        var mockContacts = {};

        mockContactService.getContacts.returns(mockContacts);
        $controllerConstructor("MainController",
            {'$rootScope': rootScope, ContactService: mockContactService});
        expect(rootScope.contacts).toBe(mockContacts);
    });
});
