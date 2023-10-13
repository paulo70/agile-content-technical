declare module 'faker' {
  interface FakerAPI {
    image: {
      animals(width: number, height: number, randomize: boolean): string;
    };
    animal: {
      type(): string;
      [key: string]: () => string;
    };
    internet: {
      url(): string;
    };
    lorem: {
      sentences(): string;
    };
  }

  const faker: FakerAPI;

  export = faker;
}
