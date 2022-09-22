import { faker } from '@faker-js/faker';
export type Person = {
  id: string;
  title: string;
  price: number;
  people: number;
  startDate: Date;
  endDate: Date;
  period: number;
  status: '신청대기' | '예약완료' | '신청취소';
  subRows?: Person[];
};

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Person => {
  return {
    id: faker.datatype.uuid(),
    title: faker.name.fullName(),
    price: faker.datatype.number(1000000),
    people: faker.datatype.number({ min: 1, max: 10 }),
    startDate: faker.datatype.datetime({ min: 1577836800000, max: 1893456000000 }),
    period: faker.datatype.number({ min: 1, max: 20 }),
    endDate: faker.datatype.datetime({ min: 1577836800000, max: 1893456000000 }),
    status: faker.helpers.shuffle<Person['status']>(['신청대기', '예약완료', '신청취소'])[0]!,
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map((): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };
  return makeDataLevel();
}

const data = makeData(100);

export async function fetchData(options: { pageIndex: number; pageSize: number }) {
  await new Promise((r) => setTimeout(r, 300));
  return {
    rows: data.slice(
      options.pageIndex * options.pageSize,
      (options.pageIndex + 1) * options.pageSize,
    ),
    pageCount: Math.ceil(data.length / options.pageSize),
  };
}
