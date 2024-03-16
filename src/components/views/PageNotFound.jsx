import {useNavigate} from 'react-router-dom';

const PageNotFound = () => {
        const navigate = useNavigate();

        return <><h1>Page not found 404</h1>
        <button onClick={() => navigate(-1)} >go back</button>
    </>
}

export default PageNotFound;