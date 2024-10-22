pipeline {
    agent {
        docker {
            image 'node:18' // Specify the Docker image to use
            args '-p 8001:8000' // Parameters for running the container
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install' // Install dependencies
            }
        }
        stage('Test') {
            steps {
                sh 'npm test' // Run tests using the default script in package.json (adjust if necessary)
            }
        }
        stage('Deploy') {
            steps {
                // Deploy the application, example running the server
                sh 'node server.js'
            }
        }
    }
    post {
        always {
            echo 'Pipeline completed'
        }
    }
}
