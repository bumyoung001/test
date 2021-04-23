pipeline {
  agent any
  
  tools {nodejs 'nodejs'}
  
  stages {
    stage('dir_remove') {
      steps {
        sh 'rm -rf *'
      }
    }

    stage('node_setting') {
      steps {
        echo "${nodejs}"
        sh 'npm -v'
        sh 'node -v'
        sh 'mkdir source'
        sh 'mkdir html'
      }
    }

  }
}
