pipeline {
    agent {
        dockerfile {
            filename 'dockerfile'  // Ensure 'dockerfile' is at the project root or specify the correct path
            additionalBuildArgs '--no-cache'  // Optional: Add build arguments (if needed)
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
