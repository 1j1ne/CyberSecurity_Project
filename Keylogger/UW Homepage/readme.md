# Keylogger Project

A cybersecurity learning project to understand how keylogger works in real life. 

## Overview

This project demonstrates how keyboard input from a webpage can be captured using JavaScript and transmitted to a Flask server. 

The purpose of the project is to learn:
    - JavaScript event listeners
    - Browser-to-server communication
    - HTTP POST requests
    - Flask 
    - Social engineering

## How It Works
User
 │
 │ Keyboard Input 
 ▼ 
 Test Webpage 
 │ 
 │ JavaScript Event Listener 
 ▼ 
 JavaScript
 │ 
 │ HTTP POST 
 ▼ 
 Flask Server
 │ 
 ▼ 
 Terminal / Log


### 1. Frontend

The test webpage is a University of Washington login page where it contains input feilds and keyboard events can be detected using JavaScript. It is intended to be the same as real webpage to imitate how real hackers could use keylogger with social engineering.

JavaScript listens for specific browser events and prepares the data to be sent to the backend.

### 2. Communication

The brower uses the Javascript fetch() API to send an HTTP POST request to the Flask server. The information is transmitted using Json.

### 3. Backend

Flask provides an endpoint that receives the request from the brower. The server processes the received JSON and displays the test information in the server logs. The test website and Flask backend are deployed on Render, allowing the application to receive requests from devices outside my local network. Unlike running Flask on localhost, the deployed server is accessible over the internet, so JSON data can be sent to the Render-hosted server from different networks. 