'use_strict'

var ConfigService= require('./lib/ConfigService')



/**
 * awsm-architect-config
 */
module.exports= function setup(options, imports, register) {

    console.assert(options.config, "Option 'config' is required")



    var $config= new ConfigService(options.config.env)



    register(null, {
        $config: $config,
    })

}
