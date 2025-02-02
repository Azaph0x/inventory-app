export type Product = {
  id: number,
  img?: string,
  name: string,
  description: string,
  isActivated: Boolean,
  barCode: string,
  categoryId: number,
  createdAt: string,
}

export type ProductDTO = {
  img?: string,
  name: string,
  description: string,
  isActivated: Boolean,
  categoryId: number,
  barCode: string,
}
