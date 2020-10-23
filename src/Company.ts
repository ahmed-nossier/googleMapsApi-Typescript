import faker from 'faker';
import { Mapable } from './customap';
export class Company implements Mapable{
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    constructor() {
        this.name = faker.name.firstName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    
    }
    content():string{
    
        return `
       <h4> company name : ${this.name}</h4>
       <h5> ${this.catchPhrase}</h5>

        `
    }
     
}