/*
 * Serve JSON to our AngularJS client.
 */

//https is used for accessing the Rollbase API
var https = require('https');
var password = 'YOUR ROLLBASE PASSWORD HERE';
var username = 'YOUR ROLLBASE USERNAME HERE';
var sessionId = '';
login();
// This logs back in periodically. Currently it logs in every hour, but the interval can be adjusted.
var interval = setInterval(login, 3600000);

// Function for logging in with credentials. It updates the sessionId token and also calls updateData to update any data. 
function login() {
    var loginOptions = {
        host: 'rollbase.com',
        port: 443,
        // Note this is password not Password like in documentation
        path: '/rest/api/login?&output=json&password=' + password + '&loginName=' + username
    };

    console.info('Options prepared:');
    console.info(loginOptions);
    console.info('Do the Login');
    // do the request
    var loginGet = https.request(loginOptions, function(res) {
        console.log("statusCode: ", res.statusCode);
        var data = '';

        res.on('data', function(d) {
            data += d;
        });
        res.on('end', function() {
            console.info('Login result:');
            console.log(data);
            var obj = JSON.parse(data);
            if (obj.status == 'ok') {
                console.log(obj.sessionId);
                sessionId = obj.sessionId;
                // An optional function to fetch existing data from the Rollbase API
                updateData();
            } else {
                console.log(obj.message);
            }
        })
    });
    loginGet.end();
    loginGet.on('error', function(e) {
        console.error(e);
    });
}

// An optional function to fetch existing data from the Rollbase API
function updateData() {
	/*
	* TODO: Fetch data
	*/
}

exports.name = function(req, res) {
    // Instead of just returning a set value, the value returned could also come from a local data store updated by Rollbase API calls, or the data could come directly from Rollbase API calls.
    res.json({
        name: 'Rollbase API'
    });
};