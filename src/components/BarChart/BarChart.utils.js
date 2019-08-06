export function constructOptions({ title, categories }) {
  return {
    title: {
      text: title,
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories,
    },
    yaxis: {
      show: true,
      showAlways: true,
      labels: {
        formatter: val => val.toFixed(),
      },
    },
  };
}

export function constructSeries({ name, data }) {
  return [
    {
      name,
      data,
    },
  ];
}
