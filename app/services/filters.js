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
                if (filterString) {
                    var out = search(input,'firstname',filterString);
                    out = out.concat(search(input,'lastname',filterString));

                    function search(input,field,searchString){
                        var result = [],flag = 0;
                        for (i=0; i < input.length; ++i) {
                            if (input[i][field].toLowerCase().startsWith(searchString.toLowerCase())) {
                                result.push(input[i]);
                                flag = 1;
                                continue;
                            }
                            if (flag) {
                                break;
                            }
                        }
                        return result;
                    }

                    return out;

                }
                else {
                    return input
                }
            }
        })
}());