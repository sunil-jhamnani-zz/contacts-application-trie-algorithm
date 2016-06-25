/**
 * Created by sunil.jhamnani on 5/29/16.
 */
(function () {
    angular.module('contactApp')
        .controller('MainController', ['$rootScope', function ($rootScope) {
            $rootScope.firstNameTrie = new Trie();
            $rootScope.lastNameTrie = new Trie();
            $rootScope.firstNameTrie.put("sunil", "jhamnani");
            $rootScope.firstNameTrie.put("sunil", "kumar");
            $rootScope.firstNameTrie.put("abhinash", "");
            $rootScope.firstNameTrie.put("abhinash", "tripathy");
            $rootScope.firstNameTrie.put("tushar", "makhija");
            $rootScope.firstNameTrie.put("kevin", "grant");
            $rootScope.firstNameTrie.put("baishampayan", "ghose");
            $rootScope.lastNameTrie.put("jhamnani", "sunil");
            $rootScope.lastNameTrie.put("kumar", "sunil");
            $rootScope.lastNameTrie.put("tripathy", "abhinash");
            $rootScope.lastNameTrie.put("makhija", "tushar");
            $rootScope.lastNameTrie.put("grant", "kevin");
            $rootScope.lastNameTrie.put("ghose", "baishampayan");
        }]);
}());