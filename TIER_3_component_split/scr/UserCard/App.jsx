import UserCard from "./components/UserCard";

function App() {
  return (
    <>
      <UserCard
        name="Minh"
        email="minh@gmail.com"
        avatar="https://via.placeholder.com/100"
      />

      <UserCard
        name="An"
        email="an@gmail.com"
        avatar="https://via.placeholder.com/100"
      />

      <UserCard
        name="Linh"
        email="linh@gmail.com"
        avatar="https://via.placeholder.com/100"
      />
    </>
  );
}

export default App;