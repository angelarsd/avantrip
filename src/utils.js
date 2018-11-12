export const numberFormatting = ( x, d=0 ) => {
  x = parseFloat(x).toFixed(d) || 0;
  let parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return parts.join(',') || 0;
};