import { blueGrey, grey, teal, yellow } from '@mui/material/colors';

export const setContainerStyles = (isShortView) => {
  switch (isShortView) {
    case true:
      return {
        flexDirection: 'column',
        mb: '20px',
        mx: '10px',
        width: '190px'
      };

    case false:
    default:
      return {
        flexDirection: 'row',
        mb: '10px',
        mx: '0',
        width: 'fullWidth'
      };
  }
};

export const setBgColor = (mode) => {
  switch (mode) {
    case 'light':
      return `${grey[50]}`;

    case 'dark':
      return `${blueGrey[900]}`;

    default:
      return '#fff';
  }
};

export const setBoxShadowColor = (mode) => {
  switch (mode) {
    case 'light':
      return `0 0 2px ${grey[300]}`;

    case 'dark':
      return `0 0 2px ${blueGrey[700]}`;

    default:
      return '#fff';
  }
};

export const setLineChartColor = (mode) => {
  switch (mode) {
    case 'light':
      return yellow[700];

    case 'dark':
      return yellow[900];

    default:
      return '#000';
  }
};

export const setGridXChartColor = (mode) => {
  switch (mode) {
    case 'light':
      return teal[900];

    case 'dark':
      return grey[50];

    default:
      return '#fff';
  }
};
