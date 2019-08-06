import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';

import { constructOptions, constructSeries } from './LineChart.utils';

const LineChart = ({ title, valueLabel, values, categories, min, max }) => {
  const options = constructOptions({ title, categories, min, max });
  const series = constructSeries({ name: valueLabel, data: values });

  return <ReactApexChart options={options} series={series} type="line" height="350" />;
};

LineChart.propTypes = {
  title: PropTypes.string.isRequired,
  valueLabel: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default memo(LineChart);
