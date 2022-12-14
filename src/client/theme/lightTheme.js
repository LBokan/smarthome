import { createTheme } from '@mui/material';
import { green, grey, red, teal, yellow } from '@mui/material/colors';

import '@/assets/styles/fonts/fonts.css';

const MuiAvatar = {
  styleOverrides: {
    root: {
      backgroundColor: yellow[700]
    }
  }
};

const MuiButton = {
  styleOverrides: {
    root: {
      borderRadius: '10px',
      color: teal[800],
      backgroundColor: green['A400'],
      boxShadow: `0 1px 4px ${grey[500]}`,
      '&:disabled': {
        backgroundColor: grey[200],
        boxShadow: 'none'
      }
    },
    text: {
      border: 'none',
      backgroundColor: grey[300],
      '&:hover': {
        backgroundColor: yellow[700]
      }
    },
    outlined: {
      border: `1px solid ${teal[800]}`,
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: yellow[700]
      }
    },
    danger: {
      color: grey[50],
      backgroundColor: red[700],
      '&:hover': {
        color: teal[800],
        backgroundColor: yellow[700]
      },
      '&:disabled': {
        backgroundColor: grey[200],
        boxShadow: 'none'
      }
    }
  }
};

const MuiIconButton = {
  styleOverrides: {
    root: {
      color: teal[800],
      '&:hover': {
        color: yellow[700]
      }
    },
    colorInherit: {
      color: grey[50]
    },
    colorSuccess: {
      color: grey[50],
      backgroundColor: teal[800],
      '&:hover': {
        color: teal[800],
        backgroundColor: yellow[700]
      }
    },
    colorError: {
      color: grey[50],
      backgroundColor: red[700],
      '&:hover': {
        color: teal[800],
        backgroundColor: yellow[700]
      }
    }
  }
};

const MuiListItemButton = {
  styleOverrides: {
    root: {
      borderRadius: '50px',
      '&:hover *': {
        color: yellow[700]
      }
    }
  }
};

const MuiIcon = {
  styleOverrides: {
    root: {
      width: '30px',
      height: '30px',
      color: teal[800]
    }
  }
};

const MuiListItemIcon = {
  styleOverrides: {
    root: {
      color: teal[800]
    }
  }
};

const MuiInputBase = {
  styleOverrides: {
    root: {
      padding: '8px 18px',
      borderRadius: '10px',
      fontSize: '14px',
      color: grey[50],
      backgroundColor: teal[800]
    }
  }
};

const MuiSelect = {
  styleOverrides: {
    root: {
      padding: '0 8px',
      maxHeight: '45px',
      borderRadius: '10px',
      fontSize: '14px',
      color: grey[50],
      backgroundColor: teal[800]
    },
    icon: {
      color: grey[50]
    }
  }
};

const MuiSkeleton = {
  styleOverrides: {
    root: {
      height: '14px',
      borderRadius: '10px',
      backgroundColor: yellow[700]
    },
    rectangular: {
      height: '45px'
    }
  }
};

const MuiInputLabel = {
  styleOverrides: {
    root: {
      zIndex: '2',
      padding: '0 8px',
      borderRadius: '10px',
      fontSize: '14px',
      color: grey[50],
      backgroundColor: teal[800]
    }
  }
};

const MuiFormHelperText = {
  styleOverrides: {
    root: {
      fontSize: '10px'
    }
  }
};

const MuiLink = {
  styleOverrides: {
    root: {
      fontSize: '14px',
      color: teal[800],
      '&:hover': {
        color: yellow[700]
      }
    }
  }
};

const MuiTable = {
  styleOverrides: {
    root: {
      padding: '10px',
      borderCollapse: 'separate',
      borderRadius: '10px',
      overflow: 'hidden'
    }
  }
};

const MuiTableCell = {
  styleOverrides: {
    root: {
      color: teal[800],
      fontSize: '12px'
    }
  }
};

const MuiDrawer = {
  styleOverrides: {
    paper: {
      zIndex: '8',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '95px 15px 25px',
      minWidth: '70px'
    }
  }
};

const MuiAlert = {
  styleOverrides: {
    message: {
      lineHeight: 1.3
    }
  }
};

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      light: yellow[300],
      dark: yellow[700]
    }
  },
  typography: {
    fontFamily: "'LexendDeca', sans-serif",
    h1: {
      fontFamily: "'LexendDeca', sans-serif",
      fontWeight: '700',
      lineHeight: '1',
      color: teal[800]
    },
    h2: {
      fontFamily: "'LexendDeca', sans-serif",
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '1',
      color: teal[800]
    },
    h3: {
      fontFamily: "'LexendDeca', sans-serif",
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '1.2',
      color: teal[800]
    },
    h4: {
      fontFamily: "'LexendDeca', sans-serif",
      fontWeight: '400',
      fontSize: '12px',
      lineHeight: '1',
      color: teal[800]
    },
    subtitle1: {
      fontFamily: "'LexendDeca', sans-serif",
      fontWeight: '300',
      fontSize: '12px',
      lineHeight: '1',
      color: grey[600]
    },
    body1: {
      fontFamily: "'LexendDeca', sans-serif",
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '1',
      color: teal[800]
    },
    body2: {
      fontFamily: "'LexendDeca', sans-serif",
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '1',
      color: teal[800]
    },
    button: {
      fontFamily: "'LexendDeca', sans-serif",
      fontWeight: '400',
      fontSize: '14px',
      lineHeight: '1',
      color: teal[800],
      textTransform: 'none'
    }
  },
  components: {
    MuiAvatar,
    MuiButton,
    MuiIconButton,
    MuiListItemButton,
    MuiIcon,
    MuiListItemIcon,
    MuiInputBase,
    MuiSelect,
    MuiSkeleton,
    MuiInputLabel,
    MuiFormHelperText,
    MuiLink,
    MuiTable,
    MuiTableCell,
    MuiDrawer,
    MuiAlert
  }
});
