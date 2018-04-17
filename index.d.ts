export = TimerMixin

interface TimerMixin {
  componentWillUnmount (): void,
  setTimeout: setter,
  clearTimeout: clearer,

  setInterval: setter,
  clearInterval: clearer,

  setImmediate: setter,
  clearImmediate: clearer,

  requestAnimationFrame: setter,
  cancelAnimationFrame: clearer,
}

interface setter {
  (callback: () => void, delta: number): number
}

interface clearer {
  (id: number): void
}