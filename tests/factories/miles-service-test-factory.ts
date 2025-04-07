import { AffiliateStatus, ServiceClass, Trip } from "protocols";

export function createTripFactory(){
 const trip =    { 
          code: 'TRIP001',
          origin: { lat:  -23.55, long: -46.63 },
          destination: { lat: -22.90, long: -43.17 },
          miles: false,
          plane: 'A320',
          service: ServiceClass.ECONOMIC,
          affiliate: AffiliateStatus.SILVER,
          date: '2024-01-10',
         };

    return trip;
}

export function createMilesFactory(sampleTrip: Trip, calculatedMilesValue: number){
    const miles = {
        id: 1, 
        code: sampleTrip.code,
        miles: calculatedMilesValue
    }

    return miles;
}


export function createMilesFromCodeFactory(code : string){
    const miles = {
        id: 1, 
        code: code,
        miles: 1500
    }

    return miles;
}