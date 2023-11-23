function myFunction() {
  assert(true);
  assertTrue(true);
  assertFalse(false);
  assertEqual(1,1);
  assertNotEqual(1,2);

  console.log(gastest.result());
  var tc = gastest.getResultCase();
  console.log(tc.cases[1].name);
}