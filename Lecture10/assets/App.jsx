import Hello from './assets/Hello';

function App() {
    return (
        <div className='App'>
            <Hello />
        </div>
    )
}

export default App;

/*
import Contact from './assets/Contact';
import Hello from './assets/Hello';

function App() {
    const helloData = [
        { name: 'Nichapa', message: 'Hi there' },
        { name: 'Kan', message: 'Hello..' }
    ];

    return (
        <div>
            {helloData.map((data, index) => (
                <Hello key={index} name={data.name} message={data.message} />
            ))}

            <Contact email="kannchp@gmail.com" phone ="0655143798" />
        </div>
    );
}

export default App;
*/

/*
import Contact from './assets/Contact';
import Counter from './assets/Counter';
import Hello from './assets/Hello';

function App() {
    const helloData = [
        { name: 'Nichapa', message: 'Hi there' },
        { name: 'Kan', message: 'Hello..' }
    ];

    return (
        <div className='App'>
        < Counter />
            {helloData.map((data, index) => (
                <Hello key={index} name={data.name} message={data.message} />
            ))}

            <Contact email="kannchp@gmail.com" phone ="0655143798" />
        </div>
    );
}

export default App;
*/


