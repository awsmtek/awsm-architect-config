'use_strict'

module.exports= ConfigService



var Config= require('../Config')



/**
 * ConfigService
 *
 * @constructor
 * @return {ConfigService}
 */
function ConfigService(env) {
    this.env= env || 'development'
}



/**
 * create config
 *
 * @param {Object} config
 * @return {Config}
 */
ConfigService.prototype.create= function(config) {
    return new Config(this.env, config)
}
