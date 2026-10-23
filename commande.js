const Nom_du_client = "junior";
const Nom_du_produit = "portable";
const Prix_unitaire = 29000;
const Quantité = 2;
const frais_de_livraison = 5000;
const taux_de_tva = 18;

const Montant_des_produits = Prix_unitaire * Quantité;
const TVA = (Montant_des_produits * taux_de_tva) / 100;
const Montant_total_TTC = Montant_des_produits + TVA;
const Montant_total_a_payer = Montant_total_TTC + frais_de_livraison;
const prix_moyen_par_produit_tva_comprise = Montant_total_TTC / Quantité;

console.log("===== REÇU DE COMMANDE =====");
console.log("Client :", Nom_du_client);
console.log("Produit :", Nom_du_produit);
console.log("Prix unitaire :", Prix_unitaire, "FCFA");
console.log("Quantité :", Quantité);
console.log("");
console.log("Montant des produits :", Montant_des_produits, "FCFA");
console.log("TVA (" + taux_de_tva + "%) :", TVA, "FCFA");
console.log("Montant TTC :", Montant_total_TTC, "FCFA");
console.log("Livraison :", frais_de_livraison, "FCFA");
console.log("TOTAL À PAYER :", Montant_total_a_payer, "FCFA");
console.log("");
console.log(
  "Prix moyen TTC par produit :",
  prix_moyen_par_produit_tva_comprise,
  "FCFA"
);