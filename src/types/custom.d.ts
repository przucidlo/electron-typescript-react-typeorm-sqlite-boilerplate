import Database from '../main/database/Database';

declare global {
    namespace NodeJS {
        interface Global {
            database: Database;
        }
    }
}
