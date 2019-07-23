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
                sh 'npm run build'
            }
        }
    }
}
