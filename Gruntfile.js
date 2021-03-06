module.exports = function (grunt) {
    grunt.initConfig({
        babel_multi_files: {
            compact_format_single_file: {
                options: {
                    sourceMap: false,
                    comments: false,
                    sourceType: "unambiguous",
                    presets: [
                        ['@babel/preset-env', {
                            "targets": {
                                "esmodules": true
                            }
                        }], 'minify',
                    ]
                },

                src: ["src/*.js"],
                dest: "dist/client.min.js"
            }
        }
    });
    grunt.loadNpmTasks('grunt-babel-multi-files');
    grunt.registerTask('build', ['babel_multi_files']);
};
