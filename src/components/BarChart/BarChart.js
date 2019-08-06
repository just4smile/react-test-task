import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';

import { constructOptions, constructSeries } from './BarChart.utils';

const BarChart = ({ title, valueLabel, values, categories }) => {
  const options = constructOptions({ title, categories });
  const series = constructSeries({ name: valueLabel, data: values });

  return <ReactApexChart options={options} series={series} type="bar" height="350" />;
};

BarChart.propTypes = {
  title: PropTypes.string.isRequired,
  valueLabel: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default memo(BarChart);
