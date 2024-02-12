<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];

    // Validation de l'adresse e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Adresse e-mail invalide";
    } else {
        // Traitement de l'abonnement à la newsletter (à compléter)
        echo "Merci de vous être abonné à notre newsletter !";
    }
}
?>
