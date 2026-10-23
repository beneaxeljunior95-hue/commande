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
