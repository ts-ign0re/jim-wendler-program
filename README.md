[![codecov](https://codecov.io/gh/ts-ign0re/jim-wendler-program/branch/master/graph/badge.svg?token=R7681VR5YP)](https://codecov.io/gh/ts-ign0re/jim-wendler-program)

# Inspiration

This package is inspired by the Jim Wendler training program. Unfortunately I couldn't find a solution and wrote my own version.

https://www.t-nation.com/workouts/5-3-1-how-to-build-pure-strength/

# Getting started

### Install Package

```bash
npm i jim-wendler-program
```

```bash
yarn add jim-wendler-program
```

### Usage Jim Wendler Program

```TypeScript
// Original Jim Wendler Program with 315 punds as max lift weight
import { JimWendlerProgram } from 'jim-wendler-program'

const myMaxWeight = 315; // kg for example, but you can use pounds or anything else
const myProgram = new JimWendlerProgram(myMaxWeight);

// For more information see this article:
// https://www.t-nation.com/workouts/5-3-1-how-to-build-pure-strength/
// console.log
  [
    [
      { weight: 185, reps: '5' },
      { weight: 215, reps: '5' },
      { weight: 240, reps: '5+' }
    ],
    [
      { weight: 200, reps: '3' },
      { weight: 230, reps: '3' },
      { weight: 255, reps: '3+' }
    ],
    [
      { weight: 215, reps: '5' },
      { weight: 240, reps: '3' },
      { weight: 270, reps: '1+' }
    ],
    [
      { weight: 115, reps: '5' },
      { weight: 145, reps: '5' },
      { weight: 170, reps: '5+' }
    ]
  ]

```

## Create your own Program

```bash
git clone https://github.com/ts-ign0re/jim-wendler-program.git
```

```TypeScript

import { defaultProgram } from 'jim-wendler-program'

// load - load in percentage of max lift weight for every set
// load.length = number of sets
// reps - number of reps per every set
// reps.length should be the same as load.length
const week1 = { load: [0.65, 0.75, 0.85], reps: ['5', '5', '5+'] };
const week2 = { load: [0.7, 0.8, 0.9], reps: ['3', '3', '3+'] };
const week3 = { load: [0.75, 0.85, 0.95], reps: ['5', '3', '1+'] };
const week4 = { load: [0.4, 0.5, 0.6], reps: ['5', '5', '5+'] };

const myCustomProgramScheme = [week1, week2, week3, week4];
const myLiftWeight = 100;
const myCustomProgram = defaultProgram(myLiftWeight, myCustomProgramScheme);

// console.log
[
  [
    { weight: 65, reps: '5' },
    { weight: 75, reps: '5' },
    { weight: 85, reps: '5+' }
  ],
  [
    { weight: 70, reps: '3' },
    { weight: 80, reps: '3' },
    { weight: 90, reps: '3+' }
  ],
  [
    { weight: 75, reps: '5' },
    { weight: 85, reps: '3' },
    { weight: 95, reps: '1+' }
  ],
  [
    { weight: 40, reps: '5' },
    { weight: 50, reps: '5' },
    { weight: 60, reps: '5+' }
  ]
]
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ts-ign0re/jim-wendler-program/issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/tronin">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=tronin&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2022 [Tronin Denis](https://github.com/ts-ign0re).<br />
This project is [MIT](LICENSE) licensed.
