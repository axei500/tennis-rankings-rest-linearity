import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Player } from '../models/player.model';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerUrl = 'api/tennisPlayers/';
  players: Observable<Player[]> = new Subject;
  constructor(private http: HttpClient) { }

  get(): void {
    console.log("get");
    this.players = this.http.get<Player[]>(this.playerUrl)
  }

  getById(id: number): Observable<Player> {
    return this.http.get<Player>(this.playerUrl + id);
  }

  create(player: Player): void {
    player.id = null;
    this.http.post<Player>(this.playerUrl, player).subscribe(() => {
      this.get();
    })
  }

  edit(player: Player): void {
    this.http.put(this.playerUrl + player.id, player).subscribe(() => {
      this.get();
    });
  }

  delete(id: number): void {
    this.http.delete(this.playerUrl + id).subscribe(() => {
      this.get();
    });
  }
}
