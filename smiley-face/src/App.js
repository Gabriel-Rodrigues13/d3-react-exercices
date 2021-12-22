import * as d3 from 'd3';
import {Face} from './components/Face'

const width = 166;
const height = 166;
const array = d3.range(7*4)

const App = () => (
  <>
    {array.map(() =>(
      <Face
      width={width}
      height={height}
    >
    </Face>))}
  </>
);

export default App;
