// Title:GasTest
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
// ----------------------------------------
// Start :2023-11-18

<<<<<<< HEAD
var testRunner = new TestRunner();

function assert(a){
    testRunner.assert(a);
}
function assert(a,name){

=======
// ----------------------------------------
//  Logic Function
// ----------------------------------------
function assert(a,name="assert\t"){
  assert_(a,name);
}

function assertTrue(a,name="assertTrue"){
  assert_(a,name);
}

function assertFalse(a,name="assertFalse"){
  assert_(!a,name);
}

function assertEqual(a,b,name="assertEqual"){
  assertEqual_(a,b,name);
}

function assertNotEqual(a,b,name="assertNotEqual"){
  assertNotEqual_(a,b,name);
}


// ----------------------------------------
// Private Method
// ----------------------------------------
function assert_(a,name){
    gasTestRunner_.assert_(a,name);
}

function assertEqual_(a,b,name){
    gasTestRunner_.assertEqual_(a,b,name);
>>>>>>> develop/GasTest/feature
}
function assertNotEqual_(a,b,name){
    gasTestRunner_.assertNotEqual_(a,b,name);
}