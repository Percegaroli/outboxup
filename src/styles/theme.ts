const colors = {
  primary: '#AC6DDE',
  lightGrey:'#F5F5F6',
  dark: '#181820'
}

export const theme: ThemeInterface = {
  typography: {
    colors:{
      primary: colors.primary,
      light: colors.lightGrey
    },
    size: {
      lg: '4.2rem',
      md: '2.6rem',
      sm: '1.6rem'
    }
  },
  background: {
    color: colors.dark
  },
  button: {
    colors: {
      primary: colors.primary
    }
  },
  breakpoints: {
    desktop: '1024px'
  }
}

export interface ThemeInterface {
  typography: {
    colors: {
      primary: string,
      light: string;
    },
    size: {
      lg: string;
      md: string;
      sm: string;
    }
  },
  background: {
    color: string;
  }
  button: {
    colors: {
      primary: string;
    }
  },
  breakpoints: {
    desktop: string ;
  }
}

