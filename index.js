//Tache 01
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 1 seconde
        console.log(value); 
    }
}

//Tache 02
async function waitCall() {
    const fetchData = () => {
        return new Promise(resolve => {
            setTimeout(() => resolve("Données récupérées depuis l'API"), 2000); 
        });
    };
    // Attendre la résolution de la promesse
    const data = await fetchData();

    console.log(data);
}
waitCall();

//Tache 04
async function concurrentRequests() {
    const fetchData = (id) => {
        return new Promise(resolve => {
            setTimeout(() => resolve(`Données de l'API ${id}`), Math.random() * 2000 + 1000); // Délai aléatoire entre 1 et 3 secondes
        });
    };

    try {
        // Lancer deux appels simultanés
        const [result1, result2] = await Promise.all([fetchData(1), fetchData(2)]);
        // Enregistrer les résultats combinés
        console.log("Résultats combinés :", result1, result2);
    } catch (error) {
        console.error("Erreur lors des requêtes simultanées :", error);
    }
}
concurrentRequests();

