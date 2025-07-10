export const THEME = {
  DARK: "dark",
  LIGHT: "light",
  CATPPUCCIN_LATTE: "catppuccin-latte",
  CATPPUCCIN_MOCHA: "catppuccin-mocha",
} as const;

export type ThemeType = "dark" | "light";

export type ThemeID = (typeof THEME)[keyof typeof THEME];

export type ThemeData = {
  id: ThemeID;
  type: ThemeType;
  name: string;
};

export const THEME_DATA: Record<ThemeID, ThemeData> = {
  [THEME.DARK]: {
    id: THEME.DARK,
    type: "dark",
    name: "Default Dark",
  },
  [THEME.LIGHT]: {
    id: THEME.LIGHT,
    type: "light",
    name: "Default Light",
  },
  [THEME.CATPPUCCIN_LATTE]: {
    id: THEME.CATPPUCCIN_LATTE,
    type: "light",
    name: "Catppuccin Latte",
  },
  [THEME.CATPPUCCIN_MOCHA]: {
    id: THEME.CATPPUCCIN_MOCHA,
    type: "dark",
    name: "Catppuccin Mocha",
  },
};
