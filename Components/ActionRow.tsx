import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';

export type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

type Props = {
    title: string;
    screen: any;
    vertical?: boolean;
    requirePro?: boolean;
    color: string;
};

export default function ActionRow({ title, screen, color, vertical, requirePro } : Props) {
    const navigation = useNavigation<NavigationProp>();
    
    return (
      <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: color }} 
      onPress={() => navigation.navigate(screen)} >
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }