pipeline {
  agent any
  stages {
    stage('dir_remove') {
      steps {
        sh 'rm -rf *'
      }
    }

    stage('node_setting') {
      steps {
        sh 'npm -v'
        sh 'node -v'
        sh 'mkdir source'
        sh 'mkdir html'
      }
    }
  }
  tools {
    nodejs 'nodejs'
  }
}
