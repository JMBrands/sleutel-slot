//// question types \\\\
TText     = 0; // Allowed alue of Page[pageid][IType]
TQuestion = 1; // Value of Page[pageid][IType]


var Stereo = 0;

function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }

function PrintPages(Pages)
{  
  text = "";
  for (PageID=0;PageID<Pages.length;PageID++)
  {
    NextVisibility = "visible";
    Page = Pages[PageID];
    text += "<div class='div_page' id='pageP" + PageID + "'>";
    text += "  <div class='div_head' id='headP" + PageID + "'>" + Page.Head + "</div>";
    text += "  <div class='div_text' id='textP" + PageID + "'>";
    text +=      Page.Text; 
    if(def(Page.ViewScr))     text += "    <img src='show.gif' height='20px' width='20px' align='absmiddle' alt='Laat dit zien.' onclick='Show(" + PageID + ");' />";
        if(def(Page.Stereo))  text += "    <img src='stereo.gif' height='20px' width='20px' align='absmiddle' alt='3D' onclick='ViewStereo();' />";
    if(def(Page.Help))        text += "    <img src='help.gif' height='20px' width='20px' align='absmiddle' alt='Help' onclick='Help(" + (PageID) + ");' />";
    text += "  </div>";
    text += "  <div class='div_help' id='helpP" + PageID + "' style='display: none'>" + Page.Help + "</div>";
    if(Page.Type==TQuestion)
    {
      
      NextVisibility = "hidden";
      Answers = Page.Answers;
      for (AnswerID=0;AnswerID<Answers.length;AnswerID++)
      {
        Answer = Answers[AnswerID];
        text += "  <div class='div_answer' id='answerP" + PageID + "A" + AnswerID + "'>";
        text += "    <img src='choose.gif' height='20px' width='20px' align='absmiddle' alt='Kies dit antwoord' onclick='Choice(" + PageID + ", " + AnswerID + ");' />&nbsp;";
        text +=      Answer.Answer;
        if(def(Answer.ViewScr)) text += "    <img src='show.gif' height='20px' width='20px' align='absmiddle' alt='Laat dit zien.' onclick='Show(" + PageID + ", " + AnswerID + ");' />";
        if(def(Answer.Help))    text += "    <img src='help.gif' height='20px' width='20px' align='absmiddle' alt='Help' onclick='Help(" + PageID + ", " + AnswerID + ");' />";
        text += "  </div>";
        text += "  <div class='div_help' id='helpP" + PageID + "A" + AnswerID + "' style='display: none'>" + Answer.Help + "</div>";
        text += "  <div class='div_choice' id='choiceP" + PageID + "A" + AnswerID + "' style='display: none'>" + Answer.Choice + "</div>";        
      }
    }
    if (PageID==Pages.length-1) NextVisibility = "hidden";
    text += "  <div class='div_note'>";
    if(def(Page.Note)) text += Page.Note;
    text += "</div>";
    text += "  <div class='div_next' id='nextP" + PageID + "' style='visibility: " + NextVisibility + "'>";
    text += "    Ga verder... <img src='next.gif' height='20px' width='20px' align='absmiddle' alt='Ga naar de volgende pagina' onclick='ShowPage(" + (PageID+1) + ");' />";
    text += "  </div>";
    text += "</div>";
  }
  return Jmol._documentWrite(text); // enables usage of _jmol.currentDocument. If 0 the function just returns text.
}

function ReadFile()
{
  //alert(">>" + document.getElementById("ReadFrame").contentWindow.document.body.innerHTML + "<<");
}


/******************************************************************************
jmolLabel(Label, Input)
This function adds a lable to input types that don't have labels.
Label   - The lable text.
Input - the code for the input feeld.
******************************************************************************/
function jmolLabel(Label, Input, ID)
{
  IDtext = def(ID) ? " id='" + ID + "' name='" + ID + "'": "";
  text = "<label" + IDtext + ">" + Label + " " + Input +"</label>";
  return _jmolDocumentWrite(text);
}


function ArrayToTable(TableArray)
{
  text = "<table>";
  for (Rij in TableArray)
  {
    text += "<tr>";
    for (Cell in TableArray[Rij])
    {
      text += "<td>";
      text += TableArray[Rij][Cell];
      text += "</td>";  
    }
    text += "</tr>";
  }
  text += "</table>";
  return _jmolDocumentWrite(text);
}

function def(x)
{
  return !(x == undefined || x == null);
}


var CurPages = new Array();
var CurHelps = new Array();


function Choice(PageID, AnswerID)
{
  ShowDiv("choiceP" + PageID + "A" + AnswerID, CurHelps);
  CurHelps[0] = "choiceP" + PageID + "A" + AnswerID;
  if(Pages[PageID].Answers[AnswerID].Right) 
  {
    ShowDiv("nextP" + PageID);
    CurHelps[1] = "nextP" + PageID;
  }
  ChangeMeter(Pages[PageID].Answers[AnswerID].Meter);
  return jmolScriptWait(Pages[PageID].Answers[AnswerID].ChoiceScr, "main");
}


function ShowPage(PageID)
{ 
  post = true; 
  pre  = true;
  if(def(Pages[PageID-1]) && def(Pages[PageID-1].PostScr)) post = jmolScriptWait(Pages[PageID-1].PostScr, "main");
  ShowDiv("pageP" + PageID, CurPages, "680px", "0px", "0px");
  CurPages[0] = "pageP" + PageID;
  jmolScriptWait("stereo off", "main");
  Stereo = 0;
  if(def(Pages[PageID].PreScr)) pre = jmolScriptWait(Pages[PageID].PreScr, "main")
  return (post && pre);
}

function GotoPage(PageID)
{
  for (var I = 1; I <= PageID; I++) 
  {
    ShowPage(I); 
  }
  ChangeMeter(Pages[PageID].Meter);
  return true; 
}

function Help(PageID, AnswerID)
{ 
  ID = "helpP" + PageID;
  if (def(AnswerID)) ID += "A" + AnswerID;
  ShowDiv(ID, CurHelps, "auto");
  CurHelps[0] = ID;
}

function Show(PageID, AnswerID)
{ 
  if (def(AnswerID))   return jmolScriptWait(Pages[PageID].Answers[AnswerID].ViewScr, "main");  
  return jmolScriptWait(Pages[PageID].ViewScr, "main");  
}

function ShowDiv(ShowID, HideIDs, Height, paddingTop, paddingBottum)
{
  if(!def(HideIDs))       HideIDs       = null;
  if(!def(Height))        Height        = "auto";
  if(!def(paddingTop))    paddingTop    = "10px";
  if(!def(paddingBottum)) paddingBottum = "10px";
  HideDivs(HideIDs);
  document.getElementById(ShowID).style.height        = Height;       
  document.getElementById(ShowID).style.paddingTop    = paddingTop;
  document.getElementById(ShowID).style.paddingBottom = paddingBottum;
  document.getElementById(ShowID).style.visibility    = "visible";
  document.getElementById(ShowID).style.display       = "";
}

function HideDivs(HideIDs)
{
  for (HideID in HideIDs)
  {
    if (isNumber(HideID)) {
      document.getElementById(HideIDs[HideID]).style.height        = "0px";     
      document.getElementById(HideIDs[HideID]).style.paddingTop    = "0px";
      document.getElementById(HideIDs[HideID]).style.paddingBottom = "0px";  
      document.getElementById(HideIDs[HideID]).style.visibility    = "hidden";
      document.getElementById(HideIDs[HideID]).style.display       = "none";
    }
  }
}

function changecss(Class, element, value) 
{
	var cssRules;
	if (document.all) 
	{
	  cssRules = 'rules';
	}
	else if (document.getElementById) 
	{
	  cssRules = 'cssRules';
	}
	for (var S = 0; S < document.styleSheets.length; S++)
	{
	  for (var R = 0; R < document.styleSheets[S][cssRules].length; R++) 
	  {
	    if (document.styleSheets[S][cssRules][R].selectorText == Class) 
	    {
	      document.styleSheets[S][cssRules][R].style[element] = value;
	    }
	  }
	}	
}

//alert(screen.availWidth + ", " + screen.availHeight);                              
//alert("c===" + window.document.body.clientWidth + ", " + window.document.body.clientHeight); 
//alert(window.document.body.offsetWidth + ", " + window.document.body.offsetHeight); 
//alert(window.document.body.scrollWidth + ", " + window.document.body.scrollHeight); 
//alert(window.document.body.scrollTop   + ", " + window.document.body.scrollLeft  );


function ChangeMeter(Value)
{
  if (Value == null)
  {
    document.getElementById("td_pointer").style.visibility = "hidden";
    document.getElementById("td_meter").style.visibility   = "hidden";
  }
  else 
  {
    document.getElementById("td_pointer").style.visibility = "visible";
    document.getElementById("td_meter").style.visibility   = "visible";
    document.getElementById("img_pointer").src             = "arrow_" + Value + ".gif"; 
  }
  return(1);
}


function ViewStereo()
{
  if(Stereo) 
  {
    jmolScriptWait("stereo off", "main");
    Stereo = 0;
  }
  else       
  {
    jmolScriptWait("stereo REDGREEN 5" , "main");
    Stereo = 1;
  }
  return(1); 
}