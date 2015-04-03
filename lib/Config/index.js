'use_strict'

module.exports= Config



var extend= require('extend')



/**
 * Config
 *
 * @constructor
 * @return {Config}
 */
function Config(env, config) {
    this.env= env || 'development'
    this.config= extend(true, {}, config.default || {}, config[this.env] || {})
}



/**
 * get
 *
 * @param {String} key
 * @return {Mixed}
 */
Config.prototype.get= function(key) {
    var config= this.config
    key.split('.').map(function (path) {
        if (config[path]) config= config[path]
    })
    return config
}

/**
 * isEnabled
 *
 * @param {String} key
 * @return {Boolean}
 */
Config.prototype.isEnabled= function(key) {
    var config= this.get(key)
    return config && config.enabled !== false
}

/**
 * isDisabled
 *
 * @param {String} key
 * @return {Boolean}
 */
Config.prototype.isDisabled= function(key) {
    return !this.isEnabled(key)
}
