import { Response, Request } from 'express';
import { Pool } from 'mysql2/promise';
import { connect } from './../database';


export async function addOximetro(req: Request, res: Response) {

	console.log(req.body);
	// return res.send(req.body.valor1);
	try {
		const conn: Pool = await connect();
		let oximetro = req.body;
		await conn.query('INSERT INTO oximetro SET ?', [oximetro]);
		conn.end();
		return res.status(201).send(oximetro);
	}
	catch (error) {
		return res.status(400).json({
			message: 'Ocurrio un error.',
			error
		});
	}
}

// ===================================================================================================
export async function getOximetro(req: Request, res: Response) {

	// return res.send('hola desde el serrvidor');
	try {
		const conn: Pool = await connect();
		const data: any = await conn.query('select * from oximetro');
		conn.end();
		return res.send(data[0]);
	} catch (error) {
		return res.status(400).json({
			message: 'Ocurrio un error.',
			error
		});
	}
}

