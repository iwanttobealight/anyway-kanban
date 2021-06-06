const HOUR_COST = 1000
const SEC_IN_HOUR = 3600
const SEC_COST = HOUR_COST / SEC_IN_HOUR

export const calculatePrice = (counter: number) => (counter * SEC_COST).toFixed(2)