import { ReactElement } from 'react';
import { PageContainer } from '../components/containers/PageContainer';
import { StandingsTable } from '../components/StandingsTable';
import { Header } from '../lib/Header';

export const StandingsPage = (): ReactElement => (
  <PageContainer>
    <Header>Standings</Header>
    <StandingsTable />
  </PageContainer>
);
