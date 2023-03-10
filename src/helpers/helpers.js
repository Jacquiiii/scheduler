// Returns appropriate string based on value of spots remaining. Used in DayListItem component.
const spots = (spots) => {
  if (spots === 0) {
    return "no spots remaining"
  }

  if (spots === 1) {
    return "1 spot remaining"
  }

  return `${spots} spots remaining`;
};

export default spots;