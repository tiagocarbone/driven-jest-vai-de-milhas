import { AffiliateStatus, ServiceClass } from "protocols";
import { faker } from '@faker-js/faker';


export function createTripMilesTrueFactory() {
    const tripWithMiles = {
        code: faker.string.alphanumeric(6).toUpperCase(),
        origin: { lat: -23.55, long: -46.63 },
        destination: { lat: -22.90, long: -43.17 },
        plane: faker.airline.airplane().name,
        miles: true,
        service: ServiceClass.ECONOMIC,
        date: '2024-06-20',
    }

    return tripWithMiles;
}




export function createTripEconomicBronzeNonBirthday() {
    const trip = {
        code: faker.string.alphanumeric(6).toUpperCase(),
        origin: { lat: -23.55, long: -46.63 },
        destination: { lat: -22.90, long: -43.17 },
        plane: faker.airline.airplane().name,
        miles: false,
        service: ServiceClass.ECONOMIC,
        affiliate: AffiliateStatus.BRONZE,
        date: '2024-06-20',
    }

    return trip;
}



export function createTripEconomicPremium() {
    const trip = {
        code: faker.string.alphanumeric(6).toUpperCase(),
        origin: { lat: -23.55, long: -46.63 },
        destination: { lat: -22.90, long: -43.17 },
        plane: faker.airline.airplane().name,
        miles: false,
        service: ServiceClass.ECONOMIC_PREMIUM,
        affiliate: AffiliateStatus.BRONZE,
        date: '2024-06-20',
    }

    return trip;
}


export function createTripExecutive() {
    const trip = {
        code: faker.string.alphanumeric(6).toUpperCase(),
        origin: { lat: -23.55, long: -46.63 },
        destination: { lat: -22.90, long: -43.17 },
        plane: faker.airline.airplane().name,
        miles: false,
        service: ServiceClass.EXECUTIVE,
        affiliate: AffiliateStatus.BRONZE,
        date: '2024-06-20',
    }

    return trip;
}


export function createTripFirstClass() {
    const trip = {
        code: faker.string.alphanumeric(6).toUpperCase(),
        origin: { lat: -23.55, long: -46.63 },
        destination: { lat: -22.90, long: -43.17 },
        plane: faker.airline.airplane().name,
        miles: false,
        service: ServiceClass.FIRST_CLASS,
        affiliate: AffiliateStatus.BRONZE,
        date: '2024-06-20',
    }

    return trip;
}


export function createTripSilver() {
    const trip = {
        code: faker.string.alphanumeric(6).toUpperCase(),
        origin: { lat: -23.55, long: -46.63 },
        destination: { lat: -22.90, long: -43.17 },
        plane: faker.airline.airplane().name,
        miles: false,
        service: ServiceClass.ECONOMIC,
        affiliate: AffiliateStatus.SILVER,
        date: '2024-06-20',
    }

    return trip;
}


export function createTripGold() {
    const trip = {
        code: faker.string.alphanumeric(6).toUpperCase(),
        origin: { lat: -23.55, long: -46.63 },
        destination: { lat: -22.90, long: -43.17 },
        plane: faker.airline.airplane().name,
        miles: false,
        service: ServiceClass.ECONOMIC,
        affiliate: AffiliateStatus.GOLD,
        date: '2024-06-20',
    }

    return trip;
}


export function createTripPlatinum() {
    const trip = {
        code: faker.string.alphanumeric(6).toUpperCase(),
        origin: { lat: -23.55, long: -46.63 },
        destination: { lat: -22.90, long: -43.17 },
        plane: faker.airline.airplane().name,
        miles: false,
        service: ServiceClass.ECONOMIC,
        affiliate: AffiliateStatus.PLATINUM,
        date: '2024-06-20',
    }

    return trip;
}


export function createTripBirthdayMay() {
    const trip = {
        code: faker.string.alphanumeric(6).toUpperCase(),
        origin: { lat: -23.55, long: -46.63 },
        destination: { lat: -22.90, long: -43.17 },
        plane: faker.airline.airplane().name,
        miles: false,
        service: ServiceClass.ECONOMIC,
        affiliate: AffiliateStatus.BRONZE,
        date: '2024-05-20',
    }

    return trip;
}


export function createTripAllBonuses() {
    const trip = {
        code: faker.string.alphanumeric(6).toUpperCase(),
        origin: { lat: -23.55, long: -46.63 },
        destination: { lat: -22.90, long: -43.17 },
        plane: faker.airline.airplane().name,
        miles: false,
        service: ServiceClass.EXECUTIVE,
        affiliate: AffiliateStatus.GOLD,
        date: '2024-05-20', 
    }

    return trip;
}