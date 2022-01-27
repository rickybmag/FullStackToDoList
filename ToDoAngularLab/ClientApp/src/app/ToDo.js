"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convert = exports.ToDo = void 0;
var ToDo = /** @class */ (function () {
    function ToDo() {
    }
    return ToDo;
}());
exports.ToDo = ToDo;
var Convert = /** @class */ (function () {
    function Convert() {
    }
    Convert.toToDo = function (json) {
        return JSON.parse(json);
    };
    Convert.toDoToJson = function (value) {
        return JSON.stringify(value);
    };
    return Convert;
}());
exports.Convert = Convert;
//# sourceMappingURL=ToDo.js.map