// Describe the paths in a single data type so that it is easier to change
interface PathDescriptor {
  name: string,
  path: string,
  isActive: boolean,
}

let navPaths: Array<PathDescriptor> = [
  {"name" : "Home", "path": "/", "isActive": true},
  {"name" : "Occasions", "path": "/", "isActive": false},
  {"name" : "Vacations", "path": "/", "isActive": false},
  {"name" : "Birthdays", "path": "/", "isActive": false},
  {"name" : "Vacations", "path": "/", "isActive": false},
];

export { navPaths }
