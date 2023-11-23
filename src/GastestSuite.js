// Title:GasTestSuite
// Author:@Tsukimori_Izumi on X(Twitter)
// ----------------------------------------
// Start :2023-11-18

class GasTestSuite {
  constructor() {
    this.cases = [];
    this.numCase_ = 0;
  }
  
  //--------
  //テストスーツにケースを追加する．
  //--------
  addCase_(testCase){
    this.numCase_++;
    let index = this.numCase_;
    this.cases[ index ] = testCase;
    testCase.index = index;
  }
}
var gasTestSuite_ = new GasTestSuite();