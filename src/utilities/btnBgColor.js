export default function btnBgColorFun(option) {
  let btnBgColor = 'blue';

  switch (option) {
    case 'good':
      btnBgColor = 'green';
      break;
    case 'neutral':
      btnBgColor = 'yellow';
      break;
    case 'bad':
      btnBgColor = 'red';
      break;
    default:
      btnBgColor = 'gray';
      break;
  }

  return btnBgColor;
}
