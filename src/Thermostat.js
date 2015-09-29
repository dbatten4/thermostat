Thermostat = function(){
  this.temp = 20;
  this.powerSave = true;
};

Thermostat.prototype.increase = function(){
  if((this.powerSave == true && this.temp >= 25) || (this.powerSave == false && this.temp >= 32)) {
    throw new Error("Already at maximum temperature");
  };
  this.temp++;
};

Thermostat.prototype.decrease = function(){
  if(this.temp <= 10) {
    throw new Error("Already at minimum temperature");
  };
  this.temp--;
};

Thermostat.prototype.switchPowerSave = function(){
  this.powerSave = !this.powerSave;
};