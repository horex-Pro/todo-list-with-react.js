import TodoApp from "./components/TodoApp/TodoApp";
import styles from './App.css'

const App = () => {
  return ( 
    <div className="app" style={styles.app}>
      <TodoApp/>
    </div>
   );
}
 
export default App;