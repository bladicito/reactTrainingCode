let helpers = {
    prettyDate: function(utcDateString) {
        var weekdays    = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months      = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            date        = new Date(utcDateString),
            prettyDate  = weekdays[date.getUTCDay()] + ' ' + months[date.getUTCMonth()] + ' ' + date.getUTCDate()
        ;



        return prettyDate;
    },
    storeDate: function(dateObject) {
        var dd          = ('0' + dateObject.getUTCDate()).slice(-2),
            mm          = ('0' + (dateObject.getUTCMonth() + 1)).slice(-2),
            yyyy        = dateObject.getUTCFullYear(),
            dateString  = yyyy + '-'+ mm + '-'+ dd
        ;

        return dateString;
    },

    caloriesRemaining : function(entries, selectedDate) {
        var entryKeys   = Object.key(entries),
            calories    = 0,
            maxCalories = 2000,
            key
        ;

        for(var i = 0; i < entryKeys.length; i++) {
            key = entryKeys[i];
            if (entries[key].date == selectedDate) {
                calories += entries[key].calories;
            }
        }

        return maxCalories - calories;
    }
};

export default helpers;