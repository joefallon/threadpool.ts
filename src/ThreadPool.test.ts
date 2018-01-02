import * as assert from 'assert';

import { ThreadPool } from './ThreadPool';

describe('ThreadPool', () => {


    it('getters and setters test', async () => {
        const pool = new ThreadPool();
        pool.setMinWorkers(1);
        pool.setMaxWorkers(2);

        assert.equal(pool.getMinWorkers(), 1);
        assert.equal(pool.getMaxWorkers(), 2);
    });
});