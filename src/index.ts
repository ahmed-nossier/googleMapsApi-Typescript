import { Car } from './car';
import { CustoMap } from './customap';
import { Company } from './Company';
import { User } from './User';


const user = new User();
const company = new Company();
const car = new Car();

const customap = new CustoMap('map');
console.log(customap);

customap.addMarker(user);
customap.addMarker(company);
customap.addMarker(car);