import { faker } from '@faker-js/faker';

export interface ReservationData {
  readonly id: string;
  title: string;
  price: string;
  people: string;
  startDate: string;
  endDate: string;
  period: string;
  status: '신청대기' | '예약완료' | '신청취소';
  subRows?: ReservationData[];
}

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newReservationData = (): ReservationData => {
  return {
    id: faker.datatype.uuid(),
    title: faker.name.fullName(),
    price: faker.datatype
      .number(1000000)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      .concat('원'),
    people: faker.datatype.number({ min: 1, max: 10 }).toString().concat('명'),
    startDate: faker.date
      .between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z')
      .toISOString()
      .slice(0, -14),
    period: faker.datatype.number({ min: 1, max: 20 }).toString().concat('일'),
    endDate: faker.date
      .between('2020-01-01T00:00:00.000Z', '2030-01-01T00:00:00.000Z')
      .toISOString()
      .slice(0, -14),
    status: faker.helpers.shuffle<ReservationData['status']>([
      '신청대기',
      '예약완료',
      '신청취소',
    ])[0]!,
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): ReservationData[] => {
    const len = lens[depth]!;
    return range(len).map((): ReservationData => {
      return {
        ...newReservationData(),
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
