import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent{
  heroe: Heroe;
  logo: string;
  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe(params['id']);
      if (this.heroe.casa == "Marvel"){
        this.logo = "assets/img/marvel.png";
      }
      else
      {
        this.logo = "assets/img/dc.png";
      }
    });
   }

}
