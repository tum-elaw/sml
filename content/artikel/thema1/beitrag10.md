---
title: Teilen fremder Inhalte
intro: Worauf muss ich achten, wenn ich fremde Inhalte auf Social Media teile?
redirect_from:
  - /github/setting-up-and-managing-billing-and-payments-on-github/upgrading-git-large-file-storage
  - /articles/purchasing-additional-storage-and-bandwidth-for-a-personal-account/
  - /articles/purchasing-additional-storage-and-bandwidth-for-an-organization/
  - /articles/upgrading-git-large-file-storage
  - /github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-git-large-file-storage/upgrading-git-large-file-storage
versions:
  fpt: '*'
type: how_to
topics:
  - Art. 39
shortTitle: Worauf muss ich achten, wenn ich fremde Inhalte auf Social Media teile?
---
Es ist ein Hauptmerkmal von Social Media, (fremde) Inhalte wie Bilder, Videos und Texte hochladen, verbreiten und teilen (und nicht nur „liken“) zu können. Was viele nicht wis-sen: Diese Handlungen können eine Urheberrechtsverletzung darstellen. 
Die folgende Checkliste soll einen Überblick darüber geben, ob man einen fremden  Inhalt auf Social Media verwenden darf oder nicht:

<img className="float-left mt-2" src ="../../../assets/images/testDiagramm.png" ></img>

<div>
        <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
        <script>
            mermaid.initialize({ startOnLoad: true });
        </script>
        <div class="mermaid">
            graph TD 
            A[Client] --> B[Load Balancer] 
            B --> C[Server1] 
            B --> D[Server2]
        </div>
        <div class="mermaid">
            graph TD 
            A[Client] -->|tcp_123| B
            B(Load Balancer) 
            B -->|tcp_456| C[Server1] 
            B -->|tcp_456| D[Server2]
        </div>
        <div class="mermaid">
            graph TD
            A["Handelt es sich um ein schutzfähiges Werk? "] -->|Nein| B["Ist ein anderes Schutzrecht betroffen?"]
            A --> C["<b>Stellt die Handlung einen Eingriff in die Verwertungsrechte des Urhebers dar?</b></br>Der/dem Urheber sind u.a. folgende (Verwertungs-) Handlungen vorbehalten:</br> - Vervielfältigungsrecht - Recht der öffentliche Zugänglichmachung"]
            B -->|Ja| D[Laptop]
            B -->|Nein| E[iPhone]
            C -->|Three| F[fa:fa-car Car]
        </div>
</div>

<style>
/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  position: absolute;
  width: max-content;
  max-width: 2000%;
  visibility: hidden;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 5px;
  border-radius: 6px;

  /* Position the tooltip text */
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;

  /* Fade in tooltip */
  opacity: 0;
  transition: opacity 0.3s;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</script>