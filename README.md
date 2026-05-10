# Jest Minimal

A minimal Node.js project demonstrating basic unit testing using Jest.

---

## Features

- Simple math utility functions
- Unit testing with Jest
- Usage of:
  - `beforeEach`
  - `afterEach`
  - `describe`
  - `it`
  - `expect`
- Error handling test with `toThrow`

---

## Project Structure

```text
jest-minimal/
│
├── src/
│   └── math.js
│
├── test/
│   └── math.test.js
│
├── jest.config.js
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd jest-minimal
```

Install dependencies:

```bash
npm install
```

---

## Running Tests

Run all tests:

```bash
npm test
```

Or directly using Jest:

```bash
npx jest
```

---


## Test Example

### `test/math.test.js`

```js
const { add, divide } = require('../src/math');

describe('Math utilities', () => {

    describe('add()', () => {
        it('should add two numbers correctly', () => {
            expect(add(10, 0)).toBe(10);
        });
    });

    describe('divide()', () => {
        it('should divide two numbers correctly', () => {
            expect(divide(10, 2)).toBe(5);
        });

        it('should throw error when dividing by zero', () => {
            expect(() => divide(10, 0)).toThrow('Division by zero');
        });
    });

});
```

---

## Expected Output

```bash
PASS  test/math.test.js
  Math utilities
    add()
      ✓ should add two numbers correctly
    divide()
      ✓ should divide two numbers correctly
      ✓ should throw error when dividing by zero
```

---

## Technologies Used

- Node.js
- Jest

---

## License

ISC