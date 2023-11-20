// Title:assert
// Author:@Tsukimori_Izumi on X(Twitter)
// ----------------------------------------
// Start :2023-11-18

function assertNotEqualInternal_(a, b) {

  //　判定
  var decision_ = decisionAssertNotEqual_(a,b);

  //出力
  var gasTestCase_ = new GasTestCase();
  gasTestCase_.setResult_(decision_);
  return gasTestCase_;
}

function decisionAssertNotEqual_(a, b) {

  var result_ = false;

  if (a != b) {
    result_ = true;
  }

  return result_;

}