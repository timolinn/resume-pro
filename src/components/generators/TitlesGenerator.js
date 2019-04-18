import faker from 'faker';

export default class TitlesGenerator {
    constructor() {
        this.levels = ['junior', 'senior', 'mid-level'];
    }

    getRandomLevel() {
        return this.levels[Math.floor(Math.random() * 10)] || 'junior';
    }

    generate() {
        return {
            title: faker.name.title(),
            level: this.getRandomLevel(),
            job_description: faker.name.jobDescriptor(),
            low_pay: faker.random.number().toLocaleString(),
            high_pay: faker.random.number().toLocaleString()
        }
    }
}