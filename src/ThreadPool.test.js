"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert = require("assert");
var ThreadPool_1 = require("./ThreadPool");
describe('ThreadPool', function () {
    it('getters and setters test', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        var pool;
        return tslib_1.__generator(this, function (_a) {
            pool = new ThreadPool_1.ThreadPool();
            pool.setMinWorkers(1);
            pool.setMaxWorkers(2);
            assert.equal(pool.getMinWorkers(), 1);
            assert.equal(pool.getMaxWorkers(), 2);
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhyZWFkUG9vbC50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVGhyZWFkUG9vbC50ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQkFlRzs7O0FBZkgsK0JBQWlDO0FBRWpDLDJDQUEwQztBQUUxQyxRQUFRLENBQUMsWUFBWSxFQUFFO0lBR25CLEVBQUUsQ0FBQywwQkFBMEIsRUFBRTs7O1lBQ3JCLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFdEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztTQUN6QyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9