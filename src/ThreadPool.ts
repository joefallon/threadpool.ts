import { ThreadPoolStats } from './ThreadPoolStats';
import { ThreadWorker } from './ThreadWorker';

export class ThreadPool {
    private _minWorkers: number;
    private _maxWorkers: number;
    private _worker: ThreadWorker;
    private _workerPool: ThreadWorker[];
    private _taskQueue: any[];


    public constructor(worker: ThreadWorker) {
        this._worker = worker;
    }

    public getMinWorkers(): number {
        return this._minWorkers;
    }

    public setMinWorkers(value: number) {
        this._minWorkers = value;
    }

    public getMaxWorkers(): number {
        return this._maxWorkers;
    }

    public setMaxWorkers(value: number) {
        this._maxWorkers = value;
    }

    public getStats(): ThreadPoolStats {
        return null;
    }

    public enqueue<A, R>(args: A): Promise<R> {
        return null;
    }

    public terminate(force = false) {

    }
}