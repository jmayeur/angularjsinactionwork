(function(){
    'use strict';

    var user = {
        name: 'jmayeur',
        password: 'foreverpassword'
    };

    var tokens = {};

    var makeRandomToken = function (){
      var token;

        do {
            token = '';
            while(token.length < 36){
                token += Math.round(36*Math.random()).toString(36);
            }
        } while(tokens[token]);

        return token;
    };

    var isLoggedIn = function(browserUsername, browserPassword){
        return browserUsername === user.name && browserPassword === user.password;
    };

    exports.get = function (req, res) {
        res.json({
            loggedIn: tokens[req.body.token]
        });
    };

    exports.post = function (req, res) {
        var loggedIn =  isLoggedIn(req.body.name, req.body.password);

        var token = null;
        if (loggedIn){
            token = makeRandomToken();
            tokens[token] = true;
        }

        res.json({
            loggedIn : loggedIn,
            token : token
        });
    };

    exports.delete = function (req, res) {
        // set login status
        var loggedIn = false;

        res.json({
            loggedIn: loggedIn
        });
    };

}());