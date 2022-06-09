import {
    View,
    Text,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Modal,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { PublicationContentItem } from '../../../Constants/Constants';
import { launchImageLibrary } from 'react-native-image-picker';
import Header from '../../../Componenets/Header/Header';
import styles from './Styles';
import Icon from 'react-native-vector-icons/Entypo';
import NewPublicationContext from '../../../Contexts/NewPublicationContext';

const NewPublicationContent = ({ navigation }) => {
    const { publication, setPublication } = useContext(NewPublicationContext);

    const [content, setContent] = useState<Array<PublicationContentItem>>([]);
    const [position, setPosition] = useState<number>(0);

    const [showAddModal, setShowAddModal] = useState<boolean>(false);
    const [image, setImage] = useState<{ uri: string; base64: string } | null>(
        null,
    );
    const [text, setText] = useState<string | null>(null);

    const showModal = () => {
        setImage(null);
        setText(null);
        setShowAddModal(true);
    };

    const onSave = (
        _image: { uri: string; base64: string },
        _text: string | null,
    ) => {
        let _position = position;
        if (_image) {
            content.push({
                type: 'image',
                value: null,
                position: _position,
                image: {
                    uri: _image.uri,
                    value: _image.base64,
                },
            });
            _position++;
        }
        if (_text) {
            content.push({
                type: 'text',
                value: _text,
                position: _position,
                image: null,
            });
            _position++;
        }
        setPosition(_position);
        setShowAddModal(false);
    };

    const addImage = async () => {
        try {
            const result = await launchImageLibrary({
                selectionLimit: 1,
                mediaType: 'photo',
                includeBase64: true,
            });
            if (result.assets) {
                setImage(result.assets[0]);
            }
        } catch (err) {}
    };

    const goNext = () => {
        if (content) {
            setPublication({
                ...publication,
                contents: content,
            });
            navigation.navigate('NewPublicationLocation');
        }
    };

    return (
        <>
            <Header onBackPress={() => navigation.goBack()} title="New route" />
            <SafeAreaView style={styles.container}>
                <TouchableOpacity
                    style={styles.add}
                    onPress={() => showModal()}
                >
                    <Text style={styles.buttonText}>Add content</Text>
                </TouchableOpacity>
                <ScrollView style={styles.input}>
                    {content.map((item) => {
                        switch (item.type) {
                            case 'text':
                                return (
                                    <Text
                                        style={styles.text}
                                        key={item.position}
                                    >
                                        {item.value}
                                    </Text>
                                );
                            case 'image':
                                return (
                                    <Image
                                        key={item.position}
                                        style={styles.loadedImage}
                                        source={{
                                            uri: item.image.uri,
                                        }}
                                    />
                                );
                            default:
                                return null;
                        }
                    })}
                </ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => goNext()}
                >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>

                <Modal
                    visible={showAddModal}
                    onRequestClose={() => setShowAddModal(false)}
                >
                    <Header
                        title="Add content"
                        onBackPress={() => setShowAddModal(false)}
                    />
                    <SafeAreaView style={styles.modal}>
                        <TouchableOpacity
                            style={styles.iconContainer}
                            onPress={() => addImage()}
                        >
                            <Icon name="folder-images" style={styles.icon} />
                        </TouchableOpacity>
                        <TextInput
                            value={text}
                            onChangeText={(_text) => setText(_text)}
                            style={styles.inputText}
                            placeholder="Type text.."
                        />
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => onSave(image, text)}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                    </SafeAreaView>
                </Modal>
            </SafeAreaView>
        </>
    );
};

export default NewPublicationContent;
