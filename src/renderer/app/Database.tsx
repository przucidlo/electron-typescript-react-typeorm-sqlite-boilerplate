import { hot } from 'react-hot-loader/root';
import React from 'react';
import { remote } from 'electron';
import Database from '../../main/database/Database';

export const Application: React.FC<{}> = () => {
    const database: Database = remote.getGlobal('database');

    console.log(database);

    async function testDatabase() {
        const insert = await database.insert('test', 'test');

        console.log('Insert: ');
        console.table(insert);
        console.log('Fetch: ');
        console.table(await database.fetchAll());
    }

    return (
        <div>
            <button onClick={() => testDatabase()}>test</button>
            Database
        </div>
    );
};

export default hot(Application);
