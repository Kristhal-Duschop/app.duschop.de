MATERIAL-FOTOS DER 13 OBERFLAECHEN
====================================

Hier kommen die Material-Fotos rein, jeweils 800x600 px JPG mit
einheitlichem neutralem Hintergrund. Solange ein Foto fehlt, zeigt
der Farbenfinder den CSS-Gradient als Fallback.

Erwartete Dateinamen (genau diese 13):
  bronze-matt.jpg
  chrom-poliert.jpg
  edelstahl-gebuerstet.jpg
  edelstahl-poliert.jpg
  graphit-matt.jpg
  graphit-poliert.jpg
  kupfer-matt.jpg
  kupfer-poliert.jpg
  messing-matt.jpg
  messing-poliert.jpg
  schwarz-matt.jpg
  silber-matt.jpg
  weiss-matt.jpg

Wer ein Foto nachliefert, legt es 1:1 unter diesem Namen ab — der
Farbenfinder und (in Phase 4 Schritt 2) der DuschopColorFilter-
Sticky-Toggle ziehen automatisch das Foto.

Activation-Logic: Der Farbenfinder ruft die Datei ab und versteckt
sie per Image-onerror, falls sie nicht existiert. Keine 404er-Lawine
in der Browser-Konsole.
