import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed(' ERROR ') + '  ' + error);
}

const printSuccess = (masage) => {
  console.log(chalk.bgGreen(' SUCCESS ') + '  ' + masage);
}

const printHelp = (error) => {
  console.log( dedent`${chalk.bgCyan(' HELP ')}  
  Без параметров - вывод погоды
  -s  [CITY] для установки города
  -h для вывода помощи
  -t [API_KEY]  для сохраненя токена
  `);
}

export {printError, printSuccess, printHelp}