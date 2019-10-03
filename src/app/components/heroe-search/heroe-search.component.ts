import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../serivicios/heroe.service';

@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html'
})
export class HeroeSearchComponent implements OnInit {

    heroes: any[] = [];
    termino: string;

  constructor(private activatedRoute: ActivatedRoute, private heroeService: HeroesService) {
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
        this.termino = params['termino'];
        this.heroes = this.heroeService.buscarHeroes( params['termino']);
        console.log(this.heroes);
    });
  }

}
