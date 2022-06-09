import {
    View,
    Text,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { getCountries } from '../../../Logic/EntityAPI';
import styles from './Styles';
import { Dropdown } from 'react-native-element-dropdown';
import Header from '../../../Componenets/Header/Header';
import NewPublicationContext from '../../../Contexts/NewPublicationContext';

const NewPublicationName = ({ navigation }) => {
    const { publication, setPublication } = useContext(NewPublicationContext);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [country, setCountry] = useState<{
        name: string;
        cca2: string;
    } | null>(null);
    const [countries, setCountries] = useState<Array<{
        name: string;
        cca2: string;
    }> | null>([]);

    async function loadCountries() {
        const _countries = await getCountries();
        setCountries(_countries);
    }

    useEffect(() => {
        loadCountries();
    }, []);

    const goNext = () => {
        if (title !== '' && description !== '' && country !== null) {
            setPublication({
                ...publication,
                title: title,
                description: description,
                countryAlphaCode: country.cca2,
            });
            navigation.navigate('NewPublicationContent');
        }
    };

    return (
        <>
            <Header onBackPress={() => navigation.goBack()} title="New route" />
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Title</Text>
                <TextInput
                    style={styles.inputText}
                    onChangeText={(text) => {
                        setTitle(text);
                    }}
                />
                <Text style={styles.title}>Description</Text>
                <TextInput
                    numberOfLines={2}
                    style={styles.inputText}
                    onChangeText={(text) => setDescription(text)}
                />
                <Text style={styles.title}>Country</Text>
                <Dropdown
                    keyboardAvoiding={true}
                    search={true}
                    style={styles.inputText}
                    data={countries}
                    labelField="name.common"
                    valueField="cca2"
                    onChange={(item) => setCountry(item)}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => goNext()}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
};

export default NewPublicationName;
