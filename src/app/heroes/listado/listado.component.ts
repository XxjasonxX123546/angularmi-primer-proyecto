import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ["ironman","thor","loki"];
  heroeborrado: string ='';
  borrarHeroe() {
    this.heroeborrado=this.heroes.shift()||'';
  }

}