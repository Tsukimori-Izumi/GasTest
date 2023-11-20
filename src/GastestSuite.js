// Title:GasTestSuite
// Author:@Tsukimori_Izumi on X(Twitter)
// ----------------------------------------
// Start :2023-11-18

class GasTestSuite {
  constructor() {
    this.cases_ = [];
    this.numCase_ = 0;
  }
  
  //--------
  //テストスーツにケースを追加する．
  //--------
  addCase_(testCase){
    this.numCase_++;
    let index = this.numCase_;
    this.cases_[ index ] = testCase;
    testCase.index_ = index;
  }
}
var gasTestSuite_ = new GasTestSuite();