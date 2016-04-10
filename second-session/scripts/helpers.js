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
    },

    nameToImageShield : function(name) {
        var imagePath;
        switch (name) {
            case 'Werder Bremen' :
                imagePath = 'build/svg/werder.svg';
                break;
            case 'Bayern Munich' :
                imagePath = 'build/svg/bayern.svg';
                break;
            case 'Hertha BSC' :
                imagePath = 'build/svg/hertha.svg';
                break;
            case 'VfL Wolfsburg' :
                imagePath = 'build/svg/wolfsburg.svg';
                break;
            case 'Hamburger SV' :
                imagePath = 'build/svg/hamburg.svg';
                break;
            case '1.FC Kaiserlautern' :
                imagePath = 'build/svg/kaiserlautern.svg';
                break;
            case 'SSV Ulm 1846' :
                imagePath = 'build/svg/svv_ulm.svg';
                break;
            case 'SC Freiburg' :
                imagePath = 'build/svg/freiburg.svg';
                break;
            case '1860 Munich' :
                imagePath = 'build/svg/1860_muenchen.svg';
                break;
            case 'Bor. Dortmund' :
                imagePath = 'build/svg/borusia_dortmund.svg';
                break;
            case 'Hansa Rostock' :
                imagePath = 'build/svg/hansa_rostock.svg';
                break;
            case 'E. Frankfurt' :
                imagePath = 'build/svg/eintracht_frankfurt.svg';
                break;
            case 'Arm. Bielefeld' :
                imagePath = 'build/svg/arminia_bielefeld.svg';
                break;
            case 'Bay. Leverkusen' :
                imagePath = 'build/svg/bayer_leverkusen.svg';
                break;
            case 'FC Schalke 04' :
                imagePath = 'build/svg/schalke04.svg';
                break;
            case 'VfB Stuttgart' :
                imagePath = 'build/svg/stuttgart.svg';
                break;
            case 'Unterhaching' :
                imagePath = 'build/svg/unterhaching.svg';
                break;
            case 'MSV Duisburg' :
                imagePath = 'build/svg/duisburg.svg';
                break;
        }
        return imagePath;
    }
};

export default helpers;