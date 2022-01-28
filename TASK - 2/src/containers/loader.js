import Loader from "react-loader-spinner";
import './styles.css';

const LoaderComp = ()=>{
    return(

        <div className='app'>
            <Loader
            type="Grids"
            color="#20A5D8"
            style={{}}
            height={50}
            width={50}
            timeout={3000}
            />
       </div>
    );
}
export default LoaderComp
