import text from 'styles/Text';

const headingStyle = (size, weight) => ({
  fontWeight: weight,
  fontSize: size,
  textAlign: 'center'
});

export const h1 = (override, color) => text({
  textAlign: 'center',
  fontSize: 25,
  fontWeight: '800',
  ...override
}, color);

export const h2 = (override, color) => text({
  textAlign: 'center',
  fontSize: 23,
  fontWeight: '700',
  ...override
}, color);

export const h3 = (override, color) => text({
  textAlign: 'center',
  fontSize: 21,
  fontWeight: '500',
  ...override
}, color);

export default headingStyle;
