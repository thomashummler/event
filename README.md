# Dokumentation unserer App Evently
<br>
<br>
<br>

> <br>
> <br>
> 
> ## 1. Spezifikation und Design
>
> <br>
> <br>
> <h3><b> Projektziele von Evently  </b></h3>
> 
> <br>
> <br>
> 
> - Damit User nicht lange rumsuchen müssen und dann ihre Geduld verlieren, sollen Events einfach auffindbar und aufgegliedert sein.
> - Stark unübersichtlich Websites schrecken mögliche User schnell ab, deswegen soll unsere Website schlicht gehalten werden.
> - Damit auch ein wirtschaftlicher Vorteil durch die Website entsteht, sollen Events durch einen Bezahlvorgang durch den Urheber des Events promotet werden können.
> - Auf unser Event Webseite kann man private aber auch öffentliche Events erstellen oder einsehen und diese mit seinen Freunden teilen .
> 
> <br>
> <br>
> <br>
> <br>
> 
> <h3><b> Personas </b></h3>
>
> <br>
>
> ![Persona1](/assets/images/doku/persona1.png "Persona 1")
>
> <br>
> 
> ![Persona2](/assets/images/doku/persona3.png "Persona 1")
>
> <br>
>
> ![Persona3](/assets/images/doku/persona2.png "Persona 1")
>
> <br>
> <br>
> <br>
> <br>
>
> <h3><b> Kontextdiagramm </b></h3>
>
> <br>
>
> ![Kontextdiagramm](/assets/images/doku/kontextdiagramm.png "Persona 1")
> 
> <br>
> <br>
> <br>
> <br>
> 
> <h3><b>Akteure</b></h3>
> 
> <br>
> 
> Besucher
>
>
>> Besucher können Veranstaltungen ansehen und sich  über bevorstehende  Veranstaltungen  informieren.
>
> <br>
> Registrierte Nutzer
>
> 
>> Registrierte Nutzer können Veranstaltungen erstellen und Leute inladen. Zudem is es Ihnen möglich Ihre Veranstaltung zu bewerben.
>
> <br>
> Admins
>
> 
> 
>> Haben weitreichende Befugnisse auf der Website und können alle Veranstaltungen bearbeiten und Fehler korrigieren.
>
> <br>
> <br>
> <br>
> <br>
>
> 
> <h3><b> Use-Case-Diagramm </b></h3>
>
> <br>
>
> ![Use-Case-Diagramm](/assets/images/doku/ucdiagramm.png "Use-Case-Diagramm")
>
> <br>
> <br>
> <br>
> <br>
>
> <h3><b> Use-Case-Spezifikationen </b></h3>
>
> <br>
>
> 1. ![Persona1](/assets/images/doku/ue1.png "Persona 1")
>
> <br>
> 
> 2. ![Persona2](/assets/images/doku/ue2.png "Persona 1")
>
> <br>
>
> 3. ![Persona3](/assets/images/doku/ue3.png "Persona 1")
> 
> <br>
>
> 4. ![Persona3](/assets/images/doku/ue4.png "Persona 1")
> 
> <br>
> <br>
> <br>
> <br>
>
> <h3> <b> Design </b></h3>
> 
> <br>
> <br>
>
> Style Tile 
> 
> <br>
> 
> ![styletile](/assets/images/doku/styletile.png "Persona 1")
>
> <br>
> 
> Sitemap
> 
> ![sitemap](/assets/images/doku/sitemap.png "Sitemap")
>
> <br>
> <br>
> <br>
> 
> UC Info
> 
> ![UC Info](/assets/images/doku/ucinfo.png "UC Info")
>
> UC CRUD
> 
> ![UC CRUD](/assets/images/doku/uccrud.png "UC CRUD")
>
> > UC Transaction
> 
> ![UC Transaction](/assets/images/doku/uctransaction.png "UC Transaction")
>
> <br>
> <br>
>
>ER-Diagramm
>
> ![ER-Diagramm](/assets/images/doku/ErDiagramm.png "ER-Diagramm")
> <br>
> <br>
> <br>
> <br>



<br>
<br>
<br>

> <br>
> <br>
> 
>  ## 2. Implementierung 
>  UC INFO : <br>
   Dafür haben wir eine Homepage und eine Welcome Page erstellt. <br>
   Auf der Homepage landet man immer, wenn man die Seite zum ersten mal aufruft, <br>
   und man findet dort eine Beschreibung was man mit usnerer Seite alles machen kann <br>
   Außerdem sind dort alle Links zu den Funktionen auf unserer Seite vorhanden. <br>
   Für alle Aktionen außer dem Suchen und näherem Anschauen von Events, <br>
   ist allerdings eine Anmeldung bzw Registrierung erforderlich. <br>
   Nach der Anmeldung landet man auf der Welcome Page, auf der noch weitere Informationen zur Bedienung <br>
   unserer Website vorhanden sind. 
<br>
<br>
<br>
    UC Search: Auf unserer Seite gibt es 3 Suchfunktionen <br>
    Die erstere Suche befindet sich im Header unserer Seite. <br>
    Sie bietet die Möglichkeit alle erstellten Events nach einem bestimmten Namen, <br>
    bzw nach dem Bestandteil eines Namens zu suchen. <br>
    Die Suche ist über das von MVC Pattern geregelt und führt die find Methode in unserem Eventcontroller aus. <br>
    Allerdings wird über die find Methode auch alle Events gefunden, aber nur wenn im req body der Parameter <br>
    name mit einer Länge von > 0 dabei ist, wird aus allen Events nur die angezeigt, mit dem passenden Namen. <br>
    Die 2te Suche funktioniert über das Category Attribut unserer Events. <br>
    Diese kann betätigt werden in dem man das Dropdown-Menü in unserem links oben in unserem Header öffnet. <br>
    Dort kann man durch die Auswahl einer Kategorie ausschließlich die Events auffinden, die zu dieser Kategorie gehören. <br>
    Umgesetzt wurde die Suche auch mit dem MVC Pattern und der Methode findEventsByCategory aus dem EventController. <br>
    Die dritte Suche ist mehr ein Filter. <br>
    Sie befindet sich auf der eventsOverview Seite und soll helfen Events noch weiter zu filtern.<br>
    Sie wurde ebenfalls mit dem MVC Pattern implementiert und funktioniert über die Methode searchCategoryStadt <br>
    aus dem EventController. <br>
    Bei allen Suchoptionen wurden auch auf die Promotionsstufe geachtet und die Events nach dessen Vorgaben sortiert. <br>
    Mehr dazu aber unter UC Transaction
<br>
<br>
<br>
    UC CRUD: Die Pflege von Stammdaten wurde bei uns nur für das Event Model gepflegt.    <br>
    Die Create , Read , Update und Delete Funktionen wurden mit dem MVC Pattern umgesetzt. <br>
    Read von Events wird über die Suche und die find Funktion im Controller umgesetzt. <br>
   Update/Delete werden über die gleichnamigen Methoden im EventController umgesetzt.<br>
   Ausgelöst werden können diese von Usern die das Event erstellt haben oder Administratoren <br>
   Anderen Usern wird die Möglichkeit gar nicht geboten. <br>
   Auslösen kann man die Methoden auf Event Detail Page (show_event,show_eventDetail_without_buttons), auf die man über die Overview Events Seite kommt. <br>
   
> <br>
> <br>
  <br>

  UC TRANSACTION : Unsere erste Transaction ist das Promoten von selbsterstellten Events. <br>
  Dies ist möglich in dem man über das HOME Dropdown, oben Rechts im Header auf unserer Seite auf eigene Events klickt und bei einem Event auf Jetzt Promoten besätigt.  <br>
  Dann gelangt man auf die event_promotion_overview Seite.<br>
    Je nachdem welche Promotionart man seinem Event zuordnet, wird das Event in unterschiedlichsten Fällen weiter oben bei den Suchgergebnissen auf unsere Seite angezeigt.<br>
  1 Promotionsstufe: Das Event wird weiter oben angezeigt wenn man nur einen Kategoriefilter aktiviert hat.<br>
  2 Promotionsstufe: Das Event wird weiter oben angezeigt wenn man nur einen Kategoriefilter und Stadtfilter aktiviert hat.<br>
  3 Promotionsstufe: Unter allen ungefilterten Events wird das Event weiter oben angezeigt und auch bei der Namensuche.<br>
  Nach Auswahl eines Filters wird auf eine Besätigungsseite weitergeleitet.<br>
  Die Funktion wurde mit Vue und Ajax umgesetzt.<br>

<br>
    Unsere zweite UC Transaction ist das Erstellen von Events auf unserer Seite über einen mehrteiligen Bestellvorgang <br>
    Im rechten Dropwdown im Header, werden angemeldeten Usern und Administratoren ermöglicht, <br>
    eigene Events zu erstellen. <br>
    Dazu klickt man auf Events erstellen und landet dann create_Events Seite <br>
    Dies ist die erste Seite für den zweilteiligen Erstellungsvorgang. <br>
    Hier können erstmal Basic Informationen über das Event angegeben werden wie Adresse, Datum, Name, Beschreibung des Events <br>
    Danach wird man auf eine 2te Create Seite ( overview_createEvents) weitergeleitet, während dessen werden die eingegeben Seiten über Sessions zwischengespeichert. <br>
   Auf dieser Seite gibt es dann nochmal eine Übersicht über die eingegeben Informationen, als auch die Möglichkeit noch weitere Informationen seinem Event hinzuzufügen. <br>
    Bspw eine Category, ob das Event privat sein soll(dann wird es keinen anderen Usern angezeigt) oder auch ein Bild.
> 
>  ## 3. Bereitstellung 
>
> 

<br>
<br>
<br>
   User 1 =  Email: "admin@example.com"  pw: "abc123" <br>
   User 2 = Email: "maurice.mustermann@example.com"   pw:"evently" <br>
   User 3 = Email:"markus.maier@example.com"   pw:"evently2"

> <br>
> <br>
> 
> ## 4. Optimierung 
>
> <br>
> <br>
> <br>
> <br>
> 
> <h3>PageSpeed Insights vor der Optimierung</h3>
>
> <br>
> <br>
>
> > <br> Mobile <br> <br> ![Mobile](/assets/images/doku/speed_mobile_before.png "Mobile")
>
> > <br> Desktop <br> <br> ![Mobile](/assets/images/doku/speed_desktop_before.png "Desktop")
>
> <br>
> <br>
>
> <h3>Vorgenommene Anpassungen</h3>
>
> <br>
> <br>
>
> > <b> Performance </b> <br> Da vorallem die Größe und die Dimensionierung der Bilder auf unserer Seite, als größter Problempunkt von PageSpeed Insights augelistet wurde, haben wir uns vorallem darauf fokussiert. Bilder in moderaten Formaten bereitstellen und Bilder richtig dimesnionieren, waren die zwei ersten Empfehlungen. Deswegen wurden alle zu großen Bilder unserer Seite weboptimiert in ein entspechendes Format umgewandelt und ersetzt.  Außerdem wurde fir Barrierefreiheit verbessert, indem Schaltflächen einen für Screenreader zugänglichen Namen bekommen haben, sowie Alt-Attribute zu Bildelementen hinzugefügt wurden. 
>
> <br>
>
> > <b> SEO </b> <br> Unser Fokus lag dabei auf den Suchbegriffen "Eventplaner", "Event erstellen" und "Event finden", welche wir versucht haben so gut wie möglich auf unserer Seite unterzubringen. Laut PageSpeed Insights sollte wir außerdem für besseres  SEO, noch eine  Metabeschreibung hinzufügen und Bildelemente mit alt-Attributen versehen, was  ja auch schon  im letzten Punkt angesprochen wurde. Desweiteren wurden ein paar Links noch so angepasst, dass sie von Google gecrawlt werden können, was zuvor auch nicht möglich war. 
>
> <br>
>
> > <b> Sicherheit </b> <br> Hier wurden keine großen Anpassungen vorgenommen, da dieser Score laut PageSpeed Insights schon sehr gut war und die Best Practices weitgehend eingehalten wurden. 
>
> <br>
> <br>
>








































<br>
<br>
<br>
<br>
<br>
<br>

a [Sails v1](https://sailsjs.com) application


### Links

+ [Sails framework documentation](https://sailsjs.com/get-started)
+ [Version notes / upgrading](https://sailsjs.com/documentation/upgrading)
+ [Deployment tips](https://sailsjs.com/documentation/concepts/deployment)
+ [Community support options](https://sailsjs.com/support)
+ [Professional / enterprise options](https://sailsjs.com/enterprise)


### Version info

This app was originally generated on Fri Dec 02 2022 11:10:41 GMT+0100 (Mitteleuropäische Normalzeit) using Sails v1.5.2.

<!-- Internally, Sails used [`sails-generate@2.0.6`](https://github.com/balderdashy/sails-generate/tree/v2.0.6/lib/core-generators/new). -->


This project's boilerplate is based on an expanded seed app provided by the [Sails core team](https://sailsjs.com/about) to make it easier for you to build on top of ready-made features like authentication, enrollment, email verification, and billing.  For more information, [drop us a line](https://sailsjs.com/support).


<!--
Note:  Generators are usually run using the globally-installed `sails` CLI (command-line interface).  This CLI version is _environment-specific_ rather than app-specific, thus over time, as a project's dependencies are upgraded or the project is worked on by different developers on different computers using different versions of Node.js, the Sails dependency in its package.json file may differ from the globally-installed Sails CLI release it was originally generated with.  (Be sure to always check out the relevant [upgrading guides](https://sailsjs.com/upgrading) before upgrading the version of Sails used by your app.  If you're stuck, [get help here](https://sailsjs.com/support).)
-->

