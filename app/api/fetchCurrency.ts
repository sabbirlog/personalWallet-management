export const fetchCurrency = async () => {
    const res = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_tMOZQqjgxHjj2TV5n5dhzQQ7H63u1B6R4MMUXYJu&currencies=EUR%2CUSD%2CCAD`);
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json();
}