<<<<<<< HEAD
class TestRunner {
    constructor() {
        this.strLog = "";

    }
    assert(a){
        console.log('call Assert');
    }
}
=======
// Title:GasTest
// Author:@Tsukimori_Izumi on X(Twitter)
// ----------------------------------------
// Start :2023-11-18

class GasTestRunner {
  constructor() {
    this.strLog_ = "";
    this.tick_ = new Date;
  }

  // ----------------------------------------
  // Private Method
  // ----------------------------------------
  assert_(a, name) {
    this.fetchTickFirst_; //　初回は開始時刻を取得
    //初期化設定が入るなら変更するのがよい
    var testCase = assertInternal_(a); // テストして結果を取得
    testCase.duration_ = new Date() - this.tick_; // 演算時間計算
    testCase.name_ = name;

    gasTestSuite_.addCase_(testCase); // スーツにケースを追加
    this.addLog_();
    this.showLogConsole_();
    this.tick_ = new Date();
  }
  //---
  assertEqual_(a, b, name) {
    this.fetchTickFirst_; //　初回は開始時刻を取得
    //初期化設定が入るなら変更するのがよい
    var testCase = assertEqualInternal_(a,b); // テストして結果を取得
    testCase.duration_ = new Date() - this.tick_; // 演算時間計算
    testCase.name_ = name;

    gasTestSuite_.addCase_(testCase); // スーツにケースを追加
    this.addLog_();
    this.showLogConsole_();
    this.tick_ = new Date();
  }
    //---
  assertNotEqual_(a, b, name) {
    this.fetchTickFirst_; //　初回は開始時刻を取得
    //初期化設定が入るなら変更するのがよい
    var testCase = assertNotEqualInternal_(a,b); // テストして結果を取得
    testCase.duration_ = new Date() - this.tick_; // 演算時間計算
    testCase.name_ = name;

    gasTestSuite_.addCase_(testCase); // スーツにケースを追加
    this.addLog_();
    this.showLogConsole_();
    this.tick_ = new Date();
  }

  //--------
  //時刻取得
  //--------
  fetchTick_() {
    this.tick_ = new Date();
  }
  fetchTickFirst_() {
    if (this.tick_ == 0) {
      fetchTick_;
    }
  }
  //--------
  //ログを表示する
  //--------
  showLogConsole_() {
    console.log(this.strLog_);
  }

  //--------
  //ログに最新のテスト結果を格納する
  //--------
  addLog_() {
    this.addLogHeader_();

    var numCase = gasTestSuite_.numCase_;//ケースの数
    var thisCase = gasTestSuite_.cases_[numCase]; //最大ケース（現在のケース）を取り出す

    var decision = thisCase.result_; //結果
    var duration = thisCase.duration_; //実行時間
    var name = thisCase.name_; //名前

    var strStatus = null; //　結果の文字列
    var numGood = 0; //NGの数
    var numNG = 0; //Goodの数

    //結果の文字列化
    if (decision) {
      strStatus = "✅Good✅";
      numGood++;

    } else {
      strStatus = "🛑Nogood";
      numGood++;
      this.hasNG = true;
    }
    this.strLog_ += numCase + '\t' + name + '\t' + strStatus + '\t' + new Date(duration).getTime() + '\t';
    this.strLog_ += numGood + '-Good,' + numNG + '-Nogood' + '\n';
  }
  //--------
  //初めてのログであれば，ヘッダを追加する
  //--------
  addLogHeader_() {
    var numCase_ = gasTestSuite_.numCase_;
    if (numCase_ == 1) {
      let date = Utilities.formatDate(this.tick_, "JST", "yyyy-MM-dd HH:mm:ss (zzzz)");
      this.strLog_ += 'UnitTest Summary:\t' + date + '\n\n';
      this.strLog_ += 'Number\tName of case\tPassed\t\tmSec\tTotals\n';
      this.strLog_ += '-------------------------------------------------------------------\n';
    }
  }
}
var gasTestRunner_ = new GasTestRunner();
>>>>>>> develop/GasTest/feature
