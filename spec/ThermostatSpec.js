describe ('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });

  it ('increases the temp', function(){
    thermostat.increase();
    expect(thermostat.temp).toEqual(21);
  });

  it ('decreases the temp', function(){
    thermostat.decrease();
    expect(thermostat.temp).toEqual(19);
  });

  it ("should have minimum temperature of 10 degrees", function(){
    for(var i=0; i<10; i++){
      thermostat.decrease();
    };
    expect(function() { thermostat.decrease(); }).toThrowError("Already at minimum temperature");
  });

  it ("should have power saving mode on by default", function(){
    expect(thermostat.powerSave).toBe(true);
  });

  it ("should have max temp of 25 degrees if power saving mode is on", function(){
    for(var i=0; i<5; i++){
      thermostat.increase();
    };
    expect(function() { thermostat.increase(); }).toThrowError("Already at maximum temperature");
  });

  it ("can turn off power saving mode", function(){
    thermostat.switchPowerSave();
    expect(thermostat.powerSave).toBe(false);
  });

  it ("can turn on power saving mode", function(){
    thermostat.switchPowerSave();
    thermostat.switchPowerSave();
    expect(thermostat.powerSave).toBe(true);
  });

  it ("should have max temp of 32 degrees if power saving mode is off", function(){
    thermostat.switchPowerSave();
    for(var i=0; i<12; i++){
      thermostat.increase();
    };
    console.log(thermostat.temp);
    console.log(thermostat.powerSave);
    expect(function() { thermostat.increase(); }).toThrowError("Already at maximum temperature");
  });


});