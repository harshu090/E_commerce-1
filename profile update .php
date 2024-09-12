<?php
session_start();
include 'db_connect.php'; // Include your database connection

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve form data
    $fullName = $_POST['full_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $userId = $_SESSION['user_id']; // Assume you store the user ID in session

    // Update profile in the database
    $sql = "UPDATE users SET full_name=?, email=?, phone=?, address=? WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssi", $fullName, $email, $phone, $address, $userId);

    if ($stmt->execute()) {
        // Redirect to the profile page to show updated data
        header("Location: profile.php");
        exit();
    } else {
        echo "Error updating profile: " . $stmt->error;
    }
}
?>
