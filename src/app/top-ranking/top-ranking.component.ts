import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';

@Component({
  selector: 'app-top-ranking',
  templateUrl: './top-ranking.component.html',
  styleUrls: ['./top-ranking.component.css']
})
export class TopRankingComponent implements OnInit {

  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.playerService.players.subscribe((players: Player[]) => {
      this.players = players;
      console.log(players);
    })
  }

}
