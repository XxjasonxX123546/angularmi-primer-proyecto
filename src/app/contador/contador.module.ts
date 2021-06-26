import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { contadorcomponent } from './contador/contador.component';

@NgModule({
    declarations: [
        contadorcomponent
    ],
    imports: [ 
        CommonModule 
    ],
    exports: [
        contadorcomponent
    ],
    providers: [],
})
export class ContadorModule{

}