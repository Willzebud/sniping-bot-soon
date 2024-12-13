require("dotenv").config();
const Web3 = require("web3");

// Récupère les variables d'environnement
const infuraApiKey = process.env.INFURA_API_KEY || "fake_infura_key";

// Initialise Web3 avec un HttpProvider
const provider = new Web3.providers.HttpProvider(
  `https://mainnet.infura.io/v3/${infuraApiKey}`
);
const web3 = new Web3(provider);

// Teste la connexion en récupérant le dernier numéro de bloc
web3.eth
  .getBlockNumber()
  .then((blockNumber) => {
    console.log("Dernier numéro de bloc Ethereum :", blockNumber);
  })
  .catch((error) => {
    console.error("Erreur de connexion à Web3 :", error.message);
  });
