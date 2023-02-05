import DeadTree from "../assets/DeadTree.png";
import { RootState } from "../store/store";
import { useSelector, useDispatch } from 'react-redux';


const Tree = () => {
    const life = useSelector((state: RootState) => state.game.life);

    return (
        <div>
            {
                
                <img src={DeadTree} className="h-[100vh] z-10 absolute bottom-[11vh]"></img>
            }
            
        </div>

    );
};

export default Tree; 
