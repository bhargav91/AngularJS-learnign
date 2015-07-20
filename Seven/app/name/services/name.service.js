/**
 * Created by bhargavk on 15-07-2015.
 */

angular.module('name').
    factory('myService', function() {
        return({
            items: [],
            addItem: function(item) {
                this.items.push(item);
            }
        });
    });