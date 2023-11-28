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
Google Aplications Script(Gas)のテストユニット<br/>
結果はコンソールまたは返り値で確認します

## ContentThisREADME
- [クイックスタート](#クイックスタート)
- [実装テスト関数](#実装テスト関数)
- [結果の確認方法](#結果の確認方法)
- [結果の変数出力](#結果の変数出力)
- [テスト実行サンプル](#テスト実行サンプル)
- [グーグルアプリスクリプトID](#グーグルアプリスクリプトID)
- [サンプルコード](#サンプルコード)
- [必要環境](#必要環境)
- [ご自分のプロジェクトで使うために](#ご自分のプロジェクトで使うために)
- [Lライセンス](#ライセンス)
- [著作権](#著作権)

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

1. <インストール> 以下の**グーグルスクリプトID**をコピーしてください．:
   
<table>
  <tr>
    <td align="center">
        1op6cpC3wu8VjkJKOKctenzmoTbWrxA3Ldlij7A_rkptpOVvD7Zxhx_9e
    </td>
  </tr>
</table>

2. <インストール> ご自分のプロジェクトの左ペイン，ライブラリの「＋」を押し，「ライブラリの追加」に，スクリプトIDをペーストしてください．
3. <実行> 以下のサンプルコードをコピーしてください．:

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
 
5. <実行> ご自分のプロジェクトの関数，ここではコード.gsの"my myfunction"にサンプルコードをペーストしてください．
7. <Execute> 「実行する関数」に貼り付けた関数"myfunction"が選択されていることを確認して実行ボタンを押してください．

![image](https://github.com/Tsukimori-Izumi/GasTest/assets/39443516/2fa97406-3c4a-46de-8979-7a74c29930f6)

8. 結果がコンソールに出力されます．

![image](https://github.com/Tsukimori-Izumi/GasTest/assets/39443516/d2d3e35e-4bfe-4b90-b710-b036b06bfc86)


### グーグルアプリスクリプトID
<table>
  <tr>
    <td align="center">
        1op6cpC3wu8VjkJKOKctenzmoTbWrxA3Ldlij7A_rkptpOVvD7Zxhx_9e
    </td>
  </tr>
</table>

### サンプルコード
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

## 必要環境
- (Google Application Script 実行環境)[https://script.google.com/home]

## ご自分のプロジェクトで使うために
1. Import Gastest on your project
2. type "assert~~" method on your code

## ライセンス
Apache license 2.0

## 著作権
Guard object of logger for debugging.

Copyright (c) 2023 TSUKIMORI Izumi (https://twitter.com/Tsukimori_Izumi)
