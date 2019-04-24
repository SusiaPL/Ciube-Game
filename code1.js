gdjs.GRA_33Code = {};
gdjs.GRA_33Code.GDplayerObjects1= [];
gdjs.GRA_33Code.GDplayerObjects2= [];
gdjs.GRA_33Code.GDplayerObjects3= [];
gdjs.GRA_33Code.GDkostkaObjects1= [];
gdjs.GRA_33Code.GDkostkaObjects2= [];
gdjs.GRA_33Code.GDkostkaObjects3= [];
gdjs.GRA_33Code.GDkostka2Objects1= [];
gdjs.GRA_33Code.GDkostka2Objects2= [];
gdjs.GRA_33Code.GDkostka2Objects3= [];
gdjs.GRA_33Code.GDplayer2Objects1= [];
gdjs.GRA_33Code.GDplayer2Objects2= [];
gdjs.GRA_33Code.GDplayer2Objects3= [];
gdjs.GRA_33Code.GDpunktyObjects1= [];
gdjs.GRA_33Code.GDpunktyObjects2= [];
gdjs.GRA_33Code.GDpunktyObjects3= [];

gdjs.GRA_33Code.conditionTrue_0 = {val:false};
gdjs.GRA_33Code.condition0IsTrue_0 = {val:false};
gdjs.GRA_33Code.condition1IsTrue_0 = {val:false};
gdjs.GRA_33Code.condition2IsTrue_0 = {val:false};


gdjs.GRA_33Code.mapOfGDgdjs_46GRA_9533Code_46GDkostkaObjects1Objects = Hashtable.newFrom({"kostka": gdjs.GRA_33Code.GDkostkaObjects1});gdjs.GRA_33Code.mapOfGDgdjs_46GRA_9533Code_46GDplayer2Objects1Objects = Hashtable.newFrom({"player2": gdjs.GRA_33Code.GDplayer2Objects1});gdjs.GRA_33Code.mapOfGDgdjs_46GRA_9533Code_46GDkostkaObjects1Objects = Hashtable.newFrom({"kostka": gdjs.GRA_33Code.GDkostkaObjects1});gdjs.GRA_33Code.eventsList0x659618 = function(runtimeScene) {

{

gdjs.GRA_33Code.GDkostkaObjects2.createFrom(gdjs.GRA_33Code.GDkostkaObjects1);

gdjs.GRA_33Code.GDplayer2Objects2.createFrom(gdjs.GRA_33Code.GDplayer2Objects1);


gdjs.GRA_33Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GRA_33Code.GDplayer2Objects2.length;i<l;++i) {
    if ( gdjs.GRA_33Code.GDplayer2Objects2[i].getX() == (( gdjs.GRA_33Code.GDkostkaObjects2.length === 0 ) ? 0 :gdjs.GRA_33Code.GDkostkaObjects2[0].getX())+100 ) {
        gdjs.GRA_33Code.condition0IsTrue_0.val = true;
        gdjs.GRA_33Code.GDplayer2Objects2[k] = gdjs.GRA_33Code.GDplayer2Objects2[i];
        ++k;
    }
}
gdjs.GRA_33Code.GDplayer2Objects2.length = k;}if (gdjs.GRA_33Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GRA_33Code.GDkostkaObjects2 */
{for(var i = 0, len = gdjs.GRA_33Code.GDkostkaObjects2.length ;i < len;++i) {
    gdjs.GRA_33Code.GDkostkaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("punkty").add(1);
}}

}


{

gdjs.GRA_33Code.GDkostkaObjects2.createFrom(gdjs.GRA_33Code.GDkostkaObjects1);

gdjs.GRA_33Code.GDplayer2Objects2.createFrom(gdjs.GRA_33Code.GDplayer2Objects1);


gdjs.GRA_33Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GRA_33Code.GDkostkaObjects2.length;i<l;++i) {
    if ( gdjs.GRA_33Code.GDkostkaObjects2[i].getX() == (( gdjs.GRA_33Code.GDplayer2Objects2.length === 0 ) ? 0 :gdjs.GRA_33Code.GDplayer2Objects2[0].getX())+100 ) {
        gdjs.GRA_33Code.condition0IsTrue_0.val = true;
        gdjs.GRA_33Code.GDkostkaObjects2[k] = gdjs.GRA_33Code.GDkostkaObjects2[i];
        ++k;
    }
}
gdjs.GRA_33Code.GDkostkaObjects2.length = k;}if (gdjs.GRA_33Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GRA_33Code.GDkostkaObjects2 */
{for(var i = 0, len = gdjs.GRA_33Code.GDkostkaObjects2.length ;i < len;++i) {
    gdjs.GRA_33Code.GDkostkaObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("punkty").add(1);
}}

}


{

/* Reuse gdjs.GRA_33Code.GDkostkaObjects1 */
/* Reuse gdjs.GRA_33Code.GDplayer2Objects1 */

gdjs.GRA_33Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GRA_33Code.GDplayer2Objects1.length;i<l;++i) {
    if ( gdjs.GRA_33Code.GDplayer2Objects1[i].getY() == (( gdjs.GRA_33Code.GDkostkaObjects1.length === 0 ) ? 0 :gdjs.GRA_33Code.GDkostkaObjects1[0].getY())+100 ) {
        gdjs.GRA_33Code.condition0IsTrue_0.val = true;
        gdjs.GRA_33Code.GDplayer2Objects1[k] = gdjs.GRA_33Code.GDplayer2Objects1[i];
        ++k;
    }
}
gdjs.GRA_33Code.GDplayer2Objects1.length = k;}if (gdjs.GRA_33Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "munu", false);
}}

}


}; //End of gdjs.GRA_33Code.eventsList0x659618
gdjs.GRA_33Code.mapOfGDgdjs_46GRA_9533Code_46GDkostka2Objects1Objects = Hashtable.newFrom({"kostka2": gdjs.GRA_33Code.GDkostka2Objects1});gdjs.GRA_33Code.eventsList0x681558 = function(runtimeScene) {

{


gdjs.GRA_33Code.condition0IsTrue_0.val = false;
{
gdjs.GRA_33Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 4, "tworzyciel2");
}if (gdjs.GRA_33Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GRA_33Code.GDkostka2Objects1 */
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GRA_33Code.mapOfGDgdjs_46GRA_9533Code_46GDkostka2Objects1Objects, gdjs.random(400), 800, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tworzyciel2");
}}

}


}; //End of gdjs.GRA_33Code.eventsList0x681558
gdjs.GRA_33Code.mapOfGDgdjs_46GRA_9533Code_46GDplayer2Objects1Objects = Hashtable.newFrom({"player2": gdjs.GRA_33Code.GDplayer2Objects1});gdjs.GRA_33Code.mapOfGDgdjs_46GRA_9533Code_46GDkostka2Objects1Objects = Hashtable.newFrom({"kostka2": gdjs.GRA_33Code.GDkostka2Objects1});gdjs.GRA_33Code.eventsList0x682890 = function(runtimeScene) {

{

gdjs.GRA_33Code.GDkostka2Objects2.createFrom(gdjs.GRA_33Code.GDkostka2Objects1);

gdjs.GRA_33Code.GDplayer2Objects2.createFrom(gdjs.GRA_33Code.GDplayer2Objects1);


gdjs.GRA_33Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GRA_33Code.GDplayer2Objects2.length;i<l;++i) {
    if ( gdjs.GRA_33Code.GDplayer2Objects2[i].getX() == (( gdjs.GRA_33Code.GDkostka2Objects2.length === 0 ) ? 0 :gdjs.GRA_33Code.GDkostka2Objects2[0].getX())+100 ) {
        gdjs.GRA_33Code.condition0IsTrue_0.val = true;
        gdjs.GRA_33Code.GDplayer2Objects2[k] = gdjs.GRA_33Code.GDplayer2Objects2[i];
        ++k;
    }
}
gdjs.GRA_33Code.GDplayer2Objects2.length = k;}if (gdjs.GRA_33Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GRA_33Code.GDkostka2Objects2 */
{for(var i = 0, len = gdjs.GRA_33Code.GDkostka2Objects2.length ;i < len;++i) {
    gdjs.GRA_33Code.GDkostka2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("punkty").add(1);
}}

}


{

gdjs.GRA_33Code.GDkostka2Objects2.createFrom(gdjs.GRA_33Code.GDkostka2Objects1);

gdjs.GRA_33Code.GDplayer2Objects2.createFrom(gdjs.GRA_33Code.GDplayer2Objects1);


gdjs.GRA_33Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GRA_33Code.GDkostka2Objects2.length;i<l;++i) {
    if ( gdjs.GRA_33Code.GDkostka2Objects2[i].getX() == (( gdjs.GRA_33Code.GDplayer2Objects2.length === 0 ) ? 0 :gdjs.GRA_33Code.GDplayer2Objects2[0].getX())+100 ) {
        gdjs.GRA_33Code.condition0IsTrue_0.val = true;
        gdjs.GRA_33Code.GDkostka2Objects2[k] = gdjs.GRA_33Code.GDkostka2Objects2[i];
        ++k;
    }
}
gdjs.GRA_33Code.GDkostka2Objects2.length = k;}if (gdjs.GRA_33Code.condition0IsTrue_0.val) {
/* Reuse gdjs.GRA_33Code.GDkostka2Objects2 */
{for(var i = 0, len = gdjs.GRA_33Code.GDkostka2Objects2.length ;i < len;++i) {
    gdjs.GRA_33Code.GDkostka2Objects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("punkty").add(1);
}}

}


{

/* Reuse gdjs.GRA_33Code.GDkostka2Objects1 */
/* Reuse gdjs.GRA_33Code.GDplayer2Objects1 */

gdjs.GRA_33Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GRA_33Code.GDplayer2Objects1.length;i<l;++i) {
    if ( gdjs.GRA_33Code.GDplayer2Objects1[i].getY() == (( gdjs.GRA_33Code.GDkostka2Objects1.length === 0 ) ? 0 :gdjs.GRA_33Code.GDkostka2Objects1[0].getY())-100 ) {
        gdjs.GRA_33Code.condition0IsTrue_0.val = true;
        gdjs.GRA_33Code.GDplayer2Objects1[k] = gdjs.GRA_33Code.GDplayer2Objects1[i];
        ++k;
    }
}
gdjs.GRA_33Code.GDplayer2Objects1.length = k;}if (gdjs.GRA_33Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "munu", false);
}}

}


}; //End of gdjs.GRA_33Code.eventsList0x682890
gdjs.GRA_33Code.eventsList0xaff48 = function(runtimeScene) {

{


gdjs.GRA_33Code.condition0IsTrue_0.val = false;
{
gdjs.GRA_33Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GRA_33Code.condition0IsTrue_0.val) {
gdjs.GRA_33Code.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));
gdjs.GRA_33Code.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));
gdjs.GRA_33Code.GDplayer2Objects1.createFrom(runtimeScene.getObjects("player2"));
{for(var i = 0, len = gdjs.GRA_33Code.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.GRA_33Code.GDplayer2Objects1[i].setPosition(250,400);
}
}{for(var i = 0, len = gdjs.GRA_33Code.GDkostkaObjects1.length ;i < len;++i) {
    gdjs.GRA_33Code.GDkostkaObjects1[i].setPosition(gdjs.random(400),0);
}
}{for(var i = 0, len = gdjs.GRA_33Code.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.GRA_33Code.GDkostka2Objects1[i].setPosition(gdjs.random(400),750);
}
}{for(var i = 0, len = gdjs.GRA_33Code.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.GRA_33Code.GDkostka2Objects1[i].hide();
}
}}

}


{

gdjs.GRA_33Code.GDplayer2Objects1.createFrom(runtimeScene.getObjects("player2"));

gdjs.GRA_33Code.condition0IsTrue_0.val = false;
gdjs.GRA_33Code.condition1IsTrue_0.val = false;
{
gdjs.GRA_33Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.GRA_33Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GRA_33Code.GDplayer2Objects1.length;i<l;++i) {
    if ( gdjs.GRA_33Code.GDplayer2Objects1[i].getX() >= 0 ) {
        gdjs.GRA_33Code.condition1IsTrue_0.val = true;
        gdjs.GRA_33Code.GDplayer2Objects1[k] = gdjs.GRA_33Code.GDplayer2Objects1[i];
        ++k;
    }
}
gdjs.GRA_33Code.GDplayer2Objects1.length = k;}}
if (gdjs.GRA_33Code.condition1IsTrue_0.val) {
/* Reuse gdjs.GRA_33Code.GDplayer2Objects1 */
{for(var i = 0, len = gdjs.GRA_33Code.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.GRA_33Code.GDplayer2Objects1[i].addPolarForce(180, 500, 0);
}
}}

}


{

gdjs.GRA_33Code.GDplayer2Objects1.createFrom(runtimeScene.getObjects("player2"));

gdjs.GRA_33Code.condition0IsTrue_0.val = false;
gdjs.GRA_33Code.condition1IsTrue_0.val = false;
{
gdjs.GRA_33Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.GRA_33Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GRA_33Code.GDplayer2Objects1.length;i<l;++i) {
    if ( gdjs.GRA_33Code.GDplayer2Objects1[i].getX() <= 400 ) {
        gdjs.GRA_33Code.condition1IsTrue_0.val = true;
        gdjs.GRA_33Code.GDplayer2Objects1[k] = gdjs.GRA_33Code.GDplayer2Objects1[i];
        ++k;
    }
}
gdjs.GRA_33Code.GDplayer2Objects1.length = k;}}
if (gdjs.GRA_33Code.condition1IsTrue_0.val) {
/* Reuse gdjs.GRA_33Code.GDplayer2Objects1 */
{for(var i = 0, len = gdjs.GRA_33Code.GDplayer2Objects1.length ;i < len;++i) {
    gdjs.GRA_33Code.GDplayer2Objects1[i].addPolarForce(0, 500, 0);
}
}}

}


{


{
gdjs.GRA_33Code.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));
{for(var i = 0, len = gdjs.GRA_33Code.GDkostkaObjects1.length ;i < len;++i) {
    gdjs.GRA_33Code.GDkostkaObjects1[i].addPolarForce(90, 200, 0);
}
}}

}


{


gdjs.GRA_33Code.condition0IsTrue_0.val = false;
{
gdjs.GRA_33Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "tworzyciel");
}if (gdjs.GRA_33Code.condition0IsTrue_0.val) {
gdjs.GRA_33Code.GDkostkaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GRA_33Code.mapOfGDgdjs_46GRA_9533Code_46GDkostkaObjects1Objects, gdjs.random(400), 0, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "tworzyciel");
}}

}


{

gdjs.GRA_33Code.GDkostkaObjects1.createFrom(runtimeScene.getObjects("kostka"));
gdjs.GRA_33Code.GDplayer2Objects1.createFrom(runtimeScene.getObjects("player2"));

gdjs.GRA_33Code.condition0IsTrue_0.val = false;
{
gdjs.GRA_33Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GRA_33Code.mapOfGDgdjs_46GRA_9533Code_46GDplayer2Objects1Objects, gdjs.GRA_33Code.mapOfGDgdjs_46GRA_9533Code_46GDkostkaObjects1Objects, false, runtimeScene);
}if (gdjs.GRA_33Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GRA_33Code.eventsList0x659618(runtimeScene);} //End of subevents
}

}


{


{
gdjs.GRA_33Code.GDpunktyObjects1.createFrom(runtimeScene.getObjects("punkty"));
{for(var i = 0, len = gdjs.GRA_33Code.GDpunktyObjects1.length ;i < len;++i) {
    gdjs.GRA_33Code.GDpunktyObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("punkty"))));
}
}}

}


{


gdjs.GRA_33Code.condition0IsTrue_0.val = false;
{
gdjs.GRA_33Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("punkty")) >= 3;
}if (gdjs.GRA_33Code.condition0IsTrue_0.val) {
gdjs.GRA_33Code.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));
{for(var i = 0, len = gdjs.GRA_33Code.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.GRA_33Code.GDkostka2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GRA_33Code.GDkostka2Objects1.length ;i < len;++i) {
    gdjs.GRA_33Code.GDkostka2Objects1[i].addPolarForce(270, 200, 0);
}
}
{ //Subevents
gdjs.GRA_33Code.eventsList0x681558(runtimeScene);} //End of subevents
}

}


{

gdjs.GRA_33Code.GDkostka2Objects1.createFrom(runtimeScene.getObjects("kostka2"));
gdjs.GRA_33Code.GDplayer2Objects1.createFrom(runtimeScene.getObjects("player2"));

gdjs.GRA_33Code.condition0IsTrue_0.val = false;
{
gdjs.GRA_33Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GRA_33Code.mapOfGDgdjs_46GRA_9533Code_46GDplayer2Objects1Objects, gdjs.GRA_33Code.mapOfGDgdjs_46GRA_9533Code_46GDkostka2Objects1Objects, false, runtimeScene);
}if (gdjs.GRA_33Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GRA_33Code.eventsList0x682890(runtimeScene);} //End of subevents
}

}


{


{
}

}


}; //End of gdjs.GRA_33Code.eventsList0xaff48


gdjs.GRA_33Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.GRA_33Code.GDplayerObjects1.length = 0;
gdjs.GRA_33Code.GDplayerObjects2.length = 0;
gdjs.GRA_33Code.GDplayerObjects3.length = 0;
gdjs.GRA_33Code.GDkostkaObjects1.length = 0;
gdjs.GRA_33Code.GDkostkaObjects2.length = 0;
gdjs.GRA_33Code.GDkostkaObjects3.length = 0;
gdjs.GRA_33Code.GDkostka2Objects1.length = 0;
gdjs.GRA_33Code.GDkostka2Objects2.length = 0;
gdjs.GRA_33Code.GDkostka2Objects3.length = 0;
gdjs.GRA_33Code.GDplayer2Objects1.length = 0;
gdjs.GRA_33Code.GDplayer2Objects2.length = 0;
gdjs.GRA_33Code.GDplayer2Objects3.length = 0;
gdjs.GRA_33Code.GDpunktyObjects1.length = 0;
gdjs.GRA_33Code.GDpunktyObjects2.length = 0;
gdjs.GRA_33Code.GDpunktyObjects3.length = 0;

gdjs.GRA_33Code.eventsList0xaff48(runtimeScene);
return;
}
gdjs['GRA_33Code'] = gdjs.GRA_33Code;
