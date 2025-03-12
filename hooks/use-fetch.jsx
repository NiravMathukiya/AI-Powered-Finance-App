import { useState } from "react"
import { toast } from "sonner"

const useFetch = (cb) => {
    const [data, setdata] = useState(undefined)
    const [loading, setloading] = useState(null)
    const [error, setError] = useState(null)

    const fn = async (...args) => {
        setloading(true);
        setError(null);

        try {
            const res = await cb(...args);
            setdata(res);
            setError(null);
        } catch (error) {
            setError(error);
            toast.error(error.message)
        } finally {
            setloading(false)
        }

    }

    return { data, loading, error, fn, setdata }
}

export default useFetch
