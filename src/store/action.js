export const countWpm = (n) => {
    return {
        type: "COUNTWPM",
        payload:n
    }
}

export const countError = (n) => {
    return {
        type: "COUNTERROR",
        payload:n
    }
}

export const countLetterTyped = (n) => {
  return {
      type: "COUNTLETTERTYPED",
      payload:n
  }
}

export const timer = (n) => {
  return {
      type: "TIMER",
      payload:n
  }
}
