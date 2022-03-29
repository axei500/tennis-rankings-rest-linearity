export class Player {
  id: number | null;
  name: string;
  country: string;
  age: number;
  points: number;
  tournamentsPlayed: number;

  constructor(id: number, name: string, country: string, age: number, points: number, tournamentsPlayed: number) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.age = age;
    this.points = points;
    this.tournamentsPlayed = tournamentsPlayed;
  }
}
