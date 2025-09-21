import { faker } from '@faker-js/faker';

export const getFakerData = {
  organizationName: () => faker.company.name(),
};