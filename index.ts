class Stopwatch {
  private startTime: number | null;
  private stopTime: number | null;
  private isRunning: boolean;

  constructor() {
    this.startTime = null;
    this.stopTime = null;
    this.isRunning = false;
  }

  start() {
    if (!this.isRunning) {
      this.startTime = Date.now() - (this.stopTime || 0);
      this.stopTime = null;
      this.isRunning = true;
    }
  }

  stop() {
    if (this.isRunning) {
      this.stopTime = Date.now();
      this.isRunning = false;
    }
  }

  reset() {
    this.startTime = null;
    this.stopTime = null;
    this.isRunning = false;
  }

  getElapsedTime() {
    if (this.startTime) {
      const currentTime = this.isRunning ? Date.now() : this.stopTime || 0;
      return (currentTime - this.startTime) / 1000; // Convert to seconds
    } else {
      return 0;
    }
  }
}

const stopwatch = new Stopwatch();

console.log("Press Enter to start the stopwatch.");
process.stdin.once('data', () => {
  stopwatch.start();
  console.log("Stopwatch started. Press Enter to stop.");

  process.stdin.once('data', () => {
    stopwatch.stop();
    console.log("Stopwatch stopped. Elapsed time: " + stopwatch.getElapsedTime() + " seconds");
    console.log("Press Enter to reset.");

    process.stdin.once('data', () => {
      stopwatch.reset();
      console.log("Stopwatch reset.");
      process.stdin.destroy();
    });
  });
});
