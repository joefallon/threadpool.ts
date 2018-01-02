export class ThreadWorker {

    public constructor() {

    }

    /**
     * Function to execute when the thread worker is called to begin its work.
     */
    public execute<A, R>(fn: (args: A) => Promise<R>) {
    }
}