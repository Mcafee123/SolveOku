/*globals module, console*/
module.exports = function (grunt) {
    'use strict';
    var version, files, cfg;
    
    version = grunt.file.read('package.json');
    version = JSON.parse(version);
    version = version.version;
    grunt.file.write('solveoku/app.version.js', "/*globals angular*/\nangular.module('solveoku').factory('versionSvc', function () {\n    'use strict';\n    return {\n        SolveOkuVersion: '" + version.trim() + "'\n    };\n});");
 
    files =  {
        // lib
        spa_lib: [
            'bower_modules/jquery/dist/jquery.js',
            'bower_modules/underscore/underscore.js',
            'bower_modules/bootstrap/dist/js/bootstrap.js',
            'bower_modules/angular/angular.js',
            'bower_modules/angular-animate/angular-animate.js',
            'bower_modules/angular-bootstrap/ui-bootstrap.js',
            'bower_modules/angular-bootstrap/ui-bootstrap-tpls.js'
        ],
        spa_vendor_built: 'build/vendor.js'
    };
    
    cfg = {
        concat: {
            pre: {
                src: [files.spa_lib],
                dest: files.spa_vendor_built
            },
            js: {
                src: [files.spa_vendor_built, files.spa_annotated],
                dest: files.spa_built
            }
        }
    };
    
    grunt.initConfig(cfg);
    
    grunt.loadNpmTasks("grunt-contrib-concat");
    
    grunt.registerTask('build', 'concat:pre');
    grunt.registerTask('default', 'build');
    
};