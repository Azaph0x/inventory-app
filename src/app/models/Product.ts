export type Product = {
  id: Number,
  img?: string,
  name: String,
  description: String,
  isActivated: Boolean,
  barCode: string,
  createdAt: Date,
}

export type ProductDTO = {
  img?: string,
  name: String,
  description: String,
  isActivated: Boolean,
  barCode: string,
  createdAt: Date,
}
