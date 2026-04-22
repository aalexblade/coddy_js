import MyComponent from "./MyComponent.jsx";

const App = () => {
  return (
    <div>
      <div>
        <div>green</div>
        <div>yellow</div>
        <div>tangerine</div>
        <div>red</div>
        <div>orange</div>
      </div>
      <MyComponent bgColor="Yellow" height={40}>
        Follow the yellow brick road.
      </MyComponent>

      <MyComponent bgColor="Violet" height={90}>
        We're not in Kansas anymore!
      </MyComponent>
    </div>
  );
};

export default App;
