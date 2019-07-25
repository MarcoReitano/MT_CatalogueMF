pipeline {
    agent {
        docker { image 'node:10-alpine' }
    }
    stages {

        stage('Environment') {
            steps {
                sh 'node --version'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t marcoreitano/artistmf .'
            }
        }
    }
}
