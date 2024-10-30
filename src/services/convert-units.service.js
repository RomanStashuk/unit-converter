import convert from 'convert-units';

const allMeasures = convert().measures();

const getAllUnits = (measure) => {
  return convert().possibilities(measure) ?? [];
};

const getUnitDetails = (unit) => {
  return convert().describe(unit) ?? {};
};

const convertUnits = (value, from, to) => {
  return convert(+value).from(from).to(to);
};

export { allMeasures, getAllUnits, getUnitDetails, convertUnits };
