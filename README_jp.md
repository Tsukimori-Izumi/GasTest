<p align="center">
    <img src="https://github.com/Tsukimori-Izumi/GasTest/assets/39443516/bfe38d05-3579-4213-a3b6-1643c306695d" alt="GasTest" height="320" width="320"/>
</p>
<p align="center">
<a href='https://github.com/google/clasp'>
    <img src='https://img.shields.io/badge/built%20with-clasp-4285f4.svg'>
</a>
<br/>
自信が持てますように<br/>
<a href="/README.md">English</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="/README_jp.md">Japanese</a><br/>
</p>
 
## 概要
Google Aplications Script(Gas)のテストユニット
結果はコンソールで確認します

## ContentThisREADME
- [クイックスタート](#クイックスタート)
- [実装テスト関数](#実装テスト関数)
- [結果の確認方法](#結果の確認方法)
- [結果の変数出力](#結果の変数出力)
- [テスト実行サンプル](#テスト実行サンプル)
- [Google Application Script ID](#GoogleApplicationScriptID)
- [Sample Code](#SampleCode)
- [Requirement](#Requirement)
- [Usage on your project](#UsageOnYourProject)
- [License](#License)
- [Copyright](Copyright)

## クイックスタート
<p align="center">
<a href='https://www.youtube.com/watch?v=13LmUtWeyTo' target="_blank">
    <img src='https://img.youtube.com/vi/13LmUtWeyTo/0.jpg'>
</a>
</p>

## 実装テスト関数
| 関数 | 確認内容 |
| ------------- | ------------- |
| assert( a )  | a == true  |
| assert( a ,testName )  | a == true  |
| assertTrue( a )  | a == true  |
| assertTrue( a ,TestName)  | a == true  |
| assertFalse( a )  | a == false  |
| assertFalse( a , testName )  | a == false  |
| assertEqual( a , b )  | a == b  |
| assertEqual( a , b , testName )  | a == b  |
| assertNotEqual( a , b )  | a != b  |
| assertNotEqual( a , b , testName )  | a != b  |

## 結果の確認方法
![result](https://github.com/Tsukimori-Izumi/GasTest/assets/39443516/18e7ddd4-675c-4cf0-9d2d-41670b4356dc)

## 結果の変数出力
| メソッド | 概要 |返り型|
| ------------- | ------------- | ------------- |
| gastest.result() | コンソールに出力した文字列 | string |
| gastest.getResultCase() | 個別のテストケース | GasTestCase |

|GasTestCase|member name|
| ------------- | ------------- |
|string|.name|
|integer|.index|
|bool|.result|
|float|.duration|

## テスト実行サンプル

1. <Install> Copy the **Google Application Script(Gas) ID** follow:
   
<table>
  <tr>
    <td align="center">
        1op6cpC3wu8VjkJKOKctenzmoTbWrxA3Ldlij7A_rkptpOVvD7Zxhx_9e
    </td>
  </tr>
</table>

2. <Install> Paste ID on "Add Library" on Gas project.
3. <Execute> Copy the **Sample Code** follow:

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
 
5. <Execute> Paste code "my myfunction" on code.gs at your project
6. <Execute> Excute "myfunction"

![image](https://github.com/Tsukimori-Izumi/GasTest/assets/39443516/2fa97406-3c4a-46de-8979-7a74c29930f6)

8. The test results are showed in the console.

![image](https://github.com/Tsukimori-Izumi/GasTest/assets/39443516/d2d3e35e-4bfe-4b90-b710-b036b06bfc86)


### GoogleApplicationScriptID
<table>
  <tr>
    <td align="center">
        1op6cpC3wu8VjkJKOKctenzmoTbWrxA3Ldlij7A_rkptpOVvD7Zxhx_9e
    </td>
  </tr>
</table>

### SampleCode
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
## 

## Requirement
- Google Application Script Environment

## UsageOnYourProject
1. Import Gastest on your project
2. type "assert~~" method on your code

## License
Apache license 2.0

## Copyright
Guard object of logger for debugging.

Copyright (c) 2023 TSUKIMORI Izumi (https://twitter.com/Tsukimori_Izumi)
