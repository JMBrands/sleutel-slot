Pages = [
  ////////// 1 - intro \\\\\\\\\\
  {
    Type: TText,
    Head: 'De Sleutel en het Slot.',
    Text: 'NV Organon is een bedrijf dat wereldwijd medicijnen ontwikkelt, produceert en verkoopt.\
               Om jullie te laten zien hoe we bij Organon medicijnen ontwerpen, is deze module gemaakt.\
               Eerst leggen we uit hoe deze module werkt. Daarna ga je aan de hand van vragen, zelf het geneesmiddel ontwerpen. <br /><br />\
               De volgende button kun je soms tegenkomen: <br /><br />\
               <img height="20" alt="Help" src="help.gif" width="20" align="absMiddle" />: Als je hier op klikt krijg je extra uitleg.<br /><br />\
               <img src="show.gif" height="20px" width="20px" align="absmiddle" alt="Laat dit zien." />: Als je hier op klikt, zie je de moleculen in het linkse venster verschijnen of veranderen. Zo kun je het antwoord bekijken om een goede keuze te kunnen maken.<br /><br />\
               <img src="stereo.gif" height="20px" width="20px" align="absmiddle" alt="3D" />: Als je hier op klikt, kun je met je 3D bril het molecuul in 3D bekijken.<br /><br />\
               <img height="20" alt="Kies dit antwoord" src="choose.gif" width="20" align="absMiddle" />: Als je op deze knop klikt, kies je het antwoord. Bij het juiste antwoord verschijnt de ga verder button onderaan in je scherm.<br /><br />\
               Links zie je een water molecuul afgebeeld in boletjes en stokjes.\
               Als we dadelijk grote moleculen gaan bekijken kun je alleen de buitenkant zien. Daarom worden de moleculen ook vaak als stokjes weergegeven zodat je ook de structuur binnenin kunt zien.\
               Om juist alleen het oppervlak (de buitenkant) van een molecuul te zien, wordt een model van bollen met lading gebruikt, waarbij rood negatieve lading is en blauw positieve lading. Klik hier om te zien hoe dat er allemaal uitziet:\
              ',
    Help: null,
    Note: null,
    Stereo: null,
    Meter: null,
    PreScr: 'load water.mol2;  set spinX 0; set spinY -70; set spinZ 0; spacefill off; wireframe off; moveto 0 1 1 1 -180 -60 -60 -60; wireframe 30; spacefill -20;  hover off; label off; moveto 3 0 0 0 0 80;',
    ViewScr: 'spin on; delay 1.5; SpaceFillVal = -20; WireFrameVal = 40; message _loop1;  if (@SpaceFillVal < 0); spacefill @SpaceFillVal; wireframe @WireFrameVal; delay 0.05 ; SpaceFillVal = @SpaceFillVal+1; WireFrameVal = @WireFrameVal+1; goto _loop1; else; spacefill -10; wireframe 60; endif ; delay 1.5; message _loop2;  if (@SpaceFillVal > -90); spacefill @SpaceFillVal; wireframe @WireFrameVal; delay 0.05 ; SpaceFillVal = @SpaceFillVal-1; WireFrameVal = @WireFrameVal-0.5; goto _loop2; else; spacefill -90; wireframe off; endif; echo Calculating ...; isosurface molecular map MEP translucent 1.00; echo; delay 3; TransLucentVal = 1.00; message _loop3; if ( @TransLucentVal > 0); color isosurface translucent @TransLucentVal; delay 0.05; TransLucentVal = @TransLucentVal-0.03; goto _loop3; else; color isosurface translucent 0.00; spacefill off ; endif;',
    //    ViewScr : 'load ok.mol; frames all; color atoms [x001E55]; spacefill off; wireframe off; moveto 0 1 0 0 90 0 0 -55; wireframe 60; set spinX 90; set spinY 0; set spinZ 0; echo; moveto 1 0 0 0 0 0 0 0; spin on;',
    PostScr: 'spin off'
  },
  ////////// 2 - "How to" with water \\\\\\\\\\
  {
    Type: TText,
    Head: 'Moleculen bewegen',
    Text: 'Om de vragen te beantwoorden zul je de eiwitten en potentiele medicijnen als moleculen kunnen bekijken aan de linker kant van je scherm.\
              Je kunt nu alvast oefenen met het water-molecuul dat is weergegeven. Rood is het zuurstofatoom, en beide waterstofatomen zijn wit.\
              <p><b>Zoomen:</b><br />\
              Scrollen met de scrollbutton.</p>\
              <p><b>Draaien</b><br />\
              Met de linker muisknop slepen.</p>\
              <p><b>Kantelen</b><br />\
              Shift + met de linker muisknop slepen (horizontaal).</p>\
              ',
    Help: null,
    Note: 'Probeer alle bewegingen even uit en ga dan verder.',
    Stereo: null,
    Meter: null,
    PreScr: null,
    ViewScr: null,
    PostScr: 'moveto 3 1 1 1 -180 -100 100 -100; zap'
  },
  ////////// 3 - Op zoek naar een nieuw geneesmiddel \\\\\\\\\\
  {
    Type: TText,
    Head: 'Op zoek naar een nieuw geneesmiddel',
    Text: 'Leukemie is een vorm van bloedkanker waarbij de witte bloedcellen, die normaal gesproken tegen infecties beschermen, ongeremd zijn gaan delen. Omdat deze vorm van kanker niet een vaste tumor heeft die operatief verwijderd kan worden, en de kanker per definitie zich door het bloed verspreid heeft, is de beste behandeling van leukemie een waarbij een geneesmiddel wordt toegediend (chemotherapie).<br />\
               In deze module gaan we op zoek naar een geneesmiddel tegen leukemie. Jij gaat proberen een middel te ontwerpen waardoor veel leukemie-patienten hopelijk genezen kunnen worden!\
              ',
    Help: null,
    Note: null,
    Stereo: null,
    Meter: null,
    PreScr: 'load pil.mol; color atoms orange; spacefill off; wireframe off; moveto 0 1 1 1 -180 -60 -60 60; wireframe 100;  set spinX 0; set spinY -120; set spinZ 0; spin on; echo; moveto 2 0 0 0 0 80; ',
    ViewScr: null,
    PostScr: 'moveto 2 1 1 1 180 -100 100 -100; zap'
  },
  ////////// 4 - find the pocket \\\\\\\\\\
  { // FIXED
    Type: TQuestion,
    Head: 'Vind het sleutelgat in het slot',
    Text: 'De ontwikkeling van een nieuw geneesmiddel start met het uitvinden van welk eiwit (slot) ontregeld is geraakt waardoor de ziekte wordt veroorzaakt. Bij een vorm van leukemie is een eiwit, wat hiernaast in stokjesmodel staan, door een defect continu aktief geworden.<br />\
               In aktieve vorm zorgt dit eiwit ervoor dat de cel gaat delen. Continue aktiviteit resulteert in ongeremde celdeling.<br />\
               Dit eiwit kun je zien als een slot waar een geneesmiddel als een sleutel op kan aangrijpen om dit eiwit inaktief te maken, om op deze manier de ongeremde celdeling te stoppen. In dit eiwit (slot) zit een holte, het sleutelgat, waar een geneesmiddel kan binden.\
               Door het eiwit te draaien kun je proberen deze holte te vinden, zie jij waar een geneesmiddel aan dit eiwit zou kunnen binden? Klik op de onderstaande view knop om de oppervlakte van het eiwit te zien. Zet dan je 3D bril op en zet onderaan het scherm de 3D weergave aan. Ga nu op zoek naar het sleutelgat.\
               Als je op de view knop achter de antwoorden klikt verschijnt een pijl die de mogelijke holtes aanwijst.',
    Help: 'De belangrijkste eigenschappen van een holte (sleutelgat) zijn: <ol><li>Hij mag niet te groot zijn want dan kan het molecuul (sleutel) te weinig contact maken met het eiwit (slot).</li><li>Natuurlijk moet hij ook niet te klein zijn zodat het molecuul er wel in kan.</li><li>Als laatste moet de holte zodanig diep zijn dat een groot deel van het molecuul erin past, anders is de binding/interactie van het molecuul aan het eiwit niet sterk genoeg.</li></ol>',
    Answers: [
      {
        Answer: 'Holte 1',
        Meter: null,
        Help: 'Is deze holte groot genoeg om een molecuul (geneesmiddel) in te passen, en is de holte ook toegankelijk voor moleculen (ingang groot genoeg)? Voor meer toelichting en tips kijk eens bij de help van deze vraag.',
        ViewScr: 'draw arrow1 ARROW {-6.9648438 -11.069992 18.9561} WIDTH 0.3 {-2.6592789 -5.0055885 17.103634} 180; color draw blue; moveto 2 {-834 552 -11 77.32} ',
        Choice: 'Fout, maar je zit al in de goede richting. als je goed kijkt kun je zelfs helemaal door het sleutelgat heen kijken. Dit sleutelgat heeft 2 ingangen, kijk eens naar de andere ingang, zou deze niet beter toegankelijk zijn? Kijk met de view knop achter de andere antwoorden of daar geen betere optie bij zit.',
      ChoiceScr: 'draw arrow1 ARROW {-6.9648438 -11.069992 18.9561} WIDTH 0.3 {-2.6592789 -5.0055885 17.103634} 180; color draw red; moveto 2 {-834 552 -11 77.32}',
        Right: 0
      },
      {
        Answer: 'Holte 2',
        Meter: null,
        Help: 'Is deze holte groot genoeg om het gehele molecuul (geneesmiddel) in te passen? Voor meer toelichting en tips kijk eens bij de help van deze vraag.',
        ViewScr: 'draw arrow1 ARROW {-20.04795 4.29673 8.348911} WIDTH 0.3 {-12.060478 6.7303314 12.697704} 180; color draw blue; moveto 2 {-562 805 191 119.57} ',
        Choice: 'Fout, deze holte is te klein en niet diep genoeg om een een molecuul (geneesmiddel) in te passen.',
        ChoiceScr: 'draw arrow1 ARROW {-20.04795 4.29673 8.348911} WIDTH 0.3 {-12.060478 6.7303314 12.697704} 180; color draw green; moveto 2 {-562 805 191 119.57}',
        Right: 0
      },
      {
        Answer: 'Holte 3',
        Meter: null,
        Help: 'Kijk eens bij de help van de vraag. In het lijstje staan de belangrijkste eigenschappen van een holte. Voldoet de holte aan deze voorwaarden?',
        ViewScr: 'draw arrow1 ARROW {14.661102 22.844818 6.3012085} WIDTH 0.3 {11.053665 17.003113 8.492386} 180; color draw blue; moveto 2 { 417 -846 -332 120.6}',
        Choice: 'Goed! Dit is inderdaad een holte (sleutelgat) waar perfect een geneesmiddel in kan passen. Hij is niet te breed of te smal en diep genoeg. Ga verder naar de volgende vraag.',
        ChoiceScr: 'draw arrow1 ARROW {14.661102 22.844818 6.3012085} WIDTH 0.3 {11.053665 17.003113 8.492386} 180; color draw green; moveto 2 { 417 -846 -332 120.6}',
        Right: 1
      }
    ],
    Note: 'Als je de goede holte hebt gevonden kun je verder naar de volgende vraag.',
    Stereo: 1,
    Meter: null,
    PreScr: 'spacefill off; wireframe off; load 2HYY.mol2; spacefill off; wireframe off; moveto 0 1 1 1 -180 -60 -60 -60; wireframe 38; moveto 4 0 0 0 0 100; delay 0.000001; isoSurface Iso_Full file "2HYY.jvxl"; isoSurface Iso_Full translucent 1.00',
    ViewScr: 'isoSurface Iso_Full translucent 0.00; wireframe off;',
    PostScr: 'draw off; isoSurface Iso_Full translucent 0.00; hide 0; spin off'
  },
  ////////// 5 - De natuurlijke sleutel \\\\\\\\\\
  { // FIXED
    Type: TText,
    Head: 'De natuurlijke sleutel van dit eiwit',
    Text: 'In dit eiwit zit inderdaad een duidelijke holte (die je net hebt aangewezen) vergelijkbaar met een sleutelgat waar moleculen als sleutels inpassen. Deze holte zit er natuurlijk niet voor niets. Normaal bindt op deze plaats het molecuul ATP (natuurlijke sleutel) wat er voor zorgt dat het eiwit (slot) kan worden geaktiveerd. Wanneer een geneesmiddel in deze holte is gebonden kan de natuurlijke sleutel ATP niet meer binden en kan het eiwit dus niet meer aktief worden. Klik op view om de binding van ATP in de holte van dit eiwit te zien.',
    Help: null,
    Note: null,
    Stereo: 1,
    Meter: null,
    PreScr: 'wireframe off; moveto 2 {914 366 174 136.62} 221.28 0 22.8; delay 0.1; isoSurface Iso_Part model 1.2 "2HYY_R0.jvxl"; TransLucentVal = 0.00; load append "ATP.sdf"; frame *;  set backgroundmodel 1.2;',
    ViewScr: 'select */1; wireframe off; select *; isoSurface Iso_Full translucent 1.00;',
    PostScr: 'moveto 2 {914 366 174 136.62} 221.28 0 22.8; isoSurface Iso_Full translucent 1.00 ; hide all; spin off'
  },
  ////////// 6 - find the starting scafold \\\\\\\\\\
  { // FIXED
    Type: TQuestion,
    Head: 'De zoektocht naar een goede sleutel kan beginnen.',
    Text: 'De zoektocht naar een goede sleutel begint met het passen van heel veel sleutels op het slot. In praktijk worden veel moleculen (>20.000!) getest om te bepalen of ze in ieder geval een beetje binden in de holte van het eiwit. Het gevonden molecuul moet vervolgens nog verder worden ontwikkeld met als doel het geneesmiddel aktiever te maken (betere binding aan de holte van het eiwit) en mogelijke bijwerkingen te verminderen.<br />\
               Welke van onderstaande mogelijkheden zou je kiezen als startpunt voor verdere ontwikkeling?\
              ',
    Help: 'Een ideaal startmolecuul heeft een zo sterk mogelijke binding met het eiwit. Echter daarbij is het molecuul niet te groot. Verdere ontwikkeling van een molecuul tot een geneesmiddel gebeurt veelal door het toevoegen van extra staarten met gewenste eigenschappen (bijvoorbeeld interactie met de holte) aan het startmolecuul. Als het startmolecuul al erg groot is, wordt dit lastig zonder dat het molecuul te groot wordt.',
    Answers: [
      {
        Answer: 'Molecuul 1',
        Meter: null,
        Help: 'Is dit molecuul groot genoeg om enigzins binding/interactie met de holte te hebben? Voor meer toelichting en tips kijk eens bij de help van deze vraag.',
        ViewScr: 'frame 3.1; display 3.1',
        Choice: 'Nee, dit molecuul is ethanol. Het is een erg klein molecuul met nauwelijks interactie met de holte waardoor het zeer zwak en niet selectief aan het slot zal binden. Om dit molecuul verder uit te bouwen tot de perfecte sleutel die sterk bindt aan het slot zal veel werk zijn. Probeer een ander antwoord, en kijk voor toelichting en tips bij de help van deze vraag.',
        ChoiceScr: 'frame 3.1; display 3.1',
        Right: 0
      },
      {
        Answer: 'Molecuul 2',
        Meter: null,
        Help: 'Is dit molecuul groot genoeg om enigzins binding/interactie met de holte te hebben en daarbij nog klein genoeg voor verdere verbetering? Voor meer toelichting en tips kijk eens bij de help van deze vraag.',
        ViewScr: 'frame 3.2; display 3.2',
        Choice: 'Ja, dit is een zeer geschikt startpunt voor verdere ontwikkeling. Het molecuul is klein waardoor er nog ruimte (in molecuulgewicht) is voor het inbouwen van extra groepen die een gewenst effect hebben zoals een sterkere binding aan het slot/receptor. Een ideaal geneesmiddel heeft een molecuulgewicht kleiner dan 550 g/mol zodat het nog als een pil kan worden ingenomen.\
                    Nu we dit startpunt gevonden hebben, gaan we de eigenschappen van dit molecuul verder verbeteren. Ga daarvoor naar de volgende vraag.',
        ChoiceScr: 'frame 3.2; display 3.2',
        Right: 1
      },
      {
        Answer: 'Molecuul 3',
        Meter: null,
        Help: 'Kan dit molecuul nog verder verbeterd worden zonder dat het molecuul te groot wordt? Kijk eens bij de help van deze vraag en lees de voorwaarden voor een ideaal startmolecuul.',
        ViewScr: 'frame 3.3; display 3.3',
        Choice: 'Nee, deze sleutel is geen goed startpunt voor optimalisatie. Het molecuul is al erg groot en volledig uitgerust met allerlei (niet nodige) zijstaarten aan het molecuul. Probeer een ander antwoord en kijk voor toelichting en tips bij de help van deze vraag',
        ChoiceScr: 'frame 3.3; display 3.3',
        Right: 0
      }
    ],
    Note: 'Als je het goede startmolecuul gevonden hebt, kun je naar de volgende vraag.',
    Stereo: 1,
    Meter: null,
    PreScr: 'load append "R0.sdf"; set backgroundmodel 1.2; hide all;',
    ViewScr: null,
    PostScr: 'moveto 2 {914 366 174 136.62} 221.28 0 22.8;'
  },
  ////////// 7 - find the pocket R1 group \\\\\\\\\\
  { // FIXED
    Type: TQuestion,
    Head: 'Stap 1 naar een verbeterde sleutel',
    Text: 'Hier zie je je gekozen startpunt in de holte van het eiwit. Dit molecuul bindt echter nog vrij zwak aan het eiwit. Om deze binding te versterken gaan we proberen de holte in het eiwit verder op te vullen zodat door middel van VanderWaals-interacties het molecuul sterker aan het eiwit bindt.<br />\
               Aan de rechterzijde (op het scherm) van het molecuul is duidelijk nog ruimte in de holte om extra groepen aan te bouwen. <br />\
               Welke van onderstaande groepen zou het beste aan het molecuul gezet kunnen worden zodat deze het molecuul optimaal in het eiwit past en de holte al beter wordt opgevuld? Bekijk de moleculen in de holte door op de view knop achter de antwoorden te klikken.',
    Help: 'Een molecuul heeft de sterkste binding aan de receptor als: <br />\
               1) de holte zo goed mogelijk wordt opgevuld zodat er veel positieve VanderWaalsinteracties kunnen worden gevormd<br />\
               2) het molecuul niet botst met de zijwanden van de holte <br />\
               3) er naast VanderWaals-interacties ook waterstofbruggen kunnen worden gevormd. <br />\
               VanderWaals-interacties zijn intramoleculaire krachten die tussen tijdelijke dipolen in apolaire moleculen (of apolaire delen van moleculen) worden gevormd. Waterstofbruggen zijn sterker en worden gevormd tussen een electronegatief atoom als zuurstof en een naburig H (proton) aan een ander electronegatief atoom (zoals N-H of O-H).\
              ',
    Answers: [
      {
        Answer: 'Groep 1',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in de receptor, is de holte beter opgevuld, of zou er nog een grotere groep in passen?',
        ViewScr: 'frame 4.1; display 4.1',
        Choice: 'Fout, de holte wordt nog niet optimaal opgevuld, de binding zal verder versterkt worden als hier een grotere groep aan wordt gezet, zodat er meer Vanderwaalsinteracties kunnen bijdragen aan de binding. Probeer een ander antwoord.',
        ChoiceScr: 'frame 4.1; display 4.1',
        Right: 0
      },
      {
        Answer: 'Groep 2',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in de receptor, is de holte beter opgevuld, of zou er nog een grotere groep in passen zonder tegen de wanden van de holte te botsen?',
        ViewScr: 'frame 4.2; display 4.2',
        Choice: 'Fout, deze groep vult de holte al beter op, waardoor het molecuul al sterker aan de receptor bindt in vergelijking met het startmolecuul. Echter de holte wordt nog niet optimaal opgevuld, het kan dus nog beter! Probeer een ander antwoord.',
        ChoiceScr: 'frame 4.2; display 4.2',
        Right: 0
      },
      {
        Answer: 'Groep 3',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in de receptor, wordt de holte goed opgevuld?',
        ViewScr: 'frame 4.3; display 4.3',
        Choice: 'Goed! Deze groep vult de holte goed op, waardoor de binding van dit molecuul aan de receptor al veel sterker is geworden in vergelijking met het startpunt. Prima! We gaan in de volgende vraag dit molecuul verder verbeteren.',
        ChoiceScr: 'frame 4.3; display 4.3',
        Right: 1
      }
    ],
    Note: 'Als je de goede groep hebt gevonden op deze positie, kun je naar de volgende vraag.',
    Stereo: 1,
    Meter: null,
    PreScr: 'load append "R1.sdf"; set backgroundmodel 1.2; display 3.2; frame 3.2;',
    ViewScr: null,
    PostScr: 'frame 4.3; display 4.3; moveto 2 {930 141 340 142} 100 0 0; isoSurface Iso_Full translucent 0.00; spin off'
  },
  ////////// 8 - set the right donors acceptors for the R1 group (R1B) \\\\\\\\\\
  { // FIXED
    Type: TQuestion,
    Head: 'Waterstofbruggen?', //O22/5.3 H32/5.3
    Text: 'Onderstaande verbindingen vullen de holte optimaal in, echter de binding van de verschillende moleculen aan het eiwit is duidelijk verschillend. De kleuren in de weergave van het eiwit geven waterstofbrugacceptoren in rood aan (- lading), en waterstofbrugdonoren (+ lading) in blauw weer. Druk op de view button om deze kleuren te zien, gebruik niet de 3D bril en 3D weergave. Welk molecuul zal het sterkst aan de receptor binden?',
    Help: 'Een molecuul heeft de sterkste binding aan de receptor als: <br />\
               1) de holte zo goed mogelijk wordt opgevuld zodat er veel positieve Vanderwaalsinteracties kunnen worden gevormd <br />\
               2) het molecuul niet botst met de zijwanden van de holte <br />\
               3) er naast Vanderwaals-interacties ook waterstofbruggen kunnen worden gevormd. <br />\
               Vanderwaals-interacties zijn intramoleculaire krachten die tussen tijdelijke dipolen in apolaire moleculen (of apolaire delen van moleculen) worden gevormd. Waterstofbruggen zijn sterker en worden gevormd tussen een electronegatief atoom als zuurstof en een naburig H (proton) aan een ander electronegatief atoom (zoals N-H of O-H).\
              ',
    Answers: [
      {
        Answer: 'Groep 1',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in de receptor, zijn er naast Vanderwaalsinteracties ook waterstofbruggen mogelijk tussen het molecuul/sleutel en de holte/sleutelgat?',
        ViewScr: 'frame 5.1; display 5.1',
        Choice: 'Nee, dit molecuul kan geen waterstofbruggen vormen met de holte van het eiwit. Deze waterstofbruggen kunnen ervoor zorgen dat het molecuul veel sterker bindt aan het eiwit. Probeer het andere antwoord en kijk eens naar het model door op de view knop te klikken.',
        ChoiceScr: 'frame 5.1; display 5.1',
        Right: 0
      },
      {
        Answer: 'Groep 2',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in de receptor, zijn er naast Vanderwaalsinteracties ook waterstofbruggen mogelijk tussen het molecuul/sleutel en de holte/sleutelgat?',
        ViewScr: 'frame 5.2; display 5.2',
        Choice: 'Nee, dit is niet het goede antwoord. Deze groep kan naast de pocket optimaal vullen, ook waterstofbruggen vormen. Echter in dit molecuul passen de waterstofbruggen tussen het molecuul en het eiwit niet (niet donor met acceptor, en acceptor met donor (dus - met + lading, en + met - lading)), waardoor er geen sterke waterstofbruggen kunnen worden gevormd, probeer een ander antwoord.',
        ChoiceScr: 'frame 5.2; display 5.2',
        Right: 0
      },
      {
        Answer: 'Groep 3',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in de receptor, zijn er naast Vanderwaalsinteracties ook waterstofbruggen mogelijk tussen het molecuul/sleutel en de holte/sleutelgat?',
        ViewScr: 'frame 5.3; display 5.3',
        Choice: 'Goed! Deze groep heeft naast dat de pocket optimaal gevuld wordt ook nog de mogelijkheid om extra waterstofbruggen te vormen tussen het molecuul en de holte. Hierdoor wordt de binding van het molecuul aan de receptor verder versterkt. Goed! <br />\
                    Dit molecuul gaan we in de volgende vraag verder verbeteren. Onthoud hierbij dat zowel optimale invulling van de holte alswel de vorming van waterstofbruggen de binding van het molecuul aan de holte kunnen versterken.',
        ChoiceScr: 'frame 5.3; display 5.3',
        Right: 1
      }
    ],
    Note: null,
    Stereo: null,
    Meter: null,
    PreScr: 'isoSurface Iso_Part model 1.2 "2HYY_R1.jvxl"; set backgroundmodel 1.2; frame 4.3; isoSurface Iso_Full translucent 1.00; moveto 2 {772 522 363 87.5} 370 -4.2 29.0; load append "R1B.sdf"; set backgroundmodel 1.2; frame 4.3; isoSurface Iso_Part_MEP model 1.2 "2HYY_R1_mep.jvxl"  translucent 1.0; isoSurface Iso_Full_MEP model 1.2 "2HYY_mep.jvxl" translucent 1.0;',
    ViewScr: 'isosurface Iso_Part off; isosurface Iso_Part_MEP translucent 0.0; set backgroundmodel 1.2; ',
    PostScr: 'isosurface Iso_Part_MEP translucent 0.0; isosurface Iso_Part translucent 1.0; frame 5.3; display 5.3; moveto 2 {930 141 340 142} 100 0 0 ; isoSurface Iso_Full_MEP translucent 0.00; isosurface Iso_Part_MEP translucent 1.0; spin off'
  },
  ////////// 9 - find the right R2 group \\\\\\\\\\
  { // FIXED
    Type: TQuestion,
    Head: 'Stap 2 naar een verbeterde sleutel',
    Text: 'Als je kijkt naar het molecuul dat je nu hebt opgebouwd in de receptor, zie je dat er nog een ruimte in de holte niet wordt opgevuld. Deze holte kan worden benut om het molecuul, onze sleutel, een stap verder te verbeteren. Welke groep van de antwoorden hieronder zou je aanbrengen op het molecuul om de binding aan het eiwit verder te versterken?',
    Help: 'Klik op de modellen en kijk naar de moleculen van de verschillende antwoorden in de holte. Welk molecuul heeft de meest positieve interacties met de holte van het eiwit? Denk hierbij aan zowel Vanderwaals-interacties (vulling van de holte) als aan waterstofbruggen.',
    Answers: [
      {
        Answer: 'Groep 1',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in het eiwit, vult deze groep de holte goed op en zijn er naast Vanderwaalsinteracties ook waterstofbruggen mogelijk tussen het molecuul/sleutel en de holte/sleutelgat?',
        ViewScr: 'frame 6.1; display 6.1',
        Choice: 'Ja! Inderdaad het molecuul met deze groep heeft naast dat de holte optimaal gevuld wordt ook nog de mogelijkheid om een extra waterstofbrug te vormen tussen de pyridine groep en de holte. Hierdoor wordt de binding van het molecuul aan de receptor versterkt. Erg goed!<br />\
                    Het molecuul wat je nu hebt opgebouwd, bindt al zeer sterk aan het eiwit, en is al dichtbij een goed geneesmiddel. Ga verder naar de volgende vraag.',
        ChoiceScr: 'frame 6.1; display 6.1',
        Right: 1
      },
      {
        Answer: 'Groep 2',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in het eiwit, zijn er naast Vanderwaalsinteracties ook waterstofbruggen mogelijk tussen deze groep en de receptor?',
        ViewScr: 'frame 6.2; display 6.2',
        Choice: 'Nee, deze groep geeft wel een goede vulling van de holte in het eiwit, maar benut niet de mogelijkheid om een extra waterstofbrug te vormen. Dus deze groep vergroot wel de binding aan de receptor, maar het kan nog beter.... (kies een ander antwoord)',
        ChoiceScr: 'frame 6.2; display 6.2',
        Right: 0
      },
      {
        Answer: 'Groep 3',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in de receptor, vult deze groep de ruimte in de holte goed op, en is er nog de mogelijkheid om waterstofbruginteracties te gebruiken?',
        ViewScr: 'frame 6.3; display 6.3',
        Choice: 'Nee, dit molecuul is nauwelijks aktiever dan zijn startpunt. Zowel de holte wordt niet optimaal ingevuld, alswel de mogelijkheid om een extra waterstofbrug te vormen wordt niet benut. Het kan dus veel beter!!! Kies een ander antwoord.',
        ChoiceScr: 'frame 6.3; display 6.3',
        Right: 0
      }
    ],
    Note: null,
    Stereo: null,
    Meter: null,
    PreScr: 'isoSurface Iso_Part_MEP model 1.2 "2HYY_R2_mep.jvxl"; set backgroundmodel 1.2; frame 5.3; isosurface Iso_Full_MEP translucent 1.0; moveto 2 { -965 214 -148 138.2} 275 -11.5 18.9;  load append "R2.sdf"; set backgroundmodel 1.2; frame 5.3;',
    ViewScr: null,
    PostScr: 'frame 6.1; display 6.1; moveto 2 {930 141 340 142} 100 0 0 ; isosurface Iso_Full_MEP translucent 0.0'
  },
  ////////// 10 - find the right position of the Me R3 \\\\\\\\\\
  { // FIXME
    Type: TQuestion,
    Head: 'Een magische methyl?',
    Text: 'Tot nu toe heb je behoorlijk grote groepen aan het molecuul gehangen om de holte in het eiwit zo goed mogelijk op te vullen. Echter, veelal is de binding tussen de sleutel en het slot (het molecuul en het eiwit) heel subtiel bepaald, denk hierbij maar eens aan de verschillen tussen echte sleutels. Ook kleine groepen aan het molecuul kunnen een dramatisch effect hebben op de binding van het molecuul aan het eiwit. <br />\
               Bij dit eiwit bestaat er een magische methyl-groep. Deze kleine methyl-groep blijkt erg belangrijk te zijn voor de binding van het molecuul aan het eiwit. Deze kleine groep zorgt ervoor dat de holte in het eiwit perfekt wordt opgevuld. Dit is echt maatwerk! Kun jij vinden waar op de middelste ring de magische methylgroep moet zitten? Klik hiervoor weer op de view buttons achter de antwoorden om de verschillende moleculen in de holte te bekijken.',
    Help: 'Klik op de modellen en kijk naar de moleculen van de verschillende antwoorden in de holte. Welk molecuul, dus met op de verschillende plaatsen een methylgroep past perfect in de holte?',
    Answers: [
      {
        Answer: 'Positie 1',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in de holte van het eiwit, past deze groep hier? Is er geen botsing met de wanden van de holte?',
        ViewScr: 'frame 7.1; display 7.1',
        Choice: 'Fout, maar dit is wel een logisch antwoord (alleen niet de goede!), deze groep lijkt op deze positie te passen. Dit molecuul is ook gemaakt en getest. Alleen bleek hieruit dat dit molecuul toch minder aktief was. Probeer nog eens een ander antwoord.Nee, deze methyl botst tegen de wanden van de holte. Dit geeft negatieve Vanderwaalsenergie waardoor de binding van het molecuul aan het eiwit zwakker wordt.',
        ChoiceScr: 'frame 7.1; display 7.1',
        Right: 0
      },
      {
        Answer: 'Positie 2',
        Meter: null,
        Help: 'Kijk goed naar het model van dit molecuul in de holte van het eiwit, past deze groep hier? Dus geen botsing met de wanden van de holte?',
        ViewScr: 'frame 7.2; display 7.2',
        Choice: 'Goed! Dit is inderdaad de positie van de magische methyl. De holte wordt perfekt opgevuld, en tevens zorgt deze methyl ervoor dat het molecuul precies is voorgevormd zodat het molecuul goed past in de holte van het eiwit. Dit molecuul bindt zeer sterk aan het eiwit. Ga snel naar de volgende vraag om te kijken of we dit molecuul nog verder kunnen verbeteren.',
        ChoiceScr: 'frame 7.2; display 7.2',
        Right: 1
      },
      {
        Answer: 'Positie 3',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in de holte van het eiwit, past deze groep hier? Dus geen botsing met de wanden van de holte?',
        ViewScr: 'frame 7.3; display 7.3',
        Choice: 'Fout, op deze positie botst de groep tegen de wanden van de holte. Dit geeft negatieve Vanderwaalsenergie waardoor de binding van het molecuul aan het eiwit zwakker wordt.',
        ChoiceScr: 'frame 7.3; display 7.3',
        Right: 0
      },
      {
        Answer: 'Positie 4',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in de holte van het eiwit, past deze groep hier? Dus geen botsing met de wanden van de holte?',
        ViewScr: 'frame 7.4; display 7.4',
        Choice: 'Fout, deze methyl botst tegen de wanden van de holte. Dit geeft negatieve Vanderwaalsenergie waardoor de binding van het molecuul aan het eiwit zwakker wordt.',
        ChoiceScr: 'frame 7.4; display 7.4',
        Right: 0
      }
    ],
    Note: '',
    Stereo: 1,
    Meter: null,
    PreScr: 'isoSurface Iso_Part_MEP model 1.2 "2HYY_R3_mep.jvxl"; set backgroundmodel 1.2; frame 6.1; isoSurface Iso_Full_MEP translucent 1.00; moveto 2 {432 -247 868 159} 280 -1.2 34.2; load append "R3.sdf"; set backgroundmodel 1.2; frame 6.1;',
    ViewScr: null,
    PostScr: 'frame 7.2; display 7.2; moveto 2 {930 141 340 142} 100 0 0 ; isoSurface Iso_Full_MEP translucent 0.00; color Iso_Part_MEP translucent 1.00; spin off'
  },
  ////////// 11 - find the right position of the solubaliser \\\\\\\\\\
  { // FIXME
    Type: TQuestion,
    Head: 'Wat maakt een goed passende sleutel tot een goed geneesmiddel?',
    Text: 'We hebben nu een molecuul dat een zeer sterke binding aan de receptor heeft. De sleutel past perfect op het slot! Maar er zijn nog meer belangrijke voorwaarden.<br />\
               Om werkzaam te zijn is het belangrijk dat het molecuul in hoge concentraties in het bloed kan komen nadat het als pil is ingenomen.<br />\
               Hiervoor moet het molecuul goed oplossen in water. <br />\
               Ons molecuul bindt goed aan de receptor, maar is absoluut niet oplosbaar in water. De wateroplosbaarheid van moleculen kan sterk verbeterd worden door er polaire en hydrofiele groepen aan te zetten.<br />\
               Natuurlijk moet het molecuul met deze extra groep nog wel in de holte van het eiwit passen.<br />\
               Waar kun je in ons molecuul zo\'n wateroplosbare groep zetten zodat het molecuul nog blijft passen in de holte van het eiwit? Bij de antwoorden zie je drie mogelijkheden. Klik weer op de view button om te kijken hoe het molecuul eruit ziet in de holte van het eiwit.',
    Help: 'Deze wateroplosbare groep is op verschillende plaatsen op het molecuul gezet, en de modellen van deze verschillende moleculen kun je zien bij de verschillende antwoorden. Klik op de view buttons van de verschillende antwoorden, zet de 3D bril op en de 3D optie aan, zodat je goed kan zien of het molecuul tegen de wanden van de holte botst.',
    Answers: [
      {
        Answer: 'Positie 1',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in het eiwit, past deze groep? Dus geen botsing met de wanden van de holte?',
        ViewScr: 'frame 8.1; display 8.1',
        Choice: 'Ja inderdaad! Er is hier ruimte voor deze wateroplosbare groep. Op deze plaats botst deze groep niet tegen de wanden van de holte van het eiwit, maar hangt juist een beetje buiten het eiwit. Hier is daarom ook alle ruimte voor polaire en hydrofiele groepen.<br />\
                    Geweldig, het is je gelukt om een goede sleutel te maken die dit eiwit inaktief kan maken en daarbij ook goed wateroplosbaar is! Dit molecuul zal getest moeten worden om te kijken of je met dit geneesmiddel leukemie kunt behandelen.',
        ChoiceScr: 'frame 8.1; display 8.1',
        Right: 1
      },
      {
        Answer: 'Positie 2',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in het eiwit, past deze groep? Dus geen botsing met de wanden van de holte?',
        ViewScr: 'frame 8.2; display 8.2',
        Choice: 'Nee, deze groep botst tegen de wand van de holte. Dit geeft negatieve Vanderwaalsenergie waardoor de binding van het molecuul aan het eiwit zwakker wordt.',
        ChoiceScr: 'frame 8.2; display 8.2',
        Right: 0
      },
      {
        Answer: 'Positie 3',
        Meter: null,
        Help: 'Kijk eens goed naar het model van dit molecuul in het eiwit, past deze groep? Botst het molecuul met deze groep niet tegen de wanden van de receptor?',
        ViewScr: 'frame 8.3; display 8.3',
        Choice: 'Nee, deze groep botst tegen de wand van de holte. Dit geeft negatieve Vanderwaalsenergie waardoor de binding van het molecuul aan het eiwit zwakker wordt.',
        ChoiceScr: 'frame 8.3; display 8.3',
        Right: 0
      }
    ],
    Note: '',
    Stereo: 1,
    Meter: null,
    PreScr: 'moveto 2 {998 -18 60 129.05} 344.9 -24.2 20.4; load append "R4.sdf"; set backgroundmodel 1.2; frame 7.2;',
    ViewScr: null,
    PostScr: 'frame 8.1; display 8.1; spin off'
  },
  ////////// 12 - Glivec \\\\\\\\\\
  { // FIXED
    Type: TText,
    Head: 'Glivec',
    Text: 'Het molecuul wat je hebt gemaakt is de actieve stof in een echt bestaand geneesmiddel. Het molecuul heet Imatinib en bindt sterk aan het eiwit. Hierdoor kan ATP niet meer aan dit eiwit binden en kan dit eiwit niet meer geactiveerd worden. De ongeremde celdeling wordt hierdoor gestopt. Sinds 2001 is dit molecuul onder de naam Glivec (Gleevec) beschikbaar voor de behandeling van leukemie. Novartis heeft dit middel ontwikkeld, en sindsdien zien er wereldwijd al vele patienten mee behandeld.',
    Help: null,
    Note: null,
    Stereo: 1,
    Meter: null,
    PreScr: 'isoSurface Iso_Full_MEP translucent 1.00; moveto 2 {794 498 -349 76.08} 320.44 8.0 12.83',
    ViewScr: 'color echo [x001E55];\
               echo "Je begon met het kiezen van de begin stof."; display 3.2; frame 3.2; select 3.2; wireframe 75; delay 4;\
               echo "Je zette er de eerste zijgroep aan."; display 4.3; frame 4.3; select 4.3; wireframe 75; delay 4;\
               echo "Je zorgde voor de benodigde waterstofbruggen."; display 5.3; frame 5.3; select 5.3; wireframe 75; delay 4;\
               echo "Je zette er de tweede zijgroep aan."; display 6.1; frame 6.1; select 6.1; wireframe 75; delay 4;\
               echo "Je zette de methyl op de goede plaats."; display 7.2; frame 7.2; select 7.2; wireframe 75; delay 4;\
               echo "En je zette de zijgroep er aan voor de oplosbaarheid."; display 8.1; frame 8.1; select 8.3; wireframe 75; delay 4;\
               echo "Je hebt glyvec gemaakt!";',
    PostScr: 'color echo red'
  },
  ////////// 13 - eindpagina \\\\\\\\\\
  { // FIXED
    Type: TText,
    Head: 'De Sleutel en het Slot.',
    Text: 'Dit was de door NV Organon ontwikkelde module om jullie te laten zien hoe geneesmiddelen-onderzoekers te werk gaan om stoffen te bedenken die mogelijk goede geneesmiddelen zouden kunnen zijn. Er is nog wel wat voor nodig om van een goed startpunt molecuul een goed geneesmiddel te maken. Stapsgewijs worden er verschillende groepen aan een molecuul gezet en wordt bepaald of het gemaakte molecuul nog steeds goed bindt aan het eiwit. Tijdens deze optimalisatie worden wel 500 tot 1000 moleculen bedacht en gemaakt. Hiervoor is veel kennis van de scheikunde en de biologie nodig, zoals jullie hebben kunnen zien!',
    Help: null,
    Note: 'Druk op het kruisje boven aan de pagina om af te sluiten of op de reset knop er naast om opnieuw te beginnen.',
    Stereo: null,
    Meter: null,
    PreScr: null, //'load append "big_pil.mol"; color atoms orange; spacefill off; wireframe off; moveto 0 1 1 1 -180 -50 -50 50; wireframe 100;  set spinX 0; set spinY -120; set spinZ 0; spin on; echo; moveto 2 0 0 0 0 80; ',
    ViewScr: null,
    PostScr: 'moveto 3 1 1 1 -180 -100 100 -100; zap' //'moveto 2 { 794 498 -349 76.08 320.44 0.0 0.0; center 8.1'

  }
];


////////// some more settings \\\\\\\\\\

Page_Title = "Sleutel / Slot - door NV Organon voor Jet-Net";
DefaultLoadScript = '"spacefill off; set echo bottom center; font echo 20 ariel bold; color echo red; wireframe 75"';
InitScript = 'background white; hover off; label off; set disablePopupMenu on; frank off; set antialiasDisplay ON; set antialiasTranslucent ON; set defaultLoadScript ' + DefaultLoadScript;
Goto_PageID = 10;

/********** Procedure voor het creeren van isosurfaces: **********\
- Creerd de file in DS visualizer. (bv doorsnee)
- Add hydrogens
- Calculate Charges
- Save as Mol2
- Open in JMOL aplicatie
- isosurface molecular map mep
- write isosurface "outputfilename.jvxl"
om te openen:
  isosurface "outputfilename.jvxl"

om te updaten naar jmol 16 (ben ik ~15 uur mee bezig geweest om hier achter te komen door de documentatie door te spitten, 
                            daarvoor nog ~5 uur bezig geweest met uitvinden wat er mis was):
- open oude jvxl in jmol 11
- zoek drie atomen aan het vlakke oppervlakte van de isosurface uit en neem de nummers van die atomen, nu x, y, en z genoemd
- gebruik isosurface new select(within((-)1000, PLANE, (atomno=x) (atomno=y) (atomno=z))) ignore(not within((-)1000, PLANE, (atomno=x) (atomno=y) (atomno=z))) molecular map mep
    (de min is niet altijd aanwezig, soms krijg je ongeveer het omgekeerde van het origineel, dan moet je de - weghalen als je die had of andersom)
- kijk of de isosurfaces overeenkomen
- open jmol 16
- gebruik isosurface new select(within((-)1000, PLANE, (atomno=x) (atomno=y) (atomno=z))) ignore(not within((-)1000, PLANE, (atomno=x) (atomno=y) (atomno=z))) molecular map mep opnieuw
- write isosurface "outpufilename.jvxl"
\*****************************************************************/
