<!DOCTYPE html>
<html>
<head>
    <title>Event Example 2</title>
    <style>
        #box {
            width: 200px;
            height: 200px;
            background-color: blue;
            text-align: center;
            line-height: 200px;
            color: white;
            font-size: 20px;
            margin-top: 50px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <h2>Mouse Events Example</h2>

    <div id="box">Hover / Double Click</div>

    <script>
        let box = document.getElementById("box");

        // Mouse Over Event
        box.addEventListener("mouseover", function() {
            box.style.backgroundColor = "green";
            box.innerText = "Mouse Over";
        });

        // Mouse Out Event
        box.addEventListener("mouseout",
