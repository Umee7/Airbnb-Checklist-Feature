import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

/*
========================================================
PRIMITIVE TOKENS (FIGMA EXPORT)
========================================================
*/

export const primitive = {
  orange: {
    50: "#FFF8F6",
    100: "#F9EBE8",
    200: "#ECC0B6",
    300: "#E2A293",
    400: "#D57862",
    500: "#CD5D44",
    600: "#C13515",
    700: "#B32505",
    800: "#89260F",
    900: "#6A1D0C",
  },

  yellow: {
    50: "#FCF2E7",
    100: "#F5D5B6",
    200: "#F1C192",
    300: "#EAA560",
    400: "#E69441",
    500: "#E07912",
    600: "#CC6E10",
    700: "#9F560D",
    800: "#7B430A",
    900: "#5E3308",
  },

  green: {
    50: "#E6F3E6",
    100: "#B0DBB2",
    200: "#8AC98C",
    300: "#54B158",
    400: "#33A137",
    500: "#008A05",
    600: "#007E05",
    700: "#006204",
    800: "#004C03",
    900: "#003A02",
  },

  blue: {
    50: "#ECF3FF",
    100: "#C4DBFF",
    200: "#A8CAFF",
    300: "#80B1FF",
    400: "#68A2FF",
    500: "#428BFF",
    600: "#3C7EE8",
    700: "#2F63B5",
    800: "#244C8C",
    900: "#1C3A6B",
  },

  purple: {
    50: "#EDE6F2",
    100: "#C6B1D5",
    200: "#AA8CC1",
    300: "#8357A5",
    400: "#6B3694",
    500: "#460479",
    600: "#40046E",
    700: "#320356",
    800: "#270243",
    900: "#1D0233",
  },

  red: {
    50: "#FFEBEF",
    100: "#FFC1CC",
    200: "#FFA3B4",
    300: "#FF7A92",
    400: "#FF607D",
    500: "#FF385C",
    600: "#E00B41",
    700: "#CC0A3B",
    800: "#92174D",
    900: "#681037",
  },

  warmGray: {
    50: "#FEFEFD",
    100: "#FCFBF8",
    200: "#FAF9F5",
    300: "#F7F6F2",
    400: "#F7F4EE",
    500: "#F5F1EA",
    600: "#DFDBD5",
    700: "#AEABA6",
    800: "#878581",
    900: "#676562",
  },

  grey: {
    50: "#F7F7F7",
    100: "#F2F2F2",
    200: "#EBEBEB",
    300: "#DDDDDD",
    400: "#C0C0C0",
    500: "#B0B0B0",
    600: "#A0A0A0",
    700: "#7D7D7D",
    800: "#6A6A6A",
    900: "#222222",
  },

  bw: {
    white: "#FFFFFF",
    black: "#000000",
  },

  opacity: {
    red: "#FF385C33",
    dim: "#22222299",
    black: "#22222226",
    orange: "#E0791280",
  },

  gradients: {
    rauschFrom: "#E21E4D",
    rauschTo: "#D70466",
    rauschRadialFrom: "#FF385C",
    rauschRadialTo: "#BD1E59",
    plusFrom: "#BD1E59",
    plusTo: "#861453",
    luxeFrom: "#59086E",
    luxeTo: "#440589",
    navFrom: "#E4E3DF",
    navTo: "#FFFFFF",
  },
};

/*
========================================================
COLOR SCHEME TYPE
========================================================
*/

export interface ColorScheme {
  bg: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  primary: string;
  success: string;
  warning: string;
  danger: string;
  shadow: string;
  gradients: {
    background: [string, string];
    surface: [string, string];
    primary: [string, string];
    success: [string, string];
    warning: [string, string];
    danger: [string, string];
    muted: [string, string];
    empty: [string, string];
    navigation: [string, string];
  };
  backgrounds: {
    input: string;
    editInput: string;
  };
  statusBarStyle: "light-content" | "dark-content";
}

/*
========================================================
LIGHT THEME (SEMANTIC TOKENS USING PRIMITIVES)
========================================================
*/

const lightColors: ColorScheme = {
  bg: primitive.bw.white,
  surface: primitive.bw.white,
  text: primitive.grey[900],
  textMuted: primitive.grey[800],
  border: primitive.grey[200],
  primary: primitive.red[600],
  success: primitive.green[500],
  warning: primitive.yellow[500],
  danger: primitive.red[600],
  shadow: primitive.bw.black,

  gradients: {
    background: [primitive.bw.white, primitive.grey[50]],
    surface: [primitive.bw.white, primitive.grey[50]],
    primary: [primitive.gradients.rauschFrom, primitive.gradients.rauschTo],
    success: [primitive.green[400], primitive.green[500]],
    warning: [primitive.yellow[300], primitive.yellow[500]],
    danger: [primitive.red[500], primitive.red[600]],
    muted: [primitive.grey[400], primitive.grey[700]],
    empty: [primitive.grey[50], primitive.grey[200]],
    navigation: [primitive.gradients.navFrom, primitive.gradients.navTo],
  },

  backgrounds: {
    input: primitive.bw.white,
    editInput: primitive.grey[50],
  },

  statusBarStyle: "dark-content",
};

/*
========================================================
DARK THEME
========================================================
*/

const darkColors: ColorScheme = {
  bg: primitive.grey[900],
  surface: primitive.bw.black,
  text: primitive.bw.white,
  textMuted: primitive.grey[500],
  border: primitive.grey[800],
  primary: primitive.red[500],
  success: primitive.green[400],
  warning: primitive.yellow[500],
  danger: primitive.red[500],
  shadow: primitive.bw.white,

  gradients: {
    background: [primitive.grey[900], "#2B2B2B"],
    surface: ["#2B2B2B", "#333333"],
    primary: [primitive.gradients.rauschFrom, primitive.gradients.rauschTo],
    success: [primitive.green[400], primitive.green[500]],
    warning: [primitive.yellow[300], primitive.yellow[500]],
    danger: [primitive.red[500], primitive.red[600]],
    muted: ["#444444", primitive.grey[800]],
    empty: ["#2B2B2B", "#333333"],
    navigation: [primitive.bw.black, primitive.bw.black],
  },

  backgrounds: {
    input: "#2B2B2B",
    editInput: primitive.grey[900],
  },

  statusBarStyle: "light-content",
};

/*
========================================================
THEME CONTEXT
========================================================
*/

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: ColorScheme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/*
========================================================
PROVIDER
========================================================
*/

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("darkMode").then((value) => {
      if (value) setIsDarkMode(JSON.parse(value));
    });
  }, []);

  const toggleDarkMode = async () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    await AsyncStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  const colors = isDarkMode ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

/*
========================================================
HOOK
========================================================
*/

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
