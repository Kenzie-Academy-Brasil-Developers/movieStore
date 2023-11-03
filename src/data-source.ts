import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";

const dataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}")
    const migrationsPath: string = path.join(__dirname, "./migrations/**.{ts,js}")

    const dbUrl: string | undefined = process.env.DATABASE_URL
    const nodeEnv: string | undefined = process.env.NODE_ENV
    
    if(nodeEnv === "test") {
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [ entitiesPath ],
        }
    }

    if(!dbUrl) throw new Error("Missing env var: DATABASE_ULR")
    
    return {
        type: "postgres",
        url: dbUrl,
        logging: true,
        entities: [ entitiesPath ],
        migrations: [ migrationsPath ],
    }
}

export const AppDataSource = new DataSource(dataSourceConfig())