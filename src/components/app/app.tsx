import Welcome from '../welcome-screen/welcome-screen';

const App: React.FC = () => (
  <>
    <p>Hello, world!</p>
    <Welcome errorsCount={3}/>;
  </>
);
export default App;
