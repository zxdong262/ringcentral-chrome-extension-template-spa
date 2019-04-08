/**
 * config sample file
 * use `cp config.sample.js config.js` to create a config
 *
 */
module.exports = {

  //// dev related

  // minimize content.js
  // minimize: false

  // congfigs to build app

  //// ringcentral config

  ringCentralConfigs: {
    clientID: '',
    clientSecret: '',
    appServer: ''
  },


  //// for third party related

  thirdPartyConfigs: {

    //service name, one word only, such as Insightly, RedTailCRM...
    serviceName: 'noname',

    // show call log sync desc form or not
    showCallLogSyncForm: true
  }

}




