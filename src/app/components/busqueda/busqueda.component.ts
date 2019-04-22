import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: '../heroes/heroes.component.html',
  styles: ['']
})
export class BusquedaComponent implements OnInit {
  heroes: Heroe [] = [];
  termino: string;
  constructor(private activedRoute: ActivatedRoute,
              private heroesService: HeroesService) {
                this.activedRoute.params.subscribe( params =>{
                  this.termino = params['termino'];
                  this.heroes = this.heroesService.buscarHeroes(this.termino);
                });
               }

  ngOnInit() {
  }

}
