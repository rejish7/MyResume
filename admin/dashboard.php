<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio admin Dashboard - Rejish</title>
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
            <a class="navbar-brand" href="#">Portfolio Dashboard</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="dashboard.php">Dashboard</a></li>
                    <li class="nav-item"><a class="nav-link" href="add_item.php">Add Portfolio Item</a></li>
                    <li class="nav-item"><a class="nav-link" href="logout.php">Logout</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="container my-5">
        <h1 class="mb-4 text-center">Welcome, Rejish!</h1>
        <h2 class="mb-4 text-center">Your Portfolio Items</h2>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img src="assets/img/portfolio/studentpage1.jpeg" class="card-img-top" alt="Student Registration System">
                    <div class="card-body">
                        <h3 class="card-title">Student Registration System</h3>
                        <p class="card-text">A comprehensive student registration and management system.</p>
                    </div>
                    <div class="card-footer bg-transparent border-top-0">
                        <a href="edit_item.php?id=1" class="btn btn-outline-primary btn-sm me-2">Edit</a>
                        <a href="delete_item.php?id=1" class="btn btn-outline-danger btn-sm">Delete</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img src="assets/img/portfolio/portfolio-2.jpg" class="card-img-top" alt="Hospital Management System">
                    <div class="card-body">
                        <h3 class="card-title">Hospital Management System</h3>
                        <p class="card-text">An integrated hospital management and patient tracking system.</p>
                    </div>
                    <div class="card-footer bg-transparent border-top-0">
                        <a href="edit_item.php?id=2" class="btn btn-outline-primary btn-sm me-2">Edit</a>
                        <a href="delete_item.php?id=2" class="btn btn-outline-danger btn-sm">Delete</a>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card h-100 shadow-sm">
                    <img src="assets/img/portfolio/portfolio-3.jpg" class="card-img-top" alt="Ecommerce">
                    <div class="card-body">
                        <h3 class="card-title">Ecommerce</h3>
                        <p class="card-text">A full-featured ecommerce platform with modern functionalities.</p>
                    </div>
                    <div class="card-footer bg-transparent border-top-0">
                        <a href="edit_item.php?id=3" class="btn btn-outline-primary btn-sm me-2">Edit</a>
                        <a href="delete_item.php?id=3" class="btn btn-outline-danger btn-sm">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <footer class="bg-light py-4 mt-auto">
        <div class="container">
            <p class="text-center mb-0">© 2024 Rejish Portfolio. All rights reserved.</p>
        </div>
    </footer>

    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
</body>
</html>