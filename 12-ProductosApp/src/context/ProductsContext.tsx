import React, { createContext } from 'react';
import { Producto, ProductsResponse } from '../interfaces/appInterfaces';
import { useState, useEffect } from 'react';
import cafeApi from '../api/cafeApi';


type ProductsContextProops = {

    products: Producto[];

    loadProducts: () => Promise<void>;
    addProduct: (categoryId: string, productName: string) => Promise<void>;
    updateProduct: (categoryId: string, productName: string, productId: string) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
    loadProductById: (id: string) => Promise<Producto>;
    uploadImage: (data: any, id: string) => Promise<void>; 
}

export const ProductsContext = createContext({} as ProductsContextProops);


export const ProductsProvider = ({ children }: any) => {

    const [products, setProducts] = useState<Producto[]>([])

    useEffect(()=>{
        loadProducts();
    },[])

    const loadProducts = async() => {

        const resp = await cafeApi.get<ProductsResponse>('/productos?limite=30');
        //setProducts([...products, ...resp.data.productos])
        setProducts([...resp.data.productos])
        //console.log( resp.data.productos)
    }
    const addProduct = async( categoryId: string, productName: string) => {

    }
    const updateProduct = async( categoryId :String, productName:String, productId:string) => {

    }
    const deleteProduct =async (id: string) => {

    }
    const loadProductById = async (id: string):Promise<Producto> => {
        const resp = await cafeApi.get<Producto>(`productos/${ id }`);
        return resp.data;

    }
    // Cambiar any
    const uploadImage = async(data: any, id: string) => {

    }
    return (

        <ProductsContext.Provider value={{
            products,
            loadProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            loadProductById,
            uploadImage
        }}>
            {children}
        </ProductsContext.Provider>
    )



}