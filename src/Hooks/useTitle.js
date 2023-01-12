import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} -  Mobile Garage`
    }, [title]);
};
export default useTitle;