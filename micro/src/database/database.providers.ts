import { DATABASE_CONNECTION } from 'src/common/constants';
import { ConfigService } from '@nestjs/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: (configService: ConfigService): PostgresConnectionOptions => {
      return {
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: parseInt(configService.get('POSTGRES_PORT')),
        username: configService.get('POSTGRES_USERNAME'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DATABASE'),
        uuidExtension: 'uuid-ossp', // for using `uuid` as the type for Primary-Column `id` column
        synchronize: configService.get('NODE_ENV') !== 'prod',
      };
    },
    inject: [ConfigService],
  },
];
