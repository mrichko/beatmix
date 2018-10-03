// Four Drum Arrays
let kicks = Array(16).fill(false);
let snares = Array(16).fill(false);
let hiHats = Array(16).fill(false);
let rideCymbals = Array(16).fill(false);

// set variable of getDrumArrayByName to define the four options a user can select
const getDrumArrayByName = (name) => {
  switch (name){
    case 'kicks':
    return 'kicks';

    case 'snares':
    return 'snares';

    case 'hiHats':
    return 'hiHats';

    case 'rideCymbals':
    return 'rideCymbals';

    default:
    return;
  }
};

// set function that allows user to toggle a button off or on
const toggleDrum = (drumArrayName, index) => {
  const drums = getDrumArrayByName(drumArrayName);
  if (!drums || index > 15 || index < 0) {
    return;
  }
  drums[index] = !drums[index];
};


// sets function that clears all selections
const clear = (drumArrayName) => {
  const drums = getDrumArrayByName(drumArrayName);
  if (drums) {
    drums.fill(false);
  }
};

//
const invert = (drumArrayName) => {
  const drums = getDrumArrayByName(drumArrayName);
  if (!drums) {
    return
  }
  for (let selection = 0; selection < drums.legenth; selection++){
    drums[selection] = !drums[selection]
  }
};
