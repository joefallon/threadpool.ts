export interface ThreadPoolStats {
    totalWorkers: number;
    busyWorkers:  number;
    idleWorkers:  number;
    pendingTasks: number;
    activeTasks:  number;
}