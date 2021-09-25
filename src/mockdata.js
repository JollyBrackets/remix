import { shuffle, sum } from 'lodash'

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
  'Tai Chi'
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
  'Tai Chi': 2,
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
    ["Caroline Girvan", "Chloe Ting", "Fit for Fun", "Growing Annanas", "Headspace", "Heather Robertson", "Les Mills", "Mady Morrison", "My Life", "Pamela Reif", "Popsugar Fitness", "Tiff x Dan"]


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
      intensity,
      color: intensityColors[intensity]
    })
  }
  return data
}


function magicAlgo (totalItensity, totalDuration, preferredCategory, preferredMuscleGroups = []) {
  const mix = []

  // Warmup
  const warmUpCategory = pickRandom(['Breathing', 'Tai Chi', 'Yoga'])
  const warmUpIntensity = defaultIntensities[warmUpCategory]
  const warmUp = {
    category: warmUpCategory,
    muscleGroups: [],
    duration: totalDuration <= 15 ? 1 : totalDuration <= 30 ? 3 : totalDuration <= 45 ? 5 : 10,
    trainer: pickRandom(trainers),
    intensity: warmUpIntensity,
    color: intensityColors[warmUpIntensity]
  }
  mix.push(warmUp)

  // coolDown
  const coolDownCategory = pickRandom(['Breathing', 'Meditation', 'Stretch'])
  const coolDownIntensity = defaultIntensities[coolDownCategory]
  const coolDown = {
    category: coolDownCategory,
    muscleGroups: preferredMuscleGroups,
    duration: totalDuration <= 15 ? 1 : totalDuration <= 30 ? 3 : totalDuration <= 45 ? 5 : 10,
    trainer: pickRandom(trainers),
    intensity: coolDownIntensity,
    color: intensityColors[coolDownIntensity]
  }

  // Figure out the parts to generate
  let remainingDuration = totalDuration - warmUp.duration - coolDown.duration
  const sequence = [5, 10, 1, 15, 3, 10, 5, 15, 1, 5, 10, 1, 15, 3, 10, 5, 15, 1].slice(0, Math.floor(remainingDuration/8) - 1)

  if (sum(sequence) > remainingDuration + 3) {
    sequence.sort(-1)
    sequence.pop()
  } else if (sum(sequence) < remainingDuration - 3) {
    let bestDuration
    let bestDiff = 100
    for (const duration of [1, 3, 5, 10, 15]) {
      const diff = Math.abs(duration - (remainingDuration - sum(sequence)))
      if (diff < bestDiff) {
        bestDiff = diff
        bestDuration = duration
      }
    }
    sequence.push(bestDuration)
  }

  // Get Main pars
  for (const duration of shuffle(sequence)) {
    let mainCategory
    if (totalItensity < 3) {
      mainCategory = pickRandom([preferredCategory, preferredCategory, preferredCategory, 'Breathing', 'Yoga','Stretch', 'Health Advice', 'Mindfulness', 'Tai Chi'].filter(x => x))
    } else if (totalItensity < 6) {
      mainCategory = pickRandom([preferredCategory, preferredCategory, preferredCategory, 'Pilates', 'Dance','Cardio', 'Body Balance'].filter(x => x))
    } else {
      mainCategory = pickRandom([preferredCategory, preferredCategory, preferredCategory, 'HIT', 'Body Combat'].filter(x => x))
    }

    const mainIntensity = defaultIntensities[mainCategory]
    const mainPart = {
      category: mainCategory,
      muscleGroups: preferredMuscleGroups,
      duration,
      trainer: pickRandom(trainers),
      intensity: mainIntensity,
      color: intensityColors[mainIntensity]
    }
    mix.push(mainPart)
  }

  mix.push(coolDown)
  return mix
}

export default {
  trainers,
  categories,
  muscleGroups,
  durations,
  intensityColors,
  generateData,
  magicAlgo
}