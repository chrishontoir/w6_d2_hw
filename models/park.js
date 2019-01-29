const Park = function(name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.dinosaurCount = function() {
  return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function(newDinosaur) {
  this.dinosaurs.push(newDinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur) {
  var index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index,1);
}

Park.prototype.mostPopularDinosaur = function() {
  var mostPopular = ""
  var howPopular = 0
  for (var i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].guestsAttractedPerDay > howPopular) {
      mostPopular = this.dinosaurs[i].species;
      howPopular = this.dinosaurs[i].guestsAttractedPerDay;
    }
  }
  return mostPopular;
}

Park.prototype.findDinosaursOfSpecies = function(species) {
  var searchBySpecies = []
  for (var i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].species === species) {
      searchBySpecies.push(this.dinosaurs[i]);
    }
  }
  return searchBySpecies.length;
}

Park.prototype.removeDinosaursOfSpecies = function(species) {
  for (var i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].species === species) {
      this.dinosaurs.splice(i,1);
    }
  }
}

Park.prototype.totalVisitorsPerDay = function() {
  var totalVisitors = 0;
  for (var i = 0; i < this.dinosaurs.length; i++) {
    totalVisitors += this.dinosaurs[i].guestsAttractedPerDay;
  }
  return totalVisitors;
}

Park.prototype.totalVisitorsPerYear = function() {
  const totalVisitorsDay = this.totalVisitorsPerDay();
  const totalVisitorsYear = (totalVisitorsDay * 365);
  return totalVisitorsYear;
}

Park.prototype.totalRevenuePerYear = function() {
  const totalVisitorsYear = this.totalVisitorsPerYear();
  const totalRevenueYear = totalVisitorsYear * this.ticketPrice;
  return totalRevenueYear;
}

Park.prototype.dietTypes = function() {
  const information = {
    carnivore: 0,
    herbivore: 0,
    omnivore: 0
  };

  for (var i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].diet === 'Carnivore') {
      information.carnivore += 1;
    }
    else if (this.dinosaurs[i].diet === 'Herbivore') {
      information.herbivore += 1;
    }
    else {
      information.omnivore += 1;
    }
  }
  return information;
}

module.exports = Park;
