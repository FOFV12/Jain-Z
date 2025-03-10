
require("dotenv").config();

module.exports = {

  /**
   
   */

  TOKEN: process.env.TOKEN || ",  // your bot token
  PREFIX: process.env.PREFIX || ".", //<= default is #  // bot prefix
  OWNER_ID: process.env.OWNER_ID || "1057588613463953498", //your client id

  /**
   *
   */
  EMPTY_LEAVE: process.env.EMPTY_LEAVE || 60, //<= default is 60  // time in seconds

  /**
   * @description boolean settings for the bot
   */
  LEAVE_EMPTY: false, //<= default is true "true" = use and "false" = not use!  // leave voice channel when empty
  LEAVE_FINISH: false, //<= default is true "true" = use and "false" = not use!  // leave voice channel when finished
  LEAVE_STOP: true, //<= default is true "true" = use and "false" = not use!  // leave voice channel when stopped
}
