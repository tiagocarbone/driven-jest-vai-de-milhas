import * as distanceService from '../../src/services/distances-calculator-service'; 

import { Location } from '../../src/protocols';


describe('calculateDistance', () => {


  const sp: Location = { lat: -23.55, long: -46.63 };
  const rj: Location = { lat: -22.90, long: -43.17 };
  const paris: Location = { lat: 48.85, long: 2.35 };
  const pointZero: Location = { lat: 0, long: 0 };
  const long180: Location = { lat: 0, long: 180 };
  const lat90: Location = { lat: 90, long: 0 }
  const lat90Negative: Location = { lat: -90, long: 0 }


  /* caderninho
  lat90 -> pointZero e talvez lat90 -> {lat: -90, long: 0}


  km : rj -> sp = 361
  km : sp  -> paris = 9042
  km: pointZero ->  long180 = 20015
  km: lat90 -> pointZero = 10008
  km: lat90 -> long180 = 10008
  km:  lat90 -> pointZero = 10008
  km:  lat90 -> lat90Negative = 20015

  milha rj -> sp = 224
  milha sp -> paris = 5842
  milha  pointZero ->  long180 = 12437
  milha lat90 -> pointZero = 6218
  milha lat90 -> long180 = 6218
  milha  lat90 -> pointZero = 6218
  milha  lat90 -> lat90Negative = 12437

  */


  it('should return 0 when coordinates are identical', () => {
    expect(distanceService.calculateDistance(rj, rj)).toBe(0);
    expect(distanceService.calculateDistance(rj, rj, false)).toBe(0); 
    expect(distanceService.calculateDistance(rj, rj, true)).toBe(0);  
  });

  it('should calculate distance in KM ', () => {


    expect(distanceService.calculateDistance(rj, sp)).toBe(361);
  });

  it('should calculate distance in KM when isMiles false ', () => {


    expect(distanceService.calculateDistance(rj, sp, false)).toBe(361);
  });

  it('should calculate distance in Miles when isMiles true', () => {

    expect(distanceService.calculateDistance(rj, sp, true)).toBe(224);
  });

  it('should calculate distance in Miles when isMiles true', () => {

    expect(distanceService.calculateDistance(sp, paris, true)).toBe(5842);
  });


  it('should calculate distance for extreme longitude points in KM', () => {

    expect(distanceService.calculateDistance(pointZero, long180)).toBe(20015); 
    expect(distanceService.calculateDistance(pointZero, long180, false)).toBe(20015); 
  });

  it('should calculate distance for extreme longitude points in Miles', () => {

    expect(distanceService.calculateDistance(pointZero, long180, true)).toBe(12437); 
  });

  it('should calculate distance for extreme latitude points in km', () => {

    expect(distanceService.calculateDistance(lat90, long180)).toBe(10008); 
  });

  it('should calculate distance for extreme latitude points in km', () => {

    expect(distanceService.calculateDistance(lat90, lat90Negative)).toBe(20015); 
  });


  it('should calculate distance for extreme latitude points in Miles', () => {

    expect(distanceService.calculateDistance(lat90, long180, true)).toBe(6218); 
  });

  it('should calculate distance for extreme latitude points in Miles', () => {

     expect(distanceService.calculateDistance(lat90, lat90Negative, true)).toBe(12437); 
  });


  it('should calculate distance for sp to lat90 in km', () => {

    expect(distanceService.calculateDistance(sp, lat90)).toBe(12626); 
  });

  it('should calculate distance for sp to lat90  Miles', () => {

     expect(distanceService.calculateDistance(sp, lat90, true)).toBe(7846); 
  });


}); 