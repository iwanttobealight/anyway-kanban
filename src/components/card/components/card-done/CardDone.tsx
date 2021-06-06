import { Info } from "../info"
import { formatPrice } from "../../utils/format-price"

export const CardDone = ({ price }: { price?: string }) =>
  price == null ? null : <Info>{formatPrice(price)}</Info>