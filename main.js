/**
 * =========================
 * VÝPOČET ČASU
 * =========================
 * Vrátí náhodný prvek z pole.
 * @template T
 * @param {T[]} arr
 * @returns {T}
 */
function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Zaokrouhlí číslo na daný počet desetinných míst.
 * @param {number} num
 * @param {number} decimals
 * @returns {number}
 */
function round(num, decimals) {
  return Number(num.toFixed(decimals));
}

/**
 * Vypočítá průměr z pole čísel.
 * @param {number[]} arr
 * @returns {number}
 */
function avg(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

/**
 * Vrátí medián seřazeného pole.
 * @param {number[]} sorted
 * @returns {number}
 */
function median(sorted) {
  const mid = Math.floor(sorted.length / 2);

  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
}

/**
 * Spočítá výskyty hodnoty v poli.
 * @param {Array} arr
 * @param {*} value
 * @returns {number}
 */
function countBy(arr, value) {
  return arr.filter(x => x === value).length;
}

/**
 * Spočítá věk z ISO data narození.
 * @param {string} isoDate
 * @returns {number}
 */
function getAge(isoDate) {
  const birth = new Date(isoDate);
  const diff = Date.now() - birth.getTime();
  return Math.floor(diff / (365.25 * 24 * 60 * 60 * 1000));
}

/**
 * Vrátí náhodné datum narození mezi věkovým rozmezím.
 * @param {number} minAge
 * @param {number} maxAge
 * @returns {string}
 */
function randomISODateBetweenAges(minAge, maxAge) {
  const now = Date.now();
  const msInYear = 365.25 * 24 * 60 * 60 * 1000;

  const minTime = now - maxAge * msInYear;
  const maxTime = now - minAge * msInYear;

  const randomTime = minTime + Math.random() * (maxTime - minTime);

  return new Date(randomTime).toISOString();
}

/**
 * =========================
 * ZDROJE DAT
 * =========================
 */

// výpis 50 jmén pro obě pohlaví
// zdroj jmén "www.rodina.cz/scripts/jmena/default.asp"
const firstNames = {
  male: ["Aleš", "Alexandr", "Alois", "Andrej", "Artuš", "Bartoloměj", "Bernard", "Bedřich", "Bohumil", "Bořek", "Cecil", "Čeněk", "Čestmír", "Dalimil", "Daniel", "David", "Dominik", "Edvard", "Emanuel", "Emil", "Evžen", "Filip", "František", "Hynek", "Ivan", "Jakub", "Jan", "Jaromír", "Josef", "Karel", "Kryštof", "Ladislav", "Libor", "Luděk", "Lukáš", "Marek", "Martin", "Matěj", "Melichar", "Michal", "Miloš", "Mirek", "Ondřej", "Patrik", "Pavel", "Prokop", "Radek", "Radovan", "Richard", "Sebastián", "Tibor", "Tomáš", "Václav"],
  female: ["Adéla", "Alice", "Alžběta", "Aneta", "Bohuslava", "Božena", "Dagmar", "Daniela", "Denisa", "Edita", "Eliška", "Eva", "Františka", "Gabriela", "Gréta", "Hana", "Helena", "Iva", "Irena", "Iveta", "Jana", "Jarmila", "Jaroslava", "Jiřina", "Karolína", "Kateřina", "Klára", "Kristýna", "Leontýna", "Libuše", "Ludmila", "Magdaléna", "Marie", "Michaela", "Mirka", "Monika", "Naďa", "Natálie", "Nela", "Nikol", "Olga", "Pavla", "Petra", "Radka", "Roxana", "Simona", "Šárka", "Tereza", "Veronika", "Věra", "Vilma", "Zuzana", "Žofie"]
};

// některé variace ženských příjmení vyžadují smazání posledního písmene nebo jiné úpravy, je nejednodušší je prostě vypsat znovu upravenně, nejspíše i přehlednější
// zdroj příjmení "cs.wikipedia.org/wiki/Seznam_českých_příjmení"
const surnames = {
  male: ["Anděl", "Bárta", "Blažek", "Bednář", "Cina", "Čapek", "Čermák", "Drápal", "Dobrý", "Dvořák", "Erben", "Florián", "Hašek", "Hejtmánek", "Kopeček", "Kratochvil", "Liška", "Mikeš", "Mrkvička", "Majer", "Navrátil", "Novák", "Nedvěd", "Novotný", "Peřina", "Pavel", "Remeš", "Stejskal", "Sobota", "Sláma", "Sýkora", "Staněk", "Šťastný", "Štefan", "Šmída", "Špaček", "Švec", "Tesař", "Truhlář", "Tvrdý", "Vágner", "Vašek", "Vydra", "Vavřina", "Vystrčil", "Zavřel", "Závodný", "Zach", "Zich", "Zelenka", "Zvolánek", "Žáček", "Žák"],
  female: ["Andělová", "Bártová", "Blažková", "Bednářová", "Cinová", "Čapková", "Čermáková", "Drápalová", "Dobrá", "Dvořáková", "Erbenová", "Floriánová", "Hašková", "Hejtmánková", "Kopečková", "Kratochvilová", "Lišková", "Mikešová", "Mrkvičková", "Majerová", "Navrátilová", "Nováková", "Nedvědová", "Novotná", "Peřinová", "Pavlová", "Remešová", "Stejskalová", "Sobotová", "Slámová", "Sýkorová", "Staňková", "Šťastná", "Štefanová", "Šmídová", "Špačková", "Švecová", "Tesařová", "Truhlářová", "Tvrdá", "Vágnerová", "Vašková", "Vydrová", "Vavřinová", "Vystrčilová", "Zavřelová", "Závodná", "Zachová", "Zichová", "Zelenková", "Zvolánková", "Žáčková", "Žáková"]
}; 

// pracovní úvazek
const workloadOptions = [10, 20, 30, 40];

/**
 * =========================
 * GENERÁTOR
 * =========================
 * @typedef {Object} Employee
 * @property {string} name
 * @property {string} surname
 * @property {"male"|"female"} gender
 * @property {string} birthDate
 * @property {number} workload
 */

/**
 * Vygeneruje náhodného zaměstnance.
 * @param {number} minAge
 * @param {number} maxAge
 * @returns {Employee}
 */
function randomPerson(minAge, maxAge) {
  const gender = Math.random() < 0.5 ? "male" : "female";

  return {
    name: pickRandom(firstNames[gender]),
    surname: pickRandom(surnames[gender]),
    gender,
    birthDate: randomISODateBetweenAges(minAge, maxAge),
    workload: pickRandom(workloadOptions)
  };
}

/**
 * Generuje seznam zaměstnanců.
 * @param {{count?: number, age?: {min?: number, max?: number}}} dtoIn
 * @returns {Employee[]}
 */
export function generateEmployeeData(dtoIn = {}) {
  const count = dtoIn.count ?? 50;
  const minAge = dtoIn.age?.min ?? 18;
  const maxAge = dtoIn.age?.max ?? 60;

  if (minAge > maxAge) {
    throw new Error("minAge cannot be greater than maxAge");
  }

  return Array.from({ length: count }, () =>
    randomPerson(minAge, maxAge)
  );
}

/**
 * =========================
 * STATISTIKY
 * =========================
 * Vypočítá statistiky zaměstnanců.
 * @param {Employee[]} employees
 * @returns {Object}
 */
export function getEmployeeStatistics(employees) {
  const ages = employees.map(e => getAge(e.birthDate));
  const workloads = employees.map(e => e.workload);

  const females = employees.filter(e => e.gender === "female");

  const femaleAvgWorkload =
    females.length === 0
      ? 0
      : females.reduce((sum, e) => sum + e.workload, 0) /
        females.length;

  const sortedAges = [...ages].sort((a, b) => a - b);
  const sortedWorkloads = [...workloads].sort((a, b) => a - b);

  return {
    totalEmployees: employees.length,

    workloadCounts: {
      10: countBy(workloads, 10),
      20: countBy(workloads, 20),
      30: countBy(workloads, 30),
      40: countBy(workloads, 40)
    },

    averageAge: round(avg(ages), 1),
    minAge: Math.min(...ages),
    maxAge: Math.max(...ages),
    medianAge: median(sortedAges),

    medianWorkload: median(sortedWorkloads),

    averageFemaleWorkload: round(femaleAvgWorkload, 1),

    employeesSortedByWorkload: [...employees].sort(
      (a, b) => a.workload - b.workload
    )
  };
}

/**
 * =========================
 * MAIN
 * =========================
 * Hlavní funkce programu.
 * @param {{count?: number, age?: {min?: number, max?: number}}} dtoIn
 * @returns {{employees: Employee[], statistics: Object}}
 */
export function main(dtoIn = {}) {
  const employees = generateEmployeeData(dtoIn);
  const statistics = getEmployeeStatistics(employees);

  return {
    employees,
    statistics
  };
}
