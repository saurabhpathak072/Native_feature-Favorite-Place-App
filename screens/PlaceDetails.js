import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import OutlinedButton from '../components/UI/OutlinedButton'
import { Colors } from '../constants/colors'
import { useNavigation, useRoute } from '@react-navigation/native'
import { fetchPlaceDetails } from '../util/database'

const PlaceDetails = () => {
    const [fetchedPlace, setFetchedPlace] = useState(null);
    const route = useRoute();
    const navigation = useNavigation();
    const selectedPlaceId = route.params.placeId;
    useEffect(() => {
        const loadPlaceData= async ()=>{
            const place= await fetchPlaceDetails(selectedPlaceId);
            setFetchedPlace(place);
            navigation.setOptions({
                title:place.title
            });
        };
        loadPlaceData();
    }, [selectedPlaceId]);
    const showOnMapHandler=()=>{
        navigation.navigate('Map', {
            initialLat: fetchedPlace.location.lat,
            initialLng: fetchedPlace.location.lng,
          });
    }

    if (!fetchedPlace) {
        return (
          <View style={styles.fallback}>
            <Text>Loading place data...</Text>
          </View>
        );
      }
  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: fetchedPlace.imageUri}}/>
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
            <Text style={styles.address}>{fetchedPlace.address}</Text>
        </View>
        <OutlinedButton icon={'map'} onPress={showOnMapHandler}>View on Map</OutlinedButton>
      </View>
    </ScrollView>
  )
}

export default PlaceDetails

const styles = StyleSheet.create({
    fallback: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    screen:{
        alignItems:'center'
    },
    image:{
        height:'35%',
        minHeight: 300,
        width:'100%'
    },
    locationContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    addressContainer:{
        padding: 20
    },
    address:{
        color: Colors.primary500,
        textAlign:'center',
        fontWeight:'bold',
        fontSize: 16
    }
})