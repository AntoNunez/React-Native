import { StackScreenProps } from '@react-navigation/stack'
import React, { useContext, useEffect } from 'react'
import { Picker } from '@react-native-picker/picker';
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { ProductsStackParams } from '../navigator/ProductsNavigator'
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductsContext';


interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { };


export const ProductScreen = ({ navigation, route }: Props) => {

    const { id = '', name = '' } = route.params;

    const { categories } = useCategories();
    const { loadProductById } = useContext(ProductsContext)

    const { _id, categoriaId, nombre, img, form, onChange, setFormValue } = useForm({
        _id: id,
        categoriaId: '',
        nombre: name,
        img: ''
    });

    useEffect(() => {
        navigation.setOptions({
            title: (name) ? name : 'Nuevo Producto'
        })
    }, [])
    useEffect(() => {
        loadProduct();
    }, [])

    const loadProduct = async () => {
        if (id.length === 0) return;
        const product = await loadProductById(id);
        console.log(product)
        setFormValue({
            _id: id,
            categoriaId: product.categoria._id,
            img: product.img || '',
            nombre


        })
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label}>Nombre del producto:</Text>
                <TextInput
                    placeholder='Producto'
                    style={styles.textInput}
                    value={nombre}
                    onChangeText={(value) => onChange(value, 'nombre')}
                />

                {/* Picker / Selector */}
                <Text style={styles.label}>Categoria</Text>
                <Picker
                    selectedValue={categoriaId}
                    onValueChange={(value) =>
                        onChange(value, 'categoriaId')}

                >
                    {
                        categories.map(c => (

                            <Picker.Item
                                label={c.nombre}
                                value={c._id}
                                key={c._id}

                            />

                        ))
                    }

                </Picker>

                <Button
                    title='Guardar'
                    onPress={() => { }}
                    color="#5856D6"
                />

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    <Button
                        title='Camara'
                        onPress={() => { }}
                        color="#5856D6"
                    />

                    <View style={{ width: 10 }} />

                    <Button
                        title='Galeria'
                        onPress={() => { }}
                        color="#5856D6"
                    />

                </View>

                {
                    (img.length > 0) && (
                        <Image
                            source={{ uri: img }}
                            style={{
                                marginTop:20,
                                width: '100%',
                                height: 300
                            }}
                        />

                    )
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20
    },
    label: {
        fontSize: 18
    },
    textInput: {
        borderWidth: 1,
        marginTop: 8,
        marginBottom: 15,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: 'rgba (0,0,0,0.2)',
        height: 45
    }
})

