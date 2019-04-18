import faker from 'faker';
import mongoose from 'mongoose';

export default class EmployeeGenerator {
    generate() {
        return {
            first_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            middle_initial: this.randomChar(),
            address: faker.address.streetAddress(),
            sex: 'M',
            region: faker.address.county(),
            postal_code: faker.address.zipCode(),
            office_phone: faker.phone.phoneNumber(),
            office_location: faker.address.state(),
            manager_id: mongoose.Types.ObjectId(),
            vacation_hours: faker.random.number(),
            sick_leave_hours: faker.random.number()
        }
    }

    randomChar() {
        return faker.random.word().split('')[0].toLocaleUpperCase();
    }
}