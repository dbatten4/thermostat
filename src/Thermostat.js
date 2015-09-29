Thermostat = function(){
  this.temp = 20;
  this.powerSave = true;
  this.displayColour = 'yellow';
};

Thermostat.prototype.increase = function(){
  if((this.powerSave == true && this.temp >= 25) || (this.powerSave == false && this.temp >= 32)) {
    throw new Error("Already at maximum temperature");
  };
  this.temp++;
  this._changeDisplayColour();
  // if(this.temp >=25){
  //   this.displayColour = 'red';
  // } else if (this.temp>=18) {
  //   this.displayColour = 'yellow';
  // };

};

Thermostat.prototype.decrease = function(){
  if(this.temp <= 10) {
    throw new Error("Already at minimum temperature");
  };
  this.temp--;
  this._changeDisplayColour();
  // if(this.temp <18){
  //   this.displayColour = 'green';
  // } else if (this.temp <25){
  //   this.displayColour = 'yellow';
  // };
};

Thermostat.prototype._changeDisplayColour = function(){
  if (this.temp<18) {
    this.displayColour = 'green';
  } else if (this.temp>=18 && this.temp<25){
    this.displayColour = 'yellow';
  } else {
    this.displayColour = 'red';
  };
};

Thermostat.prototype.switchPowerSave = function(){
  if (this.powerSave == false && this.temp > 25) {
    this.temp = 25;
  };
  this.powerSave = !this.powerSave;
};

Thermostat.prototype.resetTemp = function(){
  this.temp = 20;
};