import { DataSource} from "typeorm";
import { POSTGRES_HOST, POSTGRES_PORT, POSTGRES_USER, POSTGRES_DATABASE, POSTGRES_PASSWORD } from './config';

function createDataSource() {
    return new DataSource({
        type: "postgres",
        host: POSTGRES_HOST,
        port: POSTGRES_PORT,
        database: POSTGRES_DATABASE,
        username: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        entities: ["src/entity/**/*.ts"],
    });
}

const AppDataSource = createDataSource();

export async function initDatabase() {
    await AppDataSource.initialize();
    return AppDataSource;
};