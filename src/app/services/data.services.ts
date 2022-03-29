import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  constructor() { }
  createDb() {
    return {
      tennisPlayers: [
        {
          id: "1",
          name: "Andy Murray",
          country: "United States",
          age: 29,
          points: 11540,
          tournamentsPlayed: 17,
        },
        {
          id: "2",
          name: "Novak Djokovic",
          country: "Serbia",
          age: 29,
          points: 9735,
          tournamentsPlayed: 16,
        },
        {
          id: "3",
          name: "Stan Waarnkas",
          country: "Suisse",
          age: 31,
          points: 5195,
          tournamentsPlayed: 19,
        },
        {
          id: "4",
          name: "Mios Raonic",
          country: "Canada",
          age: 26,
          points: 5080,
          tournamentsPlayed: 20,
        },
        {
          id: "5",
          name: "Kei Nishikon",
          country: "Japan",
          age: 27,
          points: 4730,
          tournamentsPlayed: 20,
        },
      ]
    };
  }
}
