module.exports = {
    plugins: [],
    extends: ['eslint:recommended'],
    parser: 'babel-eslint',
    env: {
        "es6": true
    },
    rules: {
        "no-undef": "off",
    },
    reportUnusedDisableDirectives: true,
    overrides: [
        {
            "files": ["./dist/*"]
        }
    ]
};
