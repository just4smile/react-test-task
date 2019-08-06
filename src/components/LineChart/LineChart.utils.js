export function constructOptions({ title, categories, min, max }) {
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
      min,
      max,
      forceNiceScale: true,
      decimalsInFloat: 3,
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
