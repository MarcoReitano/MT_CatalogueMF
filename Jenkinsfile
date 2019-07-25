pipeline {
    agent none
    stages {

        stage('Build') {
            agent {
                docker { image 'node:10-alpine' }
            }
            steps {
                sh 'node --version'
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Build Docker Image') {
            agent any
            steps {
                sh 'docker build -t marcoreitano/artistmf .'
                sh 'docker tag marcoreitano/artitstmf dockernexus.marcoreitano.dev/artistmf'
                sh 'docker push dockernexus.marcoreitano.dev/artistmf'
            }
        }
    }
}
