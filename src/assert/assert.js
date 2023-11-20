// Title:assert
// Author:@Tsukimori_Izumi on X(Twitter)
// ----------------------------------------
// Start :2023-11-18

function assertInternal_( a ){
  
  //　判定
  var decision_ = decisionAssert_(a);

  //出力
  var gasTestCase_ = new GasTestCase();
  gasTestCase_.setResult_(decision_);
  return gasTestCase_;
}

function decisionAssert_(a){

  var result_ = false;

  if( a ){
    result_ = true;
  }

  return result_;

}