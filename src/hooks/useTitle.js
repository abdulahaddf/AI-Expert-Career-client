import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=>{
        document.title = `AI Expert Career | ${title}`;
    },[title])

};

export default useTitle;