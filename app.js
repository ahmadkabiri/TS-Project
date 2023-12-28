var res = null;
var res2 = undefined;
var num = 1;
var adminLoginHandler = function (admin) {
    switch (admin.name) {
        case 'ali': {
            return "ali login shod";
        }
        case 'amin': {
            return 'amin login shod';
        }
        default: {
            var neverVariable = admin;
            return neverVariable;
        }
    }
};
function errorMarker(msg, code) {
    throw new Error(JSON.stringify({ message: msg, status: code }));
}
errorMarker('Not Found', 404);
