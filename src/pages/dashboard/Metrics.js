import Chart from '@components/Chart';
import endPoints from 'services/api';
import useFetch from '@hooks/useFetch';

const Metrics = () => {
  const products = useFetch(endPoints.products.getProducts(30, 0));
  const categories = products?.map((product) => product.category);
  const categoriesNames = categories?.map((categoryName) => categoryName.name);

  const countOccurrences = (arr) => arr.reduce((obj, item) => ((obj[item] = ++obj[item] || 1), obj), {});

  const data = {
    datasets: [
      {
        label: 'Categories',
        data: countOccurrences(categoriesNames),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50AF95', 'f3ba2f', '#2a71d0'],
      },
    ],
  };
  return <Chart chartData={data} />;
};

export default Metrics;
