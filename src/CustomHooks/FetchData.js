import { useEffect, useState } from "react";

const FetchData = (url) => {
    const [data, setData] = useState();

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(res => {
                setData(res);
            })
            .catch(err => console.log(err))
    }, [url])

    return {data}
}

export default FetchData;