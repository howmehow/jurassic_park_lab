const Park = function(name, ticketPrice, collectionOfDinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs;
}
Park.prototype.totalDinosaurs = function () {
  return this.collectionOfDinosaurs.length;
};
Park.prototype.addDinosaur = function(dinosaur)
{
  this.collectionOfDinosaurs.push(dinosaur);
};
Park.prototype.removeDinosaur = function(){
  this.collectionOfDinosaurs.pop();
};
Park.prototype.mostAttractedPeople = function () {
this.collectionOfDinosaurs.sort((a, b) => (a.guestsAttractedPerDay > b.guestsAttractedPerDay) ? -1 : 1)

return this.collectionOfDinosaurs[0];
}
Park.prototype.findAllDinosaursBySpecies = function () {

}



module.exports = Park;
