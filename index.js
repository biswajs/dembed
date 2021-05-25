/**
 * @package dembed
 * @author Biswajs
 * @copyright [Coded by Biswajs]
 */

//  Lets start the journey
class Dembed {
    constructor(botPrefix, eventType){
        this.botprefix = botPrefix;
        this.event = eventType
    }
    reply(replyMessage){
        try{
            if(replyMessage !== "" || replyMessage !== null)
            return this.event.reply(replyMessage);
        }catch(err){
            return err;
        }
    }
    
}

module.exports = { Dembed };
