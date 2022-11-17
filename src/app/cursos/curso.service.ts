import { EventEmitter, Injectable } from '@angular/core'
@Injectable()
export class CursosService{

  emitirCursosCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular2', 'Java', 'Phonegap'];

  constructor(){
    console.log('CursosService');
  }

  getCursos(){
    return this.cursos;
  }

  addCursos(curso: string){
    this.cursos.push(curso);
    this.emitirCursosCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
