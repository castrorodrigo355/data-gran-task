export const mapArrayData = list =>
  list.slice(0, 15).map(element => mapElement(element));

export const mapElement = element => ({
  description: element[0],
  value: parseInt(element[1])
});
