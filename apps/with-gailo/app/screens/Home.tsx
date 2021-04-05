/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, ScrollView, Platform} from 'react-native';
import {Text, Button, Block, Icon, NavBar} from 'galio-framework';

import theme from '../theme';

const BASE_SIZE = theme.SIZES.BASE;
const GRADIENT_BLUE = ['#6B84CA', '#8F44CE'];
const GRADIENT_PINK = ['#D442F8', '#B645F5', '#9B40F8'];
const COLOR_WHITE = theme.COLORS.WHITE;
const COLOR_GREY = theme.COLORS.MUTED; // '#D8DDE1';

const cards = [
  {
    title: 'Tasks',
    subtitle: '15 completed tasks',
    icon: 'list-bullet',
    iconFamily: 'Galio',
  },

  {
    title: 'Aquisitions',
    subtitle: '15 completed tasks',
    icon: 'bag-17',
    iconFamily: 'Galio',
  },
  {
    title: 'Cards',
    subtitle: '15 completed tasks',
    icon: 'credit-card',
    iconFamily: 'Galio',
  },

  {
    title: 'Settings',
    subtitle: '15 completed tasks',
    icon: 'settings-gear-65',
    iconFamily: 'Galio',
  },
];

const styles = StyleSheet.create({
  card: {
    borderColor: 'transparent',
    marginHorizontal: BASE_SIZE,
    marginVertical: BASE_SIZE / 2,
    padding: BASE_SIZE,
    backgroundColor: COLOR_WHITE,
    shadowOpacity: 0.4,
  },
  menu: {
    width: BASE_SIZE * 2,
    borderColor: 'transparent',
  },
  settings: {
    width: BASE_SIZE * 2,
    borderColor: 'transparent',
  },
  left: {
    marginRight: BASE_SIZE,
  },
  right: {
    width: BASE_SIZE * 2,
    backgroundColor: 'transparent',
    elevation: 0,
  },
  gradient: {
    width: BASE_SIZE * 3.25,
    height: BASE_SIZE * 3.25,
    borderRadius: BASE_SIZE * 3.25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const HomeScreen = () => {
  const renderHeader = () => (
    <NavBar
      title="Dashboard"
      onLeftPress={() => console.log('left pressed')}
      leftIconColor={theme.COLORS.MUTED}
      right={
        <Button
          color="transparent"
          style={styles.settings}
          onPress={() => console.log('right pressed')}>
          <Icon
            size={BASE_SIZE}
            name="heart"
            family="font-awesome"
            color={theme.COLORS.MUTED}
          />
        </Button>
      }
      style={Platform.OS === 'android' ? {marginTop: theme.SIZES.BASE} : null}
    />
  );

  const renderCard = (props, index) => {
    const gradientColors = index % 2 ? GRADIENT_BLUE : GRADIENT_PINK;

    return (
      <Block
        row
        center
        card
        shadow
        space="between"
        style={styles.card}
        key={props.title}>
        <Block style={[styles.gradient, styles.left]}>
          <Icon
            size={BASE_SIZE}
            name={props.icon}
            color={COLOR_WHITE}
            family={props.iconFamily}
          />
        </Block>

        <Block flex>
          <Text size={BASE_SIZE * 1.125}>{props.title}</Text>
          <Text size={BASE_SIZE * 0.875} muted>
            {props.subtitle}
          </Text>
        </Block>
        <Button style={styles.right}>
          <Icon
            size={BASE_SIZE}
            name="minimal-right"
            family="Galio"
            color={COLOR_GREY}
          />
        </Button>
      </Block>
    );
  };

  const renderCards = () => cards.map((card, index) => renderCard(card, index));

  return (
    <Block safe flex>
      {renderHeader()}
      <ScrollView style={{flex: 1}}>{renderCards()}</ScrollView>
    </Block>
  );
};
