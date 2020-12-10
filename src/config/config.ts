import { PoolOptions } from 'mysql2';

const dbOptions: PoolOptions = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'mendozarq',
	connectionLimit: 10000,

};

export default {
	dbOptions
};