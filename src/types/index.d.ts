export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: [Episode];
  created?: string;
}

export interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [Character];
  created?: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: [Character];
  created?: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface NavItem {
  title: string;
  href: string;
}
