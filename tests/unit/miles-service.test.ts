import * as milesService from '../../src/services/miles-service'; // <- Seu arquivo final de serviço
import * as milesRepository from '../../src/repositories/miles-repository'; // <- Seu arquivo de repositório
import * as milesCalculatorService from '../../src/services/miles-calculator-service'; // <- Serviço de cálculo


import { Trip, Miles, ServiceClass, AffiliateStatus, Location } from '../../src/protocols'; 
import { createMilesFactory, createMilesFromCodeFactory, createTripFactory } from '../factories/miles-service-test-factory';




afterEach(() => {
  jest.restoreAllMocks();
});


describe('generateMilesForTrip', () => {
  const sampleTrip: Trip = createTripFactory();
  const calculatedMilesValue = 1500;

  it('should calculate, save, and return miles when they do not exist', async () => {

    jest.spyOn(milesRepository, 'findMiles').mockResolvedValue(null);
    /*const calculateMilesSpy = */jest.spyOn(milesCalculatorService, 'calculateMiles').mockReturnValue(calculatedMilesValue);
    jest.spyOn(milesRepository, 'saveMiles').mockResolvedValue(createMilesFactory(sampleTrip, calculatedMilesValue));

    const result = await milesService.generateMilesForTrip(sampleTrip);

    expect(result).toBe(calculatedMilesValue);
    expect(milesRepository.findMiles).toHaveBeenCalledTimes(1);
    expect(milesCalculatorService.calculateMiles).toHaveBeenCalledTimes(1);
    expect(milesRepository.saveMiles).toHaveBeenCalledTimes(1);
    expect(milesRepository.saveMiles).toHaveBeenCalledWith(sampleTrip.code, calculatedMilesValue);
  });

  it('should throw conflict error if miles already exist for the trip code', async () => {

    const existingMilesData = createMilesFactory(sampleTrip, calculatedMilesValue);
    jest.spyOn(milesRepository, 'findMiles').mockResolvedValue(existingMilesData); 
    jest.spyOn(milesCalculatorService, 'calculateMiles');
    jest.spyOn(milesRepository, 'saveMiles');


    await expect(milesService.generateMilesForTrip(sampleTrip))
      .rejects.toMatchObject({
        type: "conflict",
        message: `Miles already registered for code ${sampleTrip.code}`
      });

    expect(milesRepository.findMiles).toHaveBeenCalledTimes(1);
    expect(milesCalculatorService.calculateMiles).not.toHaveBeenCalled();
    expect(milesRepository.saveMiles).not.toHaveBeenCalled();
  });
}); 

describe('getMilesFromCode', () => {
  const code = 'TRIP002';
 

  const foundMilesData = createMilesFromCodeFactory(code);

  it('should return miles when found by code', async () => {

    const findMilesSpy = jest.spyOn(milesRepository, 'findMiles').mockResolvedValue(foundMilesData);

    const result = await milesService.getMilesFromCode(code);

    expect(result).toEqual(foundMilesData); 
    expect(findMilesSpy).toHaveBeenCalledTimes(1);
    expect(findMilesSpy).toHaveBeenCalledWith(code);
  });

  it('should throw not_found error if miles are not found for the code', async () => {

    jest.spyOn(milesRepository, 'findMiles').mockResolvedValue(null);

    await expect(milesService.getMilesFromCode(code))
      .rejects.toMatchObject({
        type: "not_found",
        message: `Miles not found for code ${code}`
      });

    expect(milesRepository.findMiles).toHaveBeenCalledTimes(1);
  });
});

