import faker from 'faker';

export default class DepartmentGenerator {
    constructor() {}

    generate(manId) {
        return {
            name: faker.commerce.department(),
            manager: manId
        }
    }
}