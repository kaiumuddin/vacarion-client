import {useEffect} from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Vacarion`;
    }, [title]);
};

export default useTitle;