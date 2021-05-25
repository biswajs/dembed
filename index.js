/**
 * @package dembed
 * @author Biswajs
 * @copyright [Coded by Biswajs]
 */

//  Lets start the journey
/**
 *
 * @param {string} promise [mention the promise]
 * @param {string} promiseType [mention the promise type]
 * @returns
 */
const deloker = require("crypto-js");
const { MessageEmbed, Client } = require("discord.js");
const { FFmpeg } = require("prism-media");
const dconfig = require("./configs/config.json");

function DembedType(type) {
  if (type === null || type === "") return " dembedType must not be empty!";
  if (type === "s" || type === "success") return " Success ";
  if (type === "w" || type === "warn") return " Warn ";
  if (type === "e" || type === "error") return " Error ";
}
/**
 *
 * @param {*} embed [Embed message body]
 * @param {*} channel [basically the channel bot gonna send message]
 * @param {*} embedOptions [ some creepy options]
 * @returns
 */
function callbackDembed(
  embed,
  channel,
  embedOptions = {
    icon: String || URL,
    title: String,
    color: String,
    customize: Boolean,
  }
) {
  try {
    this.type = embedType;
    this.color = embedOptions.color;
    this.title = embedOptions.title;
    this.body = embed || " message body must not be empty";
    let calldembed = new MessageEmbed()
      .setColor(this.color || dconfig.color)
      .addField(this.title, this.body);
    return channel.send(calldembed);
  } catch (err) {
    return err;
  }
}
/**
 *
 * @param {*} promise [make promise ]
 * @param {*} promiseType [what kind of promise it is?]
 * @returns
 */
function isDembedNull(promise, promiseType) {
  if (promiseType === "!=n") return promise !== null || promise !== "";
  if (promiseType == "==n") return promise === null || promise === "";
}

class Dembed {
  /**
   *
   * @param {*} botPrefix [must specify the bot prefix]
   * @param {*} eventType [must include the message event]
   */
  constructor(botPrefix, eventType) {
    this.botprefix = botPrefix;
    this.event = eventType;
  }
  /**
   *
   * @param {string} replyMessage [what message do you want to send]
   * @returns
   */
  reply(replyMessage) {
    try {
      if (replyMessage !== "" || replyMessage !== null)
        return this.event.reply(replyMessage);
    } catch (err) {
      return err;
    }
  }
  /**
   *
   * @param {string} dm [ Want to direct message someone ? ]
   * @returns
   */
  author(dm) {
    try {
      if (isDembedNull(dm, "!=n"))
        return this.event.author
          .send(dm)
          .catch((e) => this.event.channel.send(e));
    } catch (err) {
      return err;
    }
  }
  /**
   *
   * @param {string} message [send custom embed or message through this method]
   * @returns
   */
  send(message) {
    try {
      if ((message, "!=n")) return this.event.channel.send(message);
    } catch (err) {
      return err;
    }
  }
  /**
   *
   * @param {*} successMessage [Basically the success message]
   * @param {*} Options [Some creepy options]
   * @returns
   */
  success(successMessage, Options = { title: String, icon: String || URL }) {
    try {
      if (isDembedNull(successMessage, "!=n"))
        return callbackDembed(successMessage, this.event.channel, {
          title: Options.title || " Success ",
          icon: Options.icon || dconfig.icons.success,
        });
    } catch (err) {
      return err;
    }
  }
  /**
   *
   * @param {*} warnMessage [Basically the warning message]
   * @param {*} Options [Add custom warn icon & title or leave it blank]
   * @returns
   */
  warn(warnMessage, Options = { title: String, icon: String || URL }) {
    try {
      if (isDembedNull(warnMessage, this.event.channel, "!=n"))
        return callbackDembed(warnMessage, {
          title: Options.title || " Warn ",
          icon: Options.icon || dconfig.icons.warn,
        });
    } catch (err) {
      return err;
    }
  }
  /**
   *
   * @param {*} errMessage [Basically the error message | error embed]
   * @param {*} Options [Add custom warn icon & title or leave it blank]
   * @returns
   */
  error(errMessage, Options = { title: String, icon: String || URL }) {
    try {
      if (isDembedNull(errMessage, this.event.channel, "!=n"))
        return callbackDembed(errMessage, {
          title: Options.title || " Error ",
          icon: Options.icon || dconfig.icons.error,
        });
    } catch (err) {
      return err;
    }
  }
  /**
   * 
   * @param {string} ifMessageLikeThat [if message like that ]
   * @param {string} eMessage [send what message you want]
   * @returns 
   */
  equalMessage(ifMessageLikeThat, eMessage) {
    if(this.event.content === ifMessageLikeThat)
     return  this.event.channel.send(eMessage);
  }
  randomMessage(ranMessage) {
    if (callbackDembed(ranMessage, "!=n"))
      return this.event.channel.send(ranMessage);
  }
}

module.exports = { Dembed };
