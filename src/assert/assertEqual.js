// Title:assert
// Author:@Tsukimori_Izumi on X(Twitter)
// ----------------------------------------
// Start :2023-11-18

function assertEqualInternal_(a, b) {

  //　判定
  var decision_ = decisionAssertEqual_(a,b);

  //出力
  var gasTestCase_ = new GasTestCase();
  gasTestCase_.setResult_(decision_);
  return gasTestCase_;
}

function decisionAssertEqual_(a, b) {

  var result_ = false;

  if (a == b) {
    result_ = true;
  }

  return result_;

}