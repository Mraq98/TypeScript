"use strict";
/*

Intro:

    Our attempt to Open Source didn't work quite as
    expected. It turned out there were already many
    existing functional JS libraries.

    All the remaining developers left the company as
    well. It seems that they are joining a very
    ambitious startup which re-invented a juicer and
    raised millions of dollars.
    Too bad we cannot compete with this kind of
    financing even though we believe our idea is
    great.

    It's time to shine for the last time and publish
    our new invention: object-constructor as our CTO
    named it. A small library which helps
    manipulating an object.

Exercise:

    Here is a library which helps manipulating objects.
    We tried to write type annotations and we failed.
    Please help!

*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectManipulator = void 0;
var ObjectManipulator = /** @class */ (function () {
    function ObjectManipulator(obj) {
        this.obj = obj;
    }
    ObjectManipulator.prototype.set = function (key, value) {
        var _a;
        return new ObjectManipulator(__assign(__assign({}, this.obj), (_a = {}, _a[key] = value, _a)));
    };
    ObjectManipulator.prototype.get = function (key) {
        return this.obj[key];
    };
    ObjectManipulator.prototype.delete = function (key) {
        var newObj = __assign({}, this.obj);
        delete newObj[key];
        return new ObjectManipulator(newObj);
    };
    ObjectManipulator.prototype.getObject = function () {
        return this.obj;
    };
    return ObjectManipulator;
}());
exports.ObjectManipulator = ObjectManipulator;
