/**
 * Created by sunil.jhamnani on 5/29/16.
 */

/**
 * filterContact used as a filter for searching the contacts
 */
(function () {
    angular.module('contactApp')
        .filter('filterContact', function () {
            return function (firstnametrie, lastnametrie, filterString) {
                //debugger;
                if (filterString) {
                    var out = [], list1 = [], list2 = [];
                    filterString = filterString.replace(/ +(?= )/g, '');

                    if (filterString.split(' ').length > 1) {

                        // If filter string contains lastname then search them from the output of first.
                        var filterArr = filterString.split(' ');
                        list1 = firstnametrie.get(filterArr[0], false);
                        return list1.filter(function (element) {
                            return element.split(' ')[1].indexOf(filterArr[1]) == 0;
                        });
                    }
                    else {

                        //Searching filter string in both firstname and lastname and then merging the results.
                        list1 = firstnametrie.get(filterString, false);
                        list2 = lastnametrie.get(filterString, true);
                        out = getSearchResult(list1, list2);
                    }

                    /**
                     * Get the output list based on the values from both the lists
                     * @param list1
                     * @param list2
                     * @returns {*}
                     */
                    function getSearchResult(list1, list2) {
                        if (list1 && angular.isUndefined(list2)) {
                            return list1;
                        }
                        if (list2 && angular.isUndefined(list1)) {
                            return list2;
                        }
                        if (angular.isUndefined(list1) && angular.isUndefined(list2)) {
                            return
                        }
                        else {
                            list2 = list2.filter(function (element) {
                                return list1.indexOf(element) == -1;
                            });

                            return list1.concat(list2);
                        }
                    }

                    return out.sort();
                }
                else {
                    return firstnametrie.get().sort();
                }
            }
        })
}());