import './Loading.scss'
import ClipLoader from "react-spinners/ClipLoader";

const Loading = () => {
    return <div>
        <ClipLoader color={'red'} loading={true} size={100}/>
    </div>
}

export default Loading