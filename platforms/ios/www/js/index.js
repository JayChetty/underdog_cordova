/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        window.isCordovaApp = true
        console.log('initializing')
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        console.log("navigator.notification", navigator.notification)
        // use this in app.js for urls and messenging
        console.log("trying to set up firebase", firebase)
        var config = {
          apiKey: "AIzaSyAzIdDH3G6RkLKFNkZP3xjRnQgjmSD6Upc",
          authDomain: "underdog-messenger.firebaseapp.com",
          databaseURL: "https://underdog-messenger.firebaseio.com",
          storageBucket: "underdog-messenger.appspot.com",
          messagingSenderId: "861414133939"
        };
        firebase.initializeApp(config);

        // FCMPlugin.getToken(
        //   function(token){
        //     console.log('got token', token)
        //     FCMPlugin.subscribeToTopic('group_1');
        //   },
        //   function(err){
        //     console.log('error retrieving token: ' + err);
        //   }
        // )


        // )
        // this.receivedEvent('deviceready');


        // console.log("window", window)

        window.start();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');
        //
        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');
        //
        // console.log('Received Event: ' + id);
    }
};

app.initialize();
