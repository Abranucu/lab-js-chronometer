class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    if (!this.intervalId) {
      this.intervalId = setInterval((currentTime) => {
        this.currentTime++;
        if (printTimeCallback) {
          printTimeCallback();
        }
      }, 1000);
    }
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const dosDigitos = value.toString();
    if (dosDigitos.length === 1) {
      return "0" + dosDigitos
    } else {
      return dosDigitos
    }
  }

  stop() {
    // ... your code goes here
    return clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    return this.currentTime = 0
  }

  split() {
    // ... your code goes here
    let minutos = this.computeTwoDigitNumber(this.getMinutes())
    let segundos = this.computeTwoDigitNumber(this.getSeconds())
    return `${minutos}:${segundos}`
  }
}
