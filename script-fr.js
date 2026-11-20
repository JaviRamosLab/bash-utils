console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▌")
console.log("▐ ░▀▀█░█▀█░█░█░▀█▀░█▀▄░█▀█░█▄█░█▀█░█▀▀░█░░░█▀█░█▀▄  ▌")
console.log("▐ ░░░█░█▀█░▀▄▀░░█░░█▀▄░█▀█░█░█░█░█░▀▀█░█░░░█▀█░█▀▄  ▌")
console.log("▐ ░▀▀░░▀░▀░░▀░░▀▀▀░▀░▀░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀░  ▌")
console.log("▐▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▌")
console.log("Javier Ramos Nistal @JaviRamosLab                    ")
console.log("Website - https://JaviRamosLab.com                   ")
console.log("Github - https://www.github.com/JaviRamosLab         ")
console.log("YouTube - https://www.youtube.com/@JaviRamosLab      ")
console.log("Facebook - https://www.facebook.com/JaviRamosLab     ")
console.log("Telegram - https://telegram.me/JaviRamosLab          ")
console.log("Email - co2mm.esperanto@gmail.com                    ")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("")
console.log("start find/replace in files")

import { replaceInFile } from 'replace-in-file'

// folders name
const nodeRepos = [
    '@WikiAgoraSocial-backend',
    '@WikiLaws-WikiAgora',
    'action-WikiAgora',
    'agro-WikiAgora',
    'api-gob',
    'arrest-detention-WikiAgora',
    'automatizations-WikiAgoraSocial',
    'bakery-WikiAgora',
    'bank-WikiAgora',
    'bankea-WikiAgora',
    'billboard-WikiAgora',
    'blood-donation-WikiAgora',
    'bodega-WikiAgora',
    'booking-WikiAgora',
    'bribe-WikiAgora',
    'CacerolasMap',
    'catastro-WikiAgora',
    'Citizen-Initiative-WikiAgora',
    'civil-defense-WikiAgora',
    'civil-society-WikiAgora',
    'collaboration-WikiAgora',
    'commerce-WikiAgora',
    'corruption-WikiAgora',
    'data.gob-WikiAgora',
    'db-WikiAgora',
    'deliberative-wa - discuss-wa-------------',
    'denunce-WikiAgora----',
    'detention-facility-WikiAgora',
    'diplomacy-WikiAgora',
    'directory-WikiAgora',
    'education-WikiAgora',
    'election-WikiAgora',
    'ElectricDDoS',
    'electricity-WikiAgora',
    'energy-WikiAgora',
    'environment-WikiAgora',
    'event-WikiAgora',
    'FediCommerce-WikiAgora',
    'firefighter-WikiAgora',
    'form44',
    'Freedom-Of-Information-WikiAgora',
    'freshwater-ecosystem-WikiAgora',
    'fuel-WikiAgora',
    'fundraising-WikiAgora',
    'gas-WikiAgora',
    'gob-news-WikiAgora',
    'gob-web-info-WikiAgora',
    'gob-web-status-WikiAgora',
    'government-WikiAgora',
    'healthcare-system-WikiAgora',
    'holiday-WikiAgora',
    'index-rankin-WikiAgora',
    'Jose-Marti-analyzer-WikiAgora',
    'justice-WikiAgora',
    'learning-WikiAgora',
    'Legislative-Initiative-WikiAgora',
    'library-WikiAgora',
    'lost-and-found-WikiAgora',
    'map-WikiAgora',
    'marine-ecosystem-WikiAgora',
    'med-alert-WikiAgora',
    'meteoro-WikiAgora',
    'military-WikiAgora',
    'national-symbol-WikiAgora',
    'net-restricted-WikiAgora',
    'NetBlocks-WikiAgora',
    'nonviolent-resistance-WikiAgora',
    'Operation-Caribbean-Flood',
    'orders-decorations-medals-WikiAgora',
    'organ-donor-WikiAgora',
    'parlament-WikiAgora',
    'participation-WikiAgora',
    'pharmacy-WikiAgora',
    'police-WikiAgora',
    'political-party-WikiAgora',
    'political-power-WikiAgora',
    'political-prisoner-WikiAgora',
    'poll-WikiAgora',
    'portal-gob-WikiAgora',
    'portal-tools-WikiAgora',
    'portal-WikiAgora',
    'postal-mail-WikiAgora',
    'press-WikiAgora',
    'project-WikiAgora',
    'project44',
    'public-lighting-WikiAgora',
    'public-phones-WikiAgora',
    'recycling-WikiAgora',
    'Red-Cross-WikiAgora',
    'relay-server-WikiAgora',
    'religion-WikiAgora',
    'report-WikiAgora',
    'repository-WikiAgora',
    'revolico-WikiAgora',
    'scanner-WikiAgora',
    'sewer-WikiAgora',
    'sport-WikiAgora',
    'stats-OperationCaribbeanSummer',
    'stats-WikiAgora',
    'store-WikiAgora',
    'telecommunication-WikiAgora',
    'tender-WikiAgora',
    'terrestrial-ecosystems-WikiAgora',
    'test-repository',
    'timeline44',
    'tourism-WikiAgora',
    'transport-WikiAgora',
    'trash-WikiAgora',
    'tree44',
    'trust44----rename----',
    'united-nations-WikiAgora',
    'water-WikiAgora',
    'web-OperationCaribbeanSummer-backend',
    'WebAnnotation-WikiAgora',
    'Wiki-System-WikiAgora',
    'street-WikiAgora',
    'budgets-WikiAgora',
    'leaks-WikiAgora',
    'transport-WikiAgora'
]
const npmRepos = [
    'Aaron-Schward-quotes',
    'WikiAgora-auth',
    'WikiAgora-data',
    'WikiAgora-limiter',
    'WikiAgoraSocial-basics',
    'WikiAgoraSocial-comments',
    'WikiAgoraSocial-flags',
    'WikiAgoraSocial-geo',
    'WikiAgoraSocial-reactions',
    'WikiAgoraSocial-relationships',
    'WikiAgoraSocial-serve-basic-files',
    'WikiAgoraSocial-status',
    'WikiAgoraSocial-utils'
]
const quasarRepos = [
    'app-WikiAgora',
    'CacerolasMap',
    'ElectricDDoS-app',
    'jose-marti-analyzer-quasar-WikiAgora'
]
const designRepos = [
    'cuba-flags',
    'cuba-logos',
    'cuba-shields',
    'design-WikiAgora',
    'diagrams-WikiAgora',
    'gob-cuba-logos----',
    'government-logos-WikiAgora',
    'logos-cuba',
    'logos-gob-cuba',
    'logos-OperationCaribbeanSummer',
    'logos-WikiAgora'
]
const jsRepos = [
    'addon44',
    'humans.txt-generator-WikiAgora',
    'sitemap.xml-generator-WikiAgora',
    'tools44',
    'urllist.txt-generator-WikiAgora',
    'validator44',
    'WikiAgoraBot-telegram'
]
const archivedRepos = [
    'ionic-WikiAgora',
    'LiquiCracy-WikiAgora',
    'react-WikiAgora',
    'robots.txt-generator-WikiAgora',
    'text-editor-WikiAgora',
    'WikiBus-ionic-WikiAgora'
]
const vueRepos = [
    '@vue-nuxt-WikiAgora',
    '@web-OperationCaribbeanSummer-frontend',
    '@WikiAgoraSocial-frontend',
    'jose-marti-analyzer-nuxt-WikiAgora',
    'web-OperationCaribbeanSummer'
]
const electronRepos = [
    'jose-marti-analyzer-electron-WikiAgora'
]
const scrapRepos = [
    'crawling-acn.cu',
    'scraping-Condecoraciones-Estado-Cubano-presidencia.gob.cu',
    'scraping-datasets-databases-studies',
    'scraping-Diputados-ANPP-Cuba-parlamentocubano.gob.cu',
    'scraping-Directorio-ETECSA-pamarillas.cu',
    'scraping-Instituciones-del-Gobierno-presidencia.gob.cu',
    'scraping-laws-gaceta.gob.cu',
    'scraping-servicios-presidencia.gob.cu',
    'scraping-WikiAgora'
]
const pythonRepos = []
const xRepos = [
    '@CyberGuerrillaAaronSwartz',
    '@test----------',
    '@WikiAgora----old----',
    'geoid44----',
    'Operation-Caribbean-Repository',
    'social44',
    'spec44',
    'wiki-WikiAgora',
    'WikiAgora-collections',
    'WikiAgora-examples',
    'WikiAgora-production',
    'WikiAgora-schemas',
    'WikiAgoraSocial-oAuth-server----',
]

// all repos
const allRepos = [
    ...nodeRepos,
    ...npmRepos,
    ...quasarRepos,
    ...designRepos,
    ...jsRepos,
    ...archivedRepos,
    ...vueRepos,
    ...electronRepos,
    ...scrapRepos,
    ...pythonRepos,
    ...xRepos
]

let successCount = 0;
let errorCount = 0;

// Loop through each repository and perform replacement
for (const activeRepoName of allRepos) {
    // for (const activeRepoName of archivedRepos) {
    const options = {
        files: activeRepoName + "/CITATION.cff",
        from: /title: "<repoName>-WikiAgora"/g,
        to: `title: "<repoName>"`,
        countMatches: true,
    }

    try {
        const results = await replaceInFile(options)
        console.log(`Replacement results for ${activeRepoName}:`, results)
        successCount++;
    }
    catch (error) {
        console.error(`Error occurred for ${activeRepoName}:`, error)
        errorCount++;
    }
}

console.log("-------------------------------------------")
console.log("replacement process completed.")
console.log("")
console.log("Summary:")
console.log(`  Success: ${successCount}`)
console.log(`  Errors:  ${errorCount}`)
console.log("-------------------------------------------")
