Thermostat = function(){
  this.temp = 20;
};

Thermostat.prototype.increase = function(){
  this.temp++
};

Thermostat.prototype.decrease = function(){
  this.temp--
};