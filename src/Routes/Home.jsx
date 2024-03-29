import { useGlobalStates } from '../Context/Context.jsx';
import Card from '../Components/Card.jsx';
import cover from '../utils/images/cover-c.webp'

const Home = () => {
    const { state } = useGlobalStates();
    
    
    return (
        <main>
            
            
             <div>
                    <h1 className='titulo1'>QUEREMOS MÁS SONRISAS</h1>
                   
                  
            </div>
               
            
           
            <article >
                
                <h2>
                    <i>Dentistas</i> 
                </h2>
                
            </article>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                 justifyContent: 'space-around',
                 margin: '100px' }}>
                {state.data.map((dentist) => (
                    <Card dentist={dentist} key={dentist.id} />
                ))}
            </div>
            <div>
                <p>Subscribete para nuestro concurso mensual!</p>
                <form>
                    <input
                        type="email"
                        placeholder="email "
                        aria-label="Type your email here"
                    />
                    <button type="button" aria-label="Submit email">
                        <i className="fa-solid fa-check"></i>
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Home;

