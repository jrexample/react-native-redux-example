module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "linebreak-style": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-no-bind": 0,
    },
    "globals": {
        "fetch": false,
        "__DEV__": false
    }
};