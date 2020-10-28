import {QUIMICA} from '../shared/quimica';

const fs = require('browserify-fs');

const diaToNumber = (dia) => {
	switch(dia){
		case 'LU': return 1;
		break;
		case 'MA': return 2;
		break;
		case 'MI': return 3;
		break;
		case 'JU': return 4;
		break;
		case 'VI': return 5;
		break;
		case 'SA': return 6;
		break;
	}
}
const convert = () => {
	let Hora = []
	QUIMICA.forEach(i => {
		i.Secciones.forEach(s => {
			Hora = []
			s.Horas.forEach(e =>{
			
				let prioridad;
				let dia = e.split(' ')[0] //Dia
				if(e.split(' ')[2] != null){
					if(e.split(' ')[2] == 'P'){
						console.log("Practica")
						prioridad = 2;
					}
					if(e.split(' ')[2] == 'T'){
						console.log("Teoria")
						prioridad = 1;
					}
				}
				const h = e.split(' ')[1].split('-')

				let li = parseInt(h[0])
				let ls = parseInt(h[1])
				console.log(e.split(' ')[0])
				for(let u = li; u < ls; u++){
					console.log(u)
					Hora.push({"Dia": diaToNumber(dia), "Hora" : u, "Prioridad" : prioridad})
				}
			
		})
		//console.log(i.Secciones[0].Horas)
			s.Horas = Hora
			

	})
})
	let json = JSON.stringify(QUIMICA);
	
	fs.mkdir('/home', function() {
	fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function() {
		
	});
});
	return QUIMICA;
	
}


export default convert;
//let dias = j.dia.split(' ')[1].split('-')



