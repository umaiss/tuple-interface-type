import { Text, SafeAreaView, View, StyleSheet, FlatList } from 'react-native';


export default function App() {
    interface country {
        name: string;
        weather: string;
        localTime: string;
        utcOffset: number;
        bit: boolean
    }

    type CountryData = [string, string, string, number, boolean];
    const countries: countryData[] = [
        ["United States", "Sunny", "10:00 AM", 5, true],
        ["India", "Rainy", "8:30 PM", 5, true],
        ["Australia", "Cloudy", "2:00 AM", 10, false],
        ["Germany", "Snowy", "4:00 PM", 1, false],
    ]

    const convertToCountry = (data: CountryData): Country => ({
        name: data[0],
        weather: data[1],
        localTime: data[2],
        utcOffset: data[3],
        bit: data[4]
    });

    const countryData: Country[] = countries.map(convertToCountry);

    const renderItem = ({ item }: { item: Country }) => (
        <View style= { styles.item } >
        <Text style={ styles.title }> { item.name } < /Text>
            < Text > Weather: { item.weather } </Text>
                < Text > Local Time: { item.localTime } </Text>
                    < Text > UTC Offset: { item.utcOffset } </Text>
                        < Text > UTC Offset: { item.bit } </Text>
                            < /View>
  );


    return (
        <SafeAreaView style= { styles.container1 } >
        <View style={ styles.container }>
            <FlatList
        data={ countryData }
    renderItem = { renderItem }
    keyExtractor = {(item) => item.name
}
/>
    < /View>
    < /SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
