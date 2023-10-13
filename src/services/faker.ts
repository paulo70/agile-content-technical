// import * as faker from 'faker';
import {faker} from '@faker-js/faker';

// @ts-ignore
const getImage = () => faker.image.animals(644, 362, true);
// @ts-ignore
const getType = () => faker.animal.type();
// @ts-ignore
const getUrl = () => faker.internet.url();
// @ts-ignore
const getText = () => faker.lorem.sentences();
// @ts-ignore
const getTitle = (type: string) => faker.animal[type]();
// @ts-ignore

const data = [...new Array(100)].map((item, index) => {
  const type = getType();
  return {
    type,
    id: index + 1,
    url: getUrl(),
    title: getTitle(type),
    description: getText(),
    image: getImage(),
  };
});

export default data;
