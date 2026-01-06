import { useEffect, useState } from "react";

// Fetch live currency rates for the selected base currency.
// Exposes `refetch` to let callers retry manually when the API fails.
function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [refreshKey, setRefreshKey] = useState(0)

    const refetch = () => setRefreshKey((key) => key + 1)

    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        setError(null)

        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`, {
            cache: "no-store",
            signal: controller.signal,
        })
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`)
                return res.json()
            })
            .then((res) => {
                setData(res[currency] || {})
                setLoading(false)
            })
            .catch((err) => {
                if (err.name === "AbortError") return
                setError(err)
                setData({})
                setLoading(false)
            })

        return () => controller.abort()
    }, [currency, refreshKey])

    return { data, loading, error, refetch }
}

export default useCurrencyInfo;