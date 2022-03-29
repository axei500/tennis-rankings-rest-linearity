import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-top-ranking',
  templateUrl: './top-ranking.component.html',
  styleUrls: ['./top-ranking.component.css']
})
export class TopRankingComponent implements OnInit {

  players: Player[] = [];
  topThree: Player[] = [];
  myControl = new FormControl();
  filteredOptions: Observable<Player[]> = new Observable();

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.players.subscribe((players: Player[]) => {
      this.players = players;
      this.topThree = players;
      console.log(players);
      this.topThree.sort(function (a, b) {
        if (a.points < b.points) return 1;
        if (a.points > b.points) return -1;
        return 0;
      });
      this.topThree = this.topThree.slice(0, 3)
    })

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => (typeof value === 'string' ? value : value.name)),
      map(name => (name ? this._filter(name) : this.players.slice())),
    );
  }
  private _filter(name: string): Player[] {
    const filterValue = name.toLowerCase();

    return this.players.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
