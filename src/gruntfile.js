/*globals module, console*/
module.exports = function (grunt) {
    'use strict';
    var version;
    
    version = grunt.file.read('package.json');
    version = JSON.parse(version);
    version = version.version;
    grunt.file.write('solveoku/app.version.js', "/*globals angular*/\nangular.module('solveoku').factory('versionSvc', function () {\n    'use strict';\n    return {\n        SolveOkuVersion: '" + version.trim() + "'\n    };\n});");
    
    grunt.registerTask('default', function () {});
    
};