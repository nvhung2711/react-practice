import './App.css';

const Card = ({ title }) => {
    return <h3>{title}</h3>;
};

const App = () => {
    return (
        <>
            <h2>Functional Arrow Component</h2>;
            <Card title="Star Wars" />
            <Card title="Avatar" />
            <Card title="The Lion King" />
        </>
    );
};

export default App;
