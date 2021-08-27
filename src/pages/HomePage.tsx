import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'components/table';
import { ReactElement } from 'react';

export const HomePage = (): ReactElement => (
  <div className='flex-row'>
    <div className='flex-col'>Competitors</div>
    <br />
    <div className='flex-col'>
      <div className='w-full'>
        <div className='border-b border-gray-200 shadow'>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>Name</TableHeader>
                <TableHeader>Place</TableHeader>
                <TableHeader>Calories</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Vilius</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Vilius</TableCell>
                <TableCell>1</TableCell>
                <TableCell>1000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  </div>
);
