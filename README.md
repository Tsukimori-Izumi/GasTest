
<p align="center">
    <img src="https://github.com/Tsukimori-Izumi/GasTest/assets/39443516/e216a86f-d2b1-4633-847b-1e19de6ba316" alt="GasTest" height="320" width="320"/>
</p>
<p align="center">
<a href='https://github.com/google/clasp'>
    <img src='https://img.shields.io/badge/built%20with-clasp-4285f4.svg'>
</a>
</p>


## Sample Code
```javascript
    function myFunction() {
      GasTest.assert(true,'Hello GasTest');
      GasTest.assert(true);
      GasTest.assertTrue(true);
      GasTest.assertFalse(false);
      GasTest.assertEqual(1,1);
      GasTest.assertNotEqual(1,2);
    }
```
# name

image or gif

## Overview

## Requirement

## Usage

## Features

## Reference

## Author

[twitter](https://twitter.com/Kotabrog)

## Licence

[MIT](https://......)

```mermaid
---

---
sequenceDiagram
    box On Your Project
        actor User
        participant Code as Code
    end
    
    box GasTest
        participant G as GasTest
        participant R as GasTestRunner
        participant S as GasTestSuilte 
        participant C as GasTestCase
        participant A as Function = assert
    end

    User->>Code:Run
    Code->>G:Call GasTest.assert
    G->>R:Call assert
    R->>A:Call
    A->>+C:Create
    A->>A:decision
    A->>C:setResult
    C-->>-A:return Case
    A->>R:return Case
    R->>S:Add Case
    R->>S:show Log
    S-->>R:return log
    R->>User:Console.log
```

これで含むはわかる？
alert(rabbit instanceof Animal); // true
