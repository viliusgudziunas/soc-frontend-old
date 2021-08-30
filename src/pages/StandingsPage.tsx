import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from 'lib/table';
import { ReactElement } from 'react';

export const StandingsPage = (): ReactElement => (
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
);
