export const leaderboard1 = [];
export const timerGame1 = 2000;
export const wordsArray = [
    { word: 'livre', english: 'book', gender: 'M' },
    { word: 'maison', english: 'house', gender: 'F' },
    { word: 'chat', english: 'cat', gender: 'M' },
    { word: 'voiture', english: 'car', gender: 'F' },
    { word: 'chien', english: 'dog', gender: 'M' },
    { word: 'table', english: 'table', gender: 'F' },
    { word: 'jour', english: 'day', gender: 'M' },
    { word: 'nuit', english: 'night', gender: 'F' },
    { word: 'homme', english: 'man', gender: 'M' },
    { word: 'femme', english: 'woman', gender: 'F' },
    { word: 'enfant', english: 'child', gender: 'M' },
    { word: 'école', english: 'school', gender: 'F' },
    { word: 'temps', english: 'time', gender: 'M' },
    { word: 'année', english: 'year', gender: 'F' },
    { word: 'ami', english: 'friend', gender: 'M' },
    { word: 'amie', english: 'friend', gender: 'F' },
    { word: 'arbre', english: 'tree', gender: 'M' },
    { word: 'fleur', english: 'flower', gender: 'F' },
    { word: 'fruit', english: 'fruit', gender: 'M' },
    { word: 'fruit', english: 'result', gender: 'F' },
    { word: 'verre', english: 'glass', gender: 'M' },
    { word: 'verre', english: 'window', gender: 'F' },
    { word: 'problème', english: 'problem', gender: 'M' },
    { word: 'problème', english: 'issue', gender: 'F' },
    { word: 'travail', english: 'work', gender: 'M' },
    { word: 'travail', english: 'job', gender: 'F' },
    { word: 'endroit', english: 'place', gender: 'M' },
    { word: 'endroit', english: 'spot', gender: 'F' },
    { word: 'cause', english: 'cause', gender: 'M' },
    { word: 'cause', english: 'reason', gender: 'F' },
    { word: 'nom', english: 'name', gender: 'M' },
    { word: 'nom', english: 'noun', gender: 'F' },
    { word: 'prix', english: 'price', gender: 'M' },
    { word: 'prix', english: 'prize', gender: 'F' },
    { word: 'poisson', english: 'fish', gender: 'M' },
    { word: 'poisson', english: 'fishing', gender: 'F' },
    { word: 'oiseau', english: 'bird', gender: 'M' },
    { word: 'oiseau', english: 'bird', gender: 'F' },
    { word: 'ville', english: 'city', gender: 'M' },
    { word: 'ville', english: 'town', gender: 'F' },
    { word: 'personne', english: 'person', gender: 'M' },
    { word: 'personne', english: 'individual', gender: 'F' },
    { word: 'soir', english: 'evening', gender: 'M' },
    { word: 'soir', english: 'party', gender: 'F' },
    { word: 'cheval', english: 'horse', gender: 'M' },
    { word: 'cheval', english: 'cavalry', gender: 'F' },
    { word: 'film', english: 'film', gender: 'M' },
    { word: 'film', english: 'movie', gender: 'F' },
    { word: 'soleil', english: 'sun', gender: 'M' },
    { word: 'soleil', english: 'sunshine', gender: 'F' },
    { word: 'café', english: 'café', gender: 'M' },
    { word: 'café', english: 'coffee', gender: 'F' },
    { word: 'garçon', english: 'boy', gender: 'M' },
    { word: 'garçon', english: 'waiter', gender: 'F' },
    { word: 'monsieur', english: 'gentleman', gender: 'M' },
    { word: 'monsieur', english: 'sir', gender: 'F' },
    { word: 'madame', english: 'lady', gender: 'M' }]

    export const randomNumber = function(){
     return Math.floor(Math.random() * 57);

    }

    export const verbsArray = [ {
    infinitive: 'manger',
    present: { je: 'mange', tu: 'manges', il: 'mange', elle: 'mange', nous: 'mangeons', vous: 'mangez', ils: 'mangent', elles: 'mangent' },
    presentPerfect: { j: 'ai mangé', tu: 'as mangé', il: 'a mangé', elle: 'a mangé', nous: 'avons mangé', vous: 'avez mangé', ils: 'ont mangé', elles: 'ont mangé' },
    imperfect: { je: 'mangeais', tu: 'mangeais', il: 'mangeait', elle: 'mangeait', nous: 'mangions', vous: 'mangiez', ils: 'mangeaient', elles: 'mangeaient' },
    plusPerfect: { j: 'avais mangé', tu: 'avais mangé', il: 'avait mangé', elle: 'avait mangé', nous: 'avions mangé', vous: 'aviez mangé', ils: 'avaient mangé', elles: 'avaient mangé' },
    future: { je: 'mangerai', tu: 'mangeras', il: 'mangera', elle: 'mangera', nous: 'mangerons', vous: 'mangerez', ils: 'mangeront', elles: 'mangeront' },
    futurePerfect: { j: 'aurai mangé', tu: 'auras mangé', il: 'aura mangé', elle: 'aura mangé', nous: 'aurons mangé', vous: 'aurez mangé', ils: 'auront mangé', elles: 'auront mangé' },
    simplePast: { je: 'mangeai', tu: 'mangeas', il: 'mangea', elle: 'mangea', nous: 'mangeâmes', vous: 'mangeâtes', ils: 'mangèrent', elles: 'mangèrent' },
    pastPerfect: { j: 'avais mangé', tu: 'avais mangé', il: 'avait mangé', elle: 'avait mangé', nous: 'avions mangé', vous: 'aviez mangé', ils: 'avaient mangé', elles: 'avaient mangé' },
  },{
  infinitive: 'parler',
  present: { je: 'parle', tu: 'parles', il: 'parle', elle: 'parle', nous: 'parlons', vous: 'parlez', ils: 'parlent', elles: 'parlent' },
  presentPerfect: { j: 'ai parlé', tu: 'as parlé', il: 'a parlé', elle: 'a parlé', nous: 'avons parlé', vous: 'avez parlé', ils: 'ont parlé', elles: 'ont parlé' },
  imperfect: { je: 'parlais', tu: 'parlais', il: 'parlait', elle: 'parlait', nous: 'parlions', vous: 'parliez', ils: 'parlaient', elles: 'parlaient' },
  plusPerfect: { j: 'avais parlé', tu: 'avais parlé', il: 'avait parlé', elle: 'avait parlé', nous: 'avions parlé', vous: 'aviez parlé', ils: 'avaient parlé', elles: 'avaient parlé' },
  future: { je: 'parlerai', tu: 'parleras', il: 'parlera', elle: 'parlera', nous: 'parlerons', vous: 'parlerez', ils: 'parleront', elles: 'parleront' },
  futurePerfect: { j: 'aurai parlé', tu: 'auras parlé', il: 'aura parlé', elle: 'aura parlé', nous: 'aurons parlé', vous: 'aurez parlé', ils: 'auront parlé', elles: 'auront parlé' },
  simplePast: { je: 'parlai', tu: 'parlas', il: 'parla', elle: 'parla', nous: 'parlâmes', vous: 'parlâtes', ils: 'parlèrent', elles: 'parlèrent' },
  pastPerfect: { j: 'avais parlé', tu: 'avais parlé', il: 'avait parlé', elle: 'avait parlé', nous: 'avions parlé', vous: 'aviez parlé', ils: 'avaient parlé', elles: 'avaient parlé' },
},{
  infinitive: 'être',
  present: { je: 'suis', tu: 'es', il: 'est', elle: 'est', nous: 'sommes', vous: 'êtes', ils: 'sont', elles: 'sont' },
  presentPerfect: { j: 'ai été', tu: 'as été', il: 'a été', elle: 'a été', nous: 'avons été', vous: 'avez été', ils: 'ont été', elles: 'ont été' },
  imperfect: { je: 'étais', tu: 'étais', il: 'était', elle: 'était', nous: 'étions', vous: 'étiez', ils: 'étaient', elles: 'étaient' },
  plusPerfect: { j: 'avais été', tu: 'avais été', il: 'avait été', elle: 'avait été', nous: 'avions été', vous: 'aviez été', ils: 'avaient été', elles: 'avaient été' },
  future: { je: 'serai', tu: 'seras', il: 'sera', elle: 'sera', nous: 'serons', vous: 'serez', ils: 'seront', elles: 'seront' },
  futurePerfect: { j: 'aurai été', tu: 'auras été', il: 'aura été', elle: 'aura été', nous: 'aurons été', vous: 'aurez été', ils: 'auront été', elles: 'auront été' },
  simplePast: { je: 'fus', tu: 'fus', il: 'fut', elle: 'fut', nous: 'fûmes', vous: 'fûtes', ils: 'furent', elles: 'furent' },
  pastPerfect: { j: 'avais été', tu: 'avais été', il: 'avait été', elle: 'avait été', nous: 'avions été', vous: 'aviez été', ils: 'avaient été', elles: 'avaient été' },
},{
  infinitive: 'avoir',
  present: { je: 'ai', tu: 'as', il: 'a', elle: 'a', nous: 'avons', vous: 'avez', ils: 'ont', elles: 'ont' },
  presentPerfect: { j: 'ai eu', tu: 'as eu', il: 'a eu', elle: 'a eu', nous: 'avons eu', vous: 'avez eu', ils: 'ont eu', elles: 'ont eu' },
  imperfect: { je: 'avais', tu: 'avais', il: 'avait', elle: 'avait', nous: 'avions', vous: 'aviez', ils: 'avaient', elles: 'avaient' },
  plusPerfect: { j: 'avais eu', tu: 'avais eu', il: 'avait eu', elle: 'avait eu', nous: 'avions eu', vous: 'aviez eu', ils: 'avaient eu', elles: 'avaient eu' },
  future: { je: 'aurai', tu: 'auras', il: 'aura', elle: 'aura', nous: 'aurons', vous: 'aurez', ils: 'auront', elles: 'auront' },
  futurePerfect: { j: 'aurai eu', tu: 'auras eu', il: 'aura eu', elle: 'aura eu', nous: 'aurons eu', vous: 'aurez eu', ils: 'auront eu', elles: 'auront eu' },
  simplePast: { je: 'eus', tu: 'eus', il: 'eut', elle: 'eut', nous: 'eûmes', vous: 'eûtes', ils: 'eurent', elles: 'eurent' },
  pastPerfect: { j: 'avais eu', tu: 'avais eu', il: 'avait eu', elle: 'avait eu', nous: 'avions eu', vous: 'aviez eu', ils: 'avaient eu', elles: 'avaient eu' },
},{
  infinitive: 'pouvoir',
  present: { je: 'peux', tu: 'peux', il: 'peut', elle: 'peut', nous: 'pouvons', vous: 'pouvez', ils: 'peuvent', elles: 'peuvent' },
  presentPerfect: { j: 'ai pu', tu: 'as pu', il: 'a pu', elle: 'a pu', nous: 'avons pu', vous: 'avez pu', ils: 'ont pu', elles: 'ont pu' },
  imperfect: { je: 'pouvais', tu: 'pouvais', il: 'pouvait', elle: 'pouvait', nous: 'pouvions', vous: 'pouviez', ils: 'pouvaient', elles: 'pouvaient' },
  plusPerfect: { j: 'avais pu', tu: 'avais pu', il: 'avait pu', elle: 'avait pu', nous: 'avions pu', vous: 'aviez pu', ils: 'avaient pu', elles: 'avaient pu' },
  future: { je: 'pourrai', tu: 'pourras', il: 'pourra', elle: 'pourra', nous: 'pourrons', vous: 'pourrez', ils: 'pourront', elles: 'pourront' },
  futurePerfect: { j: 'aurai pu', tu: 'auras pu', il: 'aura pu', elle: 'aura pu', nous: 'aurons pu', vous: 'aurez pu', ils: 'auront pu', elles: 'auront pu' },
  simplePast: { je: 'pus', tu: 'pus', il: 'put', elle: 'put', nous: 'pûmes', vous: 'pûtes', ils: 'purent', elles: 'purent' },
  pastPerfect: { j: 'avais pu', tu: 'avais pu', il: 'avait pu', elle: 'avait pu', nous: 'avions pu', vous: 'aviez pu', ils: 'avaient pu', elles: 'avaient pu' },
},{
  infinitive: 'savoir',
  present: { je: 'sais', tu: 'sais', il: 'sait', elle: 'sait', nous: 'savons', vous: 'savez', ils: 'savent', elles: 'savent' },
  presentPerfect: { j: 'ai su', tu: 'as su', il: 'a su', elle: 'a su', nous: 'avons su', vous: 'avez su', ils: 'ont su', elles: 'ont su' },
  imperfect: { je: 'savais', tu: 'savais', il: 'savait', elle: 'savait', nous: 'savions', vous: 'saviez', ils: 'savaient', elles: 'savaient' },
  plusPerfect: { j: 'avais su', tu: 'avais su', il: 'avait su', elle: 'avait su', nous: 'avions su', vous: 'aviez su', ils: 'avaient su', elles: 'avaient su' },
  future: { je: 'saurai', tu: 'sauras', il: 'saura', elle: 'saura', nous: 'saurons', vous: 'saurez', ils: 'sauront', elles: 'sauront' },
  futurePerfect: { j: 'aurai su', tu: 'auras su', il: 'aura su', elle: 'aura su', nous: 'aurons su', vous: 'aurez su', ils: 'auront su', elles: 'auront su' },
  simplePast: { je: 'sus', tu: 'sus', il: 'sut', elle: 'sut', nous: 'sûmes', vous: 'sûtes', ils: 'surent', elles: 'surent' },
  pastPerfect: { j: 'avais su', tu: 'avais su', il: 'avait su', elle: 'avait su', nous: 'avions su', vous: 'aviez su', ils: 'avaient su', elles: 'avaient su' },
},{
  infinitive: 'prendre',
  present: { je: 'prends', tu: 'prends', il: 'prend', elle: 'prend', nous: 'prenons', vous: 'prenez', ils: 'prennent', elles: 'prennent' },
  presentPerfect: { j: 'ai pris', tu: 'as pris', il: 'a pris', elle: 'a pris', nous: 'avons pris', vous: 'avez pris', ils: 'ont pris', elles: 'ont pris' },
  imperfect: { je: 'prenais', tu: 'prenais', il: 'prenait', elle: 'prenait', nous: 'prenions', vous: 'preniez', ils: 'prenaient', elles: 'prenaient' },
  plusPerfect: { j: 'avais pris', tu: 'avais pris', il: 'avait pris', elle: 'avait pris', nous: 'avions pris', vous: 'aviez pris', ils: 'avaient pris', elles: 'avaient pris' },
  future: { je: 'prendrai', tu: 'prendras', il: 'prendra', elle: 'prendra', nous: 'prendrons', vous: 'prendrez', ils: 'prendront', elles: 'prendront' },
  futurePerfect: { j: 'aurai pris', tu: 'auras pris', il: 'aura pris', elle: 'aura pris', nous: 'aurons pris', vous: 'aurez pris', ils: 'auront pris', elles: 'auront pris' },
  simplePast: { je: 'pris', tu: 'pris', il: 'prit', elle: 'prit', nous: 'prîmes', vous: 'prîtes', ils: 'prirent', elles: 'prirent' },
  pastPerfect: { j: 'avais pris', tu: 'avais pris', il: 'avait pris', elle: 'avait pris', nous: 'avions pris', vous: 'aviez pris', ils: 'avaient pris', elles: 'avaient pris' },
},{
  infinitive: 'vouloir',
  present: { je: 'veux', tu: 'veux', il: 'veut', elle: 'veut', nous: 'voulons', vous: 'voulez', ils: 'veulent', elles: 'veulent' },
  presentPerfect: { j: 'ai voulu', tu: 'as voulu', il: 'a voulu', elle: 'a voulu', nous: 'avons voulu', vous: 'avez voulu', ils: 'ont voulu', elles: 'ont voulu' },
  imperfect: { je: 'voulais', tu: 'voulais', il: 'voulait', elle: 'voulait', nous: 'voulions', vous: 'vouliez', ils: 'voulaient', elles: 'voulaient' },
  plusPerfect: { j: 'avais voulu', tu: 'avais voulu', il: 'avait voulu', elle: 'avait voulu', nous: 'avions voulu', vous: 'aviez voulu', ils: 'avaient voulu', elles: 'avaient voulu' },
  future: { je: 'voudrai', tu: 'voudras', il: 'voudra', elle: 'voudra', nous: 'voudrons', vous: 'voudrez', ils: 'voudront', elles: 'voudront' },
  futurePerfect: { j: 'aurai voulu', tu: 'auras voulu', il: 'aura voulu', elle: 'aura voulu', nous: 'aurons voulu', vous: 'aurez voulu', ils: 'auront voulu', elles: 'auront voulu' },
  simplePast: { je: 'voulus', tu: 'voulus', il: 'voulut', elle: 'voulut', nous: 'voulûmes', vous: 'voulûtes', ils: 'voulurent', elles: 'voulurent' },
  pastPerfect: { j: 'avais voulu', tu: 'avais voulu', il: 'avait voulu', elle: 'avait voulu', nous: 'avions voulu', vous: 'aviez voulu', ils: 'avaient voulu', elles: 'avaient voulu' },
},{
  infinitive: 'aller',
  present: { je: 'vais', tu: 'vas', il: 'va', elle: 'va', nous: 'allons', vous: 'allez', ils: 'vont', elles: 'vont' },
  presentPerfect: { j: 'suis allé(e)', tu: 'es allé(e)', il: 'est allé', elle: 'est allée', nous: 'sommes allé(e)s', vous: 'êtes allé(e)(s)', ils: 'sont allés', elles: 'sont allées' },
  imperfect: { je: 'allais', tu: 'allais', il: 'allait', elle: 'allait', nous: 'allions', vous: 'alliez', ils: 'allaient', elles: 'allaient' },
  plusPerfect: { j: 'étais allé(e)', tu: 'étais allé(e)', il: 'était allé', elle: 'était allée', nous: 'étions allé(e)s', vous: 'étiez allé(e)(s)', ils: 'étaient allés', elles: 'étaient allées' },
  future: { je: 'irai', tu: 'iras', il: 'ira', elle: 'ira', nous: 'irons', vous: 'irez', ils: 'iront', elles: 'iront' },
  futurePerfect: { j: 'serai allé(e)', tu: 'seras allé(e)', il: 'sera allé', elle: 'sera allée', nous: 'serons allé(e)s', vous: 'serez allé(e)(s)', ils: 'seront allés', elles: 'seront allées' },
  simplePast: { je: 'allai', tu: 'allas', il: 'alla', elle: 'alla', nous: 'allâmes', vous: 'allâtes', ils: 'allèrent', elles: 'allèrent' },
  pastPerfect: { j: 'étais allé(e)', tu: 'étais allé(e)', il: 'était allé', elle: 'était allée', nous: 'étions allé(e)s', vous: 'étiez allé(e)(s)', ils: 'étaient allés', elles: 'étaient allées' },
},{
  infinitive: 'faire',
  present: { je: 'fais', tu: 'fais', il: 'fait', elle: 'fait', nous: 'faisons', vous: 'faites', ils: 'font', elles: 'font' },
  presentPerfect: { j: 'ai fait', tu: 'as fait', il: 'a fait', elle: 'a fait', nous: 'avons fait', vous: 'avez fait', ils: 'ont fait', elles: 'ont fait' },
  imperfect: { je: 'faisais', tu: 'faisais', il: 'faisait', elle: 'faisait', nous: 'faisions', vous: 'faisiez', ils: 'faisaient', elles: 'faisaient' },
  plusPerfect: { j: 'avais fait', tu: 'avais fait', il: 'avait fait', elle: 'avait fait', nous: 'avions fait', vous: 'aviez fait', ils: 'avaient fait', elles: 'avaient fait' },
  future: { je: 'ferai', tu: 'feras', il: 'fera', elle: 'fera', nous: 'ferons', vous: 'ferez', ils: 'feront', elles: 'feront' },
  futurePerfect: { j: 'aurai fait', tu: 'auras fait', il: 'aura fait', elle: 'aura fait', nous: 'aurons fait', vous: 'aurez fait', ils: 'auront fait', elles: 'auront fait' },
  simplePast: { je: 'fis', tu: 'fis', il: 'fit', elle: 'fit', nous: 'fîmes', vous: 'fîtes', ils: 'firent', elles: 'firent' },
  pastPerfect: { j: 'avais fait', tu: 'avais fait', il: 'avait fait', elle: 'avait fait', nous: 'avions fait', vous: 'aviez fait', ils: 'avaient fait', elles: 'avaient fait' },
}]