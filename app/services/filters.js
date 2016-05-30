/**
 * Created by sunil.jhamnani on 5/29/16.
 */

/**
 * filterContact used as a filter for searching the contacts
 */
(function() {
    angular.module('contactApp')
        .filter('filterContact', function() {
            return function (input, filterString) {
                if (isNaN(filterString) && filterString != null) {
                    var out = [];
                    angular.forEach(input, function(contact) {
                        var name = (contact.firstname + " " + contact.lastname).toLowerCase();
                        filterString = filterString.toLowerCase();
                        if (name.indexOf(filterString) > -1) {
                            out.push(contact);
                        }
                    });

                    return out;
                }
                else {
                    return input
                }
            }
        })
}());