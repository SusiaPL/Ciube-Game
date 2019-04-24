gdjs.munuCode = {};
gdjs.munuCode.GDplayerObjects1= [];
gdjs.munuCode.GDplayerObjects2= [];
gdjs.munuCode.GDkostkaObjects1= [];
gdjs.munuCode.GDkostkaObjects2= [];
gdjs.munuCode.GDkostka2Objects1= [];
gdjs.munuCode.GDkostka2Objects2= [];
gdjs.munuCode.GDnazwaObjects1= [];
gdjs.munuCode.GDnazwaObjects2= [];
gdjs.munuCode.GDinfoObjects1= [];
gdjs.munuCode.GDinfoObjects2= [];

gdjs.munuCode.conditionTrue_0 = {val:false};
gdjs.munuCode.condition0IsTrue_0 = {val:false};
gdjs.munuCode.condition1IsTrue_0 = {val:false};


gdjs.munuCode.eventsList0xaff48 = function(runtimeScene) {

{


gdjs.munuCode.condition0IsTrue_0.val = false;
{
gdjs.munuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.munuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GRA!", false);
}}

}


}; //End of gdjs.munuCode.eventsList0xaff48


gdjs.munuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.munuCode.GDplayerObjects1.length = 0;
gdjs.munuCode.GDplayerObjects2.length = 0;
gdjs.munuCode.GDkostkaObjects1.length = 0;
gdjs.munuCode.GDkostkaObjects2.length = 0;
gdjs.munuCode.GDkostka2Objects1.length = 0;
gdjs.munuCode.GDkostka2Objects2.length = 0;
gdjs.munuCode.GDnazwaObjects1.length = 0;
gdjs.munuCode.GDnazwaObjects2.length = 0;
gdjs.munuCode.GDinfoObjects1.length = 0;
gdjs.munuCode.GDinfoObjects2.length = 0;

gdjs.munuCode.eventsList0xaff48(runtimeScene);
return;
}
gdjs['munuCode'] = gdjs.munuCode;
