import { AfterViewInit, Component } from '@angular/core';

declare var $: any; // Declaración de jQuery
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements AfterViewInit{

  ngAfterViewInit() {
    this.initScripts();
  }
  

  initScripts() {
    "use strict";

    
    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 100);
    };
    spinner();

}


}


