import convert from 'convert-units';

const allMeasures = convert().measures();

const getAllUnits = (measure) => {
  return convert().possibilities(measure) ?? [];
};

const getUnitDetails = (unit) => {
  return convert().describe(unit) ?? {};
};

export { allMeasures, getAllUnits, getUnitDetails };
