export interface Classes {
  [K: string]: boolean;
}

export interface UserDto {
  // TODO: introduce Moment.js here
  createdOn: string;
  email: string;
  name: string;
  totalCalories: number;
}

// * Need to create a standings table in backend and everytime new calories are
// * added, I should update the standings table
