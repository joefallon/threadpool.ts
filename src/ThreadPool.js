"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ThreadPool = /** @class */ (function () {
    function ThreadPool(worker) {
        this._worker = worker;
    }
    ThreadPool.prototype.getMinWorkers = function () {
        return this._minWorkers;
    };
    ThreadPool.prototype.setMinWorkers = function (value) {
        this._minWorkers = value;
    };
    ThreadPool.prototype.getMaxWorkers = function () {
        return this._maxWorkers;
    };
    ThreadPool.prototype.setMaxWorkers = function (value) {
        this._maxWorkers = value;
    };
    ThreadPool.prototype.getStats = function () {
        return null;
    };
    ThreadPool.prototype.enqueue = function (args) {
        return null;
    };
    ThreadPool.prototype.terminate = function (force) {
        if (force === void 0) { force = false; }
    };
    return ThreadPool;
}());
exports.ThreadPool = ThreadPool;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGhyZWFkUG9vbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRocmVhZFBvb2wudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQTtJQVFJLG9CQUFtQixNQUFvQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRU0sa0NBQWEsR0FBcEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRU0sa0NBQWEsR0FBcEIsVUFBcUIsS0FBYTtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRU0sa0NBQWEsR0FBcEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRU0sa0NBQWEsR0FBcEIsVUFBcUIsS0FBYTtRQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRU0sNkJBQVEsR0FBZjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUVNLDRCQUFPLEdBQWQsVUFBcUIsSUFBTztRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSw4QkFBUyxHQUFoQixVQUFpQixLQUFhO1FBQWIsc0JBQUEsRUFBQSxhQUFhO0lBRTlCLENBQUM7SUFDTCxpQkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1ksZ0NBQVUifQ==