<?php
session_start();
session_unset(); // Remove all session variables
session_destroy(); // Destroy the session

// Redirect to the home page
header("Location: index.html");
exit();
?>
