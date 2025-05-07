import { PaletteColor, PaletteColorOptions, createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Palette {
    incomColor: PaletteColor
    expenceColor: PaletteColor
    balanceColor: PaletteColor
  }

  interface PaletteOptions {
    incomColor?: PaletteColorOptions
    expenceColor?: PaletteColorOptions
    balanceColor?: PaletteColorOptions
  }
}

export const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans JP, Roboto, "Helbetica Neue", Arial, sans-srif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  palette: {

    // 収入の色を定義
    incomColor: {
      main: blue[500],
      light: blue[100],
      dark: blue[700],
    },

    // 支出の色を定義
    expenceColor: {
      main: blue[500],
      light: blue[100],
      dark: blue[700],
    },

    // 残高の色を定義
    balanceColor: {
      main: blue[500],
      light: blue[100],
      dark: blue[700],
    },
  }
})