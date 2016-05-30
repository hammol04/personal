module.exports = function ( grunt ) {
    var path = require( "path" );

    grunt.initConfig( {
        staticPath: path.resolve() + "/src",

        sass: {
            dev: {
                options: {
                    outputStyle: "expanded"
                },
                files: [ {
                    expand: true,
                    cwd: "<%=staticPath%>/scss",
                    src: [ "*.scss" ],
                    dest: "<%=staticPath%>",
                    ext: ".css"
                } ]
            },
            dist: {
                options: {
                    outputStyle: "compressed"
                },
                files: [ {
                    expand: true,
                    cwd: "<%=staticPath%>/scss",
                    src: [ "*.scss" ],
                    dest: "<%=staticPath%>",
                    ext: ".css"
                } ]
            }
        },
        htmlmin: {
          dist: {
            options: {
              removeComments: true,
              collapseWhitespace: true
            },
            files: {
              'src/index.html': 'src/index.html',
            }
          }
        }
    } );

    grunt.loadNpmTasks( "grunt-sass" );
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask( "server", [ "shell:server" ] );
    grunt.registerTask( "build", [ "sass:dist", "htmlmin:dist"] );
    grunt.registerTask( "default", [ "sass:dev"] );
};
