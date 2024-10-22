pipeline {
    agent {
        docker {
            image 'node:18' // Замініть на ваш Docker-образ
            args '-p 8000:8000' // Параметри запуску контейнера
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install' // Встановлення залежностей
            }
        }
        stage('Test') {
            steps {
                sh 'npx jest' // Запуск тестів
            }
        }
        stage('Deploy') {
            steps {
                // Наприклад, команда для запуску сервера
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
