import * as milesCalculatorService from '../../src/services/miles-calculator-service';
import * as distanceCalculator from '../../src/services/distances-calculator-service';


import {  createTripAllBonuses, createTripBirthdayMay, createTripEconomicBronzeNonBirthday, createTripEconomicPremium, createTripExecutive, createTripFirstClass, createTripGold, createTripMilesTrueFactory, createTripPlatinum, createTripSilver} from '../factories/miles-calculator-service-factory';

afterEach(() => {
    jest.clearAllMocks();
  });



describe('calculateMiles ', () => {

  it('should return 0 when usingMiles is true', () => {
    
    const spy = jest.spyOn(distanceCalculator, 'calculateDistance');

    const tripWithMiles = createTripMilesTrueFactory();
    const miles = milesCalculatorService.calculateMiles(tripWithMiles);

    expect(miles).toBe(0);
    expect(spy).not.toHaveBeenCalled(); 
  });

  it('should calculate miles for ECONOMIC, BRONZE, non-birthday month', () => {

    const spy = jest.spyOn(distanceCalculator, 'calculateDistance').mockReturnValue(361);

    const trip = createTripEconomicBronzeNonBirthday();
    const miles = milesCalculatorService.calculateMiles(trip);

    expect(miles).toBe(361);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(trip.origin, trip.destination);
  });


  it('should calculate miles with ECONOMIC_PREMIUM multiplier', () => {

    const spy = jest.spyOn(distanceCalculator, 'calculateDistance').mockReturnValue(361);
    const trip = createTripEconomicPremium();

    const miles = milesCalculatorService.calculateMiles(trip);

    expect(miles).toBe(451);
    expect(spy).toHaveBeenCalledTimes(1);
  });


  it('should calculate miles with EXECUTIVE multiplier', () => {

    const spy = jest.spyOn(distanceCalculator, 'calculateDistance').mockReturnValue(361);
    const trip = createTripExecutive();

    const miles = milesCalculatorService.calculateMiles(trip);

    expect(miles).toBe(542);
    expect(spy).toHaveBeenCalledTimes(1);
  });


  it('should calculate miles with FIRST_CLASS multiplier', () => {

    const spy = jest.spyOn(distanceCalculator, 'calculateDistance').mockReturnValue(361);
    const trip = createTripFirstClass();

    const miles = milesCalculatorService.calculateMiles(trip);

    expect(miles).toBe(722);
    expect(spy).toHaveBeenCalledTimes(1);
  });


  it('should calculate miles with SILVER bonus', () => {

    const spy = jest.spyOn(distanceCalculator, 'calculateDistance').mockReturnValue(361);
    const trip = createTripSilver();

    const miles = milesCalculatorService.calculateMiles(trip);

    expect(miles).toBe(397);
    expect(spy).toHaveBeenCalledTimes(1);
  });


  it('should calculate miles with GOLD bonus', () => {

    const spy = jest.spyOn(distanceCalculator, 'calculateDistance').mockReturnValue(361);
    const trip =  createTripGold();

    const miles = milesCalculatorService.calculateMiles(trip);

    expect(miles).toBe(451);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should calculate miles with PLATINUM bonus', () => {

    const spy = jest.spyOn(distanceCalculator, 'calculateDistance').mockReturnValue(361);
    const trip = createTripPlatinum();

    const miles = milesCalculatorService.calculateMiles(trip);

    expect(miles).toBe(542);
    expect(spy).toHaveBeenCalledTimes(1);
  });


  it('should calculate miles birthday bonus', () => {

    const spy = jest.spyOn(distanceCalculator, 'calculateDistance').mockReturnValue(361);
    const trip = createTripBirthdayMay();


    const miles = milesCalculatorService.calculateMiles(trip);

    // Assert
    expect(miles).toBe(397);
    expect(spy).toHaveBeenCalledTimes(1);
  });


  it('should calculate miles with all bonuses (Executive, Gold, Birthday)', () => {

    const spy = jest.spyOn(distanceCalculator, 'calculateDistance').mockReturnValue(361);
    const trip = createTripAllBonuses();

    const miles = milesCalculatorService.calculateMiles(trip);

    expect(miles).toBe(745);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});