export const getSymbols = (value: any) => {
    switch (value) {
        case 'CAD':
            return 'CA$'
        case 'EUR':
            return '€'
        default:
            return '$'
    }
}