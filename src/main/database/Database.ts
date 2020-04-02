import { createConnection, Connection } from 'typeorm';
import path from 'path';
import { defaultStorageFolder } from '..';
import Patient from './models/Patient';

export default class Database {
    private connection: Connection;

    constructor() {
        this.init();
    }

    public async init(): Promise<void> {
        this.connection = await createConnection({
            type: 'sqlite',
            database: path.join(defaultStorageFolder, 'doc_app.sqlite'),
            entities: [Patient],
        });

        if (this.connection.isConnected) {
            this.connection.synchronize();
        }
    }

    public async insert(name: string, surname: string): Promise<Patient> {
        const patientRepository = this.connection.getRepository(Patient);
        const patient: Patient = { name: name, surname: surname };

        return patientRepository.save(patient);
    }

    public async fetchAll(): Promise<Patient[]> {
        const patientRepository = this.connection.getRepository(Patient);

        return patientRepository.find();
    }
}
