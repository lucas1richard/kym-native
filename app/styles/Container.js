export const marginWidth = 16;

const container = (override = {}) => ({
  marginHorizontal: marginWidth,
  ...override
});

export default container;
