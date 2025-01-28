"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var type_assertions_1 = require("type-assertions");
var index_1 = require("./index");
var test1 = new index_1.ObjectManipulator({})
    .set('x', 123)
    .set('y', 'hello')
    .getObject();
(0, type_assertions_1.typeAssert)();
var test2 = new index_1.ObjectManipulator({})
    .set('x', 123)
    .set('y', 'hello')
    .set('z', true)
    .delete('z')
    .delete('y')
    .getObject();
(0, type_assertions_1.typeAssert)();
var test3 = new index_1.ObjectManipulator({})
    .set('x', 123)
    .set('y', 'hello')
    .delete('y')
    .get('x');
(0, type_assertions_1.typeAssert)();
var test4 = new index_1.ObjectManipulator({ x: true, y: 'hello' })
    .delete('y')
    .get('x');
(0, type_assertions_1.typeAssert)();
