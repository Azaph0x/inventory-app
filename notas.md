# Interfaces

Product = {
    id: Number,
    img?: string,
    name: String,
    description: String,
    isActivated: Boolean,
    barCode: string,
    createdAt: Datetime,
}

Moviment = {
    id: Number,
    quantity: Number,
    entry: Boolean,
    productId: Number,
    value: Number,
    supplierId: Number,
    dateValidate: string,
    createdAt: Datetime
}

Supplier = {
  id: Number,
  name: String,
  cnpj_cpf: String,
}

CategoryProduct = {
  id: Number,
  name: String,
}
