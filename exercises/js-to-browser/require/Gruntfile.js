module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-requirejs')

    grunt.initConfig({
        pkg: 'rjs-example',
        requirejs: {
            compile: {
                options: {
                    baseUrl: '.',
                    deps: ['app'],
                    insertRequire: ['app'],
                    name: 'lib/almond',
                    out: 'build.js'
                }
            }
        }
    })

    grunt.registerTask('default', 'requirejs')
}