import { ReactElement } from 'react';
import { Classes } from 'shared/types';
import Utils from 'shared/utils';

interface StandingsDto {
  place: number;
  name: string;
  calories: number;
}

const data: StandingsDto[] = [
  { place: 1, name: 'Vilius', calories: 2500 },
  { place: 2, name: 'Test', calories: 2000 },
  { place: 3, name: 'Titas', calories: 1750 },
  { place: 4, name: 'Marius', calories: 1500 },
  { place: 5, name: 'Belekas', calories: 150 },
];

export const StandingsTable = (): ReactElement => {
  const trClasses: Classes = { 'hover:bg-blue-300': true };

  return (
    <table className='m-6 divide-y'>
      <thead>
        <tr className='bg-blue-200'>
          <th className='px-8 py-5'>Place</th>
          <th className='px-8 py-5'>Name</th>
          <th className='px-8 py-5'>Calories</th>
        </tr>
      </thead>
      <tbody className='divide-y'>
        {data.map((entry: StandingsDto, index: number) => {
          const { place, name, calories } = entry;

          const indexIsEven = index % 2 === 0;
          trClasses['bg-white'] = indexIsEven;
          trClasses['bg-gray-200'] = !indexIsEven;

          const className = Utils.makeClassName(trClasses);

          return (
            <tr className={className}>
              <td className='p-8 py-5 text-center'>{place}</td>
              <td className='p-8 py-5'>{name}</td>
              <td className='p-8 py-5 text-center'>{calories}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
