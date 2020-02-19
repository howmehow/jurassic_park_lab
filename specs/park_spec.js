const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur;
  let dinosaur1;
  let dinosaur2;
  beforeEach(function () {
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur1 = new Dinosaur('Stegosaurus', 'herbivore', 30);
    dinosaur2 = new Dinosaur('Pinacosaurus', 'omnivore', 20);
    park = new Park('Jurrasic Park', 300, [dinosaur, dinosaur1, dinosaur2]);
  })

  it('should have a name',function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurrasic Park');
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 300);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.totalDinosaurs();
    assert.strictEqual(actual, 3);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.totalDinosaurs();
    assert.strictEqual(actual, 4);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur();
    const actual = park.totalDinosaurs();
    assert.strictEqual(actual, 2);
    });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = park.mostAttractedPeople();
    assert.strictEqual(actual, dinosaur)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.findAllDinosaursOf

  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
