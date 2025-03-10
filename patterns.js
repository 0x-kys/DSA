/**
 *   * * * * *
 *   * * * * *
 *   * * * * *
 *   * * * * *
 *   * * * * *
 */

/**
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
console.log();

/**
 *  * * * * *
 *  * * * *
 *  * * *
 *  * *
 *  *
 */

/**
 * @param {number} N - Pattern size
 * @returns {void}
 */

function pattern5(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - i; j++) {
      process.stdout.write(`*`);
      if (j < N - i - 1) {
        process.stdout.write("-");
      }
    }
    console.log("");
  }
}

pattern5(5);
console.log();

/**
 * 1 2 3 4 5
 * 1 2 3 4
 * 1 2 3
 * 1 2
 * 1
 */

/**
 * @param {number} N - Pattern size
 * @returns {void}
 */
function pattern6(N) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - i; j++) {
      process.stdout.write(`${j + 1}`);
      if (j < N - i - 1) {
        process.stdout.write("-");
      }
    }
    console.log("");
  }
}

pattern6(5);
console.log();

/*
 *     *
 *    * *
 *   * * *
 *  * * * *
 * * * * * *
 */

/**
 * @param {number} N - Pattern Size.
 * @returns {void}
 */
function pattern7(N) {
  for (let i = 0; i < N; i++) {
    let spaces = " ".repeat(N - 1 - i);
    let stars = "* ".repeat(i + 1);

    console.log(spaces + stars.trim());
  }
}

pattern7(5);
console.log();

/*
 *  * * * * *
 *   * * * *
 *    * * *
 *     * *
 *      *
 */

/**
 * @param {number} N - Pattern Size.
 * @returns {void}
 */
function pattern8(N) {
  for (let i = 0; i < N; i++) {
    let spaces = " ".repeat(i);
    let stars = "* ".repeat(N - i);

    console.log(spaces + stars.trim());
  }
}

pattern8(5);
console.log();

/*
 *      *
 *     * *
 *    * * *
 *   * * * *
 *  * * * * *
 *  * * * * *
 *   * * * *
 *    * * *
 *     * *
 *      *
 */

/**
 * @param {number} N - Pattern Size.
 * @returns {void}
 */

function pattern9(N) {
  for (let i = 0; i < N; i++) {
    let spaces = " ".repeat(N - 1 - i);
    let stars = "* ".repeat(i + 1);

    console.log(spaces + stars.trim());
  }

  for (let i = 0; i < N; i++) {
    let spaces = " ".repeat(i);
    let stars = "* ".repeat(N - i);

    console.log(spaces + stars.trim());
  }
}

pattern9(5);
console.log();

//*
//* *
//* * *
//* * * *
//* * * * *
//* * * *
//* * *
//* *
//*

/**
 * @param {number} N - Pattern Size.
 * @returns {void}
 */

function pattern10(N) {
  for (let i = 1; i <= 2 * N - 1; i++) {
    let stars = i;

    if (i > N) {
      stars = 2 * N - i;
    }

    for (let j = 1; j <= stars; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

pattern10(5);
