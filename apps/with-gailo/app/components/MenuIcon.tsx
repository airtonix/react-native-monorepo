import React from 'react';
import {Icon, useGalioTheme} from 'galio-framework';

export type MenuIconProps = {
  name: string;
  family: string;
  focused: boolean;
};

export const MenuIcon: React.FC<MenuIconProps> = ({
  name,
  family,
  focus = false,
}) => {
  const theme = useGalioTheme();
  return (
    <Icon
      name={name}
      family={family}
      size={theme.SIZES.FONT}
      color={focused ? theme.COLORS.WHITE : '#5D5D5D'}
    />
  );
};
