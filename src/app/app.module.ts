import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosService } from './cursos/curso.service';
import { CriarCursoModule } from './criar-curso/criar-curso.module';
import { CursosModule } from './cursos/cursos.module';
import { LogService } from './shared/log.service';


@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CriarCursoModule,
    CursosModule

  ],
  providers:[LogService],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
