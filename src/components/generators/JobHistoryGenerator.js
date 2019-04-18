import faker from 'faker';

export default class JobHistoryGenerator {
    constructor() {}

    generate(titleId, deptId) {
        return {
            title: titleId,
            department: deptId,
            pay: faker.random.number().toLocaleString(),
        }
    }
}