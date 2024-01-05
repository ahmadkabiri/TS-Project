"use strict";
let res = null;
let res2 = undefined;
let num = 1;
const adminLoginHandler = (admin) => {
    switch (admin.name) {
        case 'ali': {
            return `ali login shod`;
        }
        case 'amin': {
            return 'amin login shod';
        }
        default: {
            let neverVariable = admin;
            return neverVariable;
        }
    }
};
function errorMarker(msg, code) {
    throw new Error(JSON.stringify({ message: msg, status: code }));
}
errorMarker('Not Found', 404);
