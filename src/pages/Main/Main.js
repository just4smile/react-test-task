import React, { memo, useMemo } from 'react';

import { LineChart, useDataContext, BarChart, TextField } from '../../components';

import { getLineValues, getLineCategories, getBarValues, barCategories } from './Main.utils';
import { MIN, MAX } from './Main.constants';

const Main = () => {
  const { data, threshold, setThreshold } = useDataContext();

  const lineValues = useMemo(() => getLineValues(data), [data]);
  const lineCategories = useMemo(() => getLineCategories(data), [data]);
  const barValues = useMemo(() => getBarValues(data), [data]);

  return (
    <div>
      <TextField value={threshold} onChange={setThreshold} label="Threshold" />
      <LineChart
        min={MIN}
        max={MAX}
        categories={lineCategories}
        values={lineValues}
        title="Some Value"
        valueLabel="Value"
      />
      <BarChart
        categories={barCategories}
        values={barValues}
        title="Some Value"
        valueLabel="Value"
      />
    </div>
  );
};

export default memo(Main);
