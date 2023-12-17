import { AfterViewInit, Component } from '@angular/core';

declare var $: any; // Declaración de jQuery

@Component({
  selector: 'app-nossos-servicos',
  templateUrl: './nossos-servicos.component.html',
  styleUrls: ['./nossos-servicos.component.css']
})
export class NossosServicosComponent implements AfterViewInit{

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
