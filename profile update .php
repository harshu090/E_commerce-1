<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Sanitize and validate inputs
    $full_name = htmlspecialchars($_POST['full_name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $address = htmlspecialchars($_POST['address']);

    // Save details to session
    $_SESSION['user'] = [
        'full_name' => $full_name,
        'email' => $email,
        'phone' => $phone,
        'address' => $address,
    ];

    // Redirect to profile page with success message
    header("Location: profile.html?status=success");
    exit();
}
?>
