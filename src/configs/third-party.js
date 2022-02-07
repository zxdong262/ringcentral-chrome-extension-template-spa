/**
 * content config file
 * with proper config,
 * insert `call with ringcentral` button
 * or hover some elemet show call button tooltip
 * or convert phone number text to click-to-call link
 *
 */

/**
 * thirdPartyService config
 * @param {*} serviceName
 */
export async function thirdPartyServiceConfig (serviceName) {
  console.log(serviceName, 'serviceName')
  const services = {
    name: serviceName
  }

  // handle ringcentral event
  const handleRCEvents = async e => {
    const { data } = e
    if (!data) {
      return
    }
    console.debug(data)
  }

  return {
    services,
    handleRCEvents
  }
}

/**
 * init third party
 * could init dom insert etc here
 */
export async function initThirdParty () {

}
