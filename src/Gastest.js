// Title:Gastest
// Author:@Tsukimori_Izumi on X(Twitter)
// ----------------------------------------
// Gastest.assert(a)
// Gastest.assert(a,name)
// Gastest.assertTrue(a)
// Gastest.assertTrue(a,name)
// Gastest.assertFalse(a)
// Gastest.assertFalse(a,name)
// Gastest.assertEqual(a,b)
// Gastest.assertEqual(a,b,name)
// Gastest.assertNotEqual(a,b)
// Gastest.assertNotEqual(a,b,name)

var gasTestRunner_ = new GasTestRunner();

function assert(a){
  assert_(a);
}
// ----------------------------------------
// Private Method
// ----------------------------------------

function assert_(a){
    gasTestRunner_.assert_(a);
}
