import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
} from 'react-native';
import {Block, Text, GalioProvider} from 'galio-framework';

import theme from './theme';

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  header: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 0.6875,
    paddingBottom: theme.SIZES.BASE * 1.6875,
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 0.5,
    marginTop: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : undefined,
  },
  avatar: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.25,
  },
  middle: {
    justifyContent: 'center',
  },
});

export const App: React.FC = props => {
  return (
    <NavigationContainer>
      <GalioProvider theme={theme}>
        <SafeAreaView
          style={styles.drawer}
          forceInset={{top: 'always', horizontal: 'never'}}>
          <Block space="between" row style={styles.header}>
            <Block flex={0.3}>
              <Image
                source={{uri: 'http://i.pravatar.cc/100'}}
                style={styles.avatar}
              />
            </Block>
            <Block flex style={styles.middle}>
              <Text size={theme.SIZES.FONT * 0.875}>Galio Framework</Text>
              <Text muted size={theme.SIZES.FONT * 0.875}>
                React Native
              </Text>
            </Block>
          </Block>
          <ScrollView>
            <DrawerItems {...props} />
          </ScrollView>
        </SafeAreaView>
      </GalioProvider>
    </NavigationContainer>
  );
};
