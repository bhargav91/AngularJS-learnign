/**
 * Created by bhargavk on 16-07-2015.
 */

angular.module('common').
    filter('capitalizeFilter', function(){
        return function(text){
            return text.toString().toUpperCase();
        }
    });