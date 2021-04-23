pipeline {
  agent {
    node {
      label 'front'
    }

  }
  stages {
    stage('dir remove') {
      steps {
        sh 'rm -rf *'
      }
    }

  }
  environment {
    nodejs = 'tool \'nodejs\''
  }
}