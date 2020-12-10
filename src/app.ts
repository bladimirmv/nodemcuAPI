import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
// Routes
import IndexRoutes from './routes/index.routes';
import OximetroRoutes from './routes/oximetro.routes';




// import bodyParser 'body-parser';

export class App {
	private app: Application;

	constructor(private port?: number | string) {
		this.app = express();


		this.settings();
		this.middlewares();
		this.routes();
	}
	// settings
	private settings(): void {
		this.app.set('port', this.port || process.env.PORT || 3000);
	}
	// middlewares
	middlewares(): void {
		this.app.use(morgan('dev'));
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: false }));
		this.app.use(passport.initialize());


	}
	// routes
	routes(): void {
		this.app.use(IndexRoutes);
		this.app.use('/api/oximetro', OximetroRoutes);
	}
	// listen on port
	async listen() {


		try {
			await this.app.listen(this.app.get('port'));

		} catch (error) {
			console.log(error);

		}

		// let server = require('http').Server(this.app);
		// const io = require('socket.io')(server);
		// io.on('connection', function (socket: any) {
		// 	console.log("a user connected id: ", socket);

		// });

		// server.listen(this.port || process.env.PORT || 3000, () => {
		// 	console.log("listening socket.io on *:3000");
		// });



	}
}