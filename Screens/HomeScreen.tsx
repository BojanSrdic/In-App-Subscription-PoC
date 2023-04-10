import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../App';
import ActionRow from '../Components/ActionRow';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp>(); 

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView>
            {/* PRO Button */}
            <TouchableOpacity onPress={() => navigation.navigate("Paywall")} >
                <Text>PRO</Text>
            </TouchableOpacity>

            {/* IMAGE 
            *** <Image source={require('../assets')}/> *** 
            *** <Image source={{ uri: "https: ..."}}/> ***
            */}

            {/* ACtion Row */}
            <ActionRow title="aaa" screen="ComeingSoon" color="#121212" vertical />
            {/* ACtion Row */}
            <ActionRow title="aaa" screen="ComeingSoon" color="#232323" requirePro />
            {/* ACtion Row */}
            <ActionRow title="aaa" screen="ComeingSoon" color="#343434" requirePro />

        </ScrollView>
      </SafeAreaView>
    );
  }