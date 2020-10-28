import { CC } from './cc';
import { CH } from './ch';
import { IF } from './ingFisica';
import { MT } from './matematica';
import convert from '../resources/javas';


const cArray = [
  CC,
  CH,
  IF,
  MT
];

const ARRAYCURSOS = [].concat(...cArray);

export const CURSOS =  convert(ARRAYCURSOS)
