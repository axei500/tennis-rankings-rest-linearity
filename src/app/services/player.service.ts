import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Player } from '../models/player.model';
@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playerUrl = 'api/tennisPlayers/';
  players: Observable<Player[]> = new Observable();
  constructor(private http: HttpClient) { }

  get(): void {
    this.players = this.http.get<Player[]>(this.playerUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  create(player: Player): void {
    player.id = null;
    this.http.post<Player>(this.playerUrl, player).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  edit(player: Player): void {
    this.http.put(this.playerUrl + player.id, player);
  }

  delete(id: number): void {
    this.http.delete(this.playerUrl + id);
  }
}
