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


});