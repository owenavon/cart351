<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
    <title>Poem Calendar - Mathilde & Owen</title>
</head>
<body>

<div class="container">
    <div class="row">
        <div id="test" class="col-sm-8">
            <div class="calendarContainer">
                <div class="calendar">
                <h3 class="calendarTitle">Poem Calendar</h3>
                    <div class="current-date">
                        <h1>January</h1>
                        <h1><a id ="downloadTxtFile" href="./files/poems.txt" download target="_blank"></a></h1>
                        <h1>2023</h1>
                    </div>

                    <div class="current-month">
                        <ul class="week-days">
                            <li>SUN</li>
                            <li>MON</li>
                            <li>TUE</li>
                            <li>WED</li>
                            <li>THU</li>
                            <li>FRI</li>
                            <li>SAT</li>
                        </ul>
                        <div class="weeks">
                            <div class="first">
                                <span>01</span>
                                <span>02</span>
                                <span>03</span>
                                <span>04</span>
                                <span id="5btn">05</span>
                                <span>06</span>
                                <span>07</span>
                            </div>
                            <div class="second">
                                <span>08</span>
                                <span id="9btn">09</span>
                                <span>10</span>
                                <span>11</span>
                                <span>12</span>
                                <span>13</span>
                                <span>14</span>
                            </div>
                            <div class="third">
                                <span id="15btn" class="active">15</span>
                                <span>16</span>
                                <span>17</span>
                                <span>18</span>
                                <span id="19btn">19</span>
                                <span>20</span>
                                <span>21</span>
                            </div>
                            <div class="fourth">
                                <span>22</span>
                                <span>23</span>
                                <span>24</span>
                                <span>25</span>
                                <span>26</span>
                                <span>27</span>
                                <span id="28btn">28</span>
                            </div>
                            <div class="fifth">
                                <span>29</span>
                                <span>30</span>
                                <span>31</span>
                                <span class="next-month">01</span>
                                <span class="next-month">02</span>
                                <span class="next-month">03</span>
                                <span class="next-month">04</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="col-sm-4">
            <div class="logContainer">
          
            <div class="logContent" id="textDiv">
            <h3 class="logTitle">Poem Log</h3>
                <p id="logText"></p>
            </div>
        </div>
    </div>
    
    </div>
</div>

<?php include("modals/modal-one.php"); ?>
<?php include("modals/modal-two.php"); ?>
<?php include("modals/modal-three.php"); ?>
<?php include("modals/modal-four.php"); ?>
<?php include("modals/modal-five.php"); ?>

<script src="./js/script.js"></script>
</body>
</html>