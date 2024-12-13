import * as dotenv from "dotenv";
import Web3 from "web3";

dotenv.config();

const infuraApiKey = process.env.INFURA_API_KEY;

// Vérifie si la clé est correctement récupérée
if (!infuraApiKey) {
  throw new Error("API Key Infura manquante dans le fichier .env");
}

const web3 = new Web3(`https://mainnet.infura.io/v3/${infuraApiKey}`);

web3.eth
  .getBlockNumber()
  .then((blockNumber: bigint) => {
    console.log("Dernier numéro de bloc Ethereum :", blockNumber.toString());
  })
  .catch((error: Error) => {
    console.error("Erreur de connexion à Web3 :", error.message);
  });
