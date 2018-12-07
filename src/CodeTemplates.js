export const ReactTemplates = {
  'ButtonHero': ({label, icon, dense, type, state}) => {
    return `<Button
  ${type ? type + '\n' : ''}
  ${dense ? 'dense\n' : ''}
  ${state ? state + '\n' : ''}
  ${icon !== '' ? 'icon={<i className=\'material-icons\'>' + icon + '</i>}\n' : ''}>
  ${label}
</Button>`;
  },
  'CardHero': () => {
    return `<Card>
  <CardPrimaryContent>
    <CardMedia imageUrl={imageUrl} />
  </CardPrimaryContent>
</Card>`;
  },
  'CheckboxHero': () => {},
};