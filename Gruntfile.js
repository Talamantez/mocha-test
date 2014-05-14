module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        simplemocha: {
            options: {
                globals: ['should'],
                timeout: 3000,
                ignoreLeaks: false,
                ui: 'bdd',
                reporter: 'tap'
            },
            test: {
                src: ['test/*.js']
            }
        }

    });


    grunt.loadNpmTasks('grunt-simple-mocha');

    grunt.registerTask('test', ['simplemocha']);
}
