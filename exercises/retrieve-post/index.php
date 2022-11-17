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
    <title>Riddle Calendar - Mathilde & Owen</title>
</head>
<body>

<div class="container">
    <div class="row">
        <div id="test" class="col-sm-8">
        <h3 class="calendarTitle">Calendar Riddle</h3>
            <div class="calendarContainer">
                <div class="calendar">
                    <div class="current-date">
                        <h1>January</h1>
                        <h1>2023</h1>
                    </div>

                    <div class="current-month">
                        <ul class="week-days">
                            <li>MON</li>
                            <li>TUE</li>
                            <li>WED</li>
                            <li>THU</li>
                            <li>FRI</li>
                            <li>SAT</li>
                            <li>SUN</li>
                        </ul>
                        <div class="weeks">
                            <div class="first">
                                <span class="last-month">28</span>
                                <span class="last-month">29</span>
                                <span class="last-month">30</span>
                                <span class="last-month">31</span>
                                <span>01</span>
                                <span>02</span>
                                <span>03</span>
                            </div>
                            <div class="second">
                                <span>04</span>
                                <span id="5btn">05</span>
                                <span>06</span>
                                <span>07</span>
                                <span>08</span>
                                <span>09</span>
                                <span id="10btn">10</span>
                            </div>
                            <div class="third">
                                <span>11</span>
                                <span>12</span>
                                <span>13</span>
                                <span>14</span>
                                <span id="15btn" class="active">15</span>
                                <span>16</span>
                                <span>17</span>
                            </div>
                            <div class="fourth">
                                <span>18</span>
                                <span>19</span>
                                <span>20</span>
                                <span>21</span>
                                <span>22</span>
                                <span>23</span>
                                <span>24</span>
                            </div>
                            <div class="fifth">
                                <span>25</span>
                                <span>26</span>
                                <span>27</span>
                                <span>28</span>
                                <span>29</span>
                                <span>30</span>
                                <span>31</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="col-sm-4">
          <h3 class="logTitle">Riddle Log</h3>
            <div class="logContent" id="textDiv">
                <p id="logText">
                    <?php 
                    $theFile = fopen("files/riddles.txt", "r") or die("Unable to open file!");
                        while(!feof($theFile)) { //  While we are not at the end of the file
                        echo (fgets($theFile) . "<br/>") ; // fgets Reads a string until a new line character. Reads the next line.
                    }
                    fclose($theFile);
                    ?>
                </p>
            </div>
        </div>
    
    </div>
</div>

<?php include("modals/modal-one.php"); ?>

<script src="./js/script.js"></script>
</body>
</html>