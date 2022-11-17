import { EventEmitter, Injectable } from '@angular/core'
import { LogService } from '../shared/log.service';
@Injectable()
export class CursosService{

  emitirCursosCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();

  private cursos: string[] = ['Angular2', 'Java', 'Phonegap'];

  constructor(private logService: LogService){
    console.log('CursosService');
  }

  getCursos(){
    this.logService.consoleLog('Obtendo lista de cursos.')
    return this.cursos;
  }

  addCursos(curso: string){
    this.logService.consoleLog(`Criando um novo curso ${curso}`)
    this.cursos.push(curso);
    this.emitirCursosCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }

}
