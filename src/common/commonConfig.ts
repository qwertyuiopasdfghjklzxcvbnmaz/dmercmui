let moment = require('moment');

export class CommonConfig {
    static SESSION_TOKEN = 'SECRET';
    static DEFAULT_DATE_FORMAT = "DD/MM/YYYY";   
    static SESSION_DATE_FORMAT = moment().format('L');
}

export default CommonConfig;