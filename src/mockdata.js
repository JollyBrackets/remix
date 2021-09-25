const categories = [
  'Breathing',
  'Yoga',
  'HIT',
  'Body Balance',
  'Stretch',
  'Meditation',
  'Warm Up',
  'Cool Down',
  'Body Combat',
  'Dance',
  'Pilates',
  'Health Advice',
  'Mindfulness',
  'Cardio',
]

const intensityColors = {
  0: '#dec9e9ff',
  1: '#dac3e8ff',
  2: '#d2b7e5ff',
  3: '#c19ee0ff',
  4: '#b185dbff',
  5: '#a06cd5ff',
  6: '#9163cbff',
  7: '#815ac0ff',
  8: '#7251b5ff',
  9: '#6247aaff',
}

const defaultIntensities = {
  'Breathing': 0,
  'Yoga': 2,
  'HIT': 8,
  'Body Balance': 3,
  'Stretch': 2,
  'Meditation': 0,
  'Warm Up': 1,
  'Cool Down': 1,
  'Body Combat': 9,
  'Dance': 6,
  'Pilates': 4,
  'Health Advice': 0,
  'Mindfulness': 0,
  'Cardio': 6,
}

const muscleGroups = [
  'Arms',
  'Legs',
  'Butt',
  'Chest',
  'Abs',
  'Shoulders',
  'Neck',
  'Lower Back',
  'Full Body'
]

const trainers =
  ['caroline-girvan', 'chloe-ting', 'fit-for-fun', 'growingannanas', 'headspace', 'heather-robertson', 'les-mills', 'mady-morrison', 'my-life', 'pamela-reif', 'popsugar-fitness', 'tiff-x-dan']


const durations = [1, 3, 5, 10, 15]

function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function generateData (numberOfItems) {
  const data = []
  for (let i = 0; i < numberOfItems; i++) {
    const category = pickRandom(categories)
    const intensity = defaultIntensities[category]
    data.push({
      category,
      muscleGroups: [pickRandom(muscleGroups), pickRandom(muscleGroups)],
      duration: pickRandom(durations),
      trainer: pickRandom(trainers),
      hearRateProfile: 0,
      intensity,
      color: intensityColors[intensity]
    })
  }
  return data
}

export default {
  trainers,
  categories,
  muscleGroups,
  durations,
  intensityColors,
  generateData
}