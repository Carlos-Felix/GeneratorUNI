import Dictionary from './Diccionario';


const diaToNumber = (dia) => {
	switch(dia){
		case 'LU': return 1;
		case 'MA': return 2;
		case 'MI': return 3;
		case 'JU': return 4;
		case 'VI': return 5;
		case 'SA': return 6;
    default: return 0;
	}
}
const convert = (FILE) => {
	let Hora = []
  let dCursos = new Dictionary(); 
	FILE.forEach(i => {
		i.Secciones.forEach(s => {
			Hora = []
			s.Horas.forEach(e =>{
			
				let prioridad;
				let dia = e.split(' ')[0] //Dia
				if(e.split(' ')[2] != null){
					if(e.split(' ')[2] == 'P'){
						//console.log("Practica")
						prioridad = 2;
					}
					if(e.split(' ')[2] == 'T'){
						//console.log("Teoria")
						prioridad = 1;
					}
				}
				const h = e.split(' ')[1].split('-')

				let li = parseInt(h[0])
				let ls = parseInt(h[1])
			//	console.log(e.split(' ')[0])
				for(let u = li; u < ls; u++){
					//console.log(u)
					Hora.push({"Dia": diaToNumber(dia), "Hora" : u, "Prioridad" : prioridad})
				}
			
		})
		//console.log(i.Secciones[0].Horas)
			s.Horas = Hora
			

	})

  dCursos.set(i.Codigo,i)
    
})
	
	//console.log(dCursos.values())
//  dCursos.keys().forEach(i => {
 //   console.log(i)
 // })
  console.log(FILE)
	return dCursos;
  	
}


export default convert;
//let dias = j.dia.split(' ')[1].split('-')



