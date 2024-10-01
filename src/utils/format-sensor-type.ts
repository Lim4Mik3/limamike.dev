export function FormatSensorType(name: string) {
  if (name.includes('energy')) {
    return name.replace('energy', "Energia")
  }

  if (name.includes('vibration')) {
    return name.replace('vibration', "Vibração")
  }

  if (name.includes('External')) {
    return name.replace('External', "Externo")
  }

  return name;
}