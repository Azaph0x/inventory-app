export type Product = {
  id: Number,
  img?: string,
  name: String,
  description: String,
  isActivated: Boolean,
  barCode: string,
  categoryId: number,
  createdAt: String,
}

export type ProductDTO = {
  img?: string,
  name: String,
  description: String,
  isActivated: Boolean,
  categoryId: number,
  barCode: string,
}
