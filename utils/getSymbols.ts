export const getSymbols = (value: string) => {
    switch (value) {
        case 'CAD':
            return 'CA$'
        case 'EUR':
            return '€'
        default:
            return '$'
    }
}