"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverageValue = exports.getMedianElement = exports.getMedianIndex = exports.getMinElement = exports.getMinIndex = exports.getMaxElement = exports.getMaxIndex = void 0;
var stats_1 = require("stats");
Object.defineProperty(exports, "getMaxIndex", { enumerable: true, get: function () { return stats_1.getMaxIndex; } });
Object.defineProperty(exports, "getMaxElement", { enumerable: true, get: function () { return stats_1.getMaxElement; } });
Object.defineProperty(exports, "getMinIndex", { enumerable: true, get: function () { return stats_1.getMinIndex; } });
Object.defineProperty(exports, "getMinElement", { enumerable: true, get: function () { return stats_1.getMinElement; } });
Object.defineProperty(exports, "getMedianIndex", { enumerable: true, get: function () { return stats_1.getMedianIndex; } });
Object.defineProperty(exports, "getMedianElement", { enumerable: true, get: function () { return stats_1.getMedianElement; } });
Object.defineProperty(exports, "getAverageValue", { enumerable: true, get: function () { return stats_1.getAverageValue; } });
var admins = [
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'admin', name: 'Steve', age: 40, role: 'Steve' },
    { type: 'admin', name: 'Will Bruces', age: 30, role: 'Overseer' },
    { type: 'admin', name: 'Superwoman', age: 28, role: 'Customer support' }
];
var users = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'user', name: 'Moses', age: 70, occupation: 'Desert guide' },
    { type: 'user', name: 'Superman', age: 28, occupation: 'Ordinary person' },
    { type: 'user', name: 'Inspector Gadget', age: 31, occupation: 'Undercover' }
];
function logUser(user) {
    if (!user) {
        console.log(' - none');
        return;
    }
    var pos = users.indexOf(user) + 1;
    console.log(" - #".concat(pos, " User: ").concat(user.name, ", ").concat(user.age, ", ").concat(user.occupation));
}
function logAdmin(admin) {
    if (!admin) {
        console.log(' - none');
        return;
    }
    var pos = admins.indexOf(admin) + 1;
    console.log(" - #".concat(pos, " Admin: ").concat(admin.name, ", ").concat(admin.age, ", ").concat(admin.role));
}
var compareUsers = function (a, b) { return a.age - b.age; };
var compareAdmins = function (a, b) { return a.age - b.age; };
var colorizeIndex = function (value) { return String(value + 1); };
console.log('Youngest user:');
logUser((0, stats_1.getMinElement)(users, compareUsers));
console.log(" - was ".concat(colorizeIndex((0, stats_1.getMinIndex)(users, compareUsers)), "th to register"));
console.log();
console.log('Median user:');
logUser((0, stats_1.getMedianElement)(users, compareUsers));
console.log(" - was ".concat(colorizeIndex((0, stats_1.getMedianIndex)(users, compareUsers)), "th to register"));
console.log();
console.log('Oldest user:');
logUser((0, stats_1.getMaxElement)(users, compareUsers));
console.log(" - was ".concat(colorizeIndex((0, stats_1.getMaxIndex)(users, compareUsers)), "th to register"));
console.log();
console.log('Average user age:');
console.log(" - ".concat(String((0, stats_1.getAverageValue)(users, function (_a) {
    var age = _a.age;
    return age;
})), " years"));
console.log();
console.log('Youngest admin:');
logAdmin((0, stats_1.getMinElement)(admins, compareAdmins));
console.log(" - was ".concat(colorizeIndex((0, stats_1.getMinIndex)(users, compareUsers)), "th to register"));
console.log();
console.log('Median admin:');
logAdmin((0, stats_1.getMedianElement)(admins, compareAdmins));
console.log(" - was ".concat(colorizeIndex((0, stats_1.getMedianIndex)(users, compareUsers)), "th to register"));
console.log();
console.log('Oldest admin:');
logAdmin((0, stats_1.getMaxElement)(admins, compareAdmins));
console.log(" - was ".concat(colorizeIndex((0, stats_1.getMaxIndex)(users, compareUsers)), "th to register"));
console.log();
console.log('Average admin age:');
console.log(" - ".concat(String((0, stats_1.getAverageValue)(admins, function (_a) {
    var age = _a.age;
    return age;
})), " years"));
