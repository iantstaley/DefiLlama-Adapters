const ADDRESSES = require('../helper/coreAssets.json')
const {fullCoumpoundExports} = require('../helper/compound')

const comptroller = "0xe2e17b2CBbf48211FA7eB8A875360e5e39bA2602"

module.exports=fullCoumpoundExports(comptroller, "ethereum", "0xbEe9Cf658702527b0AcB2719c1FAA29EdC006a92", ADDRESSES.ethereum.WETH)