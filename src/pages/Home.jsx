import MoneyContainer from '../components/MoneyContainer';

const Home = ({ data, setData}) => {
  return (
    <div>
      <MoneyContainer data={data} setData={setData} />
    </div>
  );
};

export default Home;
