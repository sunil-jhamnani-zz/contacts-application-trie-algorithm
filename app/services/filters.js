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
                    filterString = filterString.replace(/ +(?= )/g,'');

                    if (filterString.split(' ').length > 1) {

                        // If filter string contains lastname then search them from the output of first.
                        var filterArr = filterString.split(' ');
                        var out = search(input,'firstname',filterArr[0].toLowerCase());
                        out = search(out.slice().sort(compare('lastname')),'lastname',filterArr[1].toLowerCase());
                    }
                    else {

                        //Searching filter string in both firstname and lastname and then merging the results.
                        var out = search(input,'firstname',filterString.toLowerCase());
                        out = out.concat(search(input.slice().sort(compare('lastname')),'lastname',filterString.toLowerCase()));
                    }

                    /**
                     * Search in all the contacts which starts the filter string.
                     * @param input
                     * @param field
                     * @param searchString
                     * @returns {*|Array.<T>|string|Blob|ArrayBuffer|Buffer}
                     */
                    function search(input,field,searchString){
                        var firstindex = binarysearch(input,field,searchString,false);
                        var lastindex = binarysearch(input,field,searchString,true);

                        return input.slice(firstindex,(lastindex + 1));
                    }

                    /**
                     * Binary search algorith used to get the first and last index of contact which contains the search string
                     * @param arr
                     * @param field
                     * @param search
                     * @param invert
                     * @returns {index number}
                     */
                    function binarysearch(arr, field, search, invert) {
                        var mids = {}
                            , min = 0,max = arr.length-1,middle,cmp
                            , sanity = arr.length;

                        while (min < max) {
                            middle = midVal(min, max,mids);
                            searchStr = arr[middle][field].toLowerCase().substr(0,search.length);
                            cmp = searchStr > search ? 1 : searchStr < search ? -1 : 0;
                            if(invert){
                                if (cmp > 0)max = middle - 1;
                                else min = middle;
                            } else {
                                if (cmp < 0)min = middle + 1;
                                else max = middle;
                            }
                            if(!--sanity) break;
                        }
                        searchStr = arr[min][field].toLowerCase().substr(0,search.length)
                        if (max == min && ( searchStr > search ? 1 : searchStr < search ? -1 : 0) === 0) return min;
                        return -1;
                    };

                    /**
                     * Calculate the mid value to be used for binarysearch function.
                     * @param v1
                     * @param v2
                     * @param mids
                     * @returns {middle value}
                     */
                    function midVal(v1,v2,mids){
                        var mid = v1+Math.floor((v2-v1)/2);
                        if(mids[mid]) mid = v1+Math.ceil((v2-v1)/2);
                        mids[mid] = 1;
                        return mid;
                    };

                    return out;
                }
                else {
                    return input;
                }
            }
        })
}());