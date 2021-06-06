import { RUB } from "../../../utils/config"

export const formatPrice = (price: string) => {
  const [rub, penny] = price.split('.')
  return `${rub}${penny ? `.${penny}` : ''}${RUB}`
}