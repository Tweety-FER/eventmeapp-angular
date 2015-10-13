<!doctype html>
<html lang="en">
<head>
    <title>Eventmeapp</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' rel='stylesheet' type='text/css'>
    <script type="text/javascript">
        <?php
            # Enable local use of API if it is defined in .env. If it is not default to the site domain.
            echo 'defaultDomain = "' . env('LOCAL_API', 'http://eventmeapp.com/') . '";';
        ?>
    </script>
    <script type="text/javascript" src="js/required.js.map"></script>
    <script type="text/javascript" src="js/required.js"></script>
    <script type="text/javascript" src="js/templates.js"></script>
    <script type="text/javascript" src="js/app.js.map"></script>
    <script type="text/javascript" src="js/app.js"></script>
    
    <link rel="stylesheet" type="text/css" href="css/semantic.css" />
    <link rel="stylesheet" type="text/css" href="css/app.css" />
</head>
<body ng-app="emu">

    <!-- Wait spinner -->
    <span us-spinner spinner-key="main-spinner"></span>

    <emu-navbar></emu-navbar>


  
        <emu-nag></emu-nag>
        <div ui-view class="main-content">

            <!-- Placeholder loading spinner -->
            <span us-spinner></span>
    </div>

  

    <footer class="footer navbar navbar-fixed-bottom">
        Eventmeapp &copy; 2015
    </footer>
</body>
</html>