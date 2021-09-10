import { StandingsTable } from 'components/StandingsTable';
import { PageContainer } from 'lib/containers';
import { Header } from 'lib/Header';
import { ReactElement } from 'react';

export const StandingsPage = (): ReactElement => (
  <PageContainer>
    <Header>Standngs</Header>
    <StandingsTable />
  </PageContainer>
);
