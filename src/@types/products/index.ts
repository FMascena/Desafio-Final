import Product from "../../pages/Product"

export interface Product {
    Product_album: any
    id: number,
    description: string,
    model: string,
    type: string,
    price: string,
    weight: string,
    notes: string,
    status: number,
    createdAt: string,
    updatedAt: string,
    Product_Albums: Product_Albums[],
    Colors: Colors[],
    Sizes: Sizes[],
    Materials: Materials[]
    Ratings: Rating[],
    cartQuantity?: number | any,
    overall_evaluation: number,
}

export interface Product_Albums {
    id: number,
    id_product: number,
    url_image: string,
    createdAt: string,
    updatedAt: string,
}

export interface Colors {
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string,
    Product_Colors: Product_Colors
}

export interface Product_Colors {
    id: number,
    id_product: number,
    id_color: number,
    createdAt: string,
    updatedAt: string
}

export interface Sizes {
    id: number,
    name: string,
    createdAt: string,
    updatedAt: string,
    Product_Sizes: Product_Sizes
}

export interface Product_Sizes {
    id: number,
    id_size: number,
    id_product: number,
    createdAt: string,
    updatedAt: string
}

export interface Materials {
    id: number,
    description: string,
    createdAt: string,
    updatedAt: string,
    Product_Materials: Product_Materials
}

export interface Product_Materials {
    id: number,
    id_product: number,
    id_material: number,
    createdAt: string,
    updatedAt: string
}

export interface Rating {
    id: number,
    id_product: number,
    description: string,
    date: string,
    evaluation_grade: number,
    author: string,
    createdAt: string,
    updatedAt: string
}

export interface productsInitialState {
    lacoList: [],
    destaquesList: [],
    colecaoparisList: [],
    tiarasList: [],
    acessoriosList: [],
    status: string
}