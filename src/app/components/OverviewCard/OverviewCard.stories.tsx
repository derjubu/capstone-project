import { ObjectId } from 'bson';
import React from 'react';
import OverviewCard from './OverviewCard';

export default {
  title: 'Component/Cards',
  component: OverviewCard,
};

export const London = (): JSX.Element => (
  <OverviewCard
    location={'London, Greater London, England, United Kingdom'}
    startDate={'2022-07-07'}
    endDate={'2022-07-10'}
    mongoID={'61b9f82f51a7f41765e0dc14' as unknown as ObjectId}
    buttonFunctionDelete={() => void console.log('Delete')}
    buttonFunctionUpdate={() => void console.log('Update')}
  />
);

export const Hamburg = (): JSX.Element => (
  <OverviewCard
    location={'Hamburg, Germany'}
    startDate={'2022-07-07'}
    endDate={'2022-07-10'}
    mongoID={'61b9f82f51a7f41765e0dc14' as unknown as ObjectId}
    buttonFunctionDelete={() => void console.log('Delete')}
    buttonFunctionUpdate={() => void console.log('Update')}
  />
);

export const Prague = (): JSX.Element => (
  <OverviewCard
    location={'Prague, Prague, Czech Republic'}
    startDate={'2022-07-07'}
    endDate={'2022-07-10'}
    mongoID={'61b9f82f51a7f41765e0dc14' as unknown as ObjectId}
    buttonFunctionDelete={() => void console.log('Delete')}
    buttonFunctionUpdate={() => void console.log('Update')}
  />
);
