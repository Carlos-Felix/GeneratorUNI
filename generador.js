//var Horario = horario.Horario;
var h = new Horario();

function GeneradorHorarios(Cursos){
    var arr = [];
    var nc = Cursos.length;
    var nombres = [];
    for(var n in Cursos){
        nombres.push(Cursos[n].Nombre);
    }
    if(nc == 1){
        for(var sec1 in Cursos[0].Secciones){
            arr.push(h.detect([Cursos[0].Secciones[sec1]],nombres));
        }
    }else{
        if(nc == 2){
            for(var sec1 in Cursos[0].Secciones){
                for(var sec2 in Cursos[1].Secciones){
                    arr.push(h.detect([Cursos[0].Secciones[sec1],Cursos[1].Secciones[sec2]],nombres));
                }
            }
        }else{
            if(nc == 3){
                for(var sec1 in Cursos[0].Secciones){
                    for(var sec2 in Cursos[1].Secciones){
                        for(var sec3 in Cursos[2].Secciones){
                            arr.push(h.detect([Cursos[0].Secciones[sec1],Cursos[1].Secciones[sec2],Cursos[2].Secciones[sec3]],nombres));
                        }

                    }
                }
            }else if(nc == 4){
                for(var sec1 in Cursos[0].Secciones){
                    for(var sec2 in Cursos[1].Secciones){
                        for(var sec3 in Cursos[2].Secciones){
                            for(var sec4 in Cursos[3].Secciones){
                                arr.push(h.detect([Cursos[0].Secciones[sec1],Cursos[1].Secciones[sec2],Cursos[2].Secciones[sec3],Cursos[3].Secciones[sec4]],nombres));
                            }
                        }

                    }
                }
            }else if(nc == 5){
                for(var sec1 in Cursos[0].Secciones){
                    for(var sec2 in Cursos[1].Secciones){
                        for(var sec3 in Cursos[2].Secciones){
                            for(var sec4 in Cursos[3].Secciones){
                                for(var sec5 in Cursos[4].Secciones){
                                    arr.push(h.detect([Cursos[0].Secciones[sec1],Cursos[1].Secciones[sec2],Cursos[2].Secciones[sec3],Cursos[3].Secciones[sec4],Cursos[4].Secciones[sec5]],nombres));
                                }
                                
                            }
                        }

                    }
                }
            }else if(nc == 6){
                for(var sec1 in Cursos[0].Secciones){
                    for(var sec2 in Cursos[1].Secciones){
                        for(var sec3 in Cursos[2].Secciones){
                            for(var sec4 in Cursos[3].Secciones){
                                for(var sec5 in Cursos[4].Secciones){
                                    for(var sec6 in Cursos[5].Secciones){
                                        arr.push(h.detect([Cursos[0].Secciones[sec1],Cursos[1].Secciones[sec2],Cursos[2].Secciones[sec3],Cursos[3].Secciones[sec4],Cursos[4].Secciones[sec5],Cursos[5].Secciones[sec6]],nombres));
                                    }
                                    
                                }
                                
                            }
                        }

                    }
                }
            }else if(nc == 7){
                for(var sec1 in Cursos[0].Secciones){
                    for(var sec2 in Cursos[1].Secciones){
                        for(var sec3 in Cursos[2].Secciones){
                            for(var sec4 in Cursos[3].Secciones){
                                for(var sec5 in Cursos[4].Secciones){
                                    for(var sec6 in Cursos[5].Secciones){
                                        for(var sec7 in Cursos[6].Secciones){
                                            arr.push(h.detect([Cursos[0].Secciones[sec1],Cursos[1].Secciones[sec2],Cursos[2].Secciones[sec3],Cursos[3].Secciones[sec4],Cursos[4].Secciones[sec5],Cursos[5].Secciones[sec6],Cursos[6].Secciones[sec7]],nombres));
                                        }
                                    }
                                    
                                }
                                
                            }
                        }

                    }
                }
            }else if(nc == 8){
                for(var sec1 in Cursos[0].Secciones){
                    for(var sec2 in Cursos[1].Secciones){
                        for(var sec3 in Cursos[2].Secciones){
                            for(var sec4 in Cursos[3].Secciones){
                                for(var sec5 in Cursos[4].Secciones){
                                    for(var sec6 in Cursos[5].Secciones){
                                        for(var sec7 in Cursos[6].Secciones){
                                            for(var sec8 in Cursos[7].Secciones){
                                                arr.push(h.detect([Cursos[0].Secciones[sec1],Cursos[1].Secciones[sec2],Cursos[2].Secciones[sec3],Cursos[3].Secciones[sec4],Cursos[4].Secciones[sec5],Cursos[5].Secciones[sec6],Cursos[6].Secciones[sec7],Cursos[7].Secciones[sec8]],nombres));
                                            }
                                            
                                        }
                                    }
                                    
                                }
                                
                            }
                        }

                    }
                }
            }
        }
    }
    return arr;
}