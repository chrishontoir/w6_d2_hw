const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park = new Park('Jurassic Park', 50, []);
    dinosaur1 = new Dinosaur('T-Rex', 'Carnivore', 50);
    dinosaur2 = new Dinosaur('Velociraptor', 'Carnivore', 100);
    dinosaur3 = new Dinosaur('Triceratops', 'Herbivore', 25);
    dinosaur4 = new Dinosaur('T-Rex', 'Carnivore', 50);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurCount();
    assert.deepStrictEqual(actual, 1);
  });


  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur(dinosaur1);
    const actual = park.dinosaurCount();
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, 'Velociraptor');
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.findDinosaursOfSpecies('T-Rex');
    assert.strictEqual(actual, 2);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.removeDinosaursOfSpecies('T-Rex');
    const actual = park.findDinosaursOfSpecies('T-Rex');
    assert.strictEqual(actual, 0);
  });

  it('should be able to calculate total visitors per day', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.totalVisitorsPerDay();
    assert.strictEqual(actual, 225);
  });

  it('should be able to calculate total visitors per year', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.totalVisitorsPerYear();
    assert.strictEqual(actual, 82125);
  });

  it('should be able to calculate yearly revenue', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.totalRevenuePerYear();
    assert.strictEqual(actual, 4106250);
  });

  it('should be able to count all of the dinosaurs with different diet types', function() {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.dietTypes();
    assert.deepStrictEqual(actual, { 'carnivore': 3, 'herbivore': 1, 'omnivore': 0 });
  })

});
