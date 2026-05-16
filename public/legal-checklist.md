# Cofactory legal and technical checklist

Base da verificare sulla configurazione reale del sito prima della pubblicazione definitiva.

| Ambito | Stato |
| --- | --- |
| Dati titolare completati | Da completare: sede legale, P.IVA/CF |
| Email privacy presente | Completato: meetus@cofactory.it |
| Servizi terzi verificati | Da verificare periodicamente con browser/devtools |
| Google Analytics 4 | Presente, caricato solo dopo consenso statistiche |
| Google Tag Manager | Non indicato nel codice attuale |
| Google Search Console | Presente tramite meta verification |
| Google Fonts | Non caricato da terza parte; Bebas Neue e font locali |
| Hosting provider | Vercel |
| Form contatti/preventivo | Presente nella pagina partner |
| Provider email/SMTP | Presente; completare link informativa fornitore |
| Cookie realmente presenti prima del consenso | Da verificare in produzione |
| Cookie realmente presenti dopo consenso | Da verificare in produzione |
| Banner cookie con blocco preventivo | Completato per GA4 |
| Pulsante Accetta tutti | Presente |
| Pulsante Rifiuta | Presente |
| Pulsante Personalizza/Salva preferenze | Presente |
| Link Privacy Policy nel footer | Presente IT/EN |
| Link Cookie Policy nel footer | Presente IT/EN |
| Gestisci preferenze cookie sempre accessibile | Presente con icona cookie |
| robots.txt pubblicato | Presente |
| sitemap.xml pubblicata | Presente |
| llms.txt pubblicato nella root | Presente |
| Clausola AI/copyright | Inserita nella Privacy Policy e in llms.txt |
| Stories singole non complete | Noindex/nofollow mantenuto |

## Normative considerate

| Ambito | Riferimento |
| --- | --- |
| Privacy e dati personali | GDPR - Regolamento UE 2016/679 |
| Cookie e tracciamenti | Direttiva ePrivacy 2002/58/CE + art. 122 Codice Privacy italiano |
| Normativa italiana privacy | D.Lgs. 196/2003, modificato dal D.Lgs. 101/2018 |
| Cookie banner in Italia | Linee guida Garante Privacy su cookie e strumenti di tracciamento |
| Consenso | Linee guida EDPB sul consenso |
| Diritto d'autore | Legge 633/1941 |
| Text and data mining / AI scraping | Direttiva UE 2019/790, con riferimento alla riserva dei diritti |
| Intelligenza artificiale | AI Act - Regolamento UE 2024/1689, come riferimento generale per AI e copyright |

## Nota

Il rispetto di robots.txt da parte dei crawler dipende dal comportamento dei singoli agent e non garantisce una protezione assoluta contro scraping, estrazione o riuso non autorizzato.
