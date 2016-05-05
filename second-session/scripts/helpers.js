let helpers = {
    prettyDate: function(utcDateString) {
        var weekdays    = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            months      = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            date        = new Date(utcDateString),
            prettyDate  = weekdays[date.getUTCDay()] + ' ' + date.getUTCDate() +' ' + months[date.getUTCMonth()] + ' ' + date.getUTCFullYear()
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
    

    getClubColors : function(name) {
        var objColors = {};
        switch (name) {
            case 'Werder Bremen' :
                objColors.main      = '#009252';
                objColors.secondary = '#006737';
                break;
            case 'Bayern Munich' :
                objColors.main      = '#c03';
                objColors.secondary = '#ff0040';
                break;
            case 'Alianza Lima' :
                objColors.main      = '#0b4784';
                objColors.secondary = '#0f60b3';
                break;
            case 'Deportivo Pesquero' :
                objColors.main      = '#0f60b3';
                objColors.secondary = '#fbbb00';
                break;
            case 'FC Chelsea' :
                objColors.main      = '#0B1E5E';
                objColors.secondary = '#3064CA';
                break;
        }

        return objColors;
    },

    nameToImageShield : function(name) {
        var imagePath;
        switch (name) {
            case 'Werder Bremen' :
                imagePath = 'werder.svg';
                break;
            case 'Bayern Munich' :
                imagePath = 'bayern.svg';
                break;
            case 'Hertha BSC' :
                imagePath = 'hertha.svg';
                break;
            case 'VfL Wolfsburg' :
                imagePath = 'wolfsburg.svg';
                break;
            case 'Hamburger SV' :
                imagePath = 'hamburg.svg';
                break;
            case '1.FC Kaiserlautern' :
                imagePath = 'kaiserlautern.svg';
                break;
            case 'SSV Ulm 1846' :
                imagePath = 'svv_ulm.svg';
                break;
            case 'SC Freiburg' :
                imagePath = 'freiburg.svg';
                break;
            case '1860 Munich' :
                imagePath = '1860_muenchen.svg';
                break;
            case 'Bor. Dortmund' :
                imagePath = 'borusia_dortmund.svg';
                break;
            case 'Hansa Rostock' :
                imagePath = 'hansa_rostock.svg';
                break;
            case 'E. Frankfurt' :
                imagePath = 'eintracht_frankfurt.svg';
                break;
            case 'Arm. Bielefeld' :
                imagePath = 'arminia_bielefeld.svg';
                break;
            case 'Bay. Leverkusen' :
                imagePath = 'bayer_leverkusen.svg';
                break;
            case 'FC Schalke 04' :
                imagePath = 'schalke04.svg';
                break;
            case 'VfB Stuttgart' :
                imagePath = 'stuttgart.svg';
                break;
            case 'Unterhaching' :
                imagePath = 'unterhaching.svg';
                break;
            case 'MSV Duisburg' :
                imagePath = 'duisburg.svg';
                break;
            case 'Bor. Monchengladbach' :
                imagePath = 'borusia_monchengladbach.svg';
                break;
            case 'FC St. Pauli' :
                imagePath = 'st_pauli.svg';
                break;
            case 'Energie Cottbus' :
                imagePath = 'energie_cottbus.svg';
                break;
            case '1.FC Nuernberg' :
                imagePath = 'fc_nuernberg.svg';
                break;
            case '1.FC Koeln' :
                imagePath = 'fc_koeln.svg';
                break;
            case 'Deportivo Pesquero' :
                imagePath = 'pesquero.svg';
                break;
            case 'Alianza Lima' :
                imagePath = 'alianza-lima.svg';
                break;
            case 'FC Chelsea' :
                imagePath = 'fc-chelsea.svg';
                break;
            case 'Manchester Utd.' :
                imagePath = 'manchester-united.svg';
                break;
            case 'Birmingham City' :
                imagePath = 'birmingham-city.svg';
                break;
            case 'FC Liverpool' :
                imagePath = 'fc-liverpool.svg';
                break;
            case 'Aston Villa' :
                imagePath = 'aston-villa.svg';
                break;
            case 'FC Reading' :
                imagePath = 'fc-reading.svg';
                break;
            case 'FC Portsmouth' :
                imagePath = 'fc-porstmouth.svg';
                break;
            case 'Blackburn Rov.' :
                imagePath = 'blackburn-roverts.svg';
                break;
            case '1.FSV Mainz 05' :
                imagePath = 'mainz.svg';
                break;
            case 'Hannover 96' :
                imagePath = 'hannover96.svg';
                break;
            case 'FC Augsburg' :
                imagePath = 'ausburg.svg';
                break;
            case 'TSG Hoffenheim' :
                imagePath = 'hoffenheim.svg';
                break;
            case 'F. Duesseldorf' :
                imagePath = 'duesseldorf.svg';
                break;
            case 'Greuther Fuerth' :
                imagePath = 'greuther_f.svg';
                break;
            case 'E. Braunschweig' :
                imagePath = 'braunschweiger.svg';
                break;
            case 'Sporting Cristal' :
                imagePath = 'sporting-cristal.svg';
                break;
            case 'Universitario' :
                imagePath = 'universitario.svg';
                break;
            case 'Sport Boys' :
                imagePath = 'sport-boys.svg';
                break;
            case 'Cienciano' :
                imagePath = 'cienciano.svg';
                break;
    
            case 'Deportivo Municipal' :
                imagePath = 'municipal.svg';
                break;
            case 'Melgar' :
                imagePath = 'melgar.svg';
                break;
            case 'Juan Aurich' :
                imagePath = 'juan-aurich.svg';
                break;
            case 'Alianza Atletico' :
                imagePath = 'sullana.png';
                break;
        }
        return imagePath;
    }
};

export default helpers;