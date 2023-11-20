# GasTest
## For you to be confident is intended
あなたが自信を持つことが出来るように
[![clasp](https://img.shields.io/badge/built%20with-clasp-4285f4.svg)](https://github.com/google/clasp)
Google Apps Scriptのためのユニットテストフレームワーク．

## イントロ

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