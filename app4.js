<!DOCTYPE html>
<html>
<head>
    <title>Event Example</title>
</head>
<body>

    <h2>Event Handling Example</h2>

    <input type="text" id="nameInput" placeholder="Enter your name">
    <button id="btn">Click Me</button>

    <p id="output"></p>

    <script>
        // Button click event
        document.getElementById("btn").addEventListener("click", function() {
            let name = document.getElementById("nameInput").value;
            document.getElementById("output").innerText = "Hello " + name;
        });

        // Keyboard event (when key is pressed)
        document.getElementById("nameInput").addEventListener("keyup", function(event) {
            if (event.key === "Enter") {
                document.getElementById("btn").click();
            }
        });
    </script>

</body>
</html>
