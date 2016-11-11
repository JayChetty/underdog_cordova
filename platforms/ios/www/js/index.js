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
        console.log('initializing')
        window.isCordovaApp = true
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        console.log("on device ready")
        var config = {
          apiKey: "AIzaSyAzIdDH3G6RkLKFNkZP3xjRnQgjmSD6Upc",
          authDomain: "underdog-messenger.firebaseapp.com",
          databaseURL: "https://underdog-messenger.firebaseio.com",
          storageBucket: "underdog-messenger.appspot.com",
          messagingSenderId: "861414133939"
        };
        firebase.initializeApp(config);
        window.start();
    }
};

app.initialize();
