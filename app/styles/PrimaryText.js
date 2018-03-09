import text from './Text';

const PrimaryText = (override, color) => text({
  fontSize: 36,
  ...override
}, color);

export default PrimaryText;
