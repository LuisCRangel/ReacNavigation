import { Pressable, Text, View } from "react-native"
import { useEffect } from "react";
import { type NavigationProp, useNavigation, DrawerActions } from "@react-navigation/native"    

import { globalStyles } from "../../theme/Theme"
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { type RootStackParams } from "../../routes/StackNavigator";

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>> ();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        <Pressable onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer) }>
          <Text>Menu</Text>
        </Pressable>
      }
    })
  }, [])
  


  return (
    <View style={ globalStyles.container }>      

    <PrimaryButton
    onPress ={ () => navigation.navigate('Products') }
    label = 'Products'
    
    />

    <PrimaryButton
    onPress ={ () => navigation.navigate('Settings' as never) }
    label = 'Settings'
    
    />

      </View>
  )
}