Pages = [
  ////////// 1 - intro \\\\\\\\\\
  {
    Type    : TText,
    Head    : 'De Sleutel en het Slot.',
    Text    : 'NV Organon is een bedrijf dat wereldwijd medicijnen ontwikkelt, produceert en verkoopt.\
               Om jullie te laten zien hoe we bij Organon medicijnen ontwerpen, is deze module gemaakt.<br />\
               Eerst leggen we uit hoe deze module werkt. Vervolgens krijg je een introductie over hoe en waarvoor we een geneesmiddel willen ontwikkelen. <br />\
               Daarna ga je aan de hand van vragen, zelf een geneesmiddel ontwerpen. <br />\
               Soms deze knop tegen: <img onclick="Help(\'Preview\');" height="20" alt="Help" src="help.gif" width="20" align="absMiddle" />.\
               <div class="div_help" id="helpPPreview">Hier komt dan extra uitleg te staan over de vraag of het antwoord waarbij de knop staat.</div>\
               Klik er maar eens op. <br />\
               Achter elk antwoord en soms bij de tekst staat deze knop:    klikken op deze knop geeft aan de linker kant van je scherm het model weer van het molecuul in het eiwit.<br /><br />\
               Ook kom je knoppen tegen die het molekuul dat je links in beeld kunt zien laat bewegen. Klik maar een op dit knopje: \
               ',
    Help    : null,
    Note    : null,
    Meter   : null,
    PreScr  : 'echo "calculating ..."; load water.mol2;  set spinX 0; set spinY -70; set spinZ 0; spacefill off; wireframe off; moveto 0 1 1 1 -180 -50 -50 -50; wireframe 30; spacefill -20; echo; moveto 3 0 0 0 0 80;', 
    ViewScr : 'spin on', 
//    ViewScr : 'load ok.mol; frames all; color atoms [x001E55]; spacefill off; wireframe off; moveto 0 1 0 0 90 0 0 -55; wireframe 60; set spinX 90; set spinY 0; set spinZ 0; echo; moveto 1 0 0 0 0 0 0 0; spin on;',
    PostScr : 'spin on'
  },
  ////////// 2 - "How to" with water \\\\\\\\\\
  {
    Type    : TText,
    Head    : 'Molekulen bewegen',
    Text    : 'Om de vragen te beantwoorden zul je de eiwitten en potentiele medicijnen als moleculen kunnen bekijken aan de linker kant van je scherm.\
              Je kunt nu alvast oefenen met het water molecuul dat is weergegeven. Rood is het zuurstofatoom, en beide waterstofatomen zijn wit.\
              <p><b>Zoomen:</b><br />\
              Scrollen met de scrollbutton.</p>\
              <p><b>Roteren om de X- en Y-as:</b><br />\
              Met de linker muisknop slepen.</p>\
              <p><b>Roteren om de Z as:</b><br />\
              Shift + met de linker muisknop slepen (links & rechts).</p>\
              <p><b>Verplaatsen:</b><br />\
              Ctrl + met de rechter muisknop slepen.</p>\
              <p>Zoals je ziet, zitten de waterstof atomen en het zuurstof atoom aan elkaar versmolten.\
              Als we dadelijk grote moleculen gaan bekijken kun je daardoor alleen de buitenkant zien. Daarom worden de moleculen ook vaak als stokjes weergegeven zodat je ook de structuur binnenin kunt zien.\
              Om juist alleen het oppervlak (de buitenkant) van een molecuul te zien, wordt een model van bollen met lading gebruikt, waarbij rood negatieve lading is en blauw positieve lading. Klik hier om te zien hoe dat er uitziet:</p>\
              ',
    Help    : null,
    Note    : 'Probeer alle bewegingen even uit en ga dan verder.',
    Meter   : null,
    PreScr  : null,
    ViewScr : 'isosurface off; SpaceFillVal = -20; WireFrameVal = 40; message _loop1;  if (@SpaceFillVal < 0); spacefill @SpaceFillVal; wireframe @WireFrameVal; delay 0.05 ; SpaceFillVal = @SpaceFillVal+1; WireFrameVal = @WireFrameVal+2; goto _loop1; else; spacefill -10; wireframe 80; endif ; SpaceFillVal = -10; WireFrameVal = 80; delay 3; message _loop2;  if (@SpaceFillVal > -90); spacefill @SpaceFillVal; wireframe @WireFrameVal; delay 0.05 ; SpaceFillVal = @SpaceFillVal-1; WireFrameVal = @WireFrameVal-1; goto _loop2; else; spacefill -90; wireframe off; endif; echo Calculating ...; isosurface molecular map MEP translucent 1.00; echo; delay 3; TransLucentVal = 1.00; message _loop3; if ( @TransLucentVal > 0); color isosurface translucent @TransLucentVal; delay 0.05; TransLucentVal = @TransLucentVal-0.03; goto _loop3; else; color isosurface translucent 0.00; spacefill off ; endif;',
    PostScr : 'moveto 3 1 1 1 -180 -100 100 -100; zap'
  },
  ////////// 3 - Op zoek naar een nieuw geneesmiddel \\\\\\\\\\
  {
    Type    : TText,
    Head    : 'Op zoek naar een nieuw geneesmiddel',
    Text    : 'Leukemie is een vorm van bloedkanker waarbij de witte bloedcellen, die normaal gesproken tegen infecties beschermen, ongeremd zijn gaan delen. Omdat deze vorm van kanker niet een vaste tumor heeft die operatief verwijderd kan worden, en de kanker per definitie zich door het bloed verspreid heeft, is de beste behandeling van leukemie een waarbij een geneesmiddel wordt toegediend (chemotherapie).<br />\
               In deze module gaan we op zoek naar een geneesmiddel tegen leukemie. Jij gaat proberen een middel te ontwerpen waardoor veel leukemie-patienten hopelijk genezen kunnen worden!\
              ',
    Help    : null,
    Note    : null,
    Meter   : null,
    PreScr  : 'load pil.mol; color atoms orange; spacefill off; wireframe off; moveto 0 1 1 1 -180 -50 -50 50; wireframe 100;  set spinX 0; set spinY -120; set spinZ 0; spin on; echo; moveto 2 0 0 0 0 80; ', 
    ViewScr : null,
    PostScr : 'moveto 2 1 1 1 180 -100 100 -100; zap'
  },
  ////////// 4 - find the pocket \\\\\\\\\\
  {
    Type    : TQuestion,
    Head    : 'Vind het sleutelgat in het slot',
    Text    : 'De ontwikkeling van een nieuw geneesmiddel start met het uitvinden van welk eiwit (slot) ontregeld is geraakt waardoor de ziekte wordt veroorzaakt. Bij leukemie blijkt het Bcr-Abl eiwit een belangrijke rol te spelen. Dit eiwit staat hier links weergegeven in het stokjesmodel.<br />\
               Het Bcr-Abl eiwit heeft de eigenschap om in aktieve vorm de cel tot deling aan te zetten. Het vervelende is nu dat bij een bepaalde vorm van leukemie door een defect dit eiwit voortdurend in de aktieve vorm verkeert, met als gevolg dat de beenmergcellen waar dit defect in voorkomt, ongeremd gaan delen.<br />\
               Dit eiwit kun je zien als een slot waar een geneesmiddel als een sleutel op kan aangrijpen om dit eiwit inaktief te maken, om op deze manier de ongeremde celdeling te stoppen. In dit eiwit (slot) zit een holte, het sleutelgat, waar een geneesmiddel kan binden.\
               Door het eiwit te draaien kun je proberen deze holte te vinden, zie jij waar een geneesmiddel aan dit eiwit zou kunnen binden? Klik op de onderstaande view knop om de oppervlakte van het eiwit te zien. Zet dan je 3D bril op en zet onderaan het scherm de 3D weergave aan. Ga nu op zoek naar het sleutelgat.\
               Als je op de view knop achter de antwoorden klikt verschijnt een pijl die de mogelijke holtes aanwijst.',
    Help    : 'De belangrijkste eigenschappen van een holte (sleutelgat) zijn: <ol><li>Hij mag niet te groot zijn want dan kan het molecuul (sleutel) te weinig contact maken met het eiwit (slot).</li><li>Natuurlijk moet hij ook niet te klein zijn zodat het molecuul er wel in kan.</li><li>Als laatste moet de holte zodanig diep zijn dat een groot deel van het molecuul erin past, anders is de binding/interactie van het molecuul aan het eiwit niet sterk genoeg.</li></ol>',
    Answers : [
      {
        Answer   : 'Holte 1',
        Meter    : null,
        Help     : 'Is deze holte groot genoeg om een molecuul (geneesmiddel) in te passen, en is de holte ook toegankelijk voor moleculen (ingang groot genoeg)? Voor meer toelichting en tips kijk eens bij de help van deze vraag.',
        ViewScr  : 'draw arrow1 ARROW {-6.9648438 -11.069992 18.9561} {-2.6592789 -5.0055885 17.103634} 180; color draw blue; moveto 2 {-834 552 -11 77.32} ',
        Choice   : 'Je zit al in de goede richting. als je goed kijkt kun je zelfs helemaal door het sleutelgat heen kijken. Dit sleutelgat heeft 2 ingangen, kijk nog eens naar de andere ingang, zou deze niet beter toegankelijk zijn?',
        ChoiceScr: 'draw arrow1 ARROW {-6.9648438 -11.069992 18.9561} {-2.6592789 -5.0055885 17.103634} 180; color draw red; moveto 2 {-834 552 -11 77.32}',
        Right    : 0
      },
      {
        Answer   : 'Holte 2',
        Meter    : null,
        Help     : 'Is deze holte groot genoeg om het gehele molecuul (geneesmiddel) in te passen? Voor meer toelichting en tips kijk eens bij de help van deze vraag.',
        ViewScr  : 'draw arrow1 ARROW {-20.04795 4.29673 8.348911} {-12.060478 6.7303314 12.697704} 180; color draw blue; moveto 2 {-562 805 191 119.57} ',
        Choice   : 'Helaas, deze holte is te klein en niet diep genoeg om een een molecuul (geneesmiddel) in te passen.',
        ChoiceScr: 'draw arrow1 ARROW {-20.04795 4.29673 8.348911} {-12.060478 6.7303314 12.697704} 180; color draw red; moveto 2 {-562 805 191 119.57}',
        Right    : 0
      },
      {
        Answer   : 'Holte 3',
        Meter    : null,
        Help     : 'Kijk eens bij de help van de vraag. In het lijstje staan de belangrijkste eigenschappen van een holte. Voldoet de holte aan deze voorwaarden?',
        ViewScr  : 'draw arrow1 ARROW {14.661102 22.844818 6.3012085} {11.053665 17.003113 8.492386} 180; color draw blue; moveto 2 { 417 -846 -332 120.6}',
        Choice   : 'Dit is inderdaad een holte (sleutelgat) waar perfect een geneesmiddel in kan passen. Hij is niet te breed of te smal en diep genoeg. Ga verder naar de volgende vraag.',
        ChoiceScr: 'draw arrow1 ARROW {14.661102 22.844818 6.3012085} {11.053665 17.003113 8.492386} 180; color draw green; moveto 2 { 417 -846 -332 120.6}',
        Right    : 1
      }
    ],
    Note    : 'Als je de goede holte hebt gevonden kun je verder naar de volgende vraag.',
    Meter   : null,
    PreScr  : 'spacefill off; wireframe off; load 2HYY.mol2; spacefill off; wireframe off; moveto 0 1 1 1 -180 -50 -50 -50; wireframe 38; moveto 4 0 0 0 0 0; delay 0.000001; isoSurface Iso_Full model 1.2 "2HYY.jvxl"; color $Iso_Full translucent 1.00 ', 
    ViewScr : 'TransLucentVal = 1.00; message _loop1; if ( @TransLucentVal > 0);  color $Iso_Full translucent @TransLucentVal; TransLucentVal = @TransLucentVal-0.1; delay 0.2; goto _loop1; else; color $Iso_Full translucent 0.00; wireframe off; endif;',
    PostScr : 'draw off; color $Iso_Full translucent 0.00; hide 0'
  },
  ////////// 5 - De natuurlijke sleutel \\\\\\\\\\
  {
    Type    : TText,
    Head    : 'De natuurlijke sleutel van het Bcr-Abl eiwit',
    Text    : 'In het Bcr-Abl eiwit zit inderdaad een duidelijke holte (die je net hebt aangewezen) vergelijkbaar met een sleutelgat waar moleculen als sleutels inpassen. Deze holte zit er natuurlijk niet voor niets. In de normale situatie in het lichaam, bindt op deze plaats in dit eiwit het molecuul ATP (natuurlijke sleutel) wat er voor zorgt dat het eiwit (slot) kan worden geaktiveerd. Deze holte (sleutelgat) kan ook gebruikt worden om een geneesmiddel in te binden. Wanneer een geneesmiddel in deze holte is gebonden kan de natuurlijke sleutel ATP niet meer binden en kan het eiwit dus niet meer aktief worden. Klik op view om de binding van ATP in de holte van dit eiwit te zien.',
    Help    : null,
    Note    : null,
    Meter   : null,
    PreScr  : 'moveto 2 {914 366 174 136.62} 221.28 0 22.8; delay 0.1; isoSurface Iso_Cut model 1.2 "2HYY_R0.jvxl"; TransLucentVal = 0.00; load append "ATP.sdf";  set backgroundmodel 1.2; hide 1.1; ', 
    ViewScr : 'message _loop1; if ( @TransLucentVal < 1.00);  color $Iso_Full translucent @TransLucentVal; TransLucentVal = @TransLucentVal+0.05; delay 0.1; goto _loop1; else; color $Iso_Full translucent 1.00; endif;',
    PostScr : 'color $Iso_Full translucent 1.00 ; hide all'
  },  
  ////////// 6 - find the starting scafold \\\\\\\\\\
  {
    Type    : TQuestion,
    Head    : 'De zoektocht naar een goede sleutel kan beginnen.',
    Text    : 'De zoektocht naar een goede sleutel begint met het passen van heel veel sleutels op het slot. In praktijk worden veel moleculen (>20.000!) getest om te bepalen of ze in ieder geval een beetje binden in de holte van het eiwit. Dit wordt screenen genoemd. Het gevonden molecuul moet vervolgens nog verder worden ontwikkeld met als doel het geneesmiddel aktiever te maken (betere binding aan de holte van het eiwit), mogelijke bijwerkingen verminderen en het molecuul bij voorkeur zodanig aan te passen dat dit als een pil in plaats van een injectie kan worden ingenomen.<br />\
               Welke van onderstaande mogelijkheden zou je kiezen als startpunt voor verdere ontwikkeling?\
              ',
    Help    : 'Een ideaal startmolecuul heeft een zo sterk mogelijke binding met de receptor, dus een zo sterk mogelijke interactie met de holte/sleutelgat. Echter daarbij is het molecuul niet te groot. Verdere ontwikkeling van een molecuul tot een geneesmiddel gebeurt veelal door het toevoegen van extra staarten met gewenste eigenschappen (bijvoorbeeld interactie met de holte) aan het startmolecuul. Als het startmolecuul al erg groot is, wordt dit lastig zonder dat het molecuul te zwaar wordt. Een molecuulgewicht boven de 550 g/mol is ongewenst voor een geneesmiddel.',
    Answers : [
      {
        Answer   : 'Molecuul 1',
        Meter    : 0,
        Help     : 'Is dit molecuul groot genoeg om enigzins binding/interactie met de holte te hebben? Voor meer toelichting en tips kijk eens bij de help van deze vraag.',
        ViewScr  : 'frame 3.1; display 3.1',
        Choice   : 'Nee, dit molecuul is ethanol. Het is een erg klein molecuul met nauwelijks interactie met de holte waardoor het zeer zwak en niet selectief aan het slot zal binden. Om dit molecuul verder uit te bouwen tot de perfecte sleutel die sterk bindt aan het slot zal veel werk zijn. Probeer een ander antwoord, en kijk voor toelichting en tips bij de help van deze vraag.',
        ChoiceScr: 'frame 3.1; display 3.1',
        Right    : 0
      },
      {
        Answer   : 'Molecuul 2',
        Meter    : 3,
        Help     : 'Is dit molecuul groot genoeg om enigzins binding/interactie met de holte te hebben en daarbij nog klein genoeg voor verdere verbetering? Voor meer toelichting en tips kijk eens bij de help van deze vraag.',
        ViewScr  : 'frame 3.2; display 3.2',
        Choice   : 'Ja, Dit is een zeer geschikt startpunt voor verdere ontwikkeling. Het molecuul is klein waardoor er nog ruimte (in molecuulgewicht) is voor het inbouwen van extra groepen die een gewenst effect hebben zoals een sterkere binding aan het slot/receptor. Een ideaal geneesmiddel heeft een molecuulgewicht kleiner dan 550 g/mol zodat het nog als een pil kan worden ingenomen.\
                    Nu we dit startpunt gevonden hebben, gaan we de eigenschappen van dit molecuul verder verbeteren. Ga daarvoor naar de volgende vraag.',
        ChoiceScr: 'frame 3.2; display 3.2',
        Right    : 1
      },
      {
        Answer   : 'Molecuul 3',
        Meter    : 5,
        Help     : 'Kan dit molecuul nog verder verbeterd worden zonder dat het molecuul te groot wordt? Kijk eens bij de help van deze vraag en lees de voorwaarden voor een ideaal startmolecuul.',
        ViewScr  : 'frame 3.3; display 3.3',
        Choice   : 'Nee, deze sleutel is geen goed startpunt voor optimalisatie. Het molecuul is al erg groot en volledig uitgerust met allerlei (niet nodige) zijstaarten aan het molecuul. Probeer een ander antwoord en kijk voor toelichting en tips bij de help van deze vraag',
        ChoiceScr: 'frame 3.3; display 3.3',
        Right    : 0
      }
    ],
    Note    : 'Als je het goede startmolecuul gevonden hebt, kun je naar de volgende vraag.',
    Meter   : 0,
    PreScr  : 'load append "R0.sdf"; set backgroundmodel 1.2; hide all;', 
    ViewScr : null,
    PostScr : null
  },
  ////////// 7 - find the pocket R1 group \\\\\\\\\\
  {
    Type    : TQuestion,
    Head    : 'Stap 1 naar een verbeterde sleutel',
    Text    : 'Hier zie je je gekozen startpunt in de holte van de Bcr-Abl receptor. Dit molecuul bindt echter nog vrij zwak aan de receptor. Om deze binding te versterken gaan we proberen de holte in het eiwit verder op te vullen zodat door middel van VanderWaals-interacties het molecuul sterker aan het eiwit bindt.<br />\
               Aan de rechterzijde (op het scherm) van het molecuul is duidelijk nog ruimte in de receptor om extra groepen aan te bouwen. <br />\
               Welke van onderstaande groepen zou het beste aan het molecuul gezet kunnen worden zodat deze het molecuul optimaal in het eiwit past en de holte al beter wordt opgevuld?',
    Help    : 'Een molecuul heeft de sterkste binding aan de receptor als: <br />\
               1) de holte zo goed mogelijk wordt opgevuld zodat er veel positieve VanderWaalsinteracties kunnen worden gevormd<br />\
               2) het molecuul niet botst met de zijwanden van de holte <br />\
               3) er naast VanderWaals-interacties ook waterstofbruggen kunnen worden gevormd. <br />\
               VanderWaals-interacties zijn intramoleculaire krachten die tussen tijdelijke dipolen in apolaire moleculen (of apolaire delen van moleculen) worden gevormd. Waterstofbruggen zijn sterker en worden gevormd tussen een electronegatief atoom als zuurstof en een naburig H (proton) aan een ander electronegatief atoom (zoals N-H of O-H).\
              ',
    Answers : [
      {
        Answer   : 'Methyl-groep',
        Meter    : 4,
        Help     : 'Kijk eens goed naar het model van dit molecuul in de receptor, is de holte beter opgevuld, of zou er nog een grotere groep in passen?',
        ViewScr  : 'frame 4.1; display 4.1',
        Choice   : 'De holte wordt nog niet optimaal opgevuld, de binding zal verder versterkt worden als hier een grotere groep aan wordt gezet, zodat er meer Vanderwaalsinteracties kunnen bijdragen aan de binding. Probeer een ander antwoord.',
        ChoiceScr: 'frame 4.1; display 4.1',
        Right    : 0
      },
      {
        Answer   : 'Phenyl-groep',
        Meter    : 5,
        Help     : 'Kijk eens goed naar het model van dit molecuul in de receptor, is de holte beter opgevuld, of zou er nog een grotere groep in passen zonder tegen de wanden van de holte te botsen?',
        ViewScr  : 'frame 4.2; display 4.2',
        Choice   : 'Deze groep vult de holte al beter op, waardoor het molecuul al sterker aan de receptor bindt in vergelijking met het startmolecuul. Echter de holte wordt nog niet optimaal opgevuld, het kan dus nog beter! Probeer een ander antwoord.',
        ChoiceScr: 'frame 4.2; display 4.2',
        Right    : 0
      },
      {
        Answer   : 'Phenetyl-groep',
        Meter    : 6,
        Help     : 'Kijk eens goed naar het model van dit molecuul in de receptor, wordt de holte goed opgevuld?',
        ViewScr  : 'frame 4.3; display 4.3',
        Choice   : 'Deze groep vult de holte goed op, waardoor de binding van dit molecuul aan de receptor al veel sterker is geworden in vergelijking met het startpunt. Prima! We gaan in de volgende vraag dit molecuul verder verbeteren.',
        ChoiceScr: 'frame 4.3; display 4.3',
        Right    : 1
      }
    ],
    Note    : 'Als je de goede groep hebt gevonden op deze positie, kun je naar de volgende vraag.',
    Meter   : 3,
    PreScr  : 'load append "R1.sdf"; set backgroundmodel 1.2; display 3.2; frame 3.2;', 
    ViewScr : null,
    PostScr : 'frame 4.3; display 4.3; moveto 2 {930 141 340 142} 100 0 0 ; TransLucentVal = 1.00; message _loop1; if ( @TransLucentVal > 0);  color $Iso_Full translucent @TransLucentVal; TransLucentVal = @TransLucentVal-0.1; delay 0.2; goto _loop1; else; color $Iso_Full translucent 0.00; endif;'
  },
  ////////// 8 - set the right donors acceptors for the R1 group (R1B) \\\\\\\\\\
{
    Type    : TQuestion,
    Head    : 'Waterstofbruggen?',
    Text    : 'Onderstaande verbindingen vullen de holte optimaal in, echter de binding van de verschillende moleculen aan het eiwit is duidelijk verschillend. De kleuren in de weergave van het eiwit geven waterstofbrugacceptoren in rood aan (- lading), en waterstofbrugdonoren (+ lading) in blauw weer. Welk molecuul zal het sterkst aan de receptor binden?',
    Help    : 'Een molecuul heeft de sterkste binding aan de receptor als: <br />\
               1) de holte zo goed mogelijk wordt opgevuld zodat er veel positieve Vanderwaalsinteracties kunnen worden gevormd <br />\
               2) het molecuul niet botst met de zijwanden van de holte <br />\
               3) er naast Vanderwaals-interacties ook waterstofbruggen kunnen worden gevormd. <br />\
               Vanderwaals-interacties zijn intramoleculaire krachten die tussen tijdelijke dipolen in apolaire moleculen (of apolaire delen van moleculen) worden gevormd. Waterstofbruggen zijn sterker en worden gevormd tussen een electronegatief atoom als zuurstof en een naburig H (proton) aan een ander electronegatief atoom (zoals N-H of O-H).\
              ',
    Answers : [
      {
        Answer   : 'Phenetyl-groep',
        Meter    : 6,
        Help     : 'Kijk eens goed naar het model van dit molecuul in de receptor, zijn er naast Vanderwaalsinteracties ook waterstofbruggen mogelijk tussen het molecuul/sleutel en de holte/sleutelgat?',
        ViewScr  : 'frame 5.1; display 5.1',
        Choice   : 'Nee, dit molecuul kan geen waterstofbruggen vormen met de holte van het eiwit. Deze waterstofbruggen kunnen ervoor zorgen dat het molecuul veel sterker bindt aan het eiwit. Probeer het andere antwoord en kijk eens naar het model door op de view knop te klikken.',
        ChoiceScr: 'frame 5.1; display 5.1',
        Right    : 0
      },
      {
        Answer   : 'Amide-groep 1',
        Meter    : 5,
        Help     : 'Kijk eens goed naar het model van dit molecuul in de receptor, zijn er naast Vanderwaalsinteracties ook waterstofbruggen mogelijk tussen het molecuul/sleutel en de holte/sleutelgat?',
        ViewScr  : 'frame 5.2; display 5.2',
        Choice   : 'Inderdaad de amide-groep heeft naast dat de pocket optimaal gevuld wordt ook nog de mogelijkheid om extra waterstofbruggen te vormen tussen het molecuul en de holte. Echter in dit molecuul passen de waterstofbruggen tussen het molecuul en het eiwit niet goed (niet donor met acceptor, en acceptor met donor), probeer een ander antwoord.',
        ChoiceScr: 'frame 5.2; display 5.2',
        Right    : 0
      },
      {
        Answer   : 'Amide-groep 2',
        Meter    : 8,
        Help     : 'Kijk eens goed naar het model van dit molecuul in de receptor, zijn er naast Vanderwaalsinteracties ook waterstofbruggen mogelijk tussen het molecuul/sleutel en de holte/sleutelgat?',
        ViewScr  : 'frame 5.3; display 5.3',
        Choice   : 'Inderdaad de amide-groep heeft naast dat de pocket optimaal gevuld wordt ook nog de mogelijkheid om extra waterstofbruggen te vormen tussen het molecuul en de holte. Hierdoor wordt de binding van het molecuul aan de receptor verder versterkt. Goed! <br />\
                    Dit molecuul gaan we in de volgende vraag verder verbeteren. Onthoud hierbij dat zowel optimale invulling van de holte alswel de vorming van waterstofbruggen de binding van het molecuul aan de holte kunnen versterken.',
        ChoiceScr: 'frame 5.3; display 5.3',
        Right    : 1
      }
    ],
    Note    : null,
    Meter   : 6,
    PreScr  : 'isoSurface Iso_Cut model 1.2 "2HYY_R1.jvxl"; set backgroundmodel 1.2; frame 4.3; TransLucentVal = 0.00; message _loop1; if ( @TransLucentVal < 1);  color $Iso_Full translucent @TransLucentVal; TransLucentVal = @TransLucentVal+0.1; delay 0.2; goto _loop1; else; color $Iso_Full translucent 1.00; endif; moveto 2 {772 522 363 87.5} 370 -4.2 29.0; load append "R1B.sdf"; set backgroundmodel 1.2; frame 4.3; isoSurface Iso_MEP model 1.2 "2HYY_R1_mep.jvxl"  translucent 1.0; isoSurface Iso_Full_mep model 1.2 "2HYY_mep.jvxl" translucent 1.0;', 
    ViewScr : 'set backgroundmodel 1.2; frame 4.3; color $Iso_MEP translucent 1.00; TransLucentVal = 0.00; message _loop1; if ( @TransLucentVal < 1);  color $Iso_Cut translucent @TransLucentVal; TransLucentValMEP = 1.0-@TransLucentVal; color $Iso_MEP translucent @TransLucentValMEP; TransLucentVal = @TransLucentVal+0.1; delay 0.3; goto _loop1; else; color $Iso_Cut translucent 1.00; color $Iso_MEP translucent 0.0; endif;', 
    PostScr : 'color $Iso_MEP translucent 0.0; color $Iso_Cut translucent 1.0; frame 5.3; display 5.3; moveto 2 {930 141 340 142} 100 0 0 ; TransLucentVal = 1.00; message _loop1; if ( @TransLucentVal > 0);  color $Iso_Full_mep translucent @TransLucentVal; TransLucentVal = @TransLucentVal-0.1; delay 0.2; goto _loop1; else; color $Iso_Full_mep translucent 0.00; color $Iso_MEP translucent 1.0; endif;'
  },
  ////////// 9 - find the right R2 group \\\\\\\\\\
{
    Type    : TQuestion,
    Head    : 'Stap 2 naar een verbeterde sleutel',
    Text    : 'Als je kijkt naar het molecuul dat je nu hebt opgebouwd in de receptor, zie je dat er nog een ruimte in de holte niet wordt opgevuld. Deze holte kan worden benut om het molecuul, onze sleutel, een stap verder te verbeteren. Welke substituent van de lijst hieronder zou je aanbrengen op het molecuul om de binding aan het eiwit verder te versterken?',
    Help    : 'De namen van de verschillende groepen zeggen je misschien niet veel, echter klik op de modellen en kijk naar de moleculen van de verschillende antwoorden in de holte. Welk molecuul heeft de meest positieve interacties met de holte van de receptor? Denk hierbij aan zowel Vanderwaals-interacties (vulling van de holte) als aan waterstofbruggen.',
    Answers : [
      {
        Answer   : 'Pyridine-groep',
        Meter    : 12,
        Help     : 'Kijk eens goed naar het model van dit molecuul in de receptor, vult deze groep de holte goed op en zijn er naast Vanderwaalsinteracties ook waterstofbruggen mogelijk tussen het molecuul/sleutel en de holte/sleutelgat?',
        ViewScr  : 'frame 6.1; display 6.1',
        Choice   : 'Inderdaad het molecuul met de pyridine-groep heeft naast dat de holte optimaal gevuld wordt ook nog de mogelijkheid om een extra waterstofbrug te vormen tussen de pyridine groep en de holte. Hierdoor wordt de binding van het molecuul aan de receptor versterkt. Erg goed!<br />\
                    Het molecuul wat je nu hebt opgebouwd bindt al zeer sterk aan het Bcr-Abl eiwit, en is al dichtbij een goed geneesmiddel. Ga verder naar de volgende vraag.',
        ChoiceScr: 'frame 6.1; display 6.1',
        Right    : 1
      },
      {
        Answer   : 'Phenyl-groep',
        Meter    : 11,
        Help     : 'Kijk eens goed naar het model van dit molecuul in de receptor, zijn er naast Vanderwaalsinteracties ook waterstofbruggen mogelijk tussen deze groep en de receptor?',
        ViewScr  : 'frame 6.2; display 6.2',
        Choice   : 'De phenyl-groep geeft wel een goede vulling van de holte in de receptor, maar benut niet de mogelijkheid om een extra waterstofbrug te vormen. Dus deze groep vergroot wel de binding aan de receptor, maar het kan nog beter.... (kies een ander antwoord)',
        ChoiceScr: 'frame 6.2; display 6.2',
        Right    : 0
      },
      {
        Answer   : 'tert-Butyl-groep',
        Meter    : 9,
        Help     : 'Kijk eens goed naar het model van dit molecuul in de receptor, vult deze groep de ruimte in de holte goed op, en is er nog de mogelijkheid om waterstofbruginteracties te gebruiken?',
        ViewScr  : 'frame 6.3; display 6.3',
        Choice   : 'Nee, dit molecuul is nauwelijks aktiever dan zijn startpunt. Zowel de holte wordt niet optimaal ingevuld, alswel de mogelijkheid om een extra waterstofbrug te vormen wordt niet benut. Het kan dus veel beter!!! Kies een ander antwoord.',
        ChoiceScr: 'frame 6.3; display 6.3',
        Right    : 0
      }    
    ],
    Note    : null,
    Meter   : 8,
    PreScr  : 'isoSurface Iso_MEP model 1.2 "2HYY_R2_mep.jvxl"; set backgroundmodel 1.2; frame 5.3; TransLucentVal = 0.00; message _loop1; if ( @TransLucentVal < 1);  color $Iso_Full_mep translucent @TransLucentVal; TransLucentValMEP = 1.0-@TransLucentVal; color $Iso_MEP translucent @TransLucentValMEP; TransLucentVal = @TransLucentVal+0.1; delay 0.3; goto _loop1; else; color $Iso_Full_mep translucent 1.00; color $Iso_MEP translucent 0.0; endif; moveto 2 { -965 214 -148 138.2} 275 -11.5 18.9;  load append "R2.sdf"; set backgroundmodel 1.2; frame 5.3;', 
    ViewScr : null,
    PostScr : 'frame 6.1; display 6.1; moveto 2 {930 141 340 142} 100 0 0 ; TransLucentVal = 1.00; message _loop1; if ( @TransLucentVal > 0);  color $Iso_Full_mep translucent @TransLucentVal; TransLucentVal = @TransLucentVal-0.1; delay 0.2; goto _loop1; else; color $Iso_Full_mep translucent 0.00; endif;'
  },
  ////////// 10 - find the right position of the Me R3 \\\\\\\\\\
{
    Type    : TQuestion,
    Head    : 'Een magische methyl?',
    Text    : 'Tot nu toe heb je behoorlijk grote groepen aan het molecuul gehangen om de holte in het eiwit zo goed mogelijk op te vullen. Echter, veelal is de binding tussen de sleutel en het slot (het molecuul en het eiwit) heel subtiel bepaald, denk hierbij maar eens aan de verschillen tussen echte sleutels. Ook kleine groepen aan het molecuul kunnen een dramatisch effect hebben op de binding van het molecuul aan de receptor. <br />\
               Bij remmers van receptoren als de Bcr-Abl receptor bestaat er een magische methyl-groep. Dit wordt ook echt zo genoemd, omdat deze kleine methyl-groep erg belangrijk voor de binding van het molecuul aan de receptor blijkt te zijn. Dit komt doordat de methyl groep zorgt voor een ideale vouwing van het molecuul zodat dit 3D goed past in de holte en ook doordat deze methyl groep de holte precies opvult. Dit is echt maatwerk! Kun jij vinden waar op de middelste phenylring de magische methylgroep moet zitten?',
    Help    : 'Klik op de modellen en kijk naar de moleculen van de verschillende antwoorden in de holte. Welk molecuul, dus met op de verschillende plaatsen een methylgroep past perfect in de holte?',
    Answers : [
      {
        Answer   : 'Methyl-1',
        Meter    : 10,
        Help     : 'Kijk eens goed naar het model van dit molecuul in de holte van het eiwit, past deze methyl? Is er geen botsing met de wanden van de holte?',
        ViewScr  : 'frame 7.1; display 7.1',
        Choice   : 'Nee, deze methyl botst tegen de wanden van de holte. Dit geeft negatieve Vanderwaalsenergie waardoor de binding van het molecuul aan het eiwit zwakker wordt.',
        ChoiceScr: 'frame 7.1; display 7.1',
        Right    : 0
      },
      {
        Answer   : 'Methyl-2',
        Meter    : 14,
        Help     : 'Kijk goed naar het model van dit molecuul in de holte van het eiwit, past deze methyl? Dus geen botsing met de wanden van de holte?',
        ViewScr  : 'frame 7.2; display 7.2',
        Choice   : 'Dit is inderdaad de positie van de magische methyl. De holte wordt perfekt opgevuld, en tevens zorgt deze methyl ervoor dat het molecuul precies is voorgevormd zodat het molecuul goed past in de holte van het eiwit. Dit molecuul bindt zeer sterk aan het eiwit. Ga snel naar de volgende vraag om te kijken of we dit molecuul nog verder kunnen verbeteren.',
        ChoiceScr: 'frame 7.2; display 7.2',
        Right    : 1
      },
      {
        Answer   : 'Methyl-3',
        Meter    : 12,
        Help     : 'Kijk eens goed naar het model van dit molecuul in de holte van het eiwit, past deze methyl? Dus geen botsing met de wanden van de holte?',
        ViewScr  : 'frame 7.3; display 7.3',
        Choice   : 'Dit is ook een logisch antwoord (maar niet de goede!), deze methyl lijkt ook te passen in de holte en dit molecuul is ook gemaakt en getest. Helaas bleek deze methyl er niet voor te zorgen dat het molecuul is voorgevormd om goed te passen in de holte en deze perfect op te vullen. Probeer nog eens een ander antwoord.',
        ChoiceScr: 'frame 7.3; display 7.3',
        Right    : 0
      },    
      {
        Answer   : 'Methyl-4',
        Meter    : 10,
        Help     : 'Kijk eens goed naar het model van dit molecuul in de holte van het eiwit, past deze methyl? Dus geen botsing met de wanden van de holte?',
        ViewScr  : 'frame 7.4; display 7.4',
        Choice   : 'Nee, deze methyl botst tegen de wanden van de holte. Dit geeft negatieve Vanderwaalsenergie waardoor de binding van het molecuul aan het eiwit zwakker wordt.',
        ChoiceScr: 'frame 7.4; display 7.4',
        Right    : 0
      }    
    ],
    Note    : '',
    Meter   : 10,
    PreScr  : 'isoSurface Iso_MEP model 1.2 "2HYY_R3_mep.jvxl" ; set backgroundmodel 1.2; frame 6.1; TransLucentVal = 0.00; message _loop1; if ( @TransLucentVal < 1);  color $Iso_Full_MEP translucent @TransLucentVal; TransLucentValMEP = 1.0-@TransLucentVal; color $Iso_MEP translucent @TransLucentValMEP; TransLucentVal = @TransLucentVal+0.1; delay 0.3; goto _loop1; else; color $Iso_Full_MEP translucent 1.00; color $Iso_MEP translucent 0.0; endif; moveto 2 {432 -247 868 159} 280 -1.2 34.2; load append "R3.sdf"; set backgroundmodel 1.2; frame 6.1;', 
    ViewScr : null,
    PostScr : 'frame 7.2; display 7.2; moveto 2 {930 141 340 142} 100 0 0 ; TransLucentVal = 1.00; message _loop1; if ( @TransLucentVal > 0);  color $Iso_Full_mep translucent @TransLucentVal; TransLucentVal = @TransLucentVal-0.1; delay 0.2; goto _loop1; else; color $Iso_Full_mep translucent 0.00; color $Iso_mep translucent 0.00; endif;'
  },
  ////////// 11 - find the right position of the solubaliser \\\\\\\\\\
{
    Type    : TQuestion,
    Head    : 'Wat maakt een goed passende sleutel tot een goed geneesmiddel?',
    Text    : 'Stapsgewijze verbetering van het molecuul hebben nu een molecuul opgeleverd wat een zeer sterke binding aan de receptor heeft. De sleutel past perfect op het slot! Echter om nu ook een goed geneesmiddel te zijn, moet het molecuul naast sterk binden aan de receptor ook aan nog aan meer voorwaarden voldoen.<br />\
               Belangrijk is dat het molecuul in hoge concentraties in het bloed kan komen nadat het als pil is ingenomen. Als dit niet lukt, zal het molecuul niet de plaats van bestemming in het lichaam kunnen bereiken en dus geen effect hebben.<br />\
               Voor deze laatste voorwaarde is het belangrijk dat de stof oplosbaar is in water. <br />\
               Het molecuul dat je ontworpen hebt, bindt goed aan de receptor, maar is absoluut niet oplosbaar in water. In het geneesmiddel-onderzoek zijn er groepen bekend die, wanneer deze aan een molecuul worden gezet, de wateroplosbaarheid van deze moleculen sterk verbeteren. Deze groepen zijn polair en hydrofiel.<br />\
               Echter, het molecuul met deze groep moet natuurlijk nog wel in de holte van de receptor passen, anders wordt de binding weer te zwak en gaat de werking weer verloren!<br />\
               Een bekende groep die de wateroplosbaarheid van moleculen kan verbeteren is de methylpiperidine groep (zie onderstaande moleculen/modellen). Waar kan deze groep op ons molecuul worden gezet zodat dit nog steeds past in de holte van het eiwit?',
    Help    : 'Deze wateroplosbare groep is op verschillende plaatsen op het molecuul gezet, en de modellen van deze verschillende moleculen kun je zien bij de verschillende antwoorden. Welk molecuul past nog het beste in de holte? Dus op welke plaats mag deze groep gezet worden zonder dat de binding van het molecuul zwakker wordt, omdat het molecuul met zijn zijgroep tegen de wanden van de holte botst? Klik hiervoor maar eens op de verschillende modellen achter de antwoorden (view).',
    Answers : [
      {
        Answer   : 'Positie 1',
        Meter    : 15,
        Help     : 'Kijk eens goed naar het model van dit molecuul in het eiwit, past deze groep? Dus geen botsing met de wanden van de holte?',
        ViewScr  : 'frame 8.1; display 8.1',
        Choice   : 'Ja inderdaad! Er is hier ruimte voor deze wateroplosbare groep. Op deze plaats botst deze groep niet tegen de wanden van de holte van het eiwit, maar hangt juist een beetje buiten het eiwit. Hier is daarom ook alle ruimte voor polaire en hydrofiele groepen.<br />\
                    Geweldig, het is je gelukt om een goede sleutel te maken die sterk bindt aan het Bcr-Abl eiwit maar ook goed wateroplosbaar is! Dit molecuul zal getest moeten worden om te kijken of je met dit geneesmiddel leukemie kunt behandelen.',
        ChoiceScr: 'frame 8.1; display 8.1',
        Right    : 1
      },
      {
        Answer   : 'Positie 2',
        Meter    : 10,
        Help     : 'Kijk eens goed naar het model van dit molecuul in het eiwit, past deze groep? Dus geen botsing met de wanden van de holte?',
        ViewScr  : 'frame 8.2; display 8.2',
        Choice   : 'Nee, deze groep botst tegen de wand van de holte. Dit geeft negatieve Vanderwaalsenergie waardoor de binding van het molecuul aan het eiwit zwakker wordt.',
        ChoiceScr: 'frame 8.2; display 8.2',
        Right    : 0
      },    
      {
        Answer   : 'Positie 3',
        Meter    : 12,
        Help     : 'Kijk eens goed naar het model van dit molecuul in het eiwit, past deze groep? Botst het molecuul met deze groep niet tegen de wanden van de receptor?',
        ViewScr  : 'frame 8.3; display 8.3',
        Choice   : 'Nee, deze groep botst tegen de wand van de holte. Dit geeft negatieve Vanderwaalsenergie waardoor de binding van het molecuul aan het eiwit zwakker wordt.',
        ChoiceScr: 'frame 8.3; display 8.3',
        Right    : 0
      }
    ],
    Note    : '',
    Meter   : 14,
    PreScr  : 'moveto 2 {998 -18 60 129.05} 344.9 -24.2 20.4; load append "R4.sdf"; set backgroundmodel 1.2; frame 7.2;', 
    ViewScr : null,
    PostScr : 'frame 8.1; display 8.1; moveto 2 {794 498 -349 76.08} 320.44 8.0 12.83; TransLucentVal = 0.00; message _loop1; if ( @TransLucentVal < 1);  color $Iso_mep translucent @TransLucentVal; TransLucentVal = @TransLucentVal+0.1; delay 0.2; goto _loop1; else; color $Iso_mep translucent 1.00; endif;'
  },
  ////////// 12 - Glivec \\\\\\\\\\
  {
    Type    : TText,
    Head    : 'Glivec',
    Text    : 'Het molecuul wat je hebt gemaakt is de aktieve stof in een echt bestaand geneesmiddel. Het molecuul heet Imatinib en bindt sterk aan het Bcr-Abl eiwit. Hierdoor kan ATP niet meer aan dit eiwit binden en kan dit eiwit niet meer geaktiveerd worden. De ongeremde celdeling wordt hierdoor gestopt. Sinds 2001 is dit molecuul onder de naam Glivec beschikbaar voor de behandeling van leukemie. Novartis heeft dit middel ontwikkeld, en sindsdien zien er wereldwijd al vele patienten mee behandeld en zijn er zeer goede resultaten mee bereikt.',
    Help    : null,
    Note    : null,
    Meter   : 15,
    PreScr  : null, 
    ViewScr : null,
    PostScr : null
  },
  ////////// 13 - eindpagina \\\\\\\\\\
  {
    Type    : TText,
    Head    : 'De Sleutel en het Slot.',
    Text    : 'Dit was de door NV Organon ontwikkelde module om jullie te laten zien hoe geneesmiddelen-onderzoekers te werk gaan om stoffen te bedenken die mogelijk goede geneesmiddelen zouden kunnen zijn. Er is nog wel wat voor nodig om van een goed startpunt molecuul een goed geneesmiddel te maken. Stapsgewijs worden er verschillende groepen aan een molecuul gezet en wordt bepaald of het gemaakte molecuul nog steeds goed bindt aan het eiwit. Tijdens deze optimalisatie worden wel 500 tot 1000 moleculen bedacht en gesynthetiseerd. Hiervoor is veel kennis van de scheikunde en de biologie nodig, zoals jullie hebben kunnen zien!',
    Help    : null,
    Note    : 'Druk op het kruisje boven aan de pagina om af te sluiten.',
    Meter   : null,
    PreScr  : null,
    ViewScr : null,
    PostScr : null
  }
];

////////// some more settings \\\\\\\\\\

Page_Title = "Sleutel / Slot - door NV Organon / Shering-Plough  voor Jet-Net";
DefaultLoadScript = '"spacefill off; set echo bottom center; font echo 20 ariel bold; color echo red; wireframe 75"';
InitScript = 'background white; set disablePopupMenu on; frank off; set defaultLoadScript ' + DefaultLoadScript;
Goto_PageID = 9;

/********** Procedure voor het creeren van isosurfaces: **********\
- Creerd de file in DS visualizer. (bv doorsnee)
- Add hydrogens
- Calculate Charges
- Save as Mol2
- Open in JMOL aplicatie
- isosurface molecular map mep
- write isosurface "outputfilename.jvxl"
om te openen:
  iosurface "outputfilename.jvxl"
\*****************************************************************/
