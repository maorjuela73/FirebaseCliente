console.log("Script externo cargado");

        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyBMDVUi7BlRA8WCfVQMQTtSn5h_pE2YwzY",
            authDomain: "testproject-32acc.firebaseapp.com",
            databaseURL: "https://testproject-32acc.firebaseio.com",
            projectId: "testproject-32acc",
            storageBucket: "testproject-32acc.appspot.com",
            messagingSenderId: "351152642679",
            appId: "1:351152642679:web:d4bdbf0b384dbd9589c472",
            measurementId: "G-RVYXPQ6ZKW"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);

        var database = firebase.database();

        function writeNewVisit(latitude, longitude, siteName, datetime) {
            // A post entry.
            var visitData = {
                latitude: latitude,
                longitude: longitude,
                siteName: siteName,
                datetime: datetime
            };

            // Get a key for a new Post.
            var newVisitKey = firebase.database().ref().child('visits').push().key;

            // Write the new post's data simultaneously in the posts list and the user's post list.
            var updates = {};
            updates['/visits/' + newVisitKey] = visitData;

            return firebase.database().ref().update(updates);
        }






        var x = document.getElementById("demo");

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
                navigator.geolocation.getCurrentPosition(writeInDatabase);
            } else { 
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        }

        function showPosition(position) {
            x.innerHTML = "Latitude: " + position.coords.latitude + 
            "<br>Longitude: " + position.coords.longitude;
        }

        function writeInDatabase(position) {
            var d = new Date();
            writeNewVisit(
                position.coords.latitude,
                position.coords.longitude,
                "SITE B",
                d
            );
        }
