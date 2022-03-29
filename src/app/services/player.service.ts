import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Player } from '../models/player.model';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerUrl = 'api/tennisPlayers/';
  players: Subject<Player[]> = new Subject;
  constructor(private http: HttpClient) { }

  get(): void {
    this.http.get<Player[]>(this.playerUrl).subscribe((palyers: Player[]) => {
      this.players.next(palyers);
    })
  }

  getById(id: number): Observable<Player> {
    return this.http.get<Player>(this.playerUrl + id);
  }

  create(player: Player): void {
    player.id = null;
    this.http.post<Player>(this.playerUrl, player).subscribe((player: Player) => {
      this.get();
    })
  }

  edit(player: Player): void {
    this.http.put(this.playerUrl + player.id, player).subscribe(() => {
      this.get();
    });
  }

  delete(id: number): void {
    this.http.delete(this.playerUrl + id);
  }
}
