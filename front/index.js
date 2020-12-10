(function () {
	getValues();


	function getValues() {

		const table = document.querySelector('#table-oximetro');
		fetch('http://localhost:3000/api/oximetro', {
			method: 'get'
		})
			.then(res => res.json())
			.then(data => {
				let datos = '';
				data.forEach(oxim => {
					datos += `
					<tr>
				 	<td>${oxim.valor1}</td>
				 	<td>${oxim.valor2}</td>
					<td>${oxim.descripcion}</td>
					</tr>	
				`;
				});
				table.innerHTML = `
				<tr>
					<th>valor1</th>
					<th>valor2</th>
					<th>descripcion</th>
				</tr>			
			` + datos;

			})
			.catch(err => console.log(err));
	}

	setInterval(getValues, 1000)

})();