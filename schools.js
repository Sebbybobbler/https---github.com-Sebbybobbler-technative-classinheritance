class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }
  set numberOfStudents(number) {
    if (typeOf(number) != "Number") {
      console.log("Invalid input: numberOfStudents must be set to a Number.");
    } else {
      this._numberOfStudents = number;
    }
  }
  quickFacts() {
    return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`;
  }
  static pickSubstituteTeacher(substituteTeachers) {
    return substituteTeachers[
      Math.floor(Math.random() * substituteTeachers.length)
    ];
  }
}

class Primary extends School {
  constructor(name, level, numberOfStudents, pickupPolicy) {
    super(name, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

class Middle extends School {
  constructor(name, level, numberOfStudents) {
    super(name, level, numberOfStudents);
  }
}

class High extends School {
  constructor(name, level, numberOfStudents, sportsTeams) {
    super(name, level, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }
  get sportsTeams() {
    return this._sportsTeams;
  }
}

const lorraineHansbury = new Primary(
  "Lorraine Hansbury",
  "primary",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);
console.log(lorraineHansbury.quickFacts());
console.log(
  School.pickSubstituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ])
);

const alSmith = new High("Al E. Smith", "high", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);
console.log(alSmith.sportsTeams);
