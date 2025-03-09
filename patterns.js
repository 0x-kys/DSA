/**
 *   * * * * *
 *   * * * * *
 *   * * * * *
 *   * * * * *
 *   * * * * *
 */

/**
 * Prints N*N star pattern.
 *
 * @param {number} N - Pattern size.
 * @returns {void}
 */

function pattern1(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      process.stdout.write("*");
      if (j < N - 1) {
        process.stdout.write("-");
      }
    }
    console.log("");
  }
}

pattern1(5);
console.log("");

/**
 *   *
 *   * *
 *   * * *
 *   * * * *
 *   * * * * *
 */

/**
 * Print star pattern of N size moving from 1 to N.
 *
 * @param {number} N - Pattern size;
 * @returns {void}
 */

function pattern2(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write("*");
      if (j < i) {
        process.stdout.write("-");
      }
    }
    console.log("");
  }
}

pattern2(5);
console.log("");

/**
 * 1
 * 1 2
 * 1 2 3
 * 1 2 3 4
 * 1 2 3 4 5
 */

/**
 * Print number pattern of N size moving from 1 to N.
 *
 * @param {number} N - Pattern size;
 * @returns {void}
 */

function pattern3(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(`${j + 1}`);
      if (j < i) {
        process.stdout.write("-");
      }
    }
    console.log("");
  }
}

pattern3(5);
console.log("");

/**
 * 1
 * 2 2
 * 3 3 3
 * 4 4 4 4
 * 5 5 5 5 5
 */

/**
 * Print a number - number of times based on index in loop.
 *
 * @param {number} N - Pattern size;
 * @returns {void}
 */

function pattern4(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < i + 1; j++) {
      process.stdout.write(`${i + 1}`);
      if (j < i) {
        process.stdout.write("-");
      }
    }
    console.log("");
  }
}

pattern4(5);
